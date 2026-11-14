import { IB, IMG } from './imgs.js';

// Services page: scroll-linked 3D model. Each service lights up every spot on the house it protects.
const TAG = { 'Embers': '', 'Flame contact': 'flame', 'Radiant heat': 'heat' };
const SPOT = { attic: 'Attic & gable vents', wood: 'Fascia, trim & exposed wood', gutter: 'Gutters & roof edge', eaves: 'Open eaves & soffits', deck: 'Decks', found: 'Foundation & crawl space vents', zone: 'Zone 0: the first 5 feet' };
const ORDER = ['attic', 'wood', 'gutter', 'eaves', 'deck', 'found', 'zone'];

export const SV = [
  {
    id: 'vents', n: 'Ember-Resistant Vents', th: ['Embers'], keys: ['attic', 'found'],
    view: { t: [-0.4, 3.3, 4.2], az: 0.02, el: 0.12, d: 25 },
    d: 'Vents are the easiest way for wind-driven embers to get inside a home. We offer two tiers, matched to your exposure and the condition of your vents.',
    opts: [
      ['Wildfire Defense Mesh retrofit', 'WDM 98 (1/16") or WDM 75 (1/8") mesh fitted behind your existing vent covers. The cost-effective fix that keeps the airflow your home needs.'],
      ['Brandguard vent replacement', 'Listed ember- and flame-resistant vents for the most exposed openings, damaged or non-compliant vents, and very high fire hazard zones.'],
    ],
    extra: 'Low-profile roof vents can also get an intumescent coating on the exposed plywood beneath them.',
    imgs: ['mesh', 'meshFd', 'bgGable', 'bgFound'], prod: ['Wildfire Defense Mesh', 'Brandguard', 'Firetect WT-102'],
    cta: ['Vent Options & Free Quote', '/ember-resistant-vents'],
  },
  {
    id: 'eaves', n: 'Boxed Eaves', th: ['Embers', 'Radiant heat'], keys: ['eaves'],
    view: { t: [11, 3.3, 3], az: 0.42, el: 0.05, d: 13 },
    d: 'Open eaves trap rising heat and embers in the pockets between rafters, right where the wall meets the roof. We enclose them with non-combustible HardieSoffit fiber-cement panels, closing the pathway into the roof structure.',
    imgs: ['eave'], prod: ['James Hardie HardieSoffit'],
    cta: ['Eave Enclosures & Free Quote', '/eave-enclosures'],
  },
  {
    id: 'gutters', n: 'Gutter Guards', th: ['Embers'], keys: ['gutter'],
    view: { t: [10, 3.6, 1], az: 0.32, el: 0.38, d: 19 },
    d: 'Leaves, needles, and bark collect in gutters and become a fuel bed at the roof line. Stainless steel, ember-blocking guards keep the debris out while water flows through, so there is nothing for embers to ignite. Year-round protection with less upkeep.',
    imgs: ['gutter'], prod: ['FireStorm stainless steel gutter guards'],
    cta: ['Gutter Guards & Free Quote', '/ember-resistant-gutter-guards'],
  },
  {
    id: 'fortify', n: 'Phos-Chek FORTIFY', th: ['Flame contact', 'Radiant heat'], keys: ['eaves', 'wood', 'zone'],
    view: { t: [4.5, 3.0, 3.2], az: 0.22, el: 0.2, d: 31 },
    d: 'A long-term fire retardant from the same product family used in wildland firefighting. We apply it in a single visit to the landscaping near your home and to exposed structural wood such as eaves, rafter tails, and fascia.',
    imgs: ['fortify'], prod: ['Phos-Chek FORTIFY'],
    cta: ['FORTIFY Spray & Free Quote', '/fire-retardant-spray'],
  },
  {
    id: 'firefree-88', n: 'FireFree 88 + FfE Topcoat', th: ['Flame contact'], keys: ['wood', 'eaves'],
    view: { t: [5, 4.4, 4], az: 0.28, el: 0.14, d: 26 },
    d: 'A two-layer coating system for wood and wood-composite siding, trim, and fascia. The intumescent base swells into an insulating char under high heat, and the topcoat finishes like standard exterior paint, so you keep the wood you already have.',
    imgs: ['ff88'], prod: ['FireFree 88', 'FfE Topcoat'],
    cta: ['Get a Free Assessment & Quote', '/free-assessment'],
  },
  {
    id: 'deckguard', n: 'DeckGuard', th: ['Embers', 'Flame contact'], keys: ['deck'],
    view: { t: [-7.5, -0.3, 0], az: -1.15, el: 0.22, d: 17 },
    d: 'Embers collect on deck boards and drop into the space underneath. DeckGuard is a fire-resistant coating for wood decks, fences, and connected wood structures, built to hold up to foot traffic, weather, and UV.',
    imgs: [], prod: ['DeckGuard'],
    cta: ['Get a Free Assessment & Quote', '/free-assessment'],
  },
];

