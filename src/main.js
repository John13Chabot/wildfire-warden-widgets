import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import css from './ui.css';
import html from './ui.html';
import { initUI } from './ui.js';
import { buildWorld, hgt } from './world.js';
import { buildHouse } from './house.js';
import * as T from './tex.js';

const VERSION = '2.0.0';
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
  const HQ = !SMALL;
  await new Promise((r) => requestAnimationFrame(r));

  const H = [
    { k: 'attic', p: [1.5, 6.5, 6.25], v: { t: [1.5, 5.6, 5], az: 0.12, el: 0.14, d: 15 } },
    { k: 'wood', p: [-0.15, 6.42, 6.75], v: { t: [0.6, 5.6, 5.5], az: -0.38, el: 0.2, d: 15 } },
    { k: 'gutter', p: [8.2, 3.3, 3.85], v: { t: [10, 3.6, 1], az: 0.32, el: 0.38, d: 19 } },
    { k: 'eaves', p: [11.9, 3.25, 3.3], v: { t: [11, 3.3, 3], az: 0.42, el: 0.03, d: 11.5 } },
    { k: 'deck', p: [-7, 2.15, 3.2], v: { t: [-7.5, -0.3, 0], az: -1.15, el: 0.22, d: 17 } },
    { k: 'found', p: [-3.3, 0.33, 3.15], v: { t: [-2.6, 0.9, 3], az: -0.15, el: 0.14, d: 9.5 } },
    { k: 'zone', p: [3.35, 1.0, 6.85], v: { t: [1.5, 0.8, 6], az: 0.16, el: 0.42, d: 15 } },
  ];
  const DEFV = { t: [2.5, 2.6, 0.5], az: 0.5, el: 0.25, d: 36 };

  // ---------- renderer ----------
  const r = new THREE.WebGLRenderer({ antialias: !HQ, powerPreference: 'high-performance' });
  r.setPixelRatio(Math.min(devicePixelRatio, HQ ? 1.5 : 2));
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 0.8;
  stage.insertBefore(r.domElement, pinsEl);
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(32, 1.6, 0.3, 4000);

  // ---------- sky + image-based lighting ----------
  const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 9), THREE.MathUtils.degToRad(48));
  const sky = new Sky(); sky.scale.setScalar(3000);
  Object.assign(sky.material.uniforms, {});
  sky.material.uniforms.turbidity.value = 12; sky.material.uniforms.rayleigh.value = 2.6;
  sky.material.uniforms.mieCoefficient.value = 0.012; sky.material.uniforms.mieDirectionalG.value = 0.86;
  sky.material.uniforms.sunPosition.value.copy(sunDir);
  scene.add(sky);
  const pm = new THREE.PMREMGenerator(r);
  const envScene = new THREE.Scene(); const sky2 = new Sky(); sky2.scale.setScalar(100); sky2.material = sky.material; envScene.add(sky2);
  scene.environment = pm.fromScene(envScene, 0.04).texture;
  scene.fog = new THREE.Fog(0xb08866, 70, 260);

  const hemi = new THREE.HemisphereLight(0xffe2c0, 0x4a3a24, 0.35); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffc98f, 3.4);
  sun.position.copy(sunDir).multiplyScalar(70); sun.castShadow = true;
  const sm = HQ ? 4096 : 1536; sun.shadow.mapSize.set(sm, sm);
  Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 10, far: 160 });
  sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.03; scene.add(sun); scene.add(sun.target);
  const fire = new THREE.DirectionalLight(0xff7a3a, 0.45); fire.position.set(-60, 8, 18); scene.add(fire);
  const fireGlow = [];
  for (let i = 0; i < 3; i++) { const l = new THREE.PointLight(0xff6a20, 0, 90, 1.6); l.position.set(-45 - i * 6, 2, -10 + i * 14); scene.add(l); fireGlow.push(l); }

  // ---------- content ----------
  const house = new THREE.Group(); scene.add(house);
  const reg = {}, solids = [];
  T.reseed(11);
  buildWorld(scene, { small: SMALL });
  T.reseed(77);
  const { lights } = buildHouse(house, reg, solids, { hgt });
  if (HQ) for (const p of lights) { const l = new THREE.PointLight(0xffb060, 4, 7, 2); l.position.copy(p); scene.add(l); }

  // ---------- fire atmosphere: smoke + horizon glow + embers ----------
  const smokeT = T.smokeSprite(), glowT = T.glowSprite();
  const smoke = [];
  for (let i = 0; i < (SMALL ? 10 : 22); i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeT, color: i % 3 ? 0x6e5c4c : 0x4e443c, transparent: true, opacity: T.rr(0.18, 0.38), depthWrite: false, fog: true }));
    s.position.set(T.rr(-120, -30), T.rr(4, 40), T.rr(-80, 40)); const k = T.rr(25, 60); s.scale.set(k, k * 0.7, 1);
    s.userData.v = T.rr(0.6, 1.6); scene.add(s); smoke.push(s);
  }
  for (let i = 0; i < 6; i++) {
    const g = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowT, color: 0xff6a1e, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    g.position.set(T.rr(-150, -110), T.rr(0, 8), T.rr(-60, 50)); const k = T.rr(40, 80); g.scale.set(k, k * 0.45, 1); scene.add(g);
  }
  const N = RM ? 0 : SMALL ? 220 : 480, ep = new Float32Array(N * 3), ev = [];
  for (let i = 0; i < N; i++) { ep[i * 3] = T.rr(-45, 25); ep[i * 3 + 1] = T.rr(-3, 22); ep[i * 3 + 2] = T.rr(-20, 30); ev.push(T.rr(0.02, 0.07)); }
  const eg = new THREE.BufferGeometry(); eg.setAttribute('position', new THREE.BufferAttribute(ep, 3));
  const embers = new THREE.Points(eg, new THREE.PointsMaterial({ map: glowT, color: 0xffb060, size: 0.2, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  scene.add(embers);

  // ---------- post-processing ----------
  let composer = null, gtao = null;
  if (HQ) {
    const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
    composer = new EffectComposer(r, rt);
    composer.addPass(new RenderPass(scene, cam));
    gtao = new GTAOPass(scene, cam, 1, 1);
    gtao.updateGtaoMaterial({ radius: 0.9, distanceExponent: 1.5, thickness: 2, scale: 1.1, samples: 16 });
    gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 16 });
    gtao.blendIntensity = 0.85;
    composer.addPass(gtao);
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), 0.42, 0.55, 0.88));
    composer.addPass(new OutputPass());
  }

  // ---------- pins + camera rig ----------
  const pins = H.map((h, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'wwh3-pin'; b.textContent = i + 1;
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
  const cv = r.domElement, ray = new THREE.Raycaster(), ndc = new THREE.Vector2(); let drag = null;
  const pick = (e) => { ray.far = Infinity; const b = cv.getBoundingClientRect(); ndc.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); ray.setFromCamera(ndc, cam); const h = ray.intersectObjects(solids, false)[0]; return h && h.object.userData.k ? H.findIndex((x) => x.k === h.object.userData.k) : -1; };
  cv.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, y: e.clientY, m: 0 }; goal.az = cur.az; goal.el = cur.el; goal.d = cur.d; goal.t.copy(cur.t); flying = false; user = true; });
  cv.addEventListener('pointermove', (e) => {
    if (drag) { const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.m += Math.abs(dx) + Math.abs(dy); drag.x = e.clientX; drag.y = e.clientY; goal.az = clampAz(goal.az - dx * 0.006); goal.el = clampEl(goal.el + dy * 0.004); }
    else if (e.pointerType === 'mouse') { const i = pick(e); cv.style.cursor = i >= 0 ? 'pointer' : ''; if (i >= 0 && i !== api.cur) api.set(i); else if (i < 0 && api.cur !== api.pinned) api.set(api.pinned); }
  });
  cv.addEventListener('pointerup', (e) => { if (drag && drag.m < 6) { const i = pick(e); if (i >= 0) api.pin(i); } drag = null; });
  cv.addEventListener('pointercancel', () => (drag = null));
  cv.addEventListener('pointerleave', () => { if (!drag && api.cur !== api.pinned) api.set(api.pinned); });

  let vis = true; new IntersectionObserver((es) => (vis = es[0].isIntersecting)).observe(stage);
  let W = 0, Hh = 0;
  function size() {
    const b = stage.getBoundingClientRect(); W = b.width; Hh = b.height; r.setSize(W, Hh, false); cam.aspect = W / Hh; cam.updateProjectionMatrix();
    if (composer) { composer.setPixelRatio(r.getPixelRatio()); composer.setSize(W, Hh); }
  }
  new ResizeObserver(size).observe(stage); size();
  const off = new THREE.Vector3(), tmp = new THREE.Vector3(), clock = new THREE.Clock(); let t = 0, first = true;
  function frame() {
    requestAnimationFrame(frame); if (!vis) return;
    const dt = Math.min(clock.getDelta(), 0.05); t += dt;
    if (!user && api.pinned == null && !RM) goal.az = DEFV.az + Math.sin(t * 0.16) * 0.32;
    const f = RM && flying ? 1 : 1 - Math.pow(0.02, dt);
    cur.az += (goal.az - cur.az) * f; cur.el += (goal.el - cur.el) * f; cur.d += (goal.d - cur.d) * f; cur.t.lerp(goal.t, f);
    const d = cur.d * (cam.aspect < 1.4 ? 1.15 : 1);
    off.set(Math.sin(cur.az) * Math.cos(cur.el), Math.sin(cur.el), Math.cos(cur.az) * Math.cos(cur.el)).multiplyScalar(d);
    cam.position.copy(cur.t).add(off); const gy = hgt(cam.position.x, cam.position.z) + 0.6; if (cam.position.y < gy) cam.position.y = gy; cam.lookAt(cur.t);
    if (active && reg[active]) { const s = 0.3 + 0.2 * Math.sin(t * 4); reg[active].forEach((m) => { m.material.emissive.set(0xe85d04); m.material.emissiveIntensity = s; }); }
    if (!RM) {
      const p = eg.attributes.position.array;
      for (let i = 0; i < N; i++) { p[i * 3] += ev[i] * dt * 60; p[i * 3 + 1] += Math.sin(t * 2 + i) * 0.008 + 0.006; p[i * 3 + 2] += Math.cos(t + i) * 0.006; if (p[i * 3] > 28 || p[i * 3 + 1] > 24) { p[i * 3] = -45; p[i * 3 + 1] = T.rr(-3, 14); } }
      eg.attributes.position.needsUpdate = true;
      for (const s of smoke) { s.position.x += s.userData.v * dt; s.position.y += s.userData.v * 0.15 * dt; if (s.position.x > 40) s.position.x = -130; }
      fireGlow.forEach((l, i) => (l.intensity = 1100 * (0.75 + 0.25 * Math.sin(t * 7 + i * 2) * Math.sin(t * 3.1 + i))));
    }
    if (composer) composer.render(dt); else r.render(scene, cam);
    if (first) { first = false; msg && msg.remove(); }
    H.forEach((h, i) => {
      tmp.copy(h.v3).project(cam); const x = ((tmp.x + 1) / 2) * W, y = ((1 - tmp.y) / 2) * Hh;
      pins[i].style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
      const dist = cam.position.distanceTo(h.v3); ray.set(cam.position, h.v3.clone().sub(cam.position).normalize()); ray.far = dist;
      const hit = ray.intersectObjects(solids, false)[0];
      pins[i].classList.toggle('is-hidden', !!hit && hit.distance < dist - 0.45);
    });
  }
  frame();
}
