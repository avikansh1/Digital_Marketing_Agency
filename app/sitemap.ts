import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import { caseStudies } from '@/lib/case-studies';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://growthgriddigital.vercel.app';
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, priority: 1 },
    { url: `${baseUrl}/services`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/case-studies`, lastModified, priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified, priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified, priority: 0.3 },
    { url: `${baseUrl}/sitemap`, lastModified, priority: 0.3 },
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    priority: 0.85,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    priority: 0.65,
  }));

  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified,
    priority: 0.55,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...caseStudyRoutes];
}
