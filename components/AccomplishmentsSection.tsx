import { accomplishments as stats } from "@/data/projects";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

/* ── Stat card ── */
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-sm hover:border-[#aaed2e]/40 hover:bg-white/[0.06] transition-all duration-300 group h-full">
      <span
        className="font-black text-white leading-none mb-2 transition-colors duration-300 group-hover:text-[#aaed2e]"
        style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
      >
        {value}
      </span>
      <span className="text-xs sm:text-sm text-gray-500 font-medium text-center uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

/* ── Accomplishment items ── */
const items = [
  {
    id: "a1",
    accent: "#aaed2e",
    tag: "Client Delivery",
    title: "From Idea to Live Product — End to End",
    text: "Built and shipped production-ready platforms like Eden, a multi-modal generative AI platform for autonomous agents and image, video, and audio workflows, and Keepcoming, a multi-tenant loyalty platform with live Apple Wallet and Google Wallet integration, taking projects from architecture and development through deployment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: "a2",
    accent: "#7b5adb",
    tag: "Full-Stack Range",
    title: "40+ Technologies, One Trusted Developer",
    text: "React, Next.js, Node.js, Python, FastAPI, Laravel, Spring Boot, PostgreSQL, Docker, AWS, and GCP, I choose the right technologies for each project. From frontend experiences and backend APIs to authentication, integrations, cloud infrastructure, and deployment, I work across the full stack.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "a3",
    accent: "#f59e0b",
    tag: "Real Impact",
    title: "APIs & Integrations Powering Business Workflows",
    text: "Design and build production APIs that connect applications, business systems, and third-party platforms. From REST APIs and webhooks to OAuth, data synchronization, middleware, and event-driven workflows, I build integrations that automate real business processes and keep critical systems connected.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];


export default function AccomplishmentsSection() {
  return (
    <section id="accomplishments" className="bg-[#0a0a0a] w-full py-20 lg:py-28 relative overflow-hidden">

      {/* Subtle radial glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, rgba(170,237,46,0.07), transparent 70%)" }}
      />

      <div className="container-xl relative z-10">

        {/* ── Header ── */}
        <FadeInUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 sm:mb-16">
          <div>
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              Achievements
            </div>

            <h2
              className="font-black uppercase text-white leading-[0.92]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)" }}
            >
              I TAKE PRIDE IN
              <br />
              MY{" "}
              <span className="relative inline-block">
                ACCOMPLISHMENTS
                <span
                  className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full"
                  style={{ background: "#aaed2e" }}
                />
              </span>
            </h2>
          </div>

          <p className="text-sm text-gray-400 font-medium lg:text-right lg:max-w-xs leading-relaxed lg:pb-2">
            Key milestones and measurable outcomes from my engineering career.
          </p>
        </FadeInUp>

        {/* ── Stats grid ── */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {stats.map((s) => (
            <StaggerItem key={s.id}>
              <StatCard value={s.value} label={s.label} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Divider ── */}
        <div className="h-px w-full bg-white/10 mb-14" />

        {/* ── Accomplishment cards ── */}
        <StaggerContainer className="flex flex-col gap-5">
          {items.map((item, i) => (
            <StaggerItem key={item.id}>
              <div
                className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-7 p-6 sm:p-8 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300"
              >
                {/* Left: index + accent bar */}
                <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: item.accent + "18", color: item.accent, border: `1.5px solid ${item.accent}30` }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="text-xs font-black tracking-widest"
                    style={{ color: item.accent + "70" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  {/* Tag */}
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] mb-2 px-2 py-0.5 rounded"
                    style={{ color: item.accent, background: item.accent + "18" }}
                  >
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-black text-white text-lg sm:text-xl leading-snug mb-2 transition-colors duration-300"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Right arrow */}
                <div
                  className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-white/10 flex-shrink-0 self-center transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/5"
                >
                  <svg viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <path d="M1 13L13 1M13 1H5M13 1v8" />
                  </svg>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
