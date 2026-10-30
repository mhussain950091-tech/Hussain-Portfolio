# Complete corrected source

Full file contents, grouped by filename. See README.md for findings, headline choices, the domain setting and deployment instructions. Binary social-preview.png is supplied separately in assets. Deleted obsolete file: data/portfolio.json.

## hussain/admin/admin.css

````css
/* Colours and font inherit from ../css/style.css. */
body { background:var(--surface); }
.login-screen { min-height:100svh; display:grid; place-items:center; padding:20px; }
.login-card { width:min(440px,100%); background:var(--background); border:1px solid var(--border); border-radius:var(--radius); padding:28px; box-shadow:var(--shadow); }
.login-card__title { font-size:1.8rem; }
.login-card form { display:grid; gap:12px; }
.login-card input { width:100%; padding:12px; border:1px solid var(--input-border); border-radius:8px; background:var(--background); color:var(--heading); }
.login-card__error { min-height:1.5em; color:var(--heading); }
.dash-header { display:flex; justify-content:space-between; gap:20px; align-items:center; padding:20px 28px; background:var(--background); border-bottom:1px solid var(--border); }
.dash-header__title { font-size:1.5rem; }
.dash-header__right { display:flex; flex-wrap:wrap; gap:10px; }
.btn--primary { color:var(--on-accent); background:var(--accent); border-color:var(--accent); }
.btn--primary:hover { color:var(--on-accent); background:var(--accent-hover); }
.btn--sm { font-size:.8rem; padding:9px 12px; min-height:44px; }
.dash-nav { margin:0; padding:0 28px; background:var(--background); display:flex; overflow-x:auto; border-bottom:1px solid var(--border); }
.dash-nav__tab { flex-shrink:0; padding:14px 18px; color:var(--body); border:0; border-bottom:3px solid var(--background); background:var(--background); cursor:pointer; font-size:.85rem; }
.dash-nav__tab.active { color:var(--accent-hover); border-bottom-color:var(--accent); background:var(--surface-accent); }
.dash-main { padding:32px 28px; max-width:1100px; margin:auto; }
.dash-panel { display:none; }
.dash-panel.active { display:block; }
.dash-panel h2 { margin-bottom:20px; }
.panel-header { display:flex; justify-content:space-between; gap:16px; align-items:center; margin-bottom:24px; }
.panel-header h2 { margin:0; }
.admin-form { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px; }
.form-group { display:flex; flex-direction:column; gap:7px; min-width:0; }
.form-group.full-width,.form-actions { grid-column:1/-1; }
.form-group label { font-size:.85rem; font-weight:600; color:var(--body); }
.form-group input,.form-group textarea,.form-group select { width:100%; min-width:0; background:var(--background); border:1px solid var(--input-border); border-radius:8px; padding:12px; color:var(--heading); font-size:16px; }
.form-group textarea { resize:vertical; }
.checkbox-label { display:flex; align-items:center; gap:10px; }
.checkbox-label input { width:20px; height:20px; accent-color:var(--accent); }
.form-actions { display:flex; flex-wrap:wrap; gap:12px; }
.admin-form > .btn { grid-column:1/-1; justify-self:start; }
.items-list,.career-list { display:grid; gap:12px; }
.item-card { display:flex; justify-content:space-between; align-items:start; gap:20px; background:var(--background); padding:20px; border:1px solid var(--border); border-radius:var(--radius); }
.item-card__info { flex:1; min-width:0; overflow-wrap:anywhere; }
.item-card__title { font-weight:650; color:var(--heading); }
.item-card__sub,.item-card__info p,.hint { font-size:.8rem; color:var(--muted); }
.item-card__actions { display:flex; flex-wrap:wrap; gap:8px; }
.item-card__actions button { padding:9px 12px; min-height:44px; border:1px solid var(--input-border); border-radius:8px; background:var(--background); color:var(--body); cursor:pointer; font-size:.8rem; }
.item-card__actions button:hover { color:var(--accent-hover); background:var(--surface-accent); }
.item-card__badge,.item-card__media-badge { display:inline-block; font-size:.7rem; padding:3px 8px; border-radius:5px; background:var(--surface-accent); color:var(--accent-hover); margin-left:8px; }
.modal { position:fixed; inset:0; z-index:50; background:var(--overlay); padding:20px; align-items:center; justify-content:center; }
.modal__content { background:var(--background); width:min(720px,100%); max-height:90svh; overflow:auto; padding:28px; border-radius:var(--radius); border:1px solid var(--border); }
.modal__header { display:flex; align-items:center; justify-content:space-between; gap:20px; margin-bottom:24px; }
.modal__close { width:44px; height:44px; font-size:1.5rem; border:1px solid var(--border); border-radius:8px; background:var(--background); color:var(--heading); cursor:pointer; }
.toast { position:fixed; bottom:20px; right:20px; max-width:calc(100% - 40px); padding:16px; border:1px solid var(--input-border); background:var(--heading); color:var(--background); border-radius:10px; visibility:hidden; z-index:100; }
.toast.visible { visibility:visible; }
.url-preview { margin-top:10px; background:var(--surface); border-radius:8px; }
.url-preview:empty { display:none; }
.url-preview img,.url-preview video { width:100%; max-height:200px; object-fit:contain; }
.panel-note { margin:12px 0 24px; font-size:.9rem; max-width:760px; }
.editor-title { margin:28px 0 18px; }
.export-banner { margin:20px 28px; padding:20px; background:var(--surface-accent); border:1px solid var(--border); border-radius:var(--radius); }
.export-banner ol { padding-left:22px; }
@media(max-width:760px) { .dash-header { flex-direction:column; align-items:start; padding:18px; } .dash-nav { padding-inline:16px; } .dash-main { padding:24px 16px; } .admin-form { grid-template-columns:1fr; } .item-card { flex-direction:column; } .modal { padding:10px; } .modal__content { padding:18px; } .export-banner { margin:16px; } }

````

## hussain/admin/admin.js

````javascript
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


````

## hussain/admin/index.html

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Panel — Hussain Portfolio</title>
  <meta name="robots" content="noindex,nofollow">
  <meta name="theme-color" content="#FFFFFF">
  <link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="admin.css">
