import * as THREE from 'three';
import { Builder, std, ring, archSolid, triPrism } from './build.js';
import * as T from './tex.js';
import { blob } from './world.js';

const { BoxGeometry: Box, CylinderGeometry: Cyl, SphereGeometry: Sph, ConeGeometry: Cone, CircleGeometry: Circ } = THREE;
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const PI = Math.PI, a = Math.atan2(1.6, 3.5), aw = Math.atan2(1.3, 3);

export function buildHouse(house, reg, solids, opts) {
  const B = new Builder();
  const stT = T.stucco(), bump = T.noiseGray(256, 32, 3);
  const M = {
    stucco: std({ color: '#f6f0e4', map: stT, bumpMap: bump, bumpScale: 2, roughness: 0.95 }, 2.4),
    base: std({ color: '#dccfb7', map: stT, bumpMap: bump, bumpScale: 2, roughness: 0.95 }, 2.4),
    cast: std({ color: '#ddd0b4', map: stT, roughness: 0.9 }, 1.3),
    roofDeck: std({ color: '#5e2a14', roughness: 0.95 }),
    wood: std({ map: T.woodGrain([118, 76, 44]), roughness: 0.7 }, 1.2),
    woodDk: std({ map: T.woodGrain([82, 52, 30]), roughness: 0.65 }, 1.2),
    iron: std({ color: '#1d1b19', roughness: 0.45, metalness: 0.7 }),
    bronze: std({ color: '#2b2621', roughness: 0.4, metalness: 0.6 }),
    glass: std({ color: '#10171b', roughness: 0.05, metalness: 0.3, emissive: '#ffad5a', emissiveIntensity: 1.1, envMapIntensity: 2 }),
    glassDim: std({ color: '#10171b', roughness: 0.05, metalness: 0.3, emissive: '#ff9a45', emissiveIntensity: 0.22, envMapIntensity: 2 }),
    lamp: std({ color: '#ffe2b0', emissive: '#ffbf66', emissiveIntensity: 6 }),
    copper: std({ color: '#c07a3c', roughness: 0.3, metalness: 0.9 }),
    vent: std({ color: '#2a2622', roughness: 0.6, metalness: 0.3 }),
    terracotta: std({ color: '#b5562d', roughness: 0.8 }),
    dark: std({ color: '#0d0a08', roughness: 1 }),
    deck: std({ map: T.planks(), roughness: 0.8 }, 1.4),
    post: std({ map: T.woodGrain([108, 70, 44]), roughness: 0.8 }, 1.2),
    mulch: std({ map: T.mulch(), roughness: 1 }, 1.0),
    leafA: std({ color: '#8a6a2c', roughness: 0.9 }), leafB: std({ color: '#5f5424', roughness: 0.9 }), leafC: std({ color: '#a8742f', roughness: 0.9 }),
    log: std({ map: T.woodGrain([128, 86, 54]), roughness: 0.9 }, 0.8),
    shrub: std({ color: '#3f5f2c', roughness: 0.9 }), shrubDry: std({ color: '#8a7a3c', roughness: 0.95 }),
    bougLeaf: std({ color: '#2f5a26', roughness: 0.85 }), boug: std({ color: '#c42a6e', roughness: 0.7 }),
    cushion: std({ color: '#e9e2d0', roughness: 1 }),
  };
  for (const k of ['glass', 'glassDim', 'lamp']) M[k].userData.noCast = true;
  const leaves = [M.leafA, M.leafB, M.leafC];

  const box = (w, h, d, m, x, y, z, k, rx = 0, ry = 0, rz = 0, o = 'XYZ') => B.add(new Box(w, h, d), m, k, x, y, z, rx, ry, rz, o);
  const F = (f) => new THREE.Matrix4().compose(V(f.x, f.y, f.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, f.ry || 0, 0)), V(1, 1, 1));
  const L = (f, geo, m, k, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => {
    const l = new THREE.Matrix4().compose(V(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), V(1, 1, 1));
    B.addM(geo, m, k, F(f).multiply(l));
  };

  // ---------- windows ----------
  let litToggle = 0;
  function win(f, w, h, { grille = false, lit } = {}) {
    const g = lit ?? (litToggle++ % 3 !== 2);
    L(f, ring(w, h, 0.17, 0.1), M.cast);
    L(f, ring(w - 0.08, h - 0.04, 0.04, 0.05), M.bronze, null, 0, 0.0, 0.015);
    L(f, archSolid(w - 0.08, h - 0.04, 0.02), g ? M.glass : M.glassDim, null, 0, 0, 0.005);
    const hr = h - w / 2;
    for (const x of [-w / 6, w / 6]) { const len = hr + Math.sqrt(Math.max(0, (w / 2) ** 2 - x * x)) - 0.06; L(f, new Box(0.035, len, 0.03), M.bronze, null, x, len / 2, 0.04); }
    for (const y of [hr / 3, (2 * hr) / 3, hr]) L(f, new Box(w - 0.08, 0.035, 0.03), M.bronze, null, 0, y, 0.04);
    L(f, new Box(w + 0.55, 0.09, 0.28), M.cast, null, 0, -0.045, 0.1);
    if (grille) {
      for (let x = -w / 2 + 0.12; x < w / 2 - 0.05; x += 0.14) L(f, new Cyl(0.014, 0.014, hr + 0.1, 6), M.iron, null, x, hr / 2, 0.2);
      for (const y of [0.05, hr * 0.5, hr]) L(f, new Box(w + 0.1, 0.03, 0.03), M.iron, null, 0, y, 0.2);
    }
  }
  function lantern(x, y, z, ry = 0) {
    const f = { x, y, z, ry };
    L(f, new Box(0.05, 0.05, 0.22), M.iron, null, 0, 0.32, 0.11);
    L(f, new Box(0.24, 0.38, 0.24), M.iron, null, 0, 0, 0.26);
    L(f, new Box(0.19, 0.31, 0.25), M.lamp, null, 0, 0, 0.26);
    L(f, new Box(0.19, 0.31, 0.19), M.lamp, null, 0, 0, 0.26);
    L(f, new Cone(0.2, 0.14, 4), M.iron, null, 0, 0.26, 0.26, 0, PI / 4);
  }
  function carriageDoor(x, z) {
    const f = { x, y: 0, z };
    L(f, ring(2.0, 2.85, 0.2, 0.1), M.cast);
    L(f, archSolid(2.0, 2.85, 0.08), M.wood, null, 0, 0, -0.03);
    for (let k = -3; k <= 3; k++) L(f, new Box(0.02, 2.55, 0.02), M.dark, null, k * 0.26, 1.27, 0.05);
    L(f, new Box(0.035, 2.8, 0.03), M.dark, null, 0, 1.4, 0.06);
    for (const y of [0.45, 1.3, 2.0]) for (const s of [-1, 1]) L(f, new Box(0.7, 0.07, 0.025), M.iron, null, s * 0.58, y, 0.065);
    for (const s of [-1, 1]) L(f, new Box(0.04, 0.3, 0.04), M.iron, null, s * 0.12, 1.25, 0.08);
  }

  // ---------- main block ----------
  box(10, 6, 7, M.stucco, 1, 3, -0.5);
  box(10.08, 0.65, 7.08, M.base, 1, 0.325, -0.5);
  B.add(triPrism(3.5, 1.6, 0.2), M.stucco, null, -4.0, 6, -0.5, 0, PI / 2, 0);
  B.add(triPrism(3.5, 1.6, 0.2), M.stucco, null, 5.8, 6, -0.5, 0, PI / 2, 0);
  const panels = [], ridges = [];
  const roof = (len, slope, x, y, z, tilt, ry) => { box(len, 0.2, slope, M.roofDeck, x, y, z, null, tilt, ry, 0, 'YXZ'); panels.push({ len, slope, x, y, z, tilt, ry }); };
  roof(11.2, 4.45, 1, 6.775, 1.57, a, 0); roof(11.2, 4.45, 1, 6.775, -2.57, a, PI);
  ridges.push({ len: 11.2, x: 1, y: 7.78, z: -0.5, alongZ: false });
  for (let x = -4.3; x <= 6.35; x += 0.6) {
    if (!(x > -1.4 && x < 4.4)) box(0.13, 0.2, 0.72, M.woodDk, x, 5.79, 3.28, 'eaves', a);
    box(0.13, 0.2, 0.72, M.woodDk, x, 5.79, -4.28, 'eaves', -a);
  }
  // pipe vents (side gable)
  for (const [zz, yy] of [[-0.85, 6.38], [-0.15, 6.38], [-0.5, 6.82]]) {
    B.add(new Cyl(0.12, 0.12, 0.32, 14), M.terracotta, 'attic', -4.02, yy, zz, 0, 0, PI / 2);
    B.add(new Circ(0.085, 14), M.dark, 'attic', -4.19, yy, zz, 0, -PI / 2, 0);
  }
  // chimney
  box(1.25, 4.1, 1.25, M.stucco, -2.6, 7.35, -2.6);
  box(1.55, 0.16, 1.55, M.cast, -2.6, 9.45, -2.6);
  box(1.0, 0.6, 1.0, M.stucco, -2.6, 9.83, -2.6);
  for (let i = 0; i < 4; i++) { const r = (i * PI) / 2; B.add(archSolid(0.3, 0.42, 0.03), M.dark, null, -2.6 + Math.sin(r) * 0.5, 9.6, -2.6 + Math.cos(r) * 0.5, 0, r, 0); }
  B.add(new Cone(0.95, 0.45, 4), M.terracotta, null, -2.6, 10.35, -2.6, 0, PI / 4, 0);

  // ---------- front cross-gable ----------
  box(5, 6, 3, M.stucco, 1.5, 3, 4.5);
  box(5.08, 0.65, 3.08, M.base, 1.5, 0.325, 4.5);
  B.add(triPrism(2.5, 1.14, 0.2), M.stucco, null, 1.5, 6, 5.8);
  roof(4.4, 3.25, -0.024, 6.565, 4.4, a, -PI / 2); roof(4.4, 3.25, 3.024, 6.565, 4.4, a, PI / 2);
  ridges.push({ len: 4.4, x: 1.5, y: 7.3, z: 4.4, alongZ: true });
  for (const s of [-1, 1]) box(3.25, 0.28, 0.14, M.woodDk, 1.5 + s * 1.524, 6.43, 6.62, 'wood', 0, 0, -s * a);
  for (let z = 3.3; z <= 6.4; z += 0.6) for (const s of [-1, 1]) box(0.62, 0.18, 0.13, M.woodDk, 1.5 + s * 2.75, 5.86, z, 'eaves', 0, 0, -s * a);
  // louvered gable vent
  box(1.3, 0.8, 0.14, M.cast, 1.5, 6.46, 6.0, 'attic');
  box(1.06, 0.58, 0.04, M.dark, 1.5, 6.46, 6.08, 'attic');
  for (let i = 0; i < 6; i++) box(1.06, 0.04, 0.11, M.vent, 1.5, 6.22 + i * 0.095, 6.12, 'attic', 0.6);
  // entry
  const ent = { x: 1.5, y: 0.3, z: 6 };
  L(ent, ring(1.45, 2.75, 0.24, 0.13), M.cast);
  L(ent, archSolid(1.45, 2.75, 0.1), M.woodDk, null, 0, 0, -0.05);
  for (let k = -2; k <= 2; k++) L(ent, new Box(0.018, 2.4, 0.02), M.dark, null, k * 0.26, 1.2, 0.055);
  for (let y = 0.35; y < 2.3; y += 0.5) for (let x = -0.5; x <= 0.51; x += 0.25) L(ent, new Sph(0.022, 6, 4), M.iron, null, x, y, 0.06);
  for (const y of [0.5, 2.0]) L(ent, new Box(0.65, 0.06, 0.02), M.iron, null, -0.35, y, 0.065);
  L(ent, new Box(0.04, 0.32, 0.05), M.iron, null, 0.5, 1.15, 0.08);
  box(2.8, 0.15, 1.2, M.cast, 1.5, 0.075, 6.62); box(2.2, 0.15, 0.62, M.cast, 1.5, 0.225, 6.33);
  lantern(0.38, 2.45, 6.0); lantern(2.62, 2.45, 6.0);
  win({ x: 1.5, y: 3.4, z: 6 }, 1.25, 2.1, { lit: true });
  // main facade windows + balconette
  win({ x: -2.5, y: 3.6, z: 3 }, 1.1, 1.9, { lit: true });
  win({ x: -2.5, y: 1.0, z: 3 }, 1.1, 2.0, { grille: true, lit: false });
  win({ x: 5.1, y: 3.7, z: 3 }, 0.8, 1.75);
  win({ x: 5.1, y: 1.0, z: 3 }, 0.8, 2.0, { grille: true, lit: true });
  win({ x: -4, y: 3.6, z: -2.3, ry: -PI / 2 }, 1.0, 1.8);
  win({ x: -4, y: 3.6, z: 2.0, ry: -PI / 2 }, 1.0, 1.8, { lit: true });
  box(1.8, 0.12, 0.5, M.cast, -2.5, 3.5, 3.25);
  for (const s of [-1, 1]) box(0.14, 0.28, 0.4, M.cast, -2.5 + s * 0.7, 3.3, 3.2);
  box(1.8, 0.045, 0.045, M.iron, -2.5, 4.25, 3.47);
  for (let x = -3.36; x <= -1.63; x += 0.12) B.add(new Cyl(0.012, 0.012, 0.69, 5), M.iron, null, x, 3.9, 3.47);
  for (const s of [-1, 1]) { box(0.045, 0.045, 0.45, M.iron, -2.5 + s * 0.9, 4.25, 3.25); B.add(new Sph(0.045, 8, 6), M.iron, null, -2.5 + s * 0.9, 4.3, 3.47); }
  // deck French doors (left side)
  const fd = { x: -4, y: 1.08, z: 0.3, ry: -PI / 2 };
  L(fd, ring(1.7, 2.6, 0.17, 0.1), M.cast);
  L(fd, archSolid(1.7, 2.6, 0.02), M.glass, null, 0, 0, 0.005);
  L(fd, new Box(0.06, 2.55, 0.05), M.bronze, null, 0, 1.27, 0.03);
  for (const y of [0.9, 1.75]) L(fd, new Box(1.7, 0.035, 0.03), M.bronze, null, 0, y, 0.03);
  lantern(-4, 2.6, -1.0, -PI / 2);

  // ---------- foundation vents ----------
  const fv = (f) => { L(f, new Box(0.98, 0.42, 0.06), M.cast, 'found'); L(f, new Box(0.82, 0.28, 0.03), M.dark, 'found', 0, 0, 0.035); for (let i = -5; i <= 5; i++) L(f, new Box(0.025, 0.28, 0.025), M.vent, 'found', i * 0.07, 0, 0.055); L(f, new Box(0.82, 0.025, 0.025), M.vent, 'found', 0, 0, 0.055); };
  fv({ x: -3.3, y: 0.33, z: 3.04 }); fv({ x: 5.3, y: 0.33, z: 3.04 }); fv({ x: -0.6, y: 0.33, z: 6.04 }); fv({ x: 3.6, y: 0.33, z: 6.04 });
  fv({ x: -4.04, y: 0.33, z: -2.6, ry: -PI / 2 }); fv({ x: 13.04, y: 0.33, z: -1.5, ry: PI / 2 });

  // ---------- garage / loggia wing ----------
  box(7, 3.6, 6, M.stucco, 9.5, 1.8, 0);
  box(7.08, 0.65, 6.08, M.base, 9.5, 0.325, 0);
  B.add(triPrism(3, 1.3, 0.2), M.stucco, null, 12.8, 3.6, 0, 0, PI / 2, 0);
  roof(7.6, 3.87, 9.8, 4.23, 1.82, aw, 0); roof(7.6, 3.87, 9.8, 4.23, -1.82, aw, PI);
  ridges.push({ len: 7.6, x: 9.8, y: 4.98, z: 0, alongZ: false });
  box(7.6, 0.24, 0.08, M.woodDk, 9.8, 3.28, 3.47, 'wood');
  B.add(new Cyl(0.15, 0.15, 7.7, 16, 1, true, PI, PI), M.copper, 'gutter', 9.8, 3.24, 3.66, 0, 0, PI / 2);
  for (const x of [5.95, 13.65]) B.add(new Circ(0.15, 12, PI, PI), M.copper, 'gutter', x, 3.24, 3.66, 0, PI / 2, 0);
  B.add(new Cyl(0.065, 0.065, 3.1, 10), M.copper, 'gutter', 13.45, 1.68, 3.66);
  B.add(new Cyl(0.065, 0.065, 0.4, 10), M.copper, 'gutter', 13.45, 0.08, 3.85, PI / 2.6);
  for (let i = 0; i < 46; i++) { const x = 6.1 + T.rnd() * 7.5; B.add(new Sph(0.09, 6, 4), leaves[i % 3], 'gutter', x, 3.27 + T.rnd() * 0.05, 3.66 + (T.rnd() - 0.5) * 0.16, T.rnd(), T.rnd() * 3, 0, 'XYZ', 1.7, 0.3, 1); }
  for (let i = 0; i < 70; i++) { const x = 9 + T.rnd() * 4.5, z = -0.4 - T.rnd() * 3; B.add(new Sph(0.09, 6, 4), leaves[i % 3], null, x, 4.85 - (-z) * Math.tan(aw) + 0.03, z, -aw, T.rnd() * 3, 0, 'YXZ', 1.7, 0.3, 1); }
  for (let x = 6.3; x <= 13.4; x += 0.55) { box(0.13, 0.2, 0.7, M.woodDk, x, 3.39, 3.27, 'eaves', aw); box(0.13, 0.2, 0.7, M.woodDk, x, 3.39, -3.27, 'eaves', -aw); }
  for (const x of [7.3, 9.5, 11.7]) carriageDoor(x, 3);
  lantern(8.4, 2.5, 3.0); lantern(10.6, 2.5, 3.0);
  win({ x: 13, y: 1.2, z: 0, ry: PI / 2 }, 0.9, 1.6);
  for (const [zz, yy] of [[-0.3, 3.9], [0.3, 3.9], [0, 4.25]]) { B.add(new Cyl(0.1, 0.1, 0.3, 12), M.terracotta, 'attic', 13.02, yy, zz, 0, 0, PI / 2); B.add(new Circ(0.07, 12), M.dark, 'attic', 13.18, yy, zz, 0, PI / 2, 0); }

  // ---------- elevated deck over the slope ----------
  const hgt = opts.hgt;
  box(6, 0.08, 6.2, M.deck, -7, 1.0, 0, 'deck');
  for (const z of [-3.1, 3.1]) box(6, 0.28, 0.1, M.post, -7, 0.83, z, 'deck');
  box(0.1, 0.28, 6.2, M.post, -10, 0.83, 0, 'deck');
  for (let x = -9.7; x < -4; x += 0.6) box(0.06, 0.22, 6.2, M.post, x, 0.84, 0, 'deck');
  for (const x of [-9.8, -6.9]) for (const z of [-2.9, 0, 2.9]) { const y = hgt(x, z) - 0.2, l = 0.86 - y; box(0.22, l, 0.22, M.post, x, y + l / 2, z, 'deck'); }
  for (const [z0, z1] of [[-2.9, 0], [0, 2.9]]) {
    const y0 = hgt(-9.8, z0) + 0.4, dy = 0.75 - y0, dz = z1 - z0, len = Math.hypot(dy, dz), ang = Math.atan2(dy, dz);
    box(0.08, 0.14, len, M.post, -9.86, y0 + dy / 2, (z0 + z1) / 2, 'deck', -ang);
    box(0.08, 0.14, len, M.post, -9.74, y0 + dy / 2, (z0 + z1) / 2, 'deck', ang);
  }
  const rail = (x0, z0, x1, z1) => {
    const dx = x1 - x0, dz = z1 - z0, len = Math.hypot(dx, dz), ry = Math.atan2(dx, dz), cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    box(0.1, 0.06, len, M.post, cx, 2.0, cz, 'deck', 0, ry); box(0.16, 0.04, len + 0.1, M.post, cx, 2.05, cz, 'deck', 0, ry);
    box(0.06, 0.06, len, M.post, cx, 1.14, cz, 'deck', 0, ry);
    const n = Math.round(len / 0.12);
    for (let i = 0; i <= n; i++) { const t = i / n; box(0.04, 0.84, 0.04, M.post, x0 + dx * t, 1.56, z0 + dz * t, 'deck', 0, ry); }
    for (const t of [0, 0.5, 1]) box(0.1, 1.04, 0.1, M.post, x0 + dx * t, 1.52, z0 + dz * t, 'deck');
  };
  rail(-9.95, -3.05, -9.95, 3.05); rail(-9.95, 3.05, -4.1, 3.05); rail(-9.95, -3.05, -4.1, -3.05);
  for (const [x, z, r] of [[-8.6, 1.3, 0.4], [-8.6, -0.6, -0.3]]) {
    box(0.7, 0.08, 1.3, M.post, x, 1.38, z, 'deck', 0, r); box(0.62, 0.08, 1.2, M.cushion, x, 1.45, z, 'deck', 0, r);
    const bx = x - Math.sin(r) * 0.6, bz = z - Math.cos(r) * 0.6; box(0.7, 0.7, 0.08, M.post, bx, 1.72, bz, 'deck', -0.35, r, 0, 'YXZ');
    for (const s of [-1, 1]) box(0.06, 0.34, 1.2, M.post, x + Math.cos(r) * s * 0.33, 1.2, z - Math.sin(r) * s * 0.33, 'deck', 0, r);
  }
  const wy = hgt(-6.2, 1.4);
  for (let row = 0; row < 4; row++) for (let j = 0; j < 5 - row; j++) B.add(new Cyl(0.12, 0.12, 1.0, 9), M.log, 'deck', -6.9 + j * 0.25 + row * 0.12, wy + 0.13 + row * 0.21, 1.4, PI / 2, 0, 0);
  for (let i = 0; i < 40; i++) { const x = -9.6 + T.rnd() * 5.4, z = -2.8 + T.rnd() * 5.6; B.add(new Sph(0.1, 6, 4), leaves[i % 3], 'deck', x, hgt(x, z) + 0.03, z, 0, T.rnd() * 3, 0, 'XYZ', 1.8, 0.25, 1); }

  // combustibles that Zone 0 clean-up removes (firewood, cushions, litter under the deck) and the bark mulch it replaces
  M.log.userData.z0 = true; M.cushion.userData.z0 = true; for (const m of leaves) m.userData.z0 = true; M.mulch.userData.mulch = true;
  // ---------- zone 0 (first 5 ft) ----------
  box(3, 0.06, 1.4, M.mulch, -2.5, 0.03, 3.72, 'zone'); box(2, 0.06, 1.4, M.mulch, 5, 0.03, 3.72, 'zone');
  box(1.5, 0.06, 1.25, M.mulch, -0.22, 0.03, 6.66, 'zone'); box(1.5, 0.06, 1.25, M.mulch, 3.22, 0.03, 6.66, 'zone');
  box(7, 0.06, 1.2, M.mulch, 9.5, 0.03, -3.65, 'zone');
  const sh = (m, r, x, y, z, sq = 0.8) => B.add(blob(r, x * 7 + z), m, 'zone', x, y, z, 0, T.rnd() * 3, 0, 'XYZ', 1, sq, 1);
  sh(M.shrub, 0.55, -2.05, 0.42, 3.8); sh(M.shrubDry, 0.45, -1.35, 0.34, 3.85);
  sh(M.shrub, 0.42, 4.4, 0.34, 3.8);
  for (let i = 0; i < 6; i++) sh(i % 2 ? M.shrub : M.shrubDry, 0.45, 7 + i * 1.1, 0.32, -3.65);
  for (const tx of [-0.25, 0.35]) box(0.06, 3.2, 0.06, M.post, tx, 1.6, 6.1, 'zone');
  for (const ty of [1.2, 2.0, 2.8]) box(0.8, 0.05, 0.05, M.post, 0.05, ty, 6.1, 'zone');
  for (let i = 0; i < 26; i++) { const y = 1.15 + T.rnd() * 2.4, x = -0.35 + T.rnd() * 0.8; B.add(blob(0.18 + T.rnd() * 0.12, i), i % 3 ? M.boug : M.bougLeaf, 'zone', x, y, 6.12 + T.rnd() * 0.15); }

  const meshes = B.build(house, reg, solids);

  // ---------- clay barrel tiles (instanced) ----------
  const tg = new Cyl(0.13, 0.155, 0.5, 9, 1, true, -PI / 2, PI); tg.rotateX(-PI / 2);
  const tmat = std({ roughness: 0.62, side: THREE.DoubleSide, envMapIntensity: 0.8 });
  let n = 0; for (const p of panels) n += Math.floor(p.len / 0.3) * Math.ceil(p.slope / 0.42); for (const r of ridges) n += Math.ceil(r.len / 0.45);
  const im = new THREE.InstancedMesh(tg, tmat, n); im.castShadow = im.receiveShadow = true;
  const Mp = new THREE.Matrix4(), Ml = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  let i = 0;
  const col = () => c.setHSL(0.035 + T.rnd() * 0.025, 0.5 + T.rnd() * 0.2, 0.3 + T.rnd() * 0.12);
  for (const p of panels) {
    Mp.compose(V(p.x, p.y, p.z), q.setFromEuler(new THREE.Euler(p.tilt, p.ry, 0, 'YXZ')), V(1, 1, 1));
    const nx = Math.floor(p.len / 0.3), nz = Math.ceil(p.slope / 0.42);
    for (let ix = 0; ix < nx; ix++) for (let iz = 0; iz < nz; iz++) {
      Ml.compose(V(-p.len / 2 + 0.15 + ix * 0.3 + (p.len - nx * 0.3) / 2, 0.1, -p.slope / 2 + 0.22 + iz * 0.42), new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.07, (T.rnd() - 0.5) * 0.04, 0)), V(1, 1, 1));
      im.setMatrixAt(i, Mp.clone().multiply(Ml)); im.setColorAt(i++, col());
    }
  }
  for (const r of ridges) {
    const k = Math.ceil(r.len / 0.45);
    for (let j = 0; j < k; j++) {
      const t = -r.len / 2 + 0.22 + j * 0.45;
      const pos = r.alongZ ? V(r.x, r.y, r.z + t) : V(r.x + t, r.y, r.z);
      Ml.compose(pos, q.setFromEuler(new THREE.Euler(0, r.alongZ ? 0 : PI / 2, 0)), V(1.35, 1.35, 1));
      im.setMatrixAt(i, Ml.clone()); im.setColorAt(i++, col());
    }
  }
  im.count = i; house.add(im);
  return { M, tiles: im, lights: [V(1.5, 2.4, 6.6), V(9.5, 2.4, 3.6), V(-4.5, 2.5, -1)] };
}
