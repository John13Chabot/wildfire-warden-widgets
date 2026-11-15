// How each fuel looks when it burns. Spread rate, flame length and flaming time come from the
// recorded simulation (Rothermel); these profiles set the look: flame shape and flicker, colour
// temperature, smoke colour/volume, sparks, and what is left glowing afterwards.
//
//  freq   tongue frequency across the flame (many thin tongues vs. a few big rolling lobes)
//  speed  how fast the flame surface churns upward
//  hot    colour temperature (>1 = yellow-white, <1 = deep orange-red, sooty)
//  w, h   card proportions relative to flame length (grass burns as a wide low band, trees as a column)
//  smoke  colour (linear RGB), sd = density, sz = plume size, rise = climb rate
//  sparks firebrand / spark output relative to chaparral
//  smolder minutes of smoke after the flames die; coals = minutes of glowing ground
export const FUELFX = {
  // Cured annual grass: fast thin front, short bright yellow flames, wispy tan-white smoke, out in about a minute.
  grass:  { freq: 5.2, speed: 3.6, hot: 1.18, w: 1.6, h: 0.85, smoke: [0.68, 0.64, 0.58], sd: 0.3, sz: 0.7, rise: 0.7, sparks: 0.25, smolder: 3, coals: 0.5 },
  // Chaparral (chamise, manzanita, scrub oak): tall turbulent orange-red flames, oily brown-black smoke column, heavy brands.
  chap:   { freq: 2.6, speed: 2.3, hot: 0.92, w: 0.75, h: 1.2, smoke: [0.27, 0.23, 0.2], sd: 0.8, sz: 1.3, rise: 1.0, sparks: 1.0, smolder: 15, coals: 6 },
  // Oak understory / litter: low creeping flames, lots of grey smoke, long smoulder.
  litter: { freq: 4.0, speed: 2.4, hot: 0.88, w: 1.2, h: 0.8, smoke: [0.5, 0.47, 0.43], sd: 0.6, sz: 0.9, rise: 0.8, sparks: 0.4, smolder: 30, coals: 10 },
  // Torching oak crown: a column of flame through the canopy, dark grey smoke, glowing limbs after.
  oak:    { freq: 2.0, speed: 1.9, hot: 0.95, w: 0.7, h: 1.3, smoke: [0.24, 0.22, 0.2], sd: 0.85, sz: 1.4, rise: 1.1, sparks: 1.6, smolder: 25, coals: 12 },
  // Eucalyptus: oil-rich, explosive torch, very bright, black smoke, prolific bark-strip embers.
  euc:    { freq: 1.8, speed: 2.4, hot: 1.08, w: 0.6, h: 1.5, smoke: [0.12, 0.11, 0.1], sd: 0.95, sz: 1.6, rise: 1.3, sparks: 3.0, smolder: 20, coals: 10 },
  // Cypress / juniper: flashes in seconds, intensely bright, black smoke.
  cypress:{ freq: 2.4, speed: 3.0, hot: 1.12, w: 0.65, h: 1.5, smoke: [0.14, 0.12, 0.11], sd: 0.9, sz: 1.2, rise: 1.2, sparks: 2.0, smolder: 10, coals: 6 },
  // Bark mulch: mostly smoulders; small flickering flames and thick white-grey smoke for a long time.
  mulch:  { freq: 6.5, speed: 4.4, hot: 0.82, w: 1.4, h: 0.45, smoke: [0.8, 0.78, 0.74], sd: 0.75, sz: 0.8, rise: 0.5, sparks: 0.3, smolder: 45, coals: 30 },
  // Gutter debris (leaves, needles): quick bright flare, grey-white smoke.
  debris: { freq: 5.0, speed: 4.0, hot: 1.1, w: 1.1, h: 0.9, smoke: [0.66, 0.64, 0.6], sd: 0.55, sz: 0.7, rise: 0.8, sparks: 0.6, smolder: 6, coals: 2 },
  // Dimensional lumber (deck, fascia, trim, eaves): steady orange flames, grey-brown smoke.
  wood:   { freq: 3.0, speed: 2.3, hot: 0.95, w: 0.95, h: 1.0, smoke: [0.4, 0.37, 0.34], sd: 0.6, sz: 1.0, rise: 0.9, sparks: 0.5, smolder: 20, coals: 15 },
  // Whole-house fire: huge rolling deep-orange flames, dense black smoke from furnishings and plastics.
  struct: { freq: 1.6, speed: 1.5, hot: 0.86, w: 1.0, h: 1.0, smoke: [0.06, 0.055, 0.05], sd: 0.95, sz: 1.8, rise: 1.0, sparks: 1.5, smolder: 120, coals: 120 },
};
// house weak point -> fuel that is actually burning there
export const HOUSE_FUEL = { zone: 'mulch', gutter: 'debris', attic: 'wood', found: 'wood', deck: 'wood', eaves: 'wood', wood: 'wood', atticSp: 'struct', crawl: 'wood', struct: 'struct' };
// recorded cell flags -> fuel (bit0 crown fire, bits 2-3 fuel model GR2/SH7/TU5)
export const cellFuel = (f) => ((f & 12) === 4 ? 'chap' : (f & 12) === 8 ? ((f & 1) ? 'oak' : 'litter') : 'grass');

export function styleFlame(f, fx) {
  const u = f.material.uniforms;
  u.uFreq.value = fx.freq; u.uSpeed.value = fx.speed; u.uHot.value = fx.hot;
}