</head>
<body>

  <!-- Login Screen -->
  <div class="login-screen" id="loginScreen">
    <div class="login-card">
      <h1 class="login-card__title">Admin Panel</h1>
      <p class="login-card__subtitle">Muhammad Hussain Portfolio</p><p class="panel-note">This editor saves drafts in this browser. Export your changes to publish them.</p>
      <form id="loginForm">
        <label for="loginPassword">Editor password</label><input type="password" id="loginPassword" placeholder="Enter admin password" required autocomplete="current-password">
        <button type="submit" class="btn btn--primary">Login</button>
        <p class="login-card__error" id="loginError"></p>
      </form>
    </div>
  </div>

  <!-- Dashboard -->
  <div class="dashboard" id="dashboard" style="display:none;">
    <header class="dash-header">
      <div class="dash-header__left">
        <h1 class="dash-header__title">Portfolio Admin</h1>
      </div>
      <div class="dash-header__right">
        <button class="btn btn--primary btn--sm" id="exportJsonBtn">⬇ Export JSON</button>
        <a href="../index.html" class="btn btn--outline btn--sm" target="_blank">View Site ↗</a>
        <button class="btn btn--outline btn--sm" id="logoutBtn">Logout</button>
      </div>
    </header>

    <div class="export-banner" id="exportBanner" style="display:none;">
      <p><strong>How to make changes visible to everyone:</strong></p>
      <ol>
        <li>Upload images/videos to <a href="https://cloudinary.com" target="_blank">Cloudinary</a> and paste the URLs below</li>
        <li>Click <strong>"Export JSON"</strong> to download <code>portfolio-data.json</code></li>
        <li>Replace <code>data/portfolio-data.json</code> in your GitHub repo with the downloaded file</li>
        <li>Vercel runs npm run build, then publishes your changes for everyone.</li>
      </ol>
      <button class="btn btn--sm btn--outline" id="closeBanner">Got it</button>
    </div>

    <nav class="dash-nav">
      <button class="dash-nav__tab active" data-tab="profile">Profile</button>
      <button class="dash-nav__tab" data-tab="projects">Projects</button>
      <button class="dash-nav__tab" data-tab="skills">Skills</button>
      <button class="dash-nav__tab" data-tab="experience">Experience</button><button class="dash-nav__tab" data-tab="education">Education</button><button class="dash-nav__tab" data-tab="journey">Journey</button>
      <button class="dash-nav__tab" data-tab="leadership">Leadership</button>
      <button class="dash-nav__tab" data-tab="certifications">Certifications</button>
      <button class="dash-nav__tab" data-tab="zorvexa">Zorvexa</button>
    </nav>

    <main class="dash-main">
      <!-- Profile Tab -->
      <section class="dash-panel active" id="panel-profile">
        <h2>Profile Information</h2>
        <form id="profileForm" class="admin-form">
          <div class="form-group full-width">
            <label>Profile Picture URL <span class="hint">(Upload to Cloudinary, paste URL here)</span></label>
            <input type="url" id="pf-image-url" placeholder="https://res.cloudinary.com/your-cloud/image/upload/...">
            <div class="url-preview" id="pf-image-preview"></div>
          </div>
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" name="name" id="pf-name">
          </div>
          <div class="form-group">
            <label for="pf-title">Professional title</label>
            <input type="text" name="title" id="pf-title" readonly><small>Shared title: edit professionalTitle in site.config.json.</small>
          </div>
          <div class="form-group">
            <label>Subtitle</label>
            <input type="text" name="subtitle" id="pf-subtitle">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" id="pf-email">
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input type="text" name="phone" id="pf-phone">
          </div>
          <div class="form-group">
            <label>Location</label>
            <input type="text" name="location" id="pf-location">
          </div>
          <div class="form-group">
            <label>GitHub URL</label>
            <input type="url" name="github" id="pf-github">
          </div>
          <div class="form-group">
            <label>LinkedIn URL</label>
            <input type="url" name="linkedin" id="pf-linkedin">
          </div>
          <div class="form-group">
            <label>Fiverr URL</label>
            <input type="url" name="fiverr" id="pf-fiverr">
          </div>
          <div class="form-group full-width">
            <label>Bio</label>
            <textarea name="bio" id="pf-bio" rows="4"></textarea>
          </div>
          <button type="submit" class="btn btn--primary">Save Profile</button>
        </form>
      </section>

      <!-- Projects Tab -->
      <section class="dash-panel" id="panel-projects">
        <div class="panel-header">
          <h2>Projects</h2>
          <button class="btn btn--primary btn--sm" id="addProjectBtn">+ Add Project</button>
        </div>
        <div id="projectsList" class="items-list"></div>

        <div class="modal" id="projectModal" style="display:none;">
          <div class="modal__content">
            <div class="modal__header">
              <h3 id="projectModalTitle">Add Project</h3>
              <button class="modal__close" id="projectModalClose">&times;</button>
            </div>
            <form id="projectForm" class="admin-form"><div class="form-group"><label for="proj-category">Project category</label><select id="proj-category"><option value="business">Business software</option><option value="ai">AI & data</option><option value="web">Web development</option><option value="other">Other</option></select></div>
              <input type="hidden" name="id" id="proj-id"><div class="form-group full-width"><label for="proj-problem">Problem solved (one line)</label><input id="proj-problem" required maxlength="300"></div>
              <div class="form-group full-width"><label for="proj-built">What I built (one or two sentences)</label><textarea id="proj-built" rows="3" required></textarea></div>
              <div class="form-group full-width"><label for="proj-impact">Result / impact</label><input id="proj-impact" placeholder="Outcome; [add metric] if a number is not available" required></div>
              <div class="form-group">
                <label>Title</label>
                <input type="text" name="title" id="proj-title" required>
              </div>
              <div class="form-group">
                <label>Tagline</label>
                <input type="text" name="tagline" id="proj-tagline">
              </div>
              <div class="form-group full-width">
                <label>Description</label>
                <textarea name="description" id="proj-desc" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label>Role</label>
                <input type="text" name="role" id="proj-role">
              </div>
              <div class="form-group">
                <label>Context</label>
                <input type="text" name="context" id="proj-context">
              </div>
              <div class="form-group full-width">
                <label>Technologies (comma-separated)</label>
                <input type="text" name="technologies" id="proj-tech">
              </div>
              <div class="form-group">
                <label>Live URL</label>
                <input type="url" name="liveUrl" id="proj-live">
              </div>
              <div class="form-group">
                <label>Repository URL</label>
                <input type="url" name="repoUrl" id="proj-repo">
              </div>
              <div class="form-group">
                <label class="checkbox-label">
                  <input type="checkbox" name="featured" id="proj-featured">
                  Featured Project
                </label>
              </div>
              <div class="form-group full-width">
                <label>Project Screenshot URL <span class="hint">(Cloudinary image URL)</span></label>
                <input type="url" id="proj-image-url" placeholder="https://res.cloudinary.com/...">
                <div class="url-preview" id="proj-image-preview"></div>
              </div>
              <div class="form-group full-width">
                <label>Project Video URL <span class="hint">(Cloudinary video URL — optional)</span></label>
                <input type="url" id="proj-video-url" placeholder="https://res.cloudinary.com/.../video/upload/...">
                <div class="url-preview" id="proj-video-preview"></div>
              </div>
              <div class="form-actions">
                <button type="submit" class="btn btn--primary">Save</button>
                <button type="button" class="btn btn--outline" id="projectCancelBtn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Skills Tab -->
      <section class="dash-panel" id="panel-skills">
        <div class="panel-header">
          <h2>Skills</h2>
          <button class="btn btn--primary btn--sm" id="addSkillGroupBtn">+ Add Category</button>
        </div>
        <div id="skillsList" class="items-list"></div>
      </section>

      <!-- Journey Tab -->
      <section class="dash-panel" id="panel-journey">
        <div class="panel-header">
          <h2>Journey</h2>
          <button class="btn btn--primary btn--sm" id="addJourneyBtn">+ Add Entry</button>
        </div>
        <div id="journeyList" class="items-list"></div>

        <div class="modal" id="journeyModal" style="display:none;">
          <div class="modal__content">
            <div class="modal__header">
              <h3 id="journeyModalTitle">Add Journey Entry</h3>
              <button class="modal__close" id="journeyModalClose">&times;</button>
            </div>
            <form id="journeyForm" class="admin-form">
              <input type="hidden" name="index" id="jour-index" value="-1">
              <div class="form-group">
                <label>Period</label>
                <input type="text" name="period" id="jour-period" required placeholder="e.g. Sep 2026">
              </div>
              <div class="form-group full-width">
                <label>Event</label>
                <textarea name="event" id="jour-event" rows="2" required></textarea>
              </div>
              <div class="form-actions">
                <button type="submit" class="btn btn--primary">Save</button>
                <button type="button" class="btn btn--outline" id="journeyCancelBtn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Leadership Tab -->
      <section class="dash-panel" id="panel-leadership">
        <div class="panel-header">
          <h2>Leadership</h2>
          <button class="btn btn--primary btn--sm" id="addLeadershipBtn">+ Add Role</button>
        </div>
        <div id="leadershipList" class="items-list"></div>

        <div class="modal" id="leadershipModal" style="display:none;">
          <div class="modal__content">
            <div class="modal__header">
              <h3 id="leadershipModalTitle">Add Leadership Role</h3>
              <button class="modal__close" id="leadershipModalClose">&times;</button>
            </div>
            <form id="leadershipForm" class="admin-form">
              <input type="hidden" name="index" id="lead-index" value="-1">
              <div class="form-group">
                <label>Role</label>
                <input type="text" name="role" id="lead-role" required>
              </div>
              <div class="form-group">
                <label>Organization</label>
                <input type="text" name="org" id="lead-org" required>
              </div>
              <div class="form-group full-width">
                <label>Description</label>
                <textarea name="description" id="lead-desc" rows="2"></textarea>
              </div>
              <div class="form-actions">
                <button type="submit" class="btn btn--primary">Save</button>
                <button type="button" class="btn btn--outline" id="leadershipCancelBtn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Certifications Tab -->
      <section class="dash-panel" id="panel-certifications">
        <div class="panel-header">
          <h2>Certifications</h2>
          <button class="btn btn--primary btn--sm" id="addCertBtn">+ Add Certification</button>
        </div>
        <div id="certList" class="items-list"></div>

        <div class="modal" id="certModal" style="display:none;">
          <div class="modal__content">
            <div class="modal__header">
              <h3 id="certModalTitle">Add Certification</h3>
              <button class="modal__close" id="certModalClose">&times;</button>
            </div>
            <form id="certForm" class="admin-form">
              <input type="hidden" name="index" id="cert-index" value="-1">
              <div class="form-group">
                <label>Title</label>
                <input type="text" name="title" id="cert-title" required>
              </div>
              <div class="form-group">
                <label>Issuer</label>
                <input type="text" name="issuer" id="cert-issuer" required>
              </div>
              <div class="form-group">
                <label>Date</label>
                <input type="text" name="date" id="cert-date" placeholder="e.g. January 2026">
              </div>
              <div class="form-group full-width">
                <label>Description</label>
                <textarea name="description" id="cert-desc" rows="2"></textarea>
              </div>
              <div class="form-group full-width">
                <label>Certificate Image URL <span class="hint">(Cloudinary URL)</span></label>
                <input type="url" id="cert-image-url" placeholder="https://res.cloudinary.com/...">
                <div class="url-preview" id="cert-image-preview"></div>
              </div>
              <div class="form-actions">
                <button type="submit" class="btn btn--primary">Save</button>
                <button type="button" class="btn btn--outline" id="certCancelBtn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Zorvexa Tab -->
      <section class="dash-panel" id="panel-zorvexa">
        <h2>Zorvexa</h2><p class="panel-note">Edit your company story and services. Save your draft, then export JSON and update data/portfolio-data.json to publish.</p>
        <form id="zorvexaForm" class="admin-form">
          <div class="form-group full-width"><label for="zv-introduction">Company introduction</label><textarea id="zv-introduction" rows="5" maxlength="3000"></textarea></div>
          <div class="form-group full-width"><label for="zv-mission">Mission</label><textarea id="zv-mission" rows="3" maxlength="1500"></textarea></div>
          <div class="form-group">
            <label>Company Name</label>
            <input type="text" name="name" id="zv-name">
          </div>
          <div class="form-group">
            <label>Your Role</label>
            <input type="text" name="role" id="zv-role">
          </div>
          <div class="form-group">
            <label>Focus Area</label>
            <input type="text" name="focus" id="zv-focus">
          </div>
          <div class="form-group">
            <label>LinkedIn URL</label>
            <input type="url" name="linkedin" id="zv-linkedin">
          </div>
          <div class="form-group full-width">
            <label>Services (one per line)</label>
            <textarea name="services" id="zv-services" rows="5"></textarea>
          </div>
          <button type="submit" class="btn btn--primary">Save Zorvexa Info</button>
        </form>
      </section>
      <section class="dash-panel" id="panel-experience"><h2>Work experience & memberships</h2><p class="panel-note">Add internships, employment, freelance roles, volunteer work and memberships. Save your draft, then export JSON to publish.</p><div id="experienceEditor"></div></section>
      <section class="dash-panel" id="panel-education"><h2>Education</h2><p class="panel-note">Add universities, schools, degrees, exchange programmes and courses. Enter the institution, qualification and dates exactly as you want them displayed.</p><div id="educationEditor"></div></section>
    </main>

    <!-- Toast -->
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </div>

  <script src="admin.js"></script>
</body>
</html>


````

## hussain/api/contact.js

````javascript
// Server-only configuration: never expose the email API key in frontend JSON.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  let body = req.body;
  try { if (typeof body === 'string') body = JSON.parse(body); }
  catch { return res.status(400).json({ error: 'Invalid request.' }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return res.status(400).json({ error: 'Invalid request.' });
  if (body.website) return res.status(400).json({ error: 'Unable to submit this form.' });
  const { name, email, subject = '', message } = body;
  if (typeof name !== 'string' || !name.trim() || name.length > 100 ||
      typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof subject !== 'string' || subject.length > 160 || /[\r\n]/.test(subject) ||
      typeof message !== 'string' || !message.trim() || message.length > 5000) {
    return res.status(400).json({ error: 'Please provide a valid name, email, and message (up to 5,000 characters).' });
  }
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    return res.status(503).json({ error: 'The contact form is temporarily unavailable. Please use email or WhatsApp.' });
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL || 'mhussain950091@gmail.com'],
        reply_to: email,
        subject: `Portfolio message: ${subject.trim() || 'New enquiry'}`,
        text: `Message received from your portfolio\n\nName: ${name.trim()}\nEmail: ${email}\n\n${message.trim()}`
      }),
      signal: AbortSignal.timeout(12000)
    });
    const result = await response.json();
    if (!response.ok || !result.id) {
      console.error('Contact email rejected', response.status);
      return res.status(502).json({ error: 'Your message could not be sent. Please try email or WhatsApp.' });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact email request failed', error.name);
    return res.status(502).json({ error: 'Delivery could not be confirmed. Please contact me by email or WhatsApp.' });
  }
};

````

## hussain/assets/favicon.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#2563EB"/><g fill="none" stroke="#FFFFFF" stroke-width="3"><ellipse cx="32" cy="19" rx="17" ry="7"/><path d="M15 19v26c0 9 34 9 34 0V19M15 32c0 9 34 9 34 0"/></g></svg>

````

## hussain/assets/social-preview.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#FFFFFF"/><rect x="36" y="36" width="1128" height="558" rx="20" fill="#F8FAFC" stroke="#CBD5E1"/>
<rect x="72" y="82" width="6" height="466" rx="3" fill="#2563EB"/>
<g font-family="Arial,sans-serif"><text x="112" y="142" fill="#2563EB" font-size="23" font-weight="700">DATABASE ENGINEERING</text><text x="108" y="240" fill="#0F172A" font-size="64" font-weight="700">Muhammad Hussain</text><text x="112" y="310" fill="#334155" font-size="36">Database Engineer</text><text x="112" y="380" fill="#334155" font-size="27">PostgreSQL · MySQL · SQL Server · MongoDB</text><text x="112" y="440" fill="#1D4ED8" font-size="27" font-weight="700">Microsoft SQL Certified</text><text x="112" y="526" fill="#475569" font-size="24">Founder of Zorvexa · Reliable data. Practical systems.</text></g></svg>

````

## hussain/css/style.css

