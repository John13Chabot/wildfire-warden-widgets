/* Wildfire Warden — 3D Montecito Estate Vulnerability Map v1.0.0
   Usage (Webflow Code Embed):
   <div id="wwh3"></div>
   <script type="module" src="https://cdn.jsdelivr.net/gh/John13Chabot/wildfire-warden-widgets@v1.0.0/wwh3d.js"></script>
*/
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js';
const root=document.getElementById('wwh3');
if(root){
root.classList.add('wwh3');root.setAttribute('aria-label','Interactive 3D home vulnerability map');
root.innerHTML="<style>\n.wwh3{--g:#1a3a2a;--o:#e85d04;font-family:inherit;color:#fff;background:linear-gradient(180deg,#1a3a2a,#12291d);border-radius:16px;padding:clamp(20px,4vw,48px);box-sizing:border-box}\n.wwh3 *{box-sizing:border-box}\n.wwh3-head{max-width:760px;margin:0 0 28px}\n.wwh3-eyebrow{color:var(--o);font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-size:13px;margin:0 0 10px}\n.wwh3-title{font-size:clamp(28px,3.6vw,44px);line-height:1.1;margin:0 0 14px;color:#fff;font-weight:700}\n.wwh3-lede{font-size:17px;line-height:1.55;color:rgba(255,255,255,.82);margin:0}\n.wwh3-grid{display:grid;grid-template-columns:minmax(0,1.75fr) minmax(300px,1fr);gap:24px;align-items:start}\n.wwh3-left{display:flex;flex-direction:column;gap:16px;min-width:0}\n.wwh3-stage{position:relative;aspect-ratio:16/10;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#2c3d45 0%,#5e4b3a 50%,#7a4a26 100%)}\n.wwh3-stage canvas{display:block;width:100%;height:100%;touch-action:pan-y;cursor:grab}\n.wwh3-stage canvas:active{cursor:grabbing}\n.wwh3-pins{position:absolute;inset:0;pointer-events:none}\n.wwh3-pin{position:absolute;left:0;top:0;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;border:3px solid #fff;background:var(--o);color:#fff;font:700 15px/28px system-ui,sans-serif;text-align:center;padding:0;cursor:pointer;pointer-events:auto;transition:opacity .25s,background .15s,color .15s,scale .15s;will-change:transform}\n.wwh3-pin:after{content:\"\";position:absolute;inset:-3px;border-radius:50%;border:2.5px solid var(--o);animation:wwh3-pulse 2.4s ease-out infinite;pointer-events:none}\n.wwh3-pin:hover,.wwh3-pin.is-active{scale:1.18}\n.wwh3-pin.is-active{background:#fff;color:var(--o);border-color:var(--o)}\n.wwh3-pin.is-hidden{opacity:.3}\n.wwh3-pin:focus-visible{outline:3px solid #ffd166;outline-offset:2px}\n.wwh3-ui{position:absolute;left:12px;right:12px;bottom:12px;display:flex;justify-content:space-between;align-items:center;gap:8px;pointer-events:none}\n.wwh3-hint b{font-weight:inherit}.wwh3-hint{white-space:nowrap;font-size:12.5px;color:rgba(255,255,255,.75);background:rgba(10,25,17,.6);padding:6px 10px;border-radius:99px}\n.wwh3-reset{pointer-events:auto;font:inherit;font-size:12.5px;font-weight:600;color:#fff;background:rgba(10,25,17,.7);border:1px solid rgba(255,255,255,.25);border-radius:99px;padding:6px 12px;cursor:pointer}\n.wwh3-reset:hover{border-color:var(--o)}\n.wwh3-msg{position:absolute;inset:0;display:grid;place-items:center;font-size:14px;color:rgba(255,255,255,.7);text-align:center;padding:20px}\n.wwh3-panel{background:#fff;color:var(--g);border-radius:12px;padding:26px;line-height:1.5}\n.wwh3-num{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--o);margin:0 0 8px}\n.wwh3-ptitle{font-size:24px;line-height:1.2;margin:0 0 12px;color:var(--g);font-weight:700}\n.wwh3-panel p{margin:0 0 16px;font-size:15.5px;color:#2c3a31}\n.wwh3-panel .wwh3-num{color:var(--o);font-size:12px;margin:0 0 8px}\n.wwh3-panel .wwh3-label{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6b7a70;margin:0 0 6px}\n.wwh3-panel .wwh3-label.fix{color:var(--g)}\n.wwh3-label.fix:before{content:\"\";display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--o);margin-right:7px;vertical-align:1px}\n.wwh3-tags{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 16px}\n.wwh3-tag{font-size:12px;font-weight:700;padding:4px 10px;border-radius:99px;background:#fde8da;color:#a84000}\n.wwh3-tag.flame{background:#fbe0e0;color:#9b2219}\n.wwh3-tag.heat{background:#fff1d1;color:#7d5200}\n.wwh3-products{list-style:none;padding:0;margin:0 0 20px;display:flex;flex-wrap:wrap;gap:6px}\n.wwh3-products li{font-size:13px;font-weight:600;padding:5px 10px;border-radius:6px;background:#eef3ef;color:var(--g);border:1px solid #d5e0d8}\n.wwh3-link{display:inline-block;font-weight:700;color:var(--o);text-decoration:none;font-size:15px}\n.wwh3-link:hover{text-decoration:underline}\n.wwh3-chips{display:flex;flex-wrap:wrap;gap:8px}\n.wwh3-chip{font:inherit;font-size:14px;font-weight:600;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);border-radius:99px;padding:7px 14px 7px 8px;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:background .15s,border-color .15s}\n.wwh3-chip span{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--o);font-size:12px}\n.wwh3-chip:hover,.wwh3-chip.is-active{background:rgba(232,93,4,.22);border-color:var(--o)}\n.wwh3-chip:focus-visible,.wwh3-cta:focus-visible{outline:3px solid #ffd166;outline-offset:2px}\n.wwh3-foot{display:flex;margin-top:24px}\n.wwh3-cta{display:inline-block;background:var(--o);color:#fff;font-weight:700;text-decoration:none;padding:14px 22px;border-radius:8px;white-space:nowrap}\n.wwh3-cta:hover{background:#ff6d0f}\n@keyframes wwh3-pulse{0%{transform:scale(1);opacity:.9}100%{transform:scale(2);opacity:0}}\n@media(max-width:900px){.wwh3-grid{grid-template-columns:1fr;gap:16px}.wwh3-stage{aspect-ratio:4/3.4}.wwh3-chips{flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px}.wwh3-chip{flex:0 0 auto}.wwh3-foot{justify-content:center}.wwh3-hint b{display:none}.wwh3-pin{width:30px;height:30px;margin:-15px 0 0 -15px;line-height:24px;font-size:14px}}\n@media(prefers-reduced-motion:reduce){.wwh3-pin:after{animation:none;opacity:0}}\n</style><div class=\"wwh3-head\">\n  <p class=\"wwh3-eyebrow\">Passive home hardening</p>\n  <h2 class=\"wwh3-title\">See where wildfire gets into a home</h2>\n  <p class=\"wwh3-lede\">Wildfire Warden makes homes ember-, flame-, and radiant heat-resistant. Spin the home and explore seven common weak points we find during assessments, and how we harden each one.</p>\n</div>\n\n<div class=\"wwh3-grid\">\n  <div class=\"wwh3-left\">\n    <div class=\"wwh3-stage\">\n      <div class=\"wwh3-msg\">Loading 3D model\u2026</div>\n      <div class=\"wwh3-pins\"></div>\n      <div class=\"wwh3-ui\"><span class=\"wwh3-hint\">Drag to rotate<b> \u00b7 tap a number</b></span><button type=\"button\" class=\"wwh3-reset\">Reset view</button></div>\n    </div>\n    <div class=\"wwh3-chips\" role=\"list\"></div>\n  </div>\n  <div class=\"wwh3-panel\" aria-live=\"polite\"></div>\n</div>\n\n<div class=\"wwh3-foot\"><a class=\"wwh3-cta\" href=\"/free-assessment\">Get My Free Home Assessment</a></div>";

(function(){
var root=document.getElementById('wwh3');if(!root)return;
var TAG={'Embers':'','Flame contact':'flame','Radiant heat':'heat'};
var D=[
{t:"Attic & gable vents",th:["Embers"],
v:"Vents are open pathways into your attic. Wind-driven embers pass through standard 1/4\" screens and ignite insulation, stored items, and framing from the inside, often well after the fire front has passed.",
f:"We retrofit existing vents with Wildfire Defense Mesh (WDM 98 with 1/16\" openings, or WDM 75 with 1/8\") or replace the most exposed openings with listed Brandguard ember- and flame-resistant vents. Every job is sized to keep the attic ventilation your home requires.",
p:["WDM 98 / WDM 75 mesh","Brandguard vents"],h:"/services#vents",c:"Vent retrofits"},
{t:"Fascia, trim & exposed wood",th:["Flame contact","Radiant heat"],
v:"Wood fascia, trim, and siding sit where heat and flame concentrate. Radiant heat from burning vegetation or a neighboring structure can ignite them without flame ever touching the house.",
f:"FireFree 88 is an intumescent coating that expands under high heat into an insulating char layer, shielding the wood beneath. We finish it with an FfE topcoat for weather durability.",
p:["FireFree 88","FfE topcoat"],h:"/services#coatings",c:"Fire-resistant coatings"},
{t:"Gutters & roof edge",th:["Embers"],
v:"Oak leaves, eucalyptus bark, and pine needles collect in gutters and become a fuel bed at the roof line. Embers that land there ignite the debris and put flame directly against the roof edge and fascia.",
f:"FireStorm stainless steel gutter guards keep debris out while water flows through. No fuel at the edge of your roof, and far less cleaning before fire season.",
p:["FireStorm stainless gutter guards"],h:"/services#gutter-guards",c:"Gutter guards"},
{t:"Open eaves & soffits",th:["Embers","Radiant heat"],
v:"Open eaves trap rising heat and embers in the pockets between rafters, right where the wall meets the roof. Gaps and vents in the eave lead straight into the attic.",
f:"Three options matched to your home: a boxed eave enclosure in non-combustible James Hardie fiber cement, a FireFree 88 coating system, or a Phos-Chek FORTIFY treatment.",
p:["James Hardie eave enclosure","FireFree 88","Phos-Chek FORTIFY"],h:"/services#eaves",c:"Eave protection"},
{t:"Decks",th:["Embers","Flame contact"],
v:"Embers collect on deck boards and drop into the space underneath, where leaves, firewood, and stored items catch. A burning deck puts flame against your walls, doors, and windows.",
f:"DeckGuard protection for the deck, plus a clear plan for removing combustibles stored underneath.",
p:["DeckGuard"],h:"/services#decks",c:"Deck protection"},
{t:"Foundation & crawl space vents",th:["Embers"],
v:"Foundation vents sit at ground level, next to mulch, leaves, and plants, exactly where embers pile up. Embers that get through can ignite the floor framing from below.",
f:"The same proven fix as attic vents: Wildfire Defense Mesh retrofits or listed Brandguard vents, installed to maintain required crawl space ventilation.",
p:["WDM 98 / WDM 75 mesh","Brandguard vents"],h:"/services#vents",c:"Vent retrofits"},
{t:"Zone 0: the first 5 feet",th:["Embers"],
v:"The first five feet around your home is where embers land and collect. Bark mulch, dry plants, and wood fencing touching the house act like a fuse to the walls, vents, and windows above.",
f:"Your free assessment maps your Zone 0 and tells you exactly what to change. For plants you keep, Phos-Chek FORTIFY long-term retardant makes vegetation harder to ignite.",
p:["Free Zone 0 assessment","Phos-Chek FORTIFY"],h:"/services#zone-0",c:"Zone 0 & vegetation"}
];
var panel=root.querySelector('.wwh3-panel'),chipsEl=root.querySelector('.wwh3-chips');
function tags(a){return '<div class="wwh3-tags">'+a.map(function(x){return '<span class="wwh3-tag '+TAG[x]+'">'+x+'</span>'}).join('')+'</div>'}
var DEF='<p class="wwh3-num">How wildfire gets in</p><h3 class="wwh3-ptitle">Most homes don\'t burn from a wall of flame.</h3><p>They ignite when embers, flame contact, and radiant heat find weak points, often well ahead of the fire front. Tap a numbered point, or any highlighted part of the house, to see each vulnerability and how we harden it.</p>'+tags(["Embers","Flame contact","Radiant heat"]);
function tpl(d,i){return '<p class="wwh3-num">'+(i+1)+' of '+D.length+'</p><h3 class="wwh3-ptitle">'+d.t+'</h3>'+tags(d.th)+'<p class="wwh3-label">The vulnerability</p><p>'+d.v+'</p><p class="wwh3-label fix">How we solve it</p><p>'+d.f+'</p><ul class="wwh3-products">'+d.p.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><a class="wwh3-link" href="'+d.h+'">See '+d.c.toLowerCase()+' &rarr;</a>'}
var chips=[],api={D:D,pinned:null,cur:-2,ls:[]};
D.forEach(function(d,i){var c=document.createElement('button');c.type='button';c.className='wwh3-chip';c.setAttribute('role','listitem');c.innerHTML='<span>'+(i+1)+'</span>'+d.t;c.addEventListener('click',function(){api.pin(i)});chipsEl.appendChild(c);chips.push(c)});
api.set=function(i,fly){if(i!==api.cur){api.cur=i;for(var k=0;k<D.length;k++){chips[k].classList.toggle('is-active',k===i);chips[k].setAttribute('aria-pressed',k===i)}panel.innerHTML=i==null?DEF:tpl(D[i],i)}api.ls.forEach(function(f){f(i,!!fly)})};
api.pin=function(i){api.pinned=i;api.set(i,true)};
root._wwh=api;api.set(null);
})();



const api=root._wwh,stage=root.querySelector('.wwh3-stage'),msg=root.querySelector('.wwh3-msg'),pinsEl=root.querySelector('.wwh3-pins');
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,SMALL=matchMedia('(max-width:900px)').matches;
const H=[
 {k:'attic', p:[1.5,6.5,6.2],  v:{t:[1.5,5.6,5],az:.12,el:.14,d:15}},
 {k:'wood',  p:[-.15,6.42,6.7],v:{t:[.6,5.6,5.5],az:-.38,el:.2,d:15}},
 {k:'gutter',p:[8.2,3.3,3.85], v:{t:[10,3.6,1],az:.32,el:.38,d:19}},
 {k:'eaves', p:[11.9,3.25,3.3],v:{t:[11,3.3,3],az:.42,el:.03,d:11.5}},
 {k:'deck',  p:[-7,2.1,3.15],  v:{t:[-7.5,-.3,0],az:-1.15,el:.22,d:17}},
 {k:'found', p:[-3.3,.32,3.15],v:{t:[-2.6,.9,3],az:-.15,el:.14,d:9.5}},
 {k:'zone',  p:[3.3,1.0,6.8],  v:{t:[1.5,.8,6],az:.16,el:.42,d:15}}
];
const DEFV={t:[2.5,2.6,0],az:.5,el:.27,d:36};
try{
const r=new THREE.WebGLRenderer({antialias:true,alpha:true});
r.setPixelRatio(Math.min(devicePixelRatio,2));r.shadowMap.enabled=true;r.shadowMap.type=THREE.PCFSoftShadowMap;
r.outputColorSpace=THREE.SRGBColorSpace;r.toneMapping=THREE.ACESFilmicToneMapping;r.toneMappingExposure=1.05;
stage.insertBefore(r.domElement,pinsEl);
const scene=new THREE.Scene();scene.fog=new THREE.Fog(0x6a5440,55,135);
const cam=new THREE.PerspectiveCamera(32,1.6,.1,300);
scene.add(new THREE.HemisphereLight(0xffe6c8,0x4a3a20,1.0));
const sun=new THREE.DirectionalLight(0xffd9a8,2.3);sun.position.set(14,20,16);sun.castShadow=true;
const sm=SMALL?1024:2048;sun.shadow.mapSize.set(sm,sm);Object.assign(sun.shadow.camera,{left:-28,right:28,top:28,bottom:-28,near:1,far:90});sun.shadow.bias=-.0004;scene.add(sun);
const fire=new THREE.DirectionalLight(0xff6a1a,.9);fire.position.set(-20,4,6);scene.add(fire);
let sd=11;const rnd=()=>(sd=sd*16807%2147483647)/2147483647;
const house=new THREE.Group();scene.add(house);
const reg={};
const M=(c,o={})=>{const m=new THREE.MeshStandardMaterial({color:c,roughness:.85,flatShading:true,...o});m.userData.e0=m.emissive.clone();m.userData.i0=m.emissiveIntensity;return m};
const mk=(geo,c,x,y,z,par,k,o)=>{const m=new THREE.Mesh(geo,c.isMaterial?c:M(c,o));m.position.set(x,y,z);m.castShadow=m.receiveShadow=true;par.add(m);if(k){m.userData.k=k;(reg[k]=reg[k]||[]).push(m)}return m};
const add=(geo,c,x,y,z,k,o)=>mk(geo,c,x,y,z,house,k,o);
const box=(w,h,d,c,x,y,z,k,o)=>add(new THREE.BoxGeometry(w,h,d),c,x,y,z,k,o);
const ST='#f1ebdf',BASE='#d8cdbb',WOOD='#5a3a24',DK='#4a3020',DECK='#8a5a3a',IRON='#2a2724',GLS='#2b3940',STONE='#d9ccb2',GUT='#b87333',TILE='#9a4524';
const glassO={emissive:new THREE.Color('#ffb866'),emissiveIntensity:.4,roughness:.25};
// ---------- terrain ----------
const smooth=v=>v<=0?0:v>=1?1:v*v*(3-2*v);
function hgt(x,z){let y=0;const dl=-5-x,db=-9.3-z,df=z-13,dr=x-17;
 if(dl>0)y-=Math.min(dl,18)*.5;
 if(db>0)y+=1.25+Math.min(db,20)*.34;
 if(df>0)y-=df*.12;
 if(dr>0)y+=dr*.18;
 const o=Math.max(dl,db,df,dr,0);
 return y+(Math.sin(x*.37)*Math.cos(z*.29)*.5+Math.sin(x*.11+z*.17)*.9)*smooth(o/5)}
const tg=new THREE.PlaneGeometry(140,140,140,140);tg.rotateX(-Math.PI/2);
const pa=tg.attributes.position,col=[],cA=new THREE.Color('#4d7038'),cB=new THREE.Color('#a48c52'),cC=new THREE.Color('#7b6a3e'),cc=new THREE.Color();
for(let i=0;i<pa.count;i++){const x=pa.getX(i),z=pa.getZ(i);pa.setY(i,hgt(x,z));const o=Math.max(-5-x,-9.3-z,z-13,x-17,0);cc.copy(cA).lerp(rnd()<.35?cC:cB,smooth(o/2.5));cc.offsetHSL(0,0,(rnd()-.5)*.05);col.push(cc.r,cc.g,cc.b)}
tg.setAttribute('color',new THREE.Float32BufferAttribute(col,3));tg.computeVertexNormals();
const terr=new THREE.Mesh(tg,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true}));terr.receiveShadow=true;scene.add(terr);
mk(new THREE.BoxGeometry(22.5,1.7,1),'#9a8c74',5.75,.55,-9.5,scene);mk(new THREE.BoxGeometry(22.7,.15,1.15),'#b3a58c',5.75,1.45,-9.5,scene);
mk(new THREE.BoxGeometry(6.6,.05,10),'#bba57d',9.5,.03,8,scene);mk(new THREE.BoxGeometry(1.4,.05,6.5),'#a9a291',1.5,.03,10.2,scene);
// ---------- clay tile ----------
const tc=document.createElement('canvas');tc.width=tc.height=64;const cx=tc.getContext('2d');
for(let i=0;i<2;i++){const g=cx.createLinearGradient(i*32,0,i*32+32,0);g.addColorStop(0,'#6e2c14');g.addColorStop(.5,'#cf6c3c');g.addColorStop(1,'#6e2c14');cx.fillStyle=g;cx.fillRect(i*32,0,32,64)}
cx.fillStyle='rgba(50,16,6,.55)';cx.fillRect(0,29,64,3);cx.fillRect(0,61,64,3);
const tileTex=new THREE.CanvasTexture(tc);tileTex.wrapS=tileTex.wrapT=THREE.RepeatWrapping;tileTex.colorSpace=THREE.SRGBColorSpace;
function tiles(len,slope,x,y,z,tilt,ry){const t=tileTex.clone();t.needsUpdate=true;t.repeat.set(len/.6,slope/.9);
 const m=add(new THREE.BoxGeometry(len,.24,slope),M('#ffffff',{map:t,roughness:.75}),x,y,z);m.rotation.order='YXZ';m.rotation.y=ry||0;m.rotation.x=tilt;return m}
function ridge(len,x,y,z,alongZ){const m=add(new THREE.CylinderGeometry(.15,.15,len,8),TILE,x,y,z);if(alongZ)m.rotation.x=Math.PI/2;else m.rotation.z=Math.PI/2}
function tri(hw,rise,x,y,z,ry){const s=new THREE.Shape([new THREE.Vector2(-hw,0),new THREE.Vector2(hw,0),new THREE.Vector2(0,rise)]);const m=add(new THREE.ExtrudeGeometry(s,{depth:.2,bevelEnabled:false}),ST,x,y,z);m.rotation.y=ry||0;return m}
function archShape(w,h){const s=new THREE.Shape(),rr=w/2;s.moveTo(-rr,0);s.lineTo(rr,0);s.lineTo(rr,h-rr);s.absarc(0,h-rr,rr,0,Math.PI,false);s.lineTo(-rr,0);return s}
function arch(w,h,dp,c,x,y,z,ry,k,o){const m=add(new THREE.ExtrudeGeometry(archShape(w,h),{depth:dp,bevelEnabled:false,curveSegments:12}),c,x,y,z,k,o);m.rotation.y=ry||0;return m}
function win(x,y,z,w,h,ry=0){const nx=Math.sin(ry),nz=Math.cos(ry);arch(w+.28,h+.14,.1,STONE,x-nx*.02,y-.07,z-nz*.02,ry);arch(w,h,.09,GLS,x,y,z,ry,null,glassO);
 if(!ry){box(w+.45,.1,.22,STONE,x,y-.1,z+.1);box(.05,h-w/2,.12,'#e9e1d2',x,y+(h-w/2)/2,z+.06)}}
const a=Math.atan2(1.6,3.5);
// ---------- main block ----------
box(10,6,7,ST,1,3,-.5);box(10.06,.6,7.06,BASE,1,.3,-.5);
tiles(11.2,4.45,1,6.775,1.57,a,0);tiles(11.2,4.45,1,6.775,-2.57,a,Math.PI);ridge(11.2,1,7.75,-.5);
tri(3.5,1.6,-4.2,6,-.5,Math.PI/2);tri(3.5,1.6,6,6,-.5,Math.PI/2);
for(let x=-4.3;x<=6.35;x+=.6){if(x>-1.2&&x<4.2)continue;box(.14,.18,.7,WOOD,x,5.8,3.27,'eaves').rotation.x=a}
// chimney
box(1.2,3.8,1.2,ST,-2.6,7.4,-2.6);box(1.5,.2,1.5,BASE,-2.6,9.4,-2.6);const cp=add(new THREE.ConeGeometry(1.05,.5,4),TILE,-2.6,9.75,-2.6);cp.rotation.y=Math.PI/4;
// front cross-gable
box(5,6,3,ST,1.5,3,4.5);box(5.06,.6,3.06,BASE,1.5,.3,4.5);tri(2.5,1.14,1.5,6,5.8);
tiles(4.4,3.25,-.024,6.565,4.4,a,-Math.PI/2);tiles(4.4,3.25,3.024,6.565,4.4,a,Math.PI/2);ridge(4.4,1.5,7.27,4.4,true);
for(const s of[-1,1]){const rb=box(3.25,.28,.14,WOOD,1.5+s*1.524,6.43,6.62,'wood');rb.rotation.z=-s*a}
for(let z=3.3;z<=6.4;z+=.6)for(const s of[-1,1])box(.6,.16,.14,WOOD,1.5+s*2.75,5.86,z,'eaves').rotation.z=-s*a;
// attic vents
box(.9,.48,.1,'#cfc4b0',1.5,6.48,6.04,'attic');for(let i=0;i<3;i++)box(.8,.05,.06,'#4f493f',1.5,6.32+i*.14,6.1,'attic');
for(const[zz,yy]of[[-.8,6.4],[-.2,6.4],[-.5,6.85]]){const p=add(new THREE.CylinderGeometry(.12,.12,.3,10),'#b5562d',-4.28,yy,zz,'attic');p.rotation.z=Math.PI/2;add(new THREE.CircleGeometry(.08,10),'#1c1410',-4.44,yy,zz,'attic').rotation.y=-Math.PI/2}
// openings
arch(1.85,2.95,.08,STONE,1.5,0,5.97);arch(1.4,2.7,.12,WOOD,1.5,0,5.99);add(new THREE.SphereGeometry(.05,6,6),'#c9a650',1.95,1.3,6.13);
win(1.5,3.3,6,1.2,2.1);win(-2.5,3.7,3,1.1,1.9);win(-2.5,.95,3,1.1,2.0);win(5,3.7,3,.8,1.8);win(5,.95,3,.8,2.0);
win(-4,3.7,-2.2,1,1.8,-Math.PI/2);win(-4,3.7,1.6,1,1.8,-Math.PI/2);
arch(1.8,2.75,.08,WOOD,-4,1,0,-Math.PI/2);arch(1.5,2.5,.06,GLS,-4.03,1.05,0,-Math.PI/2,null,glassO);
box(1.7,.07,.38,IRON,-2.5,3.55,3.19);box(1.7,.05,.05,IRON,-2.5,4.2,3.36);for(let x=-3.3;x<=-1.7;x+=.16)box(.03,.65,.03,IRON,x,3.88,3.36);
// foundation vents
for(const[x,z]of[[-3.3,3.02],[5.3,3.02],[-.4,6.02],[3.4,6.02]])box(.6,.22,.06,'#1e1e1e',x,.32,z,'found');
box(.06,.22,.6,'#1e1e1e',-4.04,.32,-2.6,'found');
// ---------- garage / loggia wing ----------
const aw=Math.atan2(1.3,3);
box(7,3.6,6,ST,9.5,1.8,0);box(7.06,.5,6.06,BASE,9.5,.25,0);
tiles(7.6,3.87,9.8,4.23,1.82,aw,0);tiles(7.6,3.87,9.8,4.23,-1.82,aw,Math.PI);ridge(7.6,9.8,4.98,0);tri(3,1.3,13,3.6,0,Math.PI/2);
box(7.6,.26,.08,WOOD,9.8,3.28,3.47,'wood');box(7.6,.24,.3,GUT,9.8,3.25,3.64,'gutter');box(.12,3.2,.12,GUT,13.45,1.65,3.64,'gutter');
const leaf=['#7a6a2c','#8f5a24','#a08038','#5f5a2a'];
for(let i=0;i<16;i++)box(.24,.06,.14,leaf[i%4],6.3+i*.45+rnd()*.2,3.4,3.62+rnd()*.08-.04,'gutter').rotation.y=rnd()*3;
for(let i=0;i<22;i++)box(.24,.04,.14,leaf[i%4],8+rnd()*5.4,4.2+rnd()*.6,-.6-rnd()*2.6).rotation.set(-aw,rnd()*3,0);
for(let x=6.3;x<=13.4;x+=.55)box(.14,.18,.65,WOOD,x,3.39,3.27,'eaves').rotation.x=aw;
for(const x of[7.3,9.5,11.7]){arch(2.25,2.95,.06,STONE,x,0,2.96);arch(1.9,2.7,.1,WOOD,x,0,2.98);for(let k=-3;k<=3;k++)box(.03,2.0,.03,'#3e2818',x+k*.25,1.0,3.09)}
// ---------- elevated deck over slope ----------
box(6,.16,6.2,DECK,-7,1.0,0,'deck');box(6,.28,.1,DK,-7,.84,3.08,'deck');box(.1,.28,6.2,DK,-9.98,.84,0,'deck');box(6,.28,.1,DK,-7,.84,-3.08,'deck');
for(const x of[-9.8,-6.9])for(const z of[-2.9,0,2.9]){const y=hgt(x,z),L=.92-y;box(.24,L,.24,DK,x,y+L/2,z,'deck')}
for(const[z0,z1]of[[-2.9,0],[0,2.9]]){const y0=hgt(-9.8,z0)+.4,dy=.75-y0,dz=z1-z0,len=Math.hypot(dy,dz),ang=Math.atan2(dy,dz);
 box(.1,.12,len,DK,-9.8,y0+dy/2,(z0+z1)/2,'deck').rotation.x=-ang;box(.1,.12,len,DK,-9.8,y0+dy/2,(z0+z1)/2,'deck').rotation.x=ang}
box(.1,.1,6.2,DECK,-9.95,2.0,0,'deck');box(5.95,.1,.1,DECK,-7,2.0,3.05,'deck');box(5.95,.1,.1,DECK,-7,2.0,-3.05,'deck');
for(let z=-3;z<=3.01;z+=.3)box(.06,.9,.06,DECK,-9.95,1.53,z,'deck');
for(let x=-9.8;x<=-4.2;x+=.3){box(.06,.9,.06,DECK,x,1.53,3.05,'deck');box(.06,.9,.06,DECK,x,1.53,-3.05,'deck')}
const lg=new THREE.CylinderGeometry(.12,.12,.9,7),wy=hgt(-6,1.6);
for(let row=0;row<3;row++)for(let j=0;j<4-row;j++){const m=add(lg,j%2?'#7a5434':'#86603c',-6.6+j*.25+row*.12,wy+.15+row*.21,1.6,'deck');m.rotation.x=Math.PI/2}
for(let i=0;i<10;i++){const x=-9.5+rnd()*5,z=-2.5+rnd()*5;box(.3,.03,.18,leaf[i%4],x,hgt(x,z)+.05,z,'deck').rotation.y=rnd()*3}
// ---------- zone 0 ----------
const mul='#5e4029';box(3,.06,1.4,mul,-2.5,.04,3.75,'zone');box(2,.06,1.4,mul,5,.04,3.75,'zone');box(1.7,.06,1.3,mul,-.15,.04,6.7,'zone');box(1.7,.06,1.3,mul,3.15,.04,6.7,'zone');
const ico=(rad,c,x,y,z)=>{const m=add(new THREE.IcosahedronGeometry(rad,0),c,x,y,z,'zone');m.scale.y=.85;m.rotation.y=rnd()*3};
ico(.6,'#4c7238',-3.3,.55,3.75);ico(.55,'#8a7438',-1.8,.5,3.85);ico(.55,'#56783e',5.1,.5,3.75);ico(.5,'#5d7a3a',-.2,.48,6.75);ico(.6,'#4f7a3c',3.3,.55,6.75);
for(const[y,z,s]of[[1.3,6.18,.42],[1.9,6.14,.38],[2.5,6.12,.33],[1.1,6.3,.35]])ico(s,'#b8326e',3.55+rnd()*.3,y,z);
// ---------- trees ----------
const tree=new THREE.Group();scene.add(tree);
function cylm(r1,r2,l,mat,g){const m=new THREE.Mesh(new THREE.CylinderGeometry(r2,r1,l,6),mat);m.castShadow=true;g.add(m);return m}
function oak(x,z,s,lift=0){const g=new THREE.Group();g.position.set(x,hgt(x,z)-.1,z);tree.add(g);const tm=M('#5b4a38');
 const seg=(r1,r2,l,px,py,pz,rx,rz)=>{const m=cylm(r1*s,r2*s,l*s,tm,g);m.position.set(px*s,py*s,pz*s);m.rotation.set(rx,0,rz)};
 seg(.48,.34,2.4,0,1.2,0,0,.12);seg(.3,.14,3.4,-1,3.0,0,0,.9);seg(.28,.13,3.2,1,3.0,.2,.2,-.85);seg(.24,.12,2.8,0,3.1,-1,-.8,.1);
 const cs=['#3f5229','#4a5e2f','#364a24','#55683a'];
 for(let i=0;i<11;i++){const t=rnd()*6.28,rr=rnd()*3.1;const c=new THREE.Mesh(new THREE.IcosahedronGeometry((1.3+rnd())*s,1),M(cs[i%4]));c.position.set(Math.cos(t)*rr*s,(3.9+lift+rnd()*1.1)*s,Math.sin(t)*rr*s);c.scale.y=.6;c.castShadow=true;g.add(c)}
 g.rotation.y=rnd()*6.28}
function euc(x,z,s){const g=new THREE.Group();g.position.set(x,hgt(x,z)-.1,z);tree.add(g);const b1=M('#ddd4c3'),b2=M('#a89f8e');
 const p=new THREE.Vector3(),lean=(rnd()-.5)*.3;
 for(let i=0;i<4;i++){const l=3.6*s,m=cylm((.38-i*.07)*s,(.31-i*.07)*s,l,i?b1:b2,g);m.rotation.set((rnd()-.5)*.2,0,lean+(rnd()-.5)*.2);const d=new THREE.Vector3(0,1,0).applyEuler(m.rotation);m.position.copy(p).addScaledVector(d,l/2);p.addScaledVector(d,l)}
 const cs=['#7f9173','#6f8366','#8a9a7c'];
 for(let i=0;i<10;i++){const c=new THREE.Mesh(new THREE.IcosahedronGeometry((.9+rnd()*.7)*s,0),M(cs[i%3]));c.position.set(p.x+(rnd()-.5)*4.4*s,p.y-rnd()*5.5*s,p.z+(rnd()-.5)*4.4*s);c.scale.set(1,1.5,1);c.castShadow=true;g.add(c)}}
function cypress(x,z,s){const c=new THREE.Mesh(new THREE.ConeGeometry(.75*s,7.5*s,8),M('#2e4a2c'));c.position.set(x,hgt(x,z)+3.6*s,z);c.castShadow=true;tree.add(c)}
oak(15.6,-5.4,1.2,1.0);oak(-8,11,1.0);oak(26,16,.9);oak(-18,-10,1.25);oak(22,-3,1.1);oak(6,-16,1.2);oak(-30,20,1.1);
for(const[x,z,s]of[[-3,-15,1],[1.5,-19,1.15],[-7.5,-20,1.05],[11,-20,1.1],[16,-15,.95],[-20,-15,1.1],[-21,-8,1.2],[-12,-14,1],[26,-14,1.05]])euc(x,z,s);
cypress(14.6,3.6,1);cypress(14.6,-1.5,.9);cypress(-5.6,-6.5,.85);
const sc=['#5a6636','#6b6a3a','#4a5a30'];
for(let i=0;i<110;i++){const x=-50+rnd()*100,z=-45+rnd()*90;if(x>-9&&x<20&&z>-11&&z<18)continue;const rr=.5+rnd()*.7,m=new THREE.Mesh(new THREE.IcosahedronGeometry(rr,0),M(sc[i%3]));m.position.set(x,hgt(x,z)+rr*.5,z);m.scale.y=.7;m.castShadow=true;tree.add(m)}
// ---------- embers ----------
const N=RM?0:320,ep=new Float32Array(N*3),ev=[];
for(let i=0;i<N;i++){ep[i*3]=-30+Math.random()*50;ep[i*3+1]=-4+Math.random()*20;ep[i*3+2]=-10+Math.random()*30;ev.push(.03+Math.random()*.05)}
const eg=new THREE.BufferGeometry();eg.setAttribute('position',new THREE.BufferAttribute(ep,3));
scene.add(new THREE.Points(eg,new THREE.PointsMaterial({color:0xffa040,size:.15,transparent:true,opacity:.9,blending:THREE.AdditiveBlending,depthWrite:false})));
// ---------- pins ----------
const pins=H.map((h,i)=>{const b=document.createElement('button');b.type='button';b.className='wwh3-pin';b.textContent=i+1;b.setAttribute('aria-label',(i+1)+': '+api.D[i].t);
 b.addEventListener('mouseenter',()=>api.set(i));b.addEventListener('mouseleave',()=>api.set(api.pinned));b.addEventListener('click',()=>api.pin(i));pinsEl.appendChild(b);h.v3=new THREE.Vector3(...h.p);return b});
// ---------- camera rig ----------
const cur={az:DEFV.az,el:DEFV.el,d:DEFV.d,t:new THREE.Vector3(...DEFV.t)},goal={az:cur.az,el:cur.el,d:cur.d,t:cur.t.clone()};
let flying=false,user=false,active=null;
const clampEl=v=>Math.min(.95,Math.max(.02,v)),clampAz=v=>Math.min(1.4,Math.max(-1.4,v));
function go(v){goal.az=v.az;goal.el=v.el;goal.d=v.d;goal.t.set(...v.t);flying=true}
api.ls.push((i,fly)=>{const k=i==null?null:H[i].k;if(k!==active){if(active)reg[active].forEach(m=>{m.material.emissive.copy(m.material.userData.e0);m.material.emissiveIntensity=m.material.userData.i0});active=k}
 pins.forEach((p,j)=>p.classList.toggle('is-active',j===i));if(fly){user=i!=null;go(i==null?DEFV:H[i].v)}});
root.querySelector('.wwh3-reset').addEventListener('click',()=>{api.pin(null);user=false});
const cv=r.domElement,ray=new THREE.Raycaster(),ndc=new THREE.Vector2();let drag=null;
const pick=e=>{const b=cv.getBoundingClientRect();ndc.set((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1);ray.setFromCamera(ndc,cam);const h=ray.intersectObjects(house.children,false)[0];return h&&h.object.userData.k?H.findIndex(x=>x.k===h.object.userData.k):-1};
cv.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,m:0};goal.az=cur.az;goal.el=cur.el;goal.d=cur.d;goal.t.copy(cur.t);flying=false;user=true});
cv.addEventListener('pointermove',e=>{if(drag){const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.m+=Math.abs(dx)+Math.abs(dy);drag.x=e.clientX;drag.y=e.clientY;goal.az=clampAz(goal.az-dx*.006);goal.el=clampEl(goal.el+dy*.004)}
 else if(e.pointerType==='mouse'){const i=pick(e);cv.style.cursor=i>=0?'pointer':'';if(i>=0&&i!==api.cur)api.set(i);else if(i<0&&api.cur!==api.pinned)api.set(api.pinned)}});
