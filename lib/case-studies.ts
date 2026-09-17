export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  isDemo: boolean;
  problem: string[];
  strategy: string[];
  implementation: string[];
  kpis: { label: string; value: string }[];
  results: string[];
  lessons: string[];
  relatedServices: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'local-restaurant-seo',
    title: 'Local Restaurant SEO: From Invisible to Fully Booked',
    client: 'A family restaurant in Hazratganj',
    industry: 'Restaurant / Hospitality',
    location: 'Hazratganj, Lucknow',
    summary:
      'How a local restaurant improved its online visibility to attract more diners through local SEO and Google Business Profile optimization.',
    metaTitle: 'Local Restaurant SEO Case Study | GrowthGrid Digital',
    metaDescription:
      'Demo case study: How local SEO and Google Business Profile optimization helped a Lucknow restaurant attract more diners. Strategy, implementation, and results.',
    isDemo: true,
    problem: [
      'The restaurant had a Google Business Profile but it was barely filled out — no photos, incomplete hours, no description.',
      'It did not appear in the local pack for searches like "restaurant in Hazratganj" or "best restaurant near me."',
      'The website was outdated, not mobile-friendly, and had no local SEO content.',
      'Competitors with inferior food were getting more customers simply because they were more visible online.',
    ],
    strategy: [
      'Optimize the Google Business Profile completely with high-quality photos, menus, hours, and regular posts.',
      'Build local citations across relevant directories to improve NAP consistency.',
      'Redesign the website to be mobile-first and fast-loading.',
      'Create location-specific content targeting Hazratganj and nearby areas.',
      'Implement a review generation strategy to build social proof.',
    ],
    implementation: [
      'Completed the Google Business Profile with 40+ photos, full menu, services, and attributes.',
      'Listed the restaurant in 15+ local and food-specific directories.',
      'Built a new, mobile-first website with optimized local landing pages.',
      'Created a simple review request process — a QR code on tables and receipts.',
      'Posted weekly updates to Google Business Profile about specials and events.',
    ],
    kpis: [
      { label: 'Google Business Profile views', value: '+180% in 6 months' },
      { label: 'Direction requests', value: '+120%' },
      { label: 'Website clicks from GBP', value: '+95%' },
      { label: 'Average rating', value: '4.2 → 4.6 stars' },
    ],
    results: [
      'The restaurant started appearing in the local pack for key search terms within 3 months.',
      'Google Business Profile views increased significantly over 6 months.',
      'Direction requests and website clicks grew substantially.',
      'The improved rating and review count increased customer trust and conversion.',
      'Weekend reservations became consistently full, reducing empty tables.',
    ],
    lessons: [
      'A complete Google Business Profile is the highest-ROI activity for local restaurants.',
      'Photos matter enormously — they drive engagement and clicks.',
      'A simple review request process (QR code) can dramatically increase review volume.',
      'Mobile-first website design is essential — most local searches happen on phones.',
    ],
    relatedServices: ['local-seo', 'seo', 'social-media-marketing'],
  },
  {
    slug: 'lucknow-coaching-institute-seo',
    title: 'Lucknow Coaching Institute SEO: Ranking for Competitive Keywords',
    client: 'A coaching institute offering competitive exam preparation',
    industry: 'Education',
    location: 'Gomti Nagar, Lucknow',
    summary:
      'How an education institute used SEO and content marketing to rank for competitive exam-related keywords and increase student enquiries.',
    metaTitle: 'Coaching Institute SEO Case Study in Lucknow | GrowthGrid Digital',
    metaDescription:
      'Demo case study: How SEO and content marketing helped a Lucknow coaching institute rank for competitive keywords and increase student enquiries.',
    isDemo: true,
    problem: [
      'The institute relied almost entirely on word-of-mouth and offline marketing.',
      'Its website had very little content and did not rank for any relevant keywords.',
      'Competitors dominated search results for exam preparation-related queries.',
      'Student enquiries from online channels were minimal.',
    ],
    strategy: [
      'Build a content strategy targeting informational queries students and parents search for.',
      'Optimize the website technically — speed, mobile, and structure.',
      'Create dedicated pages for each course and exam category.',
      'Build local SEO presence to capture "coaching institute in Lucknow" searches.',
      'Implement lead capture forms optimized for conversion.',
    ],
    implementation: [
      'Published 20+ blog articles answering common student and parent questions about exams.',
      'Created individual course pages with detailed curriculum, faculty, and outcomes.',
      'Fixed technical issues — improved page speed, mobile usability, and site structure.',
      'Optimized Google Business Profile and built local citations.',
      'Added clear call-to-action forms on every key page.',
    ],
    kpis: [
      { label: 'Organic traffic', value: '+250% in 8 months' },
      { label: 'Keywords on page 1', value: '0 → 35+' },
      { label: 'Student enquiries', value: '+140% from organic' },
      { label: 'Page speed score', value: '38 → 92' },
    ],
    results: [
      'The institute ranked on page 1 for dozens of relevant keywords within 8 months.',
      'Organic traffic grew significantly, becoming the primary source of new enquiries.',
      'Student enquiries from online channels increased substantially.',
      'The improved website speed and UX reduced bounce rates.',
      'The institute reduced dependence on paid advertising for lead generation.',
    ],
    lessons: [
      'Content marketing is extremely effective in the education sector — students and parents research extensively online.',
      'Answering real questions builds trust and drives both traffic and enquiries.',
      'Technical SEO fundamentals (speed, mobile, structure) are prerequisites for ranking.',
      'Dedicated course pages outperform generic program descriptions.',
    ],
    relatedServices: ['seo', 'content-marketing', 'conversion-rate-optimization'],
  },
  {
    slug: 'ecommerce-organic-traffic-growth',
    title: 'E-commerce Organic Traffic Growth Through Technical SEO',
    client: 'An e-commerce store selling lifestyle products',
    industry: 'E-commerce',
    location: 'Lucknow, shipping across India',
    summary:
      'How technical SEO and content optimization helped an e-commerce store grow organic traffic and sales.',
    metaTitle: 'E-commerce SEO Case Study | Organic Traffic Growth | GrowthGrid Digital',
    metaDescription:
      'Demo case study: How technical SEO, content optimization, and structured data helped an e-commerce store grow organic traffic and sales.',
    isDemo: true,
    problem: [
      'The store relied heavily on paid ads, with organic traffic contributing less than 15% of total visits.',
      'Product pages were not ranking because of duplicate content, thin descriptions, and poor site structure.',
      'The site was slow, with large unoptimized images and no lazy loading.',
      'There was no structured data, meaning products did not appear richly in search results.',
      'Category pages had generic titles and no unique content.',
    ],
    strategy: [
      'Fix technical SEO issues — site speed, indexing, and site architecture.',
      'Optimize product pages with unique descriptions and structured data.',
      'Improve category pages with unique content and optimized titles.',
      'Implement a content marketing strategy to capture informational search traffic.',
      'Set up proper analytics and conversion tracking to measure results.',
    ],
    implementation: [
      'Optimized all images and implemented lazy loading, reducing page load time by 60%.',
      'Rewrote 100+ product descriptions to be unique and keyword-aware.',
      'Added Product schema markup to all product pages for rich search results.',
      'Optimized category page titles, meta descriptions, and added introductory content.',
      'Published 15+ buying guides and comparison articles targeting informational queries.',
      'Set up GA4 with enhanced ecommerce tracking.',
    ],
    kpis: [
      { label: 'Organic traffic', value: '+200% in 9 months' },
      { label: 'Organic revenue share', value: '15% → 38%' },
      { label: 'Page load time', value: '-60%' },
      { label: 'Indexed product pages', value: '+85%' },
    ],
    results: [
      'Organic traffic grew significantly over 9 months, reducing dependence on paid ads.',
      'The share of revenue from organic search more than doubled.',
      'Page load time improved dramatically, improving user experience and conversion rates.',
      'Many product pages started ranking for relevant product searches.',
      'Buying guides captured top-of-funnel traffic that converted into sales.',
    ],
    lessons: [
      'Technical SEO is the foundation of e-commerce SEO — speed and indexing come first.',
      'Unique product descriptions are essential — duplicate content does not rank.',
      'Structured data helps products stand out in search results with rich snippets.',
      'Content marketing captures informational traffic that product pages cannot.',
      'Reducing paid ad dependence improves profit margins significantly.',
    ],
    relatedServices: ['seo', 'content-marketing', 'web-analytics', 'conversion-rate-optimization'],
  },
  {
    slug: 'local-service-business-lead-generation',
    title: 'Local Service Business Lead Generation with Google Ads and Local SEO',
    client: 'A home services business in Lucknow',
    industry: 'Home Services',
    location: 'Lucknow, serving within 20km radius',
    summary:
      'How a combination of Google Ads and local SEO helped a home service business generate a steady stream of qualified leads.',
    metaTitle: 'Local Service Lead Generation Case Study | GrowthGrid Digital',
    metaDescription:
      'Demo case study: How Google Ads and local SEO helped a Lucknow home service business generate qualified leads and reduce cost per lead.',
    isDemo: true,
    problem: [
      'The business relied on word-of-mouth and had an inconsistent flow of leads.',
      'No Google Business Profile existed, meaning the business was invisible in local search.',
      'No website meant no way to capture organic search traffic.',
      'Lead generation was entirely passive — waiting for referrals.',
    ],
    strategy: [
      'Set up Google Ads immediately to generate leads while building organic presence.',
      'Create a simple, conversion-focused landing page for lead capture.',
      'Set up and optimize Google Business Profile for local search visibility.',
      'Build a basic local SEO foundation — citations, local content, and reviews.',
      'Implement call tracking to measure lead sources.',
    ],
    implementation: [
      'Launched Google Ads campaigns targeting high-intent service keywords in Lucknow.',
      'Built a fast, mobile-first landing page with a simple lead form and click-to-call.',
      'Set up Google Business Profile with services, photos, and service areas.',
      'Listed the business in 10+ local directories with consistent NAP.',
      'Implemented call tracking to attribute leads to specific campaigns.',
      'Started a review request process for completed jobs.',
    ],
    kpis: [
      { label: 'Monthly leads', value: '8 → 45+ per month' },
      { label: 'Cost per lead', value: '₹450 → ₹180' },
      { label: 'Google Business calls', value: '+220% in 4 months' },
      { label: 'Lead-to-job conversion', value: '28%' },
    ],
    results: [
      'The business went from inconsistent referrals to a steady stream of qualified leads.',
      'Cost per lead decreased significantly as campaigns were optimized.',
      'Google Business Profile became a major lead source within 4 months.',
      'The combination of ads and local SEO provided both immediate and sustainable results.',
      'Lead quality improved through better targeting and landing page optimization.',
    ],
    lessons: [
      'Google Ads and local SEO work best together — ads for immediate results, SEO for sustainability.',
      'A simple, fast landing page outperforms a complex website for lead generation.',
      'Google Business Profile is a powerful lead source for service businesses.',
      'Call tracking is essential to understand which channels actually drive leads.',
      'Review generation should start from day one — it compounds over time.',
    ],
    relatedServices: ['google-ads', 'local-seo', 'web-analytics', 'conversion-rate-optimization'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
