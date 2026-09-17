import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { blogPosts, getBlogPost, getRelatedPosts, type BlogPost } from '@/lib/blog-posts';
import { getService, type Service } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';
import { BlogCard } from '@/components/site/blog-card';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { CTASection } from '@/components/site/cta-section';
import { Badge } from '@/components/ui/badge';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

function ArticleContent({ content }: { content: BlogPost['content'] }) {
  return (
    <div className="max-w-none">
      {content.map((block, index) => {
        if (block.type === 'h2') {
          return (
            <h2 key={index} className="mt-10 font-heading text-2xl font-bold">
              {block.text}
            </h2>
          );
        }

        if (block.type === 'h3') {
          return (
            <h3 key={index} className="mt-8 font-heading text-xl font-semibold">
              {block.text}
            </h3>
          );
        }

        if (block.type === 'ul') {
          return (
            <ul key={index} className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              {block.items?.map((item) => <li key={item}>{item}</li>)}
            </ul>
          );
        }

        if (block.type === 'ol') {
          return (
            <ol key={index} className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground">
              {block.items?.map((item) => <li key={item}>{item}</li>)}
            </ol>
          );
        }

        return (
          <p key={index} className="mt-4 text-base leading-8 text-muted-foreground">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const relatedPosts = getRelatedPosts(post.slug);
  const relatedServices = post.relatedServices
    .map((slug) => getService(slug))
    .filter((service): service is Service => service !== undefined);

  return (
    <>
      <div className="container-page">
        <Breadcrumbs
          items={[
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` },
          ]}
        />
      </div>

      <article>
        <header className="border-b border-border bg-muted/30 py-12 lg:py-16">
          <div className="container-page">
            <div className="mx-auto max-w-3xl">
              <Badge variant="secondary">{post.category}</Badge>
              <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground text-pretty">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}, {post.authorRole}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </header>

        <section className="py-12 lg:py-16">
          <div className="container-page">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="min-w-0">
                <ArticleContent content={post.content} />
              </div>

              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
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
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container-page">
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              Related Articles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Want a Clearer Marketing Roadmap?"
        description="Bring what you have learned, and we can help you turn it into a practical next-step plan."
        primaryCta="Book a Free Consultation"
      />
    </>
  );
}