````css
/* All theme colours live here. Blue is the only accent. */
:root {
  --background:#FFFFFF;
  --surface:#F8FAFC;
  --surface-accent:#EFF6FF;
  --heading:#0F172A;
  --body:#334155;
  --muted:#475569;
  --accent:#2563EB;
  --accent-hover:#1D4ED8;
  --border:#CBD5E1;
  --input-border:#64748B;
  --on-accent:#FFFFFF;
  --shadow:0 3px 16px rgb(15 23 42 / 5%);
  --overlay:rgb(15 23 42 / 45%);
  --radius:14px;
  --font:Inter,Arial,sans-serif;
}
* { box-sizing:border-box; }
html { color-scheme:light; scroll-padding-top:120px; }
body { margin:0; background:var(--background); color:var(--body); font:16px/1.7 var(--font); }
[hidden] { display:none !important; }
h1,h2,h3,strong { color:var(--heading); }
h1,h2,h3,p,figure { margin:0; }
h1 { font-size:clamp(2rem,4.3vw,3.65rem); line-height:1.15; letter-spacing:-.045em; max-width:900px; }
h2 { font-size:1.5rem; line-height:1.35; letter-spacing:-.025em; }
h3 { font-size:1.15rem; line-height:1.4; }
p + p { margin-top:16px; }
a { color:var(--accent); text-underline-offset:4px; }
a:hover { color:var(--accent-hover); }
button,input,textarea,select { font:inherit; }
button,a,input,textarea,select,summary { -webkit-tap-highlight-color:transparent; }
:focus-visible { outline:3px solid var(--accent); outline-offset:4px; }
img { max-width:100%; display:block; }
svg { flex-shrink:0; }
.container { width:min(1160px,calc(100% - 48px)); margin-inline:auto; }
.skip-link { position:absolute; left:16px; top:-100px; z-index:99; padding:12px; background:var(--background); }
.skip-link:focus { top:10px; }
.site-header { position:sticky; top:0; z-index:20; background:var(--background); border-bottom:1px solid var(--border); }
.nav-inner { max-width:1250px; margin:auto; display:flex; align-items:center; gap:24px; padding:16px 24px; }
.brand { color:var(--heading); font-weight:750; font-size:1rem; text-decoration:none; white-space:nowrap; }
nav { min-width:0; margin-left:auto; overflow-x:auto; scrollbar-width:thin; }
nav ul { display:flex; align-items:center; gap:3px; padding:0; margin:0; list-style:none; width:max-content; }
nav a { display:block; padding:10px 12px; min-height:44px; color:var(--body); font-size:.85rem; text-decoration:none; border-radius:8px; white-space:nowrap; }
nav a:hover,nav a[aria-current] { color:var(--accent-hover); background:var(--surface-accent); }
.page { padding:64px 0 72px; scroll-margin-top:20px; }
.page + .page { border-top:1px solid var(--border); }
.page-heading { margin-bottom:32px; }
.eyebrow { color:var(--accent-hover); font-weight:700; letter-spacing:.1em; text-transform:uppercase; font-size:.75rem; margin-bottom:16px; }
.lead { font-size:1.08rem; max-width:730px; margin-top:20px; }
.professional-title { max-width:700px; font-size:1rem; font-weight:650; margin-bottom:24px; }
.about-hero { display:grid; grid-template-columns:minmax(0,1fr) 280px; align-items:center; gap:56px; }
.portrait img { width:100%; height:auto; aspect-ratio:4/5; object-fit:cover; border:1px solid var(--border); border-radius:var(--radius); }
.portrait figcaption { font-size:.75rem; margin-top:10px; color:var(--muted); }
.actions,.social-links,.project-links { display:flex; align-items:center; flex-wrap:wrap; gap:12px; }
.actions { margin:24px 0; }
.btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:12px 20px; min-height:48px; border:1px solid var(--input-border); border-radius:9px; color:var(--heading); background:var(--background); text-decoration:none; font-size:.9rem; font-weight:650; cursor:pointer; transition:background .12s,color .12s; }
.btn:hover { background:var(--surface); color:var(--heading); }
.btn.primary { background:var(--accent); color:var(--on-accent); border-color:var(--accent); }
.btn.primary:hover { background:var(--accent-hover); border-color:var(--accent-hover); }
button:disabled { cursor:wait; opacity:.7; }
.social-links a,.project-links a { display:inline-flex; align-items:center; gap:7px; min-height:44px; font-size:.875rem; }
.about-story { display:grid; grid-template-columns:280px 1fr; gap:56px; border-top:1px solid var(--border); margin-top:48px; padding-top:36px; }
.facts { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; margin-top:32px; }
.facts > div { padding:20px; background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); }
.facts strong,.facts span { display:block; }
.facts span { font-size:.8rem; color:var(--muted); }
.grid { display:grid; gap:24px; }
.grid.two { grid-template-columns:repeat(2,minmax(0,1fr)); }
.card,.entry,.project-card { min-width:0; padding:24px; background:var(--background); border:1px solid var(--border); border-radius:var(--radius); box-shadow:var(--shadow); }
.card h2,.entry h3 { margin-bottom:12px; }
.entries { display:grid; gap:20px; }
.entry-meta,.organisation { color:var(--muted); margin-bottom:10px; font-size:.875rem; }
.entry-meta { font-weight:600; }
.subheading { margin:40px 0 20px; }
.education { margin-top:40px; border-top:1px solid var(--border); padding-top:32px; }
.education > h2 { margin-bottom:20px; }
.chips { display:flex; flex-wrap:wrap; gap:8px; margin:20px 0 0; padding:0; list-style:none; }
.chips:empty { display:none; }
.chips li { padding:5px 10px; background:var(--surface); border:1px solid var(--border); border-radius:6px; color:var(--body); font-size:.8rem; }
.projects-toolbar { display:flex; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:24px; }
.projects-toolbar label { font-weight:600; }
select { background:var(--background); color:var(--body); border:1px solid var(--input-border); border-radius:8px; padding:10px 34px 10px 12px; max-width:100%; min-height:46px; }
#projectCount { font-size:.8rem; color:var(--muted); margin-left:auto; }
.project-card { padding:0; overflow:hidden; }
.project-cover { aspect-ratio:16/10; background:var(--surface); border-bottom:1px solid var(--border); display:grid; place-items:center; padding:12px; }
.project-cover img { width:100%; height:100%; object-fit:contain; min-height:0; border-radius:8px; }
.cover-title { color:var(--accent-hover); font-size:1.7rem; font-weight:700; text-align:center; }
.project-body { padding:24px; }
.project-body h2 { margin-bottom:12px; }
.project-body .problem { font-weight:600; margin-bottom:12px; color:var(--heading); }
.impact { margin-top:20px; padding:14px; background:var(--surface-accent); border-left:3px solid var(--accent); font-size:.875rem; }
.impact strong { display:block; }
details { margin-top:18px; }
summary { cursor:pointer; color:var(--accent-hover); padding-block:8px; }
details p { font-size:.875rem; margin-top:12px; white-space:pre-line; }
.project-links { margin-top:20px; border-top:1px solid var(--border); padding-top:12px; justify-content:space-between; }
.muted { color:var(--muted); font-size:.8rem; }
.certificate img { width:100%; height:auto; aspect-ratio:3/2; object-fit:contain; background:var(--surface); border-radius:8px; margin-bottom:24px; }
.company { background:var(--surface-accent); padding:36px; border:1px solid var(--border); border-radius:var(--radius); }
.company .grid { margin-bottom:28px; }
.company h2 { margin-bottom:14px; }
.contact-layout { display:grid; grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr); gap:36px; align-items:start; }
.contact-layout aside > p { margin:16px 0; }
.contact-links { display:grid; gap:10px; margin-top:24px; }
.contact-links a { display:flex; align-items:center; gap:14px; padding:15px; border:1px solid var(--border); border-radius:10px; text-decoration:none; overflow-wrap:anywhere; }
.contact-links strong { display:block; font-size:.8rem; }
.contact-links span { min-width:0; font-size:.875rem; }
.contact-form { position:relative; display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px; border:1px solid var(--border); border-radius:var(--radius); padding:28px; box-shadow:var(--shadow); }
.full { grid-column:1/-1; }
.field { min-width:0; display:flex; flex-direction:column; gap:8px; }
.field label { font-size:.85rem; font-weight:600; color:var(--body); }
.field input,.field textarea { padding:12px 14px; width:100%; min-width:0; border:1px solid var(--input-border); border-radius:8px; background:var(--background); color:var(--heading); line-height:1.5; }
.field input { min-height:50px; }
.field textarea { resize:vertical; min-height:160px; }
input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus { -webkit-box-shadow:0 0 0 1000px var(--surface-accent) inset; -webkit-text-fill-color:var(--heading); caret-color:var(--heading); }
/* Honeypot stays in the form, off-screen and out of keyboard/accessibility navigation. */
.form-trap { position:absolute !important; left:-10000px !important; top:auto !important; width:1px !important; height:1px !important; overflow:hidden !important; clip-path:inset(50%) !important; white-space:nowrap !important; }
.contact-status { min-height:72px; padding:12px; font-size:.875rem; overflow-wrap:anywhere; border-radius:8px; background:var(--surface); color:var(--heading); }
.contact-status:empty { visibility:hidden; }
.contact-status[data-state=error] { border:1px solid var(--input-border); }
.site-footer { background:var(--surface); border-top:1px solid var(--border); padding:32px 0; }
.footer-inner { display:flex; align-items:start; justify-content:space-between; gap:28px; }
.footer-inner > div:first-child { max-width:650px; }
.footer-inner p { font-size:.8rem; margin:8px 0; }
.footer-inner small { color:var(--muted); font-size:.75rem; }
@media(max-width:1050px) {
 .nav-inner { display:block; padding:12px 20px 8px; }
 .brand { display:inline-block; margin-bottom:8px; }
 nav { width:100%; }
 .about-hero { gap:32px; grid-template-columns:minmax(0,1fr) 230px; }
}
@media(max-width:760px) {
 .container { width:calc(100% - 32px); }
 .page { padding:36px 0 48px; }
 .about-hero { grid-template-columns:1fr; gap:24px; }
 .portrait { max-width:220px; }
 .about-story { grid-template-columns:1fr; gap:16px; margin-top:32px; padding-top:28px; }
 .grid.two,.contact-layout { grid-template-columns:1fr; }
 .facts { grid-template-columns:1fr; gap:10px; }
 .facts > div { padding:16px; }
 .contact-form,.company { padding:20px; }
 .footer-inner { flex-direction:column; }
 h1 { font-size:2.1rem; }
 h2 { font-size:1.3rem; }
 .professional-title,.lead { font-size:1rem; }
}
@media(max-width:420px) {
 .nav-inner { padding-inline:16px; }
 nav a { padding:10px; font-size:.8rem; }
 .contact-form { grid-template-columns:1fr; padding:16px; }
 .project-body,.card,.entry { padding:18px; }
 .project-card { padding:0; }
 .projects-toolbar { gap:8px; }
 .projects-toolbar select { flex:1; min-width:0; }
 .btn { padding:12px 16px; }
}
@media(prefers-reduced-motion:reduce) { *,*::before,*::after { scroll-behavior:auto !important; transition:none !important; animation:none !important; } }

````

## hussain/data/portfolio-data.json

