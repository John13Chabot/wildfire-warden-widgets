import * as THREE from 'three';
import * as T from './tex.js';
import { flameShaders } from './fireshader.js';

// ---------------------------------------------------------------------------
// Rule-based wildfire exposure model (illustrative, deterministic).
// Sim time is in minutes from first ember arrival. Phases: ember storm 0–60,
// fire front 60–80, after the front 80–240 (hidden fires take hold).
// ---------------------------------------------------------------------------
export const EXT = ['attic', 'wood', 'gutter', 'eaves', 'deck', 'found', 'zone']; // map order 1–7
export const INNER = ['atticSp', 'crawl', 'struct'];
export const TMAX = 240;
export const PHASES = [[0, 60, 'Ember storm'], [60, 80, 'Fire front'], [80, 240, 'After the front']];
export const WIND = { calm: { f: 0.6, n: 'Light wind' }, windy: { f: 1, n: 'Windy' }, santaana: { f: 1.5, n: 'Santa Ana' } };

export const UPG = {
  attic: { n: 'Attic & gable vents', fix: 'Ember-resistant vent mesh or Brandguard vents', svc: 'vents' },
  wood: { n: 'Fascia, trim & exposed wood', fix: 'FireFree 88 or Phos-Chek FORTIFY', svc: 'firefree-88' },
  gutter: { n: 'Gutters & roof edge', fix: 'Stainless steel gutter guards', svc: 'gutters' },
  eaves: { n: 'Open eaves & soffits', fix: 'Boxed eave enclosure', svc: 'eaves' },
  deck: { n: 'Deck', fix: 'DeckGuard fire-resistant coating', svc: 'deckguard' },
  found: { n: 'Foundation & crawl space vents', fix: 'Ember-resistant vent mesh or Brandguard vents', svc: 'vents' },
  zone: { n: 'Zone 0: the first 5 feet', fix: 'Zone 0 clean-up + Phos-Chek FORTIFY', svc: 'fortify' },
};

const IGN = {
  zone: 'Embers ignite mulch and plants against the house',
  gutter: 'Embers ignite leaves and needles in the gutter',
  attic: 'Embers blow through the 1/4" gable vent screen',
  found: 'Embers and flames enter a foundation vent',
  deck: 'Embers lodge between deck boards and ignite',
  eaves: 'Heat and embers collect in the open eaves',
  wood: 'Flames reach the exposed fascia and trim',
  atticSp: 'Attic fire, hidden from view',
  crawl: 'Fire in the crawl space under the floor',
  struct: 'Fire spreads through the house',
};
const STOP = {
  zone: 'Clear Zone 0: embers land on nothing that burns',
  gutter: 'Gutter guard: no debris for embers to ignite',
  attic: 'Vent mesh blocks the embers',
  found: 'Vent mesh keeps embers out of the crawl space',
  deck: 'DeckGuard: the deck boards resist ignition',
  eaves: 'Boxed eaves: no pockets to trap heat and embers',
  wood: 'Coated wood resists the flames',
};

// exposure: [node, minute (before wind scaling), kind, min wind factor]
const EXPO = [
  ['gutter', 18, 'ember', 0], ['zone', 22, 'ember', 0], ['attic', 30, 'ember', 0], ['deck', 35, 'ember', 0],
  ['found', 40, 'ember', 1], ['eaves', 66, 'front', 0], ['wood', 72, 'front', 1.5],
];
// spread: [from, to, delay min]
const EDGE = [
  ['gutter', 'wood', 12], ['gutter', 'eaves', 18], ['zone', 'found', 15], ['zone', 'wood', 25],
  ['deck', 'wood', 15], ['deck', 'eaves', 25], ['wood', 'eaves', 10], ['attic', 'atticSp', 8],
  ['eaves', 'atticSp', 12], ['wood', 'atticSp', 30], ['found', 'crawl', 10], ['crawl', 'struct', 60], ['atticSp', 'struct', 45],
];

