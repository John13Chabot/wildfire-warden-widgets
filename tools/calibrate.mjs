import { evaluate, setPadHeights, PARAMS, EXT } from '../src/risk.js';
import { hgt } from '../src/world.js';
setPadHeights(hgt);
const S = (a) => new Set(a);
const ALL = EXT, F4 = ['roof', 'walls', 'windows', 'eaves'];
export const SCEN = [
  ['typical', S([]), 0.6],
  ['vents only', S(['attic', 'found']), 0.6],
  ['4 features', S(F4), 0.6],
  ['4 feat + Z0 clear', S([...F4, 'zone']), 0.6],
  ['all but Z0 (60%)', S(ALL.filter((k) => k !== 'zone')), 0.6],
  ['all but Z0 (25%)', S(ALL.filter((k) => k !== 'zone')), 0.25],
  ['all but Z0 (10%)', S(ALL.filter((k) => k !== 'zone')), 0.1],
  ['fully hardened', S(ALL), 0],
];
export function table(winds = ['santaana', 'windy', 'calm']) {
  const t0 = Date.now();
  for (const w of winds) for (const [n, up, cov] of SCEN) {
    const r = evaluate(up, w, { cov, outer: +(process.env.O || 12), inner: +(process.env.I || 40) });
    const c = r.central;
    console.log(w.padEnd(9), n.padEnd(18), 'P(loss)', (r.risk.p * 100).toFixed(0).padStart(3) + '%', `[${(r.risk.lo * 100).toFixed(0)}-${(r.risk.hi * 100).toFixed(0)}]`, 'central', c.ign.struct != null ? 'LOST@' + c.ign.struct.toFixed(0) : 'ok', 'nbr', c.tN.map((x) => x.toFixed(0)).join('/'), Object.keys(c.ign).join(','));
  }
  console.log('ms', Date.now() - t0);
}
if (process.argv[1].endsWith('calibrate.mjs')) table(process.argv[2] ? [process.argv[2]] : undefined);
