import type { Testimonial } from '@/lib/testimonials';
import { Badge } from '@/components/ui/badge';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6">
      {testimonial.isDemo && (
        <Badge variant="outline" className="mb-3 w-fit text-muted-foreground">
          Demo Example
        </Badge>
      )}
      <blockquote className="flex-1 text-foreground/80 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer className="mt-4 border-t border-border pt-4">
        <p className="font-semibold text-foreground">{testimonial.author}</p>
        <p className="text-sm text-muted-foreground">
          {testimonial.role}, {testimonial.company}
        </p>
      </footer>
    </article>
  );
}
