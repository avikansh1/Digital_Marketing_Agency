import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services, getService, getRelatedServices } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { CTASection } from '@/components/site/cta-section';
import { FAQ } from '@/components/site/faq';
import { ServiceJsonLd } from '@/components/site/json-ld';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(params.slug);

  return (
    <>
      <div className="container-page">
        <Breadcrumbs
          items={[
            { name: 'Services', url: '/services' },
            { name: service.shortTitle, url: `/services/${service.slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-8 lg:py-12">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
              {service.h1}
            </h1>
            {service.introduction.map((paragraph, index) => (
              <p key={index} className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-8 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What the service includes */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            What Our {service.shortTitle} Includes
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {service.includes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            Benefits of {service.shortTitle}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-foreground/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our process */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            Our {service.shortTitle} Process
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div key={step.step}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs this service */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              Who Needs This Service?
            </h2>
            <ul className="mt-8 space-y-3">
              {service.whoNeeds.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={service.faqs} title={`${service.shortTitle} FAQ`} />

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container-page">
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              Related Services
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <article
                  key={related.slug}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-md"
                >
                  <h3 className="font-heading text-lg font-semibold">
                    <Link
                      href={`/services/${related.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {related.shortTitle}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {related.summary}
                  </p>
                  <Link
                    href={`/services/${related.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:gap-2"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to Grow with ${service.shortTitle}?`}
        description="Book a free consultation and find out how we can help your business get found and grow."
      />

      <ServiceJsonLd
        name={service.title}
        description={service.summary}
        url={`${siteConfig.url}/services/${service.slug}`}
      />
    </>
  );
}