````json
{
  "profile": {
    "name": "Muhammad Hussain",
    "title": "Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified",
    "subtitle": "Founder of Zorvexa",
    "email": "mhussain950091@gmail.com",
    "phone": "+92 310 5324610",
    "location": "Islamabad , Pakistan",
    "github": "https://github.com/mhussain950091-tech",
    "linkedin": "https://www.linkedin.com/in/muhammad-hussain-478731340/",
    "fiverr": "https://www.fiverr.com/m_hussain_123",
    "zorvexa_linkedin": "https://www.linkedin.com/company/zorvexa-data/",
    "bio": "I’m Muhammad Hussain, a Database Engineer and the founder of Zorvexa. I build reliable data foundations for business applications, analytics dashboards, and AI-powered tools.\n\nI work with PostgreSQL, MySQL, SQL Server, and MongoDB, backed by SQL, T-SQL, Python, and Java. My work connects clear schema design, consistent data relationships, and practical application requirements.\n\nFrom relational database workflows in Synthora AI to dashboards in NovaSight and Java business applications, I focus on systems that are useful, dependable, and straightforward to maintain.",
    "profileImage": "https://res.cloudinary.com/wzyad20a/image/upload/v1793115551/MY_professional_picture.png",
    "headline": "I design, optimize, and secure databases your business can rely on."
  },
  "projects": [
    {
      "id": "synthora-ai",
      "title": "Synthora AI",
      "tagline": "Synthetic Data Generation Platform",
      "description": "Synthora AI is a synthetic data generation platform developed during the HackDataV2 hackathon. Real-world datasets are often scarce, sensitive, or restricted by privacy requirements, which slows development, testing, and analytics. Synthora AI addresses this by generating realistic artificial data that preserves the structure and relationships of real datasets, without exposing confidential information.\n\nMy Role\n\nAs Team Lead, I directed the project from planning through delivery. I coordinated the team, assigned responsibilities, and kept the work aligned with the hackathon timeline. I also owned the platform’s entire database workflow.\n\nKey Contributions\n\nDatabase architecture: Designed the data model and controlled how data moves through the platform.\nRelational integrity: Defined primary key and foreign key (PK-FK) relationships so that generated data stays consistent and valid across linked tables.\nMulti-format data flow: Managed the flow of tabular, relational, and document-based data, so the platform can handle both structured and semi-structured data.\nFrontend delivery: Built the user interface and deployed it on Vercel, making the platform accessible through a live web application.\nTeam coordination: Worked with the backend developer to integrate the database layer, backend services, and interface into a single working product.\n\nTechnical Focus\n\nDatabase design, PK-FK relationship modeling, relational and document data handling, synthetic data generation, and web deployment (Vercel).\n\nOutcome\n\nDelivered a working, deployed prototype within the hackathon timeframe, demonstrating a practical approach to privacy-safe data generation.",
      "role": "Team Leader — Database Engineering & Schema Design",
      "context": "HackDataV2 Project",
      "technologies": [
        "Python",
        "SQL validation",
        "Database Design",
        "Relational Modeling",
        "Schema Validation",
        "Vercel"
      ],
      "liveUrl": "https://synthora-ai-nine.vercel.app/",
      "repoUrl": "https://github.com/mhussain950091-tech",
      "featured": true,
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793124110/Capture_d_écran_2026-10-27_230138.png",
      "video": "",
      "problem": "Teams need realistic test data without exposing sensitive information.",
      "built": "I led the database workflow, designed PK–FK relationships, and integrated relational and document data flows into a deployed prototype.",
      "impact": "Working hackathon prototype; [add metric: datasets generated or validation coverage].",
      "category": "ai"
    },
    {
      "id": "novasight",
      "title": "NovaSight",
      "tagline": "AI-Powered Dashboard Intelligence",
      "description": "NovaSight is an AI-powered dashboard creation platform that turns raw CSV data into interactive, presentation-ready dashboards in minutes. It removes the need for manual charting and BI tool expertise, so non-technical users can explore and understand their data on their own.\n\nMy Role\n\nAs Project Lead, I led a team of five, from planning and task distribution to integration and delivery. I also contributed to the platform’s data and database design.\n\nKey Features\n\nCSV to dashboard: Users upload a raw CSV file, and the platform builds a dashboard automatically.\nSmart chart recommendations: Suggests suitable chart types based on the structure and content of the data.\nKPI cards: Highlights key metrics at a glance.\nInteractive filters: Sidebar filters let users explore the data dynamically.\nExport: Dashboards and results can be exported for reporting and sharing.\nAI integration: Integrates the Anthropic Claude API and Gemini API to add intelligence to the analysis workflow.\nSynthetic Data module (in development): A schema-builder interface for generating tabular, relational, and document datasets.\n\nTechnology Stack\n\nPython, Streamlit, MySQL, Plotly, Anthropic Claude API, Gemini API.\n\nImpact\n\nNovaSight makes data analysis accessible to people without technical or BI backgrounds, cutting the time from raw data to usable insight.",
      "role": "Full-stack Engineer",
      "context": "Data Analytics Platform",
      "technologies": [
        "Python",
        "Streamlit",
        "pandas",
        "NumPy",
        "Plotly",
        "PostgreSQL"
      ],
      "liveUrl": "",
      "repoUrl": "https://github.com/mhussain950091-tech",
      "featured": true,
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793124695/novasight_cover.jpg",
      "video": "",
      "problem": "Raw CSV files are difficult to explore without manual analysis and charting.",
      "built": "I led a five-person team and contributed data and database design for an AI-assisted dashboard platform.",
      "impact": "Turned uploaded data into interactive dashboards; [add metric: time saved per report].",
      "category": "ai"
    },
    {
      "id": "fast-food-pos",
      "title": "Fast Food POS",
      "tagline": "Java Desktop Point-of-Sale System",
      "description": "I built a Java Swing and MySQL point-of-sale application for a fast-food business, covering products, orders, payments and reporting. The earlier saved description referred to the separate SmartlyPOS project and is retained in sourceNotes for review.",
      "role": "Solo Engineer",
      "context": "Business Client Project",
      "technologies": [
        "Java Swing",
        "JDBC",
        "MySQL",
        "Launch4j"
      ],
      "liveUrl": "",
      "repoUrl": "https://github.com/mhussain950091-tech/personal-pos",
      "featured": true,
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793124821/pos_client_cover.jpg",
      "video": "",
      "problem": "A restaurant needed a consistent way to manage billing, products, and sales records.",
      "built": "I built a Java Swing application connected to MySQL for cart management, payments, inventory, and daily reporting.",
      "impact": "Delivered a desktop POS for a business client; [add metric: daily orders processed].",
      "category": "business",
      "sourceNotes": "SmartlyPOS is a point-of-sale system for marts and retail stores, with an AI voice control layer on top. Cashiers and shop staff can speak to the system instead of searching menus and typing, which speeds up billing and reduces errors during busy hours.\n\nKey Features\n\nVoice price queries: Staff can ask for a product’s price by voice, for example “check price of Pepsi”, and get an instant answer.\nVoice order actions: Staff can build an order by speaking, for example “add two brushes and Safina chawal to order”. The AI understands the items and quantities, adds them to the order, and calculates the total price.\nCore POS functionality: A complete base system for managing products, orders, and billing, built before the voice layer is added.\n\nTechnology Stack\n\nFrontend: React, TypeScript\nBackend: FastAPI (Python)\nDatabase: PostgreSQL\nAI layer: Voice command understanding for queries and order actions\n\nMy Role\n\nI conceived, designed, and am building the entire system on my own, from product concept and database design to the interface and AI integration.\n\nCurrent Status\n\nThe base POS system is under development, and the product landing page is in progress. The voice control layer will be added once the core system is stable."
    },
    {
      "id": "sarina-hotel",
      "title": "Hotel Management System",
      "tagline": "Hotel Operations & Records Platform",
      "description": "The Hotel Management System is a database-driven application that manages the daily operations of a hotel in one place. It replaces manual registers and scattered records with a structured system for guest registration, room allocation, bookings, check-in and check-out, and billing.\n\nThe system keeps room availability up to date, prevents double bookings, and stores every guest record and transaction in a relational database. This gives hotel staff accurate information and reduces errors in daily work.\n\nMy role: I worked on the project as part of a team, contributing to the database design and the system’s core logic, including the relationships between guests, rooms, bookings, and billing.",
      "role": "Junior Engineer",
      "context": "CodeAlpha Internship Project",
      "technologies": [
        "Java Swing",
        "JDBC",
        "MySQL"
      ],
      "liveUrl": "",
      "repoUrl": "https://github.com/mhussain950091-tech/Code-alpha_hotel_management_system",
      "featured": true,
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793125146/hotel_management_gold_cover.jpg",
      "video": "",
      "problem": "Hotel teams need connected records for guests, rooms, bookings, and billing.",
      "built": "I contributed relational database design and application logic for a Java Swing and MySQL hotel management system.",
      "impact": "Centralized hotel records and booking workflows; [add metric: records managed or time saved].",
      "category": "business"
    }
  ],
  "skills": {
    "Databases": [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB"
    ],
    "Languages": [
      "SQL",
      "T-SQL",
      "Python",
      "Java",
      "C++",
      "JavaScript"
    ],
    "Database Engineering": [
      "Schema Design",
      "Relational Modeling",
      "Primary & Foreign Keys",
      "Data Integrity",
      "SQL Validation",
      "Database Migration",
      "ER Diagrams",
      "Normalization"
    ],
    "Data & Applications": [
      "pandas",
      "NumPy",
      "Streamlit",
      "Plotly",
      "Java Swing",
      "JDBC",
      "HTML",
      "CSS"
    ],
    "Tools": [
      "Git",
      "GitHub",
      "Vercel",
      "Launch4j"
    ]
  },
  "journey": [
    {
      "period": "Sep 2024",
      "event": "Started BS Software Engineering at COMSATS University Islamabad, Wah Campus"
    },
    {
      "period": "2024–2025",
      "event": "Built foundation in C++, databases, digital logic, and software development"
    },
    {
      "period": "2025",
      "event": "Developed interest in SQL, relational database design, and Java desktop applications"
    },
    {
      "period": "Early 2026",
      "event": "Developed Fast Food POS for a Sargodha business using Java Swing and MySQL"
    },
    {
      "period": "2026",
      "event": "Expanded into Python, pandas, Streamlit, and analytics dashboards"
    },
    {
      "period": "Mid 2026",
      "event": "Built NovaSight — converting uploaded data into dashboards and insights"
    },
    {
      "period": "Sep 2026",
      "event": "Led three-member team to build Synthora AI for HackDataV2"
    },
    {
      "period": "Sep–Oct 2026",
      "event": "Founded Zorvexa — developing company identity and LinkedIn presence"
    },
    {
      "period": "Oct 2026",
      "event": "Continued into web development, Flutter, and food-ordering system planning"
    }
  ],
  "certifications": [
    {
      "title": "Java Programming Internship",
      "issuer": "CodeAlpha",
      "date": "2025",
      "description": "Completed a one-month virtual internship in Java programming, strengthening practical programming experience and analytical problem-solving skills. Received a letter of recommendation recognizing adaptability, productivity, collaboration, and a commitment to learning new technologies.",
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793119835/Certificate.jpg"
    },
    {
      "title": "Microsoft SQL Certified",
      "issuer": "Microsoft",
      "date": "June 2026",
      "description": "Strengthened foundational knowledge of SQL and relational databases, with an emphasis on understanding structured data and using queries to retrieve meaningful information. Built a stronger foundation for database development, data exploration, and reporting within database-driven applications.",
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793120459/Capture_d_écran_2026-10-27_215939.png"
    },
    {
      "title": "Introduction to Prompt Engineering",
      "issuer": "SimpliLearn",
      "date": "Feb 2026",
      "description": "Developed a foundational understanding of prompt engineering and the role of clear instructions in guiding generative AI responses. Strengthened the ability to communicate task requirements effectively when using AI tools for learning, content creation, and software development support.",
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793215972/Capture_d_écran_2026-10-29_003231.png"
    },
    {
      "title": "Get Started with SQL Analytics and BI on Databricks",
      "issuer": "SimpliLearn",
      "date": "Feb 2026",
      "description": "Gained introductory knowledge of SQL analytics and business intelligence on Databricks. Developed an understanding of how SQL-based analysis supports data exploration, reporting, and business insights, extending a database development foundation toward analytical workflows.",
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793123983/Capture_d_écran_2026-10-27_225917.png"
    },
    {
      "title": "Getting Started with Git and GitHub",
      "issuer": "IBM",
      "date": "July 2026",
      "description": "Developed a foundational understanding of version control with Git and GitHub, including managing source code, tracking changes, and supporting collaborative development. Strengthened the knowledge needed to maintain organized repositories and contribute to structured software development workflows.",
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793123880/Capture_d_écran_2026-10-27_225730.png"
    },
    {
      "title": "Introduction to SQL",
      "issuer": "SimpliLearn",
      "date": "Feb 2026",
      "description": "Starting with SQL ,Optimizing Query and Build Database Schema",
      "image": "https://res.cloudinary.com/wzyad20a/image/upload/v1793119841/Introduction_to_SQL.pdf.jpg"
    }
  ],
  "leadership": [
    {
      "role": "Head of Events",
      "org": "COMSATS Heritage Society",
      "description": "Progressed from junior/executive responsibilities to events leadership"
    },
    {
      "role": "Punjab Culture Head",
      "org": "COMSATS Heritage Society",
      "description": "Led cultural programming and event coordination"
    },
    {
      "role": "Team Leader",
      "org": "Synthora AI — HackDataV2",
      "description": "Led three-member development team"
    },
    {
      "role": "Founder & CEO",
      "org": "Zorvexa",
      "description": "Building a software company focused on databases, development, and AI solutions"
    }
  ],
  "zorvexa": {
    "name": "Zorvexa",
    "role": "Founder & CEO",
    "focus": "Data engineering · AI intelligence · Scalable technology",
    "services": [
      "Relational database design",
      "SQL queries and database integration",
      "Java desktop business applications",
      "Python dashboards and reporting tools",
      "Database optimization and improvements"
    ],
    "linkedin": "https://www.linkedin.com/company/zorvexa-data/",
    "introduction": "At Zorvexa, we turn business data into dependable systems. We bring together data engineering, AI intelligence, and scalable technology to build practical solutions around the way our clients work.",
    "mission": "We help businesses build data foundations they can trust and grow with. We start with the problem, choose suitable technology, and deliver clear, maintainable solutions with a practical purpose."
  },
  "experience": [
    {
      "title": "Founder & CEO",
      "company": "Zorvexa",
      "type": "Employment",
      "period": "2026–Present",
      "description": "I build database solutions, business applications and data tools through Zorvexa.",
      "highlights": [
        "Database engineering",
        "Business applications"
      ]
    },
    {
      "title": "Java Programming Intern",
      "company": "CodeAlpha",
      "type": "Internship",
      "period": "2025",
      "description": "I completed a virtual internship in Java programming and contributed to a database-driven hotel management application.",
      "highlights": [
        "Java Swing",
        "MySQL",
        "JDBC"
      ]
    }
  ],
  "education": [
    {
      "degree": "BS Software Engineering",
      "institution": "COMSATS University Islamabad, Wah Campus",
      "period": "2024–Present",
      "description": "I am pursuing my degree in Software Engineering."
    }
  ]
}

````

## hussain/index.html

