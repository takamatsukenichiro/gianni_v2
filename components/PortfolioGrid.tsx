"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

const industries = ["All", "AI / Technology", "Finance", "Healthcare", "Education", "Retail","Real Estate", "Mobile"];

export default function PortfolioGrid({ studies }: { studies: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? studies
    : studies.filter((s) => s.industry === activeFilter);

  return (
    <section className="bg-white w-full py-20 lg:py-28">
      <div className="container-xl">
        {/* Filter tabs */}
        <FadeInUp className="flex flex-wrap items-center gap-2 mb-10">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActiveFilter(ind)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === ind
                  ? "text-[#0a0a0a]"
                  : "border-2 border-[#e8eaed] text-gray-500 hover:border-[#0a0a0a]/30"
              }`}
              style={activeFilter === ind ? { background: "#aaed2e" } : {}}
            >
              {ind}
            </button>
          ))}
        </FadeInUp>

        {/* Grid */}
        <StaggerContainer key={activeFilter} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {filtered.map((study) => (
            <StaggerItem key={study.id}>
              <Link
                href={`/portfolio/${study.slug}`}
                className="project-card group rounded-2xl border-2 border-[#e8eaed] bg-white overflow-hidden flex flex-col h-full"
              >
                <div className="relative overflow-hidden" style={{ height: "clamp(220px, 30vw, 300px)" }}>
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
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-black tracking-widest bg-[#aaed2e] text-[#0a0a0a]">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {study.techStack.slice(0, 5).map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-md border border-[#0a0a0a]/10 text-[11px] font-semibold text-[#0a0a0a] bg-[#f8f9fa]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-black text-base sm:text-lg text-[#0a0a0a] mb-2 leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-2">
                    {study.challenge}
                  </p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {study.results.slice(0, 2).map((r) => (
                      <div key={r.metric} className="px-3 py-2 rounded-lg bg-[#f8f9fa] border border-gray-100">
                        <span className="block font-black text-sm text-[#0a0a0a]">{r.value}</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">{r.metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-[#e8eaed] mb-4" />

                  <div className="flex items-center justify-between text-sm font-bold text-[#0a0a0a]">
                    {/* <span>{study.client}</span> */}
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
                      <div className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]/15 transition-all duration-300 group-hover:bg-[#0a0a0a] group-hover:border-[#0a0a0a] group-hover:text-white group-hover:rotate-45 text-[#0a0a0a]">
                        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          <path d="M1 13L13 1M13 1H5M13 1v8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
