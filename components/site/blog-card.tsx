import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-posts';
import { Badge } from '@/components/ui/badge';

export function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-md">
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="secondary">{post.category}</Badge>
      </div>
      <h3 className="font-heading text-lg font-semibold leading-snug">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-accent"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {post.readingTime} min read
        </span>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-3 text-sm font-medium text-accent transition-colors hover:underline"
        aria-label={`Read article: ${post.title}`}
      >
        Read article
      </Link>
    </article>
  );
}