````html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Muhammad Hussain — Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified</title>
<meta name="description" content="Muhammad Hussain — Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified. Database systems, SQL projects, and founder of Zorvexa.">
<meta name="theme-color" content="#FFFFFF">
<!-- Generated from site.config.json: change siteUrl there, then npm run build. -->
<link rel="canonical" href="https://muhammadhussain.vercel.app/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Muhammad Hussain">
<meta property="og:title" content="Muhammad Hussain — Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified">
<meta property="og:description" content="Muhammad Hussain — Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified. Database systems, SQL projects, and founder of Zorvexa.">
<meta property="og:url" content="https://muhammadhussain.vercel.app/">
<meta property="og:image" content="https://muhammadhussain.vercel.app/assets/social-preview.png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Muhammad Hussain — Database Engineer. PostgreSQL, MySQL, SQL Server, MongoDB. Microsoft SQL Certified. Founder of Zorvexa.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Muhammad Hussain — Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified">
<meta name="twitter:description" content="Muhammad Hussain — Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified. Database systems, SQL projects, and founder of Zorvexa.">
<meta name="twitter:url" content="https://muhammadhussain.vercel.app/"><meta name="twitter:image" content="https://muhammadhussain.vercel.app/assets/social-preview.png">
<meta name="twitter:image:alt" content="Muhammad Hussain — Database Engineer and founder of Zorvexa">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/css/style.css">
<script src="/js/main.js" defer></script>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="nav-inner"><a class="brand" href="#about">Muhammad Hussain</a><nav aria-label="Main navigation"><ul><li><a href="#about" data-page="about">About</a></li><li><a href="#experience" data-page="experience">Experience</a></li><li><a href="#projects" data-page="projects">Projects</a></li><li><a href="#skills" data-page="skills">Skills</a></li><li><a href="#certifications" data-page="certifications">Certifications</a></li><li><a href="#services" data-page="services">Zorvexa</a></li><li><a href="#contact" data-page="contact">Contact</a></li></ul></nav></div></header>
<main class="container" id="main"><section class="page" id="about" aria-label="About"><div class="about-hero"><div><header class="page-heading"><p class="eyebrow">Muhammad Hussain</p><h1 tabindex="-1">I design, optimize, and secure databases your business can rely on.</h1><p class="lead">I build dependable data foundations for business applications, analytics, and AI-powered tools.</p></header><p class="professional-title">Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified</p><div class="actions"><a class="btn primary" href="#contact">Get in Touch</a><a class="btn" href="/resume.pdf" download>Download CV</a></div><div class="social-links"><a class="" href="https://github.com/mhussain950091-tech" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-.5-2.5C19 15 21 13 21 9a6 6 0 0 0-1.5-4 5 5 0 0 0-.1-4S17 1 15 3a15 15 0 0 0-6 0C7 1 4.6 1 4.6 1a5 5 0 0 0-.1 4A6 6 0 0 0 3 9c0 4 2 6 6.5 6.5C9 16 9 17 9 18v4"/></svg>GitHub</a><a class="" href="https://www.linkedin.com/in/muhammad-hussain-478731340/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4"/></svg>LinkedIn</a><a class="" href="mailto:mhussain950091@gmail.com"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>Email</a></div></div><figure class="portrait"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_560,c_limit/v1793115551/MY_professional_picture.png" width="448" height="560" alt="Portrait of Muhammad Hussain, Database Engineer" fetchpriority="high" decoding="async"><figcaption>Database Engineer · Founder of Zorvexa</figcaption></figure></div><div class="about-story"><h2>How I work</h2><div><p>I’m Muhammad Hussain, a Database Engineer and the founder of Zorvexa. I build reliable data foundations for business applications, analytics dashboards, and AI-powered tools.</p>
<p>I work with PostgreSQL, MySQL, SQL Server, and MongoDB, backed by SQL, T-SQL, Python, and Java. My work connects clear schema design, consistent data relationships, and practical application requirements.</p>
<p>From relational database workflows in Synthora AI to dashboards in NovaSight and Java business applications, I focus on systems that are useful, dependable, and straightforward to maintain.</p></div></div><div class="facts"><div><strong>4</strong><span>Selected projects</span></div><div><strong>Data → Systems</strong><span>My focus</span></div><div><strong>Islamabad , Pakistan</strong><span>Location</span></div></div></section>
<section class="page" id="experience" aria-label="Experience"><header class="page-heading"><p class="eyebrow">My work</p><h1 tabindex="-1">Experience &amp; memberships</h1><p class="lead">The roles, projects, and teams I have contributed to.</p></header><div class="entries"><article class="entry"><div class="entry-meta">2026–Present · Employment</div><h3>Founder &amp; CEO</h3><p class="organisation">Zorvexa</p><p>I build database solutions, business applications and data tools through Zorvexa.</p><ul class="chips"><li>Database engineering</li><li>Business applications</li></ul></article><article class="entry"><div class="entry-meta">2025 · Internship</div><h3>Java Programming Intern</h3><p class="organisation">CodeAlpha</p><p>I completed a virtual internship in Java programming and contributed to a database-driven hotel management application.</p><ul class="chips"><li>Java Swing</li><li>MySQL</li><li>JDBC</li></ul></article></div><h2 class="subheading">Leadership & memberships</h2><div class="grid two"><article class="entry"><div class="entry-meta"></div><h3>Head of Events</h3><p class="organisation">COMSATS Heritage Society</p><p>Progressed from junior/executive responsibilities to events leadership</p><ul class="chips"></ul></article><article class="entry"><div class="entry-meta"></div><h3>Punjab Culture Head</h3><p class="organisation">COMSATS Heritage Society</p><p>Led cultural programming and event coordination</p><ul class="chips"></ul></article><article class="entry"><div class="entry-meta"></div><h3>Team Leader</h3><p class="organisation">Synthora AI — HackDataV2</p><p>Led three-member development team</p><ul class="chips"></ul></article><article class="entry"><div class="entry-meta"></div><h3>Founder &amp; CEO</h3><p class="organisation">Zorvexa</p><p>Building a software company focused on databases, development, and AI solutions</p><ul class="chips"></ul></article></div><div class="education" id="education"><h2>Education</h2><div class="entries"><article class="entry"><div class="entry-meta">2024–Present</div><h3>BS Software Engineering</h3><p class="organisation">COMSATS University Islamabad, Wah Campus</p><p>I am pursuing my degree in Software Engineering.</p><ul class="chips"></ul></article></div></div></section>
<section class="page" id="projects" aria-label="Projects"><header class="page-heading"><p class="eyebrow">Selected work</p><h1 tabindex="-1">Projects built around real problems</h1><p class="lead">What I built, the data behind it, and the outcome.</p></header><div class="projects-toolbar" hidden><label for="projectFilter">Show</label><select id="projectFilter"><option value="all">All projects</option><option value="featured">Featured projects</option><option value="ai">AI &amp; data</option><option value="business">Business software</option></select><span id="projectCount" role="status" aria-live="polite"></span></div><div class="grid two" id="projectsGrid"><article class="project-card" data-category="ai" data-featured="true"><div class="project-cover"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_800,c_limit/v1793124110/Capture_d_%C3%A9cran_2026-10-27_230138.png" width="800" height="500" alt="Synthora AI project cover" loading="lazy" decoding="async"></div><div class="project-body"><p class="eyebrow">AI &amp; data</p><h2>Synthora AI</h2><p class="problem">Teams need realistic test data without exposing sensitive information.</p><p>I led the database workflow, designed PK–FK relationships, and integrated relational and document data flows into a deployed prototype.</p><ul class="chips"><li>Python</li><li>SQL validation</li><li>Database Design</li><li>Relational Modeling</li><li>Schema Validation</li><li>Vercel</li></ul><p class="impact"><strong>Impact</strong> Working hackathon prototype; [add metric: datasets generated or validation coverage].</p><details><summary>Read project details</summary><p>Synthora AI is a synthetic data generation platform developed during the HackDataV2 hackathon. Real-world datasets are often scarce, sensitive, or restricted by privacy requirements, which slows development, testing, and analytics. Synthora AI addresses this by generating realistic artificial data that preserves the structure and relationships of real datasets, without exposing confidential information.</p>
<p>My Role</p>
<p>As Team Lead, I directed the project from planning through delivery. I coordinated the team, assigned responsibilities, and kept the work aligned with the hackathon timeline. I also owned the platform’s entire database workflow.</p>
<p>Key Contributions</p>
<p>Database architecture: Designed the data model and controlled how data moves through the platform.
Relational integrity: Defined primary key and foreign key (PK-FK) relationships so that generated data stays consistent and valid across linked tables.
Multi-format data flow: Managed the flow of tabular, relational, and document-based data, so the platform can handle both structured and semi-structured data.
Frontend delivery: Built the user interface and deployed it on Vercel, making the platform accessible through a live web application.
Team coordination: Worked with the backend developer to integrate the database layer, backend services, and interface into a single working product.</p>
<p>Technical Focus</p>
<p>Database design, PK-FK relationship modeling, relational and document data handling, synthetic data generation, and web deployment (Vercel).</p>
<p>Outcome</p>
<p>Delivered a working, deployed prototype within the hackathon timeframe, demonstrating a practical approach to privacy-safe data generation.</p></details><div class="project-links"><a class="" href="https://github.com/mhussain950091-tech" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-.5-2.5C19 15 21 13 21 9a6 6 0 0 0-1.5-4 5 5 0 0 0-.1-4S17 1 15 3a15 15 0 0 0-6 0C7 1 4.6 1 4.6 1a5 5 0 0 0-.1 4A6 6 0 0 0 3 9c0 4 2 6 6.5 6.5C9 16 9 17 9 18v4"/></svg>GitHub profile</a><a class="" href="https://synthora-ai-nine.vercel.app/" target="_blank" rel="noopener noreferrer">Live demo ↗</a></div></div></article>
<article class="project-card" data-category="ai" data-featured="true"><div class="project-cover"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_800,c_limit/v1793124695/novasight_cover.jpg" width="800" height="500" alt="NovaSight project cover" loading="lazy" decoding="async"></div><div class="project-body"><p class="eyebrow">AI &amp; data</p><h2>NovaSight</h2><p class="problem">Raw CSV files are difficult to explore without manual analysis and charting.</p><p>I led a five-person team and contributed data and database design for an AI-assisted dashboard platform.</p><ul class="chips"><li>Python</li><li>Streamlit</li><li>pandas</li><li>NumPy</li><li>Plotly</li><li>PostgreSQL</li></ul><p class="impact"><strong>Impact</strong> Turned uploaded data into interactive dashboards; [add metric: time saved per report].</p><details><summary>Read project details</summary><p>NovaSight is an AI-powered dashboard creation platform that turns raw CSV data into interactive, presentation-ready dashboards in minutes. It removes the need for manual charting and BI tool expertise, so non-technical users can explore and understand their data on their own.</p>
<p>My Role</p>
<p>As Project Lead, I led a team of five, from planning and task distribution to integration and delivery. I also contributed to the platform’s data and database design.</p>
<p>Key Features</p>
<p>CSV to dashboard: Users upload a raw CSV file, and the platform builds a dashboard automatically.
Smart chart recommendations: Suggests suitable chart types based on the structure and content of the data.
KPI cards: Highlights key metrics at a glance.
Interactive filters: Sidebar filters let users explore the data dynamically.
Export: Dashboards and results can be exported for reporting and sharing.
AI integration: Integrates the Anthropic Claude API and Gemini API to add intelligence to the analysis workflow.
Synthetic Data module (in development): A schema-builder interface for generating tabular, relational, and document datasets.</p>
<p>Technology Stack</p>
<p>Python, Streamlit, MySQL, Plotly, Anthropic Claude API, Gemini API.</p>
<p>Impact</p>
<p>NovaSight makes data analysis accessible to people without technical or BI backgrounds, cutting the time from raw data to usable insight.</p></details><div class="project-links"><a class="" href="https://github.com/mhussain950091-tech" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-.5-2.5C19 15 21 13 21 9a6 6 0 0 0-1.5-4 5 5 0 0 0-.1-4S17 1 15 3a15 15 0 0 0-6 0C7 1 4.6 1 4.6 1a5 5 0 0 0-.1 4A6 6 0 0 0 3 9c0 4 2 6 6.5 6.5C9 16 9 17 9 18v4"/></svg>GitHub profile</a><span class="muted">Live demo: not available</span></div></div></article>
<article class="project-card" data-category="business" data-featured="true"><div class="project-cover"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_800,c_limit/v1793124821/pos_client_cover.jpg" width="800" height="500" alt="Fast Food POS project cover" loading="lazy" decoding="async"></div><div class="project-body"><p class="eyebrow">Business software</p><h2>Fast Food POS</h2><p class="problem">A restaurant needed a consistent way to manage billing, products, and sales records.</p><p>I built a Java Swing application connected to MySQL for cart management, payments, inventory, and daily reporting.</p><ul class="chips"><li>Java Swing</li><li>JDBC</li><li>MySQL</li><li>Launch4j</li></ul><p class="impact"><strong>Impact</strong> Delivered a desktop POS for a business client; [add metric: daily orders processed].</p><details><summary>Read project details</summary><p>I built a Java Swing and MySQL point-of-sale application for a fast-food business, covering products, orders, payments and reporting. The earlier saved description referred to the separate SmartlyPOS project and is retained in sourceNotes for review.</p></details><div class="project-links"><a class="" href="https://github.com/mhussain950091-tech/personal-pos" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-.5-2.5C19 15 21 13 21 9a6 6 0 0 0-1.5-4 5 5 0 0 0-.1-4S17 1 15 3a15 15 0 0 0-6 0C7 1 4.6 1 4.6 1a5 5 0 0 0-.1 4A6 6 0 0 0 3 9c0 4 2 6 6.5 6.5C9 16 9 17 9 18v4"/></svg>GitHub repository</a><span class="muted">Live demo: not available</span></div></div></article>
<article class="project-card" data-category="business" data-featured="true"><div class="project-cover"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_800,c_limit/v1793125146/hotel_management_gold_cover.jpg" width="800" height="500" alt="Hotel Management System project cover" loading="lazy" decoding="async"></div><div class="project-body"><p class="eyebrow">Business software</p><h2>Hotel Management System</h2><p class="problem">Hotel teams need connected records for guests, rooms, bookings, and billing.</p><p>I contributed relational database design and application logic for a Java Swing and MySQL hotel management system.</p><ul class="chips"><li>Java Swing</li><li>JDBC</li><li>MySQL</li></ul><p class="impact"><strong>Impact</strong> Centralized hotel records and booking workflows; [add metric: records managed or time saved].</p><details><summary>Read project details</summary><p>The Hotel Management System is a database-driven application that manages the daily operations of a hotel in one place. It replaces manual registers and scattered records with a structured system for guest registration, room allocation, bookings, check-in and check-out, and billing.</p>
<p>The system keeps room availability up to date, prevents double bookings, and stores every guest record and transaction in a relational database. This gives hotel staff accurate information and reduces errors in daily work.</p>
<p>My role: I worked on the project as part of a team, contributing to the database design and the system’s core logic, including the relationships between guests, rooms, bookings, and billing.</p></details><div class="project-links"><a class="" href="https://github.com/mhussain950091-tech/Code-alpha_hotel_management_system" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-.5-2.5C19 15 21 13 21 9a6 6 0 0 0-1.5-4 5 5 0 0 0-.1-4S17 1 15 3a15 15 0 0 0-6 0C7 1 4.6 1 4.6 1a5 5 0 0 0-.1 4A6 6 0 0 0 3 9c0 4 2 6 6.5 6.5C9 16 9 17 9 18v4"/></svg>GitHub repository</a><span class="muted">Live demo: not available</span></div></div></article></div></section>
<section class="page" id="skills" aria-label="Skills"><header class="page-heading"><p class="eyebrow">My toolkit</p><h1 tabindex="-1">Skills I use in practice</h1><p class="lead">Technologies and techniques behind my database and application work.</p></header><div class="grid two"><article class="card"><h2>Databases</h2><ul class="chips"><li>PostgreSQL</li><li>MySQL</li><li>SQL Server</li><li>MongoDB</li></ul></article><article class="card"><h2>Languages</h2><ul class="chips"><li>SQL</li><li>T-SQL</li><li>Python</li><li>Java</li><li>C++</li><li>JavaScript</li></ul></article><article class="card"><h2>Database Engineering</h2><ul class="chips"><li>Schema Design</li><li>Relational Modeling</li><li>Primary &amp; Foreign Keys</li><li>Data Integrity</li><li>SQL Validation</li><li>Database Migration</li><li>ER Diagrams</li><li>Normalization</li></ul></article><article class="card"><h2>Data &amp; Applications</h2><ul class="chips"><li>pandas</li><li>NumPy</li><li>Streamlit</li><li>Plotly</li><li>Java Swing</li><li>JDBC</li><li>HTML</li><li>CSS</li></ul></article><article class="card"><h2>Tools</h2><ul class="chips"><li>Git</li><li>GitHub</li><li>Vercel</li><li>Launch4j</li></ul></article></div></section>
<section class="page" id="certifications" aria-label="Certifications"><header class="page-heading"><p class="eyebrow">Credentials</p><h1 tabindex="-1">Certifications</h1><p class="lead">Training and internship credentials that support my work.</p></header><div class="grid two"><article class="card certificate"><a href="https://res.cloudinary.com/wzyad20a/image/upload/v1793119835/Certificate.jpg" target="_blank" rel="noopener noreferrer" aria-label="View Java Programming Internship certificate"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_720,c_limit/v1793119835/Certificate.jpg" width="720" height="480" alt="Java Programming Internship certificate issued by CodeAlpha" loading="lazy" decoding="async"></a><h2>Java Programming Internship</h2><p class="entry-meta">CodeAlpha · 2025</p><p>Completed a one-month virtual internship in Java programming, strengthening practical programming experience and analytical problem-solving skills. Received a letter of recommendation recognizing adaptability, productivity, collaboration, and a commitment to learning new technologies.</p></article><article class="card certificate"><a href="https://res.cloudinary.com/wzyad20a/image/upload/v1793120459/Capture_d_%C3%A9cran_2026-10-27_215939.png" target="_blank" rel="noopener noreferrer" aria-label="View Microsoft SQL Certified certificate"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_720,c_limit/v1793120459/Capture_d_%C3%A9cran_2026-10-27_215939.png" width="720" height="480" alt="Microsoft SQL Certified certificate issued by Microsoft" loading="lazy" decoding="async"></a><h2>Microsoft SQL Certified</h2><p class="entry-meta">Microsoft · June 2026</p><p>Strengthened foundational knowledge of SQL and relational databases, with an emphasis on understanding structured data and using queries to retrieve meaningful information. Built a stronger foundation for database development, data exploration, and reporting within database-driven applications.</p></article><article class="card certificate"><a href="https://res.cloudinary.com/wzyad20a/image/upload/v1793215972/Capture_d_%C3%A9cran_2026-10-29_003231.png" target="_blank" rel="noopener noreferrer" aria-label="View Introduction to Prompt Engineering certificate"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_720,c_limit/v1793215972/Capture_d_%C3%A9cran_2026-10-29_003231.png" width="720" height="480" alt="Introduction to Prompt Engineering certificate issued by SimpliLearn" loading="lazy" decoding="async"></a><h2>Introduction to Prompt Engineering</h2><p class="entry-meta">SimpliLearn · Feb 2026</p><p>Developed a foundational understanding of prompt engineering and the role of clear instructions in guiding generative AI responses. Strengthened the ability to communicate task requirements effectively when using AI tools for learning, content creation, and software development support.</p></article><article class="card certificate"><a href="https://res.cloudinary.com/wzyad20a/image/upload/v1793123983/Capture_d_%C3%A9cran_2026-10-27_225917.png" target="_blank" rel="noopener noreferrer" aria-label="View Get Started with SQL Analytics and BI on Databricks certificate"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_720,c_limit/v1793123983/Capture_d_%C3%A9cran_2026-10-27_225917.png" width="720" height="480" alt="Get Started with SQL Analytics and BI on Databricks certificate issued by SimpliLearn" loading="lazy" decoding="async"></a><h2>Get Started with SQL Analytics and BI on Databricks</h2><p class="entry-meta">SimpliLearn · Feb 2026</p><p>Gained introductory knowledge of SQL analytics and business intelligence on Databricks. Developed an understanding of how SQL-based analysis supports data exploration, reporting, and business insights, extending a database development foundation toward analytical workflows.</p></article><article class="card certificate"><a href="https://res.cloudinary.com/wzyad20a/image/upload/v1793123880/Capture_d_%C3%A9cran_2026-10-27_225730.png" target="_blank" rel="noopener noreferrer" aria-label="View Getting Started with Git and GitHub certificate"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_720,c_limit/v1793123880/Capture_d_%C3%A9cran_2026-10-27_225730.png" width="720" height="480" alt="Getting Started with Git and GitHub certificate issued by IBM" loading="lazy" decoding="async"></a><h2>Getting Started with Git and GitHub</h2><p class="entry-meta">IBM · July 2026</p><p>Developed a foundational understanding of version control with Git and GitHub, including managing source code, tracking changes, and supporting collaborative development. Strengthened the knowledge needed to maintain organized repositories and contribute to structured software development workflows.</p></article><article class="card certificate"><a href="https://res.cloudinary.com/wzyad20a/image/upload/v1793119841/Introduction_to_SQL.pdf.jpg" target="_blank" rel="noopener noreferrer" aria-label="View Introduction to SQL certificate"><img src="https://res.cloudinary.com/wzyad20a/image/upload/f_auto,q_auto,w_720,c_limit/v1793119841/Introduction_to_SQL.pdf.jpg" width="720" height="480" alt="Introduction to SQL certificate issued by SimpliLearn" loading="lazy" decoding="async"></a><h2>Introduction to SQL</h2><p class="entry-meta">SimpliLearn · Feb 2026</p><p>Starting with SQL ,Optimizing Query and Build Database Schema</p></article></div></section>
<section class="page" id="services" aria-label="Zorvexa"><div class="company"><header class="page-heading"><p class="eyebrow">Company · Founded by Muhammad Hussain</p><h1 tabindex="-1">Zorvexa</h1><p class="lead">Data engineering · AI intelligence · Scalable technology</p></header><div class="grid two"><article><h2>Who we are</h2><p>At Zorvexa, we turn business data into dependable systems. We bring together data engineering, AI intelligence, and scalable technology to build practical solutions around the way our clients work.</p></article><article><h2>Our mission</h2><p>We help businesses build data foundations they can trust and grow with. We start with the problem, choose suitable technology, and deliver clear, maintainable solutions with a practical purpose.</p></article></div><a class="btn" href="https://www.linkedin.com/company/zorvexa-data/" target="_blank" rel="noopener noreferrer">Explore Zorvexa on LinkedIn ↗</a></div><h2 class="subheading">What we can help with</h2><div class="grid two"><article class="card"><h3>Relational database design</h3></article><article class="card"><h3>SQL queries and database integration</h3></article><article class="card"><h3>Java desktop business applications</h3></article><article class="card"><h3>Python dashboards and reporting tools</h3></article><article class="card"><h3>Database optimization and improvements</h3></article></div></section>
<section class="page" id="contact" aria-label="Contact"><header class="page-heading"><p class="eyebrow">Let’s talk</p><h1 tabindex="-1">Tell me about your data challenge</h1><p class="lead">For opportunities, database projects, or collaboration, contact me directly or use the form.</p></header><div class="contact-layout"><aside><h2>Reach me directly</h2><p>I welcome a clear description of the problem, your timeline, and the outcome you need.</p><div class="contact-links"><a class="" href="mailto:mhussain950091@gmail.com"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><span><strong>Email</strong>mhussain950091@gmail.com</span></a><a class="" href="https://www.linkedin.com/in/muhammad-hussain-478731340/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4"/></svg><span><strong>LinkedIn</strong>Connect on LinkedIn</span></a><a class="" href="https://github.com/mhussain950091-tech" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-.5-2.5C19 15 21 13 21 9a6 6 0 0 0-1.5-4 5 5 0 0 0-.1-4S17 1 15 3a15 15 0 0 0-6 0C7 1 4.6 1 4.6 1a5 5 0 0 0-.1 4A6 6 0 0 0 3 9c0 4 2 6 6.5 6.5C9 16 9 17 9 18v4"/></svg><span><strong>GitHub</strong>Explore my code</span></a><a class="" href="https://wa.me/923105324610" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 11.5a9 9 0 0 1-13.4 7.8L3 21l1.7-4.6A9 9 0 1 1 21 11.5Z"/><path d="M8 7c-2 4 4 10 8 8l-2-3-2 1-2-2 1-2z"/></svg><span><strong>WhatsApp</strong>Start a conversation</span></a><a class="" href="https://www.fiverr.com/m_hussain_123" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 21V8c0-4 2-6 6-6h2M5 9h14v12M14 21h8M18 3v.01"/></svg><span><strong>Fiverr</strong>View my services</span></a></div></aside><form id="contactForm" class="contact-form" action="/api/contact" method="post"><h2 class="full">Send an enquiry</h2><div class="form-trap" aria-hidden="true" inert><label for="website">Leave empty</label><input id="website" name="website" type="text" tabindex="-1" autocomplete="off"></div><div class="field "><label for="name">Your name</label><input id="name" name="name" type="text" maxlength="100" required autocomplete="name"></div><div class="field "><label for="email">Your email</label><input id="email" name="email" type="email" maxlength="254" required autocomplete="email"></div><div class="field full"><label for="subject">Subject (optional)</label><input id="subject" name="subject" type="text" maxlength="160"  ></div><div class="field full"><label for="message">Your message</label><textarea id="message" name="message" rows="6" maxlength="5000" required></textarea></div><button type="submit" class="btn primary full" disabled><span>Send message</span></button><noscript><p class="full">Please use the email or LinkedIn links to contact me when JavaScript is disabled.</p></noscript><p class="contact-status full" id="contactStatus" role="status" aria-live="polite"></p></form></div></section></main>
<footer class="site-footer"><div class="container footer-inner"><div><strong>Muhammad Hussain</strong><p>Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified</p><small>© <span id="footerYear">2026</span> Muhammad Hussain. All rights reserved.</small></div><div class="social-links"><a class="" href="https://github.com/mhussain950091-tech" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-.5-2.5C19 15 21 13 21 9a6 6 0 0 0-1.5-4 5 5 0 0 0-.1-4S17 1 15 3a15 15 0 0 0-6 0C7 1 4.6 1 4.6 1a5 5 0 0 0-.1 4A6 6 0 0 0 3 9c0 4 2 6 6.5 6.5C9 16 9 17 9 18v4"/></svg>GitHub</a><a class="" href="https://www.linkedin.com/in/muhammad-hussain-478731340/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4"/></svg>LinkedIn</a><a class="" href="mailto:mhussain950091@gmail.com"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>Email</a></div></div></footer>
</body></html>
````

