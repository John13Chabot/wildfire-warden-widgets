// Offline wildfire bake: runs once, writes src/rec.js (the "recording" the page plays back).
// Surface spread: Rothermel + elliptical (Anderson L/B) minimum-travel-time on a 2 m grid.
// Spotting: sampled firebrands (lognormal distance, lateral normal), ignition by fuel receptivity.
// House: ember dose (analytic), radiant heat and flame contact at each vulnerable component,
// then component ignition rules + internal spread edges for every combination of upgrades.
import { FUELS, rothermel, byram, flameLen, lengthToBreadth } from './rothermel.mjs';
import { hgt, offPad } from '../src/world.js';
import { fbm } from '../src/tex.js';
import { writeFileSync } from 'fs';
import P from './params.mjs';

const CS = 2;                       // cell size (m)
const X0 = -1300, X1 = 70, Z0 = -160, Z1 = 160;
const NX = Math.round((X1 - X0) / CS), NZ = Math.round((Z1 - Z0) / CS), N = NX * NZ;
const cx = (i) => X0 + (i % NX + 0.5) * CS, cz = (i) => Z0 + (Math.floor(i / NX) + 0.5) * CS;
const smooth = (v) => (v <= 0 ? 0 : v >= 1 ? 1 : v * v * (3 - 2 * v));

// ---------- trees (same placement as the scene) ----------
const TREES = [];
for (const [x, z, s] of [[15.8, -5.6, 1.15], [-9.5, 13, 1], [-18, -11, 1.3], [23, -4, 1.1], [6, -17, 1.25], [27, 15, 1], [-31, 19, 1.15], [-26, -2, 1.2], [-7.6, 9.8, 0.42]]) TREES.push({ x, z, r: 3.8 * s, h: 9 * s, cbh: 2.0, kind: 'oak' });
for (const [x, z, s] of [[-3, -16, 1], [1.5, -20, 1.15], [-7.5, -21, 1.05], [11, -21, 1.1], [16, -16, 0.95], [-20, -16, 1.1], [-22, -7, 1.2], [-13, -15, 1], [27, -15, 1.05], [-36, 2, 1.2], [34, -6, 1.1]]) TREES.push({ x, z, r: 2.6 * s, h: 17 * s, cbh: 1.0, kind: 'euc' });
for (const [x, z, s] of [[14.7, 3.8, 1], [14.7, -1.6, 0.9], [-5.6, -6.6, 0.85]]) TREES.push({ x, z, r: 0.9 * s, h: 8 * s, cbh: 0.3, kind: 'cypress' });

// ---------- fuel map ----------
const DECK = { x0: -10, x1: -4, z0: -3.1, z1: 3.1 };
function fuelAt(x, z) {
  for (const t of TREES) if (Math.hypot(x - t.x, z - t.z) < Math.max(t.r, 1.2)) return { f: 'TU5', tree: t };
  if (x >= DECK.x0 && x <= DECK.x1 && z >= DECK.z0 && z <= DECK.z1) return null;
  const o = offPad(x, z);
  if (o < 1.2) return null;                                   // irrigated lawn, hardscape, house, bare edge
  const n = fbm(x * 0.05, z * 0.05, 4);
  return { f: o >= 2 && smooth((n - 0.5) * 3) > 0.45 ? 'SH7' : 'GR2' };
}
const fuel = new Array(N), slopeX = new Float32Array(N), slopeZ = new Float32Array(N);
for (let i = 0; i < N; i++) {
  const x = cx(i), z = cz(i); fuel[i] = fuelAt(x, z);
  slopeX[i] = (hgt(x + 1, z) - hgt(x - 1, z)) / 2; slopeZ[i] = (hgt(x, z + 1) - hgt(x, z - 1)) / 2;
}

// seeded RNG
let seed = 1;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const gauss = () => { let u = 0, v = 0; while (u === 0) u = rnd(); while (v === 0) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };

