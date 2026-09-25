import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Services | Freelance Full-Stack engineer ",
  description:
    "Freelance full-stack software engineer Gianni Vilayhane delivers end-to-end digital solutions across web applications, AI platforms, enterprise integrations, APIs, automation, and cloud infrastructure. Hire me to build, connect, and scale your next software product.",
  keywords: [
    "freelance development services",
    "hire freelance web developer",
    "custom website development services",
    "web application development services",
    "mobile app development services",
    "desktop app development services",
    "UI/UX design services freelance",
    "SSL domain protection services",
    "full-stack development services US",
    "affordable web development",
    "professional software development",
    "end-to-end development services",
    "freelance services Washington",
    "remote development services",
    "outsourced web development",
    "custom software solutions",
    "hire full-stack developer US",
    "freelance React developer services",
    "freelance Next.js development",
    "SaaS development services",
    "startup MVP development",
    "enterprise software development",
  ],
  alternates: {
    canonical: "https://giannivilayhane.com/services",
    languages: {
      "en-IN": "https://giannivilayhane.com/services",
    },
  },
  openGraph: {
    title: "Freelance Development Services | Gianni Vilayhane",
    description:
      "Freelance full-stack developer offering website development, web apps, mobile apps, desktop software, UI/UX design, and domain/SSL protection. End-to-end digital solutions.",
    url: "https://giannivilayhane.com/services",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Freelance Development Services — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Development Services | Gianni Vilayhane",
    description:
      "Freelance full-stack developer offering website development, web apps, mobile apps, desktop software, UI/UX design, and domain/SSL protection.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

const serviceLinks: Record<string, string> = {
  website: "/services/websites",
  webapp: "/services/web-apps",
  mobile: "/services/mobile-apps",
  desktop: "/services/desktop-apps",
  uiux: "/services/ui-ux-design",
  security: "/services/domain-ssl",
  seo: "/services/seo-optimization",
  marketing: "/services/digital-marketing",
  chatbot: "/services/agentic-ai-chatbots",
  integration: "/services/integration-automation",
};

function ServiceDetailCard({ service, index }: { service: typeof services[0]; index: number }) {
  const icons: Record<string, React.ReactNode> = {
    website: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
    webapp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /><polyline points="7 10 12 14 17 10" /></svg>,
    mobile: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
    desktop: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
    uiux: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
    security: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2L4 7v5c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V7l-8-5z" /><polyline points="9 12 11 14 15 10" /></svg>,
    seo: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><polyline points="6 11 9 8 12 11 15 7" /></svg>,
    marketing: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M3 3v18h18" /><path d="M18 9l-5 5-4-4-5 5" strokeWidth="2" /></svg>,
    chatbot: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="6" width="18" height="13" rx="3" /><circle cx="9" cy="12" r="1.5" fill="currentColor" /><circle cx="15" cy="12" r="1.5" fill="currentColor" /><path d="M12 2v4M12 19v3" /></svg>,
    integration: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="4" width="6" height="6" rx="1.5" /><rect x="15" y="14" width="6" height="6" rx="1.5" /><rect x="15" y="4" width="6" height="6" rx="1.5" /><path d="M9 7h6" /><path d="M18 10v4" /><path d="M6 10v3a3 3 0 0 0 3 3h6" /></svg>,
  };

  const href = serviceLinks[service.id] || "#";

  return (
    <div id={service.id} className="group rounded-2xl border-2 border-[#e8eaed] bg-white p-7 sm:p-8 scroll-mt-24 h-full">
      <div className="flex items-start gap-5 mb-5">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: "#aaed2e", color: "#0a0a0a" }}
        >
          {icons[service.iconType]}
        </div>
        <div>
          <span className="text-[11px] font-black tracking-widest text-[#aaed2e]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-black text-xl text-[#0a0a0a] leading-snug">{service.title}</h3>
        </div>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.fullDescription}</p>

      <div className="mb-5">
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">What&apos;s Included</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[#0a0a0a]">
              <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-0.5 flex-shrink-0">
                <polyline points="2 7 5.5 10.5 12 3.5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.map((t) => (
            <span key={t} className="px-2.5 py-0.5 rounded-md border border-[#0a0a0a]/10 text-[11px] font-semibold text-[#0a0a0a] bg-[#f8f9fa]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-[#e8eaed] flex items-center justify-between">
        <Link href={href} className="text-sm font-bold text-[#0a0a0a] hover:text-[#aaed2e] transition-colors">
          View Details →
        </Link>
        <InquiryPopup
          trigger={
            <button className="text-sm font-bold text-[#aaed2e] hover:underline underline-offset-2">
              Get a Quote →
            </button>
          }
        />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <FadeInUp className="container-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              What I Build
            </div>
            <h1
              className="font-black uppercase text-white leading-[0.92] mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              MY{" "}
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                SERVICES
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
            From scalable web applications and SaaS platforms to mobile apps, AI systems, enterprise integrations, and cloud infrastructure, I build the software your business needs from end to end. One engineer, one technical vision, and complete ownership from architecture through deployment.
            </p>
            <InquiryPopup
              trigger={
                <button
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ background: "#aaed2e" }}
                >
                  Discuss Your Project
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <path d="M1 7h12M8 2l5 5-5 5" />
                  </svg>
                </button>
              }
            />
          </FadeInUp>
        </section>

        {/* Services Grid */}
        <section className="bg-white w-full py-20 lg:py-28">
          <div className="container-xl">
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
              {services.map((service, i) => (
                <StaggerItem key={service.id}>
                  <ServiceDetailCard service={service} index={i} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Get a Quote CTA */}
        <section className="bg-[#f8f9fa] w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="rounded-2xl bg-[#0a0a0a] p-10 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, #aaed2e, transparent)" }} />
              <div className="relative z-10">
                <h2 className="font-black uppercase text-white leading-[0.92] mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
                  EVERY PROJECT IS UNIQUE
                </h2>
                <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
                  Tell me what you need and I&apos;ll create a custom plan tailored to your goals, timeline, and budget.
                </p>
                <InquiryPopup
                  trigger={
                    <button
                      className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95"
                      style={{ background: "#aaed2e" }}
                    >
                      Get a Custom Quote
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <path d="M1 7h12M8 2l5 5-5 5" />
                      </svg>
                    </button>
                  }
                />
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0a0a] w-full py-16 sm:py-20 text-center">
          <div className="container-xl">
            <h2
              className="font-black uppercase text-white leading-[0.92] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              NOT SURE WHAT YOU NEED?
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
              Book a free 30-minute consultation. We&apos;ll figure out exactly what your project needs.
            </p>
            <InquiryPopup
              trigger={
                <button
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ background: "#aaed2e" }}
                >
                  Free Consultation
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
