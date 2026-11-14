import * as THREE from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import * as T from './tex.js';

// Architectural-sketch renderer: color + normal passes, then a single post shader that draws
// wobbly graphite outlines (depth + normal edges), pencil hatching in shade, watercolor washes,
// paper grain, and an unfinished, faded-out vignette.
export function createSketch(r, { paper = '#f4efe4', ink = '#2a2825' } = {}) {
  const rtColor = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
  rtColor.depthTexture = new THREE.DepthTexture(1, 1);
  const rtNormal = new THREE.WebGLRenderTarget(1, 1);
  const normalMat = new THREE.MeshNormalMaterial();
  const paperTex = T.noiseGray(256, 64, 3); paperTex.wrapS = paperTex.wrapT = THREE.RepeatWrapping;

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      tColor: { value: rtColor.texture }, tDepth: { value: rtColor.depthTexture }, tNormal: { value: rtNormal.texture }, tPaper: { value: paperTex },
      res: { value: new THREE.Vector2(1, 1) }, dpr: { value: 1 }, near: { value: 0.3 }, far: { value: 4000 },
      paper: { value: new THREE.Color(paper).convertLinearToSRGB() }, ink: { value: new THREE.Color(ink).convertLinearToSRGB() }, exposure: { value: 1.75 },
    },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: /* glsl */ `
      #include <packing>
      uniform sampler2D tColor, tDepth, tNormal, tPaper;
      uniform vec2 res; uniform float dpr, near, far, exposure; uniform vec3 paper, ink;
      varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1.,0.)), f.x), mix(hash(i+vec2(0.,1.)), hash(i+vec2(1.,1.)), f.x), f.y); }
      float vz(vec2 uv){ return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far); }
      vec3 nrm(vec2 uv){ return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }
      float edgeAt(vec2 uv, float w){
        vec2 px = w / res; float zc = vz(uv); vec3 nc = nrm(uv);
        float de = 0.0, ne = 0.0;
        vec2 o[4]; o[0] = vec2(px.x, 0.); o[1] = vec2(-px.x, 0.); o[2] = vec2(0., px.y); o[3] = vec2(0., -px.y);
        for (int i = 0; i < 4; i++) { float z = vz(uv + o[i]); de += abs(z - zc) / max(zc, 0.5); ne += 1.0 - clamp(dot(nc, nrm(uv + o[i])), 0.0, 1.0); }
        return max(smoothstep(0.035, 0.11, de), smoothstep(0.3, 0.75, ne) * 0.85);
      }
      vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }
      void main(){
        vec2 uv = vUv; vec2 fc = gl_FragCoord.xy / dpr;
        float d0 = texture2D(tDepth, uv).x;
        float grain = texture2D(tPaper, fc / 300.0).r;
        vec3 pap = paper * (0.955 + 0.07 * grain);
        // hand-drawn wobble: two slightly offset strokes
        vec2 w1 = (vec2(noise(fc / 70.0 + 1.3), noise(fc / 70.0 + 7.1)) - 0.5) * 2.0 * 1.3 * dpr / res;
        vec2 w2 = (vec2(noise(fc / 45.0 + 3.7), noise(fc / 45.0 + 9.2)) - 0.5) * 2.0 * 1.8 * dpr / res;
        float e = max(edgeAt(uv + w1, dpr), edgeAt(uv + w2, dpr) * 0.5);
        e *= 0.75 + 0.25 * noise(fc / 9.0);                       // pressure variation along strokes
        vec3 col;
        float z = vz(uv);
        if (d0 >= 0.99999) { col = pap; }
        else {
          vec3 c = texture2D(tColor, uv).rgb;
          c = toSRGB(1.0 - exp(-c * exposure));
          float lum = dot(c, vec3(0.299, 0.587, 0.114));
          vec3 wash = mix(vec3(lum), c, 0.7);
          float wv = 0.85 + 0.3 * noise(fc / 140.0) ;                 // uneven watercolor pooling
          col = mix(pap, wash * pap * 1.1, 0.48 * wv);
          // pencil hatching in shade (45°), cross-hatch in deep shade
          float br = smoothstep(0.25, 0.65, noise(fc / 18.0));
          float jit = noise(fc / 30.0) * 3.0;
          float l1 = smoothstep(0.78, 0.97, abs(fract((fc.x + fc.y + jit) / 5.5) - 0.5) * 2.0);
          float l2 = smoothstep(0.80, 0.97, abs(fract((fc.x - fc.y + jit) / 6.5) - 0.5) * 2.0);
          float h = l1 * smoothstep(0.52, 0.3, lum) + l2 * smoothstep(0.32, 0.12, lum);
          col = mix(col, ink, clamp(h, 0.0, 1.0) * 0.28 * br);
          // atmospheric fade with distance — drawings get lighter toward the back
          float far = smoothstep(45.0, 150.0, z);
          col = mix(col, pap, far * 0.8);
          e *= 1.0 - far * 0.85;
        }
        col = mix(col, ink, clamp(e, 0.0, 1.0) * 0.9);
        // unfinished-sketch vignette
        vec2 q = (uv - 0.5) * vec2(res.x / res.y, 1.0);
        float v = smoothstep(0.62, 1.08, length(q) * 1.05 + (noise(uv * 7.0) - 0.5) * 0.18);
        col = mix(col, pap, v);
        gl_FragColor = vec4(col, 1.0);
      }`,
    depthTest: false, depthWrite: false,
  });
  const quad = new FullScreenQuad(mat);

  return {
    setSize(w, h, pr) {
      const W = Math.max(1, Math.floor(w * pr)), H = Math.max(1, Math.floor(h * pr));
      rtColor.setSize(W, H); rtNormal.setSize(W, H);
      mat.uniforms.res.value.set(W, H); mat.uniforms.dpr.value = pr;
    },
    render(scene, cam, hideInNormal = []) {
      mat.uniforms.near.value = cam.near; mat.uniforms.far.value = cam.far;
      // normal pass (no shadows needed)
      for (const o of hideInNormal) o.visible = false;
      scene.overrideMaterial = normalMat; r.setRenderTarget(rtNormal); r.setClearColor(0x8080ff, 1); r.clear(); r.render(scene, cam);
      scene.overrideMaterial = null;
      for (const o of hideInNormal) o.visible = true;
      // color pass (shadows updated once per frame here)
      r.shadowMap.needsUpdate = true;
      r.setRenderTarget(rtColor); r.setClearColor(0xffffff, 1); r.clear(); r.render(scene, cam);
      r.setRenderTarget(null); quad.render(r);
    },
  };
}
