"use client";

import { useState } from "react";
import { faqs } from "@/data/process";
import { FadeInUp } from "@/components/ui/MotionWrappers";

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#aaed2e] bg-white/5 shadow-[0_4px_30px_-5px_rgba(170,237,46,0.15)]"
          : "border-white/10 bg-white/5 hover:border-white/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
      >
        <div className="flex items-center gap-3.5">
          <span className="text-xs font-black text-[#aaed2e] font-mono tracking-widest flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-bold text-sm sm:text-base text-white leading-snug">{faq.question}</span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? "bg-[#aaed2e] rotate-45 text-[#0a0a0a]" : "bg-white/10 text-gray-400"
        }`}>
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M7 1v12M1 7h12" />
          </svg>
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-5 pl-[3.25rem] text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-4">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5, 10);

  // Mobile list: first 5 initially, or all if expanded
  const mobileFaqs = showAllMobile ? faqs : faqs.slice(0, 5);

  return (
    <section className="bg-[#0a0a0a] w-full py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#aaed2e]/15 border border-[#aaed2e]/30 text-xs font-bold text-[#aaed2e] uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-black uppercase text-white leading-[0.92]" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            COMMON{" "}
            <span className="relative inline-block" style={{ color: "#aaed2e" }}>
              QUESTIONS
              <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full" style={{ background: "#aaed2e" }} />
            </span>
          </h2>
        </FadeInUp>

        {/* ── DESKTOP GRID (5 Left / 5 Right) ── */}
        <div className="hidden lg:grid grid-cols-2 gap-6 items-start">
          {/* Left Column (01-05) */}
          <div className="space-y-4">
            {leftFaqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>

          {/* Right Column (06-10) */}
          <div className="space-y-4">
            {rightFaqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i + 5} />
            ))}
          </div>
        </div>

        {/* ── MOBILE / TABLET LAYOUT (5 initially -> Smooth Expand) ── */}
        <div className="lg:hidden space-y-4">
          {mobileFaqs.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} index={i} />
          ))}

          {/* Smooth Show More / Show Less Button for Mobile */}
          <div className="text-center pt-4">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#0a0a0a] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              style={{ background: "#aaed2e" }}
            >
              <span>{showAllMobile ? "Show Less Questions" : "Show More Questions"}</span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3.5 h-3.5 transition-transform duration-300 ${showAllMobile ? "rotate-180" : ""}`}
              >
                <polyline points="4 6 8 10 12 6" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
