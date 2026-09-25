import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccomplishmentsSection from "@/components/AccomplishmentsSection";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "About Gianni Vilayhane — Freelance Full-Stack Developer & Software Engineer",
  description:
    "Learn about Gianni Vilayhane — a freelance full-stack developer and software engineer with 12+ years of experience building enterprise-grade web, mobile, and desktop applications. Based in Washington, US. Available for hire worldwide. Expert in React, Next.js, Spring Boot, Node.js, DevOps, and cloud architecture.",
  keywords: [
    "Gianni Vilayhane",
    "freelance developer about",
    "full-stack developer US",
    "software engineer Washington",
    "freelance software engineer US",
    "hire full-stack developer",
    "experienced web developer",
    "Spring Boot expert",
    "React developer US",
    "microservices architect",
    "DevOps engineer freelance",
    "independent software developer",
    "contract developer US",
    "freelance developer portfolio",
    "Washington software engineer",
    "full-stack developer experience",
    "about freelance developer",
    "hire experienced developer US",
  ],
  alternates: {
    canonical: "https://giannivilayhane.com/about",
    languages: {
      "en-IN": "https://giannivilayhane.com/about",
    },
  },
  openGraph: {
    title: "About Gianni Vilayhane — Freelance Full-Stack Developer & Software Engineer",
    description:
      "Learn about Gianni Vilayhane — a freelance full-stack developer with 12+ years of experience building enterprise-grade web, mobile, and desktop applications. Available for hire worldwide.",
    url: "https://giannivilayhane.com/about",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Gianni Vilayhane — Freelance Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Gianni Vilayhane — Freelance Full-Stack Developer",
    description:
      "Learn about Gianni Vilayhane — a freelance full-stack developer with 12+ years of experience building enterprise-grade applications.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

const values = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    title: "Security First",
    description: "Every system I build is hardened from the ground up — authentication, authorization, encryption, and audit logging are non-negotiable.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
    title: "Performance Driven",
    description: "I optimize for speed at every layer — from database queries to API response times to frontend rendering. Milliseconds matter.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
    title: "User Centred",
    description: "Technology serves people. I design interfaces that feel intuitive and natural — because the best software is invisible.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    title: "Clean Code",
    description: "I write code that other developers can read, maintain, and extend. Clean architecture, SOLID principles, and comprehensive testing.",
  },
];

const timeline = [
  {
    year: "2013",
    title: "Started the Journey",
    text: "Began my software engineering career, building web applications and developing a strong foundation in frontend development, backend systems, and software engineering."
  },
  {
    year: "2014",
    title: "Frontend Engineering",
    text: "Joined Zapproved and worked on production web applications using React, Node.js, Python, MongoDB, REST APIs, and modern frontend architecture."
  },
  {
    year: "2017",
    title: "Full-Stack Engineering",
    text: "Expanded into full-stack engineering at the Seattle Mariners, building React and TypeScript applications, REST APIs, authentication systems, and real-time WebSocket features."
  },
  {
    year: "2019",
    title: "Performance & Scale",
    text: "Joined ecoATM Gazelle and focused on high-performance web applications, frontend optimization, CMS architecture, A/B testing, and scalable development practices."
  },
  {
    year: "2021",
    title: "Enterprise Integrations",
    text: "Expanded into enterprise integrations and automation, connecting business platforms through APIs, webhooks, middleware, authentication, and event-driven workflows."
  },
  {
    year: "2022",
    title: "SaaS Automation",
    text: "Worked across Salesforce, HubSpot, QuickBooks, Gmail, Mailgun, SaaSOptics, and other business systems to replace manual processes with secure API-driven automation."
  },
  {
    year: "2023",
    title: "Integration Architecture",
    text: "Deepened expertise in enterprise system architecture, data synchronization, third-party APIs, authentication, and scalable integration platforms."
  },
  {
    year: "2024",
    title: "Enterprise Systems",
    text: "Joined RecordTrack to build and extend integrations across Zendesk, Salesforce Litify, and Filevine, developing middleware, automation workflows, APIs, and centralized management dashboards."
  },
  {
    year: "2025",
    title: "AI & Modern Platforms",
    text: "Expanded into AI-powered and multi-modal platforms, combining full-stack engineering, cloud infrastructure, APIs, automation, and intelligent system architecture."
  },
  {
    year: "2026",
    title: "Scaling Enterprise Systems",
    text: "Continuing to build enterprise-grade AI, integration, and automation systems with a focus on scalable architectures, distributed platforms, and complex business workflows."
  },
];


