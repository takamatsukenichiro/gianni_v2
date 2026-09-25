import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gianni Vilayhane | Freelance Full-Stack Software Engineer & Technical SEO Specialist",
    short_name: "Gianni Dev",
    description:
      "Hire Gianni Vilayhane - expert freelance full-stack software engineer for custom web applications, SaaS platforms, mobile apps, Spring Boot microservices, and technical SEO/GEO.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#aaed2e",
    orientation: "portrait-primary",
    categories: ["developer", "business", "portfolio", "productivity"],
    icons: [
      {
        src: "/gianni/gianni_pf.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/gianni/gianni_pf.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/sm-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Book Free Discovery Call",
        short_name: "Book Call",
        description: "Schedule a 30-minute free consultation with Gianni Vilayhane",
        url: "/contact",
        icons: [{ src: "/gianni/gianni_pf.png", sizes: "192x192" }],
      },
      {
        name: "View Live Case Studies",
        short_name: "Portfolio",
        description: "Explore production web & mobile application portfolio",
        url: "/portfolio",
        icons: [{ src: "/gianni/gianni_pf.png", sizes: "192x192" }],
      },
      {
        name: "Technical Articles & Guides",
        short_name: "Blog",
        description: "Read in-depth technical publications on Next.js, Spring Boot, & DevOps",
        url: "/blog",
        icons: [{ src: "/gianni/gianni_pf.png", sizes: "192x192" }],
      },
    ],
  };
}
