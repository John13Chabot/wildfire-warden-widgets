// Playback of the recorded wildfire simulation (tools/bake.mjs -> rec.js).
// Nothing is simulated here: every flame, ember flight and house event comes from the recording.
import * as THREE from 'three';
import { REC } from './rec.js';
import { FUELFX, cellFuel, styleFlame } from './fuelfx.js';

const b64 = (s, T) => { const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new T(u.buffer); };
const cache = {};
export function rec(w) {
  if (cache[w]) return cache[w];
  const r = REC[w], g = r.grid;
  const arr = b64(g.arr, Uint16Array), bur = b64(g.bur, Uint8Array), fl = b64(g.fl, Uint8Array), flag = b64(g.flag, Uint8Array);
  const br = b64(r.brands, Int16Array), brands = [];
  for (let i = 0; i < br.length; i += 6) {
    const t0 = br[i] / 10, x0 = br[i + 1] / 4, z0 = br[i + 2] / 4, x1 = br[i + 3] / 4, z1 = br[i + 4] / 4, d = Math.hypot(x1 - x0, z1 - z0);
    brands.push({ t0, x0, z0, x1, z1, d, dur: d / (({ calm: 8, windy: 20, santaana: 40 })[w] * 0.447 * 0.8) / 60, ign: br[i + 5] });
  }
  const C = { ...r, g, arr, bur, fl, flag, brands, smokeA: b64(r.smoke, Uint8Array), combosA: b64(r.combos, Uint16Array) };
  // sampler: arrival (min), flaming duration (min), flame length (m), flags at world x,z
  C.at = (x, z) => {
    const j = Math.floor((x - g.x0) / g.cs), k = Math.floor((z - g.z0) / g.cs);
    if (j < 0 || k < 0 || j >= g.nx || k >= g.nz) return null;
    const o = k * g.nx + j; if (arr[o] === 65535) return null;
    return { t: arr[o] / 10, b: bur[o] / 4, L: fl[o] / 8, f: flag[o] };
  };
  // flame sites: 2x2-cell blocks (4 m)
  const sites = [];
  for (let k = 0; k < g.nz; k += 2) for (let j = 0; j < g.nx; j += 2) {
    let t0 = Infinity, t1 = 0, L = 0, n = 0, crown = 0; const fc = {};
    for (let dk = 0; dk < 2; dk++) for (let dj = 0; dj < 2; dj++) {
      const o = (k + dk) * g.nx + j + dj; if (k + dk >= g.nz || j + dj >= g.nx || arr[o] === 65535) continue;
      const t = arr[o] / 10; t0 = Math.min(t0, t); t1 = Math.max(t1, t + bur[o] / 4); L = Math.max(L, fl[o] / 8); n++; crown |= flag[o] & 1; const fu = cellFuel(flag[o]); fc[fu] = (fc[fu] || 0) + 1 + (fu === 'oak' ? 3 : 0);
    }
    if (n) { const fuel = Object.keys(fc).sort((a, b) => fc[b] - fc[a])[0]; sites.push({ x: g.x0 + (j + 1) * g.cs, z: g.z0 + (k + 1) * g.cs, t0, t1, L, n, crown, fuel, fx: FUELFX[fuel], h: Math.abs((j * 73856093) ^ (k * 19349663)) % 1000 / 1000 }); }
  }
  C.sites = sites;
  return (cache[w] = C);
}

