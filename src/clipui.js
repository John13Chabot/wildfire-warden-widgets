// Overlay for upgrade stories: a state badge, a large caption and a three-part progress bar on the model.
const CSS = `
.wwh3-story{position:absolute;inset:0;pointer-events:none;z-index:4;font-family:inherit;opacity:0;transition:opacity .35s}
.wwh3-story.on{opacity:1}
.wwh3-story .sb{position:absolute;left:12px;top:16px;padding:7px 12px;border-radius:999px;font-weight:800;font-size:12px;line-height:1.2;letter-spacing:.06em;text-transform:uppercase;color:#fff;background:rgba(26,58,42,.92);transition:background .3s}
.wwh3-story .sb.bad{background:#b3261e}.wwh3-story .sb.good{background:#1f7a46}
.wwh3-story .sc{position:absolute;left:12px;right:12px;bottom:58px;margin:0 auto;max-width:560px;padding:12px 16px;border-radius:12px;background:rgba(16,32,24,.86);color:#fff;font-weight:700;font-size:clamp(15px,1.5vw,19px);line-height:1.35;text-align:center;box-shadow:0 6px 20px rgba(0,0,0,.25);border-left:5px solid #e85d04;transition:border-color .3s}
.wwh3-story .sc.bad{border-left-color:#e0442f}.wwh3-story .sc.good{border-left-color:#2fa463}
.wwh3-story .sp{position:absolute;left:0;right:0;top:0;display:flex;gap:3px}
.wwh3-story .sp i{flex:1;height:5px;border-radius:0;background:rgba(255,255,255,.35);overflow:hidden;position:relative}
.wwh3-story .sp i b{position:absolute;left:0;top:0;bottom:0;width:0;background:#e85d04}
.wwh3-story .sp i:nth-child(2) b{background:#e0442f}.wwh3-story .sp i:nth-child(3) b{background:#2fa463}
.is-story .wwh3-pin,.is-story .wwh3-prog{opacity:0!important;pointer-events:none!important}
@media(max-width:600px){.wwh3-story .sc{font-size:14px;padding:10px 12px;bottom:50px}.wwh3-story .sb{font-size:11px}}
`;
export function createStoryUI(stage) {
  if (!document.getElementById('wwh3-story-css')) { const s = document.createElement('style'); s.id = 'wwh3-story-css'; s.textContent = CSS; document.head.appendChild(s); }
  const el = document.createElement('div'); el.className = 'wwh3-story'; el.setAttribute('aria-live', 'polite');
  el.innerHTML = '<span class="sb"></span><p class="sc"></p><div class="sp"><i><b></b></i><i><b></b></i><i><b></b></i></div>';
  stage.appendChild(el);
  const sb = el.querySelector('.sb'), sc = el.querySelector('.sc'), bars = [...el.querySelectorAll('.sp b')];
  let last = -1;
  return {
    show() { el.classList.add('on'); },
    hide() { el.classList.remove('on'); last = -1; },
    // beat 0/1/2, fill = 0..1 within each beat
    set(st, beat, fills) {
      if (beat !== last) {
        last = beat;
        const cls = beat === 1 ? 'bad' : beat === 2 ? 'good' : '';
        sb.className = 'sb ' + cls; sb.textContent = beat === 0 ? 'The weak point' : beat === 1 ? 'Without ' + st.up : 'With ' + st.up;
        sc.className = 'sc ' + cls; sc.textContent = st.t[beat];
      }
      bars.forEach((b, i) => (b.style.width = (Math.max(0, Math.min(1, fills[i])) * 100).toFixed(1) + '%'));
    },
  };
}
