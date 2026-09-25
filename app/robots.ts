import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://giannivilayhane.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/api/book-call", "/api/whatsapp"],
        disallow: ["/_next/", "/admin/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/api/book-call"],
        disallow: ["/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/api/book-call"],
        disallow: ["/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/api/book-call"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/api/book-call"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/api/book-call"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/api/book-call"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/api/book-call"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/api/book-call"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
