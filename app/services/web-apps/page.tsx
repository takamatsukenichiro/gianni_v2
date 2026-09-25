import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Freelance Custom Business Web Applications — SaaS, Dashboards & APIs",
  description:
    "Freelance web application developer Gianni Vilayhane building powerful, scalable web apps with secure login, dashboards, real-time features, and payment integration. Built with React, Next.js, and Node.js. Hire me for your SaaS or business app.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/web-apps",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/web-apps",
    },
  },
  keywords: [
    "freelance web application developer",
    "hire freelance SaaS developer",
    "custom business web app",
    "SaaS development freelancer",
    "dashboard development freelance",
    "full-stack web app developer",
    "hire React developer",
    "hire Node.js developer",
    "hire backend developer",
    "REST API developer freelance",
    "real-time web application",
    "booking system developer",
    "marketplace developer freelance",
    "admin panel developer",
    "payment integration developer",
    "enterprise web application",
    "custom CRM developer",
    "freelance API developer",
    "Gianni Vilayhane web apps",
    "Washington web application developer",
    "hire full-stack developer US",
  ],
  openGraph: {
    title: "Freelance Custom Business Web Applications | Gianni Vilayhane",
    description: "Freelance web app developer building powerful, scalable web apps with secure auth, dashboards, and payment integration.",
    url: "https://giannivilayhane.com/services/web-apps",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Freelance Custom Business Web Applications — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Custom Business Web Applications | Gianni Vilayhane",
    description: "Freelance web app developer building powerful, scalable web apps with secure auth, dashboards, and payment integration.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function WebAppsServicePage() {
  const webAppServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Business Web Applications & SaaS Development",
    "serviceType": "SaaS Engineering",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "Full-stack SaaS platforms, admin dashboards, booking engines, and custom business portals built with Next.js, Node.js, Spring Boot 3, and PostgreSQL.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Application Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Platform & Startup MVP Engineering" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer Portals & Admin Analytics Dashboards" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payment Gateway & Billing Automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Concurrency REST & GraphQL APIs" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "Discovery & Requirements", desc: "Deep-dive into your business logic, user roles, data flows, integrations, and success metrics. Every feature is documented and prioritized." },
    { step: "02", title: "UI/UX Design & Figma Prototype", desc: "High-fidelity Figma mockups with interactive prototypes. You approve every screen, flow, and interaction before development begins." },
    { step: "03", title: "Backend Development", desc: "API design, database schema, authentication, business logic, and third-party integrations — built with Node.js, Spring Boot, and PostgreSQL." },
    { step: "04", title: "Frontend Development", desc: "Pixel-perfect React/Next.js frontend with real-time updates, responsive design, and smooth animations matching the approved Figma design." },
    { step: "05", title: "Testing, Deployment & Support", desc: "End-to-end testing, performance optimization, CI/CD pipeline setup, cloud deployment, and ongoing maintenance." },
  ];

  const features = [
    { title: "User Authentication", desc: "JWT, OAuth, secure cookies, role-based access control, and multi-factor authentication." },
    { title: "Admin Dashboards", desc: "Real-time analytics, data visualization, user management, and configurable admin panels." },
    { title: "Payment Integration", desc: "Razorpay, Stripe, and PayPal integration with subscription billing and invoice generation." },
    { title: "Real-Time Features", desc: "WebSocket-powered notifications, live updates, chat, and collaborative editing." },
    { title: "API & Integrations", desc: "RESTful APIs, third-party service integrations, webhooks, and automation workflows." },
    { title: "Cloud Deployment", desc: "AWS, Vercel, or Docker deployment with auto-scaling, monitoring, and backup systems." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              Web Application Development
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              CUSTOM BUSINESS
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                WEB APPLICATIONS
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              From SaaS platforms and dashboards to booking systems and marketplaces — I build powerful web apps with secure auth, real-time features, and payment integration.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Start Your Web App Project</button>} />
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
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">Every great web app starts with a clear understanding of the problem it solves.</p>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Business Logic", desc: "What does your app do? Workflows, rules, calculations, and data transformations." },
                { title: "User Roles", desc: "Admin, manager, viewer — who can do what? Role-based access is designed from day one." },
                { title: "Data & Database", desc: "What data do you store? Relationships, volumes, and retention requirements." },
                { title: "Integrations", desc: "Payment gateways, email services, CRMs, ERPs — list every third-party connection." },
                { title: "Scale & Performance", desc: "Expected users, concurrent sessions, and response time requirements." },
                { title: "Existing Systems", desc: "Legacy software, APIs, or databases that need to connect with the new app." },
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
                  Every web app gets a pixel-perfect Figma design with interactive prototypes. You see exactly what the final product looks like before any code is written.
                </p>
                <div className="space-y-4">
                  {["High-fidelity Figma mockups for every screen", "Interactive prototype with realistic user flows", "Responsive design for desktop and mobile", "Component library with reusable patterns", "Unlimited revisions until approved"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-1 flex-shrink-0"><polyline points="2 7 5.5 10.5 12 3.5" /></svg>
                      <span className="text-sm text-[#0a0a0a]">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e8eaed]">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" alt="Web app development" className="w-full h-auto" />
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
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">From confirmed design to deployed application — structured, transparent, and on schedule.</p>
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

        {/* Features */}
        <section className="bg-[#f8f9fa] w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12 text-center">
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">WHAT YOU GET</h2>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#e8eaed] bg-white h-full">
                    <h3 className="font-bold text-[#0a0a0a] text-sm mb-2">{f.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
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
              <h2 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>READY TO BUILD YOUR WEB APP?</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Tell me about your project and let&apos;s engineer something powerful together.</p>
              <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Get in Touch</button>} />
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
