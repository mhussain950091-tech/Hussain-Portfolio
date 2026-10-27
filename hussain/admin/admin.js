/* ── Admin Panel JS — Cloudinary URL Edition ── */

(function () {
  'use strict';

  const ADMIN_KEY = 'hussain_admin';
  const AUTH_KEY = 'hussain_auth';
  const DEFAULT_PW = 'hussain2024';

  let data = {};

  // ── Embedded base data (same as main site) ──
  const BASE_DATA = {
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
      {"id":"synthora-ai","title":"Synthora AI","tagline":"Synthetic Data Generation Platform","description":"A platform that generates realistic synthetic datasets for testing and development — no real customer data needed. Supports tabular, relational, and document data with schema design, data integrity checks, and saved dataset management.","role":"Team Leader — Database Engineering & Schema Design","context":"HackDataV2 Project","technologies":["Python","Database Design","Relational Modeling","Schema Validation","Vercel"],"liveUrl":"https://synthora-ai-nine.vercel.app/","repoUrl":"https://github.com/mhussain950091-tech","featured":true,"image":"","video":""},
      {"id":"novasight","title":"NovaSight","tagline":"AI-Powered Dashboard Intelligence","description":"Upload CSV or Excel data and get automatic visual dashboards with KPIs, chart selection, and exportable reports. Built with database migration, session management, and AI chat integration.","role":"Full-stack Developer","context":"Data Analytics Platform","technologies":["Python","Streamlit","pandas","NumPy","Plotly","PostgreSQL"],"liveUrl":"","repoUrl":"","featured":true,"image":"","video":""},
      {"id":"fast-food-pos","title":"Fast Food POS","tagline":"Java Desktop Point-of-Sale System","description":"A complete POS application built for a Sargodha fast-food business. Handles sales, cart management, product inventory, payment processing (cash, card, online), and reporting — packaged as a standalone desktop installer.","role":"Solo Developer","context":"Business Client Project","technologies":["Java Swing","JDBC","MySQL","Launch4j"],"liveUrl":"","repoUrl":"https://github.com/mhussain950091-tech/personal-pos","featured":true,"image":"","video":""},
      {"id":"sarina-hotel","title":"Sarina Hotel Management System","tagline":"Hotel Operations & Records Platform","description":"Desktop application managing rooms, guests, bookings, facilities, billing, staff, and departments. Demonstrates relational schema design, CRUD operations, and full application-database integration.","role":"Developer","context":"CodeAlpha Internship Project","technologies":["Java Swing","JDBC","MySQL"],"liveUrl":"","repoUrl":"https://github.com/mhussain950091-tech/Code-alpha_hotel_management_system","featured":true,"image":"","video":""},
      {"id":"apni-wah-biryani","title":"Apni Wah Biryani","tagline":"Food-Ordering System Design","description":"System design for a food-ordering platform with customer website, admin panel, menu management, and multiple payment options (WhatsApp, Easypaisa, Cash). Includes requirements analysis, use cases, and data-flow diagrams.","role":"System Designer","context":"In Development","technologies":["HTML","CSS","JavaScript","Database Design"],"liveUrl":"","repoUrl":"","featured":false,"image":"","video":""}
    ],
    "skills": {
      "Database Systems":["MySQL","PostgreSQL","SQL Server","Oracle 21c"],
      "Database Concepts":["SQL","ER Diagrams","Normalization","Relational Modeling","Schema Design","Data Integrity"],
      "Programming":["Java","Python","C++","JavaScript"],
      "Desktop Development":["Java Swing","JDBC"],
      "Data & Analytics":["pandas","NumPy","Streamlit","Plotly","Power BI"],
      "Web Foundations":["HTML","CSS","JavaScript"],
      "Tools & Deployment":["Git","GitHub","Launch4j","Vercel"],
      "Currently Learning":["Flutter","Dart","Mobile Development"]
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
      {"title":"Java Programming Internship","issuer":"CodeAlpha","date":"2025","description":"Internship work with certificate and recommendation letter","image":""},
      {"title":"Machine Learning Internship","issuer":"CodeAlpha","date":"2025","description":"Credit Scoring classification project","image":""},
      {"title":"SQL Certificate","issuer":"Simplilearn","date":"January 2026","description":"SQL fundamentals and database querying","image":""},
      {"title":"Generative AI Certificate","issuer":"—","date":"January 2026","description":"Generative AI foundations","image":""}
    ],
    "leadership": [
      {"role":"Head of Events","org":"COMSATS Heritage Society","description":"Progressed from junior/executive responsibilities to events leadership"},
      {"role":"Punjab Culture Head","org":"COMSATS Heritage Society","description":"Led cultural programming and event coordination"},
      {"role":"Team Leader","org":"Synthora AI — HackDataV2","description":"Led three-member development team"},
      {"role":"Founder & CEO","org":"Zorvexa","description":"Building a software company focused on databases, development, and AI solutions"},
      {"role":"Badminton Captain","org":"College Team","description":"College captain, district Talagang silver medal"}
    ],
    "zorvexa": {
      "name":"Zorvexa",
      "role":"Founder & CEO",
      "focus":"Databases, Software Development, AI-enabled Solutions",
      "services":["Relational database design","SQL queries and database integration","Java desktop business applications","Python dashboards and reporting tools","Database optimization and improvements"],
      "linkedin":"https://www.linkedin.com/company/zorvexa-data/"
    }
  };

  // ── Helpers ──
  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return document.querySelectorAll(sel); }

  function toast(msg, isError) {
    const t = qs('#toast');
    t.textContent = msg;
    t.className = 'toast visible' + (isError ? ' error' : '');
    setTimeout(() => t.className = 'toast', 2500);
  }

  function saveData() {
    try {
      localStorage.setItem(ADMIN_KEY, JSON.stringify(data));
      toast('Saved successfully');
    } catch (e) {
      toast('Save failed', true);
    }
  }

  function getPassword() {
    return localStorage.getItem('hussain_admin_pw') || DEFAULT_PW;
  }

  // ── Auth ──
  function checkAuth() {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  }

  function setupLogin() {
    qs('#loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const pw = qs('#loginPassword').value;
      if (pw === getPassword()) {
        sessionStorage.setItem(AUTH_KEY, 'true');
        qs('#loginScreen').style.display = 'none';
        qs('#dashboard').style.display = 'block';
        loadAndRender();
      } else {
        qs('#loginError').textContent = 'Incorrect password';
      }
    });

    qs('#logoutBtn').addEventListener('click', () => {
      sessionStorage.removeItem(AUTH_KEY);
      location.reload();
    });
  }

  // ── Data Loading ──
  function loadAndRender() {
    data = JSON.parse(JSON.stringify(BASE_DATA));
    try {
      const overrides = localStorage.getItem(ADMIN_KEY);
      if (overrides) {
        const parsed = JSON.parse(overrides);
        Object.keys(parsed).forEach(key => {
          if (parsed[key] !== undefined && parsed[key] !== null) {
            data[key] = parsed[key];
          }
        });
      }
    } catch (e) { /* */ }
    renderAll();
  }

  function renderAll() {
    renderProfile();
    renderProjects();
    renderSkills();
    renderJourney();
    renderLeadership();
    renderCertifications();
    renderZorvexa();
  }

  // ── Tab Navigation ──
  function setupTabs() {
    qsa('.dash-nav__tab').forEach(tab => {
      tab.addEventListener('click', () => {
        qsa('.dash-nav__tab').forEach(t => t.classList.remove('active'));
        qsa('.dash-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        qs('#panel-' + tab.dataset.tab).classList.add('active');
      });
    });
  }

  // ═══════════════════════════════════════════════
  // URL PREVIEW HELPERS (replaces old base64 FileReader)
  // ═══════════════════════════════════════════════

  function setupUrlPreview(inputId, previewId, type) {
    // type: 'image' | 'video'
    var input = qs('#' + inputId);
    var preview = qs('#' + previewId);
    if (!input || !preview) return;

    function updatePreview() {
      var url = input.value.trim();
      if (!url) {
        preview.innerHTML = '';
        preview.style.display = 'none';
        return;
      }
      preview.style.display = 'block';
      if (type === 'video') {
        preview.innerHTML = '<video src="' + escAttr(url) + '" controls style="max-width:100%;max-height:180px;border-radius:8px;"></video>';
      } else {
        preview.innerHTML = '<img src="' + escAttr(url) + '" alt="Preview" style="max-width:100%;max-height:200px;border-radius:8px;object-fit:contain;" onerror="this.parentNode.innerHTML=\'<span class=url-preview__error>Could not load image — check URL</span>\'">';
      }
    }

    input.addEventListener('input', updatePreview);
    input.addEventListener('paste', function () { setTimeout(updatePreview, 50); });
    input.addEventListener('change', updatePreview);
  }

  function setUrlInput(inputId, previewId, url, type) {
    var input = qs('#' + inputId);
    if (input) {
      input.value = url || '';
      // Trigger preview update
      input.dispatchEvent(new Event('input'));
    }
  }

  function getUrlInput(inputId) {
    var input = qs('#' + inputId);
    return input ? input.value.trim() : '';
  }

  // ── Profile ──
  function renderProfile() {
    const p = data.profile || {};
    qs('#pf-name').value = p.name || '';
    qs('#pf-title').value = p.title || '';
    qs('#pf-subtitle').value = p.subtitle || '';
    qs('#pf-email').value = p.email || '';
    qs('#pf-phone').value = p.phone || '';
    qs('#pf-location').value = p.location || '';
    qs('#pf-github').value = p.github || '';
    qs('#pf-linkedin').value = p.linkedin || '';
    qs('#pf-fiverr').value = p.fiverr || '';
    qs('#pf-bio').value = p.bio || '';
    setUrlInput('pf-image-url', 'pf-image-preview', p.profileImage || '', 'image');
  }

  function setupProfile() {
    qs('#profileForm').addEventListener('submit', (e) => {
      e.preventDefault();
      if (!data.profile) data.profile = {};
      data.profile.name = qs('#pf-name').value;
      data.profile.title = qs('#pf-title').value;
      data.profile.subtitle = qs('#pf-subtitle').value;
      data.profile.email = qs('#pf-email').value;
      data.profile.phone = qs('#pf-phone').value;
      data.profile.location = qs('#pf-location').value;
      data.profile.github = qs('#pf-github').value;
      data.profile.linkedin = qs('#pf-linkedin').value;
      data.profile.fiverr = qs('#pf-fiverr').value;
      data.profile.bio = qs('#pf-bio').value;
      data.profile.profileImage = getUrlInput('pf-image-url');
      saveData();
    });
  }

  // ── Projects ──
  function renderProjects() {
    const list = qs('#projectsList');
    list.innerHTML = '';
    (data.projects || []).forEach((proj, i) => {
      const card = document.createElement('div');
      card.className = 'item-card';
      var mediaBadges = '';
      if (proj.image) mediaBadges += '<span class="item-card__media-badge">Image</span>';
      if (proj.video) mediaBadges += '<span class="item-card__media-badge video">Video</span>';
      card.innerHTML = `
        <div class="item-card__info">
          <div class="item-card__title">
            ${esc(proj.title)}
            ${proj.featured ? '<span class="item-card__badge">Featured</span>' : ''}
          </div>
          <div class="item-card__sub">${esc(proj.tagline || '')} — ${esc(proj.context || '')}</div>
          ${mediaBadges ? '<div style="margin-top:6px">' + mediaBadges + '</div>' : ''}
        </div>
        <div class="item-card__actions">
          <button data-action="edit" data-index="${i}">Edit</button>
          <button data-action="delete" data-index="${i}" class="delete">Delete</button>
        </div>
      `;
      list.appendChild(card);
    });
  }

  function setupProjects() {
    qs('#addProjectBtn').addEventListener('click', () => openProjectModal());

    qs('#projectsList').addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const idx = parseInt(btn.dataset.index, 10);
      if (btn.dataset.action === 'edit') openProjectModal(idx);
      if (btn.dataset.action === 'delete') {
        if (confirm('Delete this project?')) {
          data.projects.splice(idx, 1);
          saveData();
          renderProjects();
        }
      }
    });

    qs('#projectModalClose').addEventListener('click', closeProjectModal);
    qs('#projectCancelBtn').addEventListener('click', closeProjectModal);

    qs('#projectForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const id = qs('#proj-id').value;
      const proj = {
        id: id || slugify(qs('#proj-title').value),
        title: qs('#proj-title').value,
        tagline: qs('#proj-tagline').value,
        description: qs('#proj-desc').value,
        role: qs('#proj-role').value,
        context: qs('#proj-context').value,
        technologies: qs('#proj-tech').value.split(',').map(s => s.trim()).filter(Boolean),
        liveUrl: qs('#proj-live').value,
        repoUrl: qs('#proj-repo').value,
        featured: qs('#proj-featured').checked,
        image: getUrlInput('proj-image-url'),
        video: getUrlInput('proj-video-url'),
      };

      if (!data.projects) data.projects = [];

      const existingIdx = data.projects.findIndex(p => p.id === id);
      if (existingIdx >= 0) {
        data.projects[existingIdx] = proj;
      } else {
        data.projects.push(proj);
      }

      saveData();
      renderProjects();
      closeProjectModal();
    });
  }

  function openProjectModal(idx) {
    const modal = qs('#projectModal');

    if (idx !== undefined && data.projects[idx]) {
      const p = data.projects[idx];
      qs('#projectModalTitle').textContent = 'Edit Project';
      qs('#proj-id').value = p.id || '';
      qs('#proj-title').value = p.title || '';
      qs('#proj-tagline').value = p.tagline || '';
      qs('#proj-desc').value = p.description || '';
      qs('#proj-role').value = p.role || '';
      qs('#proj-context').value = p.context || '';
      qs('#proj-tech').value = (p.technologies || []).join(', ');
      qs('#proj-live').value = p.liveUrl || '';
      qs('#proj-repo').value = p.repoUrl || '';
      qs('#proj-featured').checked = !!p.featured;
      setUrlInput('proj-image-url', 'proj-image-preview', p.image || '', 'image');
      setUrlInput('proj-video-url', 'proj-video-preview', p.video || '', 'video');
    } else {
      qs('#projectModalTitle').textContent = 'Add Project';
      qs('#projectForm').reset();
      qs('#proj-id').value = '';
      setUrlInput('proj-image-url', 'proj-image-preview', '', 'image');
      setUrlInput('proj-video-url', 'proj-video-preview', '', 'video');
    }
    modal.style.display = 'flex';
  }

  function closeProjectModal() {
    qs('#projectModal').style.display = 'none';
  }

  // ── Skills ──
  function renderSkills() {
    const list = qs('#skillsList');
    list.innerHTML = '';
    Object.entries(data.skills || {}).forEach(([category, items]) => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.innerHTML = `
        <div class="item-card__info">
          <div class="item-card__title">${esc(category)}</div>
          <div class="item-card__sub">${items.map(i => esc(i)).join(', ')}</div>
        </div>
        <div class="item-card__actions">
          <button data-action="edit" data-category="${esc(category)}">Edit</button>
          <button data-action="delete" data-category="${esc(category)}" class="delete">Delete</button>
        </div>
      `;
      list.appendChild(card);
    });
  }

  function setupSkills() {
    qs('#addSkillGroupBtn').addEventListener('click', () => {
      const cat = prompt('Category name:');
      if (!cat) return;
      const skills = prompt('Skills (comma-separated):');
      if (!skills) return;
      if (!data.skills) data.skills = {};
      data.skills[cat] = skills.split(',').map(s => s.trim()).filter(Boolean);
      saveData();
      renderSkills();
    });

    qs('#skillsList').addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const cat = btn.dataset.category;
      if (btn.dataset.action === 'edit') {
        const current = (data.skills[cat] || []).join(', ');
        const newSkills = prompt('Skills for "' + cat + '" (comma-separated):', current);
        if (newSkills === null) return;
        data.skills[cat] = newSkills.split(',').map(s => s.trim()).filter(Boolean);
        saveData();
        renderSkills();
      }
      if (btn.dataset.action === 'delete') {
        if (confirm('Delete category "' + cat + '"?')) {
          delete data.skills[cat];
          saveData();
          renderSkills();
        }
      }
    });
  }

  // ── Journey ──
  function renderJourney() {
    const list = qs('#journeyList');
    list.innerHTML = '';
    (data.journey || []).forEach((entry, i) => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.innerHTML = `
        <div class="item-card__info">
          <div class="item-card__title">${esc(entry.period)}</div>
          <div class="item-card__sub">${esc(entry.event)}</div>
        </div>
        <div class="item-card__actions">
          <button data-action="edit" data-index="${i}">Edit</button>
          <button data-action="delete" data-index="${i}" class="delete">Delete</button>
        </div>
      `;
      list.appendChild(card);
    });
  }

  function setupJourney() {
    qs('#addJourneyBtn').addEventListener('click', () => openJourneyModal());
    qs('#journeyList').addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const idx = parseInt(btn.dataset.index, 10);
      if (btn.dataset.action === 'edit') openJourneyModal(idx);
      if (btn.dataset.action === 'delete') {
        if (confirm('Delete this entry?')) {
          data.journey.splice(idx, 1);
          saveData();
          renderJourney();
        }
      }
    });

    qs('#journeyModalClose').addEventListener('click', () => qs('#journeyModal').style.display = 'none');
    qs('#journeyCancelBtn').addEventListener('click', () => qs('#journeyModal').style.display = 'none');

    qs('#journeyForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = parseInt(qs('#jour-index').value, 10);
      const entry = {
        period: qs('#jour-period').value,
        event: qs('#jour-event').value,
      };
      if (!data.journey) data.journey = [];
      if (idx >= 0) {
        data.journey[idx] = entry;
      } else {
        data.journey.push(entry);
      }
      saveData();
      renderJourney();
      qs('#journeyModal').style.display = 'none';
    });
  }

  function openJourneyModal(idx) {
    if (idx !== undefined && data.journey[idx]) {
      qs('#journeyModalTitle').textContent = 'Edit Entry';
      qs('#jour-index').value = idx;
      qs('#jour-period').value = data.journey[idx].period || '';
      qs('#jour-event').value = data.journey[idx].event || '';
    } else {
      qs('#journeyModalTitle').textContent = 'Add Entry';
      qs('#journeyForm').reset();
      qs('#jour-index').value = -1;
    }
    qs('#journeyModal').style.display = 'flex';
  }

  // ── Leadership ──
  function renderLeadership() {
    const list = qs('#leadershipList');
    list.innerHTML = '';
    (data.leadership || []).forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.innerHTML = `
        <div class="item-card__info">
          <div class="item-card__title">${esc(item.role)}</div>
          <div class="item-card__sub">${esc(item.org)} — ${esc(item.description || '')}</div>
        </div>
        <div class="item-card__actions">
          <button data-action="edit" data-index="${i}">Edit</button>
          <button data-action="delete" data-index="${i}" class="delete">Delete</button>
        </div>
      `;
      list.appendChild(card);
    });
  }

  function setupLeadership() {
    qs('#addLeadershipBtn').addEventListener('click', () => openLeadershipModal());
    qs('#leadershipList').addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const idx = parseInt(btn.dataset.index, 10);
      if (btn.dataset.action === 'edit') openLeadershipModal(idx);
      if (btn.dataset.action === 'delete') {
        if (confirm('Delete this role?')) {
          data.leadership.splice(idx, 1);
          saveData();
          renderLeadership();
        }
      }
    });

    qs('#leadershipModalClose').addEventListener('click', () => qs('#leadershipModal').style.display = 'none');
    qs('#leadershipCancelBtn').addEventListener('click', () => qs('#leadershipModal').style.display = 'none');

    qs('#leadershipForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = parseInt(qs('#lead-index').value, 10);
      const item = {
        role: qs('#lead-role').value,
        org: qs('#lead-org').value,
        description: qs('#lead-desc').value,
      };
      if (!data.leadership) data.leadership = [];
      if (idx >= 0) {
        data.leadership[idx] = item;
      } else {
        data.leadership.push(item);
      }
      saveData();
      renderLeadership();
      qs('#leadershipModal').style.display = 'none';
    });
  }

  function openLeadershipModal(idx) {
    if (idx !== undefined && data.leadership[idx]) {
      qs('#leadershipModalTitle').textContent = 'Edit Role';
      qs('#lead-index').value = idx;
      qs('#lead-role').value = data.leadership[idx].role || '';
      qs('#lead-org').value = data.leadership[idx].org || '';
      qs('#lead-desc').value = data.leadership[idx].description || '';
    } else {
      qs('#leadershipModalTitle').textContent = 'Add Role';
      qs('#leadershipForm').reset();
      qs('#lead-index').value = -1;
    }
    qs('#leadershipModal').style.display = 'flex';
  }

  // ── Certifications ──
  function renderCertifications() {
    const list = qs('#certList');
    list.innerHTML = '';
    (data.certifications || []).forEach((cert, i) => {
      const card = document.createElement('div');
      card.className = 'item-card';
      var mediaBadge = cert.image ? '<span class="item-card__media-badge" style="margin-top:6px">Image</span>' : '';
      card.innerHTML = `
        <div class="item-card__info">
          <div class="item-card__title">${esc(cert.title)}</div>
          <div class="item-card__sub">${esc(cert.issuer)} — ${esc(cert.date || '')}</div>
          ${mediaBadge}
        </div>
        <div class="item-card__actions">
          <button data-action="edit" data-index="${i}">Edit</button>
          <button data-action="delete" data-index="${i}" class="delete">Delete</button>
        </div>
      `;
      list.appendChild(card);
    });
  }

  function setupCertifications() {
    qs('#addCertBtn').addEventListener('click', () => openCertModal());
    qs('#certList').addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const idx = parseInt(btn.dataset.index, 10);
      if (btn.dataset.action === 'edit') openCertModal(idx);
      if (btn.dataset.action === 'delete') {
        if (confirm('Delete this certification?')) {
          data.certifications.splice(idx, 1);
          saveData();
          renderCertifications();
        }
      }
    });

    qs('#certModalClose').addEventListener('click', () => qs('#certModal').style.display = 'none');
    qs('#certCancelBtn').addEventListener('click', () => qs('#certModal').style.display = 'none');

    qs('#certForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = parseInt(qs('#cert-index').value, 10);
      const cert = {
        title: qs('#cert-title').value,
        issuer: qs('#cert-issuer').value,
        date: qs('#cert-date').value,
        description: qs('#cert-desc').value,
        image: getUrlInput('cert-image-url'),
      };
      if (!data.certifications) data.certifications = [];
      if (idx >= 0) {
        data.certifications[idx] = cert;
      } else {
        data.certifications.push(cert);
      }
      saveData();
      renderCertifications();
      qs('#certModal').style.display = 'none';
    });
  }

  function openCertModal(idx) {
    if (idx !== undefined && data.certifications[idx]) {
      qs('#certModalTitle').textContent = 'Edit Certification';
      qs('#cert-index').value = idx;
      qs('#cert-title').value = data.certifications[idx].title || '';
      qs('#cert-issuer').value = data.certifications[idx].issuer || '';
      qs('#cert-date').value = data.certifications[idx].date || '';
      qs('#cert-desc').value = data.certifications[idx].description || '';
      setUrlInput('cert-image-url', 'cert-image-preview', data.certifications[idx].image || '', 'image');
    } else {
      qs('#certModalTitle').textContent = 'Add Certification';
      qs('#certForm').reset();
      qs('#cert-index').value = -1;
      setUrlInput('cert-image-url', 'cert-image-preview', '', 'image');
    }
    qs('#certModal').style.display = 'flex';
  }

  // ── Zorvexa ──
  function renderZorvexa() {
    const z = data.zorvexa || {};
    qs('#zv-name').value = z.name || '';
    qs('#zv-role').value = z.role || '';
    qs('#zv-focus').value = z.focus || '';
    qs('#zv-linkedin').value = z.linkedin || '';
    qs('#zv-services').value = (z.services || []).join('\n');
  }

  function setupZorvexa() {
    qs('#zorvexaForm').addEventListener('submit', (e) => {
      e.preventDefault();
      if (!data.zorvexa) data.zorvexa = {};
      data.zorvexa.name = qs('#zv-name').value;
      data.zorvexa.role = qs('#zv-role').value;
      data.zorvexa.focus = qs('#zv-focus').value;
      data.zorvexa.linkedin = qs('#zv-linkedin').value;
      data.zorvexa.services = qs('#zv-services').value.split('\n').map(s => s.trim()).filter(Boolean);
      saveData();
    });
  }

  // ═══════════════════════════════════════════════
  // EXPORT JSON — Key feature for Cloudinary workflow
  // ═══════════════════════════════════════════════
  function setupExportJson() {
    // Show banner on first visit
    if (!localStorage.getItem('hussain_banner_dismissed')) {
      qs('#exportBanner').style.display = 'block';
    }
    qs('#closeBanner').addEventListener('click', () => {
      qs('#exportBanner').style.display = 'none';
      localStorage.setItem('hussain_banner_dismissed', '1');
    });

    qs('#exportJsonBtn').addEventListener('click', () => {
      // Build clean JSON from current data
      const exportData = JSON.parse(JSON.stringify(data));
      const jsonStr = JSON.stringify(exportData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio-data.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast('JSON exported! Upload it to data/portfolio-data.json in your GitHub repo');
    });
  }

  // ── Utilities ──
  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function escAttr(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function slugify(text) {
    return (text || 'project')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      || 'project-' + Date.now();
  }

  // ── Init ──
  function init() {
    setupLogin();
    setupTabs();

    if (checkAuth()) {
      qs('#loginScreen').style.display = 'none';
      qs('#dashboard').style.display = 'block';
      loadAndRender();
    }

    setupProfile();
    setupProjects();
    setupSkills();
    setupJourney();
    setupLeadership();
    setupCertifications();
    setupZorvexa();
    setupExportJson();

    // URL preview handlers (Cloudinary URLs)
    setupUrlPreview('pf-image-url', 'pf-image-preview', 'image');
    setupUrlPreview('proj-image-url', 'proj-image-preview', 'image');
    setupUrlPreview('proj-video-url', 'proj-video-preview', 'video');
    setupUrlPreview('cert-image-url', 'cert-image-preview', 'image');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
