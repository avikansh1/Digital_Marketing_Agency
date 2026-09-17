import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, CheckCircle2, MapPin, Search, Target } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { CTASection } from '@/components/site/cta-section';
import { SectionHeading } from '@/components/site/section-heading';

export const metadata: Metadata = {
  title: 'About GrowthGrid Digital',
  description:
    'Learn about GrowthGrid Digital, a Lucknow-based digital marketing agency focused on practical SEO, paid search, content, analytics, and conversion work.',
  alternates: { canonical: `${siteConfig.url}/about` },
};

const principles = [
  {
    icon: Search,
    title: 'Start with the customer',
    description:
      'We study how people search, compare, and choose before recommending channels or campaigns.',
  },
  {
    icon: BarChart3,
    title: 'Measure what matters',
    description:
      'Traffic is useful, but leads, calls, sales, and customer quality decide whether marketing is working.',
  },
  {
    icon: Target,
    title: 'Prioritize the next best move',
    description:
      'Most businesses do not need more complexity. They need a clear order of work and steady execution.',
  },
  {
    icon: MapPin,
    title: 'Respect local context',
    description:
      'Lucknow businesses compete in real neighborhoods, real search results, and real buying situations.',
  },
];

const process = [
  'Audit the current website, search visibility, analytics, and lead flow.',
  'Identify the highest-impact fixes before expanding into new campaigns.',
  'Build simple reporting so business owners can see what changed and why.',
  'Keep improving pages, content, ads, and conversion paths based on evidence.',
];

export default function AboutPage() {
  return (
    <>
      <div className="container-page">
        <Breadcrumbs items={[{ name: 'About', url: '/about' }]} />
      </div>

      <section className="border-b border-border bg-muted/30 py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              About GrowthGrid Digital
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Practical Digital Marketing for Businesses That Want Clarity
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground text-pretty">
              GrowthGrid Digital is a Lucknow-based agency helping local businesses,
              startups, and SMEs improve visibility, generate better leads, and understand
              what their marketing is actually doing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                How We Work
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-balance sm:text-4xl">
                Strategy First, Then Execution That Compounds
              </h2>
              <p className="mt-4 text-muted-foreground leading-8">
                The work starts with understanding the business model, the current website,
                the local market, and the buyer journey. From there, the goal is to remove
                friction, improve discoverability, and make every channel easier to measure.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Talk to Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <principle.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="A Focused Set of Growth Capabilities"
            description="The site already organizes our work into service pages so visitors can quickly understand what each channel does."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-sm"
              >
                <h3 className="font-heading font-semibold">{service.shortTitle}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              The Operating Rhythm
            </h2>
            <div className="mt-8 space-y-4">
              {process.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
