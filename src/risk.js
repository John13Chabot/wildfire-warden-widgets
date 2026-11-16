// Runtime ignition + risk model. Pure JS (no three.js) so the calibration script can run it in node.
// Inputs per wind setting (from the offline bake, rec.js): ember dose per m2 of catchment and radiant heat /
// flame contact at every exposure sample point around our house and the two neighbours.
// Here: component ignition rules, structure-to-structure exposure from burning neighbours, internal spread,
// and a two-level Monte Carlo (parameter uncertainty x fire-to-fire variability) for the risk band.
import { REC } from './rec.js';
import { NEIGH } from './site.js';

export const EXT = ['attic', 'wood', 'gutter', 'eaves', 'deck', 'found', 'zone', 'roof', 'windows', 'walls', 'fence'];
export const INNER = ['atticSp', 'crawl', 'garage', 'struct'];

// ---------- calibrated parameters (tools/calibrate.mjs) ----------
// A: ember catchment (m2) · thr: embers to ignite · sm: smoulder-to-flame (min) · q/t: radiant kW/m2 held t min
// up: what the upgrade changes (ember multiplier, heat threshold) or immune
export const PARAMS = {
  comp: {
    zone:    { A: 2.0, thr: 1.0, sm: 4, q: 12, t: 1, cov: true, up: { immune: true } },
    gutter:  { A: 3.0, thr: 1.5, sm: 3, up: { em: 0.05 } },
    attic:   { A: 1.0, thr: 3.0, sm: 6, up: { em: 0.04 } },
    found:   { A: 0.6, thr: 3.0, sm: 5, up: { em: 0.04 } },
    deck:    { A: 2.0, thr: 2.5, sm: 4, q: 15, t: 2, up: { em: 0.05, q: 30, t: 3 } },
    eaves:   { A: 4.0, thr: 6.0, sm: 6, q: 15, t: 2, up: { em: 0.03, q: 45, t: 5 } },
    wood:    { q: 20, t: 2, up: { q: 35, t: 4 } },
    roof:    { A: 2.0, thr: 4.0, sm: 8, up: { em: 0.03 } },
    windows: { q: 9, t: 1.5, up: { q: 25, t: 3 } },
    walls:   { A: 2.0, thr: 4.0, sm: 8, q: 18, t: 2, up: { em: 0.05, q: 30, t: 4 } },
    fence:   { A: 2.0, thr: 1.2, sm: 4, q: 12, t: 1, up: { immune: true } },
  },
  // internal spread: [from, to, minutes]; into an upgraded component it is resisted with probability 1 - pUp
  // internal spread: [from, to, minutes, probability]; probability scales with wind (WF); into an upgraded part
  // it is resisted unless a pUp draw fails
  edges: [
    ['gutter', 'wood', 8, 0.45], ['gutter', 'eaves', 12, 0.5], ['gutter', 'roof', 10, 0.4],
    ['zone', 'found', 10, 0.6], ['zone', 'wood', 20, 0.4], ['zone', 'windows', 4, 0.7], ['zone', 'walls', 6, 0.6], ['zone', 'eaves', 15, 0.4],
    ['deck', 'wood', 12, 0.6], ['deck', 'eaves', 20, 0.5], ['deck', 'windows', 5, 0.7], ['deck', 'struct', 30, 0.35],
    ['fence', 'eaves', 8, 0.6], ['fence', 'wood', 10, 0.5], ['fence', 'windows', 6, 0.5],
    ['wood', 'eaves', 8, 0.6], ['wood', 'atticSp', 20, 0.4],
    ['attic', 'atticSp', 6, 0.85], ['eaves', 'atticSp', 10, 0.7], ['roof', 'atticSp', 12, 0.6],
    ['found', 'crawl', 8, 0.85], ['crawl', 'struct', 30, 0.8], ['atticSp', 'struct', 20, 0.9],
    ['windows', 'struct', 15, 0.7], ['walls', 'garage', 6, 0.8], ['garage', 'struct', 20, 0.85],
  ],
  WF: { calm: 0.5, windy: 0.85, santaana: 1 },
  pUp: 0.12,
  // neighbours: typical homes (aggregate catchment, threshold, smoulder; heat contact always ignites)
  neigh: { A: 10, thr: 3, sm: 10, q: 16, t: 2 },
  // burning neighbour as an emitter: effective emissive power (kW/m2) over the facing facade + flame height (m)
  nE: 60, nFlame: 4,
  // near-field ember shower from a burning house: dose per m2 at the source face, downwind decay length (m) per 10 m/s
  nG: 4, nLam: 9,
  // uncertainty: per-component (aleatoric) and global (epistemic) log-sd
  sd: { thr: 0.6, q: 0.2, delay: 0.3, nT: 0.5 },
  sdG: { em: 0.35, q: 0.15, n: 0.3 },
};