// ---------- binary heap ----------
class Heap { constructor() { this.a = []; } push(t, i) { const a = this.a; a.push([t, i]); let k = a.length - 1; while (k > 0) { const p = (k - 1) >> 1; if (a[p][0] <= a[k][0]) break; [a[p], a[k]] = [a[k], a[p]]; k = p; } }
  pop() { const a = this.a, top = a[0], last = a.pop(); if (a.length) { a[0] = last; let k = 0; for (;;) { const l = 2 * k + 1, r = l + 1; let m = k; if (l < a.length && a[l][0] < a[m][0]) m = l; if (r < a.length && a[r][0] < a[m][0]) m = r; if (m === k) break; [a[m], a[k]] = [a[k], a[m]]; k = m; } } return top; }
  get size() { return this.a.length; } }

const OFFS = []; for (const [dx, dz] of [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]]) for (const sx of [1, -1]) for (const sz of [1, -1]) { const o = [dx * sx, dz * sz]; if (!OFFS.some((q) => q[0] === o[0] && q[1] === o[1])) OFFS.push(o); }

// house component sample points (same as the scene's emitters) + exposure kind
const HOUSE = P.house;

function bake(windKey) {
  const W = P.weather[windKey];
  seed = W.seed;
  const U20 = W.u20 * 88;                 // ft/min
  // per-cell fire behavior
  const beh = new Array(N);
  for (let i = 0; i < N; i++) {
    const fu = fuel[i]; if (!fu) continue;
    const fm = FUELS[fu.f];
    const tanS = Math.hypot(slopeX[i], slopeZ[i]);
    const r = rothermel(fm, W.M, U20 * P.waf[fu.f], tanS);
    // vector sum of wind (+x) and slope (upslope direction) effects
    const ux = tanS > 1e-4 ? slopeX[i] / tanS : 0, uz = tanS > 1e-4 ? slopeZ[i] / tanS : 0;
    const vx = r.phiW + r.phiS * ux, vz = r.phiS * uz, ph = Math.hypot(vx, vz);
    const Rh = r.R0 * (1 + ph) * 0.3048;  // m/min
    const lb = Math.min(P.lbMax, lengthToBreadth(r.ueff(ph) / 88)), e = Math.sqrt(Math.max(0, 1 - 1 / (lb * lb)));
    const I = byram(r.IR, r.R0 * (1 + ph), r.tr) * 3.4613;   // kW/m
    let L = flameLen(byram(r.IR, r.R0 * (1 + ph), r.tr)) * 0.3048; // m
    let crown = false;
    if (fu.tree && L > fu.tree.cbh) { crown = true; L = Math.max(L, fu.tree.h * 1.1); }
    beh[i] = { Rh, hx: ph > 0 ? vx / ph : 1, hz: ph > 0 ? vz / ph : 0, e, I: crown ? I * 4 : I, L, crown, tree: fu.tree, burn: P.burnMin[fu.f] * (crown ? 1.5 : 1) };
  }
  const ros = (b, dx, dz, d) => { const c = (dx * b.hx + dz * b.hz) / d; return (b.Rh * (1 - b.e)) / (1 - b.e * c); };

  const T = new Float32Array(N).fill(Infinity), done = new Uint8Array(N), spot = new Uint8Array(N);
  const H = new Heap();
  // ignition: line across the domain at the start x
  const ix0 = Math.round((W.startX - X0) / CS);
  for (let k = 0; k < NZ; k++) { const i = k * NX + ix0; if (beh[i]) { T[i] = 0; H.push(0, i); } }
  const brands = [];                      // {t0, x0, z0, x1, z1, ign}
  const dose = HOUSE.map(() => []);       // per component: [t, embers]
  const spotMed = (L) => P.spot.k * W.u20 * Math.sqrt(Math.max(0.5, L));
  while (H.size) {
    const [t, i] = H.pop(); if (done[i] || t > T[i]) continue; done[i] = 1;
    if (t > W.tmax) break;
    const b = beh[i], x = cx(i), z = cz(i);
    // spread to neighbours
    const ixx = i % NX, izz = Math.floor(i / NX);
    for (const [dx, dz] of OFFS) {
      const jx = ixx + dx, jz = izz + dz; if (jx < 0 || jz < 0 || jx >= NX || jz >= NZ) continue;
      const j = jz * NX + jx; if (done[j] || !beh[j]) continue;
      const d = Math.hypot(dx, dz) * CS;
      const tt = t + 0.5 * d * (1 / ros(b, dx * CS, dz * CS, d) + 1 / ros(beh[j], dx * CS, dz * CS, d));
      if (tt < T[j]) { T[j] = tt; H.push(tt, j); }
    }
    // firebrands: expected count from intensity, extra for torching trees (eucalyptus bark is a prolific source)
    const lam = P.spot.perCell * Math.pow(b.I / 10000, 0.7) * (b.crown ? (b.tree.kind === 'euc' ? 12 : 5) : 1);
    const med = spotMed(b.L), sg = P.spot.sigma;
    // analytic ember dose at each house component
    for (let c = 0; c < HOUSE.length; c++) {
      const hc = HOUSE[c]; const s = hc.p[0] - x, l = hc.p[2] - z; if (s <= 0.5) continue;
      const fs = Math.exp(-Math.pow(Math.log(s / med), 2) / (2 * sg * sg)) / (s * sg * Math.sqrt(2 * Math.PI));
      const sl = 0.2 * s + 2, fl = Math.exp(-l * l / (2 * sl * sl)) / (sl * Math.sqrt(2 * Math.PI));
      const v = P.spot.dose * lam * fs * fl * hc.area; if (v > 1e-5) dose[c].push([t + s / (W.u20 * 0.447 * 0.8) / 60, v]);
    }
    // sampled brands -> spot fires
    let n = Math.floor(lam); if (rnd() < lam - n) n++;
    for (let k = 0; k < n; k++) {
      const s = med * Math.exp(sg * gauss()), l = gauss() * (0.2 * s + 2);
      const x1 = x + s, z1 = z + l, tl = t + s / (W.u20 * 0.447 * 0.8) / 60;
      const jx = Math.floor((x1 - X0) / CS), jz = Math.floor((z1 - Z0) / CS);
      let ign = 0;
      if (jx >= 0 && jz >= 0 && jx < NX && jz < NZ) {
        const j = jz * NX + jx, fu = fuel[j];
        if (fu && !done[j]) {
          const p = P.spot.recept[fu.f] * Math.max(0, Math.min(1, (0.10 - W.M.d1) / 0.07));
          if (rnd() < p) { const ti = tl + 2 + rnd() * 3; if (ti < T[j]) { T[j] = ti; spot[j] = 1; H.push(ti, j); ign = 1; } }
        }
      }
      if (x1 > -110 && x1 < 66 && z1 > -66 && z1 < 66) brands.push([tl - s / (W.u20 * 0.447 * 0.8) / 60, x, z, x1, z1, ign]);
    }
  }

  // ---------- house exposure: radiant + flame contact (0.5 min steps) ----------
  const near = [];
  for (let i = 0; i < N; i++) if (beh[i] && T[i] < Infinity) { const x = cx(i), z = cz(i); if (x > -45 && x < 50 && z > -40 && z < 40) near.push(i); }
  const firstDose = HOUSE.map(() => Infinity), firstHeat = HOUSE.map(() => Infinity);
  HOUSE.forEach((hc, c) => {
    const ev = dose[c].sort((a, b) => a[0] - b[0]); let acc = 0;
    for (const [t, v] of ev) { acc += v; if (acc >= hc.embers) { firstDose[c] = t + hc.smolder; break; } }
    if (hc.qcrit) {
      let hold = 0;
      for (let t = 0; t < W.tmax; t += 0.5) {
        let contact = false; const bins = new Float32Array(36);
        for (const i of near) {
          const b = beh[i]; if (t < T[i] || t > T[i] + b.burn) continue;
          const x = cx(i), z = cz(i), dx = x - hc.p[0], dz = z - hc.p[2];
          const d = Math.max(0.5, Math.hypot(dx, dz)), top = hgt(x, z) + b.L - hc.p[1];
          if (d < CS * 1.2 && top > 0) contact = true;
          // view factor of a vertical flame panel (height above the target) at horizontal distance d, per 10-degree sector
          const Hh = Math.max(0, top) + Math.min(b.L, Math.max(0, hc.p[1] - hgt(x, z)));
          const fv = 0.5 * (1 - d / Math.hypot(d, Math.max(0.1, Hh)));
          const k = Math.floor(((Math.atan2(dz, dx) + Math.PI) / (2 * Math.PI)) * 36) % 36;
          if (fv > bins[k]) bins[k] = fv;
        }
        let F = 0; for (const v of bins) F += v / 18;
        const q = P.flameE * Math.min(1, F);
        hold = q >= hc.qcrit ? hold + 0.5 : 0;
        if (contact || hold >= hc.tcrit) { firstHeat[c] = t; break; }
      }
    }
  });
  if (process.env.DBG) HOUSE.forEach((hc, c) => console.log(windKey, hc.k, hc.p.join(','), 'dose', dose[c].reduce((a, v) => a + v[1], 0).toFixed(3), 'need', hc.embers, 'heatT', firstHeat[c]));
  // component exposure time = earliest of ember ignition or heat ignition, by node key
  const expo = {};
  HOUSE.forEach((hc, c) => { const t = Math.min(firstDose[c], firstHeat[c]); if (t < Infinity) { if (!(expo[hc.k] && expo[hc.k].t <= t)) expo[hc.k] = { t, kind: firstDose[c] <= firstHeat[c] ? 'ember' : 'heat' }; } });

  // ---------- timeline marks ----------
  const HX = 3.5, HZ = 0.5;
  let tE = Infinity; { const all = dose.flat().sort((a, b) => a[0] - b[0]); let acc = 0; for (const [t, v] of all) { acc += v; if (acc >= 0.3) { tE = t; break; } } }
  let tF = Infinity; for (const i of near) { const d = Math.hypot(cx(i) - HX, cz(i) - HZ); if (d < 22) tF = Math.min(tF, T[i]); }
  if (tF === Infinity) tF = Math.min(W.tmax * 0.5, 60);
  let tMapDone = 0; for (const i of near) if (T[i] < Infinity) tMapDone = Math.max(tMapDone, T[i] + beh[i].burn);

  // ---------- every combination of upgrades ----------
  const EXT = P.ext, combos = [];
  for (let mask = 0; mask < 1 << EXT.length; mask++) {
    const up = new Set(EXT.filter((k, b) => mask & (1 << b)));
    const ign = {}, stop = {}, cause = {};
    const hit = (k, t, c) => { if (!up.has(k)) { if (!(ign[k] <= t)) { ign[k] = t; cause[k] = c; } } else if (!(stop[k] <= t)) stop[k] = t; };
    for (const k in expo) hit(k, expo[k].t, expo[k].kind);
    for (let it = 0; it < 12; it++) for (const [a, b2, d] of P.edges) if (ign[a] != null) hit(b2, ign[a] + d, a);
    combos.push({ ign, stop, cause });
  }
  // recording length: long enough to see the typical home's outcome play out
  const base = combos[0];
  let tmax = Math.max(tMapDone + 20, base.ign.struct != null ? base.ign.struct + 120 : 0, ...Object.values(base.ign).map((t) => t + 30));
  tmax = Math.min(W.tmax, Math.ceil(tmax / 10) * 10);

  // ---------- storage: on-map grid at 2 m, brands, combos ----------
  const SX0 = -100, SX1 = 60, SZ0 = -60, SZ1 = 60, sx = (SX1 - SX0) / CS, sz = (SZ1 - SZ0) / CS;
  const arr = new Uint16Array(sx * sz).fill(65535), bur = new Uint8Array(sx * sz), fl = new Uint8Array(sx * sz), flag = new Uint8Array(sx * sz);
  for (let k = 0; k < sz; k++) for (let j = 0; j < sx; j++) {
    const i = (Math.floor((SZ0 - Z0) / CS) + k) * NX + Math.floor((SX0 - X0) / CS) + j, o = k * sx + j;
    if (!beh[i] || T[i] === Infinity || T[i] > tmax) continue;
    arr[o] = Math.min(65534, Math.round(T[i] * 10)); bur[o] = Math.min(255, Math.round(beh[i].burn * 4));
    fl[o] = Math.min(255, Math.round(beh[i].L * 8)); flag[o] = (beh[i].crown ? 1 : 0) | (spot[i] ? 2 : 0) | ({ GR2: 0, SH7: 4, TU5: 8 }[fuel[i].f] || 0);
  }
  // keep a representative subset of brands for the ember animation (prefer ones that land near the house)
  brands.sort((a, b) => a[0] - b[0]);
  const keep = []; const near2 = (b) => Math.hypot(b[3] - HX, b[4] - HZ) < 30;
  const pr = Math.min(1, P.spot.keep / Math.max(1, brands.length));
  for (const b of brands) if (b[0] <= tmax && (near2(b) || b[5] || rnd() < pr)) keep.push(b);
  const keep2 = keep.length > P.spot.keep * 1.6 ? keep.filter((_, i) => i % Math.ceil(keep.length / (P.spot.keep * 1.6)) === 0) : keep;
  const bArr = new Int16Array(keep2.length * 6);
  keep2.forEach((b, i) => { bArr.set([Math.round(b[0] * 10), Math.round(b[1] * 4), Math.round(b[2] * 4), Math.round(b[3] * 4), Math.round(b[4] * 4), b[5]], i * 6); });
  // fire-front distance + burning area per minute (drives the sky)
  const smokeMin = new Uint8Array(Math.ceil(tmax) + 1);
  { const area = new Float32Array(smokeMin.length);
    for (let i = 0; i < N; i++) if (beh[i] && T[i] < tmax) { const a = Math.floor(T[i]), e2 = Math.min(smokeMin.length - 1, Math.floor(T[i] + beh[i].burn + 8)); for (let m = a; m <= e2; m++) area[m] += 1; }
    let mx = 0; for (const v of area) mx = Math.max(mx, v); for (let m = 0; m < area.length; m++) smokeMin[m] = Math.round(255 * Math.min(1, area[m] / Math.max(1, mx * 0.6))); }
  const KEYS = [...EXT, ...P.inner];
  const cArr = new Uint16Array(combos.length * KEYS.length * 2).fill(65535);
  combos.forEach((c, m) => KEYS.forEach((k, j) => { const o = (m * KEYS.length + j) * 2; if (c.ign[k] != null) cArr[o] = Math.round(c.ign[k] * 10); if (c.stop[k] != null) cArr[o + 1] = Math.round(c.stop[k] * 10); }));
  const causes = {}; for (const k in expo) causes[k] = expo[k].kind;
  const summ = { wind: windKey, tE: +tE.toFixed(1), tF: +tF.toFixed(1), tmax, cells: near.length, brands: brands.length, kept: keep2.length, spots: spot.reduce((a, v) => a + v, 0), expo: Object.fromEntries(Object.entries(expo).map(([k, v]) => [k, v.kind + '@' + v.t.toFixed(1)])), typical: Object.fromEntries(Object.entries(combos[0].ign).map(([k, v]) => [k, +v.toFixed(1)])), hardened: Object.fromEntries(Object.entries(combos[combos.length - 1].ign).map(([k, v]) => [k, +v.toFixed(1)])), vents: Object.fromEntries(Object.entries(combos[(1 << 0) | (1 << 5)].ign).map(([k, v]) => [k, +v.toFixed(1)])) };
  console.log(JSON.stringify(summ));
  const b64 = (ta) => Buffer.from(ta.buffer).toString('base64');
  return { tE: Math.min(tE, tF), tF, tmax, causes, grid: { x0: SX0, z0: SZ0, cs: CS, nx: sx, nz: sz, arr: b64(arr), bur: b64(bur), fl: b64(fl), flag: b64(flag) }, brands: b64(bArr), smoke: b64(smokeMin), combos: b64(cArr), keys: KEYS };
}

const out = {};
for (const w of Object.keys(P.weather)) out[w] = bake(w);
writeFileSync(new URL('../src/rec.js', import.meta.url), '// Generated by tools/bake.mjs — recorded wildfire simulation (do not edit by hand)\nexport const REC = ' + JSON.stringify(out) + ';\n');
