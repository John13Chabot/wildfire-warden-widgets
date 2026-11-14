import * as THREE from 'three';
import { Builder, std, segment } from './build.js';
import * as T from './tex.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const smooth = (v) => (v <= 0 ? 0 : v >= 1 ? 1 : v * v * (3 - 2 * v));

// ---------- terrain height ----------
export function offPad(x, z) { return Math.max(-5 - x, -9.3 - z, z - 14, x - 17, 0); }
export function hgt(x, z) {
  let y = 0;
  const dl = -5 - x, db = -9.3 - z, df = z - 14, dr = x - 17;
  if (dl > 0) y -= Math.min(dl, 20) * 0.5 - Math.max(0, dl - 20) * 0.05;
  if (db > 0) y += 1.3 + Math.min(db, 24) * 0.36;
  if (df > 0) y -= df * 0.1;
  if (dr > 0) y += dr * 0.16;
  if (z < -34) y += (-34 - z) * 0.55 * (0.6 + 0.6 * T.fbm(x * 0.02 + 3, z * 0.02, 3));
  const o = offPad(x, z);
  return y + (T.fbm(x * 0.06 + 10, z * 0.06, 4) - 0.5) * 3.2 * smooth(o / 6) + (T.vnoise(x * 0.4, z * 0.4) - 0.5) * 0.25 * smooth(o / 3);
}

