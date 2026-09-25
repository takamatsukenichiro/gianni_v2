"use client";

import { useState } from "react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

const testimonials = [
  {
    id: "retailpulse",
    quote:
      "Gianni built our custom retail web application with Next.js and PostgreSQL from scratch. The checkout is blazingly fast, and our online customer orders grew by 180% within two months of launch.",
    author: "Aarav Sengupta",
    title: "Founder & CEO, RetailPulse",
    location: "Washington, US",
    initials: "AS",
    rating: 5,
    service: "E-Commerce & Web App",
    impact: "+180% Order Growth",
  },
  {
    id: "healthtech",
    quote:
      "Gianni developed both our web dashboard and cross-platform React Native mobile app ahead of schedule. The application handles high daily user traffic effortlessly with rock-solid security.",
    author: "Priya Sharma",
    title: "Founder & MD, HealthTech US",
    location: "Bengaluru, India",
    initials: "PS",
    rating: 5,
    service: "Mobile App & Web Portal",
    impact: "99.9% System Uptime",
  },
  {
    id: "finpay",
    quote:
      "Gianni optimized our Spring Boot microservices backend and PostgreSQL database queries, boosting performance by over 40%. His technical depth and engineering standards are exceptional.",
    author: "Anirban Roy",
    title: "Head of Engineering, FinPay Digital",
    location: "Washington, US",
    initials: "AR",
    rating: 5,
    service: "Backend & Cloud DevOps",
    impact: "40% Faster Query Speed",
  },
  {
    id: "edtech",
    quote:
      "Our website search rankings jumped to Page #1 on Google, and we started appearing in ChatGPT Search and Perplexity AI recommendations. Gianni's SEO & GEO strategies doubled our organic leads.",
    author: "Sneha Chatterjee",
    title: "Co-Founder, EdTech Horizon",
    location: "Delhi NCR, India",
    initials: "SC",
    rating: 5,
    service: "SEO & GEO Optimization",
    impact: "Page #1 Google Rank",
  },
  {
    id: "logimove",
    quote:
      "Gianni built an autonomous AI support agent that handles customer tracking queries 24/7 on WhatsApp and Web. It resolved 75% of support tickets automatically without human intervention.",
    author: "Vikramaditya Roy",
    title: "Director of Operations, LogiMove",
    location: "Mumbai, India",
    initials: "VR",
    rating: 5,
    service: "Agentic AI Chatbot",
    impact: "75% Auto Resolution",
  },
  {
    id: "brandnexus",
    quote:
      "Our Google Ads and Meta paid campaigns were losing money until Gianni restructured our conversion funnels and landing pages. Our customer acquisition cost dropped by 35% in 30 days.",
    author: "Rohan Malhotra",
    title: "Marketing Director, BrandNexus",
    location: "Remote / USA",
    initials: "RM",
    rating: 5,
    service: "Digital Marketing & CRO",
    impact: "-35% Acquisition Cost",
  },
];

/* ── Star rating ── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="w-4 h-4" fill="#eab308" aria-hidden="true">
          <path d="M8 1l1.854 4.146L14 5.618l-3 2.927.708 4.13L8 10.5l-3.708 2.175L5 8.545 2 5.618l4.146-.472z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  // Duplicate list for infinite continuous scrolling
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-white w-full py-16 sm:py-24 lg:py-28 border-t border-b border-gray-100 overflow-hidden">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
          will-change: transform;
        }
        .animate-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container-xl">
        {/* ── Header ── */}
        <FadeInUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-bold text-[#0a0a0a] uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse flex-shrink-0" />
              CLIENT REVIEWS &amp; RESULTS
            </div>
            
            <h2
              className="font-black uppercase text-[#0a0a0a] leading-[0.92]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)" }}
            >
              DON&apos;T JUST TAKE
              <br />
              MY{" "}
              <span className="relative inline-block" style={{ color: "#0a0a0a" }}>
                WORD FOR IT.
                <span
                  className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full"
                  style={{ background: "#aaed2e" }}
                />
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-xl">
              Authentic feedback and measurable outcomes from founders, CTOs, and growth leaders who partnered with me to build their software products.
            </p>
          </div>

          {/* Key Metrics Trust Badges */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
            <div className="text-left">
              <p className="text-xl sm:text-2xl font-black text-[#0a0a0a]">100%</p>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Job Success</p>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block" />
            <div className="text-left">
              <p className="text-xl sm:text-2xl font-black text-[#0a0a0a]">5.0 ★</p>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Client Rating</p>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block" />
            <div className="text-left">
              <p className="text-xl sm:text-2xl font-black text-[#0a0a0a]">20+</p>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Projects Shipped</p>
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* ── Continuous Scrolling Marquee Track ── */}
      <div className="w-full overflow-hidden py-4 -my-4 relative">
        {/* Left & Right gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-track px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[290px] sm:w-[360px] lg:w-[400px] flex-shrink-0 bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-[#aaed2e] hover:scale-105 transition-all duration-300 group relative overflow-hidden select-none cursor-pointer z-10"
            >
              {/* Accent top border highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#aaed2e] transition-colors duration-300" />

              <div>
                {/* Top bar: Stars & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <Stars count={item.rating} />
                  <span className="text-[11px] font-mono font-bold text-gray-400">
                    {item.service}
                  </span>
                </div>

                {/* Impact Metric Pill */}
                <div className="inline-block mb-4 px-3 py-1 rounded-md bg-[#0a0a0a] text-[#aaed2e] text-xs font-bold font-mono">
                  Impact: {item.impact}
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                {/* Initials Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-black text-xs flex-shrink-0 group-hover:bg-[#aaed2e] group-hover:text-[#0a0a0a] transition-colors duration-300">
                  {item.initials}
                </div>

                {/* Name & Details */}
                <div className="overflow-hidden">
                  <p className="font-bold text-xs sm:text-sm text-[#0a0a0a] truncate">{item.author}</p>
                  <p className="text-[11px] text-gray-500 truncate">{item.title}</p>
                  <p className="text-[10px] text-gray-400 font-medium">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

