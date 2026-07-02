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
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '65d846be-d4fc-4c40-4f3a-dce3dbb5e700',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('LaPlayaEsVida.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring LaPlayaEsVida.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