export function simulate(up, wind) {
  const wf = WIND[wind].f, ign = {}, cause = {}, stop = {}, ember = {};
  const can = (k) => !up.has(k);
  const hit = (k, t, c) => { if (can(k)) { if (!(ign[k] <= t)) { ign[k] = t; cause[k] = c; } } else if (!(stop[k] <= t)) stop[k] = t; };
  for (const [k, t, kind, mw] of EXPO) if (wf >= mw) { const tt = kind === 'ember' ? Math.round((t / wf) * (k === 'attic' && wf < 1 ? 1.5 : 1)) : t; if (kind === 'ember') ember[k] = tt; hit(k, tt, kind); }
  for (let it = 0; it < 12; it++) for (const [a, b, d] of EDGE) if (ign[a] != null) hit(b, ign[a] + d, a);
  const ev = [];
  for (const k in ign) ev.push({ k, t: ign[k], kind: 'ign', text: IGN[k], from: cause[k] });
  for (const k in stop) ev.push({ k, t: stop[k], kind: 'stop', text: STOP[k] });
  ev.sort((a, b) => a.t - b.t);
  return { ign, stop, ember, ev, lost: ign.struct != null };
}

// sim minutes <-> playback seconds (piecewise linear)
const PB = [[0, 0], [60, 18], [80, 28], [240, 50]];
export const PLAY_END = PB[PB.length - 1][1];
export function toSec(m) { for (let i = 1; i < PB.length; i++) if (m <= PB[i][0]) { const [a, b] = [PB[i - 1], PB[i]]; return a[1] + (m - a[0]) / (b[0] - a[0]) * (b[1] - a[1]); } return PLAY_END; }
export function toMin(s) { for (let i = 1; i < PB.length; i++) if (s <= PB[i][1]) { const [a, b] = [PB[i - 1], PB[i]]; return a[0] + (s - a[1]) / (b[1] - a[1]) * (b[0] - a[0]); } return TMAX; }

// ---------------------------------------------------------------------------
// Visual effects (one shared scene, per-side state applied before each render)
// ---------------------------------------------------------------------------
// emitter anchor points per node (world space)
const EMIT = {
  zone: [[-2.05, 0.6, 3.95], [-1.35, 0.5, 4.1], [-2.7, 0.4, 4.2], [0.1, 0.4, 4.3], [4.4, 0.5, 4.0]],
  gutter: [[6.5, 3.3, 3.85], [8.2, 3.3, 3.82], [10, 3.3, 3.8], [11.5, 3.3, 3.8]],
  attic: [[1.5, 6.5, 6.2]],
  found: [[-3.3, 0.35, 3.15], [5.3, 0.35, 3.15]],
  deck: [[-7, 2.1, 3.1], [-8.4, 2.1, 1.6], [-6, 2.1, 1], [-8, 2.1, -0.5]],
  eaves: [[11.85, 3.4, 3.3], [11.9, 3.4, 0.5], [11.9, 3.4, -2.2]],
  wood: [[-0.8, 6.1, 6.7], [-2.6, 6.0, 6.6], [3.2, 6.0, 6.6], [4.6, 5.9, 6.4]],
  atticSp: [[1.5, 8.6, 3.2], [-1.2, 8.4, 2.4], [3.6, 8.2, 1.6]],
  crawl: [[-3.3, 0.6, 3.3], [0.8, 0.6, 3.3]],
  struct: [[-3, 9.5, 1], [1, 10.2, 0], [4.5, 9.5, 0], [8.5, 6, 0.5], [10.5, 6, -1.5], [-0.5, 7.6, 5.2], [2.5, 7.6, 5.2], [-2.6, 2.2, 6.3], [1.8, 2.2, 6.3], [4.2, 4.6, 6.3], [7.5, 4.4, 3.6], [10.4, 4.4, 3.6]],
};
const SCALE = { zone: 1.8, gutter: 1.3, attic: 1.1, found: 1.0, deck: 2.4, eaves: 1.7, wood: 1.8, atticSp: 3.4, crawl: 1.5, struct: 5.5 };