export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gianni Vilayhane",
    "alternateName": ["Gianni", "Gianni Developer"],
    "jobTitle": "Senior Freelance Full-Stack Developer & SaaS Architect",
    "url": "https://giannivilayhane.com/about",
    "image": "https://giannivilayhane.com/gianni/gianni_pf.png",
    "email": "gianni@giannivilayhane.com",
    "telephone": "+17864907508",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bellingham",
      "addressRegion": "Washington",
      "addressCountry": "US"
    },
    "description": "Senior freelance full-stack software engineer with 12+ years of experience delivering custom business websites, doctor platforms, restaurant ordering systems, e-commerce stores, and high-concurrency SaaS backends worldwide.",
    "knowsAbout": [
      "Full-Stack Development",
      "Custom Business Web Applications",
      "Doctor & Healthcare Portals",
      "Restaurant Ordering & Table Reservation Platforms",
      "Sports E-Commerce Systems",
      "FinTech High-Concurrency Architecture",
      "Agentic AI Chatbots & RAG Automation",
      "React & Next.js 15",
      "Spring Boot 3 & Java 21",
      "PostgreSQL & Apache Kafka",
      "Docker & Kubernetes DevOps",
      "Technical SEO & Generative Engine Optimization (GEO)"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Calcutta"
    },
    "sameAs": [
      "https://github.com/giannivilayhane",
      "https://www.linkedin.com/in/gianne-vilayhane",

    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-28 pb-14 lg:pt-36 lg:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              About Me
            </div>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
              THE DEVELOPER
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                BEHIND THE CODE
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              I'm Gianni Vilayhane, a freelance software engineer and full-stack developer specializing in enterprise integrations, automation, AI-powered platforms, and scalable web applications. I build secure, production-ready systems that connect complex technologies and solve real business problems. Available for hire worldwide.
            </p>
            <InquiryPopup
              trigger={
                <button className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>
                  Work With Me
                </button>
              }
            />
          </FadeInUp>
        </section>

        {/* Story */}
        <section className="bg-white w-full py-12 sm:py-16 lg:py-20">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 border border-[#aaed2e]/40 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                  My Story
                </div>
                <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.92] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  BUILDING SOFTWARE
                  <br />
                  <span className="relative inline-block">
                    THAT MATTERS
                    <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
                  </span>
                </h2>
                <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
                  <p>
                  Over 12 years of building production software has taught me that businesses rarely need just another developer. They need someone who understands how the pieces fit together: application architecture, APIs, integrations, data, authentication, infrastructure, deployment, and the workflows that keep everything running.
                  </p>
                  <p>
                  I work independently as a freelance full-stack and enterprise integration engineer, helping businesses build and connect the systems they depend on. From React and Next.js applications to Python and FastAPI services, REST APIs, webhooks, OAuth, event-driven workflows, and third-party platforms, I focus on solving the underlying technical problem rather than simply writing code.
                  </p>
                  <p>
                  My sweet spot is building reliable software at the intersection of full-stack development, enterprise integrations, automation, and AI. I've worked with platforms including Salesforce/Litify, Filevine, Zendesk, HubSpot, QuickBooks, and other SaaS systems, while also building AI-powered and multi-modal platforms.
                  </p>
                  <p>
                  Whether you're launching a new product, automating a complex business process, connecting disconnected systems, or modernizing an existing platform, I bring an end-to-end engineering mindset focused on building software that is scalable, maintainable, and ready for real-world use.
                  </p>
                </div>
              </FadeInUp>

              {/* Timeline */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-6">Journey</h3>
                <StaggerContainer staggerDelay={0.08} className="space-y-6">
                  {timeline.map((item) => (
                    <StaggerItem key={item.year}>
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center flex-shrink-0">
                          <span className="text-xs font-black text-[#aaed2e]">{item.year}</span>
                          <div className="w-px h-full bg-[#e8eaed] mt-2" />
                        </div>
                        <div className="pb-6">
                          <h4 className="font-bold text-sm text-[#0a0a0a] mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white w-full py-12 sm:py-16 lg:py-20 border-t border-gray-100">
          <div className="container-xl">
            <FadeInUp className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/20 border border-[#aaed2e]/40 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                Values
              </div>
              <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.92]" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
                WHAT I{" "}
                <span className="relative inline-block">
                  STAND FOR
                  <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
                </span>
              </h2>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {values.map((v, i) => (
                <StaggerItem key={v.title}>
                  <div className="skill-card group rounded-2xl border-2 border-[#e8eaed] bg-white p-7 h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#f4f5f7] text-[#0a0a0a] transition-transform duration-300 group-hover:scale-110" style={{ color: "#aaed2e" }}>
                      {v.icon}
                    </div>
                    <span className="text-[11px] font-black tracking-widest text-[#0a0a0a]/12">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-bold text-base text-[#0a0a0a] mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <AccomplishmentsSection />

        {/* CTA */}
        <section className="bg-[#0a0a0a] w-full py-12 sm:py-16 lg:py-20 text-center">
          <div className="container-xl">
            <h2 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              LET&apos; BUILD TOGETHER
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
              Whether you have a clear vision or just a rough idea, I&apos;m here to make it happen.
            </p>
            <InquiryPopup
              trigger={
                <button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>
                  Get In Touch
                </button>
              }
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
