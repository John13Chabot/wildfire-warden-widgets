// Rothermel (1972) surface fire spread model with Albini (1976) formulation,
// as used in BehavePlus / FARSITE / FlamMap. English units internally (ft, min, lb, BTU).
// Fuel models: Scott & Burgan (2005) standard fire behavior fuel models, plus a custom bark-mulch bed.

const TAC = 0.0459137; // tons/acre -> lb/ft^2
// [load 1h, 10h, 100h, liveHerb, liveWoody] t/ac; SAV [1h, liveHerb, liveWoody] 1/ft; depth ft; Mx dead (fraction); heat BTU/lb; dynamic
export const FUELS = {
  GR2: { name: 'GR2 low load dry climate grass', w: [0.10, 0, 0, 1.00, 0], s: [2000, 1800, 9999], d: 1.0, mx: 0.15, h: 8000, dyn: true },
  SH7: { name: 'SH7 very high load dry climate shrub (chaparral)', w: [3.5, 5.3, 2.2, 0, 3.4], s: [750, 9999, 1600], d: 6.0, mx: 0.15, h: 8000, dyn: false },
  TU5: { name: 'TU5 very high load dry climate timber-shrub (oak/eucalyptus understory)', w: [4.0, 4.0, 3.0, 0, 3.0], s: [1500, 9999, 750], d: 1.0, mx: 0.25, h: 8000, dyn: false },
  MUL: { name: 'Bark mulch bed (custom, after NIST TN 1910 / Steward et al.)', w: [1.6, 1.4, 0, 0, 0], s: [1200, 9999, 9999], d: 0.25, mx: 0.25, h: 8000, dyn: false },
};

export function rothermel(fm, M, Umid /* ft/min */, tanSlope) {
  // M: {d1, d10, d100, herb, woody} moisture fractions
  let w = fm.w.map((x) => x * TAC), sav1 = fm.s[0], savH = fm.s[1], savW = fm.s[2];
  // dynamic herbaceous transfer (cured herb -> dead 1h class with herb SAV)
  let wHd = 0;
  if (fm.dyn && w[3] > 0) { const tr = Math.max(0, Math.min(1, (1.2 - M.herb) / 0.9)); wHd = w[3] * tr; w[3] -= wHd; }
  const dead = [{ w: w[0], s: sav1, m: M.d1 }, { w: w[1], s: 109, m: M.d10 }, { w: w[2], s: 30, m: M.d100 }, { w: wHd, s: savH, m: M.d1 }].filter((c) => c.w > 0);
  const live = [{ w: w[3], s: savH, m: M.herb }, { w: w[4], s: savW, m: M.woody }].filter((c) => c.w > 0);
  const rhoP = 32, ST = 0.0555, SE = 0.01;
  const A = (cs) => cs.reduce((a, c) => a + (c.s * c.w) / rhoP, 0);
  const Ad = A(dead), Al = A(live), At = Ad + Al;
  const fD = Ad / At, fL = Al / At;
  const fi = (cs, Ac) => cs.map((c) => ((c.s * c.w) / rhoP) / Ac);
  const fd = fi(dead, Ad), fl = Al > 0 ? fi(live, Al) : [];
  const sig = (cs, f) => cs.reduce((a, c, i) => a + f[i] * c.s, 0);
  const sD = sig(dead, fd), sL = Al > 0 ? sig(live, fl) : 0;
  const sigma = fD * sD + fL * sL;
  const wTot = [...dead, ...live].reduce((a, c) => a + c.w, 0);
  const rhoB = wTot / fm.d, beta = rhoB / rhoP, bop = 3.348 * Math.pow(sigma, -0.8189), rb = beta / bop;
  const Gmax = Math.pow(sigma, 1.5) / (495 + 0.0594 * Math.pow(sigma, 1.5));
  const Aa = 133 * Math.pow(sigma, -0.7913);
  const G = Gmax * Math.pow(rb, Aa) * Math.exp(Aa * (1 - rb));
  const wn = (cs, f) => cs.reduce((a, c, i) => a + f[i] * c.w * (1 - ST), 0);
  const MfD = dead.reduce((a, c, i) => a + fd[i] * c.m, 0);
  const MfL = Al > 0 ? live.reduce((a, c, i) => a + fl[i] * c.m, 0) : 0;
  let MxL = fm.mx;
  if (Al > 0) {
    const Wp = dead.reduce((a, c) => a + c.w * Math.exp(-138 / c.s), 0) / live.reduce((a, c) => a + c.w * Math.exp(-500 / c.s), 0);
    MxL = Math.max(fm.mx, 2.9 * Wp * (1 - MfD / fm.mx) - 0.226);
  }
  const etaM = (m, mx) => { const r = Math.min(1, m / mx); return Math.max(0, 1 - 2.59 * r + 5.11 * r * r - 3.52 * r * r * r); };
  const etaS = 0.174 * Math.pow(SE, -0.19);
  const IR = G * (wn(dead, fd) * fm.h * etaM(MfD, fm.mx) * etaS + (Al > 0 ? wn(live, fl) * fm.h * etaM(MfL, MxL) * etaS : 0)); // BTU/ft2/min
  const xi = Math.exp((0.792 + 0.681 * Math.sqrt(sigma)) * (beta + 0.1)) / (192 + 0.2595 * sigma);
  const heatSink = (cs, f) => cs.reduce((a, c, i) => a + f[i] * Math.exp(-138 / c.s) * (250 + 1116 * c.m), 0);
  const rbeQ = rhoB * (fD * heatSink(dead, fd) + (Al > 0 ? fL * heatSink(live, fl) : 0));
  const R0 = (IR * xi) / rbeQ; // ft/min
  const C = 7.47 * Math.exp(-0.133 * Math.pow(sigma, 0.55)), B = 0.02526 * Math.pow(sigma, 0.54), E = 0.715 * Math.exp(-3.59e-4 * sigma);
  const phiW = Umid > 0 ? C * Math.pow(Umid, B) * Math.pow(rb, -E) : 0;
  const phiS = 5.275 * Math.pow(beta, -0.3) * tanSlope * tanSlope;
  const tr = 384 / sigma; // residence time, min
  return { R0, IR, phiW, phiS, C, B, E, rb, tr, sigma,
    // effective wind (ft/min) that would give a given total phi (used for the length-to-breadth ratio)
    ueff: (phi) => (phi > 0 ? Math.pow(phi / (C * Math.pow(rb, -E)), 1 / B) : 0) };
}

// Byram fireline intensity (BTU/ft/s) and flame length (ft)
export const byram = (IR, R, tr) => (IR * R * tr) / 60;
export const flameLen = (I) => 0.45 * Math.pow(Math.max(0, I), 0.46);
// Anderson (1983) length-to-breadth from effective midflame wind (mi/h)
export const lengthToBreadth = (umph) => 0.936 * Math.exp(0.2566 * umph) + 0.461 * Math.exp(-0.1548 * umph) - 0.397;
