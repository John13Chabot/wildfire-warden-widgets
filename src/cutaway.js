// Visual storytelling for the close-ups, so the picture explains itself without labels.
// Each pathway plays in two acts:
//   1. outside: embers stream in and are drawn into the opening (vent / door gap / broken window) — or die on the mesh,
//      seal or tempered glass of an upgraded house
//   2. inside: a cut-away opens through the wall; the same embers drift in, land on something dry, glow, smoke, catch
//      and spread — while outside the opening starts to glow and pour smoke. An upgraded house stays dark inside.
// Driven by q (0..1, close-up progress after the camera arrives) and a mode per house: 'ign' | 'enter' | 'stop' | 'none'.
import * as THREE from 'three';
import * as T from './tex.js';
import { flameShaders, SOFT } from './fireshader.js';
import { FUELFX, styleFlame } from './fuelfx.js';

const PI = Math.PI, V = (x, y, z) => new THREE.Vector3(x, y, z);
const sm = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const hash = (i) => { const s = Math.sin(i * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };

// where the embers go in (world space), and the closer camera framing used for the cut-away close-ups
export const TARGET = { attic: [1.5, 6.46, 6.05], windows: [-4.08, 4.45, 2.0], walls: [9.5, 0.06, 3.1], fence: [-4.6, 0.25, -4.0], found: [-3.3, 0.33, 3.08], gutter: [9.8, 3.27, 3.66],
  zone: [-2.0, 0.15, 4.0], deck: [-7, 1.1, 2.0], eaves: [-3, 5.72, 3.4], roof: [-2.9, 5.95, 3.62], wood: [-0.8, 6.1, 6.72] };
export const CUTVIEW = {
  attic: { t: [1.5, 6.3, 5.6], az: 0.12, el: 0.42, d: 3.6 },
  windows: { t: [-4.05, 4.4, 2.0], az: -1.5, el: 0.06, d: 3.4 },
  walls: { t: [9.5, 0.7, 2.8], az: 0.06, el: 0.4, d: 3.8 },
  found: { t: [-3.3, 0.25, 2.6], az: -0.08, el: 0.55, d: 2.6 },
};
// act timing per pathway: when the cut-away opens (q)
export const OPEN = { attic: 0.34, windows: 0.5, walls: 0.34, found: 0.34 };

export function createCutaways({ SMALL, glowT }) {
  // ---------------- interior scene (drawn through the bubble) ----------------
  const scene = new THREE.Scene();
  const amb = new THREE.AmbientLight(0xfff2e0, 0.2); scene.add(amb);
  const hemi = new THREE.HemisphereLight(0xfff6ea, 0x3a2a20, 0.22); scene.add(hemi);
  const fx = new THREE.Scene();
  fx.userData.soft = (d, w, h, c) => { SOFT.tSD.value = d; SOFT.uSRes.value.set(w, h); SOFT.uSNear.value = c.near; SOFT.uSFar.value = c.far; };
  const SH = flameShaders(SMALL);
  const std = (o) => new THREE.MeshStandardMaterial({ roughness: 0.9, ...o });
  const M = {
    wood: std({ map: T.woodGrain([140, 100, 64]) }), woodDk: std({ map: T.woodGrain([96, 66, 40]) }),
    insul: std({ color: '#e7c27e', bumpMap: T.noiseGray(128, 24, 4), bumpScale: 6 }), sheath: std({ color: '#7a5636' }),
    box: std({ color: '#b48a58' }), boxDk: std({ color: '#8d6a42' }), wall: std({ color: '#efe6d6' }), floor: std({ map: T.woodGrain([150, 110, 74]) }),
    fabric: std({ color: '#c9a77c', side: THREE.DoubleSide }), sofa: std({ color: '#6b7a6a' }), rug: std({ color: '#8a4a3a' }),
    conc: std({ color: '#b9b2a6' }), metal: std({ color: '#55585a', metalness: 0.6, roughness: 0.4 }), car: std({ color: '#3e5566', metalness: 0.4, roughness: 0.4 }),
    dirt: std({ color: '#7a6248', bumpMap: T.noiseGray(128, 30, 4), bumpScale: 5 }), duct: std({ color: '#a9adb0', metalness: 0.7, roughness: 0.35 }),
    leaf: std({ color: '#8a6a2c', side: THREE.DoubleSide }), leaf2: std({ color: '#a8742f', side: THREE.DoubleSide }), batt: std({ color: '#e9b9a0' }),
    cut: std({ color: '#7a6654' }), red: std({ color: '#a8322a' }),
    sky: std({ color: '#f4e2c4', emissive: '#f4dcb0', emissiveIntensity: 0.9 }),
  };
  const box = (g, w, h, d, m, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); g.add(o); return o; };
  const bumpy = (w, d, amp, seg = 40) => { const g = new THREE.PlaneGeometry(w, d, seg, Math.round(seg * d / w)); g.rotateX(-PI / 2); const p = g.attributes.position; for (let i = 0; i < p.count; i++) p.setY(i, (T.fbm(p.getX(i) * 2.2, p.getZ(i) * 2.2, 3) - 0.5) * amp); g.computeVertexNormals(); return g; };
  const litter = (g, n, x0, x1, y, z0, z1, seed) => { const geo = new THREE.CircleGeometry(0.035, 6); geo.scale(1, 0.5, 1); for (let i = 0; i < n; i++) { const m = new THREE.Mesh(geo, i % 2 ? M.leaf : M.leaf2); m.position.set(x0 + hash(i + seed) * (x1 - x0), y + hash(i + seed + 9) * 0.03, z0 + hash(i + seed + 3) * (z1 - z0)); m.rotation.set(-PI / 2 + (hash(i + seed + 5) - 0.5), hash(i + seed + 7) * 6, 0); g.add(m); } };

  // fire kit per set: seeds in order of spread (first = where the embers pile up), flames, smoke, glows, light, embers
  function kit(set, seeds, { N = 110, gravity = 1, flameScale = 1, fuel = 'wood', size = 0.2 }) {
    const fxg = new THREE.Group(); fx.add(fxg);
    set.light = new THREE.PointLight(0xff7a2a, 0, 8, 1.5); set.light.position.copy(set.centre); set.g.add(set.light);
    set.flames = seeds.map((p, i) => { const f = SH.flame(i * 3.7 + set.k.length); f.visible = false; fxg.add(f); return { f, p: V(...p), d: i / seeds.length }; });
    set.smokes = [0, 1, 2, 3].map((i) => { const s = SH.smoke(i * 5.1 + 9); s.visible = false; fxg.add(s); return s; });
    const gm = new THREE.SpriteMaterial({ map: glowT, color: 0xff8a2a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    set.glows = seeds.map((p) => { const s = new THREE.Sprite(gm.clone()); s.position.set(...p); s.visible = false; fxg.add(s); return s; });
    const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), tp = new Float32Array(N * 6), tc = new Float32Array(N * 6);
    const eg = new THREE.BufferGeometry(); eg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); eg.setAttribute('color', new THREE.BufferAttribute(col, 3));
    set.emb = new THREE.Points(eg, new THREE.PointsMaterial({ map: glowT, size, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
    const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.BufferAttribute(tp, 3)); tg.setAttribute('color', new THREE.BufferAttribute(tc, 3));
    set.trail = new THREE.LineSegments(tg, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    set.emb.frustumCulled = set.trail.frustumCulled = false; fxg.add(set.emb, set.trail);
    // most embers land on the first seed (the pile right inside the opening); the rest scatter nearby
    set.E = Array.from({ length: N }, (_, i) => { const s = hash(i + 90) < 0.65 ? 0 : 1 + Math.floor(hash(i + 91) * Math.min(3, seeds.length - 1)); const L = seeds[s];
      return { t0: 0.02 + hash(i) * 0.55, dur: 0.14 + hash(i + 50) * 0.12, land: [L[0] + (hash(i * 3) - 0.5) * 0.45, L[1] + 0.02, L[2] + (hash(i * 3 + 2) - 0.5) * 0.45], j: V(hash(i + 7) - 0.5, hash(i + 8) - 0.5, hash(i + 9) - 0.5) }; });
    set.N = N; set.gravity = gravity; set.flameScale = flameScale; set.fuel = fuel; set.fxg = fxg;
  }

  // ---- attic behind the front gable vent ----
  function buildAttic() {
    const g = new THREE.Group(), set = { k: 'attic', g, centre: V(1.5, 6.4, 5.0), entry: V(1.5, 6.46, 5.95) };
    const y0 = 6.02, rise = 1.12, x0 = -0.95, x1 = 3.95, z0 = 3.1, z1 = 5.95;
    const ins = new THREE.Mesh(bumpy(x1 - x0, z1 - z0, 0.09), M.insul); ins.position.set((x0 + x1) / 2, y0 + 0.06, (z0 + z1) / 2); g.add(ins);
    for (let z = z0 + 0.2; z < z1; z += 0.6) {
      for (const s of [-1, 1]) box(g, Math.hypot(2.45, rise), 0.14, 0.05, M.wood, 1.5 + s * 1.22, y0 + rise / 2, z, 0, 0, -s * Math.atan2(rise, 2.45));
      box(g, 1.6, 0.1, 0.04, M.wood, 1.5, y0 + rise * 0.62, z);
    }
    for (let x = x0 + 0.3; x < x1; x += 0.4) box(g, 0.05, 0.1, z1 - z0, M.woodDk, x, y0 + 0.06, (z0 + z1) / 2);   // ceiling joists in the insulation
    box(g, 0.05, 0.18, z1 - z0, M.woodDk, 1.5, y0 + rise - 0.05, (z0 + z1) / 2);
    for (const s of [-1, 1]) box(g, Math.hypot(2.5, rise) + 0.1, 0.02, z1 - z0, M.sheath, 1.5 + s * 1.25, y0 + rise / 2 + 0.1, (z0 + z1) / 2, 0, 0, -s * Math.atan2(rise, 2.5));
    for (const sd of [-1, 1]) box(g, Math.hypot(2.5, rise) + 0.4, 0.45, z1 - z0 + 0.1, M.cut, 1.5 + sd * 1.25 + sd * 0.12, y0 + rise / 2 + 0.38, (z0 + z1) / 2, 0, 0, -sd * Math.atan2(rise, 2.5));
    box(g, x1 - x0, rise + 0.2, 0.05, M.sheath, 1.5, y0 + rise / 2, z0);
    // cut faces: ceiling below, and the sliced gable wall with the vent opening glowing with daylight
    box(g, x1 - x0 + 0.3, 0.3, z1 - z0, M.cut, 1.5, y0 - 0.15, (z0 + z1) / 2);
    for (const [w, h, x, y] of [[1.12, 0.02, 1.5, 6.17], [1.12, 0.02, 1.5, 6.78], [0.02, 0.62, 0.94, 6.48], [0.02, 0.62, 2.06, 6.48]]) box(g, w, h, 0.02, M.sky, x, y, z1);
    // what catches first: old cardboard boxes and dust right under the vent, then insulation, then the framing
    box(g, 0.55, 0.35, 0.42, M.box, 1.25, y0 + 0.24, 5.45, 0, 0.25); box(g, 0.45, 0.3, 0.4, M.boxDk, 1.95, y0 + 0.21, 5.35, 0, -0.2);
    box(g, 0.5, 0.35, 0.4, M.box, 0.2, y0 + 0.25, 4.2, 0, 0.3); box(g, 0.45, 0.3, 0.45, M.boxDk, 2.9, y0 + 0.22, 3.8, 0, -0.2);
    litter(g, 40, 0.9, 2.1, y0 + 0.1, 5.1, 5.85, 3);
    scene.add(g);
    kit(set, [[1.4, y0 + 0.45, 5.45], [1.95, y0 + 0.4, 5.35], [1.0, y0 + 0.12, 4.9], [2.3, y0 + 0.12, 4.6], [0.4, y0 + 0.5, 4.2], [1.5, y0 + 0.9, 4.4], [2.9, y0 + 0.4, 3.8], [1.5, y0 + 1.0, 3.6], [0.6, y0 + 0.7, 3.5]], { fuel: 'litter', flameScale: 1.3 });
    return set;
  }
  // ---- upstairs room behind the west window ----
  function buildRoom() {
    const g = new THREE.Group(), set = { k: 'windows', g, centre: V(-3.6, 4.45, 2.0), entry: V(-4.0, 4.4, 2.0) };
    const yf = 3.35, yc = 6.0, x0 = -3.95, x1 = -0.6, z0 = 0.2, z1 = 3.1;
    box(g, x1 - x0, 0.05, z1 - z0, M.floor, (x0 + x1) / 2, yf, (z0 + z1) / 2);
    box(g, x1 - x0, 0.05, z1 - z0, M.wall, (x0 + x1) / 2, yc, (z0 + z1) / 2);
    box(g, 0.05, yc - yf, z1 - z0, M.wall, x1, (yf + yc) / 2, (z0 + z1) / 2);
    for (const z of [z0, z1]) box(g, x1 - x0, yc - yf, 0.05, M.wall, (x0 + x1) / 2, (yf + yc) / 2, z);
        set.pane = box(g, 0.02, 1.7, 0.92, new THREE.MeshStandardMaterial({ color: '#cfe0e6', transparent: true, opacity: 0.3 }), x0 + 0.01, 4.45, 2.0);
    set.curtains = [];
    for (const s of [-1, 1]) { const cg = new THREE.PlaneGeometry(0.5, 2.2, 12, 1); const p = cg.attributes.position; for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin(p.getX(i) * 28) * 0.035); cg.computeVertexNormals(); const c = new THREE.Mesh(cg, M.fabric.clone()); c.position.set(x0 + 0.14, 4.5, 2.0 + s * 0.66); c.rotation.y = PI / 2; g.add(c); set.curtains.push(c); }
    box(g, 0.9, 0.45, 1.9, M.sofa, -1.2, yf + 0.25, 1.6); box(g, 0.25, 0.5, 1.9, M.sofa, -0.8, yf + 0.55, 1.6);
    box(g, 1.6, 0.01, 1.4, M.rug, -2.2, yf + 0.03, 1.7); box(g, 0.4, 0.5, 0.4, M.wood, -3.5, yf + 0.25, 0.6); box(g, 0.03, 0.6, 0.8, M.red, x1 - 0.03, 4.8, 1.6);
    scene.add(g);
    // curtains catch first (both sides of the opening), then the rug and sofa, then the ceiling
    kit(set, [[-3.8, 3.9, 1.34], [-3.8, 3.9, 2.66], [-3.8, 4.6, 1.34], [-3.8, 4.7, 2.66], [-3.3, yf + 0.1, 1.9], [-2.4, yf + 0.1, 1.6], [-1.3, yf + 0.5, 1.6], [-3.4, 5.5, 2.0], [-2.4, 5.7, 1.8]], { gravity: 0.5, fuel: 'struct' });
    return set;
  }
  // ---- garage behind the middle carriage door ----
  function buildGarage() {
    const g = new THREE.Group(), set = { k: 'walls', g, centre: V(9.5, 0.7, 2.0), entry: V(9.5, 0.04, 3.0) };
    box(g, 7, 0.05, 6, M.conc, 9.5, 0.0, 0);
    box(g, 7, 3.6, 0.05, M.wall, 9.5, 1.8, -2.95); for (const x of [6.05, 12.95]) box(g, 0.05, 3.6, 6, M.wall, x, 1.8, 0);
    box(g, 7, 0.05, 6, M.wall, 9.5, 3.55, 0);
    box(g, 1.95, 0.03, 0.05, M.sky, 9.5, 0.015, 2.98); box(g, 7, 1.0, 0.06, M.cut, 9.5, 3.1, 3.0);
    box(g, 1.9, 0.7, 4.2, M.car, 7.6, 0.55, -0.4); box(g, 1.6, 0.55, 2.2, M.car, 7.6, 1.15, -0.6);
    box(g, 0.4, 2.2, 3.0, M.metal, 12.7, 1.1, -0.8); for (let i = 0; i < 6; i++) box(g, 0.2, 0.28, 0.2, i % 2 ? M.red : M.box, 12.65, 0.5 + Math.floor(i / 2) * 0.7, -1.8 + (i % 2) * 0.9);
    // boxes, a rag pile and leaves blown in under the door: right where the embers come in
    box(g, 0.6, 0.45, 0.5, M.box, 9.2, 0.23, 2.3, 0, 0.2); box(g, 0.5, 0.4, 0.45, M.boxDk, 9.85, 0.2, 2.4, 0, -0.15); box(g, 0.45, 0.35, 0.4, M.box, 9.45, 0.62, 2.35, 0, 0.1);
    box(g, 0.9, 0.06, 0.6, M.fabric, 10.1, 0.04, 2.6); litter(g, 50, 8.8, 10.4, 0.03, 2.5, 2.95, 11);
    box(g, 2.2, 0.08, 0.7, M.wood, 10.4, 0.95, -2.5);
    scene.add(g);
    kit(set, [[9.6, 0.1, 2.75], [10.1, 0.12, 2.6], [9.2, 0.5, 2.5], [9.85, 0.45, 2.55], [9.45, 0.85, 2.5], [9.0, 0.1, 2.6], [10.5, 1.05, -2.4]], { gravity: 1.4, fuel: 'struct' });
    return set;
  }
  // ---- crawl space behind the foundation vent ----
  function buildCrawl() {
    const g = new THREE.Group(), set = { k: 'found', g, centre: V(-3.3, 0.15, 2.3), entry: V(-3.3, 0.33, 3.0) };
    const yg = 0.0, yj = 0.6, x0 = -4.0, x1 = -0.5, z0 = 0.4, z1 = 2.95;
    const dirt = new THREE.Mesh(bumpy(x1 - x0, z1 - z0, 0.06), M.dirt); dirt.position.set((x0 + x1) / 2, yg + 0.02, (z0 + z1) / 2); g.add(dirt);
    for (let x = x0 + 0.2; x < x1; x += 0.4) box(g, 0.05, 0.16, 1.5, M.wood, x, yj - 0.08, z0 + 0.75);   // floor joists overhead (cut back so the vent end is open)   // floor joists overhead
        const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, z1 - z0, 14), M.duct); duct.rotation.x = PI / 2; duct.position.set(-1.6, yj - 0.25, (z0 + z1) / 2); g.add(duct);
    box(g, x1 - x0, yj, 0.08, M.cut, (x0 + x1) / 2, yj / 2, z0);   // back
    // sliced foundation wall around the vent opening
    
    for (const [w, h, x, y] of [[0.84, 0.03, -3.3, 0.48], [0.84, 0.03, -3.3, 0.18], [0.03, 0.3, -3.72, 0.33], [0.03, 0.3, -2.88, 0.33]]) box(g, w, h, 0.05, M.sky, x, y, 3.0);
    // dry debris, old cardboard and scrap wood on the dirt just inside the vent
    litter(g, 70, -3.9, -2.6, yg + 0.04, 2.2, 2.9, 21);
    box(g, 0.5, 0.03, 0.4, M.box, -3.0, yg + 0.06, 2.55, 0, 0.3); box(g, 0.8, 0.06, 0.09, M.wood, -3.6, yg + 0.07, 2.3, 0, 0.6); box(g, 0.6, 0.06, 0.09, M.woodDk, -2.7, yg + 0.06, 2.1, 0, -0.4);
    scene.add(g);
    kit(set, [[-3.3, 0.06, 2.65], [-3.0, 0.07, 2.5], [-3.6, 0.07, 2.35], [-3.3, 0.35, 2.3], [-2.7, 0.1, 2.1], [-3.3, 0.48, 1.7], [-2.4, 0.45, 1.6]], { gravity: 1.6, fuel: 'litter', size: 0.12, flameScale: 0.6 });
    return set;
  }
  const SETS = { attic: buildAttic(), windows: buildRoom(), walls: buildGarage(), found: buildCrawl() };
  for (const k in SETS) SETS[k].g.visible = SETS[k].fxg.visible = false;

  // ---------------- outside: ember stream, glow and smoke at the opening, window glass ----------------
  const outFx = new THREE.Group();
  const HN = SMALL ? 40 : 70, hp = new Float32Array(HN * 3), hc = new Float32Array(HN * 3), tp = new Float32Array(HN * 6), tc = new Float32Array(HN * 6);
  const hg = new THREE.BufferGeometry(); hg.setAttribute('position', new THREE.BufferAttribute(hp, 3)); hg.setAttribute('color', new THREE.BufferAttribute(hc, 3));
  const hero = new THREE.Points(hg, new THREE.PointsMaterial({ map: glowT, size: 0.32, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.BufferAttribute(tp, 3)); tg.setAttribute('color', new THREE.BufferAttribute(tc, 3));
  const trails = new THREE.LineSegments(tg, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  hero.frustumCulled = trails.frustumCulled = false; outFx.add(hero, trails);
  const mouth = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowT, color: 0xff7a22, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); mouth.visible = false; outFx.add(mouth);
  const puffs = [0, 1, 2].map((i) => { const s = SH.smoke(60 + i * 4.3); s.visible = false; outFx.add(s); return s; });
  // window: heat on the glass, crack, then a ragged hole with the glass falling out
  const canvasTex = (draw) => { const c = document.createElement('canvas'); c.width = c.height = 256; draw(c.getContext('2d')); return new THREE.CanvasTexture(c); };
  const crackTex = canvasTex((x) => { let s = 7; const r = () => (s = (s * 16807) % 2147483647) / 2147483647; const ix = 150, iy = 110;
    for (const [w, a] of [[5, 'rgba(20,20,20,0.6)'], [2.2, 'rgba(255,255,255,1)']]) { x.strokeStyle = a; x.lineWidth = w; s = 7;
      for (let i = 0; i < 16; i++) { let ang = (i / 16) * PI * 2 + r() * 0.4, px = ix, py = iy; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 10; k++) { ang += (r() - 0.5) * 0.6; px += Math.cos(ang) * (11 + r() * 14); py += Math.sin(ang) * (11 + r() * 14); x.lineTo(px, py); } x.stroke(); }
      for (let k = 0; k < 4; k++) { x.beginPath(); x.arc(ix, iy, 16 + k * 24 + r() * 6, 0, PI * 2); x.stroke(); } } });
  const holeTex = canvasTex((x) => { x.fillStyle = 'rgba(0,0,0,0)'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#120b07'; x.beginPath(); let s = 3; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i <= 24; i++) { const a = (i / 24) * PI * 2, rr = 95 + r() * 30; x.lineTo(128 + Math.cos(a) * rr * 0.95, 128 + Math.sin(a) * rr * 1.1); } x.fill(); });
  const pl = (tex, o) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.7), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false, ...o })); m.position.set(-4.075, 4.45, 2.0); m.rotation.y = -PI / 2; return m; };
  const heat = pl(null, { color: 0xff7a20, blending: THREE.AdditiveBlending }), crack = pl(crackTex), hole = pl(holeTex);
  heat.position.x = -4.08; hole.position.x = -4.07;
  const SN = 40, sp = new Float32Array(SN * 3), sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const shards = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xe8f4f8, size: 0.11, transparent: true, opacity: 0.95, depthWrite: false })); shards.frustumCulled = false;
  const glassFx = new THREE.Group(); glassFx.add(heat, crack, hole, shards); glassFx.visible = false;

  const C1 = new THREE.Color(), CH = new THREE.Color(1.7, 0.8, 0.22), CO = new THREE.Color(0.9, 0.25, 0.05);
  // update trail buffer entry
  const trail = (arr, carr, i, P, vel, c, k = 3) => { arr[i * 6] = P.x; arr[i * 6 + 1] = P.y; arr[i * 6 + 2] = P.z; arr[i * 6 + 3] = P.x - vel.x * k; arr[i * 6 + 4] = P.y - vel.y * k; arr[i * 6 + 5] = P.z - vel.z * k; carr.set([c.r, c.g, c.b, 0, 0, 0], i * 6); };
  const VEL = V(0, 0, 0), P0 = V(0, 0, 0);
  return {
    scene, fx, outFx, glassFx, has: (k) => !!SETS[k],
    anchor: (k) => SETS[k] && SETS[k].centre,
    tick(dt) { SH.time.value += dt; SH.wx.value += dt * 0.3; },
    // inside, for one house. q: close-up progress; the inside act runs from OPEN[k]
    interior(k, mode, q, t, lean = 0.3) {
      for (const kk in SETS) SETS[kk].g.visible = SETS[kk].fxg.visible = kk === k;
      const S = SETS[k]; if (!S) return;
      const p = Math.max(0, (q - OPEN[k] + 0.06) / (1 - OPEN[k] + 0.06));
      const ign = mode === 'ign', entering = ign || mode === 'enter';
      const pos = S.emb.geometry.attributes.position.array, col = S.emb.geometry.attributes.color.array, tp2 = S.trail.geometry.attributes.position.array, tc2 = S.trail.geometry.attributes.color.array;
      S.E.forEach((e, i) => {
        const u = (p - e.t0) / e.dur; let b = 0;
        if (entering && u > 0) {
          const v = Math.min(1, u), a = S.entry, l = e.land;
          P0.set(a.x + (l[0] - a.x) * v + e.j.x * 0.2 * Math.sin(v * PI), a.y + (l[1] - a.y) * Math.pow(v, 1 + S.gravity * 0.6) + 0.1 * Math.sin(v * PI) * (1 - S.gravity * 0.3), a.z + (l[2] - a.z) * v + e.j.z * 0.2 * Math.sin(v * PI));
          VEL.set((l[0] - a.x) * 0.05, (l[1] - a.y) * 0.05, (l[2] - a.z) * 0.05);
          b = u < 1 ? 1.2 : (ign ? Math.max(0.35, 1 - (u - 1) * 0.4) : Math.max(0, 1 - (u - 1) * 1.1)) * (0.65 + 0.35 * Math.sin(t * 12 + i));
          C1.copy(u < 1 ? CH : CO).multiplyScalar(b);
          pos[i * 3] = P0.x; pos[i * 3 + 1] = P0.y; pos[i * 3 + 2] = P0.z;
          if (u < 1) trail(tp2, tc2, i, P0, VEL, C1, 2.2); else { tp2[i * 6 + 1] = tp2[i * 6 + 4] = -999; }
        } else { pos[i * 3 + 1] = -999; tp2[i * 6 + 1] = tp2[i * 6 + 4] = -999; C1.setRGB(0, 0, 0); }
        col[i * 3] = C1.r; col[i * 3 + 1] = C1.g; col[i * 3 + 2] = C1.b;
      });
      S.emb.geometry.attributes.position.needsUpdate = S.emb.geometry.attributes.color.needsUpdate = S.trail.geometry.attributes.position.needsUpdate = S.trail.geometry.attributes.color.needsUpdate = true;
      // the pile glows, smokes, catches, then fire spreads seed by seed
      const glow = ign ? sm(0.2, 0.4, p) : 0, fire = ign ? sm(0.38, 0.98, p) : 0;
      S.glows.forEach((gl, i) => { const on = ign && glow > 0 && i / S.glows.length < 0.22 + fire; gl.visible = on; if (on) { const s = (0.3 + 0.5 * glow + 0.7 * fire) * (0.85 + 0.15 * Math.sin(t * 9 + i)) * S.flameScale; gl.scale.set(s, s, 1); gl.material.opacity = 0.55 + 0.4 * glow; } });
      const fx2 = FUELFX[S.fuel] || FUELFX.wood;
      S.flames.forEach((F, i) => {
        const lv = sm(F.d * 0.75, F.d * 0.75 + 0.22, fire); F.f.visible = lv > 0.02; if (!F.f.visible) return;
        const sc = (0.22 + 1.15 * lv) * S.flameScale; F.f.position.copy(F.p); F.f.scale.set(sc * 0.8, sc * 1.45, 1);
        F.f.material.uniforms.uI.value = 0.65 + 0.5 * lv; F.f.material.uniforms.uLean.value = lean * 0.3; styleFlame(F.f, fx2);
      });
      const smoke = ign ? sm(0.28, 0.55, p) : 0;
      S.smokes.forEach((s, i) => { s.visible = smoke > 0.02; if (!s.visible) return; const u = (t * 0.14 + i / 4) % 1; const ss = (0.5 + 1.8 * u + 1.4 * fire) * S.flameScale;
        s.position.set(S.flames[0].p.x + (i - 1.5) * 0.35, S.flames[0].p.y + 0.2 + u * 1.0 * S.flameScale, S.flames[0].p.z - u * 0.4); s.scale.set(ss, ss, 1); s.material.uniforms.uCol.value.setRGB(0.16, 0.14, 0.12); s.material.uniforms.uI.value = smoke * (1 - u) * 0.95; });
      S.light.position.copy(S.flames[Math.min(S.flames.length - 1, Math.floor(fire * 3))].p).add(V(0, 0.3, 0));
      S.light.intensity = (glow * 3 + fire * 16) * (0.85 + 0.15 * Math.sin(t * 11));
      amb.intensity = 0.2 + fire * 0.12;
      if (S.curtains) S.curtains.forEach((c) => c.material.color.set('#c9a77c').lerp(new THREE.Color('#24170e'), fire * 0.9));
      if (S.pane) S.pane.visible = !(ign && q > OPEN.windows - 0.08);
    },
    // outside act + consequences: ember stream drawn into the opening (or dying on the upgrade), then glow and smoke
    // pouring out of the opening once it burns inside
    outside(k, mode, q, t, target, enters, lean = 0.4) {
      outFx.visible = mode !== 'none' && q > 0 && q < 1;
      const tgt = V(...target), sucks = enters && mode !== 'stop';
      const open = OPEN[k] ?? 0.5;
      for (let i = 0; i < HN; i++) {
        const t0 = 0.0 + hash(i + 300) * (open + 0.25), dur = 0.12 + hash(i + 400) * 0.1, u = (q - t0) / dur;
        const from = V(tgt.x - 3 - hash(i + 5) * 3.5, tgt.y + 0.8 + hash(i + 6) * 2.2, tgt.z + (hash(i + 7) - 0.5) * 3.5 + 1.2);
        let b = 0;
        if (u > 0 && u < 1) {
          // fast in the wind, then slowing and swirling into the opening (ease-in on the last stretch)
          const v = 1 - Math.pow(1 - u, 2.2);
          P0.copy(from).lerp(tgt, v); P0.y += Math.sin(v * PI) * 0.5; const sw = (1 - v) * 0.25; P0.x += Math.sin(t * 5 + i) * sw; P0.z += Math.cos(t * 4 + i) * sw;
          VEL.copy(tgt).sub(from).multiplyScalar(0.05 * (1 - u * 0.7)); b = 1.25;
        } else if (u >= 1) {
          const w = (u - 1) * dur * 6;
          if (mode === 'stop' || mode === 'none') { P0.copy(tgt).add(V(-w * 0.5 * hash(i + 11), -w * w * 1.6, (hash(i + 12) - 0.5) * w * 0.6)); VEL.set(0, -0.02, 0); b = Math.max(0, 1 - w * 2.2); }
          else if (!enters) { P0.copy(tgt).add(V((hash(i + 13) - 0.5) * 0.5, (hash(i + 14) - 0.5) * 0.15, (hash(i + 15) - 0.5) * 0.5)); VEL.set(0, 0, 0); b = 0.55 + 0.4 * Math.sin(t * 10 + i); }
          else b = 0;
        }
        if (b <= 0) { hp[i * 3 + 1] = -999; tp[i * 6 + 1] = tp[i * 6 + 4] = -999; continue; }
        C1.copy(CH).multiplyScalar(b); hp[i * 3] = P0.x; hp[i * 3 + 1] = P0.y; hp[i * 3 + 2] = P0.z; hc[i * 3] = C1.r; hc[i * 3 + 1] = C1.g; hc[i * 3 + 2] = C1.b;
        trail(tp, tc, i, P0, VEL, C1);
      }
      hg.attributes.position.needsUpdate = hg.attributes.color.needsUpdate = tg.attributes.position.needsUpdate = tg.attributes.color.needsUpdate = true;
      // the opening: a hungry glow while embers pour in, then orange light and smoke from inside once it burns
      const burning = mode === 'ign' && SETS[k] ? sm(open + 0.25, open + 0.5, q) : 0;
      const draw = sucks ? sm(0.1, 0.3, q) * (1 - sm(open + 0.1, open + 0.3, q)) * 0.6 : 0;
      mouth.visible = (draw + burning) > 0.02; if (mouth.visible) { mouth.position.copy(tgt); const s = (k === 'walls' ? 1.6 : 0.9) * (0.6 + draw * 0.4 + burning * 0.9) * (0.9 + 0.1 * Math.sin(t * 9)); mouth.scale.set(s, k === 'walls' ? s * 0.25 : s * 0.7, 1); mouth.material.opacity = Math.min(1, draw + burning); }
      puffs.forEach((s, i) => { s.visible = burning > 0.05; if (!s.visible) return; const u = (t * 0.18 + i / 3) % 1; const ss = 0.4 + 1.6 * u;
        s.position.set(tgt.x + u * (0.8 + 2.5 * lean), tgt.y + 0.1 + u * 1.4, tgt.z + 0.25 + u * 0.4); s.scale.set(ss, ss, 1); s.material.uniforms.uCol.value.setRGB(0.14, 0.12, 0.11); s.material.uniforms.uI.value = burning * (1 - u) * 0.9; });
    },
    // single-pane window: heats, cracks, shatters and falls out (ign); tempered: heats and holds (stop)
    glass(mode, q, t) {
      glassFx.visible = mode !== 'none';
      if (!glassFx.visible) return;
      const ign = mode === 'ign', brk = ign ? sm(0.36, 0.4, q) : 0;
      heat.material.opacity = sm(0.02, 0.3, q) * 0.5 * (1 - brk) * (0.8 + 0.2 * Math.sin(t * 7));
      crack.material.opacity = ign ? sm(0.24, 0.3, q) * (1 - brk) : 0;
      hole.material.opacity = brk;
      for (let i = 0; i < SN; i++) {
        if (!(ign && q > 0.36)) { sp[i * 3 + 1] = -999; continue; }
        const f = Math.min(1, (q - 0.36) / (0.2 + hash(i) * 0.15));
        sp[i * 3] = -4.09 - f * (0.25 + 0.5 * hash(i + 3)); sp[i * 3 + 1] = 3.75 + hash(i + 1) * 1.5 - f * f * 3.8; sp[i * 3 + 2] = 1.6 + hash(i + 2) * 0.8;
      }
      sg.attributes.position.needsUpdate = true;
    },
    off() { for (const kk in SETS) SETS[kk].g.visible = SETS[kk].fxg.visible = false; outFx.visible = false; glassFx.visible = false; },
  };
}
