import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/lib/case-studies';
import { Badge } from '@/components/ui/badge';

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-md">
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="secondary">{caseStudy.industry}</Badge>
        {caseStudy.isDemo && (
          <Badge variant="outline" className="text-muted-foreground">
            Demo Example
          </Badge>
        )}
      </div>
      <h3 className="font-heading text-lg font-semibold">
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="transition-colors hover:text-accent"
        >
          {caseStudy.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
        {caseStudy.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {caseStudy.kpis.slice(0, 2).map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg bg-accent/5 px-3 py-1.5"
          >
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
            <p className="text-sm font-semibold text-foreground">{kpi.value}</p>
          </div>
        ))}
      </div>
      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:gap-2"
        aria-label={`Read case study: ${caseStudy.title}`}
      >
        Read case study
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
