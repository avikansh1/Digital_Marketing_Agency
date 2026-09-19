import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { StickyMobileCTA } from '@/components/site/sticky-mobile-cta';
import { JsonLd } from '@/components/site/json-ld';
import { siteConfig } from '@/lib/site-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'digital marketing agency Lucknow',
    'SEO agency Lucknow',
    'local SEO services Lucknow',
    'Google Ads Lucknow',
    'social media marketing Lucknow',
    'content marketing',
    'conversion rate optimization',
  'GrowthGrid Digital',
  'digital marketing services Lucknow',
  'SEO services for small businesses',
  'Google Business Profile optimization',
    'website analytics',
  'PPC Lucknow',
    'lead generation Lucknow',
  'digital marketing for small businesses',
    'SEO services Lucknow',
    'online marketing Lucknow',
    'GrowthGrid Digital',
    'digital marketing agency Uttar Pradesh',
    'SEO services for small businesses Lucknow',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'Business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans">
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
