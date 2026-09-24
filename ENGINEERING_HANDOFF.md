# Glo website engineering handoff

## Snapshot scope

This repository snapshot contains the current Glo marketing website, responsive layouts, legal pages, SEO metadata, sitemap, and build-time prerendering. The public product name is **The Desk**; the existing canonical route remains `/recruiter-os/` for compatibility.

The frontend has been validated with:

```bash
pnpm install
pnpm check
pnpm build
```

The build writes the client bundle and prerendered route documents to `dist/public`, then bundles the static Express server to `dist/index.js`.

## Contact Us and Book a Demo

The Contact Us and Book a Demo pages have polished, privacy-safe confirmation states. The public UI does **not** expose the internal recipient, hidden routing fields, preview language, or staging infrastructure.

The current snapshot does not send email. Both submit handlers intentionally remain frontend-only so engineering can connect the approved server infrastructure. Before production, replace the simulated success transition with a secure server call and show the success state only after the server confirms delivery.

The server implementation must:

1. Send every Contact Us and Book a Demo inquiry only to the approved Glo inbox.
2. Keep the recipient address, API credential, and verified sender identity server-side.
3. Validate and allowlist every accepted field. Reject unknown fields and oversized requests.
4. Include honeypot and minimum-submit-time checks, per-IP rate limiting, generic client errors, and duplicate-submit protection.
5. Set the visitor’s work email as `reply-to`, not as the sender.
6. Avoid logging message bodies, credentials, or the internal recipient.
7. Return success only after the email provider accepts the request.

Recommended environment variables:

```text
RESEND_API_KEY=<server-only secret>
RESEND_FROM_EMAIL=Glo Website <forms@a-verified-sending-domain>
```

Resend supports duplicate protection with the `Idempotency-Key` header on `POST /emails`. Use a deterministic submission hash or a server-issued submission identifier. Resend keeps idempotency keys for 24 hours.

Relevant implementation notes: `contact-form-implementation-notes.md`.

## SEO and route rendering

The Vite build prerenders 29 canonical routes plus compatibility aliases. Each generated document contains route-specific page copy, one H1, internal links, title, description, and canonical metadata before JavaScript runs.

The Manus staging host previously rewrote clean nested URLs to the root shell for some bot requests. On the final host, configure clean-route serving so `/path/` resolves to `/path/index.html`, or enable the host’s built-in bot prerendering. Then rerun SEMrush without JavaScript and confirm every URL in `client/public/sitemap.xml` is discovered.

The canonical inventory is available in `canonical-url-inventory.md`.

## Brand and responsive controls

Keep the Lantern | Glo lockup and dropdown behavior intact. Responsive changes must be tested across wide desktop, standard desktop, intermediate desktop, tablet, phone, and exact pixels immediately above and below every affected breakpoint. Fix authoritative selectors rather than adding late global overrides.

## Secrets and repository safety

Do not commit `.env` files, API keys, tokens, production credentials, or private customer data. The snapshot contains no Resend credential and no live server-side email configuration.
