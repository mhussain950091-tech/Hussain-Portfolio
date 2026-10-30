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
const titleParts=config.professionalTitle.split(' | ');
const about=section('about','About',`<div class="about-hero${p.profileImage?'':' no-portrait'}"><div class="profile-identity"><p class="profile-name">${e(p.name)}</p><p class="professional-title"><strong>${e(titleParts[0].split(' (')[0])}</strong><span>${e(titleParts[0].includes(' (')?'('+titleParts[0].split(' (')[1]:'')}</span>${titleParts[1]?`<span class="profile-certification">${e(titleParts[1])}</span>`:''}</p><p class="profile-company">Founder of Zorvexa</p></div>${p.profileImage?`<figure class="portrait"><img src="${e(image(p.profileImage,560))}" width="448" height="560" alt="Portrait of Muhammad Hussain, Database Engineer" fetchpriority="high" decoding="async"></figure>`:''}<div class="hero-message"><h1 tabindex="-1">${e(p.headline)}</h1><p class="lead">I build dependable data foundations for business applications, analytics, and AI-powered tools.</p><div class="actions"><a class="btn primary" href="#contact">Get in Touch</a><a class="btn" href="/resume.pdf" download>Download CV</a></div>${socials()}</div></div><div class="about-story"><h2>How I work</h2><div>${paragraphs(p.bio)}</div></div><div class="facts"><div><strong>${(data.projects||[]).length}</strong><span>Selected projects</span></div><div><strong>Data → Systems</strong><span>My focus</span></div><div><strong>${e(p.location)}</strong><span>Location</span></div></div>`);
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
<footer class="site-footer"><div class="container footer-inner"><div><strong>${e(p.name)}</strong><p>${e(config.professionalTitle)}</p><small>© <span id="footerYear">${new Date().getFullYear()}</span> ${e(p.name)}. All rights reserved.</small></div><div class="social-links">${link('mailto:'+p.email,icon('mail')+'Email')}</div></div></footer>
</body></html>`;
fs.writeFileSync(path.join(root,'index.html'),html);
fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nSitemap: ${base}/sitemap.xml\n`);
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}/</loc></url></urlset>\n`);
console.log('Built static HTML, robots.txt and sitemap.xml from site.config.json and portfolio-data.json.');
