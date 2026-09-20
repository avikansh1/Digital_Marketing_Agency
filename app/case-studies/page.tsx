import type { Metadata } from 'next';
import { caseStudies } from '@/lib/case-studies';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { CaseStudyCard } from '@/components/site/case-study-card';
import { CTASection } from '@/components/site/cta-section';
import { SectionHeading } from '@/components/site/section-heading';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Demo case studies showing how GrowthGrid Digital approaches local SEO, SEO, Google Ads, content marketing, and analytics projects.',
  alternates: { canonical: `${siteConfig.url}/case-studies` },
  openGraph: {
    title: 'Marketing Case Studies & Results | GrowthGrid Digital',
    description:
      'Demo case studies showing how GrowthGrid Digital approaches local SEO, SEO, Google Ads, content marketing, and analytics projects.',
    url: `${siteConfig.url}/case-studies`,
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <div className="container-page">
        <Breadcrumbs items={[{ name: 'Case Studies', url: '/case-studies' }]} />
        <section className="py-8 lg:py-12">
          <SectionHeading
            as="h1"
            eyebrow="Case Studies"
            title="Marketing Scenarios, Strategies, and Lessons"
            description="These demo examples show the kind of problems we solve, how we think through strategy, and what we measure along the way."
          />
          <p className="mx-auto mt-5 max-w-2xl rounded-xl border border-border bg-muted/40 p-4 text-center text-sm text-muted-foreground">
            Case studies on this site are clearly labeled demo examples. They are included
            to explain methodology and should not be read as verified client claims.
          </p>
        </section>
      </div>

      <section className="py-8 lg:py-12">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Similar Growth Challenge?"
        description="Tell us what is blocking your visibility or lead flow, and we will suggest a practical way forward."
        primaryCta="Discuss Your Project"
      />
    </>
  );
}
