import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { ContactForm } from '@/components/site/contact-form';

export const metadata: Metadata = {
  title: 'Contact GrowthGrid Digital',
  description:
    'Contact GrowthGrid Digital for SEO, local SEO, Google Ads, content marketing, analytics, and conversion support.',
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: `https://wa.me/${siteConfig.whatsapp}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="container-page">
        <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />
      </div>

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Contact
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
                Tell Us Where Your Marketing Feels Stuck
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground text-pretty">
                Share your website, business goals, and what you want to improve. We will
                respond with a practical next step instead of a generic pitch.
              </p>

              <div className="mt-8 space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <method.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">{method.label}</span>
                      <span className="font-medium">{method.value}</span>
                    </span>
                  </a>
                ))}
                <div className="flex gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Location</span>
                    <span className="font-medium">
                      {siteConfig.address.street}, {siteConfig.address.city},{' '}
                      {siteConfig.address.state} {siteConfig.address.pincode}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
