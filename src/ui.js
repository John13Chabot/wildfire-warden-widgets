export function initUI(root){


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

return root._wwh;}
