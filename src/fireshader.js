// Procedural flame / smoke cards: camera-facing quads shaded with domain-warped FBM noise.
import * as THREE from 'three';

const NOISE = /* glsl */`
float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<OCT;i++){ s+=a*vn(p); p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
`;

// soft particles: fade flames/smoke where they meet scene geometry (no hard intersection lines)
export const SOFT = { tSD: { value: null }, uSRes: { value: new THREE.Vector2(1, 1) }, uSNear: { value: 0.3 }, uSFar: { value: 4000 } };
const SOFTF = /* glsl */`
#include <packing>
uniform sampler2D tSD; uniform vec2 uSRes; uniform float uSNear, uSFar;
float softK(float w){
  float sz = -perspectiveDepthToViewZ(texture2D(tSD, gl_FragCoord.xy / uSRes).x, uSNear, uSFar);
  float fz = -perspectiveDepthToViewZ(gl_FragCoord.z, uSNear, uSFar);
  return clamp((sz - fz) / w, 0.0, 1.0);
}`;
// Billboard around the object's origin; plane spans x -0.5..0.5, y 0..1 (base at origin).
const VERT = /* glsl */`
uniform float uLean;
varying vec2 vUv;
void main(){
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0);
  vec2 sc = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
  vec2 p = position.xy * sc;
  vec2 wd = (viewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xy;   // world wind dir (+x) in view space
  mv.xy += p + wd * (uLean * uv.y * uv.y * sc.y);          // wind bends the tips
  gl_Position = projectionMatrix * mv;
}`;

const FLAME_FRAG = /* glsl */`
uniform float uT, uSeed, uI, uLean, uFreq, uSpeed, uHot, uWX, uWY;
varying vec2 vUv;
${NOISE}
${SOFTF}
void main(){
  float y = vUv.y, x = (vUv.x - 0.5) * 2.0;
  float t = uT;
  vec2 q = vec2(x * uFreq + uSeed - uWX, y * 3.0 - t * uSpeed + uWY);   // wind drift is integrated on the CPU: a gust speeds it up without jumping
  float w1 = fbm(q * 0.7 + vec2(uSeed * 0.3, -t * 0.9));
  float n  = fbm(q + vec2(w1 * 1.8 - 0.9, w1 * 1.2));          // domain warp -> licking tongues
  float sway = (w1 - 0.5) * 1.3 * y;
  float width = mix(0.95, 0.4, y);
  float d = abs(x + sway) / width;
  float body = 1.0 - d * d;
  float erosion = (1.0 - n) * (0.55 + 1.5 * y);
  float heat = body * 1.3 - erosion - y * 0.3;
  heat *= smoothstep(0.0, 0.1, y) * smoothstep(1.0, 0.75, y);
  heat *= uI;
  if (heat <= 0.01) discard;
  float hc = heat * uHot;
  vec3 c = mix(vec3(0.55, 0.06, 0.01), vec3(1.0, 0.3, 0.03), smoothstep(0.05, 0.4, hc));
  c = mix(c, vec3(1.0, 0.62, 0.12), smoothstep(0.35, 0.75, hc));
  c = mix(c, vec3(1.0, 0.9, 0.6), smoothstep(0.7, 1.2, hc));
  float a = smoothstep(0.0, 0.55, heat) * softK(0.9);
  gl_FragColor = vec4(c * 1.05 * a, a * 0.85);
}`;

const SMOKE_FRAG = /* glsl */`
uniform float uT, uSeed, uI;
uniform vec3 uCol;
varying vec2 vUv;
${NOISE}
${SOFTF}
void main(){
  vec2 p = vUv - vec2(0.5, 0.5);
  float t = uT * 0.35;
  vec2 q = vUv * 2.4 + vec2(uSeed, -t);
  float n = fbm(q + fbm(q * 0.8 + t * 0.4));
  float r = length(p * vec2(1.0, 0.85)) * 2.0;
  float a = smoothstep(1.0, 0.25, r + (n - 0.5) * 0.9) * uI * softK(2.5);
  if (a <= 0.01) discard;
  vec3 c = uCol * (0.75 + n * 0.5);
  gl_FragColor = vec4(c * a, a);        // premultiplied
}`;

const GEO = new THREE.PlaneGeometry(1, 1).translate(0, 0.5, 0);
const GEO_C = new THREE.PlaneGeometry(1, 1);

export function flameShaders(SMALL) {
  const oct = SMALL ? 3 : 4;
  const time = { value: 0 }, wx = { value: 0 }, wy = { value: 0 };
  const base = (frag, smoke) => new THREE.ShaderMaterial({
    uniforms: { ...SOFT, uT: time, uWX: wx, uWY: wy, uFreq: { value: 3.2 }, uSpeed: { value: 2.6 }, uHot: { value: 1 }, uSeed: { value: 0 }, uI: { value: 1 }, uLean: { value: 0 }, uCol: { value: new THREE.Color(0.35, 0.32, 0.3) } },
    vertexShader: VERT, fragmentShader: frag, defines: { OCT: oct },
    transparent: true, depthWrite: false, depthTest: true,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor, blendDst: smoke ? THREE.OneMinusSrcAlphaFactor : THREE.OneFactor,
    blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
  });
  const flameProto = base(FLAME_FRAG, false), smokeProto = base(SMOKE_FRAG, true);
  return {
    time, wx, wy,
    flame(seed) { const m = flameProto.clone(); Object.assign(m.uniforms, SOFT); m.uniforms.uT = time; m.uniforms.uWX = wx; m.uniforms.uWY = wy; m.uniforms.uSeed.value = seed; const o = new THREE.Mesh(GEO, m); o.frustumCulled = false; o.renderOrder = 2; return o; },
    smoke(seed) { const m = smokeProto.clone(); Object.assign(m.uniforms, SOFT); m.uniforms.uT = time; m.uniforms.uWX = wx; m.uniforms.uWY = wy; m.uniforms.uSeed.value = seed; const o = new THREE.Mesh(GEO_C, m); o.frustumCulled = false; o.renderOrder = 1; return o; },
  };
}
