import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/site/breadcrumbs';

export const metadata: Metadata = {
  title: 'Sitemap | GrowthGrid Digital',
  description:
    'A complete list of pages on the GrowthGrid Digital website. Find what you need quickly with our HTML sitemap.',
  alternates: {
    canonical: 'https://digital-marketing-agency-pi.vercel.app/sitemap',
  },
};

const links = [
  { label: 'Home', href: '/', description: 'Digital marketing agency in Lucknow' },
  { label: 'Services', href: '/services', description: 'Explore all our digital marketing services' },
  { label: 'About', href: '/about', description: 'Learn about GrowthGrid Digital' },
  { label: 'Contact', href: '/contact', description: 'Get in touch for a free SEO audit' },
  { label: 'Blog', href: '/blog', description: 'Read our digital marketing articles and guides' },
  { label: 'Case Studies', href: '/case-studies', description: 'See how we approach marketing challenges' },
  { label: 'Privacy Policy', href: '/privacy-policy', description: 'How we handle your data' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions', description: 'Terms of using this website and our services' },
];

export default function SitemapPage() {
  return (
    <>
      <div className="container-page">
        <Breadcrumbs items={[{ name: 'Sitemap', url: '/sitemap' }]} />
      </div>

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Navigation
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Sitemap
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground text-pretty">
              A complete list of pages on the GrowthGrid Digital website. Use this to find what
              you are looking for quickly.
            </p>

            <ul className="mt-10 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-sm"
                  >
                    <span>
                      <span className="font-heading text-lg font-semibold transition-colors group-hover:text-accent">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {link.description}
                      </span>
                    </span>
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
