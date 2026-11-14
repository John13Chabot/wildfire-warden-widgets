export function initUI(root){


var TAG={'Embers':'','Flame contact':'flame','Radiant heat':'heat'};
var IB='https://cdn.prod.website-files.com/69cec73349fef6b9621b7834/';
var IMG={
mesh:{u:'69cf079b26ab8b078a8b0c66_IMG_5199_under_4mb.jpg',a:'Ember-resistant vent with metal mesh installed on a stucco home exterior'},
install:{u:'69cfe4c2aa38afe987c7c2d5_compressed_image_2.jpg',a:'Wildfire Warden technician installing ember-resistant mesh over a vent cover'},
roofvent:{u:'69cfe34959f6199fef658710_roof_vent_compressed.jpg',a:'Ember-resistant roof vent on a shingled home'},
eave:{u:'6ab1916edf6590de2377eb71_IMG_7248.jpg',a:'Boxed eave and soffit enclosure on a Ventura County home'},
gutter:{u:'6ab192de78b4bc82c0306237_IMG_6915.jpg',a:'Stainless steel gutter guard installed along a tile roof edge'},
fortify:{u:'6ab1955e65da71e47bd4365e_IMG_6716.PNG',a:'Phos-Chek FORTIFY fire retardant applied to exposed eave wood',pos:'50% 38%'},
ff88:{u:'6ab195f1b985901b08bb0c38_IMG_7237.jpg',a:'FireFree 88 intumescent coating applied to exterior wood'}
};
var S={
mesh:{n:'Wildfire Defense Mesh retrofit',i:'mesh',d:'WDM 98 (1/16") or WDM 75 (1/8") mesh fitted behind your existing vent covers. The cost-effective fix that keeps the airflow your home needs.',h:'/ember-resistant-vents'},
meshF:{n:'Wildfire Defense Mesh retrofit',i:'install',d:'Foundation and crawl space vents get the same WDM 98 or WDM 75 mesh, cut and sealed to each opening so required ventilation is maintained.',h:'/ember-resistant-vents'},
brand:{n:'Brandguard vent replacement',i:'roofvent',d:'Listed ember- and flame-resistant vents for the most exposed openings, damaged or non-compliant vents, and very high fire hazard zones.',h:'/ember-resistant-vents'},
eave:{n:'Boxed eave enclosure',i:'eave',d:'Open rafter bays closed in with non-combustible James Hardie fiber-cement soffit, removing the pockets where heat and embers collect.',h:'/eave-enclosures'},
ff88:{n:'FireFree 88 + FfE topcoat',i:'ff88',d:'An intumescent coating that swells into an insulating char under high heat, shielding the wood beneath. Finishes like standard exterior paint.',h:'/services'},
fortify:{n:'Phos-Chek FORTIFY',i:'fortify',d:'Long-term fire retardant from the same family used in wildland firefighting, applied to exposed wood such as eaves, framing, and fascia in a single visit.',h:'/fire-retardant-spray'},
fortifyV:{n:'Phos-Chek FORTIFY for landscaping',i:'fortify',d:'Long-term retardant applied to the plants you keep near the house so they are harder to ignite.',h:'/fire-retardant-spray'},
gutter:{n:'FireStorm stainless gutter guards',i:'gutter',d:'Stainless steel guards that keep leaves, needles, and bark out while water flows through. No fuel bed at the roof line.',h:'/ember-resistant-gutter-guards'},
deck:{n:'DeckGuard',d:'Fire-resistant coating for wood decks, fences, and attached wood structures, built to handle foot traffic, weather, and UV.',h:'/services'},
assess:{n:'Free Zone 0 assessment',d:'We map your first five feet and give you a clear list of what to clear, move, or replace. 30 to 45 minutes, at no cost.',h:'/free-assessment'}
};
var D=[
{t:"Attic & gable vents",th:["Embers"],
v:"Vents are open pathways into your attic. Wind-driven embers pass through standard 1/4\" screens and ignite insulation, stored items, and framing from the inside, often well after the fire front has passed.",
f:"Two options, sized to keep the attic ventilation your home requires:",s:['mesh','brand']},
{t:"Fascia, trim & exposed wood",th:["Flame contact","Radiant heat"],
v:"Wood fascia, trim, and siding sit where heat and flame concentrate. Radiant heat from burning vegetation or a neighboring structure can ignite them without flame ever touching the house.",
f:"We protect the wood you already have:",s:['ff88','fortify']},
{t:"Gutters & roof edge",th:["Embers"],
v:"Oak leaves, eucalyptus bark, and pine needles collect in gutters and become a fuel bed at the roof line. Embers that land there ignite the debris and put flame directly against the roof edge and fascia.",
f:"Keep the fuel out for good:",s:['gutter']},
{t:"Open eaves & soffits",th:["Embers","Radiant heat"],
v:"Open eaves trap rising heat and embers in the pockets between rafters, right where the wall meets the roof. Gaps and vents in the eave lead straight into the attic.",
f:"Three options, matched to your home:",s:['eave','ff88','fortify']},
{t:"Decks",th:["Embers","Flame contact"],
v:"Embers collect on deck boards and drop into the space underneath, where leaves, firewood, and stored items catch. A burning deck puts flame against your walls, doors, and windows.",
f:"Protect the deck, and clear what is stored underneath:",s:['deck']},
{t:"Foundation & crawl space vents",th:["Embers"],
v:"Foundation vents sit at ground level, next to mulch, leaves, and plants, exactly where embers pile up. Embers that get through can ignite the floor framing from below.",
f:"The same proven fixes as attic vents:",s:['meshF','brand']},
{t:"Zone 0: the first 5 feet",th:["Embers"],
v:"The first five feet around your home is where embers land and collect. Bark mulch, dry plants, wood trellises, and fencing touching the house act like a fuse to the walls, vents, and windows above.",
f:"Start with a plan, then treat what stays:",s:['assess','fortifyV']}
];
var panel=root.querySelector('.wwh3-panel'),chipsEl=root.querySelector('.wwh3-chips');
function tags(a){return '<div class="wwh3-tags">'+a.map(function(x){return '<span class="wwh3-tag '+TAG[x]+'">'+x+'</span>'}).join('')+'</div>'}
var DEF='<p class="wwh3-num">How wildfire gets in</p><h3 class="wwh3-ptitle">Most homes don\'t burn from a wall of flame.</h3><p>They ignite when embers, flame contact, and radiant heat find weak points, often well ahead of the fire front. Tap a numbered point, or any highlighted part of the house, to see each vulnerability and how we harden it.</p>'+tags(["Embers","Flame contact","Radiant heat"]);
function esc(x){return String(x).replace(/"/g,'&quot;')}
function sol(k){var o=S[k],im=o.i&&IMG[o.i];
 var pic=im?'<span class="wwh3-sol-img'+(im.r?' rot':'')+'"><img src="'+IB+im.u+'" alt="'+esc(im.a)+'" loading="lazy" decoding="async"'+(im.pos?' style="object-position:'+im.pos+'"':'')+'></span>':'';
 return '<a class="wwh3-sol'+(im?'':' noimg')+'" href="'+o.h+'">'+pic+'<span class="wwh3-sol-txt"><b>'+o.n+'</b><span>'+o.d+'</span><em>Learn more &rarr;</em></span></a>'}
function tpl(d,i){return '<p class="wwh3-num">'+(i+1)+' of '+D.length+'</p><h3 class="wwh3-ptitle">'+d.t+'</h3>'+tags(d.th)+'<p class="wwh3-label">The vulnerability</p><p>'+d.v+'</p><p class="wwh3-label fix">How we solve it</p><p class="wwh3-fix-intro">'+d.f+'</p><div class="wwh3-sols">'+d.s.map(sol).join('')+'</div>'}
// warm the image cache so cards appear instantly on hover
setTimeout(function(){for(var k in IMG){var im=new Image();im.decoding='async';im.src=IB+IMG[k].u}},2500);
var chips=[],api={D:D,pinned:null,cur:-2,ls:[]};
D.forEach(function(d,i){var c=document.createElement('button');c.type='button';c.className='wwh3-chip';c.setAttribute('role','listitem');c.innerHTML='<span>'+(i+1)+'</span>'+d.t;c.addEventListener('click',function(){api.pin(i)});chipsEl.appendChild(c);chips.push(c)});
api.set=function(i,fly){if(i!==api.cur){api.cur=i;for(var k=0;k<D.length;k++){chips[k].classList.toggle('is-active',k===i);chips[k].setAttribute('aria-pressed',k===i)}panel.innerHTML=i==null?DEF:tpl(D[i],i)}api.ls.forEach(function(f){f(i,!!fly)})};
api.pin=function(i){api.pinned=i;api.set(i,true)};
root._wwh=api;api.set(null);

return root._wwh;}
