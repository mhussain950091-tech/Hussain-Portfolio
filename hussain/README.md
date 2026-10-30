# Muhammad Hussain portfolio

The website now uses a light white/slate theme with blue as its only accent. About opens first. Navigation remains horizontal on phones. All main content is written into HTML during the build, so it can be read with JavaScript disabled. The footer appears only on About (the first page) and Contact, and includes an email link without social profile links.

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
