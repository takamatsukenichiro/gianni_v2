import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessPreview from "@/components/ProcessPreview";
import AccomplishmentsSection from "@/components/AccomplishmentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gianni Vilayhane | Freelance Full-Stack Developer — Web, Mobile & DevOps",
  description:
    "Hire Gianni Vilayhane - Top rated freelance full-stack developer & software engineer based in Washington, US. Expert in Next.js 15, React 19, Spring Boot, Node.js, React Native, and DevOps cloud deployments. Building custom web applications, MVPs, and enterprise systems worldwide.",
  keywords: [
    "Gianni Vilayhane",
    "freelance full-stack developer",
    "freelance web developer",
    "hire full-stack developer",
    "custom business website developer",
    "doctor clinic appointment website developer",
    "dietitian website developer",
    "restaurant food ordering web application",
    "online table reservation system developer",
    "sports ecommerce store developer",
    "freelance software engineer Washington",
    "hire Next.js developer US",
    "hire React developer",
    "freelance SaaS developer",
    "freelance mobile app developer",
    "freelance DevOps engineer",
    "startup MVP developer",
    "full-stack development services",
  ],
  alternates: {
    canonical: "https://giannivilayhane.com",
    languages: {
      "en-IN": "https://giannivilayhane.com",
      "en-US": "https://giannivilayhane.com",
      "en-GB": "https://giannivilayhane.com",
      "en-CA": "https://giannivilayhane.com",
      "en-AU": "https://giannivilayhane.com",
      "x-default": "https://giannivilayhane.com",
    },
  },
  openGraph: {
    title: "Gianni Vilayhane | Freelance Full-Stack Developer — Web, Mobile & DevOps",
    description:
      "Hire Gianni Vilayhane - Top rated freelance full-stack developer delivering scalable web apps, mobile apps, SaaS, and DevOps cloud deployments worldwide.",
    url: "https://giannivilayhane.com",
    type: "website",
    siteName: "Gianni Vilayhane - Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Gianni Vilayhane — Freelance Full-Stack Developer",
      },
      {
        url: "https://giannivilayhane.com/sm-logo.svg",
        width: 512,
        height: 512,
        alt: "Gianni Vilayhane SM Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianni Vilayhane | Freelance Full-Stack Developer",
    description:
      "Hire Gianni Vilayhane - Top rated freelance full-stack developer delivering end-to-end web, mobile, and cloud software solutions.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessPreview />
        <AccomplishmentsSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <BlogPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
