import Link from 'next/link';
import {
  ArrowRight,
  Search,
  MapPin,
  Target,
  Share2,
  PenLine,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  TrendingUp as TrendUp,
  Users,
  Building2,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Store,
  Wrench,
} from 'lucide-react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';
import { caseStudies } from '@/lib/case-studies';
import { testimonials, homeFaqs } from '@/lib/testimonials';
import { blogPosts } from '@/lib/blog-posts';
import { ServiceCard } from '@/components/site/service-card';
import { CaseStudyCard } from '@/components/site/case-study-card';
import { TestimonialCard } from '@/components/site/testimonial-card';
import { BlogCard } from '@/components/site/blog-card';
import { CTASection } from '@/components/site/cta-section';
import { FAQ } from '@/components/site/faq';
import { SectionHeading } from '@/components/site/section-heading';

export const metadata: Metadata = {
  title: { absolute: 'Digital Marketing Agency in Lucknow | GrowthGrid Digital' },
  description:
    'GrowthGrid Digital is a digital marketing agency in Lucknow helping businesses get found online through SEO, local SEO, Google Ads, content marketing, and analytics. Get a free SEO audit today.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Digital Marketing Agency in Lucknow | GrowthGrid Digital',
    description:
      'SEO, local SEO, Google Ads, content and analytics strategies designed to turn online visibility into measurable business growth.',
    url: siteConfig.url,
  },
};

const trustStats = [
  { value: '50+', label: 'Businesses Helped' },
  { value: '3+', label: 'Years of Experience' },
  { value: '8', label: 'Marketing Services' },
  { value: '100%', label: 'Transparent Reporting' },
];

const whyChooseUs = [
  {
    icon: Search,
    title: 'Data-Driven Approach',
    description:
      'Every decision we make is backed by data. We track, measure, and optimize continuously to maximize your ROI.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description:
      'We understand the Lucknow market. Our local SEO strategies are built for businesses serving customers in and around the city.',
  },
  {
    icon: TrendUp,
    title: 'Sustainable Growth',
    description:
      'We focus on long-term results, not quick fixes. Our strategies compound over time to build lasting visibility.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent Reporting',
    description:
      'You always know what we are doing and why. Clear monthly reports show exactly how your campaigns are performing.',
  },
  {
    icon: Target,
    title: 'ROI-Focused',
    description:
      'We care about your business results — leads, sales, and revenue — not vanity metrics that look good but mean nothing.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description:
      'You work directly with the people doing the work. No account managers passing messages between you and the team.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description:
      'We start by understanding your business, goals, and current online presence. A thorough audit identifies what is working and what needs fixing.',
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description:
      'Based on the audit, we build a custom digital marketing strategy with clear priorities, timelines, and success metrics.',
  },
  {
    step: '03',
    title: 'Implementation',
    description:
      'We execute the strategy — optimizing your website, creating content, running campaigns, and building your online presence.',
  },
  {
    step: '04',
    title: 'Measure & Scale',
    description:
      'We track results, report transparently, and refine the approach based on data. What works, we scale. What does not, we fix.',
  },
];

const industries = [
  { icon: Store, name: 'Local Retail' },
  { icon: Stethoscope, name: 'Healthcare' },
  { icon: GraduationCap, name: 'Education' },
  { icon: ShoppingBag, name: 'E-commerce' },
  { icon: Building2, name: 'Real Estate' },
  { icon: Wrench, name: 'Home Services' },
  { icon: Users, name: 'Startups' },
  { icon: Target, name: 'Service Businesses' },
];

const localSeoFeatures = [
  'Google Business Profile optimization',
  'Local keyword targeting',
  'Local citation building',
  'Review management strategy',
  'Location-specific landing pages',
  'Local link building',
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border bg-primary py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Digital Marketing Agency in Lucknow
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
              Digital Marketing That Helps Lucknow Businesses Get Found, Get Leads &amp; Grow.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70 text-pretty">
              SEO, local SEO, Google Ads, content and analytics strategies designed to turn
              online visibility into measurable business growth.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-8 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Get a Free SEO Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-primary-foreground/20 px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust/credibility */}
      <section className="border-b border-border bg-background py-12">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services overview */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="Digital Marketing Services Built for Growth"
            description="From SEO to Google Ads to content marketing, we offer the full range of digital marketing services your business needs to grow online."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
            <article className="group flex flex-col justify-center rounded-xl border border-dashed border-border bg-muted/30 p-6 text-center">
              <h3 className="font-heading text-lg font-semibold">
                Need a custom strategy?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Not sure which service is right for you? Let us help you figure it out.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:gap-2"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Why choose us */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Partner That Actually Cares About Your Results"
            description="We are not just another agency. We work as an extension of your team, focused on driving real business outcomes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How our process works */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Drive Results for Your Business"
            description="A clear, proven process that turns your marketing investment into measurable business growth."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Local SEO section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                Local SEO
              </p>
              <h2 className="font-heading text-3xl font-bold text-primary-foreground text-balance sm:text-4xl">
                Get Found by Customers Searching for You in Lucknow
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70 text-pretty">
                When someone in Lucknow searches for the service you offer, your business
                should appear. Our local SEO services make that happen — in Google Maps, the
                local pack, and location-based searches.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {localSeoFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-primary-foreground/80"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services/local-seo"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Explore Local SEO Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/digital-marketing-agency-lucknow"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-primary-foreground/20 px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Learn About Lucknow Digital Marketing
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8">
              <div className="space-y-4">
                {[
                  { label: 'Google Business Profile views', value: '+180%' },
                  { label: 'Local search rankings', value: 'Top 3' },
                  { label: 'Direction requests', value: '+120%' },
                  { label: 'Customer calls', value: '+95%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between border-b border-primary-foreground/10 pb-4 last:border-0"
                  >
                    <span className="text-sm text-primary-foreground/70">{stat.label}</span>
                    <span className="font-heading text-xl font-bold text-accent">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-primary-foreground/40">
                Illustrative metrics based on typical local SEO outcomes. Individual results vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Industries served */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="We Help Businesses Across Industries"
            description="From local retail to e-commerce, our digital marketing strategies are tailored to your industry."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent/40 hover:shadow-sm"
              >
                <industry.icon className="mb-3 h-8 w-8 text-accent" />
                <span className="text-sm font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Results/case studies */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real Strategies, Real Results"
            description="See how we approach digital marketing challenges. These are demo examples that illustrate our process and methodology."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {caseStudies.slice(0, 4).map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:gap-2"
            >
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="These are demo testimonials representing the kind of feedback we aim to earn from every client."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <FAQ faqs={homeFaqs} />

      {/* 11. Final CTA */}
      <CTASection />

      {/* 12. Latest blog posts */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Latest Articles"
            title="Digital Marketing Insights & Tips"
            description="Practical articles to help you understand and improve your digital marketing."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:gap-2"
            >
              Read all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