const esc = (x) => String(x).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function card(s, i) {
  const tags = '<div class="wwh3-tags">' + s.th.map((x) => '<span class="wwh3-tag ' + TAG[x] + '">' + x + '</span>').join('') + '</div>';
  const where = '<ul class="wwh3s-where" aria-label="Where it protects">' + s.keys.map((k) => '<li><button type="button" data-k="' + k + '">' + SPOT[k] + '</button></li>').join('') + '</ul>';
  const opts = s.opts ? '<div class="wwh3s-opts">' + s.opts.map((o) => '<div class="wwh3s-opt"><b>' + o[0] + '</b>' + esc(o[1]) + '</div>').join('') + '</div>' : '';
  const gal = s.imgs.length ? '<div class="wwh3s-gal' + (s.imgs.length === 1 ? ' one' : '') + '">' + s.imgs.map((k) => { const m = IMG[k]; return '<figure><img src="' + IB + m.u + '" alt="' + esc(m.a) + '" loading="lazy" decoding="async"' + (m.pos ? ' style="object-position:' + m.pos + '"' : '') + '><figcaption>' + m.c + '</figcaption></figure>'; }).join('') + '</div>' : '';
  return '<article class="wwh3s-svc" id="' + s.id + '" data-i="' + i + '">' +
    '<p class="wwh3-num">' + String(i + 1).padStart(2, '0') + ' / ' + String(SV.length).padStart(2, '0') + '</p>' +
    '<h3>' + s.n + '</h3>' + tags + '<p>' + esc(s.d) + '</p>' + opts + (s.extra ? '<p>' + esc(s.extra) + '</p>' : '') +
    '<p class="wwh3-label">Where it protects</p>' + where + gal +
    '<ul class="wwh3s-prod">' + s.prod.map((p) => '<li>' + p + '</li>').join('') + '</ul>' +
    '<a class="wwh3s-cta" href="' + s.cta[1] + '">' + s.cta[0] + ' &rarr;</a></article>';
}

export function initServices(root) {
  const list = root.querySelector('.wwh3s-list'), now = root.querySelector('.wwh3s-now');
  list.innerHTML = SV.map(card).join('');
  const arts = [...list.querySelectorAll('.wwh3s-svc')];
  const api = { D: ORDER.map((k) => ({ t: SPOT[k] })), pinned: null, cur: -2, ls: [] };
  api.sel = (i) => (i == null ? null : { keys: SV[i].keys, view: SV[i].view });
  api.set = (i, fly) => {
    if (i !== api.cur) {
      api.cur = i;
      arts.forEach((a, j) => a.classList.toggle('is-active', j === i));
      if (now) { now.textContent = i == null ? '' : SV[i].n; now.classList.toggle('on', i != null); }
    }
    api.ls.forEach((f) => f(i, !!fly));
  };
  api.pin = (i) => { api.pinned = i; api.set(i, true); };
  api.pickKey = (k) => { const i = SV.findIndex((s) => s.keys.includes(k)); if (i >= 0) arts[i].scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  api.focusKey = null; // set by engine: fly to a single spot

  // "Where it protects" chips fly the camera to that one spot
  list.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-k]'); if (!b || !api.focusKey) return;
    const i = +b.closest('.wwh3s-svc').dataset.i; if (i !== api.cur) api.pin(i);
    api.focusKey(b.dataset.k);
  });

  // scroll drives the selection: the card crossing the upper-middle of the viewport is active
  let pend = null;
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) pend = +e.target.dataset.i; });
    if (pend != null && pend !== api.cur) api.pin(pend);
  }, { rootMargin: '-35% 0px -55% 0px' });
  arts.forEach((a) => io.observe(a));

  api.set(null);
  // deep link: /services#eaves etc.
  const h = (location.hash || '').slice(1);
  const hi = SV.findIndex((s) => s.id === h);
  if (hi >= 0) setTimeout(() => { arts[hi].scrollIntoView({ block: 'start' }); api.pin(hi); }, 300);
  root._wwh = api;
  return api;
}
