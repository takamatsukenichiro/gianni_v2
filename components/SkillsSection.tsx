import Link from "next/link";
import { services } from "@/data/services";
import type { Service } from "@/types";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

function ServiceIcon({ type }: { type: Service["iconType"] }) {
  const base = {
    viewBox: "0 0 48 48",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: 38,
    height: 38,
  };

  const map: Record<Service["iconType"], React.ReactNode> = {
    website: (
      <svg {...base}>
        <rect x="4" y="6" width="40" height="30" rx="4" />
        <line x1="4" y1="16" x2="44" y2="16" />
        <circle cx="11" cy="11" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="17" cy="11" r="1.5" fill="currentColor" stroke="none" />
        <line x1="18" y1="26" x2="30" y2="26" strokeWidth="1.3" />
        <line x1="18" y1="30" x2="26" y2="30" strokeWidth="1.3" />
        <line x1="20" y1="36" x2="28" y2="36" />
        <line x1="24" y1="36" x2="24" y2="42" />
      </svg>
    ),
    webapp: (
      <svg {...base}>
        <rect x="4" y="8" width="40" height="32" rx="5" />
        <line x1="4" y1="19" x2="44" y2="19" />
        <circle cx="11" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="17" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
        <polyline points="13,28 20,32 13,36" />
        <line x1="24" y1="36" x2="36" y2="36" />
      </svg>
    ),
    mobile: (
      <svg {...base}>
        <rect x="14" y="4" width="20" height="40" rx="4" />
        <line x1="14" y1="10" x2="34" y2="10" />
        <line x1="14" y1="38" x2="34" y2="38" />
        <circle cx="24" cy="42" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    desktop: (
      <svg {...base}>
        <rect x="4" y="6" width="40" height="28" rx="4" />
        <line x1="18" y1="34" x2="30" y2="34" />
        <line x1="24" y1="34" x2="24" y2="40" />
        <line x1="18" y1="40" x2="30" y2="40" />
        <line x1="20" y1="20" x2="28" y2="20" strokeWidth="1.2" />
        <line x1="20" y1="24" x2="25" y2="24" strokeWidth="1.2" />
      </svg>
    ),
    uiux: (
      <svg {...base}>
        <rect x="4" y="8" width="40" height="32" rx="5" />
        <line x1="4" y1="19" x2="44" y2="19" />
        <circle cx="11" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="17" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
        <polyline points="18,28 12,32 18,36" />
        <polyline points="30,28 36,32 30,36" />
      </svg>
    ),
    security: (
      <svg {...base}>
        <path d="M24 4L8 12v10c0 11 16 18 16 18s16-7 16-18V12L24 4z" />
        <polyline points="18 24 22 28 30 20" strokeWidth="2.2" />
      </svg>
    ),
    seo: (
      <svg {...base}>
        <circle cx="20" cy="20" r="14" />
        <line x1="30" y1="30" x2="42" y2="42" strokeWidth="2.2" />
        <polyline points="12 24 16 20 22 23 28 15" strokeWidth="2" />
      </svg>
    ),
    marketing: (
      <svg {...base}>
        <path d="M6 36l10-14 8 8 18-20" strokeWidth="2.2" />
        <polyline points="30 10 42 10 42 22" strokeWidth="2.2" />
        <line x1="4" y1="42" x2="44" y2="42" />
      </svg>
    ),
    chatbot: (
      <svg {...base}>
        <rect x="8" y="12" width="32" height="24" rx="6" />
        <circle cx="18" cy="22" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="30" cy="22" r="2.5" fill="currentColor" stroke="none" />
        <path d="M18 29c2 2 6 2 8 0" strokeWidth="2" />
        <line x1="24" y1="4" x2="24" y2="12" />
        <circle cx="24" cy="4" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    integration:(
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="6" height="6" rx="1.5" />
        <rect x="15" y="14" width="6" height="6" rx="1.5" />
        <rect x="15" y="4" width="6" height="6" rx="1.5" />
        <path d="M9 7h6" /><path d="M18 10v4" />
        <path d="M6 10v3a3 3 0 0 0 3 3h6" /></svg>
    )
  };

  return <>{map[type]}</>;
}

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

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const href = serviceLinks[service.id] || "/services";

  return (
    <Link href={href} className="block h-full">
      <div
        className="group relative rounded-[1.5rem] p-6 sm:p-7 border border-white/10 bg-[#111111] flex flex-col justify-between cursor-pointer overflow-hidden h-full transition-all duration-300 hover:border-[#aaed2e]/60 hover:shadow-[0_12px_40px_rgba(170,237,46,0.15)] transform hover:-translate-y-1.5"
      >
        {/* Index number badge */}
        <span className="absolute top-5 right-5 text-xs font-mono font-bold tracking-widest text-white/20 transition-colors duration-300 group-hover:text-[#aaed2e]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          {/* Icon box */}
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 bg-white/5 border border-white/10 text-[#aaed2e] group-hover:bg-[#aaed2e] group-hover:text-[#0a0a0a] group-hover:border-[#aaed2e] group-hover:scale-105 shadow-md">
            <ServiceIcon type={service.iconType} />
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg sm:text-xl text-white mb-2 leading-snug transition-colors duration-300 group-hover:text-[#aaed2e]">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm leading-relaxed text-gray-400 mb-5">
            {service.shortDescription}
          </p>

          {/* Tech tags preview */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {service.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/5 border border-white/10 text-gray-300 group-hover:border-[#aaed2e]/30 group-hover:text-white transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Link Indicator */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-gray-300 group-hover:text-[#aaed2e] transition-colors duration-300">
          <span>Explore Solution</span>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M1 7h12M8 2l5 5-5 5" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0a0a0a] w-full py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Dot-grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-xl relative z-10">
        <FadeInUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
              What I Build
            </div>

            <h2
              className="font-black uppercase leading-[0.92] text-white"
              style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)" }}
            >
              EVERYTHING YOU NEED,
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                FROM ONE DEVELOPER
                <span
                  className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full"
                  style={{ background: "#aaed2e" }}
                />
              </span>
            </h2>
          </div>

          <Link
            href="/services"
            className="hidden lg:inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            style={{ background: "#aaed2e" }}
          >
            View All Services
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 7h12M8 2l5 5-5 5" />
            </svg>
          </Link>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services
          .filter((_, i) => i !== 4)
          .map((service, i) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeInUp delay={0.15} className="lg:hidden mt-10 flex justify-center">
          <Link
            href="/services"
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            style={{ background: "#aaed2e" }}
          >
            View All Services
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 7h12M8 2l5 5-5 5" />
            </svg>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

