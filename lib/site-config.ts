export const siteConfig = {
  name: 'GrowthGrid Digital',
  tagline: 'Turn Search Traffic Into Real Business Growth.',
  description:
    'GrowthGrid Digital is a digital marketing agency in Lucknow helping local businesses, startups, and SMEs get found online through SEO, local SEO, Google Ads, content marketing, and analytics.',
  url: 'https://growthgriddigital.vercel.app',
  email: '',
  phoneDisplay: '+91 7678482100',
  phoneTel: '+917678482100',
  phoneE164: '917678482100',
  phoneHref: '+917678482100',
  whatsapp: '917678482100',
  address: '',
  // Social profiles are not live yet.
  // socials: {
  //   twitter: 'https://twitter.com/growthgriddigital',
  //   linkedin: 'https://www.linkedin.com/company/growthgriddigital',
  //   instagram: 'https://www.instagram.com/growthgriddigital',
  //   facebook: 'https://www.facebook.com/growthgriddigital',
  // },
  foundedYear: 2021,
} as const;

export type SiteConfig = typeof siteConfig;