cv.addEventListener('pointerup',e=>{if(drag&&drag.m<6){const i=pick(e);if(i>=0)api.pin(i)}drag=null});
cv.addEventListener('pointercancel',()=>drag=null);cv.addEventListener('pointerleave',()=>{if(!drag&&api.cur!==api.pinned)api.set(api.pinned)});
let vis=true;new IntersectionObserver(es=>vis=es[0].isIntersecting).observe(stage);
const off=new THREE.Vector3(),tmp=new THREE.Vector3();let W=0,Hh=0;
function size(){const b=stage.getBoundingClientRect();W=b.width;Hh=b.height;r.setSize(W,Hh,false);cam.aspect=W/Hh;cam.updateProjectionMatrix()}
new ResizeObserver(size).observe(stage);size();
const clock=new THREE.Clock();let t=0;
function frame(){requestAnimationFrame(frame);if(!vis)return;const dt=Math.min(clock.getDelta(),.05);t+=dt;
 if(!user&&api.pinned==null&&!RM){goal.az=DEFV.az+Math.sin(t*.18)*.32}
 const f=RM&&flying?1:1-Math.pow(.02,dt);
 cur.az+=(goal.az-cur.az)*f;cur.el+=(goal.el-cur.el)*f;cur.d+=(goal.d-cur.d)*f;cur.t.lerp(goal.t,f);
 const d=cur.d*(cam.aspect<1.4?1.15:1);
 off.set(Math.sin(cur.az)*Math.cos(cur.el),Math.sin(cur.el),Math.cos(cur.az)*Math.cos(cur.el)).multiplyScalar(d);
 cam.position.copy(cur.t).add(off);const gy=hgt(cam.position.x,cam.position.z)+.6;if(cam.position.y<gy)cam.position.y=gy;cam.lookAt(cur.t);
 if(active){const s=.28+.18*Math.sin(t*4);reg[active].forEach(m=>{m.material.emissive.set(0xe85d04);m.material.emissiveIntensity=s})}
 if(N){const p=eg.attributes.position.array;for(let i=0;i<N;i++){p[i*3]+=ev[i]*dt*60;p[i*3+1]+=Math.sin(t*2+i)*.006+.004;p[i*3+2]+=Math.cos(t+i)*.004;if(p[i*3]>22||p[i*3+1]>18){p[i*3]=-30;p[i*3+1]=-3+Math.random()*12}}eg.attributes.position.needsUpdate=true}
 r.render(scene,cam);
 H.forEach((h,i)=>{tmp.copy(h.v3).project(cam);const x=(tmp.x+1)/2*W,y=(1-tmp.y)/2*Hh;pins[i].style.transform='translate('+x.toFixed(1)+'px,'+y.toFixed(1)+'px)';
  const dist=cam.position.distanceTo(h.v3);ray.set(cam.position,h.v3.clone().sub(cam.position).normalize());const hit=ray.intersectObjects(house.children,false)[0];
  pins[i].classList.toggle('is-hidden',!!hit&&hit.distance<dist-.45)});
}
frame();msg.remove();
}catch(err){msg.textContent='3D view unavailable on this device. Use the list below to explore.';console.warn(err)}

}