// ---------- exposure data ----------
const b64 = (s, T) => { if (!s) return new T(0); const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new T(u.buffer); };
const cache = {};
// view factor from a rectangle (w x h) to a point facing it at distance d, opposite one corner
const Fcorner = (w, h, d) => { if (w <= 0 || h <= 0) return 0; const X = w / d, Y = h / d, a = Math.sqrt(1 + X * X), b = Math.sqrt(1 + Y * Y); return (X / a * Math.atan(Y / a) + Y / b * Math.atan(X / b)) / (2 * Math.PI); };
// view factor from a facade spanning [u0,u1] x [v0,v1] (in the plane at distance d) to a point at (u,v)
const Frect = (u0, u1, v0, v1, u, v, d) => {
  const f = (a0, a1, b0, b1) => { const s = (x0, x1, y0, y1) => Fcorner(x1, y1, d) - Fcorner(x0, y1, d) - Fcorner(x1, y0, d) + Fcorner(x0, y0, d); return s(a0, a1, b0, b1); };
  // split into quadrants around the foot point
  let F = 0;
  for (const [a0, a1] of [[Math.max(0, u - u1), Math.max(0, u - u0)], [Math.max(0, u0 - u), Math.max(0, u1 - u)]]) for (const [c0, c1] of [[Math.max(0, v - v1), Math.max(0, v - v0)], [Math.max(0, v0 - v), Math.max(0, v1 - v)]]) if (a1 > a0 && c1 > c0) F += f(a0, a1, c0, c1);
  return F;
};
export function data(w) {
  if (cache[w]) return cache[w];
  const r = REC[w], NM = r.tmax + 1, NH = r.tmax * 2 + 1;
  const pts = r.expo.map((e) => {
    const d = b64(e.dose, Float32Array), cum = new Float32Array(NM);
    for (let m = 0; m < NM; m++) cum[m] = m < e.d0 ? 0 : d.length ? d[Math.min(d.length - 1, m - e.d0)] : 0;
    const h = b64(e.heat, Uint8Array), hz = b64(e.heatZ, Uint8Array), q = new Uint8Array(NH), qz = new Uint8Array(NH);
    for (let i = 0; i < h.length && e.h0 + i < NH; i++) { q[e.h0 + i] = h[i]; qz[e.h0 + i] = hz[i]; }
    return { k: e.k, p: e.p, cum, q, qz };
  });
  // per neighbour: view factor at full involvement and ember-shower weight at each of our points
  const U = r.u20 * 0.447;
  for (const p of pts) {
    if (p.k[0] === 'n') continue;
    p.nF = []; p.nG = [];
    for (const n of NEIGH) {
      // facade facing the point: pick the side the point is on
      const yb = n.base ?? 0, top = n.h + PARAMS.nFlame;
      const yy = p.p[1], ox = Math.max(n.x0 - p.p[0], p.p[0] - n.x1, 0), oz = Math.max(n.z0 - p.p[2], p.p[2] - n.z1, 0);
      const F = ox >= oz ? Frect(n.z0, n.z1, yb, yb + top, p.p[2], yy, Math.max(0.3, ox)) : Frect(n.x0, n.x1, yb, yb + top, p.p[0], yy, Math.max(0.3, oz));
      p.nF.push(Math.min(1, F));
      // embers: downwind (+x) distance from the neighbour's downwind face, lateral offset from its span
      const s = p.p[0] - n.x1, lat = Math.max(0, n.z0 - p.p[2], p.p[2] - n.z1);
      const lam = PARAMS.nLam * U / 10, sl = 2 + 0.3 * Math.max(0, s);
      const near = Math.max(0, 6 - Math.hypot(Math.max(0, n.x0 - p.p[0], p.p[0] - n.x1), lat)) / 6;   // close crosswind/upwind exposure
      p.nG.push(s > 0 ? Math.exp(-s / lam) * Math.exp(-lat * lat / (2 * sl * sl)) : 0.15 * near);
    }
  }
  // neighbour pad heights for the emitter base (scene computes the same pads)
  const byKey = {}; for (const p of pts) (byKey[p.k] = byKey[p.k] || []).push(p);
  return (cache[w] = { r, NM, NH, pts, U, byKey });
}
export function setPadHeights(fn) { for (const n of NEIGH) n.base = fn((n.x0 + n.x1) / 2, (n.z0 + n.z1) / 2); for (const w in cache) delete cache[w]; }

