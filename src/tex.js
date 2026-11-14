import * as THREE from 'three';

let seed = 1;
export const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
export const reseed = (s) => { seed = s; };
export const rr = (a, b) => a + (b - a) * rnd();

function hash(x, y, p) {
  if (p) { x = ((x % p) + p) % p; y = ((y % p) + p) % p; }
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
export function vnoise(x, y, p) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi, p), b = hash(xi + 1, yi, p), c = hash(xi, yi + 1, p), d = hash(xi + 1, yi + 1, p);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export function fbm(x, y, o = 4, p) {
  let s = 0, a = 0.5, f = 1, n = 0;
  for (let i = 0; i < o; i++) { s += a * vnoise(x * f, y * f, p ? p * f : 0); n += a; f *= 2; a *= 0.5; }
  return s / n;
}

function cv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function toTex(c, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
function pix(w, h, fn) {
  const [c, g] = cv(w, h); const im = g.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const [r, gg, b] = fn(x, y); const i = (y * w + x) * 4;
    im.data[i] = r; im.data[i + 1] = gg; im.data[i + 2] = b; im.data[i + 3] = 255;
  }
  g.putImageData(im, 0, 0); return c;
}

// hand-troweled stucco: soft low-frequency blotches + fine grain (tileable)
export function stucco() {
  const P = 8, S = 256;
  const c = pix(S, S, (x, y) => {
    const n = fbm(x / S * P, y / S * P, 5, P);
    const g = hash(x, y, S) * 0.5 + 0.5;
    const v = 200 + n * 50 + (g - 0.75) * 18;
    return [v, v - 2, v - 7];
  });
  return toTex(c);
}
export function noiseGray(S = 256, P = 16, o = 4) {
  return toTex(pix(S, S, (x, y) => { const v = fbm(x / S * P, y / S * P, o, P) * 255; return [v, v, v]; }), false);
}
// fieldstone retaining wall
export function stone() {
  const [c, g] = cv(512, 256);
  g.fillStyle = '#6f6656'; g.fillRect(0, 0, 512, 256);
  let y = 0;
  while (y < 256) {
    const rh = 22 + rnd() * 26; let x = -rnd() * 40;
    while (x < 512) {
      const w = 34 + rnd() * 60, col = 150 + rnd() * 50, warm = rnd() * 20;
      g.fillStyle = `rgb(${col + warm},${col + warm * 0.5 - 6},${col - 22})`;
      g.beginPath(); g.roundRect(x + 2, y + 2, w - 4, rh - 4, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(x + 5, y + 4, w - 12, 3);
      x += w;
    }
    y += rh;
  }
  return toTex(c);
}
export function planks() {
  const [c, g] = cv(256, 256);
  for (let i = 0; i < 8; i++) {
    const b = 120 + rnd() * 30;
    g.fillStyle = `rgb(${b + 30},${b - 5},${b - 40})`; g.fillRect(i * 32, 0, 32, 256);
    for (let k = 0; k < 14; k++) { g.strokeStyle = `rgba(60,30,10,${0.08 + rnd() * 0.12})`; g.beginPath(); const xx = i * 32 + rnd() * 32; g.moveTo(xx, 0); g.bezierCurveTo(xx + 4, 80, xx - 4, 170, xx + 2, 256); g.stroke(); }
    g.fillStyle = 'rgba(30,15,5,.75)'; g.fillRect(i * 32, 0, 2, 256);
  }
  return toTex(c);
}
export function woodGrain(base = [110, 70, 42]) {
  const c = pix(128, 256, (x, y) => {
    const n = fbm(x / 128 * 2, y / 256 * 24, 3, 0) * 0.6 + vnoise(x / 3, y / 40) * 0.4;
    const k = 0.75 + n * 0.45; return [base[0] * k, base[1] * k, base[2] * k];
  });
  return toTex(c);
}
export function eucBark() {
  const c = pix(256, 512, (x, y) => {
    const n = fbm(x / 256 * 4, y / 512 * 3, 4, 4), m = vnoise(x / 18, y / 60);
    if (n > 0.56) return [205 + m * 25, 196 + m * 20, 178 + m * 15];      // fresh cream
    if (n > 0.45) return [178 + m * 20, 160 + m * 15, 150 + m * 10];      // salmon-grey
    return [150 + m * 25, 150 + m * 22, 140 + m * 18];                    // grey-green
  });
  return toTex(c);
}
export function oakBark() {
  const c = pix(128, 256, (x, y) => {
    const f = vnoise(x / 6, y / 40) * 0.6 + fbm(x / 128 * 4, y / 256 * 4, 3, 4) * 0.4;
    const v = 45 + f * 60; return [v + 6, v + 2, v - 4];
  });
  return toTex(c);
}
export function gravel() {
  const c = pix(256, 256, (x, y) => {
    const h = hash(x, y, 256), n = fbm(x / 256 * 6, y / 256 * 6, 3, 6);
    const v = 168 + n * 40 + (h - 0.5) * 60; return [v + 14, v, v - 26];
  });
  return toTex(c);
}
export function pavers() {
  const [c, g] = cv(256, 256);
  g.fillStyle = '#857b6c'; g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 256; y += 64) for (let x = (y / 64) % 2 ? -32 : 0; x < 256; x += 64) {
    const v = 175 + rnd() * 35;
    g.fillStyle = `rgb(${v + 12},${v},${v - 18})`; g.beginPath(); g.roundRect(x + 3, y + 3, 58, 58, 6); g.fill();
  }
  return toTex(c);
}
export function mulch() {
  const c = pix(256, 256, (x, y) => {
    const h = hash(x, y, 256), n = vnoise(x / 3, y / 9);
    const v = 50 + n * 50 + h * 25; return [v + 26, v + 8, v - 8];
  });
  return toTex(c);
}
export function lawnDetail() {
  return toTex(pix(256, 256, (x, y) => {
    const v = 200 + (hash(x, y, 256) - 0.5) * 70 + (fbm(x / 256 * 8, y / 256 * 8, 3, 8) - 0.5) * 60; return [v, v, v];
  }));
}
export function glowSprite(inner = 'rgba(255,230,170,1)', mid = 'rgba(255,130,30,.6)') {
  const [c, g] = cv(64, 64);
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, inner); gr.addColorStop(0.25, mid); gr.addColorStop(1, 'rgba(255,80,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export function smokeSprite() {
  const S = 128;
  const c = pix(S, S, (x, y) => [255, 255, 255]);
  const g = c.getContext('2d'); const im = g.getImageData(0, 0, S, S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const dx = (x - S / 2) / (S / 2), dy = (y - S / 2) / (S / 2), d = Math.sqrt(dx * dx + dy * dy);
    const n = fbm(x / 22, y / 22, 4);
    im.data[(y * S + x) * 4 + 3] = Math.max(0, Math.min(255, (1 - d) * 1.6 * n * 255));
  }
  g.putImageData(im, 0, 0);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