export function createFireFX({ scene, reg, hgt, RM, SMALL, D, TREES = [], burn = null }) {
  const G = new THREE.Group(); G.name = 'fireFX'; scene.add(G);
  const SH = flameShaders(SMALL), gT = T.glowSprite();
  const glowMat = new THREE.SpriteMaterial({ map: gT, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: new THREE.Color(0.9, 0.42, 0.12), opacity: 0.55 });
  const NC = SMALL ? 2 : 3;                              // flame cards per emitter
  const CARD = [[1, 0, 0, 0], [0.78, 0.22, 0.12, 0.6], [0.62, -0.2, -0.1, 1.3]]; // scale, dx, dz, time phase
  const em = {};
  for (const k in EMIT) {
    em[k] = EMIT[k].map((p, j) => {
      const cards = [];
      for (let c = 0; c < NC; c++) { const f = SH.flame(j * 3.1 + c * 7.7 + k.length * 1.3); f.visible = false; G.add(f); cards.push(f); }
      const s = SH.smoke(j * 2.3 + k.length); s.visible = false; G.add(s);
      const g = new THREE.Sprite(glowMat); g.position.set(...p); g.visible = false; G.add(g);
      return { cards, s, g, p, ph: j * 1.7 + k.length };
    });
  }
  // fire front on the hillside (shared by both sides)
  const front = [];
  const FN = SMALL ? 22 : 40;
  T.reseed(5);
  for (let i = 0; i < FN; i++) {
    const x = T.rr(-44, -11), z = T.rr(-12, 24), y = hgt(x, z);
    const f = SH.flame(i * 1.9 + 40); f.position.set(x, y - 0.2, z); f.visible = false; G.add(f);
    const s = SH.smoke(i * 0.7 + 11); s.position.set(x, y + 4, z); s.visible = false; G.add(s);
    front.push({ f, s, x, ph: i * 0.37, sz: T.rr(4, 7.5) });
  }
  // torching trees on the hillside
  const tf = TREES.map((tr, i) => {
    const cards = [0, 1, 2].slice(0, SMALL ? 2 : 3).map((c) => { const f = SH.flame(i * 5.3 + c * 2.9 + 70); f.visible = false; G.add(f); return f; });
    const s = SH.smoke(i * 1.7 + 30); s.visible = false; G.add(s);
    return { ...tr, cards, s, j: (i * 0.618) % 1 * 2 };
  });
  // falling ash after the front passes
  const AN = RM ? 0 : SMALL ? 220 : 520, aP = new Float32Array(AN * 3), aS = [];
  for (let i = 0; i < AN; i++) { aS.push([T.rr(-40, 26), T.rr(0, 26), T.rr(-14, 22), T.rr(0.4, 1)]); }
  const ashG = new THREE.BufferGeometry(); ashG.setAttribute('position', new THREE.BufferAttribute(aP, 3));
  const ash = new THREE.Points(ashG, new THREE.PointsMaterial({ color: new THREE.Color(0.62, 0.6, 0.57), size: SMALL ? 0.22 : 0.18, transparent: true, opacity: 0, depthWrite: false }));
  ash.frustumCulled = false; G.add(ash);
  // sparks: short-lived bright specks thrown up from active flames
  const SPN = SMALL ? 90 : 180;
  const spG = new THREE.BufferGeometry(); const spP = new Float32Array(SPN * 3).fill(-999);
  spG.setAttribute('position', new THREE.BufferAttribute(spP, 3));
  const sparks = new THREE.Points(spG, new THREE.PointsMaterial({ map: gT, color: new THREE.Color(1.6, 0.9, 0.35), size: SMALL ? 0.35 : 0.42, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  sparks.frustumCulled = false; G.add(sparks);
  const spSeed = Array.from({ length: SPN }, (_, i) => [Math.sin(i * 12.9898) * 43758.5453 % 1, Math.sin(i * 78.233) * 12543.21 % 1, Math.sin(i * 39.425) * 9631.7 % 1].map(Math.abs));
  // charred-material bookkeeping
  const DARK = new THREE.Color(0x2b2018), ORANGE = new THREE.Color(0xff5a00);
  const SMOKE_LT = new THREE.Color(0.42, 0.39, 0.36), SMOKE_BK = new THREE.Color(0.08, 0.07, 0.065);
  const mats = {};
  for (const k of EXT) {
    const set = new Set(); (reg[k] || []).forEach((m) => set.add(m.material));
    mats[k] = [...set].map((m) => { m.userData.c0 = m.color.clone(); return m; });
  }
  let t = 0, wf = 1, gust = 1;
  const leanOf = () => Math.min(0.8, (0.12 + Math.max(0, wf - 0.6) * 0.75) * gust);   // calm ~0.12, windy ~0.5, Santa Ana ~0.95
  const lvl = (S, k, m) => (S.ign[k] == null || m < S.ign[k] ? 0 : Math.min(1, (m - S.ign[k]) / 6));
  // intensity curve: ramps up, roars, then settles to a low smoulder after ~30 sim-min (struct keeps going)
  const roar = (k, age) => (k === 'struct' ? 1 : age < 25 ? 1 : Math.max(0.45, 1 - (age - 25) / 60));

  return {
    group: G,
    tick(dt) { t += dt; SH.time.value = RM ? 3.7 : t; gust = RM ? 1 : 1 + 0.28 * Math.sin(t * 0.8) * Math.sin(t * 2.1 + 1) + 0.08 * Math.sin(t * 5.3); },
    // apply one side's state to the shared scene
    apply(S, m) {
      const lean = leanOf(), ln = Math.min(1, lean);
      for (const k of EXT) {
        const b = lvl(S, k, m), ch = S.ign[k] == null ? 0 : Math.min(1, Math.max(0, (m - S.ign[k]) / 40));
        for (const mt of mats[k]) {
          mt.color.copy(mt.userData.c0).lerp(DARK, ch * 0.75);
          if (b > 0) { mt.emissive.copy(ORANGE); mt.emissiveIntensity = b * (0.4 + 0.25 * Math.sin(t * 9 + k.length) * Math.sin(t * 5.3)); }
          else { mt.emissive.copy(mt.userData.e0); mt.emissiveIntensity = mt.userData.i0; }
        }
      }
      const homeOn = S.ign.struct != null && m >= S.ign.struct;
      const smokeCol = homeOn ? SMOKE_BK : SMOKE_LT;
      const act = [];
      for (const k in em) {
        const b = lvl(S, k, m), age = S.ign[k] == null ? 0 : m - S.ign[k];
        const ember = S.ember && S.ember[k] != null && m >= S.ember[k] - 4 && m < S.ember[k] + 6;
        em[k].forEach((e, j) => {
          const on = b > 0 && j < Math.ceil(em[k].length * Math.min(1, 0.4 + age / 20));
          const I = b * roar(k, age), sc = SCALE[k] * (0.55 + 0.45 * I);
          e.cards.forEach((f, c) => {
            f.visible = on;
            if (!on) return;
            const [cs, dx, dz] = CARD[c];
            f.position.set(e.p[0] + dx * sc * 0.4, e.p[1] - 0.05, e.p[2] + dz * sc * 0.4);
            const kb = k === 'struct' ? 1 : 1.25; f.scale.set(sc * 0.95 * cs * kb * (1 + 0.3 * ln), sc * 1.6 * cs * kb * (1 - 0.18 * ln), 1);
            f.material.uniforms.uI.value = Math.min(1.15, 0.55 + 0.6 * I);
            f.material.uniforms.uLean.value = lean;
          });
          if (on) act.push([e.p[0], e.p[1], e.p[2], sc, I]);
          e.s.visible = on && age > 3;
          if (e.s.visible) { const u = RM ? 0.5 : (t * 0.22 + e.ph * 0.13) % 1; const ss = SCALE[k] * (homeOn ? 1.6 : 1.2) * (1.2 + u * 2.4); e.s.position.set(e.p[0] + u * (0.6 + 4.5 * lean) * SCALE[k], e.p[1] + SCALE[k] * 1.1 + u * SCALE[k] * 2.4 * (1.1 - 0.45 * ln), e.p[2]); e.s.scale.set(ss, ss, 1); e.s.material.uniforms.uI.value = (homeOn ? 0.85 : 0.55) * Math.sin(Math.PI * Math.min(1, u * 1.4 + 0.08)); e.s.material.uniforms.uCol.value.copy(smokeCol); }
          e.g.visible = (ember && j === 0) || on;
          if (e.g.visible) { const p = 0.6 + 0.4 * Math.sin(t * 12 + e.ph); const gs = on ? sc * 1.7 * (0.9 + 0.1 * Math.sin(t * 14 + e.ph)) : 2.2 * p; e.g.scale.set(gs, gs, 1); e.g.position.set(e.p[0], e.p[1] + (on ? sc * 0.35 : 0), e.p[2]); }
        });
      }
      // sparks follow active flames
      for (let i = 0; i < SPN; i++) {
        if (!act.length || RM) { spP[i * 3 + 1] = -999; continue; }
        const [r1, r2, r3] = spSeed[i]; const life = 0.9 + r2 * 0.8;
        const u = ((t + r1 * 10) / life) % 1, cyc = Math.floor((t + r1 * 10) / life);
        const a = act[(i * 7 + cyc * 13) % act.length], s = a[3];
        spP[i * 3] = a[0] + (r3 - 0.5) * s * 0.6 + u * u * s * (0.3 + 3.2 * lean) + Math.sin(t * 6 + i) * (0.15 + 0.4 * ln) * u;
        spP[i * 3 + 1] = a[1] + s * 0.3 + u * s * (1.6 + r2) * (1 - 0.4 * ln);
        spP[i * 3 + 2] = a[2] + (r1 - 0.5) * s * 0.6;
      }
      spG.attributes.position.needsUpdate = true;
      sparks.material.opacity = act.length ? 1 : 0;
      if (D) D.apply(S, m, t, act, RM);
    },
    // hillside fire front + ember density (same for both sides)
    env(m, w) {
      wf = w;
      const fx = -48 + Math.max(0, Math.min(1, (m - 50) / 30)) * 38;
      for (const p of front) {
        const lit = m >= 50 && p.x <= fx, age = fx - p.x, out = age > 26;
        p.f.visible = lit && !out;
        if (p.f.visible) { const b = Math.min(1, age / 4) * Math.max(0.2, 1 - age / 26); { const ln = leanOf(); p.f.scale.set(p.sz * (1.0 + 0.6 * ln) * (0.5 + 0.5 * b), p.sz * 1.7 * (1 - 0.3 * ln) * (0.4 + 0.6 * b), 1); } p.f.material.uniforms.uI.value = 0.5 + 0.6 * b; p.f.material.uniforms.uLean.value = leanOf(); }
        p.s.visible = lit && age < 40;
        if (p.s.visible) { const u = RM ? 0.5 : (t * 0.15 + p.ph) % 1; const sc = 7 + u * 12; p.s.position.y = p.f.position.y + 5 + u * 11; p.s.position.x = p.x + u * (2 + 14 * leanOf()); p.s.scale.set(sc, sc, 1); p.s.material.uniforms.uI.value = 0.55 * Math.sin(Math.PI * Math.min(1, u * 1.3 + 0.1)) * Math.max(0.2, 1 - age / 40); }
      }
      if (burn) burn(fx);
      for (const tr of tf) {
        const age = fx - tr.x - tr.j, on = age > 0 && age < 9;
        const b = on ? Math.min(1, age / 1.2) * Math.max(0, Math.min(1, (9 - age) / 4)) : 0;
        tr.cards.forEach((f, c) => {
          f.visible = on && b > 0.02;
          if (!f.visible) return;
          const ln = leanOf(), hh = (tr.h * 0.6 + tr.r) * (0.6 + 0.5 * b) * (c ? 0.8 : 1) * (1 - 0.3 * ln);
          f.position.set(tr.x + (c - 1) * tr.r * 0.4, tr.y - tr.h * 0.3, tr.z + (c - 1) * 0.5);
          f.scale.set(Math.max(tr.r * 1.6, hh * 0.7) * (1 + 0.5 * ln), hh, 1);
          f.material.uniforms.uI.value = 0.6 + 0.5 * b; f.material.uniforms.uLean.value = leanOf();
        });
        tr.s.visible = age > 0.5 && age < 26;
        if (tr.s.visible) { const u = RM ? 0.5 : (t * 0.17 + tr.j) % 1; const ss = tr.r * (2 + u * 3); tr.s.position.set(tr.x + u * (2 + 12 * leanOf()), tr.y + tr.h * 0.6 + u * 9, tr.z); tr.s.scale.set(ss, ss, 1); tr.s.material.uniforms.uI.value = 0.6 * Math.sin(Math.PI * Math.min(1, u * 1.3 + 0.1)) * Math.max(0.2, 1 - age / 26); }
      }
      // ash: starts with the front, lingers after
      const ashK = m < 55 ? 0 : Math.min(1, (m - 55) / 25) * (m < 160 ? 1 : Math.max(0.35, 1 - (m - 160) / 120));
      ash.material.opacity = ashK * 0.85;
      if (ashK > 0) for (let i = 0; i < AN; i++) {
        const a = aS[i], y = ((a[1] - t * a[3] * 0.9) % 26 + 26) % 26;
        aP[i * 3] = ((a[0] + t * a[3] * (0.4 + 1.6 * leanOf()) + 40) % 66) - 40 + Math.sin(t * 1.3 + i) * 0.5;
        aP[i * 3 + 1] = y; aP[i * 3 + 2] = a[2] + Math.cos(t * 1.1 + i * 0.7) * 0.5;
      }
      ashG.attributes.position.needsUpdate = ashK > 0;
      // ember storm intensity 0..1 (peaks during the ember phase and the front)
      const e = m < 2 ? m / 2 : m < 80 ? 1 : Math.max(0.15, 1 - (m - 80) / 60);
      const fl = RM ? 1 : 0.88 + 0.12 * Math.sin(t * 13) * Math.sin(t * 7.1 + 1.3);
      // smoke in the sky: builds through the ember storm, peaks with the front, thins to grey haze
      const smoke = m < 50 ? 0.15 + m / 50 * 0.35 : m < 75 ? 0.5 + (m - 50) / 25 * 0.5 : Math.max(0.35, 1 - (m - 75) / 110);
      const grey = Math.max(0, Math.min(1, (m - 85) / 70));
      return { smoke, grey, gust, emberLevel: e * wf, frontX: fx, glow: fl * (m < 50 ? m / 50 * 0.4 : m < 80 ? 0.4 + (m - 50) / 30 * 0.9 : Math.max(0.35, 1.3 - (m - 80) / 80)) };
    },
    reset() { if (D) D.reset(); for (const k of EXT) for (const mt of mats[k]) { mt.color.copy(mt.userData.c0); mt.emissive.copy(mt.userData.e0); mt.emissiveIntensity = mt.userData.i0; } },
    EMIT,
  };
}
