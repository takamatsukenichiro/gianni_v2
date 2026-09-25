import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "System Integration & Business Automation Services | Gianni Vilayhane",
  description:
    "Custom system integration, middleware, API orchestration, and business automation solutions that connect your CRM, payments, databases, communication tools, and business applications.",
  alternates: {
    canonical:
      "https://giannivilayhane.com/services/system-integration-business-automation",
    languages: {
      "en-IN":
        "https://giannivilayhane.com/services/system-integration-business-automation",
    },
  },
  keywords: [
    "system integration developer",
    "business automation developer",
    "middleware developer",
    "API integration developer",
    "business process automation",
    "SaaS integration developer",
    "third party API integration",
    "CRM integration developer",
    "custom middleware development",
    "API orchestration",
    "business system integration",
    "Gianni Vilayhane",
  ],
  openGraph: {
    title: "System Integration & Business Automation Services | Gianni Vilayhane",
    description:
      "Connect business systems, APIs, databases, and third-party services through custom middleware and automated workflows.",
    url:
      "https://giannivilayhane.com/services/system-integration-business-automation",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "System Integration & Business Automation Services — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "System Integration & Business Automation | Gianni Vilayhane",
    description:
      "Custom middleware, API integrations, system synchronization, and automated business workflows.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function SystemIntegrationBusinessAutomationPage() {
  const integrationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "System Integration & Business Automation",
    serviceType: "System Integration & Business Automation",
    provider: {
      "@type": "Person",
      name: "Gianni Vilayhane",
      url: "https://giannivilayhane.com",
    },
    areaServed: "Worldwide",
    description:
      "Custom middleware, API integrations, system synchronization, and automated business workflows connecting CRM, payments, databases, communication platforms, and internal business applications.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "System Integration & Business Automation Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Middleware Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Third-Party API & SaaS Integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Workflow Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Synchronization & API Orchestration",
          },
        },
      ],
    },
  };

  const process = [
    {
      step: "01",
      title: "Map Your Business Systems",
      desc:
        "Analyze your existing applications, APIs, databases, SaaS platforms, and manual processes to identify where systems need to communicate.",
    },
    {
      step: "02",
      title: "Design the Integration Layer",
      desc:
        "Design a reliable middleware architecture that defines how services exchange data, trigger events, authenticate, and handle failures.",
    },
    {
      step: "03",
      title: "Connect APIs & Services",
      desc:
        "Integrate third-party APIs, internal applications, CRMs, payment systems, databases, communication platforms, and business tools.",
    },
    {
      step: "04",
      title: "Automate Business Workflows",
      desc:
        "Turn repetitive manual processes into event-driven workflows that automatically move data, trigger actions, and keep systems synchronized.",
    },
    {
      step: "05",
      title: "Monitor & Optimize",
      desc:
        "Add logging, error handling, retries, monitoring, and analytics so integrations remain reliable as your business and systems evolve.",
    },
  ];

  const features = [
    {
      title: "Custom Middleware",
      desc:
        "A dedicated integration layer that connects multiple systems without tightly coupling your applications together.",
    },
    {
      title: "API Orchestration",
      desc:
        "Coordinate multiple APIs and services into a single automated business process with reliable request and response handling.",
    },
    {
      title: "Business Workflow Automation",
      desc:
        "Automate repetitive operational workflows so information moves between systems without manual intervention.",
    },
    {
      title: "CRM & SaaS Integration",
      desc:
        "Connect CRMs, ERP systems, SaaS platforms, internal applications, and other business-critical tools.",
    },
    {
      title: "Data Synchronization",
      desc:
        "Keep customer, order, payment, operational, and application data synchronized across connected systems.",
    },
    {
      title: "Event-Driven Automation",
      desc:
        "Use webhooks and events to trigger downstream actions automatically whenever important business events occur.",
    },
    {
      title: "Payment & Subscription Integration",
      desc:
        "Connect payment providers and subscription systems with your applications, databases, CRM, and operational workflows.",
    },
    {
      title: "Monitoring & Error Handling",
      desc:
        "Build retries, logging, validation, alerts, and failure handling into your integration architecture.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(integrationServiceSchema),
        }}
      />

      <Navbar />

      <main className="w-full overflow-x-hidden">

        {/* Hero Section */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #aaed2e 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <FadeInUp className="container-xl relative z-10">

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-300 uppercase tracking-widest mb-5">
              <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
              System Integration &amp; Business Automation
            </span>

            <h1
              className="font-black uppercase text-white leading-[0.92] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              CONNECT YOUR
              <br />
              <span
                className="relative inline-block"
                style={{ color: "#aaed2e" }}
              >
                BUSINESS SYSTEMS
                <span
                  className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full"
                  style={{ background: "#aaed2e" }}
                />
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              Custom middleware, API integrations, and automated business
              workflows that connect your CRM, payments, databases,
              communication platforms, and internal applications into one
              reliable system.
            </p>

            <InquiryPopup
              trigger={
                <button
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
                  style={{ background: "#aaed2e" }}
                >
                  Automate Your Business
                </button>
              }
            />

          </FadeInUp>
        </section>

        {/* Capabilities */}
        <section className="bg-white w-full py-16 lg:py-24">
          <div className="container-xl">

            <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">
                Integration &amp; Automation Capabilities
              </h2>

              <p className="text-gray-600 text-sm sm:text-base">
                Turn disconnected tools and repetitive manual processes into
                reliable, automated business systems.
              </p>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="p-7 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#aaed2e] hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">

                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] text-[#aaed2e] flex items-center justify-center font-mono font-bold text-sm mb-5 group-hover:scale-110 transition-transform">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <h3 className="font-bold text-lg text-[#0a0a0a] mb-2">
                        {f.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>

                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

          </div>
        </section>

        {/* Architecture / Middleware Section */}
        <section className="bg-[#f5f5f5] w-full py-16 lg:py-24">
          <div className="container-xl">

            <FadeInUp className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Integration Architecture
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a0a0a] uppercase tracking-tight mt-3 mb-5">
                ONE BUSINESS WORKFLOW.
                <br />
                <span style={{ color: "#aaed2e" }}>
                  MULTIPLE SYSTEMS.
                </span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Instead of forcing every application to communicate directly
                with every other application, I build a reliable integration
                layer that orchestrates data and actions between your systems.
              </p>
            </FadeInUp>

            <FadeInUp>
              <div className="max-w-5xl mx-auto rounded-3xl bg-[#0a0a0a] p-6 sm:p-10 border border-black">

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      System
                    </span>
                    <h3 className="text-white font-bold mt-2">
                      CRM
                    </h3>
                  </div>

                  <div className="hidden md:flex justify-center text-[#aaed2e] text-2xl">
                    →
                  </div>

                  <div className="rounded-2xl border border-[#aaed2e]/40 bg-[#aaed2e]/10 p-6 text-center">
                    <span className="text-xs text-[#aaed2e] uppercase tracking-wider">
                      Integration Layer
                    </span>
                    <h3 className="text-white font-black mt-2">
                      MIDDLEWARE
                    </h3>
                    <p className="text-gray-400 text-xs mt-2">
                      APIs · Webhooks · Events
                    </p>
                  </div>

                  <div className="hidden md:flex justify-center text-[#aaed2e] text-2xl">
                    →
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      System
                    </span>
                    <h3 className="text-white font-bold mt-2">
                      Operations
                    </h3>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-xs text-gray-400">
                      Payments
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-xs text-gray-400">
                      Databases
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-xs text-gray-400">
                      Communication
                    </p>
                  </div>

                </div>

              </div>
            </FadeInUp>

          </div>
        </section>

        {/* Process Timeline */}
        <section className="bg-[#0a0a0a] w-full py-16 lg:py-24 text-white">
          <div className="container-xl">

            <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
                My Integration &amp; Automation Workflow
              </h2>

              <p className="text-gray-400 text-sm sm:text-base">
                From mapping your existing systems to deploying reliable
                automated business workflows.
              </p>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {process.map((p, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#aaed2e] block mb-2">
                      {p.step}
                    </span>

                    <h3 className="font-bold text-sm text-white mb-2">
                      {p.title}
                    </h3>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-white w-full py-16 lg:py-20 border-t border-gray-100">
          <div className="container-xl text-center max-w-2xl mx-auto">

            <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">
              READY TO CONNECT YOUR SYSTEMS?
            </h2>

            <p className="text-gray-600 text-sm sm:text-base mb-8">
              Let&apos;s build the integration layer and automated workflows
              your business needs to operate more efficiently.
            </p>

            <InquiryPopup
              trigger={
                <button
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
                  style={{ background: "#aaed2e" }}
                >
                  Discuss Your Integration Project
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