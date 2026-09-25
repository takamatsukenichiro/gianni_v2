import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Freelance Custom Website Development — Fast, Secure & SEO-Optimized",
  description:
    "Professional freelance website development by Gianni Vilayhane — modern, fast, and SEO-optimized websites built with Next.js, React, and Tailwind CSS. Responsive design, 90+ Lighthouse scores, and conversion-focused. Hire a freelance web developer today.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/websites",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/websites",
    },
  },
  keywords: [
    "freelance website development",
    "hire freelance web developer",
    "custom website design freelance",
    "SEO optimized website developer",
    "responsive website design freelancer",
    "business website developer US",
    "landing page developer",
    "portfolio website developer",
    "Next.js website developer",
    "React website developer",
    "WordPress developer freelance",
    "affordable website development",
    "professional website designer",
    "small business website developer",
    "startup website development",
    "e-commerce website developer",
    "website redesign freelance",
    "fast loading website developer",
    "Gianni Vilayhane website developer",
    "Washington web developer",
    "hire website developer US",
  ],
  openGraph: {
    title: "Freelance Custom Website Development | Gianni Vilayhane",
    description:
      "Professional freelance website development — modern, fast, and SEO-optimized websites that convert visitors into customers. Built with Next.js and React.",
    url: "https://giannivilayhane.com/services/websites",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Custom Website Development | Gianni Vilayhane",
    description:
      "Professional freelance website development — modern, fast, and SEO-optimized websites that convert visitors into customers.",
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function WebsitesServicePage() {
  const websitesServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Business Website Development",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "High-converting business websites for clinics, restaurants, retail brands, and startups built with Next.js 15, React 19, and Tailwind CSS. 95+ PageSpeed scores and SEO-optimized architecture.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Website Packages",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Doctor & Clinic Practice Websites" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Restaurant & Food Ordering Websites" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce & Online Retail Stores" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate & Startup Landing Pages" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "Discovery & Requirements", desc: "We begin with a detailed consultation to understand your business goals, target audience, content strategy, and design preferences. Every requirement is documented before a single line of code is written." },
    { step: "02", title: "UI/UX Design & Figma Prototype", desc: "I create high-fidelity Figma mockups with interactive prototypes. You review and approve the design — layout, typography, color palette, and micro-interactions — before development starts." },
    { step: "03", title: "Frontend Development", desc: "Using Next.js, React, and Tailwind CSS, I build a blazing-fast, responsive frontend. Every component is pixel-perfect to the approved Figma design with smooth animations and 90+ Lighthouse scores." },
    { step: "04", title: "Backend & CMS Integration", desc: "Content management, contact forms, email notifications, and analytics are integrated. You get a easy-to-update CMS so you can manage content without touching code." },
    { step: "05", title: "Testing, Launch & Support", desc: "Cross-browser testing, performance optimization, SEO audit, and security hardening. After launch, I provide ongoing maintenance and support to keep your site running flawlessly." },
  ];

  const features = [
    { icon: "M22 11.08V12a10 10 0 11-5.93-9.14", label: "90+ Lighthouse Score" },
    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "SSL & Security Hardening" },
    { icon: "M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01", label: "SEO Optimized" },
    { icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z", label: "Contact Forms & Lead Capture" },
    { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75", label: "Social Media Integration" },
    { icon: "M22 12h-4l-3 9L9 3l-3 9H2", label: "Google Analytics" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websitesServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              Website Development
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              MODERN WEBSITES
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                THAT CONVERT
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              From landing pages to full business websites — I build fast, secure, and beautifully designed sites that rank on Google and turn visitors into customers.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Start Your Website Project</button>} />
          </FadeInUp>
        </section>

        {/* Client Requirements */}
        <section className="bg-white w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                Step 1
              </span>
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">CLIENT REQUIREMENTS</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">Before we start, I gather everything needed to build your perfect website — no surprises, no scope creep.</p>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Business Goals", desc: "What is the website for? Lead generation, e-commerce, portfolio, blog, or informational?" },
                { title: "Target Audience", desc: "Who are your visitors? Understanding your audience shapes every design decision." },
                { title: "Content Strategy", desc: "Pages needed, copy, images, videos — I help plan your content architecture." },
                { title: "Design Preferences", desc: "Share参考 designs, color preferences, and brand guidelines you want followed." },
                { title: "Domain & Hosting", desc: "Already have a domain? I handle DNS setup, hosting, and SSL certificate installation." },
                { title: "SEO & Analytics", desc: "Target keywords, competitors, and analytics goals — baked in from day one." },
              ].map((item, i) => (
                <StaggerItem key={i}>
                    <div className="rounded-2xl border-2 border-[#e8eaed] bg-[#f8f9fa] p-5 sm:p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-[#aaed2e]/15 flex items-center justify-center mb-4">
                      <span className="text-sm font-black text-[#0a0a0a]">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-bold text-[#0a0a0a] text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* UI/UX Design & Prototype */}
        <section className="bg-[#f8f9fa] w-full py-20 lg:py-28">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeInUp>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                  Step 2
                </span>
                <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-6">UI/UX DESIGN & FIGMA PROTOTYPE</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Every project starts with a pixel-perfect Figma design. You get an interactive prototype that looks and feels exactly like the final website — before any code is written.
                </p>
                <div className="space-y-4">
                  {["High-fidelity Figma mockups for every page", "Interactive prototype with click-through navigation", "Responsive designs for desktop, tablet, and mobile", "Design system with consistent typography and colors", "Unlimited revisions until you are 100% satisfied"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-1 flex-shrink-0"><polyline points="2 7 5.5 10.5 12 3.5" /></svg>
                      <span className="text-sm text-[#0a0a0a]">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e8eaed]">
                  <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80" alt="Figma design prototype" className="w-full h-auto" />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="bg-white w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                Step 3
              </span>
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">DEVELOPMENT PROCESS</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">From confirmed design to deployed website — transparent, structured, and on-schedule.</p>
            </FadeInUp>
            <StaggerContainer className="space-y-6">
              {process.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-4 sm:gap-5 items-start p-5 sm:p-6 rounded-2xl border-2 border-[#e8eaed] bg-[#f8f9fa] hover:border-[#aaed2e] transition-colors duration-300">
                    <span className="text-2xl sm:text-3xl font-black text-[#aaed2e]/40 flex-shrink-0">{item.step}</span>
                    <div>
                      <h3 className="font-bold text-[#0a0a0a] text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-[#f8f9fa] w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12 text-center">
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">WHAT YOU GET</h2>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <StaggerItem key={i}>
                    <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border-2 border-[#e8eaed] bg-white">
                    <div className="w-12 h-12 rounded-xl bg-[#aaed2e]/15 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d={f.icon} /></svg>
                    </div>
                    <span className="font-bold text-sm text-[#0a0a0a]">{f.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0a0a] w-full py-16 sm:py-20 text-center">
          <div className="container-xl">
            <FadeInUp>
              <h2 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>READY TO BUILD YOUR WEBSITE?</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Tell me about your project and let&apos;s create something that stands out.</p>
              <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Get in Touch</button>} />
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
