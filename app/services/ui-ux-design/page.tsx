import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Freelance UI/UX Design Services — Figma Wireframes, Prototypes & Design Systems",
  description:
    "Professional freelance UI/UX design services by Gianni Vilayhane — wireframes, prototypes, and design systems in Figma. Beautiful, user-centered interfaces that convert. Hire a freelance UI/UX designer.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/ui-ux-design",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/ui-ux-design",
    },
  },
  keywords: [
    "freelance UI/UX design",
    "freelance Figma designer",
    "web app design freelance",
    "mobile app design freelance",
    "design system freelance",
    "hire UI/UX designer",
    "freelance product designer",
    "wireframe designer freelance",
    "prototype designer US",
    "user research freelance",
    "interaction designer",
    "responsive design freelancer",
    "SaaS UI/UX design",
    "dashboard design freelance",
    "landing page design freelance",
    "app interface design",
    "Gianni Vilayhane UI/UX",
    "Washington UI/UX designer",
    "hire Figma designer US",
  ],
  openGraph: {
    title: "Freelance UI/UX Design Services | Gianni Vilayhane",
    description: "Professional freelance UI/UX design — wireframes, prototypes, and design systems in Figma.",
    url: "https://giannivilayhane.com/services/ui-ux-design",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Freelance UI/UX Design Services — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance UI/UX Design Services | Gianni Vilayhane",
    description: "Professional freelance UI/UX design — wireframes, prototypes, and design systems in Figma.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function UiUxDesignServicePage() {
  const uiUxServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design & High-Fidelity Figma Prototypes",
    "serviceType": "Product Design",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "User-focused UI/UX design with persona development, wireframing, clickable Figma interactive prototypes, and design systems for web and mobile.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UI/UX Design Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interactive Clickable Figma Prototypes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile & Web Design Systems & Component Libraries" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Information Architecture & User Journey Mapping" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Developer-Ready Handoff & Auto-Layout Specs" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "User Research & Discovery", desc: "I study your users, competitors, and market to understand what people actually need. Personas, journey maps, and competitive analysis form the foundation." },
    { step: "02", title: "Wireframing & Information Architecture", desc: "Low-fidelity wireframes map out every screen and user flow. Navigation structure and content hierarchy are finalized before visual design begins." },
    { step: "03", title: "High-Fidelity Figma Design", desc: "Pixel-perfect mockups with your brand colors, typography, and imagery. Every component is built in Figma with auto-layout and responsive constraints." },
    { step: "04", title: "Interactive Prototype", desc: "A clickable Figma prototype that simulates the real product. Test with real users, gather feedback, and iterate before any development starts." },
    { step: "05", title: "Design System & Developer Handoff", desc: "A complete component library with tokens, variants, and documentation. Developers get specs, assets, and code-ready designs for seamless implementation." },
  ];

  const deliverables = [
    { title: "User Personas", desc: "Data-driven profiles of your target users with goals, pain points, and behaviors." },
    { title: "User Flow Diagrams", desc: "Visual maps of every path a user can take through your product." },
    { title: "Wireframes", desc: "Low-fi layouts for every screen — desktop and mobile." },
    { title: "Hi-Fi Mockups", desc: "Pixel-perfect designs with real content, colors, and typography." },
    { title: "Interactive Prototype", desc: "Clickable Figma prototype with transitions and micro-interactions." },
    { title: "Design System", desc: "Component library with tokens, variants, and usage guidelines." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(uiUxServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              UI/UX Design
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              DESIGNS THAT
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                USERS LOVE
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              From wireframes to interactive Figma prototypes — I design intuitive, beautiful interfaces that make your product effortless to use and impossible to forget.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Start Your Design Project</button>} />
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
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">Great design starts with understanding. I gather everything needed to create interfaces that truly solve your users&apos; problems.</p>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Product Vision", desc: "What problem does your product solve? Who is it for? What makes it different?" },
                { title: "User Research", desc: "Existing user data, interviews, surveys, and analytics — I analyze it all." },
                { title: "Brand Guidelines", desc: "Logo, colors, typography, and tone of voice — design stays consistent." },
                { title: "Competitor References", desc: "What do you like and dislike about competitors? I learn from the market." },
                { title: "Platform & Devices", desc: "Web, mobile, tablet, or all? Screen sizes and platform-specific needs." },
                { title: "Business Goals", desc: "Conversion targets, engagement metrics, and success criteria for the design." },
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

        {/* Figma Design & Prototype */}
        <section className="bg-[#f8f9fa] w-full py-20 lg:py-28">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeInUp>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                  Step 2
                </span>
                <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-6">FIGMA DESIGN & INTERACTIVE PROTOTYPE</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  You get a complete Figma file with every screen, component, and interaction — plus a clickable prototype you can share with stakeholders and test with users.
                </p>
                <div className="space-y-4">
                  {["Complete Figma file with all screens and components", "Clickable prototype with realistic transitions", "Responsive variants for desktop, tablet, and mobile", "Annotated specs for developers", "User testing results and iteration history"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-1 flex-shrink-0"><polyline points="2 7 5.5 10.5 12 3.5" /></svg>
                      <span className="text-sm text-[#0a0a0a]">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e8eaed]">
                  <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80" alt="Figma UI/UX design" className="w-full h-auto" />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="bg-white w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                Step 3
              </span>
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">DESIGN PROCESS</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">A structured approach that ensures every design decision is backed by research and validated with users.</p>
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

        {/* Deliverables */}
        <section className="bg-[#f8f9fa] w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12 text-center">
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">WHAT YOU GET</h2>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {deliverables.map((d, i) => (
                <StaggerItem key={i}>
                  <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#e8eaed] bg-white h-full">
                    <h3 className="font-bold text-[#0a0a0a] text-sm mb-2">{d.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
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
              <h2 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>READY FOR STUNNING DESIGN?</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Let&apos;s create interfaces your users will love. Tell me about your project.</p>
              <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Get in Touch</button>} />
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
