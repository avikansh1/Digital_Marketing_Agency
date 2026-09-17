export const siteConfig = {
  name: 'GrowthGrid Digital',
  tagline: 'Turn Search Traffic Into Real Business Growth.',
  description:
    'GrowthGrid Digital is a digital marketing agency in Lucknow helping local businesses, startups, and SMEs get found online through SEO, local SEO, Google Ads, content marketing, and analytics.',
  url: 'https://www.growthgriddigital.in',
  email: 'hello@growthgriddigital.in',
  phoneDisplay: '+91 90000 00000',
  phoneHref: '+919000000000',
  whatsapp: '919000000000',
  address: {
    street: 'Hazratganj',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    country: 'India',
    pincode: '226001',
  },
  social: {
    twitter: 'https://twitter.com/growthgriddigital',
    linkedin: 'https://www.linkedin.com/company/growthgriddigital',
    instagram: 'https://www.instagram.com/growthgriddigital',
    facebook: 'https://www.facebook.com/growthgriddigital',
  },
  foundedYear: 2021,
} as const;

export type SiteConfig = typeof siteConfig;
