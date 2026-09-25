import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Software Engineering, Web Development & DevOps Insights",
  description:
    "Read expert articles on full-stack web development, Spring Boot performance, Docker production best practices, Next.js SEO, microservices architecture, and software engineering from Gianni Vilayhane — a freelance full-stack developer.",
  keywords: [
    "software engineering blog",
    "full-stack development articles",
    "web development blog US",
    "Spring Boot performance tuning",
    "Docker production best practices",
    "Next.js SEO guide",
    "microservices vs monolith",
    "freelance developer blog",
    "React development tips",
    "DevOps engineering blog",
    "backend development articles",
    "frontend development tips",
    "software architecture blog",
    "freelance developer insights",
    "Washington developer blog",
  ],
  alternates: {
    canonical: "https://giannivilayhane.com/blog",
    languages: {
      "en-IN": "https://giannivilayhane.com/blog",
    },
  },
  openGraph: {
    title: "Blog — Software Engineering & Development Insights | Gianni Vilayhane",
    description:
      "Expert articles on full-stack development, Spring Boot, Docker, Next.js SEO, microservices architecture, and software engineering from freelance developer Gianni Vilayhane.",
    url: "https://giannivilayhane.com/blog",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Blog — Software Engineering & Development Insights | Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Software Engineering & Development Insights | Gianni Vilayhane",
    description:
      "Expert articles on full-stack development, Spring Boot, Docker, Next.js SEO, microservices architecture, and software engineering.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