## hussain/js/main.js

````javascript
/* Progressive enhancement: the full content is already in index.html. */
(() => {
  'use strict';
  const pages = [...document.querySelectorAll('main > .page')];
  const nav = [...document.querySelectorAll('[data-page]')];
  const valid = new Set(pages.map(p => p.id));
  function route(focus = false) {
    let id = location.hash.slice(1) || 'about';
    if (id === 'education') id = 'experience';
    if (!valid.has(id)) id = 'about';
    pages.forEach(page => { page.hidden = page.id !== id; });
    nav.forEach(a => a.dataset.page === id ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    if (focus) { document.querySelector('#' + id + ' h1').focus({ preventScroll: true }); window.scrollTo(0, 0); }
  }
  route();
  addEventListener('hashchange', () => route(true));
  document.getElementById('footerYear').textContent = new Date().getFullYear();
  const filter = document.getElementById('projectFilter');
  const cards = [...document.querySelectorAll('.project-card')];
  document.querySelector('.projects-toolbar').hidden = false;
  function filterProjects() {
    let count = 0;
    cards.forEach(card => {
      const show = filter.value === 'all' || (filter.value === 'featured' && card.dataset.featured === 'true') || filter.value === card.dataset.category;
      card.hidden = !show;
      if (show) count++;
    });
    document.getElementById('projectCount').textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
  }
  filter.addEventListener('change', filterProjects);
  filterProjects();
  // Prevent a broken image icon if an external media host is unavailable.
  document.querySelectorAll('.project-cover img').forEach(img => {
    function fallback() { const label = document.createElement('span'); label.className = 'cover-title'; label.textContent = img.alt.replace(' project cover',''); img.replaceWith(label); }
    img.addEventListener('error', fallback, { once: true });
    if (img.complete && img.naturalWidth === 0) fallback();
  });
  const form = document.getElementById('contactForm');
  const button = form.querySelector('button[type=submit]');
  const status = document.getElementById('contactStatus');
  button.disabled = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (button.disabled || !form.reportValidity()) return;
    button.disabled = true;
    button.querySelector('span').textContent = 'Sending…';
    status.textContent = 'Sending your message…';
    status.dataset.state = 'sending';
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))), signal: controller.signal });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || 'Your message could not be sent. Please use my email or LinkedIn link.');
      status.textContent = 'Message sent successfully. Thank you for getting in touch.';
      status.dataset.state = 'success';
      form.reset();
    } catch (error) {
      status.textContent = error.name === 'AbortError' ? 'Delivery could not be confirmed. Please contact me directly by email or LinkedIn.' : error.message;
      status.dataset.state = 'error';
    } finally {
      clearTimeout(timer);
      button.disabled = false;
      button.querySelector('span').textContent = 'Send message';
    }
  });
})();

