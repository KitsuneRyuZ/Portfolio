/* ══════════════════════════════════════════════
   script.js — Reads CONFIG and powers everything
   KitsuneRyuz Portfolio
══════════════════════════════════════════════ */

/* ── 1. APPLY COLORS FROM CONFIG ────────────── */
(function applyColors() {
  if (!CONFIG?.colors) return;
  const root = document.documentElement;
  const map = {
    bg:      '--bg',
    bg2:     '--bg2',
    surface: '--surface',
    border:  '--border',
    ink:     '--ink',
    muted:   '--muted',
    faint:   '--faint',
    accent:  '--accent',
    accent2: '--accent2',
    sage:    '--sage',
    gold:    '--gold',
  };
  Object.entries(map).forEach(([key, varName]) => {
    if (CONFIG.colors[key]) root.style.setProperty(varName, CONFIG.colors[key]);
  });
})();


/* ── 2. POPULATE IDENTITY ────────────────────── */
(function applyIdentity() {
  const { identity, hero, footer: foot } = CONFIG;

  // page title
  document.title = `${identity.name} — Portfolio`;

  // nav logo
  const logo = document.querySelector('.logo');
  if (logo) logo.textContent = identity.name;

  // hero
  document.getElementById('heroGreeting').textContent = hero.greeting;

  const h1 = document.getElementById('heroHeadline');
  if (h1) {
    h1.innerHTML = `${hero.headline}<br><em>${hero.headlineEm}</em>`;
  }

  document.getElementById('heroDesc').textContent = hero.description;

  // hero kanji
  document.getElementById('heroBigKanji').textContent = identity.kanji;
  document.getElementById('heroKanji').textContent    = identity.kanji;
  document.getElementById('heroKanjiLabel').textContent = identity.name.toLowerCase();

  // status badge
  const statusPill = document.getElementById('statusPill');
  const statusText = document.getElementById('statusText');
  if (identity.statusText && identity.statusOn) {
    statusText.textContent = identity.statusText;
    if (!identity.statusOn) {
      statusPill.querySelector('.s-dot').style.display = 'none';
    }
  } else {
    statusPill.style.display = 'none';
  }

  // hero buttons
  const ctaEl = document.getElementById('heroCta');
  if (ctaEl) {
    ctaEl.innerHTML = `
      <a href="${hero.btn1Link}" class="btn">${hero.btn1Text}</a>
      <a href="${hero.btn2Link}" class="btn outline">${hero.btn2Text}</a>
    `;
  }

  // footer
  const footCopy = document.getElementById('footerCopy');
  const footUrl  = document.getElementById('footerUrl');
  const footKanji = document.getElementById('footerKanji');
  if (footCopy)  footCopy.textContent = foot.copyright;
  if (footUrl)   { footUrl.textContent = foot.url; footUrl.href = `https://${foot.url}`; }
  if (footKanji) footKanji.textContent = identity.kanji;
})();


/* ── 3. ABOUT SECTION ────────────────────────── */
(function applyAbout() {
  const { about } = CONFIG;

  document.getElementById('aboutHeading').textContent = about.heading;

  // bio paragraphs
  const bioEl = document.getElementById('bioParagraphs');
  if (bioEl) {
    bioEl.innerHTML = about.paragraphs
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  // stats
  const statsEl = document.getElementById('statsRow');
  if (statsEl) {
    statsEl.innerHTML = about.stats
      .map(s => `
        <div class="stat-box">
          <div class="stat-num">${s.number}</div>
          <div class="stat-lbl">${s.label}</div>
        </div>`)
      .join('');
  }

  // buttons
  const ghBtn   = document.getElementById('bioGithubBtn');
  const hireBtn = document.getElementById('bioHireBtn');
  if (ghBtn)   ghBtn.href   = about.githubBtn;
  if (hireBtn) hireBtn.href = about.hireBtn;
})();


/* ── 4. SKILLS ───────────────────────────────── */
(function applySkills() {
  const listEl = document.getElementById('skillList');
  if (!listEl) return;

  listEl.innerHTML = CONFIG.skills.map(sk => `
    <div class="skill-item">
      <div class="skill-meta">
        <span>${sk.name}</span>
        <span>${sk.pct}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-bar" style="--pct:${sk.pct}%"></div>
      </div>
    </div>
  `).join('');
})();


/* ── 5. MARQUEE ──────────────────────────────── */
(function buildMarquee() {
  const track = document.getElementById('mqTrack');
  if (!track) return;
  const items = [...CONFIG.marquee, ...CONFIG.marquee]
    .map(s => `<span class="mq-item"><span class="sep">✦</span>${s}</span>`)
    .join('');
  track.innerHTML = items;
})();


/* ── 6. PROJECTS ─────────────────────────────── */
(function buildProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;

  let html = CONFIG.projects.map((p, i) => {
    const delay = i % 3 === 0 ? '' : i % 3 === 1 ? ' d1' : ' d2';
    const liveLink = p.live ? `<a href="${p.live}" target="_blank">Live ↗</a>` : '';
    return `
      <article class="card reveal${delay}">
        <div class="card-head">
          <span class="card-num">${p.num}</span>
          <div class="card-tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="card-foot">
          <span class="card-type">${p.type}</span>
          <div class="card-links">
            <a href="${p.github}" target="_blank">GitHub ↗</a>
            ${liveLink}
          </div>
        </div>
      </article>
    `;
  }).join('');

  // "more" card
  html += `
    <article class="card card-more reveal d2">
      <a href="${CONFIG.about.githubBtn}" target="_blank">
        <span class="plus">+</span>
        <span>More on GitHub</span>
      </a>
    </article>`;

  grid.innerHTML = html;
})();