// ---------- recorded house outcome for a set of upgrades ----------
const IGN = {
  zone: { ember: 'Embers ignite mulch and plants against the house' },
  gutter: { ember: 'Embers ignite leaves and needles in the gutter' },
  attic: { ember: 'Embers blow through the 1/4" gable vent screen' },
  found: { ember: 'Embers enter a foundation vent', zone: 'Burning mulch pushes fire into a foundation vent' },
  deck: { ember: 'Embers lodge between deck boards and ignite', heat: 'Burning brush beside the deck ignites it' },
  eaves: { ember: 'Embers collect in the open eaves and ignite', heat: 'Heat from nearby flames ignites the open eaves' },
  wood: { heat: 'Flames and heat ignite exposed fascia and trim' },
  atticSp: { any: 'Attic fire, hidden from view' },
  crawl: { any: 'Fire in the crawl space under the floor' },
  struct: { any: 'Fire spreads through the house' },
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
export function recordedOutcome(up, w, EXT) {
  const C = rec(w), K = C.keys;
  let mask = 0; EXT.forEach((k, b) => { if (up.has(k)) mask |= 1 << b; });
  const ign = {}, stop = {}, ember = {};
  K.forEach((k, j) => { const o = (mask * K.length + j) * 2; if (C.combosA[o] !== 65535) ign[k] = C.combosA[o] / 10; if (C.combosA[o + 1] !== 65535) stop[k] = C.combosA[o + 1] / 10; });
  // ember-glow cue for components reached by embers
  const base = C.combosA; K.forEach((k, j) => { if (C.causes[k] === 'ember') { const t = ign[k] ?? stop[k]; if (t != null) ember[k] = t; } });
  const ev = [];
  for (const k in ign) { const m = IGN[k]; const c = C.causes[k]; const text = m.any || m[c] || (k === 'found' && ign.zone != null && ign.zone < ign.found ? m.zone : null) || m.ember || m.heat; ev.push({ k, t: ign[k], kind: 'ign', text }); }
  for (const k in stop) ev.push({ k, t: stop[k], kind: 'stop', text: STOP[k] });
  ev.sort((a, b) => a.t - b.t);
  return { ign, stop, ember, ev, lost: ign.struct != null };
}

// ---------- recording timeline -> playback seconds and phases ----------
export const PLAY_END = 50;
export function timeline(w) {
  const C = rec(w), TMAX = C.tmax;
  let tMap = Infinity; for (const s of C.sites) tMap = Math.min(tMap, s.t0);
  const t0 = Math.max(0.5, Math.min(C.tE, tMap)), tF = Math.max(t0 + 2, C.tF), tP = Math.min(TMAX - 10, tF + 25), tE = t0;
  // slow motion while the fire is on screen and reaching the house, fast-forward through the hours after
  const PB = [[0, 0], [t0, 3], [tF, 22], [tF + 5, 27], [tP, 32], [TMAX, PLAY_END]];
  const toSec = (m) => { for (let i = 1; i < PB.length; i++) if (m <= PB[i][0]) { const [a, b] = [PB[i - 1], PB[i]]; return a[1] + (m - a[0]) / (b[0] - a[0]) * (b[1] - a[1]); } return PLAY_END; };
  const toMin = (s) => { for (let i = 1; i < PB.length; i++) if (s <= PB[i][1]) { const [a, b] = [PB[i - 1], PB[i]]; return a[0] + (s - a[1]) / (b[1] - a[1]) * (b[0] - a[0]); } return TMAX; };
  const PHASES = [[0, t0, 'Fire approaching'], [t0, tF, 'Embers and spot fires'], [tF, tP, 'Fire front'], [tP, TMAX, 'After the front']];
  return { TMAX, tE, tF, tP, PHASES, toSec, toMin };
}

// ---------- environment visuals driven by the recording ----------
export function createEnvFX({ G, SH, hgt, RM, SMALL, gT }) {
  const NF = SMALL ? 30 : 60, NS = SMALL ? 12 : 24, NB = RM ? 0 : SMALL ? 260 : 600;
  const flames = Array.from({ length: NF }, (_, i) => { const f = SH.flame(i * 1.37 + 90); f.visible = false; G.add(f); return f; });
  const smokes = Array.from({ length: NS }, (_, i) => { const s = SH.smoke(i * 2.1 + 50); s.visible = false; G.add(s); return s; });
  const bP = new Float32Array(Math.max(1, NB) * 3).fill(-999), bG = new THREE.BufferGeometry(); bG.setAttribute('position', new THREE.BufferAttribute(bP, 3));
  const bm = new THREE.Points(bG, new THREE.PointsMaterial({ map: gT, color: new THREE.Color(1.7, 0.8, 0.25), size: SMALL ? 1.1 : 1.3, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  bm.frustumCulled = false; G.add(bm);
  const act = [], smk = [], PM = new THREE.Matrix4(), FR = new THREE.Frustum(), V = new THREE.Vector3();
  return {
    // m: sim minutes, t: seconds clock, lean: wind lean
    update(C, m, t, lean, ran, cam, near) {
      const inNear = (s) => !near || Math.hypot(s.x - near.x, s.z - near.z) < near.r;
      act.length = 0;
      if (cam) { PM.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse); FR.setFromProjectionMatrix(PM); }
      if (ran) for (const s of C.sites) if (m >= s.t0 && m <= s.t1 && inNear(s)) {
        const y = hgt(s.x, s.z); V.set(s.x, y + Math.min(8, s.L) * 0.4, s.z);
        if (cam && !FR.containsPoint(V)) continue;
        const u = (m - s.t0) / Math.max(0.5, s.t1 - s.t0), k = Math.min(1, u * 4) * Math.min(1, (1 - u) * 2.5 + 0.15);
        const dist = cam ? cam.position.distanceTo(V) : 50;
        if (dist < 12 + Math.min(14, s.L) * 0.6) continue;   // a flame right at the lens would just fill the frame
        act.push([s, k * Math.min(14, s.L) * (1 + s.h * 0.2), (k * Math.min(14, s.L)) / (1 + dist / 70)]);
      }
      act.sort((a, b) => b[2] - a[2]);
      flames.forEach((f, i) => {
        const a = act[i]; f.visible = !!a && a[1] > 0.15;
        if (!f.visible) return;
        const s = a[0], fx = s.fx, L = Math.max(0.6, Math.min(16, s.L)) * (0.45 + 0.55 * Math.min(1, a[1] / Math.max(0.5, s.L)));
        // grass burns as a wide, low, fast-flickering band; chaparral and torching crowns as tall turbulent columns
        f.position.set(s.x + (s.h - 0.5) * 2, hgt(s.x, s.z) - 0.2, s.z + (s.h - 0.5) * 2);
        f.scale.set(Math.max(2.4, L * fx.w) * (1 + 0.4 * lean), L * 1.15 * fx.h * (1 - 0.2 * lean), 1);
        styleFlame(f, fx);
        f.material.uniforms.uI.value = 0.6 + 0.5 * Math.min(1, a[1] / 6); f.material.uniforms.uLean.value = lean;
      });
      // smoke: from flaming sites and from ground still smouldering after the flames, coloured and sized by fuel
      smk.length = 0;
      if (ran) for (const s of C.sites) {
        const fx = s.fx, end = s.t1 + fx.smolder; if (m < s.t0 || m > end || !inNear(s)) continue;
        const flaming = m <= s.t1, k = flaming ? 1 : Math.pow(1 - (m - s.t1) / fx.smolder, 1.5) * 0.6;
        const y = hgt(s.x, s.z); V.set(s.x, y + 4, s.z); if (cam && !FR.containsPoint(V)) continue;
        const dist = cam ? cam.position.distanceTo(V) : 50; if (dist < 14) continue;
        smk.push([s, k, (k * fx.sd * (2 + Math.min(14, s.L))) / (1 + dist / 80), flaming]);
      }
      smk.sort((a, b) => b[2] - a[2]);
      smokes.forEach((sm, i) => {
        const a = smk[i]; sm.visible = !!a;
        if (!a) return;
        const s = a[0], fx = s.fx, Ls = Math.min(14, s.L), u = RM ? 0.5 : (t * 0.12 * (0.6 + fx.rise * 0.5) + s.h) % 1;
        const ss = (a[3] ? 6 + Ls * (0.8 + u * 1.6) : 4 + u * 9) * fx.sz;
        sm.position.set(s.x + u * (3 + 16 * lean), hgt(s.x, s.z) + (a[3] ? Ls : 1) + u * 12 * fx.rise * (1 - 0.4 * lean), s.z);
        sm.scale.set(ss, ss, 1);
        sm.material.uniforms.uCol.value.setRGB(fx.smoke[0], fx.smoke[1], fx.smoke[2]);
        sm.material.uniforms.uI.value = fx.sd * 0.75 * a[1] * Math.sin(Math.PI * Math.min(1, u * 1.3 + 0.08));
      });
      // recorded firebrand flights
      let n = 0;
      if (ran && NB && !near) for (const b of C.brands) {
        if (b.t0 > m) break;
        const u = (m - b.t0) / Math.max(0.05, b.dur); if (u > 1.15 || n >= NB) continue;
        const uu = Math.min(1, u), x = b.x0 + (b.x1 - b.x0) * uu, z = b.z0 + (b.z1 - b.z0) * uu;
        if (x < -110) continue;
        const y = (u <= 1 ? hgt(b.x0, b.z0) + 4 + Math.min(45, b.d * 0.22) * Math.sin(Math.PI * uu) + (hgt(b.x1, b.z1) - hgt(b.x0, b.z0)) * uu : hgt(b.x1, b.z1) + 0.15);
        bP[n * 3] = x + Math.sin(t * 3 + n) * 0.3; bP[n * 3 + 1] = y; bP[n * 3 + 2] = z + Math.cos(t * 2.3 + n) * 0.3; n++;
      }
      for (let i = n; i < NB; i++) bP[i * 3 + 1] = -999;
      bG.attributes.position.needsUpdate = true;
      return act;
    },
  };
}
