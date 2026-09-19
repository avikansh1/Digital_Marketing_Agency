import type { Metadata } from 'next';
import { services } from '@/lib/services';
import { ServiceCard } from '@/components/site/service-card';
import { CTASection } from '@/components/site/cta-section';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { SectionHeading } from '@/components/site/section-heading';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: { absolute: 'Digital Marketing Services in Lucknow | GrowthGrid Digital' },
  description:
    'Explore our digital marketing services: SEO, local SEO, Google Ads, social media marketing, content marketing, web analytics, and conversion rate optimization.',
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: 'Digital Marketing Services in Lucknow | GrowthGrid Digital',
    description:
      'Explore our full range of digital marketing services designed to help your business grow online.',
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="container-page">
        <Breadcrumbs items={[{ name: 'Services', url: '/services' }]} />
        <section className="py-8 lg:py-12">
          <SectionHeading
            eyebrow="Our Services"
            title="Digital Marketing Services for Every Stage of Growth"
            description="Whether you need to build visibility, generate leads, or optimize conversions, we have a service designed to help. Explore each one to learn how it works."
          />
        </section>
      </div>

      <section className="py-8 lg:py-12">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Book a free consultation and we will help you figure out the best digital marketing strategy for your business."
        primaryCta="Book a Consultation"
        secondaryCta={undefined}
      />
    </>
  );
}
