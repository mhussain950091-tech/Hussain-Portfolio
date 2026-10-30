/* ── Admin Panel JS — Cloudinary URL Edition ── */

(function () {
  'use strict';

  const ADMIN_KEY = 'hussain_admin';
  const AUTH_KEY = 'hussain_auth';
  const DEFAULT_PW = 'hussain2024';

  let data = {};
  let ready = false;

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
      toast('Draft saved. Export JSON to publish your changes.');
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
  async function loadAndRender() {
    try {
      const response = await fetch('../data/portfolio-data.json', { cache: 'no-store' });
      if (!response.ok) throw new Error('Load failed');
      data = await response.json();
    } catch (error) {
      toast('Could not load published data. Please reload before editing.', true);
      return;
    }
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
    try {
      const configResponse = await fetch('../site.config.json', { cache: 'no-store' });
      if (!configResponse.ok) throw new Error('Configuration unavailable');
      const config = await configResponse.json();
      data.profile.title = config.professionalTitle;
    } catch (error) {
      toast('Could not load site settings. Reload before editing.', true);
      return;
    }
    renderAll();
    ready = true;
    qs('#exportJsonBtn').disabled = false;
  }

  function renderAll() {
    renderProfile();
    renderProjects();
    renderSkills();
    renderJourney();
    renderLeadership();
    renderCertifications();
    renderZorvexa();
    renderCareerEditor('experience');
    renderCareerEditor('education');
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
      const previous = (data.projects || []).find(p => p.id === id) || {};
      const proj = {
        ...previous,
        problem: qs('#proj-problem').value.trim(),
        built: qs('#proj-built').value.trim(),
        impact: qs('#proj-impact').value.trim(),
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
        category: qs('#proj-category').value,
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
      qs('#proj-problem').value = p.problem || p.tagline || '';
      qs('#proj-built').value = p.built || '';
      qs('#proj-impact').value = p.impact || '';
      qs('#proj-tagline').value = p.tagline || '';
      qs('#proj-desc').value = p.description || '';
      qs('#proj-role').value = p.role || '';
      qs('#proj-context').value = p.context || '';
      qs('#proj-tech').value = (p.technologies || []).join(', ');
      qs('#proj-live').value = p.liveUrl || '';
      qs('#proj-repo').value = p.repoUrl || '';
      qs('#proj-featured').checked = !!p.featured;
      qs('#proj-category').value = p.category || (/ai|synthetic|dashboard/i.test(p.title + ' ' + p.tagline) ? 'ai' : 'business');
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


  // Shared CRUD editor; entries retain the schema used by the public site.
  const careerFields = {
    experience: [['title', 'Role / title'], ['company', 'Company / organisation'], ['type', 'Experience type'], ['period', 'Dates (e.g. Jun–Aug 2026 or 2026–Present)'], ['description', 'Responsibilities and achievements'], ['highlights', 'Highlights (one per line)']],
    education: [['degree', 'Degree / programme / qualification'], ['institution', 'Institution'], ['period', 'Dates (e.g. 2024–Present)'], ['description', 'Field of study, results and details']]
  };
  function renderCareerEditor(key, index = -1) {
    const rows = data[key] || [];
    const entry = rows[index] || {};
    const fields = careerFields[key].map(([field, label]) => {
      const value = Array.isArray(entry[field]) ? entry[field].join('\n') : (entry[field] || '');
      const id = key + '-' + field;
      let control;
      if (field === 'type') {
        control = '<select id="' + id + '" name="type">' + ['Employment', 'Internship', 'Freelance', 'Membership', 'Volunteer', 'Other'].map(type => '<option' + (type === value ? ' selected' : '') + '>' + type + '</option>').join('') + '</select>';
      } else if (field === 'description' || field === 'highlights') {
        control = '<textarea id="' + id + '" name="' + field + '" rows="4">' + esc(value) + '</textarea>';
      } else {
        control = '<input id="' + id + '" name="' + field + '" value="' + escAttr(value) + '" required maxlength="200">';
      }
      return '<div class="form-group' + (field === 'description' || field === 'highlights' ? ' full-width' : '') + '"><label for="' + id + '">' + label + '</label>' + control + '</div>';
    }).join('');
    qs('#' + key + 'Editor').innerHTML = '<div class="career-list">' + (rows.length ? rows.map((row, i) =>
      '<article class="item-card"><div class="item-card__info"><h3>' + esc(row.title || row.degree) + '</h3><p>' + esc(row.company || row.institution) + ' · ' + esc(row.period || '') + '</p></div><div class="item-card__actions"><button type="button" data-action="edit" data-index="' + i + '">Edit</button><button type="button" data-action="up" data-index="' + i + '"' + (i === 0 ? ' disabled' : '') + '>Move up</button><button type="button" data-action="delete" data-index="' + i + '" class="delete">Delete</button></div></article>'
    ).join('') : '<p class="panel-note">No entries yet. Add your first entry below.</p>') + '</div><h3 class="editor-title">' + (index < 0 ? 'Add entry' : 'Edit entry') + '</h3><form class="admin-form" data-index="' + index + '">' + fields + '<div class="form-actions"><button class="btn btn--primary" type="submit">Save entry</button><button class="btn btn--outline" type="button" data-action="cancel">Cancel / new entry</button></div></form>';
  }
  function setupCareerEditor(key) {
    const container = qs('#' + key + 'Editor');
    container.addEventListener('submit', event => {
      event.preventDefault();
      const form = event.target;
      const index = Number(form.dataset.index);
      const entry = { ...((data[key] || [])[index] || {}) };
      careerFields[key].forEach(([field]) => { entry[field] = form.elements[field].value.trim(); });
      if (key === 'experience') entry.highlights = entry.highlights.split('\n').map(v => v.trim()).filter(Boolean);
      if (!data[key]) data[key] = [];
      if (index >= 0) data[key][index] = entry; else data[key].push(entry);
      saveData(); renderCareerEditor(key);
    });
    container.addEventListener('click', event => {
      const button = event.target.closest('button[data-action]');
      if (!button) return;
      const index = Number(button.dataset.index);
      const action = button.dataset.action;
      if (action === 'edit') { renderCareerEditor(key, index); qs('#' + key + 'Editor form input').focus(); }
      if (action === 'cancel') renderCareerEditor(key);
      if (action === 'delete' && confirm('Delete this entry from your draft?')) { data[key].splice(index, 1); saveData(); renderCareerEditor(key); }
      if (action === 'up' && index > 0) { [data[key][index - 1], data[key][index]] = [data[key][index], data[key][index - 1]]; saveData(); renderCareerEditor(key); }
    });
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
    qs('#zv-introduction').value = z.introduction || '';
    qs('#zv-mission').value = z.mission || '';
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
      data.zorvexa.introduction = qs('#zv-introduction').value;
      data.zorvexa.mission = qs('#zv-mission').value;
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
      if (!ready) return;
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
    // Block edits until published data has loaded, avoiding partial exports.
    qs('#exportJsonBtn').disabled = true;
    document.addEventListener('submit', event => {
      if (event.target.id !== 'loginForm' && !ready) { event.preventDefault(); event.stopImmediatePropagation(); toast('Please wait for your data to load.', true); }
    }, true);
    qsa('.form-group').forEach(group => {
      const label = group.querySelector('label');
      const input = group.querySelector('input, textarea, select');
      if (label && input && input.id) label.htmlFor = input.id;
    });
    setupLogin();
    setupTabs();

    if (checkAuth()) {
      qs('#loginScreen').style.display = 'none';
      qs('#dashboard').style.display = 'block';
      loadAndRender();
    }

    setupProfile();
    setupProjects();
    setupCareerEditor('experience');
    setupCareerEditor('education');
    setupSkills();
    setupJourney();
    setupLeadership();
    setupCertifications();
    setupZorvexa();
    setupExportJson();
    let lastFocus;
    qsa('.modal').forEach(modal => {
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', modal.querySelector('h3').textContent);
      modal.querySelector('.modal__close').setAttribute('aria-label', 'Close editor');
      const observer = new MutationObserver(() => {
        if (modal.style.display !== 'none') {
          lastFocus = document.activeElement;
          modal.querySelector('input:not([type=hidden]),select,textarea,button').focus();
        } else if (lastFocus && lastFocus.isConnected) lastFocus.focus();
      });
      observer.observe(modal, { attributes: true, attributeFilter: ['style'] });
      modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
      modal.addEventListener('keydown', e => {
        if (e.key === 'Escape') modal.style.display = 'none';
        if (e.key !== 'Tab') return;
        const focusable = [...modal.querySelectorAll('button,input:not([type=hidden]),textarea,select,a[href]')].filter(el => !el.disabled);
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      });
    });

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

