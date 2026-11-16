// High-detail close-up models for the seven weak points. Each set is built on first approach and shown only
// while the camera is near it, layered over (and slightly proud of) the base model at that spot.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as T from './tex.js';

const PI = Math.PI;
const V = (x, y, z) => new THREE.Vector3(x, y, z);

export function createDetails({ scene, reg, hgt, SMALL }) {
  const std = (o, rep) => { const m = new THREE.MeshStandardMaterial({ roughness: 0.85, ...o }); if (rep && m.map) { m.map = m.map.clone(); m.map.wrapS = m.map.wrapT = THREE.RepeatWrapping; m.map.repeat.set(rep, rep); m.map.needsUpdate = true; } return m; };
  const M = {
    cast: std({ color: '#ddd0b4', map: T.stucco(), roughness: 0.9 }, 2),
    stucco: std({ color: '#f2ebdd', map: T.stucco(), roughness: 0.95 }, 3),
    dark: std({ color: '#0b0908', roughness: 1 }),
    metal: std({ color: '#3a3936', roughness: 0.45, metalness: 0.7 }),
    rust: std({ color: '#5a3a24', roughness: 0.8, metalness: 0.3 }),
    galv: std({ color: '#8e918f', roughness: 0.35, metalness: 0.8 }),
    copper: std({ color: '#b8743a', roughness: 0.3, metalness: 0.9, side: THREE.DoubleSide }),
    copperDk: std({ color: '#7a4a24', roughness: 0.45, metalness: 0.8, side: THREE.DoubleSide }),
    wood: std({ map: T.woodGrain([92, 58, 34]), roughness: 0.75 }, 1),
    woodLt: std({ map: T.woodGrain([132, 92, 58]), roughness: 0.8 }, 1),
    woodGrey: std({ map: T.woodGrain([118, 106, 92]), roughness: 0.9 }, 1),
    board: std({ map: T.woodGrain([140, 98, 60]), roughness: 0.8 }, 1),
    endgrain: std({ color: '#6b4a2e', roughness: 0.95 }),
    tile: std({ color: '#a8502c', roughness: 0.7, side: THREE.DoubleSide }),
    leafA: std({ color: '#8a6a2c', roughness: 0.9, side: THREE.DoubleSide }), leafB: std({ color: '#5f5424', roughness: 0.9, side: THREE.DoubleSide }),
    leafC: std({ color: '#a8742f', roughness: 0.9, side: THREE.DoubleSide }), leafD: std({ color: '#c39a52', roughness: 0.9, side: THREE.DoubleSide }),
    needle: std({ color: '#9a7a46', roughness: 0.9 }),
    green: std({ color: '#3d5c2a', roughness: 0.85, side: THREE.DoubleSide }), greenDk: std({ color: '#2c4720', roughness: 0.85, side: THREE.DoubleSide }),
    twig: std({ color: '#4a3a2a', roughness: 0.95 }),
    mulchA: std({ color: '#6b4528', roughness: 1 }), mulchB: std({ color: '#8a5a34', roughness: 1 }), mulchC: std({ color: '#4c3220', roughness: 1 }),
    web: std({ color: '#d8d4cc', roughness: 1, transparent: true, opacity: 0.35, side: THREE.DoubleSide }),
    stain: std({ color: '#6a4a30', roughness: 1, transparent: true, opacity: 0.28 }),
  };
  // UP: build the upgraded version of a set (what the work looks like after the retrofit)
  let UP = false;
  M.coat = std({ color: '#e7e1d5', roughness: 0.7 }); M.fc = std({ color: '#ece7dc', map: T.stucco(), roughness: 0.9 }, 4);
  M.ss = std({ color: '#b9bcbd', roughness: 0.3, metalness: 0.85, side: THREE.DoubleSide }); M.sealed = std({ map: T.woodGrain([110, 70, 42]), roughness: 0.45 }, 1);
  M.gravA = std({ color: '#8d8a84', roughness: 1 }); M.gravB = std({ color: '#a7a39a', roughness: 1 }); M.gravC = std({ color: '#6f6c67', roughness: 1 });
  let seed = 11; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const q = new THREE.Quaternion(), e = new THREE.Euler(), m4 = new THREE.Matrix4();

  // geometry collector: merged per material, plus instanced helpers
  function kit(group) {
    const bins = new Map();
    const put = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, ord = 'XYZ') => {
      const g = geo.clone(); m4.compose(V(x, y, z), q.setFromEuler(e.set(rx, ry, rz, ord)), V(sx, sy, sz)); g.applyMatrix4(m4);
      if (!bins.has(mat)) bins.set(mat, []); bins.get(mat).push(g.index ? g.toNonIndexed() : g);
    };
    const box = (w, h, d, mat, x, y, z, rx, ry, rz, ord) => put(new THREE.BoxGeometry(w, h, d), mat, x, y, z, rx, ry, rz, 1, 1, 1, ord);
    // many copies of one small geometry: fn(i, m) fills the instance matrix
    const inst = (geo, mat, n, fn, colors) => {
      const im = new THREE.InstancedMesh(geo, mat, n); im.castShadow = false; im.receiveShadow = true;
      const c = new THREE.Color();
      for (let i = 0; i < n; i++) { fn(i, m4); im.setMatrixAt(i, m4); if (colors) { colors(i, c); im.setColorAt(i, c); } }
      group.add(im); return im;
    };
    const done = () => { for (const [mat, gs] of bins) { const mesh = new THREE.Mesh(mergeGeometries(gs.map((g) => { for (const a of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(a)) g.deleteAttribute(a); return g; })), mat); mesh.receiveShadow = true; mesh.castShadow = true; group.add(mesh); } };
    return { put, box, inst, done };
  }
  const place = (m, x, y, z, rx, ry, rz, sx = 1, sy = 1, sz = 1, ord = 'XYZ') => m.compose(V(x, y, z), q.setFromEuler(e.set(rx, ry, rz, ord)), V(sx, sy, sz));
  // a wire mesh in the XY plane (normal +z) of w x h, spacing s, wire thickness t
  function screen(K, w, h, s, t, mat, x, y, z, ry = 0) {
    const nx = Math.floor(w / s), ny = Math.floor(h / s), g = new THREE.BoxGeometry(1, 1, 1);
    const c = Math.cos(ry), sn = Math.sin(ry);
    K.inst(g, mat, nx + 1, (i, m) => { const lx = -w / 2 + i * (w / nx); place(m, x + lx * c, y, z - lx * sn, 0, ry, 0, t, h, t); });
    K.inst(g, mat, ny + 1, (i, m) => place(m, x, y - h / 2 + i * (h / ny), z, 0, ry, 0, w, t, t));
  }
  const leafGeo = (() => { const g = new THREE.CircleGeometry(1, 7); g.scale(1, 0.45, 1); return g; })();
  const needleGeo = new THREE.CylinderGeometry(0.0025, 0.0025, 1, 3);
  const chipGeo = new THREE.BoxGeometry(1, 1, 1);
  const LEAVES = [M.leafA, M.leafB, M.leafC, M.leafD];
  // scatter dry leaves (instanced, one mesh per colour)
  function leaves(K, n, fn) { LEAVES.forEach((mat, j) => K.inst(leafGeo, mat, Math.ceil(n / 4), (i, m) => fn(i * 4 + j, m))); }

  const B = {
    // 1 — front gable vent: molded cast surround, louvers, 1/4" bird screen behind, dust and needles on the sill
    attic(g) {
      const K = kit(g), x0 = 1.5, y0 = 6.46, z0 = 6.0;
      K.box(1.44, 0.11, 0.24, M.cast, x0, y0 - 0.45, z0 + 0.1); K.box(1.36, 0.05, 0.27, M.cast, x0, y0 - 0.39, z0 + 0.11);
      K.box(1.4, 0.1, 0.2, M.cast, x0, y0 + 0.44, z0 + 0.08); K.box(1.48, 0.04, 0.23, M.cast, x0, y0 + 0.5, z0 + 0.09);
      for (const s of [-1, 1]) { K.box(0.12, 0.84, 0.19, M.cast, x0 + s * 0.6, y0, z0 + 0.08); K.box(0.04, 0.7, 0.21, M.cast, x0 + s * 0.535, y0 + 0.01, z0 + 0.09); }
      K.box(1.06, 0.6, 0.02, M.dark, x0, y0 + 0.02, z0 + 0.155);
      screen(K, 1.04, 0.58, 0.0064, 0.0012, M.metal, x0, y0 + 0.02, z0 + 0.168);
      if (UP) {   // WDM ember-resistant mesh over the whole opening, in a stainless frame
        screen(K, 1.12, 0.68, 0.0035, 0.0007, M.ss, x0, y0 + 0.02, z0 + 0.262);
        for (const s of [-1, 1]) { K.box(1.18, 0.03, 0.03, M.ss, x0, y0 + 0.02 + s * 0.35, z0 + 0.262); K.box(0.03, 0.72, 0.03, M.ss, x0 + s * 0.575, y0 + 0.02, z0 + 0.262); }
      }
      for (let i = 0; i < 7; i++) {
        const y = y0 - 0.23 + i * 0.075;
        K.box(1.06, 0.012, 0.1, M.galv, x0, y, z0 + 0.2, -0.75); K.box(1.06, 0.006, 0.02, M.galv, x0, y + 0.03, z0 + 0.24, 0);
      }
      for (const s of [-1, 1]) K.box(0.02, 0.6, 0.12, M.galv, x0 + s * 0.53, y0 + 0.02, z0 + 0.2);
      for (const [dx, dy] of [[-0.6, 0.36], [0.6, 0.36], [-0.6, -0.34], [0.6, -0.34]]) K.put(new THREE.SphereGeometry(0.012, 8, 6), M.galv, x0 + dx, y0 + dy, z0 + 0.18);
      // weather staining below the sill
      for (let i = 0; i < 9; i++) K.box(0.03 + r() * 0.04, 0.25 + r() * 0.5, 0.004, M.stain, x0 - 0.55 + r() * 1.1, y0 - 0.75 - r() * 0.2, z0 + 0.003);
      if (!UP) leaves(K, 24, (i, m) => place(m, x0 - 0.6 + r() * 1.2, y0 - 0.335, z0 + 0.04 + r() * 0.18, -PI / 2, 0, r() * PI, 0.02 + r() * 0.015, 0.02 + r() * 0.015, 1));
      if (!UP) K.inst(needleGeo, M.needle, 60, (i, m) => place(m, x0 - 0.6 + r() * 1.2, y0 - 0.33, z0 + 0.05 + r() * 0.17, PI / 2, 0, r() * PI, 1, 0.08 + r() * 0.08, 1));
      K.done();
    },
    // 2 — bargeboards on the front gable: grain, checks, gaps, outlooker ends, nail heads, tile edge
    wood(g) {
      const K = kit(g), a = Math.atan2(1.6, 3.5);
      for (const s of [-1, 1]) {
        const cx = 1.5 + s * 1.524, cy = 6.43, cz = 6.64, rz = -s * a, c = Math.cos(rz), sn = Math.sin(rz);
        const at = (u, v, w) => [cx + u * c - v * sn, cy + u * sn + v * c, cz + w];
        K.box(3.27, 0.3, 0.17, UP ? M.coat : M.wood, cx, cy, cz, 0, 0, rz);
        K.box(3.2, 0.05, 0.2, UP ? M.coat : M.woodLt, ...at(0, 0.17, 0.01), 0, 0, rz);               // drip cap
        for (let i = 0; i < 6; i++) { const [x, y, z] = at(-1.4 + r() * 2.8, -0.08 + r() * 0.16, 0.088); if (!UP) K.box(0.25 + r() * 0.5, 0.006, 0.004, M.dark, x, y, z, 0, 0, rz); }   // checks
        for (let u = -1.5; u <= 1.5; u += 0.4) for (const v of [-0.08, 0.08]) { const [x, y, z] = at(u, v, 0.088); K.put(new THREE.CylinderGeometry(0.008, 0.008, 0.006, 8), M.metal, x, y, z, PI / 2, 0, 0); }
        for (let u = -1.35; u <= 1.4; u += 0.6) { const [x, y, z] = at(u, -0.22, -0.18); K.box(0.11, 0.15, 0.32, UP ? M.coat : M.woodGrey, x, y, z, 0, 0, rz); K.box(0.112, 0.152, 0.01, UP ? M.coat : M.endgrain, x, y, z + 0.16, 0, 0, rz); }
        { const [x, y, z] = at(0, -0.16, -0.06); K.box(3.25, 0.012, 0.02, UP ? M.coat : M.dark, x, y, z, 0, 0, rz); }               // gap at the stucco
        { const [x, y, z] = at(-1.62 * s, -0.02, 0); K.box(0.02, 0.32, 0.175, UP ? M.coat : M.endgrain, x, y, z, 0, 0, rz); }
      }
      K.done();
    },
    // 3 — copper half-round gutter: beaded lip, hangers, seams, end cap, dense leaf and needle debris, fascia
    gutter(g) {
      const K = kit(g), y = 3.24, z = 3.66, R = 0.155, x0 = 5.96, x1 = 13.64;
      const shell = new THREE.CylinderGeometry(R, R, x1 - x0, 28, 1, true, PI, PI); shell.rotateZ(PI / 2);
      K.put(shell, M.copper, (x0 + x1) / 2, y, z);
      for (const dz of [-R, R]) K.put(new THREE.CylinderGeometry(0.012, 0.012, x1 - x0, 8), M.copper, (x0 + x1) / 2, y, z + dz, 0, 0, PI / 2);
      for (let x = x0 + 0.3; x < x1; x += 0.6) { const h = new THREE.TorusGeometry(R + 0.008, 0.005, 4, 16, PI); K.put(h, M.copperDk, x, y, z, 0, PI / 2, PI); K.box(0.03, 0.012, 0.18, M.copperDk, x, y + 0.004, z - 0.1); }
      for (const x of [8.5, 11.1]) { const s = new THREE.CylinderGeometry(R + 0.01, R + 0.01, 0.07, 28, 1, true, PI, PI); s.rotateZ(PI / 2); K.put(s, M.copperDk, x, y, z); }
      for (const x of [x0, x1]) K.put(new THREE.CircleGeometry(R, 20, PI, PI), M.copperDk, x, y, z, 0, PI / 2, 0);
      K.box(7.7, 0.27, 0.1, M.wood, 9.8, 3.28, 3.47); K.box(7.7, 0.025, 0.16, M.galv, 9.8, 3.42, 3.5);
      // debris: settled leaves, oak leaves, pine needles, a few twigs — filling the trough toward the downspout
      const fill = (x) => 0.35 + 0.35 * Math.sin(x * 1.7) * Math.sin(x * 0.6 + 1);
      const inTrough = (u, f) => { const ang = PI / 2 + (u - 0.5) * PI * Math.min(0.95, 0.4 + f); return [z + Math.cos(ang) * R * 0.92, y - Math.sin(ang) * R * 0.92 + R * f * 0.9]; };
      const NL = UP ? 0 : SMALL ? 500 : 1100;
      if (UP) {   // FireStorm stainless guard: micro-perforated deck from the tile edge to the bead, trough clean underneath
        K.box(x1 - x0, 0.006, 2 * R + 0.06, M.ss, (x0 + x1) / 2, y + 0.012, z + 0.01, 0.08);
        for (let j = -4; j <= 4; j++) K.box(x1 - x0, 0.004, 0.006, M.metal, (x0 + x1) / 2, y + 0.016 + Math.sin(0.08) * j * 0.035, z + 0.01 + j * 0.035, 0.08);   // perforation rows
        for (let x = x0 + 0.6; x < x1; x += 1.2) K.box(0.025, 0.02, 2 * R + 0.07, M.ss, x, y + 0.02, z + 0.01, 0.08);
      }
      if (NL) leaves(K, NL, (i, m) => { const x = x0 + 0.05 + r() * (x1 - x0 - 0.1), f = fill(x), [zz, yy] = inTrough(r(), f); place(m, x, Math.min(y + 0.01, yy + r() * 0.02), zz, -PI / 2 + (r() - 0.5) * 0.9, r() * PI, (r() - 0.5) * 0.6, 0.03 + r() * 0.025, 0.03 + r() * 0.025, 1); });
      if (!UP) K.inst(needleGeo, M.needle, SMALL ? 500 : 1300, (i, m) => { const x = x0 + r() * (x1 - x0), [zz, yy] = inTrough(r(), fill(x)); place(m, x, Math.min(y + 0.015, yy + 0.01), zz, PI / 2 + (r() - 0.5) * 0.4, r() * PI, 0, 1, 0.06 + r() * 0.1, 1, 'YXZ'); });
      if (!UP) K.inst(new THREE.CylinderGeometry(0.004, 0.006, 1, 4), M.twig, 30, (i, m) => { const x = x0 + r() * (x1 - x0); place(m, x, y + 0.01, z + (r() - 0.5) * 0.2, PI / 2, r() * PI, 0, 1, 0.15 + r() * 0.25, 1, 'YXZ'); });
      // leaves caught on the tile edge above
      leaves(K, UP ? 24 : 120, (i, m) => { const x = x0 + r() * (x1 - x0); place(m, x, 3.42 + r() * 0.08, 3.3 + r() * 0.25, -PI / 2 + 0.4, r() * PI, 0, 0.03 + r() * 0.02, 0.03 + r() * 0.02, 1); });
      K.done();
    },
    // 4 — open eaves on the garage: rafter tails with shaped ends, blocking, screened frieze vents, skip-sheathing, debris, webs
    eaves(g) {
      const K = kit(g), a = Math.atan2(1.6, 3.5), ta = Math.tan(a);
      for (let x = -4.3; x <= -1.6; x += 0.6) {
        K.box(0.15, 0.22, 0.76, M.woodGrey, x, 5.79, 3.28, a);
        K.box(0.152, 0.1, 0.12, M.woodGrey, x, 5.7, 3.62, a - 0.55);                  // shaped tail
        K.box(0.152, 0.222, 0.008, M.endgrain, x, 5.66, 3.665, a);
        for (let i = 0; i < 3; i++) K.box(0.004, 0.006 + r() * 0.01, 0.2 + r() * 0.3, M.dark, x + 0.076, 5.76 + r() * 0.06, 3.15 + r() * 0.35, a);   // checks
      }
      if (UP) {   // boxed eave: James Hardie soffit closes the rafter bays, fascia caps the tails
        K.box(3.0, 0.016, 0.7, M.fc, -2.95, 5.6, 3.36);
        K.box(3.0, 0.24, 0.025, M.fc, -2.95, 5.7, 3.715);
        K.box(3.0, 0.03, 0.03, M.coat, -2.95, 5.592, 3.03); K.box(3.0, 0.03, 0.03, M.coat, -2.95, 5.592, 3.69);
        for (let x = -4.35; x < -1.5; x += 1.22) K.box(0.012, 0.018, 0.7, M.coat, x, 5.596, 3.36);
      }
      for (let x = -4.0; x < -1.6; x += 0.6) {
        // blocking at the wall with a screened vent hole (the classic ember entry under open eaves)
        K.box(0.45, 0.2, 0.05, M.woodGrey, x, 5.76, 3.03);
        K.box(0.26, 0.08, 0.02, M.dark, x, 5.75, 3.058);
        screen(K, 0.26, 0.08, 0.0064, 0.0012, M.rust, x, 5.75, 3.07);
        // skip-sheathing boards resting on the rafters, seen from below
        for (let j = 0; j < 4; j++) { const z = 3.08 + j * 0.155; K.box(0.45, 0.02, 0.145, j % 2 ? M.board : M.woodLt, x, 5.905 - (z - 3.28) * ta, z, a); }
        if (!UP) leaves(K, 8, (i, m) => place(m, x - 0.18 + r() * 0.36, 5.87 - r() * 0.02, 3.06 + r() * 0.05, 0, 0, r() * PI, 0.025, 0.025, 1));
      }
      K.done();
    },
    // 5 — deck: individual boards with gaps, screws, rim board, joist hangers, debris lodged in the gaps and corners
    deck(g) {
      const K = kit(g), y = 1.045;
      K.box(6, 0.004, 6.2, M.dark, -7, y - 0.001, 0);
      const bw = 0.14, gap = 0.008, nb = Math.floor(6.2 / (bw + gap));
      for (let i = 0; i < nb; i++) {
        const z = -3.1 + bw / 2 + i * (bw + gap), seg = 3 + Math.floor(r() * 2);
        let x = -10;
        while (x < -4) { const L = Math.min(-4 - x, 2.4 + r() * 1.8), w = (r() - 0.5) * 0.004; K.box(L - 0.004, 0.032, bw, UP ? (r() < 0.5 ? M.sealed : M.sealed) : r() < 0.5 ? M.board : M.woodLt, x + L / 2, y + 0.016 + w, z); x += L; }
        for (let jx = -9.7; jx < -4; jx += 0.6) for (const dz of [-0.04, 0.04]) K.put(new THREE.CylinderGeometry(0.006, 0.006, 0.004, 6), M.metal, jx, y + 0.033, z + dz);
      }
      K.box(6.05, 0.3, 0.12, M.wood, -7, 0.88, 3.12); K.box(0.12, 0.3, 6.25, M.wood, -10.02, 0.88, 0);
      K.box(6.1, 0.04, 0.16, M.woodLt, -7, 1.075, 3.13);
      for (let x = -9.7; x < -4; x += 0.6) { K.box(0.08, 0.2, 0.06, M.galv, x, 0.85, 3.03); K.box(0.06, 0.22, 0.12, M.wood, x, 0.84, 2.95); }
      // leaves and needles in the gaps, banked against the house wall and the rail posts
      if (!UP) leaves(K, SMALL ? 260 : 520, (i, m) => { const nearWall = r() < 0.5, x = nearWall ? -4.3 - r() * 0.8 : -10 + r() * 6, zi = Math.floor(r() * nb), z = -3.1 + bw + zi * (bw + gap) - gap / 2 + (nearWall ? (r() - 0.5) * 0.1 : 0); place(m, x, y + 0.036 + (nearWall ? r() * 0.03 : 0), nearWall ? -3 + r() * 6 : z, -PI / 2 + (r() - 0.5) * 0.6, r() * PI, 0, 0.03 + r() * 0.02, 0.03 + r() * 0.02, 1); });
      if (!UP) K.inst(needleGeo, M.needle, SMALL ? 300 : 700, (i, m) => { const zi = Math.floor(r() * nb), z = -3.1 + bw + zi * (bw + gap) - gap / 2; place(m, -10 + r() * 6, y + 0.03, z, 0, 0, PI / 2, 1, 0.06 + r() * 0.08, 1); });
      K.done();
    },
    // 6 — foundation vent: cast frame, corroded 1/4" screen with a torn corner, weep screed, rust streaks, debris and webs
    found(g) {
      const K = kit(g), x0 = -3.3, y0 = 0.33, z0 = 3.0;
      K.box(1.04, 0.07, 0.11, M.cast, x0, y0 - 0.22, z0 + 0.05); K.box(1.0, 0.06, 0.09, M.cast, x0, y0 + 0.2, z0 + 0.045);
      for (const s of [-1, 1]) K.box(0.08, 0.44, 0.09, M.cast, x0 + s * 0.46, y0, z0 + 0.045);
      K.box(0.84, 0.3, 0.02, M.dark, x0, y0, z0 + 0.1);
      if (UP) {   // WDM ember-resistant mesh retrofit: fine stainless mesh, new frame, sealed edges
        screen(K, 0.84, 0.3, 0.0035, 0.0007, M.ss, x0, y0, z0 + 0.12);
        for (const s of [-1, 1]) { K.box(0.88, 0.025, 0.025, M.ss, x0, y0 + s * 0.16, z0 + 0.125); K.box(0.025, 0.34, 0.025, M.ss, x0 + s * 0.43, y0, z0 + 0.125); }
      } else {
        screen(K, 0.82, 0.28, 0.0064, 0.0013, M.rust, x0, y0, z0 + 0.115);
        K.box(0.09, 0.06, 0.006, M.dark, x0 + 0.33, y0 + 0.09, z0 + 0.12, 0, 0, 0.3);               // torn corner
        for (let i = -5; i <= 5; i++) K.box(0.02, 0.29, 0.02, M.rust, x0 + i * 0.075, y0, z0 + 0.13);
      }
      K.box(1.2, 0.035, 0.06, M.galv, x0, 0.66, z0 + 0.03);                                      // weep screed
      if (!UP) for (let i = 0; i < 7; i++) K.box(0.025 + r() * 0.03, 0.12 + r() * 0.15, 0.004, M.stain, x0 - 0.4 + r() * 0.8, y0 - 0.32, z0 + 0.105);
      if (!UP) leaves(K, 90, (i, m) => place(m, x0 - 0.6 + r() * 1.2, 0.07 + r() * 0.08, z0 + 0.1 + r() * 0.3, -PI / 2 + (r() - 0.5) * 1.2, r() * PI, 0, 0.03 + r() * 0.02, 0.03 + r() * 0.02, 1));
      K.done();
    },
    // 7 — Zone 0 bed: thousands of bark chips, leaf litter, shrubs with real leaves and dead wood, bender-board edge
    zone(g) {
      const K = kit(g), MU = UP ? [M.gravA, M.gravB, M.gravC] : [M.mulchA, M.mulchB, M.mulchC];
      const NCH = SMALL ? 1600 : 4200;
      MU.forEach((mat) => K.inst(chipGeo, mat, Math.ceil(NCH / 3), (i, m) => UP ? place(m, -4 + r() * 3, 0.06 + r() * 0.02, 3.03 + r() * 1.38, r() * PI, r() * PI, r() * PI, 0.018 + r() * 0.025, 0.012 + r() * 0.015, 0.016 + r() * 0.022)
        : place(m, -4 + r() * 3, 0.06 + r() * 0.03, 3.03 + r() * 1.38, (r() - 0.5) * 0.6, r() * PI, (r() - 0.5) * 0.6, 0.03 + r() * 0.07, 0.006 + r() * 0.01, 0.02 + r() * 0.04)));
      if (UP) { K.done(); return; }   // Zone 0 cleared to gravel: no bark, litter or shrubs against the wall
      leaves(K, 180, (i, m) => place(m, -4 + r() * 3, 0.085, 3.03 + r() * 1.38, -PI / 2 + (r() - 0.5) * 0.5, r() * PI, 0, 0.03 + r() * 0.025, 0.03 + r() * 0.025, 1));
      K.box(3.05, 0.1, 0.012, M.woodGrey, -2.5, 0.05, 4.43); K.box(0.012, 0.1, 1.42, M.woodGrey, -4.02, 0.05, 3.72); K.box(0.012, 0.1, 1.42, M.woodGrey, -0.98, 0.05, 3.72);
      // shrubs: twig skeleton + a shell of individual leaves (the dry one is half dead)
      for (const [cx, cy, cz, R, dry] of [[-2.05, 0.42, 3.8, 0.58, false], [-1.35, 0.34, 3.85, 0.48, true]]) {
        K.inst(new THREE.CylinderGeometry(0.006, 0.012, 1, 4), M.twig, 40, (i, m) => { const a = r() * PI * 2, t = r() * 0.9; place(m, cx + Math.cos(a) * R * 0.3, 0.1 + t * (cy - 0.05), cz + Math.sin(a) * R * 0.3, (r() - 0.5) * 1.2, a, (r() - 0.5) * 1.2, 1, R * (0.6 + r() * 0.5), 1); });
        const n = SMALL ? 1600 : 3600;
        for (const [mat, f] of dry ? [[M.leafC, 0.45], [M.leafA, 0.25], [M.green, 0.3]] : [[M.green, 0.6], [M.greenDk, 0.4]]) K.inst(leafGeo, mat, Math.round(n * f), (i, m) => {
          const u = Math.max(-0.75, r() * 2 - 1), a = r() * PI * 2, rr = R * (0.55 + Math.pow(r(), 0.4) * 0.6), s = Math.sqrt(1 - u * u);
          place(m, cx + Math.cos(a) * s * rr, Math.max(0.1, cy + u * rr * 0.85), cz + Math.sin(a) * s * rr, r() * PI, r() * PI, r() * PI, 0.035 + r() * 0.02, 0.035 + r() * 0.02, 1);
        });
      }
      K.done();
    },
  };
  // where each set lives and when to show it
  const AT = { attic: [1.5, 6.46, 6.1], wood: [1.5, 6.4, 6.6], gutter: [9.8, 3.2, 3.66], eaves: [-3, 5.75, 3.3], deck: [-7, 1.05, 1.5], found: [-3.3, 0.33, 3.05], zone: [-2.5, 0.2, 3.7] };
  const SHRUB = ['3f5f2c', '8a7a3c'];
  const HIDE = { attic: (m) => true, gutter: (m) => true, found: (m) => true, zone: (m) => SHRUB.includes(m.material.color.getHexString()) };
  const D = Object.keys(B).map((k) => ({ k, p: V(...AT[k]), g: null, gN: null, gU: null, up: false, near: false, hide: HIDE[k] ? (reg[k] || []).filter(HIDE[k]) : [] }));
  const build = (d, up) => { const g = new THREE.Group(); g.name = 'detail-' + d.k + (up ? '-up' : ''); seed = 11 + d.k.length * 101; UP = up; B[d.k](g); UP = false; g.visible = false; scene.add(g); return g; };
  const pickG = (d) => { const want = d.up ? d.gU : d.gN; if (d.g && d.g !== want) d.g.visible = false; d.g = want; if (d.g) d.g.visible = d.near; };
  // fire on the detail sets: materials char toward black, with an ember glow that flickers while burning
  const CHAR = new THREE.Color(0.06, 0.045, 0.035), EMB = new THREE.Color(1.0, 0.32, 0.05);
  function own(d) {
    d.M = d.M || new Map(); d.mats = d.M.get(d.g);
    if (d.mats) return;
    const cache = new Map(); d.mats = []; d.M.set(d.g, d.mats);
    d.g.traverse((o) => { if (!o.material) return; if (!cache.has(o.material)) { const c = o.material.clone(); c.userData.c0 = c.color.clone(); cache.set(o.material, c); d.mats.push(c); } o.material = cache.get(o.material); });
  }
  return {
    // k: set; ch 0..1 how charred; glow 0..1 ember glow; t clock
    burn(k, ch, glow, t) {
      const d = D.find((x) => x.k === k); if (!d || !d.g) return;
      d.mats = d.M && d.M.get(d.g);
      if (!d.mats) { if (ch <= 0 && glow <= 0) return; own(d); }
      for (const m of d.mats) {
        m.color.copy(m.userData.c0).lerp(CHAR, Math.min(0.92, ch));
        if (m.emissive) { m.emissive.copy(EMB); m.emissiveIntensity = glow * (0.6 + 0.4 * Math.sin(t * 9 + m.id) * Math.sin(t * 5.3 + m.id * 0.7)); }
      }
    },
    // which sets show their upgraded version (side-by-side: called before each half is drawn); builds on demand
    show(up) {
      for (const d of D) { d.up = !!(up && up.has(d.k)); if (d.near && !(d.up ? d.gU : d.gN)) { if (d.up) d.gU = build(d, true); else d.gN = build(d, false); } pickG(d); }
    },
    update(cam) {
      for (const d of D) {
        const near = cam.position.distanceTo(d.p) < 16;
        if (near && !(d.up ? d.gU : d.gN)) { if (d.up) d.gU = build(d, true); else d.gN = build(d, false); }
        if (near !== d.near) { d.near = near; for (const m of d.hide) m.visible = !near; }
        pickG(d);
      }
    },
  };
}
