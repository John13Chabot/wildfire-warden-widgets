import { EXT, UPG, WIND, PHASES, TMAX, PLAY_END, simulate, toSec, toMin } from './fire.js';

const PRESETS = [
  { n: 'No upgrades', up: [] },
  { n: 'Vents only', up: ['attic', 'found'] },
  { n: 'Fully hardened', up: EXT.slice() },
];
const fmt = (m) => { const h = Math.floor(m / 60), mm = Math.floor(m % 60); return h + ':' + String(mm).padStart(2, '0'); };

export function initFire(root) {
  const $ = (s) => root.querySelector(s);
  const st = { up: new Set(EXT), wind: 'santaana', cmp: true, T: 0, play: false, ran: false, sims: [] };
  const api = { D: EXT.map((k) => ({ t: UPG[k].n })), ls: [], cur: null, pinned: null, set() {}, pin() {}, pickKey() {}, sel: () => null };

  // phase segments on the timeline
  $('.wwh3f-segs').innerHTML = PHASES.map(([a, b, n]) => '<span style="width:' + ((toSec(b) - toSec(a)) / PLAY_END * 100).toFixed(2) + '%">' + n + '</span>').join('');
  // presets, upgrades, wind
  const pre = $('.wwh3f-presets');
  pre.innerHTML = PRESETS.map((p, i) => '<button type="button" data-i="' + i + '">' + p.n + '</button>').join('');
  const ups = $('.wwh3f-ups');
  ups.innerHTML = EXT.map((k, i) => '<button type="button" class="wwh3f-up" data-k="' + k + '" aria-pressed="false" title="' + UPG[k].fix + '"><i>' + (i + 1) + '</i>' + UPG[k].n + '</button>').join('');
  const wind = $('.wwh3f-wind');
  wind.innerHTML = Object.keys(WIND).map((k) => '<button type="button" role="radio" data-w="' + k + '" aria-checked="false">' + WIND[k].n + '</button>').join('');
  const cmpBox = $('.wwh3f-cmp input'), range = $('.wwh3f-range'), clock = $('.wwh3f-clock'), playBtn = $('.wwh3f-play'), phaseEl = $('.wwh3f-phase'), res = $('.wwh3f-res'), labels = $('.wwh3f-labels');

  function recompute() {
    st.sims = [simulate(new Set(), st.wind), simulate(st.up, st.wind)];
    ups.querySelectorAll('.wwh3f-up').forEach((b) => b.setAttribute('aria-pressed', st.up.has(b.dataset.k)));
    wind.querySelectorAll('button').forEach((b) => b.setAttribute('aria-checked', b.dataset.w === st.wind));
    pre.querySelectorAll('button').forEach((b) => { const p = PRESETS[+b.dataset.i].up; b.classList.toggle('on', p.length === st.up.size && p.every((k) => st.up.has(k))); });
    root.classList.toggle('is-cmp', st.cmp);
    if (st.T >= TMAX) results();
  }
  pre.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; st.up = new Set(PRESETS[+b.dataset.i].up); recompute(); });
  ups.addEventListener('click', (e) => { const b = e.target.closest('.wwh3f-up'); if (!b) return; const k = b.dataset.k; st.up.has(k) ? st.up.delete(k) : st.up.add(k); recompute(); });
  wind.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; st.wind = b.dataset.w; recompute(); });
  cmpBox.addEventListener('change', () => { st.cmp = cmpBox.checked; recompute(); api.onLayout && api.onLayout(); });

  const setPlay = (p) => { st.play = p; playBtn.innerHTML = p ? '&#10074;&#10074;' : '&#9654;'; playBtn.setAttribute('aria-label', p ? 'Pause' : 'Play'); };
  const run = () => { if (st.T >= TMAX) { st.T = 0; res.hidden = true; } st.ran = true; root.classList.add('is-run'); setPlay(true); };
  $('.wwh3f-go').addEventListener('click', run);
  playBtn.addEventListener('click', () => (st.play ? setPlay(false) : run()));
  range.addEventListener('input', () => { st.ran = true; root.classList.add('is-run'); setPlay(false); st.T = toMin(+range.value / 1000 * PLAY_END); res.hidden = st.T < TMAX; if (st.T >= TMAX) results(); });

  function results() {
    const card = (S, title, up) => {
      const ext = S.ev.filter((e) => e.kind === 'ign' && EXT.includes(e.k));
      const inner = S.ev.filter((e) => e.kind === 'ign' && !EXT.includes(e.k));
      const stops = S.ev.filter((e) => e.kind === 'stop');
      const cls = S.lost ? 'bad' : ext.length ? 'mid' : 'ok';
      const head = S.lost ? 'Fire got inside. In this scenario the home is lost.' : ext.length ? 'Exterior fires, but none reached inside the home.' : 'No ignition on the home in this scenario.';
      const list = S.ev.map((e) => '<li class="' + (e.kind === 'ign' ? 'x' : 'v') + '"><b>' + fmt(e.t) + '</b>' + e.text + '</li>').join('');
      const fixes = [...new Set(ext.map((e) => e.k))].filter((k) => !up.has(k));
      const fixHtml = fixes.length ? '<p class="wwh3-label">Fix these to stop it</p><div class="wwh3f-fix">' + fixes.map((k) => '<a href="/services#' + UPG[k].svc + '">' + (EXT.indexOf(k) + 1) + '. ' + UPG[k].fix + ' &rarr;</a>').join('') + '</div>' : '';
      return '<div class="wwh3f-card ' + cls + '"><p class="wwh3-num">' + title + '</p><h3>' + head + '</h3>' +
        '<p class="wwh3-label">What happened</p><ul>' + (list || '<li class="v"><b>&mdash;</b>Nothing ignited.</li>') + '</ul>' + fixHtml +
        (stops.length ? '' : '') + '<a class="wwh3s-cta" href="/free-assessment">Get My Free Home Assessment &rarr;</a></div>';
    };
    res.innerHTML = (st.cmp ? card(st.sims[0], 'Typical home', new Set()) : '') + card(st.sims[1], st.cmp ? 'With your upgrades' : 'Your selection', st.up);
    res.hidden = false;
  }

  // engine hooks
  const labPool = [];
  const lab = (i) => { if (!labPool[i]) { const d = document.createElement('div'); d.className = 'wwh3f-lab'; labels.appendChild(d); labPool[i] = d; } return labPool[i]; };
  api.fire = {
    st,
    tick(raw) {
      if (st.play && !document.hidden) {
        const s = Math.min(PLAY_END, toSec(st.T) + Math.min(raw, 0.25));
        st.T = toMin(s);
        if (s >= PLAY_END) { st.T = TMAX; setPlay(false); results(); }
      }
      range.value = Math.round(toSec(st.T) / PLAY_END * 1000);
      clock.textContent = st.ran ? fmt(st.T) + ' hr' : '';
      const ph = PHASES.find(([a, b]) => st.T >= a && st.T < b);
      phaseEl.textContent = ph ? ph[2] : 'Hours later';
      phaseEl.classList.toggle('on', st.ran);
    },
    // project(sideIndex, [x,y,z]) -> [x,y] in stage px or null
    labels(project) {
      let n = 0;
      if (st.ran) {
        const sides = st.cmp ? [0, 1] : [1];
        for (const s of sides) {
          const S = st.sims[s];
          const live = S.ev.filter((e) => st.T >= e.t && (e.k === 'struct' || st.T <= e.t + 14)).slice(root.clientWidth < 700 ? -1 : -3);
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
    },
  };
  recompute();
  root._wwh = api;
  return api;
}
