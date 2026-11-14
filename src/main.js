import * as THREE from 'three';
import { createSketch } from './sketch.js';
import css from './ui.css';
import html from './ui.html';
import { initUI } from './ui.js';
import { buildWorld, hgt } from './world.js';
import { buildHouse } from './house.js';
import * as T from './tex.js';
import { computeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const VERSION = '3.4.0';
const root = document.getElementById('wwh3');
if (root) {
  root.classList.add('wwh3');
  root.setAttribute('aria-label', 'Interactive 3D home vulnerability map');
  root.innerHTML = '<style>' + css + '</style>' + html;
  root.dataset.version = VERSION;
  const api = initUI(root);
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
  const DEFV = { t: [2.5, 2.6, 0.5], az: 0.5, el: 0.25, d: 36 };

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
  buildWorld(scene, { small: SMALL });
  T.reseed(77);
  const { lights } = buildHouse(house, reg, solids, { hgt });
  for (const m of solids) m.geometry.computeBoundsTree();

  // ---------- fire atmosphere: smoke + horizon glow + embers ----------
  const glowT = T.glowSprite(); const smoke = [];
  const N = RM ? 0 : SMALL ? 140 : 260, ep = new Float32Array(N * 3), ev = [];
  for (let i = 0; i < N; i++) { ep[i * 3] = T.rr(-45, 25); ep[i * 3 + 1] = T.rr(-3, 22); ep[i * 3 + 2] = T.rr(-20, 30); ev.push(T.rr(0.02, 0.07)); }
  const eg = new THREE.BufferGeometry(); eg.setAttribute('position', new THREE.BufferAttribute(ep, 3));
  const embers = new THREE.Points(eg, new THREE.PointsMaterial({ map: glowT, color: 0xff7a1a, size: 0.26, transparent: true, depthWrite: false }));
  scene.add(embers);

  const sketch = createSketch(r);
  const fx = [embers];
  // ---------- pins + camera rig ----------
  const pins = H.map((h, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'wwh3-pin'; b.innerHTML = '<span class="d"></span><span class="s"></span><span class="b">' + (i + 1) + '</span>';
    b.setAttribute('aria-label', i + 1 + ': ' + api.D[i].t);
    b.addEventListener('mouseenter', () => api.set(i)); b.addEventListener('mouseleave', () => api.set(api.pinned));
    b.addEventListener('click', () => api.pin(i)); pinsEl.appendChild(b); h.v3 = new THREE.Vector3(...h.p); return b;
  });
  const cur = { az: DEFV.az, el: DEFV.el, d: DEFV.d, t: new THREE.Vector3(...DEFV.t) }, goal = { az: cur.az, el: cur.el, d: cur.d, t: cur.t.clone() };
  let flying = false, user = false, active = null;
  const clampEl = (v) => Math.min(0.95, Math.max(0.02, v)), clampAz = (v) => Math.min(1.45, Math.max(-1.45, v));
  const go = (v) => { goal.az = v.az; goal.el = v.el; goal.d = v.d; goal.t.set(...v.t); flying = true; };
  const resetMat = (k) => reg[k] && reg[k].forEach((m) => { m.material.emissive.copy(m.material.userData.e0); m.material.emissiveIntensity = m.material.userData.i0; });
  api.ls.push((i, fly) => {
    const k = i == null ? null : H[i].k;
    if (k !== active) { if (active) resetMat(active); active = k; }
    pins.forEach((p, j) => p.classList.toggle('is-active', j === i));
    if (fly) { user = i != null; go(i == null ? DEFV : H[i].v); }
  });
  root.querySelector('.wwh3-reset').addEventListener('click', () => { api.pin(null); user = false; });
  // ---------- auto-tour: steps 1 -> 7 until the visitor takes over ----------
  const STEP = 7, tour = { on: true, i: -1, t: 0, hold: false }, tourBtn = root.querySelector('.wwh3-tour'), progEl = root.querySelector('.wwh3-prog i');
  const pinRaw = api.pin;
  const tourUI = () => { tourBtn.textContent = tour.on ? 'Pause tour' : '\u25B6 Play tour'; tourBtn.setAttribute('aria-pressed', tour.on); root.classList.toggle('is-touring', tour.on); if (!tour.on) progEl.style.width = '0'; };
  const stopTour = () => { if (tour.on) { tour.on = false; tourUI(); } };
  const tourNext = () => { tour.i = (tour.i + 1) % H.length; tour.t = 0; pinRaw(tour.i); };
  api.pin = (i) => { stopTour(); pinRaw(i); };
  tourBtn.addEventListener('click', () => { if (tour.on) stopTour(); else { tour.on = true; tour.i = api.pinned == null ? -1 : api.pinned; tourUI(); tourNext(); } });
  const grid = root.querySelector('.wwh3-grid');
  grid.addEventListener('mouseenter', () => (tour.hold = true)); grid.addEventListener('mouseleave', () => (tour.hold = false));
  tourUI();
  const cv = r.domElement, ray = new THREE.Raycaster(), ndc = new THREE.Vector2(); ray.firstHitOnly = true; let drag = null, hoverLock = false;
  const pick = (e) => { ray.far = Infinity; const b = cv.getBoundingClientRect(); ndc.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); ray.setFromCamera(ndc, cam); const h = ray.intersectObjects(solids, false)[0]; return h && h.object.userData.k ? H.findIndex((x) => x.k === h.object.userData.k) : -1; };
  cv.addEventListener('pointerdown', (e) => { stopTour(); drag = { x: e.clientX, y: e.clientY, m: 0 }; goal.az = cur.az; goal.el = cur.el; goal.d = cur.d; goal.t.copy(cur.t); flying = false; user = true; });
  cv.addEventListener('pointermove', (e) => {
    if (drag) { const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.m += Math.abs(dx) + Math.abs(dy); drag.x = e.clientX; drag.y = e.clientY; goal.az = clampAz(goal.az - dx * 0.006); goal.el = clampEl(goal.el + dy * 0.004); }
    else if (e.pointerType === 'mouse') { if (hoverLock) return; hoverLock = true; requestAnimationFrame(() => (hoverLock = false)); const i = pick(e); cv.style.cursor = i >= 0 ? 'pointer' : ''; if (i >= 0 && i !== api.cur) api.set(i); else if (i < 0 && api.cur !== api.pinned) api.set(api.pinned); }
  });
  cv.addEventListener('pointerup', (e) => { if (drag && drag.m < 6) { const i = pick(e); if (i >= 0) api.pin(i); } drag = null; });
  cv.addEventListener('pointercancel', () => (drag = null));
  cv.addEventListener('pointerleave', () => { if (!drag && api.cur !== api.pinned) api.set(api.pinned); });

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
  const draw = () => sketch.render(scene, cam, fx);
  const bench = (n = 10) => { const out = {}; const t0 = tier; for (const tt of [2, 1, 0]) { setTier(tt); for (let w = 0; w < 2; w++) draw(); r.getContext().readPixels(0, 0, 1, 1, 6408, 5121, px); const a = performance.now(); for (let i = 0; i < n; i++) { draw(); r.getContext().readPixels(0, 0, 1, 1, 6408, 5121, px); } out['tier' + tt + 'Ms'] = +((performance.now() - a) / n).toFixed(1); } setTier(t0); return out; };
  window.__wwh3 = { setTier, get tier() { return tier; }, perf, renderer: r, bench, cam, H, project: (x, y, z) => { const v = new THREE.Vector3(x, y, z).project(cam); return [Math.round((v.x + 1) / 2 * W), Math.round((1 - v.y) / 2 * Hh)]; } };
  let W = 0, Hh = 0;
  function size() {
    const b = stage.getBoundingClientRect(); W = b.width; Hh = b.height; r.setSize(W, Hh, false); cam.aspect = W / Hh; cam.updateProjectionMatrix();
    sketch.setSize(W, Hh, r.getPixelRatio());
  }
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
    if (tour.on && !tour.hold && !document.hidden) { tour.t += dt; if (tour.i < 0 ? tour.t > 1.5 : tour.t >= STEP) tourNext(); progEl.style.width = (tour.i < 0 ? 0 : Math.min(100, tour.t / STEP * 100)).toFixed(1) + '%'; }
    const f = RM && flying ? 1 : 1 - Math.pow(0.02, dt);
    cur.az += (goal.az - cur.az) * f; cur.el += (goal.el - cur.el) * f; cur.d += (goal.d - cur.d) * f; cur.t.lerp(goal.t, f);
    const d = cur.d * (cam.aspect < 1.4 ? 1.15 : 1);
    off.set(Math.sin(cur.az) * Math.cos(cur.el), Math.sin(cur.el), Math.cos(cur.az) * Math.cos(cur.el)).multiplyScalar(d);
    cam.position.copy(cur.t).add(off); const gy = hgt(cam.position.x, cam.position.z) + 0.6; if (cam.position.y < gy) cam.position.y = gy; cam.lookAt(cur.t);
    if (active && reg[active]) { const s = 0.7 + 0.3 * Math.sin(t * 4); reg[active].forEach((m) => { m.material.emissive.set(0xe85d04); m.material.emissiveIntensity = s; }); }
    if (!RM) {
      const p = eg.attributes.position.array;
      for (let i = 0; i < N; i++) { p[i * 3] += ev[i] * dt * 60; p[i * 3 + 1] += Math.sin(t * 2 + i) * 0.008 + 0.006; p[i * 3 + 2] += Math.cos(t + i) * 0.006; if (p[i * 3] > 28 || p[i * 3 + 1] > 24) { p[i * 3] = -45; p[i * 3 + 1] = T.rr(-3, 14); } }
      eg.attributes.position.needsUpdate = true;
    }
    draw();
    // measure & step quality down if frames are slow (after warm-up)
    perf.n++;
    if (perf.n > 30 && tier > 0 && raw < 0.2) { perf.acc += raw; if (perf.n - 30 >= 40) { const avg = perf.acc / 40; perf.last = avg; if (avg > 1 / 32) { setTier(tier - 1); perf.drops++; } perf.n = 0; perf.acc = 0; } }
    if (first) { first = false; msg && msg.remove(); }
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
