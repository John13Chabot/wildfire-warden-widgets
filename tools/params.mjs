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
  ext: ['attic', 'wood', 'gutter', 'eaves', 'deck', 'found', 'zone'],
  inner: ['atticSp', 'crawl', 'struct'],
  // area: ember catchment (m2); embers: embers needed to ignite; smolder: min from ignition to open flame;
  // qcrit/tcrit: radiant heat (kW/m2) held for tcrit minutes ignites it; direct flame contact always does
  house: [
    ...pts('zone', [[-2.05, 0.6, 3.95], [-1.35, 0.5, 4.1], [-2.7, 0.4, 4.2], [0.1, 0.4, 4.3], [4.4, 0.5, 4.0]], { area: 2, embers: 1.0, smolder: 4 }),
    ...pts('gutter', [[6.5, 3.3, 3.85], [8.2, 3.3, 3.82], [10, 3.3, 3.8], [11.5, 3.3, 3.8]], { area: 3, embers: 1.5, smolder: 3 }),
    ...pts('attic', [[1.5, 6.46, 6.16], [-4.1, 6.4, -0.5]], { area: 6, embers: 3, smolder: 6 }),
    ...pts('found', [[-3.3, 0.35, 3.15], [5.3, 0.35, 3.15]], { area: 3, embers: 3, smolder: 5 }),
    ...pts('deck', [[-7, 2.1, 3.1], [-8.4, 2.1, 1.6], [-6, 2.1, 1], [-8, 2.1, -0.5]], { area: 6, embers: 2.5, smolder: 4, qcrit: 15, tcrit: 2 }),
    ...pts('eaves', [[11.85, 3.4, 3.3], [11.9, 3.4, 0.5], [11.9, 3.4, -2.2], [-3.5, 5.8, 3.4], [0, 5.8, -4.4], [5.5, 5.8, -4.4]], { area: 4, embers: 6, smolder: 6, qcrit: 15, tcrit: 2 }),
    ...pts('wood', [[-0.8, 6.1, 6.7], [3.2, 6.0, 6.6], [-4.1, 2.5, 1.5]], { area: 1, embers: 1e9, smolder: 0, qcrit: 20, tcrit: 2 }),
  ],
  // internal spread: [from, to, minutes]
  edges: [
    ['gutter', 'wood', 8], ['gutter', 'eaves', 12], ['zone', 'found', 10], ['zone', 'wood', 20], ['deck', 'wood', 12], ['deck', 'eaves', 20],
    ['wood', 'eaves', 8], ['attic', 'atticSp', 6], ['eaves', 'atticSp', 10], ['wood', 'atticSp', 20], ['found', 'crawl', 8],
    ['crawl', 'struct', 30], ['atticSp', 'struct', 20],
  ],
};
