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
    document.querySelector('.site-footer').hidden = id !== 'about' && id !== 'contact';
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
