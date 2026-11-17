import { EXT, UPG, WIND, PLAY_END, timeline, simulate } from './fire.js';
import { riskAsync } from './playback.js';

const PRESETS = [
  { n: 'No upgrades', up: [] },
  { n: 'Vents only', up: ['attic', 'found'] },
  { n: 'Fully hardened', up: EXT.slice() },
];
const fmt = (m) => { const h = Math.floor(m / 60), mm = Math.floor(m % 60); return h + ':' + String(mm).padStart(2, '0'); };

const CU = { lead: 1, after: 3, sec: 5 };
const INSIDE = new Set(['attic', 'windows', 'walls', 'found']);   // close-ups with a cut-away view get more screen time
// one quiet caption per house during a close-up: [typical, upgraded]
const CAP = { attic: ['Attic vent · ¼″ screen', 'Ember-resistant mesh'], wood: ['Bare wood trim', 'Fire-resistant coating'], gutter: ['Leaves in the gutter', 'Gutter guard'], eaves: ['Open eaves', 'Boxed eaves'], deck: ['Untreated wood deck', 'DeckGuard coating'], found: ['Crawl-space vent · ¼″ screen', 'Ember-resistant mesh'], zone: ['Plants & mulch at the wall', 'Clear Zone 0'], roof: ['Open tile ends', 'Bird stops'], windows: ['Single-pane glass', 'Dual-pane tempered glass'], walls: ['Gaps around the garage doors', 'Sealed garage doors'], fence: ['Wood fence at the wall', 'Metal section at the wall'] };   // close-up: sim minutes before/after the moment, real seconds it takes
export function initFire(root) {
  const $ = (s) => root.querySelector(s);
  const TOUR = root.dataset.tour != null;
  const st = { up: new Set(TOUR ? [] : EXT), wind: 'santaana', cmp: !TOUR, cov: 0.6, nb: true, risk: [null, null], T: 0, play: false, ran: false, sims: [], tour: TOUR ? { i: -1 } : null };
  if (TOUR) { root.classList.add('is-tour'); const sub = root.querySelector('.wwh3f-sub'); if (sub) sub.textContent = 'A typical home with no upgrades in a Santa Ana wind, with neighbors 20 to 30 feet away. Watch the fire arrive, then see what happens at each of the eleven weak points.'; }
  const api = { D: EXT.map((k) => ({ t: UPG[k].n })), ls: [], cur: null, pinned: null, set() {}, pin() {}, pickKey() {}, sel: () => null };

  let TL = timeline(st.wind);
  const segs = () => { $('.wwh3f-segs').innerHTML = TL.PHASES.map(([a, b, n]) => '<span style="width:' + ((TL.toSec(b) - TL.toSec(a)) / PLAY_END * 100).toFixed(2) + '%">' + n + '</span>').join(''); };
  segs();
  // presets, upgrades, wind
  const pre = $('.wwh3f-presets');
  pre.innerHTML = PRESETS.map((p, i) => '<button type="button" data-i="' + i + '">' + p.n + '</button>').join('');
  const ups = $('.wwh3f-ups');
  ups.innerHTML = EXT.map((k, i) => '<button type="button" class="wwh3f-up" data-k="' + k + '" aria-pressed="false" title="' + UPG[k].fix + '"><i>' + (i + 1) + '</i>' + UPG[k].n + '</button>').join('');
  const wind = $('.wwh3f-wind');
  wind.innerHTML = Object.keys(WIND).map((k) => '<button type="button" role="radio" data-w="' + k + '" aria-checked="false">' + WIND[k].n + '</button>').join('');
  const covEl = $('.wwh3f-cov'), covIn = covEl.querySelector('input'), covOut = covEl.querySelector('b'), nbBox = $('.wwh3f-nb input'), riskEl = [...root.querySelectorAll('.wwh3f-risk')];
  const cmpBox = $('.wwh3f-cmp input'), range = $('.wwh3f-range'), clock = $('.wwh3f-clock'), playBtn = $('.wwh3f-play'), phaseEl = $('.wwh3f-phase'), res = $('.wwh3f-res'), labels = $('.wwh3f-labels');

  function recompute() {
    const sec = TL.toSec(st.T); TL = timeline(st.wind); segs(); st.TL = TL; st.T = TL.toMin(sec);
    st.sims = [simulate(new Set(), st.wind, { cov: 0.6, nb: st.nb }), simulate(st.up, st.wind, { cov: st.cov, nb: st.nb })];
    covEl.classList.toggle('off', st.up.has('zone')); covOut.textContent = (st.up.has('zone') ? 0 : Math.round(st.cov * 100)) + '%'; covIn.value = st.up.has('zone') ? 0 : Math.round(st.cov * 100);
    // chance of serious damage or loss across many versions of this fire (computed in the background)
    (st.cancel || []).forEach((c) => c()); st.risk = [null, null]; riskEl.forEach((e) => (e.innerHTML = '<span style="opacity:.7">Estimating risk…</span>'));
    st.cancel = [0, 1].map((s) => riskAsync(s ? st.up : new Set(), st.wind, { cov: s ? st.cov : 0.6, nb: st.nb }, (r) => { st.risk[s] = r; riskEl[s].innerHTML = 'Chance of loss <b>' + Math.round(r.p * 100) + '%</b> <span style="opacity:.75">(' + Math.round(r.lo * 100) + '&ndash;' + Math.round(r.hi * 100) + '%)</span>'; if (!res.hidden) results(); }));
    // close-ups: one slow-motion slot per weak point the fire reaches (on either house), in the order it reaches them
    const sides = st.cmp ? st.sims : [st.sims[1]], hit = [];
    // a close-up sits on the moment it catches (if it does on either house), otherwise on the moment it is stopped
    for (const k of EXT) { let ti = Infinity, ts = Infinity; for (const S of sides) { ti = Math.min(ti, S.ign[k] ?? Infinity); ts = Math.min(ts, S.stop[k] ?? Infinity); } const t = ti < Infinity ? ti : ts; if (t < Infinity) hit.push([t, k]); }
    hit.sort((a, b) => a[0] - b[0]);
    st.slots = []; let end = -Infinity;
    // each close-up stays centred on its own moment: clustered events share the time between them, each still gets CU.sec on screen
    hit.forEach(([t, k], i) => { const nx = hit[i + 1]; const a = Math.max(t - CU.lead, end); let b = t + CU.after; if (nx) b = Math.min(b, Math.max(t + 0.5, (t + nx[0]) / 2)); b = Math.max(b, a + 0.4); st.slots.push({ k, t, a, b, sec: INSIDE.has(k) ? 7 : CU.sec }); end = b; });
    ups.querySelectorAll('.wwh3f-up').forEach((b) => b.setAttribute('aria-pressed', st.up.has(b.dataset.k)));
    wind.querySelectorAll('button').forEach((b) => b.setAttribute('aria-checked', b.dataset.w === st.wind));
    pre.querySelectorAll('button').forEach((b) => { const p = PRESETS[+b.dataset.i].up; b.classList.toggle('on', p.length === st.up.size && p.every((k) => st.up.has(k))); });
    root.classList.toggle('is-cmp', st.cmp);
    if (st.T >= TL.TMAX) results();
  }
  pre.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; st.up = new Set(PRESETS[+b.dataset.i].up); recompute(); });
  ups.addEventListener('click', (e) => { const b = e.target.closest('.wwh3f-up'); if (!b) return; const k = b.dataset.k; st.up.has(k) ? st.up.delete(k) : st.up.add(k); if (k === 'zone' && !st.up.has(k) && st.cov === 0) st.cov = 0.6; recompute(); });
  wind.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; st.wind = b.dataset.w; recompute(); });
  cmpBox.addEventListener('change', () => { st.cmp = cmpBox.checked; recompute(); api.onLayout && api.onLayout(); });
  covIn.addEventListener('input', () => { st.cov = +covIn.value / 100; if (st.cov === 0) st.up.add('zone'); else st.up.delete('zone'); recompute(); });
  nbBox.addEventListener('change', () => { st.nb = nbBox.checked; recompute(); });

  // guided walkthrough (no upgrades): wide shot until the fire front arrives, then each weak point 1-7 in turn at the
  // moment the fire reaches it (each close-up replays its own moment in slow motion), then wide again for the outcome
  const TC = { lead: 1.5, after: 5, sec: 7 };
  function tourTick(raw) {
    const tr = st.tour, S = st.sims[1], d = Math.min(raw, 0.25);
    if (st.play && !document.hidden) {
      if (tr.i < 0) {
        const s = Math.min(PLAY_END, TL.toSec(st.T) + d); st.T = TL.toMin(s);
        if (st.T >= TL.tF + 1) { tr.i = 0; tr.end = st.T; startItem(); }
      } else if (tr.i < EXT.length) {
        st.T += d * (TC.lead + TC.after) / (INSIDE.has(st.focusKey) ? TC.sec + 2 : TC.sec);
        if (st.T >= tr.b) { tr.end = Math.max(tr.end, st.T); tr.i++; if (tr.i < EXT.length) startItem(); else { st.T = tr.end; st.focusKey = null; } }
      } else {
        const s = Math.min(PLAY_END, TL.toSec(st.T) + d * 1.4); st.T = TL.toMin(s);
        if (s >= PLAY_END) { st.T = TL.TMAX; setPlay(false); results(); }
      }
    }
    st.cut = tr.i >= 0 && tr.i < EXT.length && st.focusKey ? { k: st.focusKey, p: (st.T - (tr.b - TC.after - TC.lead)) / (TC.lead + TC.after), t: tr.b - TC.after } : null;
    range.value = Math.round(TL.toSec(st.T) / PLAY_END * 1000);
    clock.textContent = fmt(st.T) + ' hr';
    const ph = TL.PHASES.find(([a, b]) => st.T >= a && st.T < b);
    phaseEl.textContent = st.focusKey ? (EXT.indexOf(st.focusKey) + 1) + ' · ' + UPG[st.focusKey].n : ph ? ph[2] : 'Hours later';
    phaseEl.classList.toggle('on', true);
    function startItem() {
      const k = EXT[tr.i], t = S.ign[k] ?? TL.tF + 2;
      st.focusKey = k; tr.b = t + TC.after; st.T = Math.max(0, t - TC.lead);
    }
  }
  const setPlay = (p) => { st.play = p; playBtn.innerHTML = p ? '&#10074;&#10074;' : '&#9654;'; playBtn.setAttribute('aria-label', p ? 'Pause' : 'Play'); };
  const run = () => { if (st.T >= TL.TMAX) { st.T = 0; res.hidden = true; if (st.tour) st.tour.i = -1; } if (st.T === 0 && api.onRun) api.onRun(); st.ran = true; root.classList.add('is-run'); setPlay(true); };
  $('.wwh3f-go').addEventListener('click', run);
  playBtn.addEventListener('click', () => (st.play ? setPlay(false) : run()));
  // "See how this works" links (href ending in #see-how-it-works) scroll here and start the walkthrough
  if (TOUR) {
    let ready = false; const pend = { v: false };
    const go = () => { if (st.ran && st.play) return; if (!ready) { pend.v = true; return; } setTimeout(run, 700); };
    api.ready = () => { ready = true; if (pend.v) { pend.v = false; setTimeout(run, 400); } };
    document.addEventListener('click', (e) => { const a = e.target.closest && e.target.closest('a[href$="#see-how-it-works"]'); if (a) go(); });
    if (location.hash === '#see-how-it-works') go();
  }
  range.addEventListener('input', () => { if (st.tour) { st.tour.i = EXT.length; st.focusKey = null; } st.ran = true; root.classList.add('is-run'); setPlay(false); st.T = TL.toMin(+range.value / 1000 * PLAY_END); res.hidden = st.T < TL.TMAX; if (st.T >= TL.TMAX) results(); });

  function results() {
    const card = (S, title, up, side) => {
      const ext = S.ev.filter((e) => e.kind === 'ign' && EXT.includes(e.k));
      const inner = S.ev.filter((e) => e.kind === 'ign' && !EXT.includes(e.k));
      const stops = S.ev.filter((e) => e.kind === 'stop');
      const cls = S.lost ? 'bad' : ext.length ? 'mid' : 'ok';
      const head = S.lost ? 'Fire got inside. In this scenario the home is lost.' : ext.length ? 'Exterior fires, but none reached inside the home.' : 'No ignition on the home in this scenario.';
      const list = S.ev.map((e) => '<li class="' + (e.kind === 'stop' ? 'v' : 'x') + '"><b>' + fmt(e.t) + '</b>' + e.text + '</li>').join('');
      const fixes = [...new Set(ext.map((e) => e.k))].filter((k) => !up.has(k));
      const fixHtml = fixes.length ? '<p class="wwh3-label">Fix these to stop it</p><div class="wwh3f-fix">' + fixes.map((k) => '<a href="' + (UPG[k].svc ? '/services#' + UPG[k].svc : '/free-assessment') + '">' + (EXT.indexOf(k) + 1) + '. ' + UPG[k].fix + ' &rarr;</a>').join('') + '</div>' : '';
      const R = st.risk[side], rk = R ? '<div class="wwh3f-rk">Chance of serious damage or loss across 1,000 versions of this fire: <b>' + Math.round(R.p * 100) + '%</b> (likely range ' + Math.round(R.lo * 100) + '&ndash;' + Math.round(R.hi * 100) + '%)</div>' : '';
      return '<div class="wwh3f-card ' + cls + '"><p class="wwh3-num">' + title + '</p>' + rk + '<h3>' + head.replace('In this scenario', 'In this run') + '</h3>' +
        '<p class="wwh3-label">What happened</p><ul>' + (list || '<li class="v"><b>&mdash;</b>Nothing ignited.</li>') + '</ul>' + fixHtml +
        (stops.length ? '' : '') + '<a class="wwh3s-cta" href="/free-assessment">Get My Free Home Assessment &rarr;</a></div>';
    };
    res.innerHTML = (st.cmp ? card(st.sims[0], 'Typical home', new Set(), 0) : '') + card(st.sims[1], st.cmp ? 'With your upgrades' : st.tour ? 'Typical home — no upgrades' : 'Your selection', st.up, 1);
    res.hidden = false;
  }

  // engine hooks
  const labPool = [], caps = [...root.querySelectorAll('.wwh3f-cap')];
  const lab = (i) => { if (!labPool[i]) { const d = document.createElement('div'); d.className = 'wwh3f-lab'; labels.appendChild(d); labPool[i] = d; } return labPool[i]; };
  api.fire = {
    st,
    tick(raw) {
      if (st.tour && st.ran) return tourTick(raw);
      const slot = st.ran ? st.slots.find((x) => st.T >= x.a && st.T < x.b) : null;
      st.focusKey = slot ? slot.k : null;
      st.cut = slot ? { k: slot.k, p: (st.T - slot.a) / (slot.b - slot.a), t: slot.t } : null;
      if (st.play && !document.hidden) {
        if (slot) st.T = Math.min(slot.b, st.T + Math.min(raw, 0.25) * (slot.b - slot.a) / slot.sec);   // slow motion during a close-up
        else {
          // jump straight into the next close-up rather than overshooting it at normal speed
          const s = Math.min(PLAY_END, TL.toSec(st.T) + Math.min(raw, 0.25)), next = st.slots.find((x) => x.a > st.T);
          st.T = Math.min(TL.toMin(s), next ? next.a : Infinity);
          if (s >= PLAY_END) { st.T = TL.TMAX; setPlay(false); results(); }
        }
      }
      range.value = Math.round(TL.toSec(st.T) / PLAY_END * 1000);
      clock.textContent = st.ran ? fmt(st.T) + ' hr' : '';
      const ph = TL.PHASES.find(([a, b]) => st.T >= a && st.T < b);
      phaseEl.textContent = slot ? 'Close-up: ' + UPG[slot.k].n : ph ? ph[2] : 'Hours later';
      phaseEl.classList.toggle('on', st.ran);
    },
    // project(sideIndex, [x,y,z]) -> [x,y] in stage px or null
    labels(project) {
      let n = 0;
      if (st.ran) {
        const sides = st.cmp ? [0, 1] : [1];
        for (const s of sides) {
          const S = st.sims[s];
          const live = st.cut ? [] : S.ev.filter((e) => st.T >= e.t && (e.k === 'struct' || (e.kind === 'nbr' && st.T <= e.t + 10))).slice(-1);
          for (const e of live) {
            const big = e.k === 'struct';
            const p = project(s, e.k);
            if (!p) continue;
            const d = lab(n++);
            d.className = 'wwh3f-lab ' + (e.kind === 'stop' ? 'stop' : big ? 'big' : '');
            d.textContent = e.text;
            d.style.left = p[0].toFixed(0) + 'px'; const off = s && root.classList.contains('is-vert') ? d.parentElement.clientHeight / 2 : 0; d.style.top = Math.max(p[1] - 10, off + 96).toFixed(0) + 'px'; d.style.opacity = 1; d.style.display = '';
          }
        }
      }
      for (let i = n; i < labPool.length; i++) labPool[i].style.display = 'none';
      caps.forEach((el, s) => {
        const c = st.cut, show = st.ran && c && (st.cmp || s === 1);
        if (!show) { el.style.opacity = 0; return; }
        const S = st.sims[s], up = s ? st.up : new Set(), ign = S.ign[c.k] != null && S.ign[c.k] <= c.t + 4, held = !ign && up.has(c.k);
        const txt = (up.has(c.k) ? CAP[c.k][1] : CAP[c.k][0]) + (c.p > 0.6 && ign ? ' <b class="x">&#10006;</b>' : c.p > 0.55 && held ? ' <b class="v">&#10003;</b>' : '');
        if (el._t !== txt) { el.innerHTML = txt; el._t = txt; }
        el.style.opacity = Math.min(1, Math.max(0, (c.p - 0.25) / 0.1)) * Math.min(1, Math.max(0, (1 - c.p) / 0.06));
      });
    },
  };
  recompute();
  root._wwh = api;
  return api;
}
