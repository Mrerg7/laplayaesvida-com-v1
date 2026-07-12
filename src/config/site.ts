export const SITE = {
  name: 'LaPlayaEsVida.com',
  domain: 'laplayaesvida.com',
  title: 'LaPlayaEsVida.com | The Beach Is Life — Premium Domain for Sale',
  description:
    'Own LaPlayaEsVida.com — the rare, premium .com that perfectly captures "The Beach Is Life". A globally resonant Spanish lifestyle domain with massive brand potential. Inquire for acquisition.',
  url: 'https://laplayaesvida.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  tagline: 'The Beach Is Life',
  googleSiteVerification: 'jcTZWGIWI6gNhpEcLfAchI1jebOi8T3VWbFSnldF5Ww',
} as const;

/** Local hero asset served from public/images/ via Workers Static Assets */
export const HERO_IMAGE = '/images/hero.jpg';

export const OG_IMAGE = `${SITE.url}${HERO_IMAGE}`;

/** Must match the listed acquisition price shown on the site and in Product schema. */
export const PRODUCT_OFFER = {
  price: 75000,
  priceCurrency: 'USD',
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('LaPlayaEsVida.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring LaPlayaEsVida.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
