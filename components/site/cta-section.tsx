import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection({
  title = 'Ready to Get Found by More Customers?',
  description = 'Book a free SEO audit and find out exactly what is holding your website back — and how to fix it.',
  primaryCta = 'Get a Free SEO Audit',
  primaryHref = '/contact',
  secondaryCta = 'Explore Our Services',
  secondaryHref = '/services',
}: {
  title?: string;
  description?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-primary-foreground text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/70 text-pretty">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-8 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryHref}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-primary-foreground/20 px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