/* ── 7. CONTACT SECTION ──────────────────────── */
(function applyContact() {
  const { contact } = CONFIG;

  const headEl = document.getElementById('contactHeading');
  const subEl  = document.getElementById('contactSubtext');
  if (headEl) headEl.textContent = contact.heading;
  if (subEl)  subEl.textContent  = contact.subtext;

  // details
  const detailsEl = document.getElementById('contactDetails');
  if (detailsEl) {
    detailsEl.innerHTML = `
      <a href="mailto:${contact.email}">${contact.email}</a>
      <a href="${contact.github}" target="_blank">${contact.github.replace('https://', '')}</a>
    `;
  }

  // socials
  const socialsEl = document.getElementById('socialLinks');
  if (socialsEl) {
    socialsEl.innerHTML = contact.socials
      .map(s => `<a href="${s.url}" target="_blank">${s.label}</a>`)
      .join('');
  }
})();


/* ── 8. NAV SCROLL + ACTIVE ──────────────────── */
(function initNav() {
  const nav   = document.getElementById('nav');
  const links = document.querySelectorAll('.nav-links a[data-s]');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    const mid = window.scrollY + window.innerHeight / 2;
    links.forEach(a => a.classList.remove('active'));
    ['about', 'projects', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (mid >= el.offsetTop && mid < el.offsetTop + el.offsetHeight) {
        const lnk = document.querySelector(`.nav-links a[data-s="${id}"]`);
        if (lnk) lnk.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ── 9. MOBILE MENU ──────────────────────────── */
window.toggleMob = function () {
  const menu = document.getElementById('mobMenu');
  const ham  = document.getElementById('ham');
  const open = menu.classList.toggle('open');
  ham.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};

window.closeMob = function () {
  document.getElementById('mobMenu').classList.remove('open');
  document.getElementById('ham').classList.remove('open');
  document.body.style.overflow = '';
};

document.getElementById('ham').addEventListener('click', window.toggleMob);
document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeMob(); });


/* ── 10. SCROLL REVEAL ───────────────────────── */
(function initReveal() {
  if (!CONFIG.animations.scrollReveal) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  // observe initial elements
  function observeAll() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
  }
  observeAll();

  // re-observe after any DOM change (project cards added dynamically)
  const mutObs = new MutationObserver(observeAll);
  mutObs.observe(document.body, { childList: true, subtree: true });
})();


/* ── 11. SKILL BARS ──────────────────────────── */
(function initSkillBars() {
  if (!CONFIG.animations.skillBars) {
    document.querySelectorAll('.skill-bar').forEach(b => b.classList.add('go'));
    return;
  }
  const about = document.getElementById('about');
  if (!about) return;
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.querySelectorAll('.skill-bar')
            .forEach(b => b.classList.add('go'));
        }, 250);
      }
    });
  }, { threshold: 0.25 }).observe(about);
})();


/* ── 12. TYPEWRITER ──────────────────────────── */
(function initTypewriter() {
  if (!CONFIG.animations.typewriter) return;
  const phrases = CONFIG.typewriterPhrases;
  if (!phrases?.length) return;

  const textEl   = document.getElementById('twText');
  const cursorEl = document.getElementById('twCursor');
  if (!textEl) return;

  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      textEl.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 58);
    } else {
      textEl.textContent = phrase.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 30);
    }
  }

  setTimeout(tick, 1400);
})();


