export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introduction: string[];
  includes: { title: string; description: string }[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  whoNeeds: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO Services',
    icon: 'Search',
    summary:
      'Comprehensive SEO strategies that improve your search rankings, drive organic traffic, and grow your business sustainably.',
    metaTitle: 'SEO Services in Lucknow | Improve Your Search Rankings',
    metaDescription:
      'Professional SEO services in Lucknow. Technical SEO, on-page optimization, content strategy, and link building to help your business rank higher and get more organic traffic.',
    h1: 'SEO Services That Help Your Business Rank Higher and Grow',
    introduction: [
      'Search Engine Optimization is the foundation of long-term online visibility. At GrowthGrid Digital, we help businesses in Lucknow and across India improve their organic search rankings through a combination of technical SEO, content optimization, and authority building.',
      'Unlike quick-fix tactics that fade with the next algorithm update, we focus on sustainable SEO that compounds over time. We start with a deep audit of your website, understand your competitive landscape, and build a strategy aligned with your business goals.',
    ],
    includes: [
      {
        title: 'Technical SEO Audit',
        description:
          'A full crawl and analysis of your site to identify indexing, speed, mobile, and structural issues that hold back rankings.',
      },
      {
        title: 'Keyword Research & Strategy',
        description:
          'Identifying high-intent keywords your customers actually search for, mapped to pages and content topics.',
      },
      {
        title: 'On-Page Optimization',
        description:
          'Optimizing titles, meta descriptions, headings, internal links, and content structure for target keywords.',
      },
      {
        title: 'Content Strategy',
        description:
          'Planning and briefing content that answers search intent and builds topical authority in your niche.',
      },
      {
        title: 'Link Building',
        description:
          'Earning quality backlinks from relevant, authoritative websites through outreach and digital PR.',
      },
      {
        title: 'Monthly Reporting',
        description:
          'Transparent reporting on rankings, traffic, and conversions with clear next steps.',
      },
    ],
    benefits: [
      'More organic traffic from Google and other search engines',
      'Higher rankings for keywords your customers actually use',
      'Better website quality and user experience',
      'Long-term, compounding results rather than rented traffic',
      'Clear reporting so you always know what is working',
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Discovery',
        description:
          'We crawl your website, analyze competitors, and understand your business goals to build a baseline.',
      },
      {
        step: '02',
        title: 'Strategy & Roadmap',
        description:
          'We define target keywords, content topics, technical fixes, and a prioritized action plan.',
      },
      {
        step: '03',
        title: 'Implementation',
        description:
          'We execute on-page changes, technical fixes, content creation, and link building in sprints.',
      },
      {
        step: '04',
        title: 'Measure & Refine',
        description:
          'We track rankings and traffic monthly, report results, and adjust the strategy based on data.',
      },
    ],
    whoNeeds: [
      'Businesses that want to reduce dependence on paid ads',
      'Companies with a website that is not generating enough organic traffic',
      'Local businesses that want to appear in more search results',
      'Startups building long-term online visibility',
      'E-commerce stores looking to grow organic sales',
    ],
    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer:
          'Most SEO campaigns show meaningful movement within 3 to 6 months, with significant results typically arriving between 6 and 12 months. The timeline depends on your industry, competition, and the current state of your website.',
      },
      {
        question: 'Do you guarantee #1 rankings on Google?',
        answer:
          'No legitimate SEO agency can guarantee specific rankings. Google\'s algorithm considers hundreds of factors. We focus on sustainable improvements to rankings, traffic, and conversions rather than making false promises.',
      },
      {
        question: 'What is the difference between SEO and Google Ads?',
        answer:
          'Google Ads puts you at the top of search results immediately, but you pay per click and traffic stops when you stop paying. SEO takes longer but builds organic traffic that continues without per-click costs. Most businesses benefit from both.',
      },
    ],
    relatedServices: ['local-seo', 'content-marketing', 'web-analytics', 'conversion-rate-optimization'],
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    shortTitle: 'Local SEO',
    icon: 'MapPin',
    summary:
      'Get found by customers searching for businesses near them in Lucknow. Local SEO puts you on the map — literally.',
    metaTitle: 'Local SEO Services in Lucknow | Get Found by Local Customers',
    metaDescription:
      'Local SEO services in Lucknow. Optimize your Google Business Profile, local citations, and reviews to rank higher in local search and Google Maps.',
    h1: 'Local SEO Services for Lucknow Businesses',
    introduction: [
      'When someone in Lucknow searches for a service you offer, your business should show up. Local SEO makes that happen. It is about ranking in the local pack, Google Maps, and location-based searches that drive foot traffic, phone calls, and leads.',
      'Local SEO is different from general SEO. It focuses on proximity, prominence, and relevance — the three factors Google uses to rank local businesses. We optimize each of these so you appear when nearby customers are searching.',
    ],
    includes: [
      {
        title: 'Google Business Profile Optimization',
        description:
          'Setting up and fully optimizing your Google Business Profile with accurate categories, services, photos, and posts.',
      },
      {
        title: 'Local Keyword Targeting',
        description:
          'Targeting location-based keywords like "near me" and "in Lucknow" that drive local search traffic.',
      },
      {
        title: 'Local Citations & NAP Consistency',
        description:
          'Building consistent name, address, and phone number listings across local directories and maps.',
      },
      {
        title: 'Review Management',
        description:
          'Strategies to generate and respond to customer reviews that boost local rankings and trust.',
      },
      {
        title: 'Local Link Building',
        description:
          'Earning backlinks from local news sites, blogs, and business associations in Lucknow.',
      },
      {
        title: 'Local Landing Pages',
        description:
          'Creating location-specific landing pages for each area or neighborhood you serve.',
      },
    ],
    benefits: [
      'Appear in the Google local pack and Maps results',
      'More phone calls, direction requests, and website visits from local searches',
      'Higher trust from local customers who see reviews and ratings',
      'Better visibility on mobile devices where most local searches happen',
      'A competitive edge over businesses that ignore local SEO',
    ],
    process: [
      {
        step: '01',
        title: 'Local Audit',
        description:
          'We audit your Google Business Profile, local citations, reviews, and local search visibility.',
      },
      {
        step: '02',
        title: 'Profile Optimization',
        description:
          'We fully optimize your Google Business Profile, fix NAP inconsistencies, and set up local citations.',
      },
      {
        step: '03',
        title: 'Content & Reviews',
        description:
          'We create local landing pages, implement a review generation strategy, and build local links.',
      },
      {
        step: '04',
        title: 'Track Local Rankings',
        description:
          'We monitor local pack rankings, Maps visibility, and calls/leads from local search.',
      },
    ],
    whoNeeds: [
      'Retail stores, restaurants, and cafes in Lucknow',
      'Service businesses with a physical location',
      'Clinics, salons, gyms, and professional offices',
      'Home service businesses like plumbers, electricians, and cleaners',
      'Any business that serves customers in a specific geographic area',
    ],
    faqs: [
      {
        question: 'What is the Google local pack?',
        answer:
          'The local pack is the set of three business listings that appear at the top of Google search results for local queries, usually accompanied by a map. Ranking here drives significant traffic and leads for local businesses.',
      },
      {
        question: 'Do I need a physical storefront for local SEO?',
        answer:
          'No. Even service-area businesses without a storefront can benefit from local SEO. You can list the areas you serve without displaying a public address on your Google Business Profile.',
      },
      {
        question: 'How important are reviews for local SEO?',
        answer:
          'Reviews are a major local ranking factor and a key trust signal for potential customers. The quantity, recency, and quality of reviews all influence your local search visibility.',
      },
    ],
    relatedServices: ['seo', 'google-ads', 'content-marketing', 'social-media-marketing'],
  },
  {
    slug: 'google-ads',
    title: 'Google Ads / PPC',
    shortTitle: 'Google Ads / PPC',
    icon: 'Target',
    summary:
      'Get immediate visibility at the top of Google search results with strategically managed Google Ads campaigns that deliver a positive ROI.',
    metaTitle: 'Google Ads Management in Lucknow | PPC Campaigns That Convert',
    metaDescription:
      'Google Ads management services in Lucknow. We create and optimize PPC campaigns that drive targeted traffic, leads, and sales with a focus on ROI.',
    h1: 'Google Ads Management That Drives Targeted Traffic and Leads',
    introduction: [
      'Google Ads is the fastest way to get your business in front of people actively searching for what you offer. Unlike SEO, which builds over months, Google Ads can put you at the top of search results within days.',
      'But running Google Ads without expertise is a quick way to burn money. We manage every aspect of your campaigns — from keyword selection and ad copy to bidding and landing page optimization — to make sure every rupee you spend works hard.',
    ],
    includes: [
      {
        title: 'Campaign Strategy & Setup',
        description:
          'Defining campaign structure, targeting, and bidding strategy aligned with your business goals.',
      },
      {
        title: 'Keyword Research',
        description:
          'Identifying high-intent keywords with commercial value and excluding irrelevant terms with negative keywords.',
      },
      {
        title: 'Ad Copy & Creative',
        description:
          'Writing compelling ad copy that drives clicks and qualifies leads before they cost you money.',
      },
      {
        title: 'Landing Page Optimization',
        description:
          'Designing or refining landing pages that convert ad clicks into leads and sales.',
      },
      {
        title: 'Bid Management & Optimization',
        description:
          'Continuously adjusting bids, budgets, and targeting to improve ROI and reduce wasted spend.',
      },
      {
        title: 'Conversion Tracking',
        description:
          'Setting up accurate tracking so you know exactly which keywords and ads drive results.',
      },
    ],
    benefits: [
      'Immediate visibility on Google for your target keywords',
      'Precise targeting by location, device, and audience',
      'Full control over budget and spending',
      'Measurable ROI with clear conversion tracking',
      'Complements SEO by capturing traffic while organic rankings build',
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Strategy',
        description:
          'We learn about your business, competitors, and goals to design a campaign strategy.',
      },
      {
        step: '02',
        title: 'Campaign Build',
        description:
          'We set up campaigns, ad groups, keywords, ad copy, conversion tracking, and landing pages.',
      },
      {
        step: '03',
        title: 'Launch & Monitor',
        description:
          'We launch campaigns and monitor performance closely in the first weeks to optimize.',
      },
      {
        step: '04',
        title: 'Scale & Refine',
        description:
          'We scale what works, cut what does not, and continuously test to improve ROI.',
      },
    ],
    whoNeeds: [
      'Businesses that need leads quickly',
      'Companies launching a new product or service',
      'E-commerce stores looking to boost sales',
      'Businesses in competitive niches where SEO takes time',
      'Any business that wants to complement organic traffic with paid',
    ],
    faqs: [
      {
        question: 'How much should I spend on Google Ads?',
        answer:
          'Your budget depends on your industry, competition, and goals. We work with budgets starting from a modest monthly spend and help you scale as results prove out. We focus on ROI, not just spend.',
      },
      {
        question: 'How is Google Ads different from SEO?',
        answer:
          'Google Ads places you at the top of search results immediately, but you pay per click. SEO builds organic rankings over time without per-click costs. Both are valuable and work best together.',
      },
      {
        question: 'Do you manage existing Google Ads accounts?',
        answer:
          'Yes. We frequently take over existing accounts, audit them for wasted spend and missed opportunities, and restructure campaigns for better performance.',
      },
    ],
    relatedServices: ['seo', 'local-seo', 'conversion-rate-optimization', 'web-analytics'],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media Marketing',
    icon: 'Share2',
    summary:
      'Build brand awareness, engage your audience, and drive traffic with strategic social media marketing across platforms.',
    metaTitle: 'Social Media Marketing in Lucknow | Grow Your Brand Online',
    metaDescription:
      'Social media marketing services in Lucknow. Content strategy, community management, and paid social campaigns across Instagram, Facebook, LinkedIn, and more.',
    h1: 'Social Media Marketing That Builds Your Brand and Engages Your Audience',
    introduction: [
      'Social media is where your customers spend their time. A strong social media presence builds brand awareness, nurtures trust, and keeps your business top of mind. But it requires more than posting randomly — it takes strategy, consistency, and quality content.',
      'We help businesses in Lucknow build a social media presence that actually contributes to business growth. From content planning to community management to paid social campaigns, we handle it all.',
    ],
    includes: [
      {
        title: 'Social Media Strategy',
        description:
          'Defining your platform mix, content pillars, posting cadence, and growth goals.',
      },
      {
        title: 'Content Creation',
        description:
          'Designing posts, graphics, reels, and videos that resonate with your audience.',
      },
      {
        title: 'Community Management',
        description:
          'Engaging with your audience, responding to comments and messages, and building relationships.',
      },
      {
        title: 'Paid Social Campaigns',
        description:
          'Running targeted ad campaigns on Facebook, Instagram, and LinkedIn to reach new audiences.',
      },
      {
        title: 'Influencer Collaboration',
        description:
          'Identifying and partnering with local influencers to extend your reach.',
      },
      {
        title: 'Analytics & Reporting',
        description:
          'Tracking engagement, reach, and conversions to measure social media ROI.',
      },
    ],
    benefits: [
      'Increased brand awareness and recognition',
      'Stronger relationships with your audience',
      'More traffic to your website from social channels',
      'Better customer trust through consistent engagement',
      'Targeted reach with paid social campaigns',
    ],
    process: [
      {
        step: '01',
        title: 'Strategy & Audit',
        description:
          'We audit your current social presence, define goals, and build a content strategy.',
      },
      {
        step: '02',
        title: 'Content Calendar',
        description:
          'We create a monthly content calendar with posts, graphics, and video content.',
      },
      {
        step: '03',
        title: 'Publishing & Engagement',
        description:
          'We publish consistently, engage with your audience, and manage community interactions.',
      },
      {
        step: '04',
        title: 'Analyze & Optimize',
        description:
          'We track performance, identify what resonates, and refine the strategy monthly.',
      },
    ],
    whoNeeds: [
      'Businesses that want to build a recognizable brand',
      'Companies that need to stay top of mind with their audience',
      'E-commerce brands looking to showcase products visually',
      'Service businesses that want to build trust through social proof',
      'Any business that wants to reach customers on platforms they already use',
    ],
    faqs: [
      {
        question: 'Which social media platforms should my business be on?',
        answer:
          'It depends on where your audience spends time. For B2B, LinkedIn is often key. For visual brands, Instagram works well. For local businesses, Facebook and Instagram are typically most effective. We help you choose the right mix.',
      },
      {
        question: 'How often should I post on social media?',
        answer:
          'Quality matters more than quantity. We recommend a consistent posting schedule — typically 3 to 5 times per week — with content that provides value to your audience rather than just filling the feed.',
      },
      {
        question: 'Can social media marketing drive leads?',
        answer:
          'Yes. While social media is often top-of-funnel, strategic content and targeted ad campaigns can drive qualified leads, especially for service businesses and e-commerce.',
      },
    ],
    relatedServices: ['content-marketing', 'google-ads', 'seo', 'web-analytics'],
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    shortTitle: 'Content Marketing',
    icon: 'PenLine',
    summary:
      'Attract, engage, and convert your audience with content that answers their questions and builds your authority.',
    metaTitle: 'Content Marketing Services in Lucknow | Grow with Content',
    metaDescription:
      'Content marketing services in Lucknow. Blog writing, articles, guides, and content strategy that drives traffic, builds authority, and generates leads.',
    h1: 'Content Marketing That Drives Traffic and Builds Authority',
    introduction: [
      'Content is how modern businesses attract customers. Every blog post, guide, and article you publish is a new entry point for search traffic and a new opportunity to build trust. Content marketing is the engine that fuels SEO, social media, and email marketing.',
      'We create content that serves your audience first. By answering real questions and solving real problems, your content earns rankings, shares, and trust — which turn into leads and customers over time.',
    ],
    includes: [
      {
        title: 'Content Strategy',
        description:
          'Mapping content topics to your audience\'s questions, your business goals, and search opportunities.',
      },
      {
        title: 'Blog & Article Writing',
        description:
          'Writing SEO-optimized blog posts and articles that rank and provide genuine value to readers.',
      },
      {
        title: 'Long-Form Content',
        description:
          'Creating comprehensive guides and pillar pages that establish topical authority.',
      },
      {
        title: 'Content Optimization',
        description:
          'Updating and improving existing content to maintain and grow its search performance.',
      },
      {
        title: 'Content Distribution',
        description:
          'Promoting content through social media, email, and partnerships to maximize reach.',
      },
      {
        title: 'Performance Tracking',
        description:
          'Measuring traffic, engagement, and conversions from content to refine the strategy.',
      },
    ],
    benefits: [
      'More organic traffic as content ranks for relevant searches',
      'Established authority and trust in your industry',
      'Content that fuels social media, email, and other channels',
      'Lead generation through strategic content and CTAs',
      'Long-term assets that continue to drive traffic for years',
    ],
    process: [
      {
        step: '01',
        title: 'Research & Planning',
        description:
          'We research topics, keywords, and competitor content to build a content plan.',
      },
      {
        step: '02',
        title: 'Content Creation',
        description:
          'We write, edit, and optimize content for SEO and readability.',
      },
      {
        step: '03',
        title: 'Publishing & Distribution',
        description:
          'We publish content and promote it through social, email, and relevant channels.',
      },
      {
        step: '04',
        title: 'Measure & Update',
        description:
          'We track content performance and update posts to maintain and grow rankings.',
      },
    ],
    whoNeeds: [
      'Businesses that want to attract customers through search',
      'Companies that need to build authority in their niche',
      'Businesses with a blog that is not generating traffic',
      'Brands that want to educate their audience and build trust',
      'Any business that wants content assets working for them 24/7',
    ],
    faqs: [
      {
        question: 'How often should I publish new content?',
        answer:
          'Consistency matters more than frequency. For most businesses, publishing 2 to 4 quality posts per month is a strong starting point. We help you find the right cadence for your resources and goals.',
      },
      {
        question: 'How long should blog posts be?',
        answer:
          'There is no one-size-fits-all answer. Some topics need 800 words, others need 2,500. We write to the depth the topic requires, not to a word count. Quality and comprehensiveness matter more than length.',
      },
      {
        question: 'How does content marketing support SEO?',
        answer:
          'Content and SEO are deeply connected. Every piece of content is a new page that can rank for relevant searches. Well-structured content builds topical authority, earns backlinks, and gives you more opportunities to appear in search results.',
      },
    ],
    relatedServices: ['seo', 'social-media-marketing', 'web-analytics', 'conversion-rate-optimization'],
  },
  {
    slug: 'web-analytics',
    title: 'Website Analytics',
    shortTitle: 'Website Analytics',
    icon: 'BarChart3',
    summary:
      'Understand how visitors find and use your website so you can make data-driven decisions that grow your business.',
    metaTitle: 'Website Analytics Services in Lucknow | Make Data-Driven Decisions',
    metaDescription:
      'Website analytics setup and reporting services in Lucknow. Google Analytics 4, conversion tracking, dashboards, and insights to help you grow.',
    h1: 'Website Analytics That Turn Data Into Decisions',
    introduction: [
      'You cannot improve what you do not measure. Website analytics tells you where your visitors come from, what they do on your site, and where you are losing them. Without analytics, marketing decisions are just guesses.',
      'We help businesses in Lucknow set up accurate analytics, build clear dashboards, and turn raw data into actionable insights. Whether you need Google Analytics 4 setup, conversion tracking, or custom reporting, we make data work for you.',
    ],
    includes: [
      {
        title: 'Google Analytics 4 Setup',
        description:
          'Proper installation and configuration of GA4 with events, conversions, and audiences.',
      },
      {
        title: 'Conversion Tracking',
        description:
          'Setting up tracking for form submissions, calls, purchases, and other key actions.',
      },
      {
        title: 'Google Tag Manager',
        description:
          'Implementing and managing tags through GTM for flexible, maintainable tracking.',
      },
      {
        title: 'Custom Dashboards',
        description:
          'Building visual dashboards in Looker Studio that show the metrics that matter to your business.',
      },
      {
        title: 'Audit & Data Quality',
        description:
          'Auditing your existing analytics setup to fix data gaps, duplicates, and errors.',
      },
      {
        title: 'Monthly Insights Reports',
        description:
          'Interpreting your data and providing clear recommendations each month.',
      },
    ],
    benefits: [
      'Know exactly where your traffic and leads come from',
      'Identify and fix pages where visitors drop off',
      'Measure the ROI of every marketing channel',
      'Make decisions based on data, not assumptions',
      'Spot trends and opportunities before competitors do',
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Setup',
        description:
          'We audit your current analytics, fix issues, and set up GA4, GTM, and conversion tracking.',
      },
      {
        step: '02',
        title: 'Dashboard Build',
        description:
          'We create custom dashboards that visualize your key metrics and goals.',
      },
      {
        step: '03',
        title: 'Data Collection',
        description:
          'We let data accumulate and monitor for any tracking issues.',
      },
      {
        step: '04',
        title: 'Insights & Reporting',
        description:
          'We deliver monthly reports with insights and recommendations to improve performance.',
      },
    ],
    whoNeeds: [
      'Businesses that do not know where their leads come from',
      'Companies with analytics that is not properly set up',
      'E-commerce stores that need to track product performance',
      'Businesses running ads without conversion tracking',
      'Any business that wants to make data-driven marketing decisions',
    ],
    faqs: [
      {
        question: 'What is Google Analytics 4 and do I need it?',
        answer:
          'Google Analytics 4 (GA4) is Google\'s current analytics platform, replacing Universal Analytics. If you have a website, you need GA4 set up properly to understand your traffic and conversions. We handle the full setup and configuration.',
      },
      {
        question: 'What is the difference between Google Tag Manager and Google Analytics?',
        answer:
          'Google Tag Manager is a tag management system that lets you deploy tracking codes without editing code. Google Analytics is the analytics platform itself. We use GTM to manage GA4 and other tracking tags cleanly.',
      },
      {
        question: 'Can you track phone calls and form submissions?',
        answer:
          'Yes. We set up conversion tracking for form submissions, phone calls, WhatsApp clicks, purchases, and any other action that matters to your business.',
      },
    ],
    relatedServices: ['seo', 'google-ads', 'conversion-rate-optimization', 'content-marketing'],
  },
  {
    slug: 'conversion-rate-optimization',
    title: 'Conversion Rate Optimization',
    shortTitle: 'Conversion Rate Optimization',
    icon: 'TrendingUp',
    summary:
      'Turn more of your existing traffic into leads and customers. CRO is about making every visitor count.',
    metaTitle: 'Conversion Rate Optimization in Lucknow | Turn Traffic Into Leads',
    metaDescription:
      'Conversion rate optimization services in Lucknow. A/B testing, landing page optimization, and UX improvements to increase conversions from your existing traffic.',
    h1: 'Conversion Rate Optimization: More Leads From the Same Traffic',
    introduction: [
      'Getting traffic to your website is only half the battle. If visitors are not converting into leads or customers, that traffic is wasted. Conversion Rate Optimization (CRO) is the process of improving your website to turn more visitors into customers — without spending more on ads.',
      'Even a small improvement in conversion rate can have a big impact on revenue. We use data, testing, and UX best practices to identify what is holding your visitors back and fix it.',
    ],
    includes: [
      {
        title: 'Conversion Audit',
        description:
          'Analyzing your website to identify friction points, confusing elements, and missed opportunities.',
      },
      {
        title: 'Landing Page Optimization',
        description:
          'Redesigning and refining landing pages to maximize conversion rates.',
      },
      {
        title: 'A/B Testing',
        description:
          'Running controlled tests to compare variations and find what actually works.',
      },
      {
        title: 'Form Optimization',
        description:
          'Simplifying and optimizing forms to reduce abandonment and increase submissions.',
      },
      {
        title: 'Call-to-Action Strategy',
        description:
          'Placing and designing CTAs that guide visitors toward the next step.',
      },
      {
        title: 'User Behavior Analysis',
        description:
          'Using heatmaps, session recordings, and user flow analysis to understand visitor behavior.',
      },
    ],
    benefits: [
      'More leads and sales from your existing traffic',
      'Lower cost per acquisition without increasing ad spend',
      'Better user experience that keeps visitors engaged',
      'Data-backed decisions rather than guesswork',
      'Higher ROI from all your marketing channels',
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Analyze',
        description:
          'We audit your conversion funnel and analyze user behavior with heatmaps and recordings.',
      },
      {
        step: '02',
        title: 'Hypothesis & Prioritize',
        description:
          'We identify conversion barriers and prioritize tests by potential impact.',
      },
      {
        step: '03',
        title: 'Test & Implement',
        description:
          'We run A/B tests and implement winning variations on your website.',
      },
      {
        step: '04',
        title: 'Measure & Scale',
        description:
          'We measure results, document learnings, and scale what works across the site.',
      },
    ],
    whoNeeds: [
      'Businesses getting traffic but not enough leads',
      'E-commerce stores with high traffic but low sales',
      'Companies spending on ads with poor conversion rates',
      'Businesses that want to improve ROI without spending more on traffic',
      'Any business that wants to make the most of every website visitor',
    ],
    faqs: [
      {
        question: 'What is a good conversion rate?',
        answer:
          'It varies widely by industry and type of conversion. An average website might convert at 2-3%, but well-optimized sites can achieve 5-10% or higher. We focus on improving your rate relative to your own baseline, not a generic benchmark.',
      },
      {
        question: 'How long does CRO take?',
        answer:
          'An initial audit and first round of tests typically takes 4 to 8 weeks. CRO is an ongoing process — the more you test, the more you improve. We work in monthly cycles of testing and optimization.',
      },
      {
        question: 'Will CRO help if I do not have much traffic?',
        answer:
          'CRO is most effective when you have enough traffic to run meaningful tests. If traffic is low, we focus on high-impact changes based on best practices and user research rather than statistical A/B tests.',
      },
    ],
    relatedServices: ['web-analytics', 'google-ads', 'seo', 'content-marketing'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const service = getService(slug);
  if (!service) return [];
  return service.relatedServices
    .map((s) => getService(s))
    .filter((s): s is Service => s !== undefined);
}
