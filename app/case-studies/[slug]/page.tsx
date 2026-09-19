import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';
import { getService, type Service } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { CTASection } from '@/components/site/cta-section';
import { Badge } from '@/components/ui/badge';

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy) return {};

  return {
    title: { absolute: caseStudy.metaTitle },
    description: caseStudy.metaDescription,
    alternates: { canonical: `${siteConfig.url}/case-studies/${caseStudy.slug}` },
    openGraph: {
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      url: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
    },
  };
}

function DetailSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="py-10">
      <h2 className="font-heading text-2xl font-bold">{title}</h2>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 rounded-xl border border-border bg-card p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
            <p className="text-sm leading-7 text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy) notFound();

  const relatedServices = caseStudy.relatedServices
    .map((slug) => getService(slug))
    .filter((service): service is Service => service !== undefined);

  return (
    <>
      <div className="container-page">
        <Breadcrumbs
          items={[
            { name: 'Case Studies', url: '/case-studies' },
            { name: caseStudy.title, url: `/case-studies/${caseStudy.slug}` },
          ]}
        />
      </div>

      <header className="border-b border-border bg-muted/30 py-12 lg:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{caseStudy.industry}</Badge>
              {caseStudy.isDemo && <Badge variant="outline">Demo Example</Badge>}
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground text-pretty">
              {caseStudy.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>{caseStudy.client}</span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {caseStudy.location}
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              {caseStudy.isDemo && (
                <div className="rounded-xl border border-border bg-muted/40 p-5 text-sm leading-7 text-muted-foreground">
                  This is a demo case study used to explain GrowthGrid Digital's process and
                  project structure. It is not presented as a verified client result.
                </div>
              )}

              <DetailSection title="The Challenge" items={caseStudy.problem} />
              <DetailSection title="Strategy" items={caseStudy.strategy} />
              <DetailSection title="Implementation" items={caseStudy.implementation} />
              <DetailSection title="Results" items={caseStudy.results} />
              <DetailSection title="Lessons" items={caseStudy.lessons} />
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-heading text-base font-semibold">Key Metrics</h2>
                <div className="mt-4 space-y-3">
                  {caseStudy.kpis.map((kpi) => (
                    <div key={kpi.label} className="rounded-lg bg-accent/5 p-3">
                      <p className="text-xs text-muted-foreground">{kpi.label}</p>
                      <p className="mt-1 font-heading text-lg font-bold text-foreground">
                        {kpi.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {relatedServices.length > 0 && (
                <div className="rounded-xl border border-border bg-card p-5">
                  <h2 className="font-heading text-base font-semibold">Related Services</h2>
                  <div className="mt-4 space-y-3">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        {service.shortTitle}
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title="Build a Clear Plan for Your Business"
        description="Share your current website and growth goals, and we will help you identify the highest-impact next steps."
        primaryCta="Request a Consultation"
      />
    </>
  );
}
