import * as THREE from 'three';
import { createSketch } from './sketch.js';
import css from './ui.css';
import html from './ui.html';
import { initUI } from './ui.js';
import cssS from './ui-s.css';
import htmlS from './ui-s.html';
import { initServices } from './ui-s.js';
import cssF from './ui-f.css';
import htmlF from './ui-f.html';
import { initFire } from './ui-f.js';
import { createFireFX, WIND } from './fire.js';
import { SOFT } from './fireshader.js';
import { buildWorld, hgt } from './world.js';
import { buildHouse } from './house.js';
import { createDamage } from './damage.js';
import * as T from './tex.js';
import { computeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const VERSION = '4.0.0';
const rootH = document.getElementById('wwh3'), rootS = document.getElementById('wwh3s'), rootF = document.getElementById('wwh3f');
const root = rootH || rootS || rootF;
const MODE = rootH ? 'h' : rootS ? 's' : 'f';
if (root) {
  root.classList.add('wwh3');
  if (MODE !== 'h') root.classList.add('wwh3' + MODE);
  root.setAttribute('aria-label', MODE === 's' ? 'Interactive 3D map of where each service protects a home' : MODE === 'f' ? 'Interactive wildfire simulation comparing a home with and without hardening upgrades' : 'Interactive 3D home vulnerability map');
  root.innerHTML = '<style>' + css + (MODE === 's' ? cssS : MODE === 'f' ? cssF : '') + '</style>' + (MODE === 's' ? htmlS : MODE === 'f' ? htmlF : html);
  root.dataset.version = VERSION;
  const api = MODE === 's' ? initServices(root) : MODE === 'f' ? initFire(root) : initUI(root);
  start(root, api).catch((err) => {
    const m = root.querySelector('.wwh3-msg');
    if (m) m.textContent = '3D view unavailable on this device. Use the list below to explore.';
    console.warn('[wwh3]', err);
  });
}

async function start(root, api) {
  const stage = root.querySelector('.wwh3-stage'), msg = root.querySelector('.wwh3-msg'), pinsEl = root.querySelector('.wwh3-pins');
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SMALL = matchMedia('(max-width:900px)').matches || (navigator.hardwareConcurrency || 8) <= 4;
  let tier = SMALL ? 0 : 2;
  const HQ = !SMALL;
  await new Promise((r) => requestAnimationFrame(r));

  const H = [
    { k: 'attic', p: [1.5, 6.46, 6.16], v: { t: [1.5, 5.6, 5], az: 0.12, el: 0.14, d: 15 } },
    { k: 'wood', p: [-0.8, 6.08, 6.7], v: { t: [0.6, 5.6, 5.5], az: -0.38, el: 0.2, d: 15 } },
    { k: 'gutter', p: [8.2, 3.2, 3.82], v: { t: [10, 3.6, 1], az: 0.32, el: 0.38, d: 19 } },
    { k: 'eaves', p: [11.85, 3.33, 3.3], v: { t: [11, 3.3, 3], az: 0.42, el: 0.03, d: 11.5 } },
    { k: 'deck', p: [-7, 2.05, 3.12], v: { t: [-7.5, -0.3, 0], az: -1.15, el: 0.22, d: 17 } },
    { k: 'found', p: [-3.3, 0.33, 3.12], v: { t: [-2.6, 0.9, 3], az: -0.15, el: 0.14, d: 9.5 } },
    { k: 'zone', p: [-2.05, 0.7, 3.95], v: { t: [-0.6, 0.9, 4.6], az: 0.05, el: 0.35, d: 14 } },
  ];
  let DEFV = { t: [2.5, 2.6, 0.5], az: 0.5, el: 0.25, d: 36 };

  // ---------- renderer ----------
  const r = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  r.setPixelRatio(Math.min(devicePixelRatio, HQ ? 1.5 : 2));
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap; r.shadowMap.autoUpdate = false;
  r.toneMapping = THREE.NoToneMapping;
  stage.insertBefore(r.domElement, pinsEl);
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(32, 1.6, 0.3, 4000);

  const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 24), THREE.MathUtils.degToRad(40));
  const hemi = new THREE.HemisphereLight(0xfff6ea, 0x8a7a60, 1.25); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0dc, 2.4);
  sun.position.copy(sunDir).multiplyScalar(70); sun.castShadow = true;
  const sm = HQ ? 2048 : 1024; sun.shadow.mapSize.set(sm, sm);
  Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 10, far: 160 });
  sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.03; scene.add(sun); scene.add(sun.target);
  const fire = new THREE.DirectionalLight(0xff9a5a, 0.25); fire.position.set(-60, 8, 18); scene.add(fire);


  // ---------- content ----------
  const house = new THREE.Group(); scene.add(house);
  const reg = {}, solids = [];
  T.reseed(11);
  const WB = buildWorld(scene, { small: SMALL, fire: MODE === 'f' });
  T.reseed(77);
  const { lights, M: HM, tiles } = buildHouse(house, reg, solids, { hgt });
  for (const m of solids) m.geometry.computeBoundsTree();

  // ---------- fire atmosphere: smoke + horizon glow + embers ----------
  const glowT = T.glowSprite(); const smoke = [];
  const N = RM ? 0 : (MODE === 'f' ? (SMALL ? 400 : 900) : SMALL ? 140 : 260), ep = new Float32Array(N * 3), ev = [];
  for (let i = 0; i < N; i++) { ep[i * 3] = T.rr(-45, 25); ep[i * 3 + 1] = MODE === 'f' ? T.rr(0, 14) : T.rr(-3, 22); ep[i * 3 + 2] = MODE === 'f' ? T.rr(-12, 18) : T.rr(-20, 30); ev.push(T.rr(0.02, 0.07)); }
  const eg = new THREE.BufferGeometry(); eg.setAttribute('position', new THREE.BufferAttribute(ep, 3));
  const embers = new THREE.Points(eg, new THREE.PointsMaterial({ map: glowT, color: 0xff7a1a, size: 0.26, transparent: true, depthWrite: false }));
  scene.add(embers);

  const sketch = createSketch(r);
  const fx = [embers];
  // ---------- fire-test mode: shared FX + a second sketch pipeline for side-by-side ----------
  const D = MODE === 'f' ? createDamage({ scene, M: HM, tiles, SMALL }) : null;
  const F = MODE === 'f' ? createFireFX({ scene, reg, hgt, RM, SMALL, D, TREES: WB.TREES, burn: WB.burn }) : null;
  const SUN0 = sun.color.clone(), SUNI = sun.intensity, HS0 = hemi.color.clone(), HG0 = hemi.groundColor.clone(), HI = hemi.intensity;
  const SMOKY = new THREE.Color(1, 0.5, 0.24), GREYL = new THREE.Color(0.78, 0.76, 0.74), atmo = { tint: new THREE.Color(), tintK: 0, haze: new THREE.Color(), hazeK: 0, shim: SMALL ? 0 : 1, time: 0 };
  const TINT_B = new THREE.Color(1.0, 0.8, 0.64), TINT_G = new THREE.Color(0.82, 0.8, 0.78), HAZE_B = new THREE.Color(0.6, 0.5, 0.42), HAZE_G = new THREE.Color(0.66, 0.64, 0.61);
  const sketch2 = F ? createSketch(r) : null;
  const fxScene = F ? new THREE.Scene() : null;
  if (fxScene) fxScene.userData.soft = (d, w, h, c) => { SOFT.tSD.value = d; SOFT.uSRes.value.set(w, h); SOFT.uSNear.value = c.near; SOFT.uSFar.value = c.far; };
  if (F) {
    scene.remove(embers); scene.remove(F.group); fxScene.add(embers); fxScene.add(F.group);
    Object.assign(embers.material, { opacity: 0, size: SMALL ? 1.6 : 2.0, color: new THREE.Color(1.6, 0.85, 0.3), blending: THREE.NormalBlending, sizeAttenuation: true });
  }
  const FV = { t: [1.5, 3.2, 1.5], az: 0.32, el: 0.2, d: 40 }, FW = { t: [-20, -1, 2], az: -0.72, el: 0.33, d: 80 };
  let camUser = false, camShot = null;
  // ---------- pins + camera rig ----------
  const pins = H.map((h, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'wwh3-pin'; b.innerHTML = '<span class="d"></span><span class="s"></span><span class="b">' + (i + 1) + '</span>';
    b.setAttribute('aria-label', i + 1 + ': ' + api.D[i].t);
    if (MODE === 'h') { b.addEventListener('mouseenter', () => api.set(i)); b.addEventListener('mouseleave', () => api.set(api.pinned)); b.addEventListener('click', () => api.pin(i)); }
    else b.addEventListener('click', () => api.pickKey(H[i].k)); pinsEl.appendChild(b); h.v3 = new THREE.Vector3(...h.p); return b;
  });
  if (F) DEFV = FV;
  const cur = { az: DEFV.az, el: DEFV.el, d: DEFV.d, t: new THREE.Vector3(...DEFV.t) }, goal = { az: cur.az, el: cur.el, d: cur.d, t: cur.t.clone() };
  let flying = false, user = false, active = [];
  const clampEl = (v) => Math.min(0.95, Math.max(0.02, v)), clampAz = (v) => Math.min(1.45, Math.max(-1.45, v));
  const go = (v) => { goal.az = v.az; goal.el = v.el; goal.d = v.d; goal.t.set(...v.t); flying = true; };
  const resetMat = (k) => reg[k] && reg[k].forEach((m) => { m.material.emissive.copy(m.material.userData.e0); m.material.emissiveIntensity = m.material.userData.i0; });
  api.ls.push((i, fly) => {
    const sel = api.sel ? api.sel(i) : (i == null ? null : { keys: [H[i].k], view: H[i].v });
    const keys = sel ? sel.keys : [];
    active.forEach((k) => { if (!keys.includes(k)) resetMat(k); }); active = keys;
    pins.forEach((p, j) => { const on = keys.includes(H[j].k); p.classList.toggle('is-active', on); if (MODE === 's') p.classList.toggle('is-off', !on); });
    if (fly) { user = i != null; go(sel ? sel.view : DEFV); }
  });
  api.focusKey = (k) => { const h = H.find((x) => x.k === k); if (h) go(h.v); };
  if (MODE === 's') pins.forEach((p) => p.classList.add('is-off'));
  if (api.cur != null && api.cur >= 0) api.set(api.cur, true);
  const resetBtn = root.querySelector('.wwh3-reset'); if (resetBtn) resetBtn.addEventListener('click', () => { api.pin(null); user = false; });
  // ---------- auto-tour: steps 1 -> 7 until the visitor takes over ----------
  const STEP = 7, tour = { on: MODE === 'h', i: -1, t: 0, hold: false }, tourBtn = root.querySelector('.wwh3-tour'), progEl = root.querySelector('.wwh3-prog i');
  const pinRaw = api.pin;
  const tourUI = () => { if (!tourBtn) return; tourBtn.textContent = tour.on ? 'Pause tour' : '\u25B6 Play tour'; tourBtn.setAttribute('aria-pressed', tour.on); root.classList.toggle('is-touring', tour.on); if (!tour.on) progEl.style.width = '0'; };
  const stopTour = () => { if (tour.on) { tour.on = false; tourUI(); } };
  const tourNext = () => { tour.i = (tour.i + 1) % H.length; tour.t = 0; pinRaw(tour.i); };
  api.pin = (i) => { stopTour(); pinRaw(i); };
  if (tourBtn) tourBtn.addEventListener('click', () => { if (tour.on) stopTour(); else { tour.on = true; tour.i = api.pinned == null ? -1 : api.pinned; tourUI(); tourNext(); } });
  const pnl = root.querySelector('.wwh3-panel'); if (pnl) ['wheel', 'pointerdown', 'touchstart'].forEach((ev) => pnl.addEventListener(ev, stopTour, { passive: true }));
  tourUI();
  const cv = r.domElement, ray = new THREE.Raycaster(), ndc = new THREE.Vector2(); ray.firstHitOnly = true; let drag = null, hoverLock = false;
  const pick = (e) => { ray.far = Infinity; const b = cv.getBoundingClientRect(); ndc.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); ray.setFromCamera(ndc, cam); const h = ray.intersectObjects(solids, false)[0]; return h && h.object.userData.k ? H.findIndex((x) => x.k === h.object.userData.k) : -1; };
  cv.addEventListener('pointerdown', (e) => { stopTour(); drag = { x: e.clientX, y: e.clientY, m: 0 }; goal.az = cur.az; goal.el = cur.el; goal.d = cur.d; goal.t.copy(cur.t); flying = false; user = true; camUser = true; });
  cv.addEventListener('pointermove', (e) => {
    if (drag) { const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.m += Math.abs(dx) + Math.abs(dy); drag.x = e.clientX; drag.y = e.clientY; goal.az = clampAz(goal.az - dx * 0.006); goal.el = clampEl(goal.el + dy * 0.004); }
    else if (e.pointerType === 'mouse' && MODE === 'h') { if (hoverLock) return; hoverLock = true; requestAnimationFrame(() => (hoverLock = false)); const i = pick(e); cv.style.cursor = i >= 0 ? 'pointer' : ''; if (i >= 0 && i !== api.cur) api.set(i); else if (i < 0 && api.cur !== api.pinned) api.set(api.pinned); }
  });
  cv.addEventListener('pointerup', (e) => { if (drag && drag.m < 6) { const i = pick(e); if (i >= 0) { if (MODE === 'h') api.pin(i); else api.pickKey(H[i].k); } } drag = null; });
  cv.addEventListener('pointercancel', () => (drag = null));
  cv.addEventListener('pointerleave', () => { if (MODE === 'h' && !drag && api.cur !== api.pinned) api.set(api.pinned); });

  let vis = true; new IntersectionObserver((es) => (vis = es[0].isIntersecting)).observe(stage);
  // ---------- adaptive quality ----------
  const grassMesh = scene.getObjectByName('grass');
  const grassFull = grassMesh ? grassMesh.count : 0;
  function setTier(n) {
    tier = Math.max(0, Math.min(2, n));
    r.setPixelRatio(Math.min(devicePixelRatio, [1, 1.25, 1.5][tier]));
    const ms = [1024, 1024, 2048][tier];
    if (sun.shadow.mapSize.x !== ms) { sun.shadow.mapSize.set(ms, ms); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
    if (grassMesh) grassMesh.count = Math.floor(grassFull * [0.35, 0.7, 1][tier]);
    size();
  }
  const perf = { n: 0, acc: 0, settleAt: 0, drops: 0 };
  const px = new Uint8Array(4);
  const split = () => (F && api.fire.st.cmp ? (W / Hh < 0.95 ? 'v' : 'h') : null);
  const halves = () => { const sp = split(); return sp === 'h' ? [[0, 0, W / 2, Hh], [W / 2, 0, W / 2, Hh]] : sp === 'v' ? [[0, Hh / 2, W, Hh / 2], [0, 0, W, Hh / 2]] : [null, [0, 0, W, Hh]]; };
  const draw = !F ? () => sketch.render(scene, cam, fx) : () => {
    const st = api.fire.st, hv = halves();
    if (!hv[0]) { F.apply(st.sims[1], st.T); sketch.render(scene, cam, fx, fxScene); return; }
    r.setScissorTest(true);
    [0, 1].forEach((s) => { const [x, y, w, h] = hv[s]; F.apply(st.sims[s], st.T); r.setViewport(x, y, w, h); r.setScissor(x, y, w, h); (s ? sketch2 : sketch).render(scene, cam, fx, fxScene); });
    r.setScissorTest(false); r.setViewport(0, 0, W, Hh);
  };
  const bench = (n = 10) => { const out = {}; const t0 = tier; for (const tt of [2, 1, 0]) { setTier(tt); for (let w = 0; w < 2; w++) draw(); r.getContext().readPixels(0, 0, 1, 1, 6408, 5121, px); const a = performance.now(); for (let i = 0; i < n; i++) { draw(); r.getContext().readPixels(0, 0, 1, 1, 6408, 5121, px); } out['tier' + tt + 'Ms'] = +((performance.now() - a) / n).toFixed(1); } setTier(t0); return out; };
  window.__wwh3 = { setTier, get tier() { return tier; }, perf, renderer: r, bench, cam, H, project: (x, y, z) => { const v = new THREE.Vector3(x, y, z).project(cam); return [Math.round((v.x + 1) / 2 * W), Math.round((1 - v.y) / 2 * Hh)]; } };
  let W = 0, Hh = 0;
  function size() {
    const b = stage.getBoundingClientRect(); W = b.width; Hh = b.height; r.setSize(W, Hh, false);
    const sp = F ? split() : null, w = sp === 'h' ? W / 2 : W, h = sp === 'v' ? Hh / 2 : Hh;
    cam.aspect = w / h; cam.updateProjectionMatrix();
    sketch.setSize(w, h, r.getPixelRatio()); if (sketch2) sketch2.setSize(w, h, r.getPixelRatio());
    if (F) { root.classList.toggle('is-vert', sp === 'v'); }
  }
  if (F) { api.onLayout = () => size(); api.onRun = () => { camUser = false; camShot = null; }; }
  new ResizeObserver(size).observe(stage); size(); setTier(tier);
  // pick a starting quality tier from a quick synchronous benchmark (skipped on small screens)
  if (tier > 0) {
    try {
      const gl = r.getContext(), px1 = new Uint8Array(4), timeTier = (tt) => { setTier(tt); draw(); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px1); const a = performance.now(); for (let i = 0; i < 3; i++) { draw(); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px1); } return (performance.now() - a) / 3; };
      let pick = 0; for (const tt of [2, 1]) { if (timeTier(tt) < 24) { pick = tt; break; } }
      setTier(pick); perf.start = pick;
    } catch (e) { setTier(1); }
  }
  const off = new THREE.Vector3(), tmp = new THREE.Vector3(), clock = new THREE.Clock(); let t = 0, first = true;
  function frame() {
    requestAnimationFrame(frame); if (!vis) return;
    const raw = clock.getDelta(), dt = Math.min(raw, 0.05); t += dt;
    if (tour.on && !tour.hold && !document.hidden) { tour.t += Math.min(raw, 0.5); if (tour.i < 0 ? tour.t > 1.5 : tour.t >= STEP) tourNext(); if (progEl) progEl.style.width = (tour.i < 0 ? 0 : Math.min(100, tour.t / STEP * 100)).toFixed(1) + '%'; }
    let wf = 1, gst = 1;
    if (F) {
      api.fire.tick(raw); F.tick(dt);
      wf = WIND[api.fire.st.wind].f;
      const envS = F.env(api.fire.st.ran ? api.fire.st.T : 0, wf, api.fire.st.wind, api.fire.st.ran, cam); gst = envS.gust;
      // camera follows the recording: wide on the hillside while the fire approaches, then in on the houses
      if (api.fire.st.ran && !camUser && api.fire.st.TL) { const v = api.fire.st.T < api.fire.st.TL.tF + 0.3 ? FW : FV; if (v !== camShot) { camShot = v; go(v); } }
      if (!api.fire.st.ran) camShot = null;
      embers.material.opacity = api.fire.st.ran ? Math.min(1, envS.emberLevel) : 0.15;
      fire.intensity = 0.25 + (api.fire.st.ran ? envS.glow : 0);
      // smoke-filled sky: sun dims and reddens, ambient goes brown, then clears to grey haze
      const k = api.fire.st.ran ? envS.smoke : 0, g = api.fire.st.ran ? envS.grey : 0;
      sun.color.copy(SUN0).lerp(SMOKY, k * (1 - g)).lerp(GREYL, k * g); sun.intensity = SUNI * (1 - 0.72 * k);
      hemi.color.copy(HS0).lerp(SMOKY, 0.55 * k * (1 - g)).lerp(GREYL, 0.6 * k * g); hemi.groundColor.copy(HG0).lerp(new THREE.Color(0.25, 0.2, 0.17), k); hemi.intensity = HI * (1 - 0.4 * k);
      atmo.tint.copy(TINT_B).lerp(TINT_G, g); atmo.tintK = k * 0.6; atmo.haze.copy(HAZE_B).lerp(HAZE_G, g); atmo.hazeK = k * 0.3; atmo.fade = camShot === FW ? [90, 240] : [45, 150]; atmo.time = t;
      sketch.atmo(atmo); sketch2.atmo(atmo);
    }
    const f = RM && flying ? 1 : 1 - Math.pow(0.02, dt);
    cur.az += (goal.az - cur.az) * f; cur.el += (goal.el - cur.el) * f; cur.d += (goal.d - cur.d) * f; cur.t.lerp(goal.t, f);
    const d = cur.d * (cam.aspect < 1.4 ? 1.15 + (1.4 - Math.max(0.7, cam.aspect)) * 0.55 : 1);
    off.set(Math.sin(cur.az) * Math.cos(cur.el), Math.sin(cur.el), Math.cos(cur.az) * Math.cos(cur.el)).multiplyScalar(d);
    cam.position.copy(cur.t).add(off); const gy = hgt(cam.position.x, cam.position.z) + 0.6; if (cam.position.y < gy) cam.position.y = gy; cam.lookAt(cur.t);
    if (active.length) { const s = 0.7 + 0.3 * Math.sin(t * 4); active.forEach((k) => reg[k] && reg[k].forEach((m) => { m.material.emissive.set(0xe85d04); m.material.emissiveIntensity = s; })); }
    if (!RM) {
      const p = eg.attributes.position.array;
      const ws = F ? wf * wf * gst : 1, tb = F ? 0.6 + 0.5 * wf : 1, lift = F ? 0.004 + 0.006 / wf : 0.006;
      for (let i = 0; i < N; i++) { p[i * 3] += ev[i] * dt * 60 * ws; p[i * 3 + 1] += Math.sin(t * 2 + i) * 0.008 * tb + lift; p[i * 3 + 2] += Math.cos(t * (0.8 + wf) + i) * 0.006 * tb; if (p[i * 3] > 28 || p[i * 3 + 1] > 24) { p[i * 3] = -45; p[i * 3 + 1] = T.rr(MODE === 'f' ? 0 : -3, 14); } }
      eg.attributes.position.needsUpdate = true;
    }
    draw();
    // measure & step quality down if frames are slow (after warm-up)
    perf.n++;
    if (perf.n > 30 && tier > 0 && raw < 0.2) { perf.acc += raw; if (perf.n - 30 >= 40) { const avg = perf.acc / 40; perf.last = avg; if (avg > 1 / 32) { setTier(tier - 1); perf.drops++; } perf.n = 0; perf.acc = 0; } }
    if (first) { first = false; msg && msg.remove(); }
    if ((perf.n % 30) === 1 && (Math.abs(stage.clientWidth - W) > 1 || Math.abs(stage.clientHeight - Hh) > 1)) size();
    if (F) {
      const hv = halves();
      api.fire.labels((s, k) => {
        const rc = hv[s]; if (!rc) return null; const p = F.EMIT[k] && F.EMIT[k][0]; if (!p) return null;
        tmp.set(p[0], p[1], p[2]).project(cam); if (tmp.z > 1) return null;
        const x = rc[0] + ((tmp.x + 1) / 2) * rc[2], y = (Hh - rc[1] - rc[3]) + ((1 - tmp.y) / 2) * rc[3];
        return x < rc[0] || x > rc[0] + rc[2] || y < Hh - rc[1] - rc[3] || y > Hh - rc[1] ? null : [x, y];
      });
      return;
    }
    const occl = (perf.n % 4) === 0;
    H.forEach((h, i) => {
      tmp.copy(h.v3).project(cam); const x = ((tmp.x + 1) / 2) * W, y = ((1 - tmp.y) / 2) * Hh;
      pins[i].style.translate = x.toFixed(1) + 'px ' + y.toFixed(1) + 'px';
      if (!occl) return;
      const dist = cam.position.distanceTo(h.v3); ray.set(cam.position, h.v3.clone().sub(cam.position).normalize()); ray.far = dist;
      const hit = ray.intersectObjects(solids, false)[0];
      pins[i].classList.toggle('is-hidden', !!hit && hit.distance < dist - 0.45);
    });
  }
  frame();
}
