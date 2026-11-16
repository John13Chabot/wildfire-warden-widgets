// Bake parameters — every number John may want to review lives here (mirrored in the review table).
const pts = (k, list, o) => list.map((p) => ({ k, p, ...o }));
export default {
  weather: {
    calm:     { u20: 8,  M: { d1: 0.08, d10: 0.09, d100: 0.10, herb: 0.90, woody: 1.10 }, startX: -120,  tmax: 360, seed: 7 },
    windy:    { u20: 20, M: { d1: 0.05, d10: 0.06, d100: 0.07, herb: 0.60, woody: 0.90 }, startX: -300,  tmax: 360, seed: 11 },
    santaana: { u20: 40, M: { d1: 0.03, d10: 0.04, d100: 0.05, herb: 0.30, woody: 0.60 }, startX: -1200, tmax: 360, seed: 13 },
  },
  lbMax: 8,
  flameE: 100,                                               // flame emissive power (kW/m2) for radiant heat                                                  // cap on fire-shape length:breadth
  waf: { GR2: 0.4, SH7: 0.5, TU5: 0.2, MUL: 0.3 },          // 20-ft wind -> midflame
  burnMin: { GR2: 1.5, SH7: 6, TU5: 10, MUL: 20 },          // visible flaming duration per cell (min)
  spot: { k: 1.2, sigma: 0.7, perCell: 0.5, recept: { GR2: 0.9, SH7: 0.35, TU5: 0.6 }, keep: 1200, dose: 20 },
  ext: ['attic', 'wood', 'gutter', 'eaves', 'deck', 'found', 'zone', 'roof', 'windows', 'walls', 'fence'],
  inner: ['atticSp', 'crawl', 'garage', 'struct'],
  // exposure sample points (world space). The bake records ember dose per m2 of catchment and radiant heat /
  // flame contact at each; the runtime risk model (src/risk.js) owns every ignition threshold.
  pts: [
    ...pts('zone', [[-2.05, 0.6, 3.95], [-1.35, 0.5, 4.1], [-2.7, 0.4, 4.2], [0.1, 0.4, 4.3], [4.4, 0.5, 4.0], [9.5, 0.4, -3.65], [12, 0.4, -3.65]]),
    ...pts('gutter', [[6.5, 3.3, 3.85], [8.2, 3.3, 3.82], [10, 3.3, 3.8], [11.5, 3.3, 3.8]]),
    ...pts('attic', [[1.5, 6.46, 6.16], [-4.1, 6.4, -0.5]]),
    ...pts('found', [[-3.3, 0.35, 3.15], [5.3, 0.35, 3.15]]),
    ...pts('deck', [[-7, 1.1, 3.1], [-8.4, 1.1, 1.6], [-6, 1.1, 1], [-8, 1.1, -0.5], [-9.8, 1.1, -2.5]]),
    ...pts('eaves', [[11.85, 3.4, 3.3], [11.9, 3.4, 0.5], [11.9, 3.4, -2.2], [-3.5, 5.8, 3.4], [0, 5.8, -4.4], [5.5, 5.8, -4.4]]),
    ...pts('wood', [[-0.8, 6.1, 6.7], [3.2, 6.0, 6.6], [-4.1, 2.5, 1.5]]),
    ...pts('roof', [[-2, 5.9, 3.6], [4, 5.9, 3.6], [-1, 5.9, -4.6], [4.5, 5.9, -4.6], [9.8, 3.1, 3.75], [9.8, 3.1, -3.75]]),
    ...pts('windows', [[-4.05, 4.4, -2.3], [-4.05, 4.4, 2.0], [-2.5, 1.9, 3.05], [1.5, 4.4, 6.05], [-1.2, 2.0, -4.05], [3.4, 2.0, -4.05], [13.05, 2.0, 0]]),
    ...pts('walls', [[7.3, 1.4, 3.1], [9.5, 1.4, 3.1], [11.7, 1.4, 3.1]]),
    ...pts('fence', [[-4.5, 0.9, -4.08], [-5.3, 0.8, -4.08]]),
    // neighbours: wall faces at 1.2 m + both eave lines
    ...pts('nW', [[-16.2, 1.2, 6], [-22.3, 1.2, 6], [-19.25, 1.2, 2.2], [-19.25, 1.2, 9.8], [-16.1, 3.4, 4.5], [-22.4, 3.4, 7.5]], { rel: 1 }),
    ...pts('nN', [[4.75, 1.2, -13.7], [4.75, 1.2, -21.3], [0.2, 1.2, -17.5], [9.3, 1.2, -17.5], [2.5, 6.0, -13.4], [7, 6.0, -21.6]], { rel: 1 }),
  ],
};
