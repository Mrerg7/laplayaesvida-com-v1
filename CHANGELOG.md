# Changelog

## [1.1.0] — 2026-09-29

### FEAT: Optimization improvements

- SEO: title/description with price + CTA; Organization + FAQPage schema; keywords; product OG tags
- Performance: hero compressed (~141KB JPEG + WebP), OG image 1200×630, HTML compression, long-cache for assets
- CRO: above-fold price, Buy Now / Make Offer / Contact Agent CTAs, viewer counter, exit-intent popup, escrow trust bar
- Mobile: collapsible nav, 48px tap targets, 16px base typography
- UX: dark/light theme toggle, Fraunces + DM Sans typography, category filters on use cases
- Content: `/guides/` hub (valuation, market trends, success stories) for internal linking / DA content
- Security: Worker edge headers (HSTS, CSP, X-Frame-Options, Permissions-Policy); strengthened `_headers`
- Cloudflare: Workers static assets config with observability; www→apex redirect retained
- Docs: README deploy workflow for Workers free plan

## [1.0.0] — prior

- Initial Astro static listing for LaPlayaEsVida.com on Cloudflare Workers