// burning-neighbour curves (minutes after its ignition): radiant 0..1 and ember-shower rate (normalised, area 1)
const ramp = (x, a, b) => Math.max(0, Math.min(1, (x - a) / (b - a)));
export const nHeat = (a) => (a < 0 ? 0 : 0.25 * ramp(a, 5, 14) + 0.75 * ramp(a, 16, 28) * (1 - ramp(a, 55, 110)));
const nEmb = (a) => (a < 0 ? 0 : ramp(a, 8, 20) * (1 - ramp(a, 40, 90)));
const NE_INT = (() => { const c = new Float32Array(400); let s = 0; for (let i = 0; i < 400; i++) { s += nEmb(i); c[i] = s; } return c; })();
const nEmbCum = (a) => (a < 0 ? 0 : NE_INT[Math.min(399, Math.floor(a))] / NE_INT[399]);

// ---------- one fire ----------
// rnd: () => standard normal; g: global factors {em, q, n}; opt: { up:Set, cov:0..1 }
function oneRun(D, up, cov, z, u, g, wf, nb = true) {
  const P = PARAMS, NM = D.NM, NH = D.NH, pts = D.pts;
  const ign = {}, stop = {}, cause = {};
  // neighbours first (typical homes, landscape exposure only)
  const tN = NEIGH.map((n, i) => {
    const my = D.byKey['n' + n.id] || [];
    const thr = P.neigh.thr * Math.exp(P.sd.nT * z()) / g.em;
    let te = Infinity;
    for (const p of my) { for (let m = 0; m < NM; m++) if (p.cum[m] * P.neigh.A >= thr) { te = Math.min(te, m + P.neigh.sm); break; } }
    let th = Infinity; const qc = P.neigh.q * g.q;
    for (const p of my) { let hold = 0; for (let s = 0; s < NH; s++) { const q = p.q[s]; if (q === 255) { th = Math.min(th, s * 0.5); break; } hold = q >= qc ? hold + 0.5 : 0; if (hold >= P.neigh.t) { th = Math.min(th, s * 0.5); break; } } }
    return nb ? Math.min(te, th) : Infinity;
  });
  // Zone 0 fuels next to the walls (plants, mulch, the cypresses, litter under the deck) are present in proportion to cover
  const useZ0 = cov > 0.02 && u() < Math.min(1, cov / 0.3 + 0.05);
  for (const k of EXT) {
    const C = P.comp[k], isUp = up.has(k);
    if (k === 'zone' && cov <= 0.02) continue;
    if (isUp && C.up.immune) { // still record that the threat arrived (for the "stopped" story)
      const my = D.byKey[k] || []; let t = Infinity;
      for (const p of my) for (let m = 0; m < NM; m++) if (p.cum[m] > 0.02) { t = Math.min(t, m); break; }
      if (t < Infinity) stop[k] = t; continue;
    }
    const my = D.byKey[k] || [];
    const scale = k === 'zone' ? cov / 0.6 : 1;
    let te = Infinity, th = Infinity, tArr = Infinity, eN = false, hN = false;
    if (C.A) {
      const em = (isUp ? C.up.em : 1) * g.em * scale, thr = C.thr * Math.exp(P.sd.thr * z());
      for (const p of my) {
        for (let m = 0; m < NM; m++) {
          let nd = 0; for (let i = 0; i < NEIGH.length; i++) if (p.nG[i]) nd += P.nG * g.n * p.nG[i] * nEmbCum(m - tN[i]);
          const dose = p.cum[m] + nd;
          if (dose > 0.02 && m < tArr) tArr = m;
          if (dose * C.A * em >= thr) { if (m + C.sm < te) { te = m + C.sm; eN = nd > p.cum[m]; } break; }
        }
      }
    }
    if (C.q) {
      const qc = (isUp ? C.up.q : C.q) * Math.exp(P.sd.q * z()) * g.q * (k === 'zone' ? 1 : 1), tc = isUp ? C.up.t : C.t;
      for (const p of my) {
        let hold = 0;
        const Q = useZ0 ? p.q : p.qz;
        for (let s = 0; s < NH; s++) {
          const ql = Q[s];
          if (ql === 255 && !(isUp && (k === 'windows' || k === 'eaves'))) { th = Math.min(th, s * 0.5); break; }
          let qn = 0;
          for (let i = 0; i < NEIGH.length; i++) if (p.nF[i] && tN[i] < Infinity) qn += P.nE * g.n * p.nF[i] * nHeat(s * 0.5 - tN[i]);
          const q = (ql === 255 ? 60 : ql) + qn;
          hold = q >= qc ? hold + 0.5 : 0;
          if (hold >= tc) { if (s * 0.5 < th) { th = s * 0.5; hN = qn > (ql === 255 ? 60 : ql); } break; }
        }
      }
    }
    const t = Math.min(te, th);
    if (t < Infinity) { ign[k] = t; cause[k] = te <= th ? (eN ? 'neighbor' : 'ember') : (hN ? 'neighbor' : 'heat'); }
    else if (isUp && tArr < Infinity) stop[k] = tArr;
  }
  // internal spread (each edge drawn once per fire)
  const draw = P.edges.map((e) => u() < e[3] * wf), drawUp = P.edges.map(() => u() < P.pUp), dl = P.edges.map(() => Math.exp(P.sd.delay * z()));
  for (let it = 0; it < 14; it++) {
    let ch = false;
    P.edges.forEach(([a, b, d], j) => {
      if (ign[a] == null || !draw[j]) return;
      const t = ign[a] + d * dl[j];
      if (b === 'zone' && cov <= 0.02) return;
      if (up.has(b)) {
        if (b === 'zone' || b === 'fence') return;
        if (!(stop[b] <= t)) stop[b] = t;
        if (drawUp[j] && !(ign[b] <= t)) { ign[b] = t; cause[b] = a; ch = true; }
      } else if (!(ign[b] <= t)) { ign[b] = t; cause[b] = a; ch = true; }
    });
    if (!ch) break;
  }
  return { ign, stop, cause, tN };
}