````

## hussain/package.json

````json
{
  "name": "hussain-portfolio",
  "version": "1.0.0",
  "description": "Muhammad Hussain \u2014 Database Engineer portfolio",
  "private": true,
  "scripts": {
    "test": "node tests/contact.cjs",
    "check": "node --check scripts/build.mjs && node --check js/main.js && node --check admin/admin.js && node --check api/contact.js",
    "build": "node scripts/build.mjs"
  },
  "engines": {
    "node": ">=22"
  }
}

````

## hussain/README.md

````markdown
# Muhammad Hussain portfolio

The website now uses a light white/slate theme with blue as its only accent. About opens first. Navigation remains horizontal on phones. All main content is written into HTML during the build, so it can be read with JavaScript disabled. The footer is on every page.

## Problems corrected

- Inconsistent professional title, repeated name in the logo, generic headline and degree outside Education.
- Dark styling, uneven spacing, unstable floating form labels and mismatched browser autofill colours.
- Visible honeypot and unnecessary public lightbox/close control.
- Empty Zorvexa introduction/mission and mixed personal/company voice.
- JavaScript-only content; missing complete sharing metadata, favicon and centralized site address.
- Cropped project covers, awkward filter buttons and inconsistent project descriptions.
- Missing Experience and Education editors; missing project problem/build/impact fields.
- Skills presentation replaced by grouped tags without proficiency ratings.
- Fast Food POS content incorrectly described SmartlyPOS. Original wording is preserved in sourceNotes for review.
- Old unused portfolio.json contained conflicting content and was removed.

## Headline options

1. **Selected:** I design, optimize, and secure databases your business can rely on.
2. I turn complex data into reliable, efficient database systems.
3. Better database design. Faster queries. Stronger data foundations.

## Edit your content

Open `/admin/`. Experience supports employment, internships, freelance work, memberships and volunteering. Education supports multiple institutions, degrees and courses. Add your University of Tokyo details with the accurate programme and dates; no unverified qualification was added.

The editor saves drafts in your browser. Click Export JSON, then replace `hussain/data/portfolio-data.json` in GitHub with that downloaded file. Vercel rebuilds the website from it. Older browser drafts take precedence over published content; discard them only if you no longer need them. This existing client-side editor password is a convenience gate, not secure server authentication. There is no private inbox in this static editor.

Change theme colours at the top of `css/style.css` in `:root`. Add your actual CV at `hussain/resume.pdf`; the Download CV button is already connected. Replace project `[add metric]` text with real results. Enter real project demo/repository URLs in the editor: unavailable links are labelled honestly instead of invented. Original project artwork is retained, shown without cropping and requested from Cloudinary in optimized sizes.

## Domain: exactly where to edit

Edit **line 2 of `hussain/site.config.json`**, the `siteUrl` value. It currently contains the requested future address `https://muhammadhussain.vercel.app`. This is a placeholder, not a newly connected domain. Connect your actual domain in Vercel and update that one line. The build automatically updates canonical and sharing URLs in index.html plus robots.txt and sitemap.xml. Do not hand-edit those generated files.

## Preview image

`assets/social-preview.png` is a 1200×630 sharing image. Its editable SVG source uses white, dark slate and blue, showing Muhammad Hussain, Database Engineer, the four databases, Microsoft SQL Certified and Founder of Zorvexa. Keep this composition uncluttered and update the PNG if you change the SVG. Sharing previews at the future domain work only after that domain is connected.

## Deploy on Vercel

1. Open the existing Vercel project connected to this GitHub repository.
2. Under Settings → Build and Deployment, use Root Directory `hussain`, Framework `Other`, Build Command `npm run build`, and Output Directory `.`. Keep Node.js 22 or 24.
3. Save changes to the GitHub main branch. Vercel builds and deploys automatically. In Deployments, wait for Ready, then open your project’s production address.
4. Upload your CV and add missing project links/results when ready.

The build is a small script that copies your content into the final HTML page. HTML is the page a browser reads. Metadata is the title, summary and image used by search engines and link previews. CSS controls appearance; JavaScript enables page switching, filters and form submission.

## Enable contact emails

In Vercel → Settings → Environment Variables, set `RESEND_API_KEY` to your Resend sending key and `CONTACT_FROM_EMAIL` to an address on your verified Resend domain. Optionally set `CONTACT_TO_EMAIL`; it defaults to `mhussain950091@gmail.com`. Apply to Production and redeploy. Keep the key in Vercel, never in frontend files. Send a test message yourself and check your inbox.

Without these settings the form cannot deliver mail. It shows a clear error and retains entered text; direct email and LinkedIn links remain available. A successful response means the provider accepted the email, not proof of inbox delivery or that it was read. No real email was sent during automated tests.

## Checks

`npm run build`, `npm run check`, and `npm test` pass. The contact tests cover malformed requests, spam trap, missing configuration, accepted delivery and provider/network failures with a mocked email service. Local automated browser launch was blocked by the workspace; do not interpret these checks as a full independent WCAG audit or verified live inbox delivery.

````

## hussain/robots.txt

````text
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://muhammadhussain.vercel.app/sitemap.xml

````

## hussain/scripts/build.mjs

