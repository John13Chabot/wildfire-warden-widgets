import { IB, IMG } from './imgs.js';
// Homepage: scroll-through 3D vulnerability map. Each card scrolling past the middle of the screen flies the model
// to that weak point; the dots and the pins on the house jump to a card.
export function initUI(root){

var TAG={'Embers':'','Flame contact':'flame','Radiant heat':'heat'};
var FA='/free-assessment';
var S={
mesh:{n:'Wildfire Defense Mesh retrofit',i:'mesh',d:'WDM 98 (1/16") or WDM 75 (1/8") mesh fitted behind your existing vent covers. The cost-effective fix that keeps the airflow your home needs.',h:'/ember-resistant-vents'},
meshF:{n:'Wildfire Defense Mesh retrofit',i:'meshFd',d:'Foundation and crawl space vents get the same WDM 98 or WDM 75 mesh, cut and sealed to each opening so required ventilation is maintained.',h:'/ember-resistant-vents'},
brand:{n:'Brandguard vent replacement',i:'bgGable',d:'Listed ember- and flame-resistant vents for the most exposed openings, damaged or non-compliant vents, and very high fire hazard zones.',h:'/ember-resistant-vents'},
brandF:{n:'Brandguard foundation vents',i:'bgFound',d:'Listed ember- and flame-resistant vents for the most exposed openings, damaged or non-compliant vents, and very high fire hazard zones.',h:'/ember-resistant-vents'},
eave:{n:'Boxed eave enclosure',i:'eave',d:'Open rafter bays closed in with non-combustible James Hardie fiber-cement soffit, removing the pockets where heat and embers collect.',h:'/eave-enclosures'},
ff88:{n:'FireFree 88 + FfE topcoat',i:'ff88',d:'An intumescent coating that swells into an insulating char under high heat, shielding the wood beneath. Finishes like standard exterior paint.',h:'/services#firefree-88'},
fortify:{n:'Phos-Chek FORTIFY',i:'fortify',d:'Long-term fire retardant from the same family used in wildland firefighting, applied to exposed wood such as eaves, framing, and fascia in a single visit.',h:'/fire-retardant-spray'},
fortifyV:{n:'Phos-Chek FORTIFY for landscaping',i:'fortify',d:'Long-term retardant applied to the plants you keep near the house so they are harder to ignite.',h:'/fire-retardant-spray'},
gutter:{n:'FireStorm stainless gutter guards',i:'gutter',d:'Stainless steel guards that keep leaves, needles, and bark out while water flows through. No fuel bed at the roof line.',h:'/ember-resistant-gutter-guards'},
deck:{n:'DeckGuard',d:'Fire-resistant coating for wood decks, fences, and attached wood structures, built to handle foot traffic, weather, and UV.',h:'/services#deckguard'},
assess:{n:'Free Zone 0 assessment',d:'We map your first five feet and give you a clear list of what to clear, move, or replace. 30 to 45 minutes, at no cost.',h:FA},
bird:{n:'Bird stops & roof-edge closures',d:'Non-combustible closures fitted into the open ends of the tile and the gaps along the roof edge, so embers and debris can\'t get under the roof covering.',h:FA},
win:{n:'Dual-pane tempered windows',d:'Replacement windows with tempered glass, which holds up far longer to radiant heat and flame than single-pane glass and keeps fire out of the rooms behind it.',h:FA},
gdoor:{n:'Garage door seals',d:'Bottom seals plus side and top weatherstripping that close the gaps around your garage doors, so embers can\'t blow in onto what is stored inside.',h:FA},
fence:{n:'Non-combustible fence section',d:'We replace the first 5 feet of wood fence where it meets the house with metal or fiber cement, so a burning fence can\'t carry fire to your walls.',h:FA}
};
// card order = top of the house down to the yard (main.js sorts the 3D points by ORDER)
var D=[
{k:'roof',t:"Roof edge & open tile ends",th:["Embers"],
v:"Tile roofs leave open ends along the eaves and ridge. Embers, leaves, and nesting material blow into those gaps and rest right on the wood roof deck under the tile.",
f:"Close the openings at the roof edge:",s:['bird']},
{k:'gutter',t:"Gutters",th:["Embers"],
v:"Oak leaves, eucalyptus bark, and pine needles collect in gutters and become a fuel bed at the roof line. Embers that land there ignite the debris and put flame directly against the roof edge and fascia.",
f:"Keep the fuel out for good:",s:['gutter']},
{k:'attic',t:"Attic & gable vents",th:["Embers"],
v:"Vents are open pathways into your attic. Wind-driven embers pass through standard 1/4\" screens and ignite insulation, stored items, and framing from the inside, often well after the fire front has passed.",
f:"Two options, sized to keep the attic ventilation your home requires:",s:['mesh','brand']},
{k:'eaves',t:"Open eaves & soffits",th:["Embers","Radiant heat"],
v:"Open eaves trap rising heat and embers in the pockets between rafters, right where the wall meets the roof. Gaps and vents in the eave lead straight into the attic.",
f:"Three options, matched to your home:",s:['eave','ff88','fortify']},
{k:'wood',t:"Fascia, trim & exposed wood",th:["Flame contact","Radiant heat"],
v:"Wood fascia, trim, and siding sit where heat and flame concentrate. Radiant heat from burning vegetation or a neighboring structure can ignite them without flame ever touching the house.",
f:"We protect the wood you already have:",s:['ff88','fortify']},
{k:'windows',t:"Windows",th:["Radiant heat","Flame contact"],
v:"Single-pane glass cracks and falls out under the heat of burning plants, a fence, or a neighbor's home. Once the glass is gone, embers and flame go straight in and ignite curtains and furniture.",
f:"Upgrade the glass that faces the most heat:",s:['win']},
{k:'walls',t:"Garage doors",th:["Embers"],
v:"Gaps around garage doors let wind-driven embers in at floor level, right where boxes, rags, and fuel are stored. A garage fire reaches the rest of the home through the shared wall and the attic.",
f:"Close the gaps:",s:['gdoor']},
{k:'deck',t:"Decks",th:["Embers","Flame contact"],
v:"Embers collect on deck boards and drop into the space underneath, where leaves, firewood, and stored items catch. A burning deck puts flame against your walls, doors, and windows.",
f:"Protect the deck, and clear what is stored underneath:",s:['deck']},
{k:'found',t:"Foundation & crawl space vents",th:["Embers"],
v:"Foundation vents sit at ground level, next to mulch, leaves, and plants, exactly where embers pile up. Embers that get through ignite debris in the crawl space and the floor framing above it.",
f:"The same proven fixes as attic vents:",s:['meshF','brandF']},
{k:'zone',t:"Zone 0: the first 5 feet",th:["Embers"],
v:"The first five feet around your home is where embers land and collect. Bark mulch, dry plants, and wood trellises touching the house act like a fuse to the walls, vents, and windows above.",
f:"Start with a plan, then treat what stays:",s:['assess','fortifyV']},
{k:'fence',t:"Wood fence at the wall",th:["Flame contact","Radiant heat"],
v:"A wood fence that connects to the house works like a fuse. Once embers ignite it, flame runs along the fence straight to your siding, eaves, and windows.",
f:"Break the fuse where it meets the house:",s:['fence']}
];
var N=D.length,list=root.querySelector('.wwh3-list'),dotsEl=root.querySelector('.wwh3-dots'),now=root.querySelector('.wwh3-now'),bar=root.querySelector('.wwh3-bar i');
function tags(a){return '<div class="wwh3-tags">'+a.map(function(x){return '<span class="wwh3-tag '+TAG[x]+'">'+x+'</span>'}).join('')+'</div>'}
function esc(x){return String(x).replace(/"/g,'&quot;')}
function sol(k){var o=S[k],im=o.i&&IMG[o.i];
 var pic=im?'<span class="wwh3-sol-img'+(im.r?' rot':'')+'"><img src="'+IB+im.u+'" alt="'+esc(im.a)+'" loading="lazy" decoding="async"'+(im.pos?' style="object-position:'+im.pos+'"':'')+'></span>':'';
 return '<a class="wwh3-sol'+(im?'':' noimg')+'" href="'+o.h+'">'+pic+'<span class="wwh3-sol-txt"><b>'+o.n+'</b><span>'+o.d+'</span><em>'+(o.h===FA?'Ask in your free assessment':'Learn more')+' &rarr;</em></span></a>'}
var INTRO='<article class="wwh3-card intro" data-i="-1"><p class="wwh3-num">How wildfire gets in</p><h3 class="wwh3-ptitle">Most homes don\'t burn from a wall of flame.</h3><p>They ignite when embers, flame contact, and radiant heat find weak points, often well ahead of the fire front. Scroll to walk the house from the roof edge down to the yard.</p>'+tags(["Embers","Flame contact","Radiant heat"])+'<p class="wwh3-down" aria-hidden="true">Scroll &darr;</p></article>';
function card(d,i){return '<article class="wwh3-card" data-i="'+i+'" id="weak-'+d.k+'"><p class="wwh3-num">'+(i+1)+' of '+N+'</p><h3 class="wwh3-ptitle">'+d.t+'</h3>'+tags(d.th)+'<p class="wwh3-label">The vulnerability</p><p>'+d.v+'</p><p class="wwh3-label fix">How we solve it</p><p class="wwh3-fix-intro">'+d.f+'</p><div class="wwh3-sols">'+d.s.map(sol).join('')+'</div></article>'}
list.innerHTML=INTRO+D.map(card).join('');
var cards=[].slice.call(list.querySelectorAll('.wwh3-card:not(.intro)')),intro=list.querySelector('.intro');
var dots=D.map(function(d,i){var b=document.createElement('button');b.type='button';b.className='wwh3-dot';b.innerHTML='<span>'+(i+1)+'</span><em>'+d.t+'</em>';b.setAttribute('aria-label',(i+1)+': '+d.t);b.addEventListener('click',function(){api.goTo(i)});dotsEl.appendChild(b);return b});

var api={D:D,ORDER:D.map(function(d){return d.k}),pinned:null,cur:-2,ls:[]};
api.set=function(i,fly){if(i!==api.cur){api.cur=i;
  cards.forEach(function(c,j){c.classList.toggle('is-active',j===i)});intro.classList.toggle('is-active',i==null);
  dots.forEach(function(b,j){b.classList.toggle('is-active',j===i);b.classList.toggle('is-done',i!=null&&j<i);b.setAttribute('aria-current',j===i?'step':'false')});
  if(now){now.textContent=i==null?'':(i+1)+' / '+N+'  '+D[i].t;now.classList.toggle('on',i!=null)}
  root.classList.toggle('has-sel',i!=null);if(bar)bar.style.width=(i==null?0:(i+1)/N*100)+'%'}
 api.ls.forEach(function(f){f(i,!!fly)})};
api.pin=function(i){api.pinned=i;api.set(i,true)};
// scroll a card into the activation band (middle of the screen; below the sticky model on phones)
var MOB=matchMedia('(max-width:900px)');
function band(){return MOB.matches?0.62:0.42}
api.goTo=function(i){var el=i==null?intro:cards[i];if(!el)return;var b=el.getBoundingClientRect();
 var y=scrollY+b.top-innerHeight*band()+Math.min(b.height*0.35,120);
 scrollTo({top:Math.max(0,y),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})};
// the card crossing the activation line is the selected weak point
function pick(){var line=innerHeight*band(),best=null,bd=1e9;
 [intro].concat(cards).forEach(function(c){var b=c.getBoundingClientRect();if(b.bottom<0||b.top>innerHeight)return;var d=b.top<=line&&b.bottom>=line?0:Math.min(Math.abs(b.top-line),Math.abs(b.bottom-line));if(d<bd){bd=d;best=c}});
 if(!best)return;var i=+best.dataset.i;i=i<0?null:i;if(i!==api.pinned)api.pin(i)}
var raf=0;function onScroll(){if(!raf)raf=requestAnimationFrame(function(){raf=0;pick()})}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);
// warm the image cache so cards are ready as they scroll in
setTimeout(function(){for(var k in IMG){var im=new Image();im.decoding='async';im.src=IB+IMG[k].u}},2500);
root._wwh=api;api.set(null);
// deep link: /#weak-attic etc.
var h=(location.hash||'').replace('#weak-','');var hi=api.ORDER.indexOf(h);if(hi>=0)setTimeout(function(){api.goTo(hi)},400);
return api;}
