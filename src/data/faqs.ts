export interface FAQ {
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  {
    q: 'Is LaPlayaEsVida.com available for immediate purchase?',
    a: 'Yes. The domain is currently available for acquisition at the listed price of $75,000 USD. Serious buyers can begin the process immediately through Buy Now, Make Offer, or private inquiry.',
  },
  {
    q: 'What makes this domain worth a premium price?',
    a: 'It is a clean, exact Spanish phrase .com with powerful emotional resonance, massive global reach (636M+ Spanish speakers), and strong applicability across high-value industries. Comparable premium lifestyle domains consistently transact at significant valuations.',
  },
  {
    q: 'How is the transfer handled?',
    a: 'We use industry-standard escrow services (Escrow.com or equivalent) for secure, protected transfers. Full ownership and DNS control are transferred cleanly upon payment confirmation. SSL and transaction guarantees protect both parties.',
  },
  {
    q: 'Can I use financing or payment plans?',
    a: 'For qualified buyers and larger acquisitions, structured payment options and financing discussions are available upon request during the private inquiry process.',
  },
  {
    q: 'Can I make an offer below the listed price?',
    a: 'Yes. Use Make Offer to submit a confidential proposal. All serious offers are reviewed promptly; escrow-protected closing follows once terms are agreed.',
  },
];

export function getFAQPageSchema(siteUrl: string) {
  return {
    '@type': 'FAQPage' as const,
    '@id': `${siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question' as const,
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: faq.a,
      },
    })),
  };
}
