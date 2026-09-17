export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  isDemo: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Our restaurant started showing up in Google Maps within weeks. We went from empty tables on weekdays to fully booked. The team genuinely understands local search.',
    author: 'Restaurant Owner',
    role: 'Owner',
    company: 'A Hazratganj restaurant',
    isDemo: true,
  },
  {
    quote:
      'The Google Ads campaigns they manage for us generate consistent leads every month. Our cost per lead has dropped significantly since they took over.',
    author: 'Service Business Owner',
    role: 'Director',
    company: 'A Lucknow home services business',
    isDemo: true,
  },
  {
    quote:
      'We were skeptical about SEO at first, but after six months our organic traffic more than doubled. The content strategy they built is still paying off.',
    author: 'Education Director',
    role: 'Director',
    company: 'A coaching institute in Gomti Nagar',
    isDemo: true,
  },
  {
    quote:
      'The analytics setup they did changed how we make decisions. For the first time, we know exactly where our customers come from and what they do on our site.',
    author: 'E-commerce Founder',
    role: 'Founder',
    company: 'A lifestyle e-commerce brand',
    isDemo: true,
  },
  {
    quote:
      'Professional, transparent, and results-driven. They do not make promises they cannot keep. Our local search visibility has never been better.',
    author: 'Clinic Manager',
    role: 'Manager',
    company: 'A healthcare clinic in Lucknow',
    isDemo: true,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFaqs: FAQItem[] = [
  {
    question: 'What services does GrowthGrid Digital offer?',
    answer:
      'We offer SEO, local SEO, Google Business Profile optimization, Google Ads / PPC, social media marketing, content marketing, website analytics, and conversion rate optimization. You can engage us for a single service or a comprehensive digital marketing strategy.',
  },
  {
    question: 'Where is GrowthGrid Digital located?',
    answer:
      'We are based in Lucknow, Uttar Pradesh, India. We work with businesses across Lucknow and serve clients throughout India.',
  },
  {
    question: 'How much do your services cost?',
    answer:
      'Pricing depends on your business goals, the scope of work, and the services you need. We offer flexible monthly retainer packages. Book a free consultation and we will provide a custom quote based on your requirements.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'It depends on the service. Google Ads can drive traffic within days. SEO typically takes 3 to 6 months to show meaningful movement and 6 to 12 months for significant results. We set clear expectations at the start of every engagement.',
  },
  {
    question: 'Do you work with businesses outside Lucknow?',
    answer:
      'Yes. While we specialize in helping Lucknow businesses, we work with clients across India. Our local SEO expertise is especially valuable for businesses in and around Uttar Pradesh.',
  },
  {
    question: 'Do you guarantee results?',
    answer:
      'We guarantee professional, transparent, and data-driven work. We do not guarantee specific rankings or lead counts — no honest agency can. We do guarantee that we will work hard to grow your business and report honestly on results.',
  },
];
