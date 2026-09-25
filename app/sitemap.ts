import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";

const BASE_URL = "https://giannivilayhane.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${BASE_URL}/services/websites`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/web-apps`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/mobile-apps`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/desktop-apps`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${BASE_URL}/services/ui-ux-design`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${BASE_URL}/services/domain-ssl`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${BASE_URL}/services/seo-optimization`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/digital-marketing`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/agentic-ai-chatbots`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/integration-automation`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/portfolio`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${BASE_URL}/process`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.95 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.95 },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${BASE_URL}/portfolio/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...blogPages, ...caseStudyPages];
}
