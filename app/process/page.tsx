import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { processSteps, faqs } from "@/data/process";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "My Proven 5-Step Development Process — Freelance Developer Gianni Vilayhane",
  description:
    "A proven 5-step development process from discovery to deployment. See how freelance full-stack developer Gianni Vilayhane delivers projects on time and beyond expectations using agile methodology. Transparent, structured, and efficient.",
  keywords: [
    "freelance development process",
    "software development methodology",
    "agile development process",
    "project delivery process",
    "freelancer work process",
    "development workflow",
    "client project process",
    "freelance project management",
    "how freelance developer works",
    "project delivery timeline",
    "software development lifecycle",
    "freelance project phases",
    "client collaboration process",
    "transparent development process",
    "freelance developer process Washington",
    "full-stack development workflow",
    "agile freelancer methodology",
  ],
  alternates: {
    canonical: "https://giannivilayhane.com/process",
    languages: {
      "en-IN": "https://giannivilayhane.com/process",
    },
  },
  openGraph: {
    title: "My Proven 5-Step Development Process | Gianni Vilayhane",
    description:
      "A proven 5-step process from discovery to deployment. See how I deliver freelance projects on time and beyond expectations.",
    url: "https://giannivilayhane.com/process",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "My Proven 5-Step Development Process — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Proven 5-Step Development Process | Gianni Vilayhane",
    description:
      "A proven 5-step process from discovery to deployment. See how I deliver freelance projects on time and beyond expectations.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};
const stepImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
];

function ProcessStepCard({ step, index, image }: { step: typeof processSteps[0]; index: number; image: string }) {
  const icons: Record<string, React.ReactNode> = {
    discover: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    design: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>,
    develop: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    deploy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    support: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  };

  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-center">
      {/* Image side */}
      <div className={isEven ? "" : "lg:order-2"}>
        <div className="relative rounded-2xl overflow-hidden group">
          <img src={image} alt={step.title} className="w-full h-56 sm:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center" style={{ background: "#aaed2e", color: "#0a0a0a" }}>
              {icons[step.iconType]}
            </div>
            <span className="text-3xl sm:text-4xl font-black text-white/20">{String(step.stepNumber).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className={isEven ? "" : "lg:order-1"}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-3 sm:mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
          Step {String(step.stepNumber).padStart(2, "0")}
        </div>
        <h3 className="font-black text-xl sm:text-2xl lg:text-3xl text-[#0a0a0a] uppercase mb-3 sm:mb-4 leading-tight">{step.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 sm:mb-6">{step.description}</p>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Deliverables</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {step.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 sm:gap-2.5 text-sm text-[#0a0a0a]">
                <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-0.5 flex-shrink-0">
                  <polyline points="2 7 5.5 10.5 12 3.5" />
                </svg>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ProcessPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Gianni Vilayhane Builds and Launches Custom Business Web & Mobile Software",
    "description": "A battle-tested 5-step engineering process: Discovery & Requirements, UI/UX Design & Prototype, Clean Architecture Development, Rigorous Testing & QA, and Zero-Downtime Deployment.",
    "totalTime": "P14D",
    "step": processSteps.map((step) => ({
      "@type": "HowToStep",
      "position": step.stepNumber,
      "name": step.title,
      "text": step.description,
      "url": "https://giannivilayhane.com/process"
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              How I Work
            </div>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-4 sm:mb-6" style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}>
              MY PROVEN
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                PROCESS
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-6 sm:mb-10">
              A structured 5-step approach that turns ideas into production-ready products. Transparent, efficient, and adapted to your unique needs.
            </p>

            {/* Step indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap">
              {processSteps.map((step, i) => (
                <div key={step.id} className="flex items-center gap-1.5 sm:gap-2.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-black" style={{ background: "#aaed2e", color: "#0a0a0a" }}>
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-400 hidden sm:inline">{step.title.split(" ")[0]}</span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-2 sm:w-6 h-px bg-white/15" />
                  )}
                </div>
              ))}
            </div>
          </FadeInUp>
        </section>

        {/* Steps */}
        <section className="bg-white w-full py-14 sm:py-20 lg:py-28">
          <div className="container-xl">
            <StaggerContainer className="space-y-14 sm:space-y-20 lg:space-y-28">
              {processSteps.map((step, i) => (
                <StaggerItem key={step.id}>
                  <ProcessStepCard step={step} index={i} image={stepImages[i]} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#0a0a0a] w-full py-12 sm:py-16">
          <div className="container-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "On-Time Delivery" },
                { value: "24h", label: "Response Time" },
                { value: "5\u2605", label: "Client Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1" style={{ color: "#aaed2e" }}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f8f9fa] w-full py-14 sm:py-20 lg:py-28">
          <div className="container-xl">
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/20 border border-[#aaed2e]/40 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                FAQ
              </div>
              <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.92]" style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)" }}>
                COMMON{" "}
                <span className="relative inline-block">
                  QUESTIONS
                  <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq) => (
                <details key={faq.id} className="group rounded-2xl border-2 border-[#e8eaed] bg-white overflow-hidden hover:border-[#aaed2e]/40 transition-colors duration-300">
                  <summary className="px-4 sm:px-6 py-4 sm:py-5 cursor-pointer font-bold text-xs sm:text-sm text-[#0a0a0a] flex items-center justify-between list-none gap-3 sm:gap-4">
                    <span>{faq.question}</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f4f5f7] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-open:bg-[#aaed2e] group-open:rotate-45">
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 sm:w-3 sm:h-3">
                        <path d="M7 1v12M1 7h12" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-[#e8eaed] pt-3 sm:pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0a0a] w-full py-14 sm:py-20 lg:py-28 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, #aaed2e, transparent)" }} />
          <div className="container-xl relative z-10">
            <FadeInUp>
              <h2 className="font-black uppercase text-white leading-[0.92] mb-4 sm:mb-6" style={{ fontSize: "clamp(1.75rem, 6vw, 3.5rem)" }}>
                READY TO START?
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed">
                Every great project starts with a conversation. Tell me about your idea and we&apos;ll map out the perfect roadmap together.
              </p>
              <InquiryPopup
                trigger={
                  <button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>
                    Let&apos;s Talk
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <path d="M1 7h12M8 2l5 5-5 5" />
                    </svg>
                  </button>
                }
              />
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
