/* ── Hussain Portfolio — Premium JS ── */

(function () {
  'use strict';

  var ADMIN_KEY = 'hussain_admin';

  // ── Embedded portfolio data ──
  var PORTFOLIO_DATA = {
    "profile": {
      "name": "Muhammad Hussain",
      "title": "Database & Software Developer",
      "subtitle": "Software Engineering Student | Founder of Zorvexa | Aspiring Data Engineer",
      "email": "mhussain950091@gmail.com",
      "phone": "+92 310 5324610",
      "location": "Wah Cantt / Talagang, Pakistan",
      "github": "https://github.com/mhussain950091-tech",
      "linkedin": "https://www.linkedin.com/in/muhammad-hussain-478731340/",
      "fiverr": "https://www.fiverr.com/m_hussain_123",
      "zorvexa_linkedin": "https://www.linkedin.com/company/zorvexa-data/",
      "bio": "I build database-driven software that solves real business problems. From hotel management systems and POS applications to AI-powered synthetic data platforms, my work sits at the intersection of relational databases, backend logic, and practical software delivery. Currently pursuing BS Software Engineering at COMSATS University Islamabad while building Zorvexa — a software company focused on databases, development, and AI-enabled solutions."
    },
    "projects": [
      {"id":"synthora-ai","title":"Synthora AI","tagline":"Synthetic Data Generation Platform","description":"A platform that generates realistic synthetic datasets for testing and development — no real customer data needed. Supports tabular, relational, and document data with schema design, data integrity checks, and saved dataset management.","role":"Team Leader — Database Engineering & Schema Design","context":"HackDataV2 Project","technologies":["Python","Database Design","Relational Modeling","Schema Validation","Vercel"],"liveUrl":"https://synthora-ai-nine.vercel.app/","repoUrl":"https://github.com/mhussain950091-tech","featured":true},
      {"id":"novasight","title":"NovaSight","tagline":"AI-Powered Dashboard Intelligence","description":"Upload CSV or Excel data and get automatic visual dashboards with KPIs, chart selection, and exportable reports. Built with database migration, session management, and AI chat integration.","role":"Full-stack Developer","context":"Data Analytics Platform","technologies":["Python","Streamlit","pandas","NumPy","Plotly","PostgreSQL"],"liveUrl":"","repoUrl":"","featured":true},
      {"id":"fast-food-pos","title":"Fast Food POS","tagline":"Java Desktop Point-of-Sale System","description":"A complete POS application built for a Sargodha fast-food business. Handles sales, cart management, product inventory, payment processing (cash, card, online), and reporting — packaged as a standalone desktop installer.","role":"Solo Developer","context":"Business Client Project","technologies":["Java Swing","JDBC","MySQL","Launch4j"],"liveUrl":"","repoUrl":"https://github.com/mhussain950091-tech/personal-pos","featured":true},
      {"id":"sarina-hotel","title":"Sarina Hotel Management System","tagline":"Hotel Operations & Records Platform","description":"Desktop application managing rooms, guests, bookings, facilities, billing, staff, and departments. Demonstrates relational schema design, CRUD operations, and full application-database integration.","role":"Developer","context":"CodeAlpha Internship Project","technologies":["Java Swing","JDBC","MySQL"],"liveUrl":"","repoUrl":"https://github.com/mhussain950091-tech/Code-alpha_hotel_management_system","featured":true},
      {"id":"apni-wah-biryani","title":"Apni Wah Biryani","tagline":"Food-Ordering System Design","description":"System design for a food-ordering platform with customer website, admin panel, menu management, and multiple payment options (WhatsApp, Easypaisa, Cash). Includes requirements analysis, use cases, and data-flow diagrams.","role":"System Designer","context":"In Development","technologies":["HTML","CSS","JavaScript","Database Design"],"liveUrl":"","repoUrl":"","featured":false}
    ],
    "skills": {
      "Database Systems": ["MySQL", "PostgreSQL", "SQL Server", "Oracle 21c"],
      "Database Concepts": ["SQL", "ER Diagrams", "Normalization", "Relational Modeling", "Schema Design", "Data Integrity"],
      "Programming": ["Java", "Python", "C++", "JavaScript"],
      "Desktop Development": ["Java Swing", "JDBC"],
      "Data & Analytics": ["pandas", "NumPy", "Streamlit", "Plotly", "Power BI"],
      "Web Foundations": ["HTML", "CSS", "JavaScript"],
      "Tools & Deployment": ["Git", "GitHub", "Launch4j", "Vercel"],
      "Currently Learning": ["Flutter", "Dart", "Mobile Development"]
    },
    "journey": [
      {"period":"Before University","event":"FSc ICS from Punjab College Talagang — 977/1200 marks"},
      {"period":"Sep 2024","event":"Started BS Software Engineering at COMSATS University Islamabad, Wah Campus"},
      {"period":"2024–2025","event":"Built foundation in C++, databases, digital logic, and software development"},
      {"period":"2025","event":"Developed interest in SQL, relational database design, and Java desktop applications"},
      {"period":"Late 2025","event":"Built Sarina Hotel Management System — rooms, guests, bookings, payments with full database integration"},
      {"period":"Early 2026","event":"Developed Fast Food POS for a Sargodha business using Java Swing and MySQL"},
      {"period":"2026","event":"Expanded into Python, pandas, Streamlit, and analytics dashboards"},
      {"period":"Mid 2026","event":"Built NovaSight — converting uploaded data into dashboards and insights"},
      {"period":"Sep 2026","event":"Led three-member team to build Synthora AI for HackDataV2"},
      {"period":"Sep–Oct 2026","event":"Founded Zorvexa — developing company identity and LinkedIn presence"},
      {"period":"Oct 2026","event":"Continued into web development, Flutter, and food-ordering system planning"}
    ],
    "certifications": [
      {"title":"Java Programming Internship","issuer":"CodeAlpha","date":"2025","description":"Internship work with certificate and recommendation letter"},
      {"title":"Machine Learning Internship","issuer":"CodeAlpha","date":"2025","description":"Credit Scoring classification project"},
      {"title":"SQL Certificate","issuer":"Simplilearn","date":"January 2026","description":"SQL fundamentals and database querying"},
      {"title":"Generative AI Certificate","issuer":"—","date":"January 2026","description":"Generative AI foundations"}
    ],
    "leadership": [
      {"role":"Head of Events","org":"COMSATS Heritage Society","description":"Progressed from junior/executive responsibilities to events leadership"},
      {"role":"Punjab Culture Head","org":"COMSATS Heritage Society","description":"Led cultural programming and event coordination"},
      {"role":"Team Leader","org":"Synthora AI — HackDataV2","description":"Led three-member development team"},
      {"role":"Founder & CEO","org":"Zorvexa","description":"Building a software company focused on databases, development, and AI solutions"},
      {"role":"Badminton Captain","org":"College Team","description":"College captain, district Talagang silver medal"}
    ],
    "zorvexa": {
      "name": "Zorvexa",
      "role": "Founder & CEO",
      "focus": "Databases, Software Development, AI-enabled Solutions",
      "services": [
        "Relational database design",
        "SQL queries and database integration",
        "Java desktop business applications",
        "Python dashboards and reporting tools",
        "Database optimization and improvements"
      ],
      "linkedin": "https://www.linkedin.com/company/zorvexa-data/"
    }
  };

  // ── Helpers ──
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return (ctx || document).querySelectorAll(sel); }
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(function ([k, v]) {
      if (k === 'className') node.className = v;
      else if (k === 'innerHTML') node.innerHTML = v;
      else if (k === 'textContent') node.textContent = v;
      else node.setAttribute(k, v);
    });
    if (children) children.forEach(function (c) {
      if (typeof c === 'string') node.appendChild(document.createTextNode(c));
      else if (c) node.appendChild(c);
    });
    return node;
  }

  // ── Data Loading ──
  function loadData() {
    var base = JSON.parse(JSON.stringify(PORTFOLIO_DATA));
    try {
      var overrides = localStorage.getItem(ADMIN_KEY);
      if (overrides) {
        var parsed = JSON.parse(overrides);
        Object.keys(parsed).forEach(function (key) {
          if (parsed[key] !== undefined && parsed[key] !== null) {
            base[key] = parsed[key];
          }
        });
      }
    } catch (e) { /* ignore */ }
    return base;
  }

  // ═══════════════════════════════════════════════
  // DATABASE NODE NETWORK (Canvas 2D)
  // Clean connected-node visualization — like an ER diagram / data mesh
  // ═══════════════════════════════════════════════
  function initHeroCanvas() {
    var canvas = qs('#heroCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W, H;
    var nodes = [];
    var mouseX = -1000, mouseY = -1000;
    var CONNECT_DIST = 180;
    var NODE_COUNT = 70;

    function resize() {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createNodes() {
      nodes = [];
      for (var i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1.5,
          type: Math.random() < 0.15 ? 'primary' : (Math.random() < 0.3 ? 'secondary' : 'node')
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var dx = nodes[i].x - nodes[j].x;
          var dy = nodes[i].y - nodes[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            var alpha = (1 - dist / CONNECT_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = 'rgba(59, 130, 246, ' + alpha + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      for (var k = 0; k < nodes.length; k++) {
        var mdx = nodes[k].x - mouseX;
        var mdy = nodes[k].y - mouseY;
        var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 200) {
          var malpha = (1 - mdist / 200) * 0.25;
          ctx.beginPath();
          ctx.moveTo(nodes[k].x, nodes[k].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = 'rgba(6, 182, 212, ' + malpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw nodes
      for (var n = 0; n < nodes.length; n++) {
        var nd = nodes[n];
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, nd.radius, 0, Math.PI * 2);

        if (nd.type === 'primary') {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
          // outer glow
          ctx.shadowColor = 'rgba(59, 130, 246, 0.4)';
          ctx.shadowBlur = 12;
        } else if (nd.type === 'secondary') {
          ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';
          ctx.shadowColor = 'rgba(6, 182, 212, 0.3)';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
      }

      // Update positions
      for (var u = 0; u < nodes.length; u++) {
        nodes[u].x += nodes[u].vx;
        nodes[u].y += nodes[u].vy;
        // Soft bounce
        if (nodes[u].x < 0 || nodes[u].x > W) nodes[u].vx *= -1;
        if (nodes[u].y < 0 || nodes[u].y > H) nodes[u].vy *= -1;
        // Mouse repulsion — gentle push
        var rx = nodes[u].x - mouseX;
        var ry = nodes[u].y - mouseY;
        var rd = Math.sqrt(rx * rx + ry * ry);
        if (rd < 120 && rd > 0) {
          nodes[u].vx += (rx / rd) * 0.02;
          nodes[u].vy += (ry / rd) * 0.02;
        }
        // Dampen speed
        var speed = Math.sqrt(nodes[u].vx * nodes[u].vx + nodes[u].vy * nodes[u].vy);
        if (speed > 0.6) {
          nodes[u].vx *= 0.99;
          nodes[u].vy *= 0.99;
        }
      }

      requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });
    canvas.addEventListener('mouseleave', function () {
      mouseX = -1000;
      mouseY = -1000;
    });

    resize();
    createNodes();
    draw();

    window.addEventListener('resize', function () {
      resize();
      createNodes();
    });
  }

  // ═══════════════════════════════════════════════
  // TYPING ANIMATION
  // ═══════════════════════════════════════════════
  function initTypingAnimation(titles) {
    var typedEl = qs('#heroTyped');
    if (!typedEl || !titles.length) return;

    var titleIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function type() {
      var fullText = titles[titleIndex];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }
      typedEl.textContent = fullText.substring(0, charIndex);

      var speed = isDeleting ? 35 : 70;

      if (!isDeleting && charIndex === fullText.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 500;
      }
      setTimeout(type, speed);
    }
    type();
  }

  // ═══════════════════════════════════════════════
  // CURSOR GLOW
  // ═══════════════════════════════════════════════
  function initCursorGlow() {
    var glow = qs('#cursorGlow');
    if (!glow || window.innerWidth < 768) return;

    var curX = 0, curY = 0, targetX = 0, targetY = 0;

    document.addEventListener('mousemove', function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
      glow.classList.add('active');
    });
    document.addEventListener('mouseleave', function () {
      glow.classList.remove('active');
    });

    function update() {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      glow.style.left = curX + 'px';
      glow.style.top = curY + 'px';
      requestAnimationFrame(update);
    }
    update();
  }

  // ═══════════════════════════════════════════════
  // CARD MOUSE GLOW
  // ═══════════════════════════════════════════════
  function initCardGlow() {
    document.addEventListener('mousemove', function (e) {
      var cards = qsa('.project-card, .skill-group, .leadership-card, .cert-card');
      cards.forEach(function (card) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  // ═══════════════════════════════════════════════
  // SCROLL REVEAL
  // ═══════════════════════════════════════════════
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    // Section headers
    var headerObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          headerObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    qsa('.reveal').forEach(function (h) { headerObs.observe(h); });

    // Card containers — stagger children
    var containerObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var cards = entry.target.querySelectorAll('.card-reveal');
          cards.forEach(function (card, i) {
            setTimeout(function () { card.classList.add('visible'); }, i * 100);
          });
          containerObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    qsa('.projects-grid, .skills-grid, .leadership-grid, .cert-grid').forEach(function (c) { containerObs.observe(c); });

    // Timeline items
    var timelineObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          timelineObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    qsa('.timeline__item').forEach(function (item) {
      item.classList.add('card-reveal');
      timelineObs.observe(item);
    });

    // Contact items
    var contactObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          contactObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    qsa('.contact-item, .form-float').forEach(function (item) {
      item.classList.add('card-reveal');
      contactObs.observe(item);
    });

    // Zorvexa
    var zorvexa = qs('.zorvexa-section');
    if (zorvexa) {
      zorvexa.classList.add('card-reveal');
      var zorObs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { zorvexa.classList.add('visible'); zorObs.disconnect(); }
      }, { threshold: 0.1 });
      zorObs.observe(zorvexa);
    }
  }

  // ═══════════════════════════════════════════════
  // ACTIVE NAV TRACKING
  // ═══════════════════════════════════════════════
  function initActiveNav() {
    var sections = qsa('section[id]');
    var navLinks = qsa('.nav__links a');

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-72px 0px -40% 0px' });

    sections.forEach(function (sec) { obs.observe(sec); });
  }

  // ═══════════════════════════════════════════════
  // RENDER FUNCTIONS
  // ═══════════════════════════════════════════════

  function renderHero(profile) {
    qs('#heroLabel').textContent = profile.subtitle || '';
    qs('#heroName').textContent = profile.name || '';
    qs('#heroBio').textContent = profile.bio || '';

    // Profile picture in hero
    var heroAvatar = qs('#heroAvatar');
    var heroAvatarImg = qs('#heroAvatarImg');
    if (profile.profileImage) {
      heroAvatarImg.src = profile.profileImage;
      heroAvatar.style.display = '';
    } else {
      heroAvatar.style.display = 'none';
    }

    var stats = qs('#heroStats');
    var statData = [
      { num: '5+', label: 'Projects Built' },
      { num: '4+', label: 'Certifications' },
      { num: '2+', label: 'Years Coding' }
    ];
    stats.innerHTML = '';
    statData.forEach(function (s) {
      stats.appendChild(el('div', { className: 'hero__stat' }, [
        el('div', { className: 'hero__stat-num', textContent: s.num }),
        el('div', { className: 'hero__stat-label', textContent: s.label }),
      ]));
    });
  }

  function renderAbout(profile) {
    qs('#aboutText').textContent = profile.bio || '';

    // Profile picture in about
    var aboutPhoto = qs('#aboutPhoto');
    var aboutPhotoImg = qs('#aboutPhotoImg');
    if (profile.profileImage) {
      aboutPhotoImg.src = profile.profileImage;
      aboutPhoto.style.display = '';
    } else {
      aboutPhoto.style.display = 'none';
    }

    var details = qs('#aboutDetails');
    var items = [
      { icon: graduationIcon(), label: 'Education', value: 'BS Software Engineering, COMSATS Islamabad (Wah Campus)' },
      { icon: locationIcon(), label: 'Location', value: profile.location || '' },
      { icon: mailIcon(), label: 'Email', value: profile.email || '', link: 'mailto:' + (profile.email || '') },
    ];
    details.innerHTML = '';
    details.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-top:32px;';
    items.forEach(function (item) {
      details.appendChild(el('div', { className: 'contact-item card-reveal' }, [
        el('div', { className: 'contact-item__icon', innerHTML: item.icon }),
        el('div', {}, [
          el('div', { className: 'contact-item__label', textContent: item.label }),
          item.link
            ? el('a', { href: item.link, className: 'contact-item__value', textContent: item.value })
            : el('div', { className: 'contact-item__value', textContent: item.value }),
        ]),
      ]));
    });
  }

  function renderProjects(projects) {
    var grid = qs('#projectsGrid');
    grid.innerHTML = '';
    var featured = (projects || []).filter(function (p) { return p.featured; });
    var rest = (projects || []).filter(function (p) { return !p.featured; });
    [].concat(featured, rest).forEach(function (proj) {
      var links = [];
      if (proj.liveUrl) links.push(el('a', { href: proj.liveUrl, target: '_blank', rel: 'noopener', textContent: 'Live Demo ↗' }));
      if (proj.repoUrl) links.push(el('a', { href: proj.repoUrl, target: '_blank', rel: 'noopener', textContent: 'Repository ↗' }));

      var cardChildren = [];
      if (proj.image) {
        var imgWrap = el('div', { className: 'project-card__image' });
        var img = el('img', { alt: proj.title || 'Project' });
        img.src = proj.image;
        imgWrap.appendChild(img);
        cardChildren.push(imgWrap);
      }
      cardChildren.push(
        el('span', { className: 'project-card__context', textContent: proj.context || '' }),
        el('h3', { className: 'project-card__title', textContent: proj.title || '' }),
        el('p', { className: 'project-card__tagline', textContent: proj.tagline || '' }),
        el('p', { className: 'project-card__desc', textContent: proj.description || '' }),
        el('div', { className: 'project-card__tech' }, (proj.technologies || []).map(function (t) { return el('span', { textContent: t }); })),
        links.length ? el('div', { className: 'project-card__links' }, links) : null
      );
      grid.appendChild(el('div', { className: 'project-card card-reveal' }, cardChildren));
    });
  }

  function renderSkills(skills) {
    var grid = qs('#skillsGrid');
    grid.innerHTML = '';
    Object.entries(skills || {}).forEach(function ([category, items]) {
      grid.appendChild(el('div', { className: 'skill-group card-reveal' }, [
        el('h3', { className: 'skill-group__title', textContent: category }),
        el('div', { className: 'skill-group__items' }, items.map(function (s) { return el('span', { textContent: s }); })),
      ]));
    });
  }

  function renderJourney(journey) {
    var timeline = qs('#timeline');
    timeline.innerHTML = '';
    (journey || []).forEach(function (entry) {
      timeline.appendChild(el('div', { className: 'timeline__item' }, [
        el('div', { className: 'timeline__period', textContent: entry.period || '' }),
        el('div', { className: 'timeline__event', textContent: entry.event || '' }),
      ]));
    });
  }

  function renderLeadership(leadership) {
    var grid = qs('#leadershipGrid');
    grid.innerHTML = '';
    (leadership || []).forEach(function (item) {
      grid.appendChild(el('div', { className: 'leadership-card card-reveal' }, [
        el('h3', { className: 'leadership-card__role', textContent: item.role || '' }),
        el('p', { className: 'leadership-card__org', textContent: item.org || '' }),
        el('p', { className: 'leadership-card__desc', textContent: item.description || '' }),
      ]));
    });
  }

  function renderCertifications(certifications) {
    var grid = qs('#certGrid');
    grid.innerHTML = '';
    (certifications || []).forEach(function (cert) {
      var certChildren = [];
      if (cert.image) {
        var imgWrap = el('div', { className: 'cert-card__image' });
        var img = el('img', { alt: cert.title || 'Certificate' });
        img.src = cert.image;
        imgWrap.appendChild(img);
        certChildren.push(imgWrap);
      } else {
        certChildren.push(el('div', { className: 'cert-card__icon', innerHTML: certIcon() }));
      }
      certChildren.push(
        el('h3', { className: 'cert-card__title', textContent: cert.title || '' }),
        el('p', { className: 'cert-card__issuer', textContent: cert.issuer || '' }),
        el('p', { className: 'cert-card__date', textContent: cert.date || '' })
      );
      grid.appendChild(el('div', { className: 'cert-card card-reveal' }, certChildren));
    });
  }

  function renderZorvexa(zorvexa) {
    var section = qs('#zorvexaSection');
    if (!zorvexa) { section.style.display = 'none'; return; }
    section.innerHTML = '';
    section.appendChild(el('p', { className: 'zorvexa__role', textContent: zorvexa.role || 'Founder & CEO' }));
    section.appendChild(el('h3', { className: 'zorvexa__name', textContent: zorvexa.name || 'Zorvexa' }));
    section.appendChild(el('p', { className: 'zorvexa__focus', textContent: zorvexa.focus || '' }));
    section.appendChild(el('ul', { className: 'zorvexa__services' },
      (zorvexa.services || []).map(function (s) { return el('li', { textContent: s }); })
    ));
    if (zorvexa.linkedin) {
      section.appendChild(el('a', { href: zorvexa.linkedin, target: '_blank', rel: 'noopener', className: 'btn btn--outline', style: 'margin-top:28px;display:inline-flex;' }, ['View on LinkedIn ↗']));
    }
  }

  function renderContact(profile) {
    var info = qs('#contactInfo');
    info.innerHTML = '';
    var items = [
      { icon: mailIcon(), label: 'Email', value: profile.email || '', link: 'mailto:' + (profile.email || '') },
      { icon: phoneIcon(), label: 'Phone', value: profile.phone || '', link: 'tel:' + (profile.phone || '').replace(/\s/g, '') },
      { icon: locationIcon(), label: 'Location', value: profile.location || '' },
      { icon: githubIcon(), label: 'GitHub', value: 'mhussain950091-tech', link: profile.github || '' },
      { icon: linkedinIcon(), label: 'LinkedIn', value: 'Muhammad Hussain', link: profile.linkedin || '' },
      { icon: fiverrIcon(), label: 'Fiverr', value: 'm_hussain_123', link: profile.fiverr || '' },
    ];
    items.forEach(function (item) {
      info.appendChild(el('div', { className: 'contact-item' }, [
        el('div', { className: 'contact-item__icon', innerHTML: item.icon }),
        el('div', {}, [
          el('div', { className: 'contact-item__label', textContent: item.label }),
          item.link
            ? el('a', { href: item.link, target: '_blank', rel: 'noopener', className: 'contact-item__value', textContent: item.value })
            : el('div', { className: 'contact-item__value', textContent: item.value }),
        ]),
      ]));
    });
  }

  function renderFooter(profile) {
    qs('#footerYear').textContent = new Date().getFullYear();
    var links = qs('#footerLinks');
    links.innerHTML = '';
    if (profile.github) links.appendChild(el('a', { href: profile.github, target: '_blank', rel: 'noopener', textContent: 'GitHub' }));
    if (profile.linkedin) links.appendChild(el('a', { href: profile.linkedin, target: '_blank', rel: 'noopener', textContent: 'LinkedIn' }));
    if (profile.fiverr) links.appendChild(el('a', { href: profile.fiverr, target: '_blank', rel: 'noopener', textContent: 'Fiverr' }));
  }

  // ── Icons ──
  function mailIcon() { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'; }
  function phoneIcon() { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'; }
  function locationIcon() { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'; }
  function githubIcon() { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>'; }
  function linkedinIcon() { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'; }
  function fiverrIcon() { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.898.315-.898.856v1.848h-.855v-2.704h1.062c.107-.474.303-.9.603-1.178a2.387 2.387 0 0 1 1.49-.575h.448v1.753zm-4.486-1.753h-.851v4.557h-.856v-4.557h-.855v-1.753h.855V7.91c0-1.028.631-1.633 1.585-1.633h.922v1.753h-.8zM12.834 9.413h-.855v4.557h-.856v-4.557h-.855V7.66h.855v-.56c0-1.029.632-1.634 1.586-1.634h.922v1.754h-.8c-.264 0-.426.154-.426.418v.022h1.226v1.753h-1.226v4.557h-.571v-4.557zm-4.12 0h-.856v4.557H6.5v-4.557H5.23V7.66h1.271v-.56c0-1.029.632-1.634 1.587-1.634h.922v1.754h-.8c-.264 0-.427.154-.427.418v.022h1.227v1.753H8.783v4.557h-.07v-4.557zM2.575 13.97h-.856V7.66h.856v6.31zm-.428-7.15a.53.53 0 1 1 0-1.06.53.53 0 0 1 0 1.06z"/></svg>'; }
  function graduationIcon() { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/></svg>'; }
  function certIcon() { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>'; }

  // ── Navigation ──
  function setupNav() {
    var toggle = qs('#navToggle');
    var links = qs('#navLinks');
    toggle.addEventListener('click', function () { links.classList.toggle('active'); });
    qsa('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('active'); });
    });
    var nav = qs('#nav');
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ── Contact Form ──
  function setupContactForm() {
    var form = qs('#contactForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var subject = fd.get('subject') || 'Portfolio Contact';
      var mailto = 'mailto:mhussain950091@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('From: ' + fd.get('name') + ' (' + fd.get('email') + ')\n\n' + fd.get('message'));
      window.location.href = mailto;
      form.reset();
    });
  }

  // ── Image Lightbox ──
  function initLightbox() {
    var overlay = el('div', { className: 'lightbox-overlay', id: 'lightboxOverlay' });
    var img = el('img', { className: 'lightbox-overlay__img', id: 'lightboxImg', alt: 'Full size' });
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function () {
      overlay.classList.remove('active');
    });

    document.addEventListener('click', function (e) {
      var target = e.target.closest('.cert-card__image img, .project-card__image img');
      if (target) {
        img.src = target.src;
        overlay.classList.add('active');
      }
    });
  }

  // ── Parallax ──
  function initParallax() {
    var hero = qs('#hero');
    if (!hero) return;
    window.addEventListener('scroll', function () {
      var scroll = window.scrollY;
      var content = qs('.hero__content');
      if (content && scroll < window.innerHeight) {
        content.style.transform = 'translateY(' + (scroll * 0.12) + 'px)';
        content.style.opacity = Math.max(0, 1 - (scroll / (window.innerHeight * 0.7)));
      }
    }, { passive: true });
  }

  // ═══════════════════════════════════════════════
  // INIT
  // ═══════════════════════════════════════════════
  function init() {
    var data = loadData();
    var profile = data.profile || {};

    renderHero(profile);
    renderAbout(profile);
    renderProjects(data.projects);
    renderSkills(data.skills);
    renderJourney(data.journey);
    renderLeadership(data.leadership);
    renderCertifications(data.certifications);
    renderZorvexa(data.zorvexa);
    renderContact(profile);
    renderFooter(profile);

    setupNav();
    setupContactForm();
    initLightbox();

    // Premium features
    initHeroCanvas();
    initTypingAnimation([
      'Database Developer',
      'Software Engineer',
      'Founder of Zorvexa',
      'Data Solutions Builder'
    ]);
    initCursorGlow();
    initCardGlow();
    initParallax();
    initActiveNav();

    requestAnimationFrame(function () {
      requestAnimationFrame(initScrollReveal);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
