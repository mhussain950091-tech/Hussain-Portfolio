# Hussain portfolio

Responsive vanilla HTML/CSS/JavaScript portfolio. About is the default route; legacy `#home` and unknown hashes resolve to About. Navigation stays horizontal and scrolls on narrow screens. The footer appears only on Contact.

## Vercel setup

Keep the existing Vercel project root set to `hussain`, with the Other framework preset and no build command. Static assets and the Node function at `api/contact.js` deploy together. Do not configure a static-only output directory that excludes the function.

Set these server-side environment variables in the Vercel project, then redeploy:

- `RESEND_API_KEY`: Resend sending API key.
- `CONTACT_FROM_EMAIL`: sender address on your verified Resend domain.
- `CONTACT_TO_EMAIL`: optional recipient; defaults to `mhussain950091@gmail.com`.

The endpoint sends a plain-text message to the owner, using the visitor's address as Reply-To. Success means the email provider accepted the message, not a verified inbox delivery or read receipt. Without configuration the form shows a useful error and retains the input; email and WhatsApp links remain available. Test actual inbox delivery after configuration. Add a Vercel Firewall rate-limit rule for POST `/api/contact` before enabling public email sending; the form also includes a honeypot and server-side validation.

## Content editing

Admin changes are browser-local drafts. The editor loads published data before applying existing local drafts. Zorvexa includes introduction, mission, focus, role, company name, LinkedIn and services fields. Export JSON and replace `data/portfolio-data.json` in GitHub to publish. Existing local drafts take precedence, so clear `hussain_admin` from local storage if you want to discard an older draft.

The existing client-side admin login is a convenience gate for this local editor, not server authentication. No private inbox or email keys are exposed through it.

## Checks

Run `npm run check` and `npm test` from `hussain`. Tests mock the email provider and do not send real messages. Review desktop and mobile layouts and test real delivery on a configured Vercel preview before merging.
