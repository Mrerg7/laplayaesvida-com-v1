# LaPlayaEsVida.com — Premium Domain Sales Site

Optimized acquisition landing page for **LaPlayaEsVida.com** (“The Beach Is Life”), built for Cloudflare Workers static assets on the free plan.

## Stack

- Astro 5 (static output)
- Tailwind CSS
- Cloudflare Workers + Static Assets (`wrangler.toml`)
- Schema.org Product / Organization / FAQ / WebSite
- XML sitemap via `@astrojs/sitemap`

## Local development

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm run preview
```

## Deploy (Cloudflare Workers free plan)

1. Ensure the domain’s DNS is on Cloudflare.
2. Authenticate Wrangler: `npx wrangler login`
3. Deploy:

```bash
npm run deploy
```

Custom domains `laplayaesvida.com` and `www.laplayaesvida.com` are declared in `wrangler.toml`. The Worker 301-redirects `www` → apex and attaches security headers (HSTS, CSP baseline, frame denial, etc.).

Stay on the Workers & Pages free plan — this project uses static assets + a lightweight Worker only (no paid bindings required).

## SEO / CRO highlights

- Title format: `LaPlayaEsVida.com | Premium Domain for Sale | Desert Rich`
- Meta description includes price ($75,000), availability, and CTA
- Above-the-fold price + Buy Now / Make Offer / Contact Agent
- Escrow / SSL trust signals, viewing counter, exit-intent briefing capture
- Guides hub for valuation, market trends, and success stories (internal links)
- Canonical tags, robots.txt, sitemap-index.xml
- Dark / light mode toggle; mobile collapsible nav; 48px tap targets; 16px base type
- Compressed hero JPEG + WebP preload

## Post-deploy checklist

1. Submit `https://laplayaesvida.com/sitemap-index.xml` in Google Search Console
2. Verify Mobile-Friendly / Lighthouse scores after CDN warm-up
3. Confirm mailto CTAs and exit-intent form open the correct sales inbox
4. Monitor Worker analytics / errors for 48 hours

## Contact

Acquisition inquiries: sales@desertrich.com
