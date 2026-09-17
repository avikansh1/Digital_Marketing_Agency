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

export function ServiceSection({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Search;

  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              {service.shortTitle}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {service.summary}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:gap-2"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              What is included
            </h3>
            <ul className="mt-3 space-y-2">
              {service.includes.slice(0, 4).map((item) => (
                <li key={item.title} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-foreground/80">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
