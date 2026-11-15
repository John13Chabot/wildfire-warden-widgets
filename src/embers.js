// Firebrand physics around the house.
//
// Wind: Santa Ana speed (passed in each step) with a near-ground log profile, smooth turbulence, flow lifting
// over the windward face of the house, a slow sheltered wake with a reverse eddy behind it, and calm air
// against walls. Brands: drag toward the local wind with a response time set by their size (bigger = heavier,
// slower to follow the wind, faster to fall), gravity, bounce off walls, slide down roofs and along the ground,
// and come to rest where the air is slow enough. Resting brands keep glowing and cool over time.
//
// The house is a height field (top surface: roofs, deck, ground) sampled once by ray casting the model.
import * as THREE from 'three';

const G = 9.8;

export function createEmbers({ solids, hgt, glowT, SMALL, RM }) {
  // ---------- height field of everything solid ----------
  const CS = 0.25, X0 = -16, Z0 = -11, NX = Math.round(34 / CS), NZ = Math.round(24 / CS);
  const HF = new Float32Array(NX * NZ);
  const rc = new THREE.Raycaster(); rc.firstHitOnly = true;
  const dn = new THREE.Vector3(0, -1, 0), o = new THREE.Vector3();
  for (let k = 0; k < NZ; k++) for (let j = 0; j < NX; j++) {
    const x = X0 + (j + 0.5) * CS, z = Z0 + (k + 0.5) * CS, g = hgt(x, z);
    o.set(x, 40, z); rc.set(o, dn); rc.far = 60;
    const h = rc.intersectObjects(solids, false)[0];
    HF[k * NX + j] = h ? Math.max(g, h.point.y) : g;
  }
  const H = (x, z) => {
    const j = Math.floor((x - X0) / CS), k = Math.floor((z - Z0) / CS);
    return j < 0 || k < 0 || j >= NX || k >= NZ ? hgt(x, z) : HF[k * NX + j];
  };
  // ---------- shelter grids (wind blows toward +x) ----------
  // up: height of the obstacle upwind (minus a 1:5 wake slope) and how far back it is
  // dw: height of the obstacle just downwind (flow lifts over the windward face)
  const UPH = new Float32Array(NX * NZ), UPD = new Float32Array(NX * NZ), DWH = new Float32Array(NX * NZ), DWD = new Float32Array(NX * NZ);
  for (let k = 0; k < NZ; k++) for (let j = 0; j < NX; j++) {
    const i = k * NX + j, x = X0 + (j + 0.5) * CS, z = Z0 + (k + 0.5) * CS, g = hgt(x, z);
    let bh = 0, bd = 0;
    for (let s = 1; s <= 64 && j - s >= 0; s++) { const ob = HF[i - s] - hgt(x - s * CS, z), e = ob - s * CS * 0.2; if (ob > 0.8 && e > bh) { bh = e; bd = s * CS; } }
    UPH[i] = bh; UPD[i] = bd;
    let dh = 0, dd = 0;
    for (let s = 1; s <= 24 && j + s < NX; s++) { const ob = HF[i + s] - g; if (ob > 0.8 && ob > dh) { dh = ob; dd = s * CS; break; } }
    DWH[i] = dh; DWD[i] = dd;
  }
  const gi = (x, z) => { const j = Math.floor((x - X0) / CS), k = Math.floor((z - Z0) / CS); return j < 0 || k < 0 || j >= NX || k >= NZ ? -1 : k * NX + j; };

  // local wind (writes into w)
  function wind(x, y, z, U, t, w) {
    const g = hgt(x, z), ag = Math.max(0.05, y - g);
    let f = Math.min(1.15, Math.max(0.3, 0.35 + 0.22 * Math.log(1 + ag / 0.2)));
    let ux = U * f, uz = 0;
    // air follows the terrain: it rises up the slope (fading with height above the ground)
    let uy = ux * (hgt(x + 1, z) - hgt(x - 1, z)) / 2 * Math.max(0, 1 - ag / 40);
    const i = gi(x, z);
    if (i >= 0) {
      const hs = UPH[i];
      if (hs > 0 && ag < hs) {                                    // sheltered wake behind the house
        const q = ag / hs; ux *= 0.12 + 0.88 * q * q;
        if (UPD[i] < 2.5 * hs + 2) { ux -= U * 0.28 * (1 - q); uy += U * 0.08 * (1 - q); }   // reverse eddy
      }
      const dh = DWH[i];
      if (dh > 0 && ag < dh + 1 && HF[i] - g < 0.5) { const d = DWD[i] / 6; ux *= 0.25 + 0.75 * Math.min(1, d); uy += U * 0.55 * (1 - Math.min(1, d)); }   // lift over the windward face
      if (HF[i] > g + 0.5 && y < HF[i] + 1.5) { ux *= 0.6; }     // slowed right over roofs
    }
    // smooth turbulence (eddies a few metres across, drifting with the wind)
    const a = x * 0.21 - t * 2.6, b = z * 0.19, c2 = y * 0.33;
    ux += U * 0.14 * Math.sin(a + c2 * 1.3) * Math.cos(b * 1.1);
    uy += U * 0.11 * Math.sin(b + a * 0.7 + 1.7) * Math.cos(c2 - t * 1.3);
    uz += U * 0.13 * Math.cos(a * 0.9 + b * 1.4 + 0.6) * Math.sin(c2 * 1.2 + t * 0.9);
    w[0] = ux; w[1] = uy; w[2] = uz;
  }

  // ---------- brands ----------
  const N = RM ? 0 : SMALL ? 4500 : 13000;
  const P = new Float32Array(N * 3), V = new Float32Array(N * 3), TAU = new Float32Array(N), ST = new Uint8Array(N), AGE = new Float32Array(N), REST = new Float32Array(N), AIRL = new Float32Array(N), LIFE = new Float32Array(N), BIG = new Uint8Array(N);
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 4), posB = new Float32Array(N * 3), colB = new Float32Array(N * 4);
  const mkPts = (p, c, size) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('color', new THREE.BufferAttribute(c, 4)); const m = new THREE.Points(g, new THREE.PointsMaterial({ map: glowT, vertexColors: true, size, transparent: true, depthWrite: false })); m.frustumCulled = false; return m; };
  const small = mkPts(pos, col, SMALL ? 0.55 : 0.5), big = mkPts(posB, colB, SMALL ? 1.1 : 1.0);
  const group = new THREE.Group(); group.add(small, big);
  let FZ = 0, FY = 4, BX = 0, BZ = 0, BR = 26, BY = 16, VIEW = false;
  let seed = 1; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const w = [0, 0, 0];
  function spawn(i, U, t, anywhere) {
    // brands arrive from the burning hillside upwind, at all heights and across the whole width of the view
    // denser across the part of the sky the camera is looking at (the brand source is a broad front, not uniform)
    let x, z, y;
    if (VIEW) {
      // fill the whole view: a box around what the camera looks at, re-seeded from its upwind edge
      x = BX - BR + rnd() * 2 * BR; z = BZ - BR + rnd() * 2 * BR;   // upwind band (fading in) keeps the flow from thinning out
      y = hgt(x, z) + 0.6 + Math.pow(rnd(), 1.35) * BY;
    } else {
      const gz = (rnd() + rnd() + rnd() - 1.5) * 2 * 6;
      x = anywhere ? -30 + rnd() * 52 : -32 + rnd() * 6; z = Math.max(-19, Math.min(19, FZ + gz));
      y = Math.max(hgt(x, z) + 1, 0.5 + Math.pow(rnd(), 1.15) * (FY + 9));
    }
    P[i * 3] = x; P[i * 3 + 1] = Math.max(y, H(x, z) + 0.5); P[i * 3 + 2] = z;
    BIG[i] = rnd() < 0.14 ? 1 : 0;
    TAU[i] = BIG[i] ? 0.22 + rnd() * 0.12 : 0.07 + rnd() * 0.12;     // response time: terminal fall = g * tau (0.7 - 3.3 m/s)
    wind(x, P[i * 3 + 1], z, U, t, w); V[i * 3] = w[0]; V[i * 3 + 1] = w[1] - G * TAU[i]; V[i * 3 + 2] = w[2];
    ST[i] = 0; AGE[i] = 0; REST[i] = 0; LIFE[i] = 20 + rnd() * 50;
    // brands burn out in the air too: limit flight time so the flow stays evenly spread across the view
    AIRL[i] = VIEW ? 2.5 + rnd() * 4 : 1e9;
  }
  let NA = N;
  function step(dt, U, t) {
    for (let i = 0; i < NA; i++) {
      const i3 = i * 3; let x = P[i3], y = P[i3 + 1], z = P[i3 + 2];
      AGE[i] += dt;
      if (ST[i] === 2) { if (AGE[i] > LIFE[i]) spawn(i, U, t); continue; }   // resting: glows, cools, goes out
      wind(x, y, z, U, t, w);
      const tau = TAU[i];
      let vx = V[i3], vy = V[i3 + 1], vz = V[i3 + 2];
      if (ST[i] === 0 && AGE[i] > AIRL[i]) { spawn(i, U, t); continue; }
      if (ST[i] === 0) {
        // airborne: drag toward the wind + gravity
        vx += (w[0] - vx) / tau * dt; vy += ((w[1] - vy) / tau - G) * dt; vz += (w[2] - vz) / tau * dt;
        let nx = x + vx * dt, ny = y + vy * dt, nz = z + vz * dt;
        const hn = H(nx, nz);
        if (ny < hn + 0.4 && gi(nx, nz) < 0) { ny = hn + 0.4; vy = Math.max(vy, 0.5); }   // open hillside: skim the slope, keep flying
        else if (ny < hn) {
          const ho = H(x, z);
          if (y >= hn - 0.05 || ho >= hn - 0.3) {
            // landed on a roof, the deck or the ground
            ny = hn + 0.03; ST[i] = 1; vy = 0; vx *= 0.35; vz *= 0.35;
          } else {
            // hit a wall: bounce back off it and drop
            const hx = H(nx, z) > y, hz = H(x, nz) > y;
            if (hx || !hz) { vx = -vx * 0.25; nx = x; } if (hz) { vz = -vz * 0.25; nz = z; }
            vy = Math.min(vy, 0); ny = y + vy * dt;
          }
        }
        x = nx; y = ny; z = nz;
      } else {
        // on a surface: wind near the surface is slower; slopes steeper than ~27 degrees shed brands; friction
        const e = 0.3, gx = (H(x + e, z) - H(x - e, z)) / (2 * e), gz = (H(x, z + e) - H(x, z - e)) / (2 * e), sl = Math.hypot(gx, gz);
        const pull = sl > 0.5 ? G * (sl - 0.5) / (1 + sl) : 0;
        vx += ((w[0] * 0.32 - vx) / (tau * 4) - (sl > 0 ? pull * gx / sl : 0)) * dt;
        vz += ((w[2] * 0.32 - vz) / (tau * 4) - (sl > 0 ? pull * gz / sl : 0)) * dt;
        vx *= 1 - 2.5 * dt; vz *= 1 - 2.5 * dt;
        const nx = x + vx * dt, nz = z + vz * dt, hn = H(nx, nz);
        if (hn > y + 0.3) { vx = -vx * 0.2; vz = -vz * 0.2; }      // stopped by a wall or step
        else if (hn < y - 0.25) {
          // reached a roof edge: gutters and eave lips catch about half; the rest drop off
          if (y > hgt(x, z) + 2 && rnd() < 0.5) { ST[i] = 2; AGE[i] = 0; LIFE[i] = 25 + rnd() * 60; }
          else { ST[i] = 0; x = nx; z = nz; vy = 0; }
        }
        else { x = nx; z = nz; y = hn + 0.03; }
        // gusts can lift a loose brand back up
        const sp = Math.hypot(w[0], w[2]);
        if (ST[i] === 1 && sp * 0.45 > 9 && !BIG[i] && rnd() < 0.002) { ST[i] = 0; vy = 2 + rnd() * 2; }
        if (AGE[i] > LIFE[i] * (BIG[i] ? 0.6 : 0.15)) { spawn(i, U, t); continue; }
        // tile roofs, deck boards and mulch are rough: brands catch in gaps and lodge
        // where the air near the surface is slow (wakes, corners, against walls) they settle much more readily
        const calm = 1 - Math.min(1, Math.hypot(w[0], w[2]) / (0.5 * U));
        const rough = (y > hgt(x, z) + 0.8 ? 0.35 : 0.08) * (1 + 6 * calm * calm);
        if (rnd() < rough * dt) { ST[i] = 2; AGE[i] = 0; LIFE[i] = 25 + rnd() * 60; }
        else if (Math.hypot(vx, vz) < 0.5) { REST[i] += dt; if (REST[i] > 0.4) { ST[i] = 2; AGE[i] = 0; LIFE[i] = 25 + rnd() * 60; } } else REST[i] = 0;
      }
      V[i3] = vx; V[i3 + 1] = vy; V[i3 + 2] = vz; P[i3] = x; P[i3 + 1] = y; P[i3 + 2] = z;
      if (VIEW) { if (x > BX + BR + 2) spawn(i, U, t); else if (x < BX - BR - 8 || Math.abs(z - BZ) > BR + 3 || y > hgt(x, z) + BY + 12) spawn(i, U, t, true); }
      else if (x > 30 || x < -46 || z < -24 || z > 24 || y > 34) spawn(i, U, t);
    }
  }
  function draw(t) {
    for (let i = 0; i < N; i++) {
      const i3 = i * 3, i4 = i * 4;
      if (i >= NA && ST[i] !== 2) { pos[i3 + 1] = -999; posB[i3 + 1] = -999; col[i4 + 3] = 0; colB[i4 + 3] = 0; continue; }
      const A = BIG[i] ? posB : pos, C = BIG[i] ? colB : col, O = BIG[i] ? pos : posB, OC = BIG[i] ? col : colB;
      A[i3] = P[i3]; A[i3 + 1] = P[i3 + 1]; A[i3 + 2] = P[i3 + 2]; O[i3 + 1] = -999; OC[i4 + 3] = 0;
      const fl = 0.6 + 0.4 * Math.sin(t * (8 + (i % 13)) + i * 1.7);
      let r = 1.9, g = 0.7, b = 0.16, a = (0.75 + 0.25 * fl) * Math.min(1, AGE[i] * 2.5, ST[i] === 0 ? (AIRL[i] - AGE[i]) * 2 : 1);
      if (ST[i] === 2) { const c = Math.min(1, AGE[i] / LIFE[i]); r = 1.7 - 0.9 * c; g = 0.45 - 0.33 * c; b = 0.08; a = (0.95 - 0.55 * c) * (0.8 + 0.2 * Math.sin(t * 2.5 + i)); }
      else if (ST[i] === 1) { g = 0.55; }
      C[i4] = r * (0.8 + 0.2 * fl); C[i4 + 1] = g; C[i4 + 2] = b; C[i4 + 3] = a;
    }
    for (const m of [small, big]) { m.geometry.attributes.position.needsUpdate = true; m.geometry.attributes.color.needsUpdate = true; }
  }
  if (typeof window !== 'undefined') window.__emb = { trace() { const out = []; spawn(0, 16, 0); for (let k = 0; k < 90; k++) { step(1 / 30, 16, k / 30); if (k % 10 === 0) out.push([P[0].toFixed(1), P[1].toFixed(1), P[2].toFixed(1), ST[0], V[0].toFixed(1)]); } return out; }, bench() { const a = performance.now(); for (let k = 0; k < 30; k++) step(1 / 60, 16, k / 60); return (performance.now() - a) / 30; }, stats() { let hc = 0, hm = 0; for (let k = 0; k < NZ; k++) for (let j = 0; j < NX; j++) { const d = HF[k * NX + j] - hgt(X0 + (j + 0.5) * CS, Z0 + (k + 0.5) * CS); if (d > 1) hc++; hm = Math.max(hm, d); } const c = [0, 0, 0], rest = []; for (let i = 0; i < N; i++) { c[ST[i]]++; if (ST[i] >= 1) rest.push([+P[i * 3].toFixed(1), +P[i * 3 + 1].toFixed(1), +P[i * 3 + 2].toFixed(1)]); } return { c, rest: [], hc, hm, box: [BX, BZ, BR, BY], xs: Array.from({ length: 40 }, (_, i) => [+P[i * 3].toFixed(0), +(P[i * 3 + 1] - hgt(P[i * 3], P[i * 3 + 2])).toFixed(1), +P[i * 3 + 2].toFixed(0), ST[i], +AGE[i].toFixed(1)]), hx: (() => { const h = {}; for (let i = 0; i < NA; i++) { if (ST[i]) continue; const k = Math.floor(P[i * 3] / 20) * 20 + ',' + Math.floor(P[i * 3 + 2] / 20) * 20; h[k] = (h[k] || 0) + 1; } return h; })(), NA }; } };
  return {
    group,
    // start over identically (same seed), already in full swing: run `warm` seconds of storm first
    reset(s, U, warm, focus) {
      if (focus) { FZ = focus[2]; FY = focus[1]; }
      seed = s; for (let i = 0; i < N; i++) spawn(i, U, 0, true);
      const h = 1 / 30; for (let tt = 0; tt < warm; tt += h) step(h, U, tt);
    },
    // camera-following box (fire-test): target x/z, half-width, height; point size grows with distance so far brands stay visible
    view(cx, cz, d) {
      VIEW = true; BX = cx; BZ = cz; BR = Math.max(24, d * 0.85); BY = Math.max(14, d * 0.32);
      const k = Math.max(1, d / 22); small.material.size = (SMALL ? 0.46 : 0.42) * k; big.material.size = (SMALL ? 0.95 : 0.85) * k;
    },
    level(f) { NA = Math.max(0, Math.min(N, Math.round(N * f))); },
    step(dt, U, t) { let r = Math.min(dt, 0.1); while (r > 1e-4) { const h = Math.min(r, 1 / 30); step(h, U, t); r -= h; } draw(t); },
  };
}
