"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="project-card group rounded-2xl border-2 border-white/10 bg-white/5 overflow-hidden flex flex-col h-full hover:border-[#aaed2e]/50 hover:shadow-[0_8px_40px_-10px_rgba(170,237,46,0.1)] transition-all duration-500"
    >
      <div className="relative overflow-hidden" style={{ height: "clamp(210px, 28vw, 280px)" }}>
        <Image
          src={study.image}
          alt={study.title}
          fill
          unoptimized
          className="project-img object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/55 transition-all duration-400 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-bold tracking-wide flex items-center gap-2">
            View Case Study
            <svg viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
              <path d="M1 13L13 1M13 1H5M13 1v8" />
            </svg>
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-black tracking-widest" style={{ background: index === 0 ? "#aaed2e" : "rgba(255,255,255,0.1)", color: index === 0 ? "#0a0a0a" : "white" }}>
            {study.industry}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {study.techStack.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-md border border-white/10 text-[11px] font-semibold text-gray-300 bg-white/5">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-black text-base sm:text-lg text-white mb-2 leading-snug">
          {study.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5 flex-1 line-clamp-2">
          {study.challenge}
        </p>

        <div className="h-px bg-white/10 mb-4" />

        <div className="flex items-center justify-between text-sm font-bold text-white">
          <span>{study.client}</span>
          <div className="flex items-center gap-2">
            {study.link && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  window.open(study.link, "_blank", "noopener,noreferrer");
                }}
                className="text-[11px] font-bold uppercase tracking-wider text-[#0a0a0a] bg-[#aaed2e] px-3 py-1.5 rounded-full hover:bg-[#9ad428] transition-colors cursor-pointer"
              >
                Open Live
              </span>
            )}
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/15 group-hover:border-[#aaed2e] group-hover:bg-[#aaed2e] transition-all duration-300 group-hover:rotate-45">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 group-hover:stroke-[#0a0a0a]">
                <path d="M1 13L13 1M13 1H5M13 1v8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

const projects = caseStudies.slice(0, 5);

export default function ProjectsSection() {
  const [viewMode, setViewMode] = useState<"scroll" | "grid">("scroll");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el || isPausedRef.current) return;
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half - el.clientWidth - 5) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 1;
      }
    }, 25);
  }, [stopAutoScroll]);

  useEffect(() => {
    if (viewMode === "scroll") {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    return () => stopAutoScroll();
  }, [viewMode, startAutoScroll, stopAutoScroll]);

  const pause = useCallback(() => { isPausedRef.current = true; }, []);
  const resume = useCallback(() => { isPausedRef.current = false; }, []);

  return (
    <section id="projects" className="bg-[#0a0a0a] w-full py-20 lg:py-28 relative overflow-hidden">
      <style>{`
        .carousel-container {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          cursor: grab;
        }
        .carousel-container:active {
          cursor: grabbing;
        }
        .carousel-container::-webkit-scrollbar {
          display: none;
        }
        .carousel-track {
          display: flex;
          gap: 1.25rem;
          width: max-content;
        }
        .carousel-item {
          min-width: 320px;
          width: 75vw;
          max-width: 420px;
        }
        @media (max-width: 640px) {
          .carousel-item {
            min-width: 260px;
            width: 80vw;
            max-width: 340px;
          }
        }
        .carousel-gradient {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .carousel-gradient-left {
          left: 0;
          background: linear-gradient(to right, #0a0a0a, transparent);
        }
        .carousel-gradient-right {
          right: 0;
          background: linear-gradient(to left, #0a0a0a, transparent);
        }
        @media (max-width: 640px) {
          .carousel-gradient { width: 40px; }
        }
      `}</style>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container-xl relative z-10">
        <FadeInUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 border border-[#aaed2e]/30 text-xs font-bold text-[#aaed2e] uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              Client Projects
            </div>

            <h2 className="font-black uppercase text-white leading-[0.92]" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
              I&apos;VE
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                BUILT
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
              <br />
              <span className="text-white/70" style={{ fontSize: "clamp(1rem, 2.5vw, 1.75rem)" }}>FOR CLIENTS</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 pb-2">
            <div className="flex rounded-full border-2 border-white/15 overflow-hidden">
              <button
                onClick={() => setViewMode("scroll")}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  viewMode === "scroll"
                    ? "bg-[#aaed2e] text-[#0a0a0a]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Scroll
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-[#aaed2e] text-[#0a0a0a]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Grid
              </button>
            </div>
            <Link
              href="/portfolio"
              className="hidden lg:inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-bold text-sm border-2 border-white/15 text-white hover:border-[#aaed2e] hover:bg-[#aaed2e] hover:text-[#0a0a0a] transition-all duration-300"
            >
              View All Work
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 7h12M8 2l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </FadeInUp>

        {viewMode === "grid" ? (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {projects.map((study, index) => (
              <StaggerItem key={study.id}>
                <CaseStudyCard study={study} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="relative -mx-4 sm:-mx-6 lg:mx-0 py-6 -my-6">
            <div className="carousel-gradient carousel-gradient-left" />
            <div className="carousel-gradient carousel-gradient-right" />
            <div
              ref={scrollRef}
              className="carousel-container py-4 -my-4"
              onMouseEnter={pause}
              onMouseLeave={resume}
              onTouchStart={pause}
              onTouchEnd={resume}
            >
              <div className="carousel-track px-4 sm:px-6 lg:px-0 py-2">
                {[...projects, ...projects].map((study, i) => (
                  <div key={`${study.id}-${i}`} className="carousel-item flex-shrink-0">
                    <CaseStudyCard study={study} index={i % projects.length} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <FadeInUp delay={0.15} className="lg:hidden mt-10 flex justify-center flex-wrap gap-3">
          <div className="flex rounded-full border-2 border-white/15 overflow-hidden">
            <button
              onClick={() => setViewMode("scroll")}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                viewMode === "scroll"
                  ? "bg-[#aaed2e] text-[#0a0a0a]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Scroll
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-[#aaed2e] text-[#0a0a0a]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Grid
            </button>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm border-2 border-white/15 text-white hover:border-[#aaed2e] hover:bg-[#aaed2e] hover:text-[#0a0a0a] transition-all duration-300"
          >
            View All Work
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 7h12M8 2l5 5-5 5" />
            </svg>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