// standard-normal generator from a seeded uniform
function rng(seed) { let s = seed >>> 0 || 1; const u = () => ((s = (s * 16807) % 2147483647) / 2147483647); return { u, z: () => { let a = 0; while (!a) a = u(); const b = u(); return Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * b); } }; }

// ---------- public API ----------
// central run (the one the page plays) + risk band
export function evaluate(up, w, { cov = 0.6, outer = 24, inner = 60, nb = true, mc = true } = {}) {
  const D = data(w);
  if (up.has('zone')) cov = 0;
  const zero = () => 0, half = () => 0.5, wf = PARAMS.WF[w] ?? 1;
  const central = oneRun(D, up, cov, zero, half, { em: 1, q: 1, n: 1 }, wf, nb);
  if (!mc) return { central };
  const R = rng(9173 + Math.round(cov * 100) * 7 + [...up].join('').length * 131 + ({ calm: 1, windy: 2, santaana: 3 })[w] * 997);
  const ps = []; let lost = 0, n = 0;
  for (let o = 0; o < outer; o++) {
    const g = { em: Math.exp(PARAMS.sdG.em * R.z()), q: Math.exp(PARAMS.sdG.q * R.z()), n: Math.exp(PARAMS.sdG.n * R.z()) };
    let l = 0;
    for (let i = 0; i < inner; i++) { const r = oneRun(D, up, cov, R.z, R.u, g, wf, nb); if (r.ign.struct != null) l++; }
    ps.push(l / inner); lost += l; n += inner;
  }
  ps.sort((a, b) => a - b);
  const q = (f) => ps[Math.min(ps.length - 1, Math.max(0, Math.round(f * (ps.length - 1))))];
  return { central, risk: { p: lost / n, lo: q(0.1), hi: q(0.9), runs: n } };
}
// diagnostics (calibration only): one random fire
export function _one(up, w, cov, seed) { const D = data(w), R = rng(seed * 7919 + 1), wf = PARAMS.WF[w] ?? 1; const g = { em: Math.exp(PARAMS.sdG.em * R.z()), q: Math.exp(PARAMS.sdG.q * R.z()), n: Math.exp(PARAMS.sdG.n * R.z()) }; return oneRun(D, up, cov, R.z, R.u, g, wf); }

// risk band computed in slices so the page stays responsive; results cached per setting
const rcache = new Map();
export function riskAsync(up, w, { cov = 0.6, nb = true, outer = 20, inner = 50 } = {}, cb) {
  if (up.has('zone')) cov = 0;
  const key = [w, [...up].sort().join(','), cov.toFixed(2), nb].join('|');
  if (rcache.has(key)) { cb(rcache.get(key)); return () => {}; }
  const D = data(w), wf = PARAMS.WF[w] ?? 1;
  const R = rng(9173 + Math.round(cov * 100) * 7 + key.length * 131);
  const ps = []; let lost = 0, n = 0, o = 0, dead = false;
  const step = () => {
    if (dead) return;
    const t0 = Date.now();
    while (o < outer && Date.now() - t0 < 24) {
      const g = { em: Math.exp(PARAMS.sdG.em * R.z()), q: Math.exp(PARAMS.sdG.q * R.z()), n: Math.exp(PARAMS.sdG.n * R.z()) };
      let l = 0; for (let i = 0; i < inner; i++) if (oneRun(D, up, cov, R.z, R.u, g, wf, nb).ign.struct != null) l++;
      ps.push(l / inner); lost += l; n += inner; o++;
    }
    if (o < outer) { setTimeout(step, 0); return; }
    ps.sort((a, b) => a - b);
    const q = (f) => ps[Math.round(f * (ps.length - 1))];
    const res = { p: lost / n, lo: q(0.1), hi: q(0.9), runs: n };
    rcache.set(key, res); cb(res);
  };
  setTimeout(step, 0);
  return () => { dead = true; };
}
