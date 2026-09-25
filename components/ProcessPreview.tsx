"use client";

import Link from "next/link";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand your goals, users, and requirements to define a clear roadmap.",
    items: ["Project brief", "Tech architecture", "Timeline plan"],
  },
  {
    num: "02",
    title: "Design",
    desc: "Create wireframes, prototypes, and polished UI that users love.",
    items: ["Wireframes", "Figma prototype", "Design system"],
  },
  {
    num: "03",
    title: "Develop",
    desc: "Build with clean, scalable code using agile sprints and regular demos.",
    items: ["Clean code", "Unit tests", "API docs"],
  },
  {
    num: "04",
    title: "Deploy",
    desc: "Ship with CI/CD, cloud setup, domain, SSL — zero downtime guaranteed.",
    items: ["Docker setup", "CI/CD pipeline", "Cloud infra"],
  },
  {
    num: "05",
    title: "Support",
    desc: "Ongoing monitoring, bug fixes, and feature updates post-launch.",
    items: ["Monitoring", "Bug fixes", "New features"],
  },
];

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <Link href="/process">
      <div className="group relative bg-white rounded-2xl border-2 border-[#e8eaed] p-4 sm:p-5 lg:p-6 min-h-[200px] sm:h-[260px] lg:h-[280px] flex flex-col overflow-hidden hover:border-[#aaed2e] hover:shadow-[0_8px_30px_-10px_rgba(170,237,46,0.15)] transition-all duration-500 cursor-pointer">
        {/* Big watermark number */}
        <div className="absolute -bottom-6 -right-3 text-[70px] sm:text-[90px] lg:text-[100px] font-black leading-none pointer-events-none select-none transition-colors duration-500" style={{ color: "#f0f0f0" }}>
          <span className="group-hover:text-[#aaed2e]/15 transition-colors duration-500">{step.num}</span>
        </div>

        {/* Icon */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-300 group-hover:scale-110 relative z-10" style={{ background: "#aaed2e", color: "#0a0a0a" }}>
          {icons[index]}
        </div>

        <h3 className="font-black text-sm text-[#0a0a0a] uppercase mb-1 relative z-10">{step.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed relative z-10 line-clamp-2 sm:line-clamp-none">{step.desc}</p>

        {/* Items — always visible on mobile (no hover), reveal on desktop hover */}
        <div className="mt-auto hidden sm:grid transition-all duration-500 ease-in-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr] opacity-0 group-hover:opacity-100 relative z-10">
          <div className="overflow-hidden">
            <div className="pt-3 mt-3 border-t border-[#e8eaed]">
              {step.items.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-[11px] text-gray-500 mb-1">
                  <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 flex-shrink-0"><polyline points="2 7 5.5 10.5 12 3.5" /></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: always-visible items */}
        <div className="mt-auto sm:hidden pt-2.5 mt-2.5 border-t border-[#e8eaed] relative z-10">
          <div className="flex flex-wrap gap-1.5">
            {step.items.map((item) => (
              <span key={item} className="inline-flex items-center gap-1 text-[10px] text-gray-500 bg-[#f8f9fa] px-2 py-0.5 rounded-full">
                <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2 h-2 flex-shrink-0"><polyline points="2 7 5.5 10.5 12 3.5" /></svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="w-6 h-6 rounded-full bg-[#aaed2e] flex items-center justify-center">
            <svg viewBox="0 0 14 14" fill="none" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5"><path d="M1 7h12M8 2l5 5-5 5" /></svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProcessPreview() {
  return (
    <section className="bg-white w-full py-20 lg:py-28">
      <div className="container-xl">
        <FadeInUp className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 border border-[#aaed2e]/40 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
            How I Work
          </div>
          <h2 className="font-black uppercase text-[#0a0a0a] leading-[0.92]" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
            MY PROVEN{" "}
            <span className="relative inline-block">
              PROCESS
              <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
            </span>
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-14">
          {steps.map((step, i) => (
            <StaggerItem key={step.num}>
              <StepCard step={step} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.15} className="flex justify-center">
          <Link href="/process" className="group inline-flex items-center gap-3 px-7 py-4 rounded-full border-2 border-[#0a0a0a]/15 text-sm font-bold text-[#0a0a0a] hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300">
            See My Full Process
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"><path d="M1 7h12M8 2l5 5-5 5" /></svg>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
