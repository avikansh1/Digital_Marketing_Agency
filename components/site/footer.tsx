import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';

const footerLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/sitemap.xml', label: 'Sitemap' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-page py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
                GG
              </span>
              <span className="font-heading text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {siteConfig.tagline} A digital marketing agency in Lucknow helping businesses get
              found, get leads, and grow.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Services
            </h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Company
            </h2>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Legal
            </h2>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Get in Touch
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-4 inline-flex h-10 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get a Free SEO Audit
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
