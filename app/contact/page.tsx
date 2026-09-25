import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/ui/InquiryForm";
import { FadeInUp } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Hire Gianni Vilayhane — Start Your Project & Contact",
  description:
    "Hire Gianni Vilayhane as your freelance full-stack developer. Free 30-minute consultation. Get a custom website, mobile app, SaaS platform, or business software built for your needs. Contact now — available worldwide from Washington, US.",
  keywords: [
    "hire freelance developer",
    "freelance developer contact",
    "hire full-stack developer US",
    "freelance web developer for hire",
    "custom software developer contact",
    "project inquiry freelance",
    "hire React developer",
    "hire Node.js developer",
    "hire Spring Boot developer",
    "hire mobile app developer",
    "hire DevOps engineer",
    "software development consultation",
    "free developer consultation",
    "freelance developer Washington contact",
    "remote developer hire",
    "outsource development US",
    "hire dedicated developer US",
    "freelance developer available",
    "start project freelance developer",
  ],
  alternates: {
    canonical: "https://giannivilayhane.com/contact",
    languages: {
      "en-IN": "https://giannivilayhane.com/contact",
    },
  },
  openGraph: {
    title: "Hire Gianni Vilayhane — Start Your Project & Contact",
    description:
      "Hire Gianni Vilayhane as your freelance full-stack developer. Free 30-minute consultation. Custom websites, mobile apps, and business software.",
    url: "https://giannivilayhane.com/contact",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Hire Gianni Vilayhane — Freelance Full-Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Gianni Vilayhane — Start Your Project & Contact",
    description:
      "Hire Gianni Vilayhane as your freelance full-stack developer. Free 30-minute consultation.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Hire Gianni Vilayhane — Project Inquiry & Free Discovery Call",
    "description": "Schedule a free 30-minute discovery call and get a custom estimate for your web application, mobile app, SaaS platform, or business website within 24 hours.",
    "url": "https://giannivilayhane.com/contact",
    "mainEntity": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "jobTitle": "Freelance Full-Stack Developer",
      "email": "gianni@giannivilayhane.com",
      "telephone": "+17864907508",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bellingham",
        "addressRegion": "Washington",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden bg-[#0a0a0a] min-h-screen text-white">
        {/* Header Hero Section */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-12 lg:pt-40 lg:pb-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#aaed2e]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container-xl relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#aaed2e]/15 border border-[#aaed2e]/30 text-xs font-bold text-[#aaed2e] uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(170,237,46,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
              Available for New Projects
            </span>
            <h1
              className="font-black uppercase text-white leading-[0.92] mb-5 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
            >
              START YOUR{" "}
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                PROJECT
                <span
                  className="absolute -bottom-1.5 left-0 h-[4px] w-full rounded-full"
                  style={{ background: "#aaed2e", boxShadow: "0 0 12px rgba(170, 237, 46, 0.6)" }}
                />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Have a web app, mobile application, custom software, or website in mind? Fill in your project details below for a free 30-minute consultation & custom estimate within 24 hours.
            </p>
          </div>
        </section>

        {/* Main Content Area: Form & Sidebar */}
        <section className="bg-[#0a0a0a] w-full pb-24 lg:pb-32 relative z-10">
          <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Form Container (Left 7 Cols) */}
              <div className="lg:col-span-7">
                <FadeInUp>
                  <div className="relative rounded-3xl bg-[#0d0d0f]/90 border border-white/10 p-6 sm:p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden">
                    {/* Top gradient glow accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#aaed2e] to-transparent opacity-80" />

                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#aaed2e] bg-[#aaed2e]/10 px-2.5 py-1 rounded-md border border-[#aaed2e]/20">
                          Project Proposal Request
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        Tell Me About Your Vision
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">
                        Select your required services, estimated budget, and timeline to get started.
                      </p>
                    </div>

                    <InquiryForm />
                  </div>
                </FadeInUp>
              </div>

              {/* Sidebar Info & Trust Signals (Right 5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                <FadeInUp delay={0.1}>
                  {/* Direct Contact Card */}
                  <div className="rounded-3xl bg-[#0d0d0f]/80 border border-white/10 p-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#aaed2e]/5 rounded-full blur-2xl pointer-events-none" />
                    
                    <h3 className="text-sm font-extrabold text-[#aaed2e] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      Direct Contact & Info
                    </h3>

                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="w-9 h-9 rounded-xl bg-[#aaed2e]/10 text-[#aaed2e] flex items-center justify-center shrink-0 border border-[#aaed2e]/20">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Direct Email</span>
                          <a
                            href="mailto:gianni@giannivilayhane.com"
                            className="font-bold text-white hover:text-[#aaed2e] transition-colors break-all text-xs sm:text-sm"
                          >
                            gianni@giannivilayhane.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="w-9 h-9 rounded-xl bg-[#aaed2e]/10 text-[#aaed2e] flex items-center justify-center shrink-0 border border-[#aaed2e]/20">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Location & Availability</span>
                          <span className="font-bold text-white text-xs sm:text-sm block">
                          Bellingham, WA · US us
                          </span>
                          <span className="text-xs text-gray-400">Serving Clients Worldwide (EST / UTC / IST)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>

                {/* Why Work With Me */}
                <FadeInUp delay={0.2}>
                  <div className="rounded-3xl bg-[#0d0d0f]/80 border border-white/10 p-6 shadow-xl">
                    <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#aaed2e]" />
                      Why Partner With Gianni?
                    </h3>

                    <ul className="space-y-3.5 text-xs sm:text-sm">
                      <li className="flex items-start gap-3 text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-[#aaed2e]/20 text-[#aaed2e] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          ✓
                        </div>
                        <div>
                          <strong className="text-white block font-semibold">24-Hour Fast Proposal</strong>
                          Receive a comprehensive tech breakdown, scope, and estimated cost within 1 business day.
                        </div>
                      </li>

                      <li className="flex items-start gap-3 text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-[#aaed2e]/20 text-[#aaed2e] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          ✓
                        </div>
                        <div>
                          <strong className="text-white block font-semibold">100% NDA & Privacy Protection</strong>
                          Your project ideas, wireframes, and business logic remain strictly confidential.
                        </div>
                      </li>

                      <li className="flex items-start gap-3 text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-[#aaed2e]/20 text-[#aaed2e] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          ✓
                        </div>
                        <div>
                          <strong className="text-white block font-semibold">End-to-End Execution</strong>
                          From UI/UX wireframes to database architecture, API development, testing, and production deployment.
                        </div>
                      </li>
                    </ul>
                  </div>
                </FadeInUp>

                {/* 4-Step Process */}
                <FadeInUp delay={0.3}>
                  <div className="rounded-3xl bg-[#0d0d0f]/80 border border-white/10 p-6 shadow-xl">
                    <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
                      What Happens Next?
                    </h3>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                        <span className="text-[#aaed2e] font-black text-sm block mb-0.5">01</span>
                        <strong className="text-white block font-bold mb-1">Inquiry Review</strong>
                        <span className="text-gray-400">Reviewing goals & tech requirements</span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                        <span className="text-[#aaed2e] font-black text-sm block mb-0.5">02</span>
                        <strong className="text-white block font-bold mb-1">Discovery Call</strong>
                        <span className="text-gray-400">Free 30-min call to align expectations</span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                        <span className="text-[#aaed2e] font-black text-sm block mb-0.5">03</span>
                        <strong className="text-white block font-bold mb-1">Fixed Proposal</strong>
                        <span className="text-gray-400">Transparent scope & milestone timeline</span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                        <span className="text-[#aaed2e] font-black text-sm block mb-0.5">04</span>
                        <strong className="text-white block font-bold mb-1">Sprint Kickoff</strong>
                        <span className="text-gray-400">Agile development & staging demos</span>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
