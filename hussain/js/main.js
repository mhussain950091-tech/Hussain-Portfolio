/* ══════════════════════════════════════════════════
   Muhammad Hussain Portfolio — Professional Engine
   Multi-page hash routing + enhanced interactions
   ══════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Constants ── */
  var DATA_URL = 'data/portfolio-data.json';
  var LS_KEY  = 'hussain_portfolio_data';
  var PAGES = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'services', 'contact'];

  /* ── SVG Icon Library ── */
  var Icons = {
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    location: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    fiverr: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.846.255-.846.775v.545h1.466l-.202 1.544h-1.264v4.272h-1.813v-4.272h-.852v-1.544h.852v-.569c0-1.399.924-2.053 2.049-2.053.449 0 .833.1 1.1.209l-.34 1.479a1.752 1.752 0 0 0-.543-.086h.243zM16.948 18.99c.816 0 1.478-.26 1.99-.736l-.744-1.08c-.348.327-.658.465-1.078.465-.603 0-1.037-.429-1.037-1.122 0-.684.434-1.122 1.013-1.122.421 0 .766.163 1.079.464l.744-1.079c-.513-.5-1.174-.736-1.99-.736-1.6 0-2.66 1.082-2.66 2.473s1.06 2.473 2.683 2.473zM10.46 18.978l1.236-.918-.004-.016c.336.552.939.946 1.753.946.834 0 1.467-.589 1.467-1.312 0-.834-.738-1.222-1.503-1.543-.561-.242-.988-.417-.988-.746 0-.239.2-.379.506-.379.393 0 .756.217 1.039.453l.872-1.103c-.447-.368-1.025-.606-1.681-.606-.953 0-1.685.545-1.685 1.357 0 .767.625 1.17 1.378 1.478.513.213.95.402.95.745 0 .261-.223.398-.502.398-.39 0-.829-.249-1.146-.593L10.46 18.978zM6.537 18.019v-2.075h1.311v-1.544H6.537V12.83l-1.812.302v1.268h-.899v1.544h.899v2.249c0 1.193.652 1.797 1.723 1.797.446 0 .862-.145 1.159-.344l-.449-1.249c-.169.116-.354.169-.531.169-.271 0-.466-.15-.466-.495l-.004-.052h.38zm-3.96-1.474c0-.683.434-1.122 1.013-1.122.421 0 .766.163 1.079.464l.744-1.079c-.512-.5-1.174-.736-1.99-.736-1.6 0-2.66 1.082-2.66 2.473s1.06 2.473 2.683 2.473c.816 0 1.478-.26 1.99-.736l-.744-1.08c-.348.327-.658.465-1.078.465-.604 0-1.037-.429-1.037-1.122z"/></svg>',
    external: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7.8H7.8"/></svg>',
    code: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    live: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    repo: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>',
    database: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    schema: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h4"/></svg>',
    desktop: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>',
    chart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',
    web: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    tools: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    learning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    ai: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M16 14h.01"/><path d="M8 14h.01"/><path d="M12 17v3"/><path d="M8 22h8"/><path d="M20 10c0 6-4 8-8 10-4-2-8-4-8-10"/></svg>',
    briefcase: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
    graduation: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5"/></svg>',
    trophy: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    star: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    cert: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v4l3 3"/></svg>'
  };

  function getIcon(name) { return Icons[name] || Icons.code; }

  /* ── Utility Helpers ── */
  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function setText(id, text) { var el = document.getElementById(id); if (el && text) el.textContent = text; }

  /* ── Data Loading ── */
  function loadData() {
    return fetch(DATA_URL)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .catch(function () {
        try { var ls = localStorage.getItem(LS_KEY); if (ls) return JSON.parse(ls); } catch (e) {}
        return null;
      });
  }

  /* ═══════ PAGE ROUTER ═══════ */

  var currentPage = 'home';

  function getPageFromHash() {
    var hash = window.location.hash.replace('#', '') || 'home';
    return PAGES.indexOf(hash) !== -1 ? hash : 'home';
  }

  function navigateTo(pageName) {
    if (PAGES.indexOf(pageName) === -1) pageName = 'home';
    if (pageName === currentPage) return;

    // Hide all pages
    var allPages = document.querySelectorAll('.page');
    allPages.forEach(function (p) { p.classList.remove('active'); });

    // Show target page
    var target = document.getElementById('page-' + pageName);
    if (target) {
      target.classList.add('active');
      // Re-trigger page entrance animation
      target.style.animation = 'none';
      target.offsetHeight; // force reflow
      target.style.animation = '';
    }

    // Update nav links
    document.querySelectorAll('.nav__links a').forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-page') === pageName);
    });

    // Update hash without triggering hashchange again
    if (window.location.hash !== '#' + pageName) {
      history.pushState(null, '', '#' + pageName);
    }

    currentPage = pageName;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Re-trigger animations on the active page
    triggerPageAnimations(pageName);

    // Close mobile nav if open
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (toggle && links) {
      toggle.classList.remove('active');
      links.classList.remove('active');
    }
  }

  function triggerPageAnimations(pageName) {
    var page = document.getElementById('page-' + pageName);
    if (!page) return;

    // Reveal cards with stagger
    var revealEls = page.querySelectorAll('.card-reveal, .reveal');
    revealEls.forEach(function (el, i) {
      el.classList.remove('visible');
      el.style.transitionDelay = (i * 0.06) + 's';
      setTimeout(function () {
        el.classList.add('visible');
      }, 60);
    });

    // Re-trigger counter animations on home page
    if (pageName === 'home') {
      page.querySelectorAll('.counter').forEach(function (c) {
        c.dataset.animated = '';
        c.textContent = '0';
      });
      initCounterAnimation();
    }

    // Re-trigger skill bars on skills page
    if (pageName === 'skills') {
      page.querySelectorAll('.skill-bar__fill').forEach(function (b) {
        b.dataset.animated = '';
        b.style.width = '0%';
      });
      setTimeout(function () { initSkillBarAnimation(); }, 100);
    }
  }

  function initRouter() {
    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', function () {
      navigateTo(getPageFromHash());
    });

    // Handle popstate for browser back/forward
    window.addEventListener('popstate', function () {
      navigateTo(getPageFromHash());
    });

    // Intercept all clicks on [data-page] links
    document.addEventListener('click', function (e) {
      var link = e.target.closest('[data-page]');
      if (link) {
        e.preventDefault();
        var page = link.getAttribute('data-page');
        navigateTo(page);
      }
    });

    // Navigate to initial page from URL hash
    var initial = getPageFromHash();
    currentPage = ''; // force navigation
    navigateTo(initial);
  }

  /* ── Main Init ── */
  function init(data) {
    if (!data) return;
    renderHero(data);
    renderAbout(data);
    renderExperience(data);
    renderProjects(data);
    renderSkills(data);
    renderCertifications(data);
    renderAchievements(data);
    renderServices(data);
    renderContact(data);
    renderFooter(data);
    initNavigation();
    initHeroCanvas();
    initTypingAnimation(data);
    initCounterAnimation();
    initSkillBarAnimation();
    initLightbox();
    initContactForm();
    initProjectFilters();
    initExperienceTabs();
    initRouter();
  }

  /* ═══════ RENDERERS ═══════ */

  /* ── Hero ── */
  function renderHero(data) {
    var p = data.profile;
    var nameEl = document.getElementById('heroName');
    if (nameEl) {
      var parts = p.name.split(' ');
      nameEl.innerHTML = esc(parts[0]) + ' <span class="accent">' + esc(parts.slice(1).join(' ')) + '</span>';
    }
    setText('heroBio', p.bio);
    var badge = document.getElementById('heroBadge');
    if (badge) badge.style.display = p.availableForWork ? '' : 'none';

    var cvBtn = document.getElementById('heroCvBtn');
    if (cvBtn && p.cvUrl) { cvBtn.href = p.cvUrl; cvBtn.style.display = ''; }

    var avatarWrap = document.getElementById('heroAvatarWrap');
    var avatarImg = document.getElementById('heroAvatarImg');
    if (avatarWrap && avatarImg && p.profileImage) {
      avatarImg.src = p.profileImage;
      avatarImg.alt = p.name;
      avatarWrap.style.display = '';
    }

    var tags = document.getElementById('heroTags');
    if (tags && p.subtitle) {
      tags.innerHTML = p.subtitle.split('|').map(function (t) {
        return '<span class="tag">' + esc(t.trim()) + '</span>';
      }).join('');
    }

    var stats = document.getElementById('heroStats');
    if (stats) {
      var projCount = (data.projects || []).length;
      var certCount = (data.certifications || []).length;
      var skillCount = 0;
      if (data.skills) {
        Object.keys(data.skills).forEach(function (k) {
          var grp = data.skills[k];
          skillCount += (grp.items ? grp.items.length : (Array.isArray(grp) ? grp.length : 0));
        });
      }
      stats.innerHTML =
        '<div class="hero__stat"><div class="hero__stat-num counter" data-target="' + projCount + '">0</div><div class="hero__stat-label">Projects Built</div></div>' +
        '<div class="hero__stat"><div class="hero__stat-num counter" data-target="' + certCount + '">0</div><div class="hero__stat-label">Certifications</div></div>' +
        '<div class="hero__stat"><div class="hero__stat-num counter" data-target="' + skillCount + '">0</div><div class="hero__stat-label">Technologies</div></div>';
    }
  }

  /* ── About ── */
  function renderAbout(data) {
    var p = data.profile;
    setText('aboutBio', p.bio);

    var photoCol = document.getElementById('aboutPhotoCol');
    var photoImg = document.getElementById('aboutPhotoImg');
    if (photoCol && photoImg && p.profileImage) {
      photoImg.src = p.profileImage;
      photoCol.style.display = '';
    }

    var cards = document.getElementById('aboutCards');
    if (!cards) return;
    var items = [
      { icon: Icons.location, label: 'Location', value: p.location || '—' },
      { icon: Icons.briefcase, label: 'Experience', value: (data.experience || []).length + '+ Roles' },
      { icon: Icons.graduation, label: 'Education', value: 'BSSE @ COMSATS' }
    ];
    cards.innerHTML = items.map(function (c) {
      return '<div class="about-card card-reveal">' +
        '<div class="about-card__icon">' + c.icon + '</div>' +
        '<div class="about-card__label">' + esc(c.label) + '</div>' +
        '<div class="about-card__value">' + esc(c.value) + '</div>' +
      '</div>';
    }).join('');
  }

  /* ── Experience ── */
  function renderExperience(data) {
    var workPanel = document.getElementById('panel-work');
    var eduPanel = document.getElementById('panel-education');
    var timelineEl = document.getElementById('timeline');

    if (workPanel && data.experience) {
      workPanel.innerHTML = data.experience.map(function (e) {
        var highlightsHtml = '';
        if (e.highlights && e.highlights.length) {
          highlightsHtml = '<div class="exp-card__tags">' +
            e.highlights.map(function (h) { return '<span class="tag">' + esc(h) + '</span>'; }).join('') +
          '</div>';
        }
        return '<div class="exp-card card-reveal">' +
          '<div class="exp-card__indicator">' + Icons.briefcase + '</div>' +
          '<div class="exp-card__body">' +
            '<div class="exp-card__period">' + esc(e.period) + '</div>' +
            '<h3 class="exp-card__title">' + esc(e.title) + '</h3>' +
            '<div class="exp-card__company">' + esc(e.company) + '</div>' +
            '<p class="exp-card__desc">' + esc(e.description) + '</p>' +
            highlightsHtml +
          '</div>' +
        '</div>';
      }).join('');
    }

    if (eduPanel && data.education) {
      eduPanel.innerHTML = data.education.map(function (e) {
        return '<div class="edu-card card-reveal">' +
          '<div class="edu-card__indicator">' + Icons.graduation + '</div>' +
          '<div class="edu-card__body">' +
            '<div class="edu-card__period">' + esc(e.period) + '</div>' +
            '<h3 class="edu-card__degree">' + esc(e.degree) + '</h3>' +
            '<div class="edu-card__institution">' + esc(e.institution) + '</div>' +
            '<p class="edu-card__desc">' + esc(e.description) + '</p>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    if (timelineEl && data.journey) {
      timelineEl.innerHTML = data.journey.map(function (j) {
        return '<div class="timeline__item card-reveal">' +
          '<div class="timeline__period">' + esc(j.period) + '</div>' +
          '<div class="timeline__event">' + esc(j.event) + '</div>' +
        '</div>';
      }).join('');
    }
  }

  /* ── Projects ── */
  function renderProjects(data) {
    var grid = document.getElementById('projectsGrid');
    if (!grid || !data.projects) return;
    grid.innerHTML = data.projects.map(function (p) {
      var mediaHtml = '';
      if (p.image) {
        mediaHtml = '<div class="project-card__media">' +
          '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy">' +
          (p.video ? '<div class="project-card__media-play" data-video="' + esc(p.video) + '">' + Icons.play + '</div>' : '') +
        '</div>';
      } else if (p.video) {
        mediaHtml = '<div class="project-card__media">' +
          '<video src="' + esc(p.video) + '" muted preload="metadata"></video>' +
          '<div class="project-card__media-play" data-video="' + esc(p.video) + '">' + Icons.play + '</div>' +
        '</div>';
      } else {
        mediaHtml = '<div class="project-card__media"><div class="project-card__placeholder">' + Icons.code + '</div></div>';
      }

      var techHtml = (p.technologies || []).map(function (t) {
        return '<span>' + esc(t) + '</span>';
      }).join('');

      var linksHtml = '';
      if (p.liveUrl) linksHtml += '<a href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener">' + Icons.live + ' Live Demo</a>';
      if (p.repoUrl) linksHtml += '<a href="' + esc(p.repoUrl) + '" target="_blank" rel="noopener">' + Icons.repo + ' Source Code</a>';

      var cat = p.category || 'business';
      var featured = p.featured ? '<span class="project-card__featured">Featured</span>' : '';

      return '<div class="project-card card-reveal" data-category="' + esc(cat) + '">' +
        mediaHtml +
        '<div class="project-card__body">' +
          '<div class="project-card__header">' +
            '<span class="project-card__context">' + esc(p.context || '') + '</span>' +
            featured +
          '</div>' +
          '<h3 class="project-card__title">' + esc(p.title) + '</h3>' +
          '<p class="project-card__tagline">' + esc(p.tagline || '') + '</p>' +
          '<p class="project-card__desc">' + esc(p.description) + '</p>' +
          '<div class="project-card__tech">' + techHtml + '</div>' +
          (linksHtml ? '<div class="project-card__links">' + linksHtml + '</div>' : '') +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ── Skills ── */
  function renderSkills(data) {
    var grid = document.getElementById('skillsGrid');
    if (!grid || !data.skills) return;
    grid.innerHTML = Object.keys(data.skills).map(function (groupName) {
      var group = data.skills[groupName];
      var iconKey = (group.icon || 'code');
      var items = group.items || (Array.isArray(group) ? group.map(function (s) { return { name: s, level: 70 }; }) : []);

      var itemsHtml = items.map(function (item) {
        var name = typeof item === 'string' ? item : item.name;
        var level = typeof item === 'object' ? (item.level || 70) : 70;
        return '<div class="skill-item">' +
          '<div class="skill-item__header">' +
            '<span class="skill-item__name">' + esc(name) + '</span>' +
            '<span class="skill-item__level">' + level + '%</span>' +
          '</div>' +
          '<div class="skill-bar"><div class="skill-bar__fill" data-width="' + level + '"></div></div>' +
        '</div>';
      }).join('');

      return '<div class="skill-group card-reveal">' +
        '<div class="skill-group__header">' +
          '<div class="skill-group__icon">' + getIcon(iconKey) + '</div>' +
          '<h3 class="skill-group__title">' + esc(groupName) + '</h3>' +
        '</div>' +
        itemsHtml +
      '</div>';
    }).join('');
  }

  /* ── Certifications ── */
  function renderCertifications(data) {
    var grid = document.getElementById('certGrid');
    if (!grid || !data.certifications) return;
    grid.innerHTML = data.certifications.map(function (c) {
      var imgHtml = c.image
        ? '<div class="cert-card__image" data-lightbox="' + esc(c.image) + '"><img src="' + esc(c.image) + '" alt="' + esc(c.title) + '" loading="lazy"></div>'
        : '<div class="cert-card__icon">' + Icons.cert + '</div>';
      return '<div class="cert-card card-reveal">' +
        imgHtml +
        '<div class="cert-card__body">' +
          '<h3 class="cert-card__title">' + esc(c.title) + '</h3>' +
          '<div class="cert-card__issuer">' + esc(c.issuer || '') + '</div>' +
          '<div class="cert-card__date">' + esc(c.date || '') + '</div>' +
          (c.description ? '<p class="cert-card__desc">' + esc(c.description) + '</p>' : '') +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ── Achievements / Leadership ── */
  function renderAchievements(data) {
    var grid = document.getElementById('achievementsGrid');
    if (!grid || !data.leadership) return;
    grid.innerHTML = data.leadership.map(function (l) {
      return '<div class="achievement-card card-reveal">' +
        '<div class="achievement-card__icon">' + Icons.trophy + '</div>' +
        '<div>' +
          '<div class="achievement-card__role">' + esc(l.role) + '</div>' +
          '<div class="achievement-card__org">' + esc(l.org || '') + '</div>' +
          '<p class="achievement-card__desc">' + esc(l.description || '') + '</p>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ── Services ── */
  function renderServices(data) {
    var grid = document.getElementById('servicesGrid');
    if (!grid || !data.services) return;

    if (data.zorvexa) {
      setText('zorvexaDesc', data.zorvexa.focus || '');
      var link = document.getElementById('zorvexaLink');
      if (link && data.zorvexa.linkedin) { link.href = data.zorvexa.linkedin; link.style.display = ''; }
    }

    grid.innerHTML = data.services.map(function (s) {
      return '<div class="service-card card-reveal">' +
        '<div class="service-card__icon">' + getIcon(s.icon || 'code') + '</div>' +
        '<h3 class="service-card__title">' + esc(s.title) + '</h3>' +
        '<p class="service-card__desc">' + esc(s.description) + '</p>' +
      '</div>';
    }).join('');
  }

  /* ── Contact ── */
  function renderContact(data) {
    var el = document.getElementById('contactInfo');
    if (!el) return;
    var p = data.profile;
    var items = [];
    if (p.email)    items.push({ icon: Icons.mail, label: 'Email', value: '<a href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a>' });
    if (p.phone)    items.push({ icon: Icons.phone, label: 'Phone', value: '<a href="tel:' + esc(p.phone) + '">' + esc(p.phone) + '</a>' });
    if (p.location) items.push({ icon: Icons.location, label: 'Location', value: esc(p.location) });
    if (p.github)   items.push({ icon: Icons.github, label: 'GitHub', value: '<a href="' + esc(p.github) + '" target="_blank" rel="noopener">GitHub Profile</a>' });
    if (p.linkedin) items.push({ icon: Icons.linkedin, label: 'LinkedIn', value: '<a href="' + esc(p.linkedin) + '" target="_blank" rel="noopener">LinkedIn Profile</a>' });
    if (p.fiverr)   items.push({ icon: Icons.fiverr, label: 'Fiverr', value: '<a href="' + esc(p.fiverr) + '" target="_blank" rel="noopener">Fiverr Profile</a>' });

    el.innerHTML = items.map(function (c) {
      return '<div class="contact-item">' +
        '<div class="contact-item__icon">' + c.icon + '</div>' +
        '<div>' +
          '<div class="contact-item__label">' + c.label + '</div>' +
          '<div class="contact-item__value">' + c.value + '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ── Footer ── */
  function renderFooter(data) {
    var yr = document.getElementById('footerYear');
    if (yr) yr.textContent = new Date().getFullYear();

    var socialEl = document.getElementById('footerSocial');
    if (!socialEl) return;
    var p = data.profile;
    var links = [];
    if (p.github)   links.push({ icon: Icons.github, label: 'GitHub', url: p.github });
    if (p.linkedin) links.push({ icon: Icons.linkedin, label: 'LinkedIn', url: p.linkedin });
    if (p.fiverr)   links.push({ icon: Icons.fiverr, label: 'Fiverr', url: p.fiverr });

    socialEl.innerHTML = '<h4>Connect</h4>' +
      links.map(function (l) {
        return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + l.icon + ' ' + esc(l.label) + '</a>';
      }).join('');
  }

  /* ═══════ INTERACTIVITY ═══════ */

  /* ── Navigation (scroll effects + mobile toggle) ── */
  function initNavigation() {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');

    window.addEventListener('scroll', function () {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
      });
    }
  }

  /* ── Hero Canvas Animation ── */
  function initHeroCanvas() {
    var canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var mouse = { x: -999, y: -999 };

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    });

    var count = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.3)';
        ctx.fill();
      });

      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(129, 140, 248, ' + (0.06 * (1 - dist / 120)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        var mdx = particles[i].x - mouse.x;
        var mdy = particles[i].y - mouse.y;
        var mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(129, 140, 248, ' + (0.15 * (1 - mDist / 150)) + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ── Typing Animation ── */
  function initTypingAnimation(data) {
    var el = document.getElementById('heroTyped');
    if (!el) return;
    var phrases = [
      data.profile.title || 'Software Developer',
      'Database Engineer',
      'Founder of Zorvexa',
      'Software Engineering Student'
    ];
    var phraseIdx = 0, charIdx = 0, deleting = false;

    function tick() {
      var current = phrases[phraseIdx];
      if (deleting) {
        charIdx--;
        el.textContent = current.substring(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 35);
      } else {
        charIdx++;
        el.textContent = current.substring(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(tick, 2200);
          return;
        }
        setTimeout(tick, 70);
      }
    }
    setTimeout(tick, 800);
  }

  /* ── Counter Animation ── */
  function initCounterAnimation() {
    var counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = '1';
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { observer.observe(c); });
  }

  function animateCounter(el) {
    var target = parseInt(el.dataset.target, 10);
    var duration = 1800;
    var start = performance.now();

    function step(now) {
      var progress = Math.min((now - start) / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target) + '+';
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ── Skill Bar Animation ── */
  function initSkillBarAnimation() {
    var bars = document.querySelectorAll('.skill-bar__fill');
    if (!bars.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = '1';
          entry.target.style.width = entry.target.dataset.width + '%';
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(function (b) { observer.observe(b); });
  }

  /* ── Lightbox ── */
  function initLightbox() {
    var lb = document.getElementById('lightbox');
    var lbContent = document.getElementById('lightboxContent');
    var lbClose = document.getElementById('lightboxClose');
    if (!lb || !lbContent) return;

    document.addEventListener('click', function (e) {
      var imgTrigger = e.target.closest('[data-lightbox]');
      if (imgTrigger) {
        var src = imgTrigger.dataset.lightbox;
        lbContent.innerHTML = '<img src="' + esc(src) + '" alt="Preview">';
        lb.classList.add('active');
        return;
      }

      var vidTrigger = e.target.closest('[data-video]');
      if (vidTrigger) {
        e.preventDefault();
        var vsrc = vidTrigger.dataset.video;
        lbContent.innerHTML = '<video src="' + esc(vsrc) + '" controls autoplay style="max-width:90vw;max-height:85vh;border-radius:8px;"></video>';
        lb.classList.add('active');
        return;
      }
    });

    function closeLightbox() {
      lb.classList.remove('active');
      setTimeout(function () { lbContent.innerHTML = ''; }, 300);
    }

    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ── Contact Form ── */
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.innerHTML = '<span>Message Sent!</span>';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        setTimeout(function () {
          btn.innerHTML = '<span>Send Message</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>';
          btn.style.background = '';
          form.reset();
        }, 2500);
      }
    });
  }

  /* ── Project Filters ── */
  function initProjectFilters() {
    var buttons = document.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('.project-card');
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.dataset.filter;

        cards.forEach(function (card) {
          var cat = card.dataset.category;
          var isFeatured = !!card.querySelector('.project-card__featured');
          var show = filter === 'all' ||
                     (filter === 'featured' && isFeatured) ||
                     (filter === cat);
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ── Experience Tabs ── */
  function initExperienceTabs() {
    var tabs = document.querySelectorAll('.experience__tab');
    var panels = document.querySelectorAll('.experience__panel');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        var target = document.getElementById('panel-' + tab.dataset.tab);
        if (target) {
          target.classList.add('active');
          // Re-trigger reveal for newly visible cards
          target.querySelectorAll('.card-reveal:not(.visible)').forEach(function (el) {
            el.classList.add('visible');
          });
        }
      });
    });
  }

  /* ═══════ BOOTSTRAP ═══════ */
  loadData().then(function (data) {
    if (data) init(data);
  });

})();
