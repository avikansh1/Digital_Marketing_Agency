import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Search,
  MapPin,
  Target,
  Share2,
  PenLine,
  BarChart3,
  TrendingUp,
} from 'lucide-react';
import type { Service } from '@/lib/services';

const iconMap: Record<string, React.ElementType> = {
  Search,
  MapPin,
  Target,
  Share2,
  PenLine,
  BarChart3,
  TrendingUp,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Search;

  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-lg font-semibold">
        <Link
          href={`/services/${service.slug}`}
          className="transition-colors hover:text-accent"
        >
          {service.shortTitle}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
        {service.summary}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:gap-2"
        aria-label={`Learn more about ${service.shortTitle}`}
      >
        Learn more
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
