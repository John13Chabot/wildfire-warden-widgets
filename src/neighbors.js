// The two neighbouring homes: typical (unhardened) stucco houses with tile roofs, wood fascia, open eaves,
// wood garage doors and plants against the walls. They burn on the timeline the risk model gives them and
// expose our house to radiant heat and embers (structure-to-structure spread).
import * as THREE from 'three';
import { Builder, std, triPrism } from './build.js';
import * as T from './tex.js';
import { blob } from './world.js';
import { NEIGH } from './site.js';

const PI = Math.PI;

export function buildNeighbors(scene, { hgt, solids }) {
  const out = [];
  NEIGH.forEach((n, ni) => {
    const g = new THREE.Group(); g.name = 'neighbor-' + n.id; scene.add(g);
    const stT = T.stucco();
    const M = {
      wall: std({ color: ni ? '#efe3cf' : '#e9dcc4', map: stT, roughness: 0.95 }, 2.4),
      base: std({ color: '#cbbda3', map: stT, roughness: 0.95 }, 2.4),
      roof: std({ color: ni ? '#93492a' : '#a2553a', bumpMap: T.noiseGray(128, 40, 3), bumpScale: 3, roughness: 0.9 }),
      wood: std({ map: T.woodGrain([110, 74, 46]), roughness: 0.8 }, 1.2),
      glass: std({ color: '#121a1f', roughness: 0.1, metalness: 0.3, emissive: '#ff8a3a', emissiveIntensity: 0.08 }),
      trim: std({ color: '#d9ccb2', map: stT, roughness: 0.9 }, 1.3),
      shrub: std({ color: '#4b6a32', roughness: 0.9 }), dry: std({ color: '#8c7d42', roughness: 0.95 }),
      dark: std({ color: '#0d0a08', roughness: 1 }),
    };
    M.glass.userData.noCast = true;
    const B = new Builder();
    const cx = (n.x0 + n.x1) / 2, cz = (n.z0 + n.z1) / 2, y0 = hgt(cx, cz) - 0.05;
    const W = n.x1 - n.x0 - 0.7, D = n.z1 - n.z0 - 0.7, H = n.h;     // walls (footprint includes 0.35 m eaves)
    const box = (w, h, d, m, x, y, z, rx = 0, ry = 0, rz = 0, o = 'XYZ') => B.add(new THREE.BoxGeometry(w, h, d), m, null, x, y, z, rx, ry, rz, o);
    box(W, H, D, M.wall, cx, y0 + H / 2, cz);
    box(W + 0.06, 0.5, D + 0.06, M.base, cx, y0 + 0.25, cz);
    // gable roof along the ridge axis
    const along = n.ridge === 'x', span = along ? D + 0.7 : W + 0.7, len = along ? W + 0.7 : D + 0.7, rise = span * 0.22;
    const slope = Math.hypot(span / 2, rise), tilt = Math.atan2(rise, span / 2);
    const roofParts = [];
    for (const s of [-1, 1]) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(along ? len : slope, 0.18, along ? slope : len), M.roof);
      if (along) { panel.position.set(cx, y0 + H + rise / 2, cz + s * span / 4); panel.rotation.x = s * tilt; }
      else { panel.position.set(cx + s * span / 4, y0 + H + rise / 2, cz); panel.rotation.z = -s * tilt; }
      panel.castShadow = panel.receiveShadow = true; g.add(panel); roofParts.push(panel); solids.push(panel);
      // tile courses: thin ribs across the slope
      const nr = Math.floor(len / 0.32);
      for (let i = 0; i < nr; i++) {
        const u = -len / 2 + 0.16 + i * 0.32, rib = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, slope, 6, 1, true, 0, PI), M.roof);
        if (along) { rib.position.set(cx + u, y0 + H + rise / 2 + 0.08, cz + s * span / 4); rib.rotation.set(PI / 2 + s * tilt, 0, 0); }
        else { rib.position.set(cx + s * span / 4, y0 + H + rise / 2 + 0.08, cz + u); rib.rotation.set(0, 0, PI / 2 - s * tilt); rib.rotation.order = 'ZYX'; }
        rib.castShadow = true; g.add(rib); roofParts.push(rib);
      }
      // wood fascia + exposed rafter tails (unhardened)
      if (along) { box(len, 0.22, 0.06, M.wood, cx, y0 + H - 0.05, cz + s * (span / 2)); for (let u = -len / 2 + 0.3; u < len / 2; u += 0.6) box(0.1, 0.16, 0.4, M.wood, cx + u, y0 + H - 0.08, cz + s * (span / 2 - 0.2)); }
      else { box(0.06, 0.22, len, M.wood, cx + s * (span / 2), y0 + H - 0.05, cz); for (let u = -len / 2 + 0.3; u < len / 2; u += 0.6) box(0.4, 0.16, 0.1, M.wood, cx + s * (span / 2 - 0.2), y0 + H - 0.08, cz + u); }
    }
    // gable end walls
    for (const s of [-1, 1]) {
      if (along) B.add(triPrism(span / 2 - 0.35, rise, 0.15), M.wall, null, cx + s * (W / 2) - (s > 0 ? 0.15 : 0), y0 + H, cz, 0, PI / 2, 0);
      else B.add(triPrism(span / 2 - 0.35, rise, 0.15), M.wall, null, cx, y0 + H, cz + s * (D / 2) - (s > 0 ? 0.15 : 0));
    }
    // windows on all four faces (two rows on the two-storey house) + a wood garage door
    const winPts = [], rows = n.storeys === 2 ? [1.1, 4.0] : [1.1];
    const face = (axis, s) => {
      const L = axis === 'x' ? W : D, cnt = Math.max(2, Math.floor(L / 2.6));
      for (const ry of rows) for (let i = 0; i < cnt; i++) {
        const u = -L / 2 + (i + 0.5) * (L / cnt), ww = 1.1, hh = 1.35;
        const x = axis === 'x' ? cx + u : cx + s * (W / 2 + 0.02), z = axis === 'x' ? cz + s * (D / 2 + 0.02) : cz + u, y = y0 + ry + hh / 2;
        if (axis === 'x') { box(ww, hh, 0.06, M.glass, x, y, z); box(ww + 0.2, 0.1, 0.16, M.trim, x, y - hh / 2 - 0.05, z); }
        else { box(0.06, hh, ww, M.glass, x, y, z); box(0.16, 0.1, ww + 0.2, M.trim, x, y - hh / 2 - 0.05, z); }
        winPts.push([x + (axis === 'x' ? 0 : s * 0.3), y + 0.3, z + (axis === 'x' ? s * 0.3 : 0)]);
      }
    };
    face('x', 1); face('x', -1); face('z', 1); face('z', -1);
    if (n.id === 'W') box(0.08, 2.2, 2.6, M.wood, n.x1 - 0.35, y0 + 1.1, cz - 1.8);
    else box(2.8, 2.2, 0.08, M.wood, cx + 2.6, y0 + 1.1, n.z1 - 0.35);
    // their Zone 0: shrubs against the walls
    const shrubs = [];
    for (let i = 0; i < 9; i++) {
      const t = i / 9, side = i % 4, r = 0.4 + (i % 3) * 0.15;
      const x = side < 2 ? n.x0 + 0.35 + t * (n.x1 - n.x0 - 0.7) : side === 2 ? n.x0 + 0.1 : n.x1 - 0.1;
      const z = side === 0 ? n.z0 + 0.1 : side === 1 ? n.z1 - 0.1 : n.z0 + 0.35 + t * (n.z1 - n.z0 - 0.7);
      B.add(blob(r, i * 3 + ni), i % 3 ? M.shrub : M.dry, null, x, hgt(x, z) + r * 0.6, z, 0, i, 0, 'XYZ', 1, 0.8, 1);
      shrubs.push([x, hgt(x, z) + 0.4, z]);
    }
    B.build(g, {}, solids);
    // flame anchor points: windows, roof grid, shrubs
    const roofPts = [];
    for (let a = 0; a < 3; a++) for (let b = 0; b < 2; b++) roofPts.push([n.x0 + (a + 0.5) * (n.x1 - n.x0) / 3, y0 + H + rise * 0.6, n.z0 + (b + 0.5) * (n.z1 - n.z0) / 2]);
    const mats = Object.values(M).filter((m) => m !== M.glass && m !== M.dark);
    for (const m of mats) m.userData.c0 = m.color.clone();
    out.push({ n, g, M, mats, roofParts, winPts, roofPts, shrubs, y0, H, rise, cx, cz });
  });
  return out;
}

// burn state of one neighbour a minutes after it ignites (shared by visuals and the risk model)
// returns { win: 0..1 window flames, roof: 0..1 roof/attic flames, full: 0..1 fully involved, char: 0..1, collapsed }
export function nburn(a) {
  if (!(a >= 0)) return { win: 0, roof: 0, full: 0, smoke: 0, char: 0, collapsed: false };
  const ramp = (x, a0, a1) => Math.max(0, Math.min(1, (x - a0) / (a1 - a0)));
  const decay = 1 - ramp(a, 60, 120);
  return {
    win: ramp(a, 5, 14) * decay,
    roof: ramp(a, 12, 24) * decay,
    full: ramp(a, 16, 28) * (1 - ramp(a, 55, 110)),
    smoke: Math.min(1, a / 4) * (1 - ramp(a, 200, 320)),
    char: ramp(a, 10, 60),
    collapsed: a > 36,
  };
}