/* ── 13. SAKURA PETAL CANVAS ─────────────────── */
(function initPetals() {
  if (!CONFIG.animations.petals) return;

  const canvas = document.getElementById('petalCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, petals = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); init(); });

  // get accent color from CSS var
  const accent = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent').trim() || '#c4736b';

  // hex → rgb helper
  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }

  const rgb = hexToRgb(accent.length === 7 ? accent : '#c4736b');

  class Petal {
    constructor(randomY = false) {
      this.reset(randomY);
    }
    reset(randomY = false) {
      this.x     = Math.random() * W;
      this.y     = randomY ? Math.random() * H : -20;
      this.size  = 3 + Math.random() * 5;
      this.speedX = -0.5 + Math.random() * 1;
      this.speedY = 0.4 + Math.random() * 0.8;
      this.rot   = Math.random() * Math.PI * 2;
      this.rotSpeed = (-0.02 + Math.random() * 0.04);
      this.alpha = 0.15 + Math.random() * 0.3;
      this.sway  = Math.random() * Math.PI * 2;
      this.swaySpeed = 0.006 + Math.random() * 0.006;
    }
    update() {
      this.sway += this.swaySpeed;
      this.x += this.speedX + Math.sin(this.sway) * 0.5;
      this.y += this.speedY;
      this.rot += this.rotSpeed;
      if (this.y > H + 20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = this.alpha;

      // simple petal shape (oval)
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size, this.size * 0.55, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, 1)`;
      ctx.fill();
      ctx.restore();
    }
  }

  function init() {
    petals = Array.from({ length: 28 }, () => new Petal(true));
  }
  init();

  function animate() {
    ctx.clearRect(0, 0, W, H);
    petals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
})();


/* ── 14. GRAIN OVERLAY TOGGLE ────────────────── */
(function initGrain() {
  const grain = document.getElementById('grain');
  if (grain && !CONFIG.animations.grainOverlay) {
    grain.style.display = 'none';
  }
})();


/* ── 15. TOAST ───────────────────────────────── */
let toastTimer;
function showToast(msg, type = '', duration = 3500) {
  const el = document.getElementById('toast');
  clearTimeout(toastTimer);
  el.textContent = msg;
  el.className   = type ? `show ${type}` : 'show';
  toastTimer = setTimeout(() => {
    el.className = el.className.replace('show', '').trim();
  }, duration);
}


/* ── 16. CONTACT FORM ────────────────────────── */
(function initForm() {
  const form    = document.getElementById('contactForm');
  const msgEl   = document.getElementById('f-msg');
  const ccEl    = document.getElementById('cc');
  const btn     = document.getElementById('submitBtn');
  if (!form) return;

  // char counter
  msgEl.addEventListener('input', () => {
    const len = msgEl.value.length, max = 500;
    ccEl.textContent = `${len} / ${max}`;
    ccEl.style.color = len >= max
      ? 'var(--accent)'
      : len >= max * 0.85
        ? 'var(--gold)'
        : 'var(--faint)';
  });

  // validate one field
  function validate(el) {
    const g = el.closest('.fg');
    g.classList.remove('err');
    let ok = true;
    if (el.id === 'f-name'  && !el.value.trim())                              ok = false;
    if (el.id === 'f-email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) ok = false;
    if (el.id === 'f-msg'   && el.value.trim().length < 20)                   ok = false;
    if (!ok) g.classList.add('err');
    return ok;
  }

  // live validate after blur
  ['f-name', 'f-email', 'f-msg'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('blur', () => validate(el));
    el.addEventListener('input', () => {
      if (el.closest('.fg').classList.contains('err')) validate(el);
    });
  });

  // submit
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const fields = ['f-name', 'f-email', 'f-msg'].map(id => document.getElementById(id));
    const ok = fields.map(validate).every(Boolean);
    if (!ok) { showToast('Please fix the fields above.', 'err'); return; }

    btn.classList.add('loading');
    btn.disabled = true;

    const endpoint = CONFIG.contact.formEndpoint;

    if (endpoint) {
      // Real submission via Formspree or similar
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form),
        });
        if (res.ok) {
          form.reset();
          ccEl.textContent = '0 / 500';
          showToast('Message sent! I\'ll reply soon.', 'ok');
        } else {
          showToast('Something went wrong. Try emailing directly.', 'err');
        }
      } catch {
        showToast('Network error. Try emailing directly.', 'err');
      }
    } else {
      // Demo mode — simulated delay
      await new Promise(r => setTimeout(r, 2000));
      form.reset();
      ccEl.textContent = '0 / 500';
      ccEl.style.color = '';
      showToast('Message sent! I\'ll get back to you soon.', 'ok');
    }

    btn.classList.remove('loading');
    btn.disabled = false;
  });
})();


/* ── 17. SMOOTH ANCHOR SCROLL ────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    closeMob();
  });
});
