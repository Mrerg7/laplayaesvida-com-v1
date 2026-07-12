export interface Testimonial {
  quote: string;
  author: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "This is one of the cleanest, most powerful Spanish lifestyle domains I've seen in years. Instant brand equity.",
    author: 'Founder, Luxury Travel Group',
    stars: 5,
  },
  {
    quote:
      'We acquired a similar phrase domain for our coastal real estate project. The brand recognition was immediate and powerful.',
    author: 'CEO, Oceanfront Developments',
    stars: 4.5,
  },
  {
    quote:
      "Domains like this don't come around often. It's short, memorable, and culturally perfect. A true premium asset.",
    author: 'Domain Investor & Brand Strategist',
    stars: 5,
  },
];

export function getAggregateRating() {
  const reviewCount = testimonials.length;
  const ratingValue =
    testimonials.reduce((sum, item) => sum + item.stars, 0) / reviewCount;

  return {
    '@type': 'AggregateRating' as const,
    ratingValue: Math.round(ratingValue * 10) / 10,
    reviewCount,
    bestRating: 5,
  };
}

export function getProductReviews() {
  return testimonials.map((item) => ({
    '@type': 'Review' as const,
    reviewBody: item.quote,
    author: {
      '@type': 'Person' as const,
      name: item.author,
    },
    reviewRating: {
      '@type': 'Rating' as const,
      ratingValue: item.stars,
      bestRating: 5,
    },
  }));
}