````javascript
// Generate crawlable HTML from the same JSON exported by the admin editor.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => JSON.parse(fs.readFileSync(path.join(root, name), 'utf8'));
const data = read('data/portfolio-data.json');
const config = read('site.config.json');
const base = new URL(config.siteUrl).origin;
const e = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const url = value => { try { const u = new URL(value); return ['https:', 'http:', 'mailto:', 'tel:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } };
const image = (value, width=800) => { const u=url(value); return u.includes('res.cloudinary.com/') && u.includes('/image/upload/') ? u.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width},c_limit/`) : u; };
const paragraphs = value => String(value || '').split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${e(p)}</p>`).join('\n');
const chips = items => `<ul class="chips">${(items || []).map(v=>`<li>${e(typeof v==='string'?v:v.name)}</li>`).join('')}</ul>`;
const icons = {
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
 github:'<path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-.5-2.5C19 15 21 13 21 9a6 6 0 0 0-1.5-4 5 5 0 0 0-.1-4S17 1 15 3a15 15 0 0 0-6 0C7 1 4.6 1 4.6 1a5 5 0 0 0-.1 4A6 6 0 0 0 3 9c0 4 2 6 6.5 6.5C9 16 9 17 9 18v4"/>',
 linkedin:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4"/>',
 whatsapp:'<path d="M21 11.5a9 9 0 0 1-13.4 7.8L3 21l1.7-4.6A9 9 0 1 1 21 11.5Z"/><path d="M8 7c-2 4 4 10 8 8l-2-3-2 1-2-2 1-2z"/>',
 fiverr:'<path d="M8 21V8c0-4 2-6 6-6h2M5 9h14v12M14 21h8M18 3v.01"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${icons[name]||icons.mail}</svg>`;
const link = (href,label,cls='') => url(href) ? `<a class="${cls}" href="${e(url(href))}"${/^https?:/.test(href)?' target="_blank" rel="noopener noreferrer"':''}>${label}</a>` : '';
const p=data.profile;
const socials = () => `<div class="social-links">${link(p.github,icon('github')+'GitHub')}${link(p.linkedin,icon('linkedin')+'LinkedIn')}${link('mailto:'+p.email,icon('mail')+'Email')}</div>`;
const heading=(label,title,desc)=>`<header class="page-heading"><p class="eyebrow">${e(label)}</p><h1 tabindex="-1">${e(title)}</h1>${desc?`<p class="lead">${e(desc)}</p>`:''}</header>`;
const section=(id,title,body)=>`<section class="page" id="${id}" aria-label="${e(title)}">${body}</section>`;
const about=section('about','About',`<div class="about-hero"><div>${heading(p.name,p.headline,'I build dependable data foundations for business applications, analytics, and AI-powered tools.')}<p class="professional-title">${e(config.professionalTitle)}</p><div class="actions"><a class="btn primary" href="#contact">Get in Touch</a><a class="btn" href="/resume.pdf" download>Download CV</a></div>${socials()}</div>${p.profileImage?`<figure class="portrait"><img src="${e(image(p.profileImage,560))}" width="448" height="560" alt="Portrait of Muhammad Hussain, Database Engineer" fetchpriority="high" decoding="async"><figcaption>Database Engineer · Founder of Zorvexa</figcaption></figure>`:''}</div><div class="about-story"><h2>How I work</h2><div>${paragraphs(p.bio)}</div></div><div class="facts"><div><strong>${(data.projects||[]).length}</strong><span>Selected projects</span></div><div><strong>Data → Systems</strong><span>My focus</span></div><div><strong>${e(p.location)}</strong><span>Location</span></div></div>`);
const entries=(items,kind)=>(items||[]).map(v=>`<article class="entry"><div class="entry-meta">${e(v.period)}${v.type?` · ${e(v.type)}`:''}</div><h3>${e(v.title||v.degree||v.role)}</h3><p class="organisation">${e(v.company||v.institution||v.org)}</p>${paragraphs(v.description)}${chips(v.highlights)}</article>`).join('');
const experience=section('experience','Experience',heading('My work','Experience & memberships','The roles, projects, and teams I have contributed to.')+`<div class="entries">${entries(data.experience)}</div>${data.leadership?.length?`<h2 class="subheading">Leadership & memberships</h2><div class="grid two">${entries(data.leadership)}</div>`:''}${data.education?.length?`<div class="education" id="education"><h2>Education</h2><div class="entries">${entries(data.education,'education')}</div></div>`:''}`);
const categories={ai:'AI & data',business:'Business software',web:'Web development',other:'Other projects'};
const projectCards=(data.projects||[]).map(v=>{
 const repo=url(v.repoUrl), generic=repo.replace(/\/$/,'')===url(p.github).replace(/\/$/,'');
 return `<article class="project-card" data-category="${e(v.category||'other')}" data-featured="${!!v.featured}"><div class="project-cover">${v.image?`<img src="${e(image(v.image))}" width="800" height="500" alt="${e(v.title)} project cover" loading="lazy" decoding="async">`:`<span class="cover-title">${e(v.title)}</span>`}</div><div class="project-body"><p class="eyebrow">${e(categories[v.category]||'Project')}</p><h2>${e(v.title)}</h2><p class="problem">${e(v.problem||v.tagline)}</p><p>${e(v.built||v.description)}</p>${chips(v.technologies)}<p class="impact"><strong>Impact</strong> ${e(v.impact||'[add metric: outcome or time saved]')}</p>${v.description?`<details><summary>Read project details</summary>${paragraphs(v.description)}</details>`:''}<div class="project-links">${repo?link(repo,icon('github')+(generic?'GitHub profile':'GitHub repository')):'<span class="muted">GitHub: not published</span>'}${v.liveUrl?link(v.liveUrl,'Live demo ↗'):'<span class="muted">Live demo: not available</span>'}</div></div></article>`;
}).join('\n');
const available=[...new Set((data.projects||[]).map(v=>v.category||'other'))];
const projects=section('projects','Projects',heading('Selected work','Projects built around real problems','What I built, the data behind it, and the outcome.')+`<div class="projects-toolbar" hidden><label for="projectFilter">Show</label><select id="projectFilter"><option value="all">All projects</option><option value="featured">Featured projects</option>${available.map(c=>`<option value="${e(c)}">${e(categories[c]||c)}</option>`).join('')}</select><span id="projectCount" role="status" aria-live="polite"></span></div><div class="grid two" id="projectsGrid">${projectCards}</div>`);
const skills=section('skills','Skills',heading('My toolkit','Skills I use in practice','Technologies and techniques behind my database and application work.')+`<div class="grid two">${Object.entries(data.skills||{}).map(([name,values])=>`<article class="card"><h2>${e(name)}</h2>${chips(Array.isArray(values)?values:values.items)}</article>`).join('')}</div>`);
const certifications=section('certifications','Certifications',heading('Credentials','Certifications','Training and internship credentials that support my work.')+`<div class="grid two">${(data.certifications||[]).map(v=>`<article class="card certificate">${v.image?`<a href="${e(url(v.image))}" target="_blank" rel="noopener noreferrer" aria-label="View ${e(v.title)} certificate"><img src="${e(image(v.image,720))}" width="720" height="480" alt="${e(v.title)} certificate issued by ${e(v.issuer)}" loading="lazy" decoding="async"></a>`:''}<h2>${e(v.title)}</h2><p class="entry-meta">${e(v.issuer)} · ${e(v.date)}</p>${paragraphs(v.description)}</article>`).join('')}</div>`);
const z=data.zorvexa||{};
const services=section('services','Zorvexa',`<div class="company">${heading('Company · Founded by Muhammad Hussain',z.name||'Zorvexa',z.focus||'Data engineering · AI intelligence · Scalable technology')}<div class="grid two"><article><h2>Who we are</h2>${paragraphs(z.introduction||'We build dependable data systems and practical software around business needs.')}</article><article><h2>Our mission</h2>${paragraphs(z.mission||'We help organisations turn data into useful, maintainable systems that support long-term growth.')}</article></div>${link(z.linkedin,'Explore Zorvexa on LinkedIn ↗','btn')}</div><h2 class="subheading">What we can help with</h2><div class="grid two">${(z.services||[]).map(v=>`<article class="card"><h3>${e(v)}</h3></article>`).join('')}</div>`);
const contacts=[['mail','Email','mailto:'+p.email,p.email],['linkedin','LinkedIn',p.linkedin,'Connect on LinkedIn'],['github','GitHub',p.github,'Explore my code'],['whatsapp','WhatsApp','https://wa.me/'+(p.phone||'').replace(/\D/g,''),'Start a conversation'],['fiverr','Fiverr',p.fiverr,'View my services']];
const field=(id,label,type='text',full=false)=>`<div class="field ${full?'full':''}"><label for="${id}">${label}${id==='subject'?' (optional)':''}</label>${type==='textarea'?`<textarea id="${id}" name="${id}" rows="6" maxlength="5000" required></textarea>`:`<input id="${id}" name="${id}" type="${type}" maxlength="${id==='name'?100:type==='email'?254:160}" ${id==='subject'?'':'required'} ${['name','email'].includes(id)?`autocomplete="${id}"`:''}>`}</div>`;
const contact=section('contact','Contact',heading('Let’s talk','Tell me about your data challenge','For opportunities, database projects, or collaboration, contact me directly or use the form.')+`<div class="contact-layout"><aside><h2>Reach me directly</h2><p>I welcome a clear description of the problem, your timeline, and the outcome you need.</p><div class="contact-links">${contacts.filter(v=>url(v[2])).map(v=>link(v[2],`${icon(v[0])}<span><strong>${v[1]}</strong>${e(v[3])}</span>`)).join('')}</div></aside><form id="contactForm" class="contact-form" action="/api/contact" method="post"><h2 class="full">Send an enquiry</h2><div class="form-trap" aria-hidden="true" inert><label for="website">Leave empty</label><input id="website" name="website" type="text" tabindex="-1" autocomplete="off"></div>${field('name','Your name')}${field('email','Your email','email')}${field('subject','Subject','text',true)}${field('message','Your message','textarea',true)}<button type="submit" class="btn primary full" disabled><span>Send message</span></button><noscript><p class="full">Please use the email or LinkedIn links to contact me when JavaScript is disabled.</p></noscript><p class="contact-status full" id="contactStatus" role="status" aria-live="polite"></p></form></div>`);
const pages=[['about','About'],['experience','Experience'],['projects','Projects'],['skills','Skills'],['certifications','Certifications'],['services','Zorvexa'],['contact','Contact']];
const html=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${e(p.name)} — ${e(config.professionalTitle)}</title>
<meta name="description" content="${e(config.description)}">
<meta name="theme-color" content="#FFFFFF">
<!-- Generated from site.config.json: change siteUrl there, then npm run build. -->
<link rel="canonical" href="${base}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${e(p.name)}">
<meta property="og:title" content="${e(p.name)} — ${e(config.professionalTitle)}">
<meta property="og:description" content="${e(config.description)}">
<meta property="og:url" content="${base}/">
<meta property="og:image" content="${base}${e(config.socialImage)}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Muhammad Hussain — Database Engineer. PostgreSQL, MySQL, SQL Server, MongoDB. Microsoft SQL Certified. Founder of Zorvexa.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${e(p.name)} — ${e(config.professionalTitle)}">
<meta name="twitter:description" content="${e(config.description)}">
<meta name="twitter:url" content="${base}/"><meta name="twitter:image" content="${base}${e(config.socialImage)}">
<meta name="twitter:image:alt" content="Muhammad Hussain — Database Engineer and founder of Zorvexa">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/css/style.css">
<script src="/js/main.js" defer></script>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="nav-inner"><a class="brand" href="#about">Muhammad Hussain</a><nav aria-label="Main navigation"><ul>${pages.map(([id,label])=>`<li><a href="#${id}" data-page="${id}">${label}</a></li>`).join('')}</ul></nav></div></header>
<main class="container" id="main">${about}\n${experience}\n${projects}\n${skills}\n${certifications}\n${services}\n${contact}</main>
<footer class="site-footer"><div class="container footer-inner"><div><strong>${e(p.name)}</strong><p>${e(config.professionalTitle)}</p><small>© <span id="footerYear">${new Date().getFullYear()}</span> ${e(p.name)}. All rights reserved.</small></div>${socials()}</div></footer>
</body></html>`;
fs.writeFileSync(path.join(root,'index.html'),html);
fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nSitemap: ${base}/sitemap.xml\n`);
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}/</loc></url></urlset>\n`);
console.log('Built static HTML, robots.txt and sitemap.xml from site.config.json and portfolio-data.json.');

````

## hussain/site.config.json

````json
{
  "siteUrl": "https://muhammadhussain.vercel.app",
  "siteUrlNote": "Requested future address. Update siteUrl after you connect your chosen domain in Vercel.",
  "professionalTitle": "Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified",
  "description": "Muhammad Hussain \u2014 Database Engineer (PostgreSQL, MySQL, SQL Server, MongoDB) | Microsoft SQL Certified. Database systems, SQL projects, and founder of Zorvexa.",
  "socialImage": "/assets/social-preview.png"
}

````

## hussain/sitemap.xml

````xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://muhammadhussain.vercel.app/</loc></url></urlset>

````

## hussain/tests/contact.cjs

````javascript
const assert=require('node:assert/strict');
const handler=require('../api/contact.js');
const valid={name:'Visitor',email:'visitor@example.com',subject:'Project',message:'I would like to discuss a project.'};
async function call(body=valid,method='POST'){const res={setHeader(){},status(n){this.code=n;return this;},json(data){this.data=data;return this;}};await handler({method,body},res);return res;}
(async()=>{
assert.equal((await call(valid,'GET')).code,405);
for(const body of [null,'{',{}, {...valid,email:'bad'}, {...valid,message:' '}, {...valid,subject:'Header\ninjection'}, {...valid,website:'spam'}, {...valid,message:'a'.repeat(5001)}])assert.equal((await call(body)).code,400);
delete process.env.RESEND_API_KEY;delete process.env.CONTACT_FROM_EMAIL;assert.equal((await call()).code,503);
process.env.RESEND_API_KEY='test';process.env.CONTACT_FROM_EMAIL='test@example.com';
global.fetch=async(url,opts)=>{const body=JSON.parse(opts.body);assert.equal(body.reply_to,valid.email);assert.equal(body.to[0],'mhussain950091@gmail.com');assert(body.text.includes(valid.message));return {ok:true,json:async()=>({id:'mock-id'})};};assert.equal((await call()).data.ok,true);
global.fetch=async()=>({ok:false,status:403,json:async()=>({error:'rejected'})});assert.equal((await call()).code,502);
global.fetch=async()=>{throw new Error('offline')};assert.equal((await call()).code,502);console.log('12 contact handler scenarios passed. No live emails sent.');
})().catch(e=>{console.error(e);process.exit(1)});

````

## hussain/vercel.json

````json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    },
    {
      "source": "/admin/(.*)",
      "headers": [
        {
          "key": "X-Robots-Tag",
          "value": "noindex, nofollow"
        }
      ]
    }
  ],
  "buildCommand": "npm run build"
}

````

