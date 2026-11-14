import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3();
const _n = new THREE.Vector3();

// Material with optional world-space UV projection (uvs = metres per texture tile)
export function std(o = {}, uvs = 0) {
  const { uvs: _, ...rest } = o;
  const m = new THREE.MeshStandardMaterial({ roughness: 0.85, ...rest });
  m.userData.uvs = uvs;
  return m;
}

function worldUV(g, s) {
  const pos = g.attributes.position, nor = g.attributes.normal, uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    _n.fromBufferAttribute(nor, i);
    const ax = Math.abs(_n.x), ay = Math.abs(_n.y), az = Math.abs(_n.z);
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    let u, v;
    if (ay >= ax && ay >= az) { u = x; v = z; } else if (ax >= az) { u = z; v = y; } else { u = x; v = y; }
    uv[i * 2] = u / s; uv[i * 2 + 1] = v / s;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

const keyMats = new Map();
function keyed(mat, key) {
  const id = mat.uuid + '|' + key;
  if (!keyMats.has(id)) { const c = mat.clone(); c.userData = { ...mat.userData, e0: c.emissive.clone(), i0: c.emissiveIntensity }; keyMats.set(id, c); }
  return keyMats.get(id);
}

export class Builder {
  constructor() { this.groups = new Map(); }
  // place geometry: position, rotation (Euler, order), scale
  add(geo, mat, key, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, order = 'XYZ', sx = 1, sy = 1, sz = 1) {
    _e.set(rx, ry, rz, order); _q.setFromEuler(_e);
    _m.compose(_p.set(x, y, z), _q, _s.set(sx, sy, sz));
    return this.addM(geo, mat, key, _m);
  }
  addM(geo, mat, key, matrix) {
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    g.applyMatrix4(matrix);
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.normal) g.computeVertexNormals();
    if (mat.userData.uvs) worldUV(g, mat.userData.uvs);
    else if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.clearGroups();
    const id = mat.uuid + '|' + (key || '');
    let e = this.groups.get(id);
    if (!e) { e = { mat, key, geos: [] }; this.groups.set(id, e); }
    e.geos.push(g);
    return g;
  }
  build(parent, reg, solids, { cast = true, receive = true } = {}) {
    const out = [];
    for (const e of this.groups.values()) {
      const mat = e.key ? keyed(e.mat, e.key) : e.mat;
      const mesh = new THREE.Mesh(mergeGeometries(e.geos), mat);
      mesh.castShadow = cast && !mat.userData.noCast; mesh.receiveShadow = receive;
      if (e.key) { mesh.userData.k = e.key; (reg[e.key] = reg[e.key] || []).push(mesh); }
      if (solids && !mat.userData.noSolid) solids.push(mesh);
      parent.add(mesh); out.push(mesh);
    }
    this.groups.clear();
    return out;
  }
}

// ---------- shape helpers ----------
export function archShape(w, h) {
  const s = new THREE.Shape(), r = w / 2;
  s.moveTo(-r, 0); s.lineTo(r, 0); s.lineTo(r, h - r); s.absarc(0, h - r, r, 0, Math.PI, false); s.lineTo(-r, 0);
  return s;
}
export function archPath(w, h) {
  const p = new THREE.Path(), r = w / 2;
  p.moveTo(-r, 0); p.lineTo(r, 0); p.lineTo(r, h - r); p.absarc(0, h - r, r, 0, Math.PI, false); p.lineTo(-r, 0);
  return p;
}
export function ring(w, h, t, depth, curve = 16) {
  const s = archShape(w + t * 2, h + t); s.holes.push(archPath(w, h));
  return new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false, curveSegments: curve });
}
export function archSolid(w, h, depth, curve = 16) {
  return new THREE.ExtrudeGeometry(archShape(w, h), { depth, bevelEnabled: false, curveSegments: curve });
}
export function triPrism(hw, rise, depth) {
  const s = new THREE.Shape([new THREE.Vector2(-hw, 0), new THREE.Vector2(hw, 0), new THREE.Vector2(0, rise)]);
  return new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false });
}
// tapered cylinder between two points
const UP = new THREE.Vector3(0, 1, 0);
export function segment(a, b, ra, rb, radial = 7) {
  const d = new THREE.Vector3().subVectors(b, a), len = d.length();
  const g = new THREE.CylinderGeometry(rb, ra, len, radial, 1, false);
  _q.setFromUnitVectors(UP, d.normalize());
  _m.compose(_p.addVectors(a, b).multiplyScalar(0.5), _q, _s.set(1, 1, 1));
  g.applyMatrix4(_m);
  return g;
}
