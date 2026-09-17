import type { Metadata } from 'next';
import { blogCategories, blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';
import { BlogCard } from '@/components/site/blog-card';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { CTASection } from '@/components/site/cta-section';
import { SectionHeading } from '@/components/site/section-heading';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog',
  description:
    'Practical digital marketing, SEO, local SEO, Google Ads, and analytics articles for growing businesses.',
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <div className="container-page">
        <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }]} />
        <section className="py-8 lg:py-12">
          <SectionHeading
            eyebrow="Blog"
            title="Digital Marketing Insights and Practical Guides"
            description="Learn the fundamentals of SEO, local search, paid ads, content, and analytics with articles written for business owners."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {blogCategories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </section>
      </div>

      <section className="py-8 lg:py-12">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help Turning Learning Into Action?"
        description="Use the articles to build your own marketing foundation, then book a consultation when you want a second pair of eyes."
        primaryCta="Ask for a Website Review"
        secondaryCta="Explore Services"
      />
    </>
  );
}
