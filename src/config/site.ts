export const SITE = {
  name: 'LaPlayaEsVida.com',
  brand: 'Desert Rich',
  domain: 'laplayaesvida.com',
  title: 'LaPlayaEsVida.com | Premium Domain for Sale | Desert Rich',
  description:
    'LaPlayaEsVida.com is available now for $75,000 — a rare premium Spanish .com meaning “The Beach Is Life.” Escrow-protected acquisition. Buy now, make an offer, or contact our domain agent today.',
  url: 'https://laplayaesvida.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  tagline: 'The Beach Is Life',
  googleSiteVerification: 'jcTZWGIWI6gNhpEcLfAchI1jebOi8T3VWbFSnldF5Ww',
} as const;

/** Local hero asset served from public/images/ via Workers Static Assets */
export const HERO_IMAGE = '/images/hero.jpg';
export const HERO_IMAGE_WEBP = '/images/hero.webp';
export const OG_IMAGE_PATH = '/images/og.jpg';

export const OG_IMAGE = `${SITE.url}${OG_IMAGE_PATH}`;

/** Must match the listed acquisition price shown on the site and in Product schema. */
export const PRODUCT_OFFER = {
  price: 75000,
  priceCurrency: 'USD',
} as const;

export const formattedPrice = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: PRODUCT_OFFER.priceCurrency,
  maximumFractionDigits: 0,
}).format(PRODUCT_OFFER.price);

const inquiryBody = encodeURIComponent(
  'Hello,\n\nI am interested in acquiring LaPlayaEsVida.com.\n\nIntended use:\nBudget range:\n\nThank you.',
);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'LaPlayaEsVida.com Domain Acquisition Inquiry',
)}&body=${inquiryBody}`;

export const BUY_NOW_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'Buy Now — LaPlayaEsVida.com at $75,000',
)}&body=${encodeURIComponent(
  'Hello,\n\nI would like to purchase LaPlayaEsVida.com at the listed price of $75,000 USD via escrow.\n\nPreferred escrow: Escrow.com\nFull legal name / entity:\n\nThank you.',
)}`;

export const MAKE_OFFER_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'Offer — LaPlayaEsVida.com',
)}&body=${encodeURIComponent(
  'Hello,\n\nI would like to make an offer on LaPlayaEsVida.com.\n\nOffer amount (USD):\nIntended use:\nClosing timeline:\n\nThank you.',
)}`;

export const CONTACT_AGENT_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'Contact Agent — LaPlayaEsVida.com',
)}&body=${encodeURIComponent(
  'Hello,\n\nPlease have a domain agent contact me about LaPlayaEsVida.com.\n\nName:\nCompany:\nPhone / WhatsApp:\nBest time to reach me:\n\nThank you.',
)}`;
