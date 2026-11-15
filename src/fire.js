import * as THREE from 'three';
import * as T from './tex.js';

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
function flameTex() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 128; const g = c.getContext('2d');
  const path = () => { g.beginPath(); g.moveTo(32, 4); g.bezierCurveTo(46, 40, 60, 62, 56, 92); g.bezierCurveTo(52, 118, 12, 120, 8, 92); g.bezierCurveTo(4, 64, 22, 46, 32, 4); g.closePath(); };
  path(); const gr = g.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, 'rgba(255,70,10,0.35)'); gr.addColorStop(0.2, 'rgba(255,90,10,0.95)'); gr.addColorStop(0.65, 'rgba(255,170,40,0.95)'); gr.addColorStop(1, 'rgba(255,230,140,0.95)');
  g.fillStyle = gr; g.fill(); g.lineWidth = 2.4; g.strokeStyle = 'rgba(110,25,5,0.7)'; g.stroke();
  g.beginPath(); g.moveTo(32, 50); g.bezierCurveTo(42, 72, 46, 84, 42, 100); g.bezierCurveTo(38, 114, 24, 112, 22, 100); g.bezierCurveTo(19, 84, 26, 72, 32, 50); g.fillStyle = 'rgba(255,240,180,0.9)'; g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

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

export function createFireFX({ scene, reg, hgt, RM, SMALL }) {
  const G = new THREE.Group(); G.name = 'fireFX'; scene.add(G);
  const fT = flameTex(), sT = T.smokeSprite(), gT = T.glowSprite();
  const flameMat = new THREE.SpriteMaterial({ map: fT, transparent: true, depthWrite: false, blending: THREE.NormalBlending, color: new THREE.Color(1.6, 1.25, 1.0) });
  const smokeMat = new THREE.SpriteMaterial({ map: sT, color: 0x6b625a, transparent: true, depthWrite: false, opacity: 0.55 });
  const glowMat = new THREE.SpriteMaterial({ map: gT, transparent: true, depthWrite: false, blending: THREE.NormalBlending, color: new THREE.Color(1.8, 1.1, 0.55), opacity: 0.85 });
  const em = {};
  for (const k in EMIT) {
    em[k] = EMIT[k].map((p, j) => {
      const f = new THREE.Sprite(flameMat); f.center.set(0.5, 0.05); f.position.set(...p); f.visible = false; G.add(f);
      const s = new THREE.Sprite(smokeMat.clone()); s.position.set(...p); s.visible = false; G.add(s);
      const g = new THREE.Sprite(glowMat); g.position.set(...p); g.visible = false; G.add(g);
      return { f, s, g, p, ph: j * 1.7 + k.length };
    });
  }
  // fire front on the hillside (shared by both sides)
  const front = [];
  const FN = SMALL ? 26 : 46;
  T.reseed(5);
  for (let i = 0; i < FN; i++) {
    const x = T.rr(-44, -11), z = T.rr(-12, 24), y = hgt(x, z);
    const f = new THREE.Sprite(flameMat); f.center.set(0.5, 0.05); f.position.set(x, y, z); f.visible = false; G.add(f);
    const s = new THREE.Sprite(smokeMat.clone()); s.position.set(x, y + 4, z); s.visible = false; G.add(s);
    front.push({ f, s, x, ph: i * 0.37, sz: T.rr(4, 7.5) });
  }
  // charred-material bookkeeping
  const DARK = new THREE.Color(0x2b2018), ORANGE = new THREE.Color(0xff5a00);
  const mats = {};
  for (const k of EXT) {
    const set = new Set(); (reg[k] || []).forEach((m) => set.add(m.material));
    mats[k] = [...set].map((m) => { m.userData.c0 = m.color.clone(); return m; });
  }
  let t = 0;
  const lvl = (S, k, m) => (S.ign[k] == null || m < S.ign[k] ? 0 : Math.min(1, (m - S.ign[k]) / 6));

  return {
    group: G,
    tick(dt) { t += dt; },
    // apply one side's state to the shared scene
    apply(S, m) {
      for (const k of EXT) {
        const b = lvl(S, k, m), ch = S.ign[k] == null ? 0 : Math.min(1, Math.max(0, (m - S.ign[k]) / 40));
        for (const mt of mats[k]) {
          mt.color.copy(mt.userData.c0).lerp(DARK, ch * 0.75);
          if (b > 0) { mt.emissive.copy(ORANGE); mt.emissiveIntensity = b * (0.45 + 0.3 * Math.sin(t * 9 + k.length)); }
          else { mt.emissive.copy(mt.userData.e0); mt.emissiveIntensity = mt.userData.i0; }
        }
      }
      for (const k in em) {
        const b = lvl(S, k, m), age = S.ign[k] == null ? 0 : m - S.ign[k];
        const ember = S.ember && S.ember[k] != null && m >= S.ember[k] - 4 && m < S.ember[k] + 6;
        em[k].forEach((e, j) => {
          const on = b > 0 && j < Math.ceil(em[k].length * Math.min(1, 0.4 + age / 20));
          e.f.visible = on;
          if (on) { const fl = RM ? 1 : 0.85 + 0.25 * Math.sin(t * 11 + e.ph) * Math.sin(t * 7.3 + e.ph * 2); const sc = SCALE[k] * b; e.f.scale.set(sc * 0.55, sc * fl, 1); e.f.position.set(e.p[0] + (RM ? 0 : Math.sin(t * 5 + e.ph) * 0.05), e.p[1], e.p[2]); }
          e.s.visible = on && age > 3;
          if (e.s.visible) { const u = RM ? 0.5 : (t * 0.25 + e.ph * 0.13) % 1; const sc = SCALE[k] * (1.2 + u * 2.2); e.s.position.set(e.p[0] + u * 1.5, e.p[1] + SCALE[k] * 0.9 + u * SCALE[k] * 2.2, e.p[2]); e.s.scale.set(sc, sc, 1); e.s.material.opacity = 0.5 * (1 - u); }
          e.g.visible = (ember && j === 0) || on;
          if (e.g.visible) { const p = 0.6 + 0.4 * Math.sin(t * 12 + e.ph); const gs = on ? SCALE[k] * b * 1.3 : 2.2 * p; e.g.scale.set(gs, gs, 1); e.g.position.set(e.p[0], e.p[1] + (on ? SCALE[k] * b * 0.25 : 0), e.p[2]); }
        });
      }
    },
    // hillside fire front + ember density (same for both sides)
    env(m, wf) {
      const fx = -48 + Math.max(0, Math.min(1, (m - 50) / 30)) * 38;
      for (const p of front) {
        const lit = m >= 50 && p.x <= fx, age = fx - p.x, out = age > 26;
        p.f.visible = lit && !out;
        if (p.f.visible) { const fl = RM ? 1 : 0.8 + 0.3 * Math.sin(t * 9 + p.ph); const b = Math.min(1, age / 4) * Math.max(0.2, 1 - age / 26); p.f.scale.set(p.sz * 0.6 * b, p.sz * 1.5 * b * fl, 1); }
        p.s.visible = lit && age < 40;
        if (p.s.visible) { const u = RM ? 0.5 : (t * 0.15 + p.ph) % 1; const sc = 6 + u * 10; p.s.position.y = p.f.position.y + 4 + u * 10; p.s.scale.set(sc, sc, 1); p.s.material.opacity = 0.45 * (1 - u) * Math.max(0.2, 1 - age / 40); }
      }
      // ember storm intensity 0..1 (peaks during the ember phase and the front)
      const e = m < 2 ? m / 2 : m < 80 ? 1 : Math.max(0.15, 1 - (m - 80) / 60);
      return { emberLevel: e * wf, frontX: fx, glow: m < 50 ? m / 50 * 0.4 : m < 80 ? 0.4 + (m - 50) / 30 * 0.9 : Math.max(0.35, 1.3 - (m - 80) / 80) };
    },
    reset() { for (const k of EXT) for (const mt of mats[k]) { mt.color.copy(mt.userData.c0); mt.emissive.copy(mt.userData.e0); mt.emissiveIntensity = mt.userData.i0; } },
    EMIT,
  };
}
