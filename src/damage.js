// Structural damage + firelight for the wildfire stress test.
// Shared house geometry; per-side state is written into uniforms / instance data before each side renders.
import * as THREE from 'three';

const NOISE = /* glsl */`
float dh(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float dn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(dh(i),dh(i+vec2(1,0)),f.x), mix(dh(i+vec2(0,1)),dh(i+vec2(1,1)),f.x), f.y); }
float dfbm(vec2 p){ return dn(p)*0.55 + dn(p*2.1+3.1)*0.3 + dn(p*4.3+7.7)*0.15; }
`;

function patch(mat, U, frag) {
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vDWP;')
      .replace('#include <project_vertex>', '#include <project_vertex>\n{ vec4 dw = vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\n dw = instanceMatrix * dw;\n#endif\n vDWP = (modelMatrix * dw).xyz; }');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vDWP;\n' + Object.keys(U).map((k) => `uniform ${typeof U[k].value === 'number' ? 'float' : 'vec3'} ${k};`).join('\n') + NOISE)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n' + frag);
  };
  mat.customProgramCacheKey = () => 'dmg' + frag.length;
  mat.needsUpdate = true;
}

export function createDamage({ scene, M, tiles, SMALL }) {
  // ---------- soot climbing the walls ----------
  const W = { uScH: { value: -1 }, uScK: { value: 0 } };
  const SOOT = /* glsl */`
  { float edge = uScH + (dfbm(vec2(vDWP.x + vDWP.z, vDWP.y * 0.3) * 0.9) - 0.5) * 2.4;
    float soot = smoothstep(edge, edge - 1.6, vDWP.y) * uScK;
    soot *= 0.75 + 0.25 * dn(vDWP.xy * 3.0 + vDWP.z);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.043, 0.038), clamp(soot, 0.0, 0.92)); }`;
  for (const k of ['stucco', 'base', 'cast']) patch(M[k], W, SOOT);

  // ---------- windows: interior fire glow + heat-cracked glass ----------
  const G = { uCrack: { value: 0 } };
  const CRACK = /* glsl */`
  { vec2 q = vec2(vDWP.x + vDWP.z, vDWP.y) * 2.2;
    float n = dfbm(q) ; float cr = 1.0 - smoothstep(0.0, 0.035, abs(n - 0.5));
    float n2 = dfbm(q * 1.7 + 9.0); cr = max(cr, 1.0 - smoothstep(0.0, 0.03, abs(n2 - 0.5)));
    cr *= uCrack;
    totalEmissiveRadiance += vec3(1.0, 0.55, 0.2) * cr * 2.5;
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.75, 0.72, 0.68), cr * 0.6); }`;
  for (const k of ['glass', 'glassDim']) { patch(M[k], G, CRACK); M[k].userData.e0 = M[k].emissive.clone(); M[k].userData.i0 = M[k].emissiveIntensity; }
  M.roofDeck.userData.e0 = M.roofDeck.emissive.clone(); M.roofDeck.userData.i0 = M.roofDeck.emissiveIntensity; M.roofDeck.userData.c0 = M.roofDeck.color.clone();

  // ---------- roof tiles: base transforms for sag / burn-through ----------
  const n = tiles.count, base = [], m4 = new THREE.Matrix4(), col = new THREE.Color();
  for (let i = 0; i < n; i++) {
    tiles.getMatrixAt(i, m4); const p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3(); m4.decompose(p, q, s);
    tiles.getColorAt(i, col);
    // main roof only (the front cross-gable stands): bell centred over the middle of the house
    const d = Math.hypot((p.x - 1.2) / 4.6, (p.z + 0.5) / 3.4);
    const hsh = Math.abs(Math.sin(p.x * 12.9898 + p.z * 78.233) * 43758.5453) % 1;
    base.push({ p, q, s, c: col.clone(), bell: p.z < 2.6 ? Math.max(0, 1 - d * d) : 0, hole: p.z < 2.6 && d < 0.62 + hsh * 0.25, j: hsh });
  }
  const CHAR = new THREE.Color(0.1, 0.07, 0.055), P = new THREE.Vector3(), S = new THREE.Vector3(), tc = new THREE.Color();
  let lastKey = '';
  function roof(sag, hole, char) {
    const key = sag.toFixed(3) + hole.toFixed(3) + char.toFixed(3);
    if (key === lastKey) return; lastKey = key;
    for (let i = 0; i < n; i++) {
      const b = base[i];
      const gone = b.hole && hole > b.j * 0.8 + 0.1;
      P.copy(b.p); P.y -= sag * 1.6 * b.bell;
      S.copy(b.s); if (gone) S.setScalar(0.0001);
      m4.compose(P, b.q, S); tiles.setMatrixAt(i, m4);
      tc.copy(b.c).lerp(CHAR, Math.min(0.9, char * (0.5 + b.bell * 0.6))); tiles.setColorAt(i, tc);
    }
    tiles.instanceMatrix.needsUpdate = true; if (tiles.instanceColor) tiles.instanceColor.needsUpdate = true;
  }

  // ---------- firelight: a few flickering point lights that follow the strongest fires ----------
  const NL = SMALL ? 3 : 5, L = [];
  for (let i = 0; i < NL; i++) { const l = new THREE.PointLight(0xff7a2a, 0, 14, 1.6); l.castShadow = false; scene.add(l); L.push(l); }
  const ORANGE = new THREE.Color(0xff6a1a), RED = new THREE.Color(0xff3a08);

  return {
    // S: sim for this side, m: sim minutes, t: seconds, act: [[x,y,z,size,intensity]...]
    apply(S, m, t, act, RM) {
      const fl = (k) => (RM ? 1 : 0.8 + 0.2 * Math.sin(t * 11 + k * 2.3) * Math.sin(t * 6.7 + k));
      const sI = S.ign.struct, sAge = sI == null || m < sI ? -1 : m - sI;
      // soot: low scorch from burning plants/vents at the base, full walls once the house is burning
      let h = -1, k = 0;
      const base = ['zone', 'found', 'deck', 'crawl'].map((q) => S.ign[q]).filter((v) => v != null && m >= v);
      if (base.length) { const a = m - Math.min(...base); h = Math.min(1.4, a / 12); k = Math.min(0.7, a / 15); }
      if (S.ign.wood != null && m >= S.ign.wood) { h = Math.max(h, Math.min(3, (m - S.ign.wood) / 10)); k = Math.max(k, 0.6); }
      if (sAge >= 0) { h = Math.max(h, 1 + Math.min(10, sAge / 6)); k = Math.min(0.95, 0.7 + sAge / 60); }
      W.uScH.value = h; W.uScK.value = k;
      // windows
      const crack = sAge < 0 ? 0 : Math.min(1, sAge / 12);
      G.uCrack.value = crack;
      for (const q of ['glass', 'glassDim']) {
        const mt = M[q];
        if (sAge >= 0) { mt.emissive.copy(ORANGE).lerp(RED, Math.min(1, sAge / 80)); mt.emissiveIntensity = (2.2 + Math.min(2.5, sAge / 10)) * fl(q.length); }
        else { mt.emissive.copy(mt.userData.e0); mt.emissiveIntensity = mt.userData.i0; }
      }
      // roof: sags, chars, then burns through over the middle of the house
      const sag = sAge < 25 ? 0 : Math.min(1, (sAge - 25) / 70);
      const hole = sAge < 50 ? 0 : Math.min(1, (sAge - 50) / 60);
      roof(sag, hole, sAge < 0 ? 0 : Math.min(1, sAge / 50));
      M.roofDeck.color.copy(M.roofDeck.userData.c0).lerp(CHAR, sAge < 0 ? 0 : Math.min(1, sAge / 40));
      if (hole > 0) { M.roofDeck.emissive.copy(ORANGE); M.roofDeck.emissiveIntensity = 1.6 * fl(9); } else { M.roofDeck.emissive.copy(M.roofDeck.userData.e0); M.roofDeck.emissiveIntensity = M.roofDeck.userData.i0; }
      // lights on the strongest fires
      act.sort((a, b) => b[3] * b[4] - a[3] * a[4]);
      for (let i = 0; i < NL; i++) {
        const l = L[i], a = act[i];
        if (!a) { l.intensity = 0; continue; }
        l.position.set(a[0], a[1] + a[3] * 0.35, a[2] + 0.6);
        l.distance = 6 + a[3] * 2.4;
        l.intensity = (14 + a[3] * 14) * a[4] * fl(i);
      }
    },
    reset() {
      W.uScH.value = -1; W.uScK.value = 0; G.uCrack.value = 0; roof(0, 0, 0);
      for (const q of ['glass', 'glassDim', 'roofDeck']) { M[q].emissive.copy(M[q].userData.e0); M[q].emissiveIntensity = M[q].userData.i0; }
      M.roofDeck.color.copy(M.roofDeck.userData.c0); L.forEach((l) => (l.intensity = 0));
    },
  };
}