// lumpy organic blob (shared by shrubs, canopies, rocks)
const blobCache = new Map();
export function blob(r, seed = 0, detail = 2, amp = 0.28) {
  const key = r.toFixed(2) + '|' + (seed % 7 | 0) + '|' + detail + '|' + amp;
  if (blobCache.has(key)) return blobCache.get(key);
  const g = new THREE.IcosahedronGeometry(1, detail), p = g.attributes.position, s = (seed % 7 | 0) * 3.1;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const n = T.fbm(x * 1.6 + s + y * 0.7, z * 1.6 - s + y * 1.3, 3);
    const k = r * (1 + (n - 0.5) * 2 * amp);
    p.setXYZ(i, x * k, y * k, z * k);
  }
  g.computeVertexNormals(); blobCache.set(key, g); return g;
}
function colorize(g, base, lift = 0.18, jitter = 0.06) {
  g = g.index ? g.toNonIndexed() : g.clone();
  const p = g.attributes.position, c = new Float32Array(p.count * 3), col = new THREE.Color(base), t = new THREE.Color();
  g.computeBoundingBox(); const y0 = g.boundingBox.min.y, y1 = g.boundingBox.max.y;
  const j = (T.rnd() - 0.5) * jitter;
  for (let i = 0; i < p.count; i++) {
    const h = (p.getY(i) - y0) / (y1 - y0 || 1);
    t.copy(col).offsetHSL(0, 0, -lift * 0.9 + h * lift * 1.4 + j);
    c[i * 3] = t.r; c[i * 3 + 1] = t.g; c[i * 3 + 2] = t.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return g;
}
const place = (g, x, y, z, sx = 1, sy = 1, sz = 1, ry = 0) => { g = g.clone(); g.applyMatrix4(new THREE.Matrix4().compose(V(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), V(sx, sy, sz))); return g; };

export function buildWorld(scene, { small }) {
  // ---------- terrain ----------
  const S = 220, N = small ? 120 : 160;
  const tg = new THREE.PlaneGeometry(S, S, N, N); tg.rotateX(-Math.PI / 2);
  const p = tg.attributes.position, col = new Float32Array(p.count * 3);
  const lawn = new THREE.Color('#5d7d3c'), lawn2 = new THREE.Color('#4c6c33'), dry = new THREE.Color('#b59a5e'), dry2 = new THREE.Color('#8f7a46'), chap = new THREE.Color('#5e6638'), t = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i); p.setY(i, hgt(x, z));
    const o = offPad(x, z), n = T.fbm(x * 0.05, z * 0.05, 4), m = T.fbm(x * 0.15 + 5, z * 0.15, 3);
    t.copy(lawn).lerp(lawn2, (Math.sin(x * 1.1) * 0.5 + 0.5) * 0.35 + m * 0.3);
    const wild = new THREE.Color().copy(dry).lerp(dry2, m).lerp(chap, smooth((n - 0.5) * 3));
    t.lerp(wild, smooth(o / 2.2));
    col[i * 3] = t.r; col[i * 3 + 1] = t.g; col[i * 3 + 2] = t.b;
  }
  tg.setAttribute('color', new THREE.BufferAttribute(col, 3)); tg.computeVertexNormals();
  const det = T.lawnDetail(); det.repeat.set(70, 70);
  const terr = new THREE.Mesh(tg, new THREE.MeshStandardMaterial({ vertexColors: true, map: det, roughness: 1 }));
  terr.receiveShadow = true; scene.add(terr);

  // ---------- hardscape ----------
  const B = new Builder();
  const stoneM = std({ map: T.stone(), roughness: 0.95 }, 3.2);
  const castM = std({ color: '#d9ccb0', map: T.stucco(), roughness: 0.9 }, 1.3);
  const gravelM = std({ color: '#c9b79a', map: T.gravel(), roughness: 1 }, 2.5);
  const paverM = std({ map: T.pavers(), roughness: 0.95 }, 1.6);
  B.add(new THREE.BoxGeometry(22.6, 2.0, 0.8), stoneM, null, 5.75, 0.55, -9.7);
  B.add(new THREE.BoxGeometry(22.8, 0.14, 0.95), castM, null, 5.75, 1.6, -9.7);
  B.add(new THREE.BoxGeometry(6.6, 0.06, 11.5), gravelM, null, 9.5, 0.03, 9);
  for (const x of [6.15, 12.85]) B.add(new THREE.BoxGeometry(0.2, 0.1, 11.5), paverM, null, x, 0.05, 9);
  B.add(new THREE.BoxGeometry(1.5, 0.06, 7.5), paverM, null, 1.5, 0.03, 10.8);
  B.add(new THREE.BoxGeometry(5.2, 0.06, 2.2), paverM, null, -2.8, 0.03, 7.6);
  // pool with travertine coping
  const px = -2.9, pz = 11.2, pw = 4.2, pd = 3.6;
  B.add(new THREE.BoxGeometry(pw + 0.7, 0.1, 0.35), castM, null, px, 0.07, pz - pd / 2 - 0.17);
  B.add(new THREE.BoxGeometry(pw + 0.7, 0.1, 0.35), castM, null, px, 0.07, pz + pd / 2 + 0.17);
  for (const s of [-1, 1]) B.add(new THREE.BoxGeometry(0.35, 0.1, pd), castM, null, px + s * (pw / 2 + 0.17), 0.07, pz);
  B.add(new THREE.BoxGeometry(pw + 2.2, 0.05, pd + 2.2), paverM, null, px, 0.025, pz);
  B.build(scene, {}, null);
  const water = new THREE.Mesh(new THREE.PlaneGeometry(pw, pd), new THREE.MeshStandardMaterial({ color: '#1e7e9a', roughness: 0.04, metalness: 0.15, envMapIntensity: 2.2, emissive: '#0b3a48', emissiveIntensity: 0.6 }));
  water.rotation.x = -Math.PI / 2; water.position.set(px, 0.06, pz); scene.add(water);

  // boxwood hedges along the walk and drive
  const hedgeM = new THREE.MeshStandardMaterial({ color: '#3d5c2a', roughness: 0.95, bumpMap: T.noiseGray(128, 24, 3), bumpScale: 6 });
  const hedges = [];
  for (const x of [0.4, 2.6]) hedges.push(place(new RoundedBoxGeometry(0.55, 0.7, 5.6, 3, 0.22), x, 0.35, 11.4));
  hedges.push(place(new RoundedBoxGeometry(0.55, 0.7, 9, 3, 0.22), 13.4, 0.35, 9.6));
  const hm = new THREE.Mesh(mergeGeometries(hedges), hedgeM); hm.castShadow = hm.receiveShadow = true; scene.add(hm);

  // ---------- vegetation ----------
  const canopyM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, bumpMap: T.noiseGray(128, 32, 2), bumpScale: 1.2 });
  const oakBarkM = new THREE.MeshStandardMaterial({ map: T.oakBark(), roughness: 0.95 }); oakBarkM.map.repeat.set(2, 2);
  const eucBarkM = new THREE.MeshStandardMaterial({ map: T.eucBark(), roughness: 0.8 }); eucBarkM.map.repeat.set(1, 3);
  let can = [], oakW = [], eucW = [];
  const near = { can: [], oakW: [], eucW: [] }, far = { can: [], oakW: [], eucW: [] };
  const bucket = (x, z) => { const b = Math.hypot(x - 3, z) < 30 ? near : far; can = b.can; oakW = b.oakW; eucW = b.eucW; };

  function limb(arr, pts, r0, r1) {
    const n = pts.length - 1;
    for (let i = 0; i < n; i++) {
      const ra = r0 + (r1 - r0) * (i / n), rb = r0 + (r1 - r0) * ((i + 1) / n);
      arr.push(segment(pts[i], pts[i + 1], ra, rb, 8));
      if (i < n - 1) { const s = new THREE.SphereGeometry(rb, 8, 6); s.translate(pts[i + 1].x, pts[i + 1].y, pts[i + 1].z); arr.push(s); }
    }
  }
  function oak(x, z, s, opt = {}) {
    bucket(x, z);
    const o = V(x, hgt(x, z) - 0.15, z), leaf = opt.leaf || '#34451f', lift = opt.lift || 0;
    const top = V(T.rr(-0.5, 0.5) * s, (2.0 + lift * 0.6) * s, T.rr(-0.5, 0.5) * s).add(o);
    limb(oakW, [o.clone(), V(o.x + T.rr(-0.2, 0.2) * s, o.y + 1.1 * s, o.z + T.rr(-0.2, 0.2) * s), top], 0.5 * s, 0.36 * s);
    const k = opt.limbs || 5, ends = [];
    for (let i = 0; i < k; i++) {
      const ang = (i / k) * Math.PI * 2 + T.rr(-0.4, 0.4), out = T.rr(2.6, 4.2) * s * (opt.spread || 1), up = T.rr(1.0, 2.2) * s;
      const m = V(top.x + Math.cos(ang) * out * 0.45, top.y + up * 0.55 + T.rr(-0.3, 0.3) * s, top.z + Math.sin(ang) * out * 0.45);
      const e = V(top.x + Math.cos(ang) * out, top.y + up + T.rr(-0.2, 0.4) * s, top.z + Math.sin(ang) * out);
      limb(oakW, [top.clone(), m, e], 0.3 * s, 0.1 * s); ends.push(e, m);
    }
    const lobes = (c, R, n) => { for (let j = 0; j < n; j++) {
      const u = T.rnd() * 6.28, v = T.rr(-0.2, 1), d = Math.sqrt(T.rnd()) * R;
      const r = T.rr(0.55, 0.95) * s * (opt.blob || 1);
      can.push(colorize(place(blob(1, Math.floor(T.rnd() * 7), 1, 0.3), c.x + Math.cos(u) * d, c.y + v * R * 0.45, c.z + Math.sin(u) * d, r, r * 0.75, r, T.rnd() * 6), leaf, 0.26, 0.08));
    } };
    for (const e of ends) lobes(V(e.x, e.y + 0.5 * s, e.z), 1.7 * s * (opt.blob || 1), 10);
    lobes(V(top.x, top.y + 2.0 * s, top.z), 2.4 * s * (opt.blob || 1), 12);
  }
  function euc(x, z, s) {
    bucket(x, z);
    const o = V(x, hgt(x, z) - 0.2, z), H = T.rr(15, 19) * s, lean = V(T.rr(-1, 1), 0, T.rr(-1, 1)).multiplyScalar(0.06 * H);
    const pts = []; for (let i = 0; i <= 5; i++) { const t = i / 5; pts.push(V(o.x + lean.x * t * t + Math.sin(t * 5 + x) * 0.3 * s, o.y + H * 0.6 * t, o.z + lean.z * t * t + Math.cos(t * 4 + z) * 0.3 * s)); }
    limb(eucW, pts, 0.42 * s, 0.24 * s);
    const fork = pts[5];
    for (let b = 0; b < 3; b++) {
      const ang = b * 2.1 + T.rr(-0.4, 0.4), d = T.rr(1.4, 2.8) * s;
      const e = V(fork.x + Math.cos(ang) * d, fork.y + H * T.rr(0.3, 0.42), fork.z + Math.sin(ang) * d);
      const m = fork.clone().lerp(e, 0.5).add(V(0, 0.4, 0));
      limb(eucW, [fork.clone(), m, e], 0.22 * s, 0.07 * s);
      for (const anchor of [m, e]) for (let j = 0; j < (anchor === e ? 26 : 12); j++) {
        const r = T.rr(0.28, 0.5) * s;
        can.push(colorize(place(blob(1, j, 0, 0.3), anchor.x + T.rr(-2, 2) * s, anchor.y - T.rr(-0.6, 2.8) * s, anchor.z + T.rr(-2, 2) * s, r * 0.85, r * 1.7, r * 0.85, T.rnd() * 6), ['#7d8c6f', '#6c7c60', '#8b9a7c'][j % 3], 0.18, 0.08));
      }
    }
  }
  function cypress(x, z, s) { bucket(x, z); const y = hgt(x, z); can.push(colorize(place(blob(1, 3, 2, 0.12), x, y + 3.6 * s, z, 0.85 * s, 3.9 * s, 0.85 * s), '#2c4a2a', 0.08)); }

  T.reseed(4242);
  oak(15.8, -5.6, 1.15, { lift: 1.4, limbs: 6, spread: 1.15 });
  oak(-9.5, 13, 1.0, { limbs: 5 }); oak(-18, -11, 1.3); oak(23, -4, 1.1); oak(6, -17, 1.25); oak(27, 15, 1.0); oak(-31, 19, 1.15); oak(-26, -2, 1.2);
  oak(-7.6, 9.8, 0.42, { leaf: '#808f6c', limbs: 4, blob: 0.7 });
  for (const [x, z, s] of [[-3, -16, 1], [1.5, -20, 1.15], [-7.5, -21, 1.05], [11, -21, 1.1], [16, -16, 0.95], [-20, -16, 1.1], [-22, -7, 1.2], [-13, -15, 1], [27, -15, 1.05], [-36, 2, 1.2], [34, -6, 1.1]]) euc(x, z, s);
  cypress(14.7, 3.8, 1); cypress(14.7, -1.6, 0.9); cypress(-5.6, -6.6, 0.85);

  for (const [b, cast] of [[near, true], [far, false]]) {
    if (b.can.length) { const canopy = new THREE.Mesh(mergeGeometries(b.can), canopyM); canopy.castShadow = cast; canopy.receiveShadow = true; scene.add(canopy); }
    for (const [arr, m] of [[b.oakW, oakBarkM], [b.eucW, eucBarkM]]) {
      if (!arr.length) continue;
      const geos = arr.map((g) => { g = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); return g; });
      const mesh = new THREE.Mesh(mergeGeometries(geos), m); mesh.castShadow = cast; mesh.receiveShadow = true; scene.add(mesh);
    }
  }

  // chaparral shrubs + boulders (instanced)
  const shrubN = small ? 160 : 320;
  const sh = new THREE.InstancedMesh(blob(1, 2), new THREE.MeshStandardMaterial({ roughness: 0.95, bumpMap: T.noiseGray(128, 32, 2), bumpScale: 3 }), shrubN);
  const rock = new THREE.InstancedMesh(blob(1, 5, 1, 0.35), new THREE.MeshStandardMaterial({ color: '#a39478', roughness: 0.95 }), 40);
  const mm = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  let si = 0, ri = 0, guard = 0;
  while ((si < shrubN || ri < 40) && guard++ < 20000) {
    const x = T.rr(-70, 70), z = T.rr(-60, 70), o = offPad(x, z);
    if (o < 2) continue;
    const y = hgt(x, z);
    if (si < shrubN) {
      const r = T.rr(0.45, 1.2); mm.compose(V(x, y + r * 0.45, z), q.setFromEuler(new THREE.Euler(0, T.rnd() * 6, 0)), V(r * T.rr(1, 1.4), r * 0.95, r));
      sh.setMatrixAt(si, mm); sh.setColorAt(si++, c.set(['#56603a', '#6a6a3e', '#4a5832', '#7a7446'][si % 4]).offsetHSL(0, 0, T.rr(-0.04, 0.04)));
    } else if (T.rnd() < 0.3) {
      const r = T.rr(0.4, 1.3); mm.compose(V(x, y + r * 0.2, z), q.setFromEuler(new THREE.Euler(T.rnd(), T.rnd() * 6, 0)), V(r * 1.3, r * 0.7, r));
      rock.setMatrixAt(ri++, mm);
    }
  }
  sh.count = si; rock.count = ri; sh.castShadow = sh.receiveShadow = rock.castShadow = rock.receiveShadow = true; scene.add(sh, rock);

  // dry grass tufts (instanced)
  const blade = new THREE.BufferGeometry();
  const bv = []; for (let k = 0; k < 5; k++) { const a = (k / 5) * Math.PI, ca = Math.cos(a) * 0.05, sa = Math.sin(a) * 0.05, lx = Math.cos(a + 1.3) * 0.15, lz = Math.sin(a + 1.3) * 0.15; bv.push(-ca, 0, -sa, ca, 0, sa, lx, 0.55, lz); }
  blade.setAttribute('position', new THREE.Float32BufferAttribute(bv, 3)); blade.computeVertexNormals();
  const GN = small ? 1500 : 4000;
  const grass = new THREE.InstancedMesh(blade, new THREE.MeshStandardMaterial({ roughness: 1, side: THREE.DoubleSide }), GN);
  let gi = 0; guard = 0;
  while (gi < GN && guard++ < 60000) {
    const x = T.rr(-55, 60), z = T.rr(-45, 60), o = offPad(x, z); if (o < 1.2) continue;
    const s = T.rr(0.45, 1.05); mm.compose(V(x, hgt(x, z) - 0.02, z), q.setFromEuler(new THREE.Euler(0, T.rnd() * 6, 0)), V(s, s * T.rr(0.8, 1.4), s));
    grass.setMatrixAt(gi, mm); grass.setColorAt(gi++, c.set(T.rnd() < 0.7 ? '#a8905a' : '#8a7a4a').offsetHSL(0, 0, T.rr(-0.05, 0.05)));
  }
  grass.count = gi; grass.receiveShadow = true; grass.name = 'grass'; scene.add(grass);
}
