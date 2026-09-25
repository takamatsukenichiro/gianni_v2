"use client";

import Link from "next/link";
import { socialLinks } from "@/data/projects";
import InquiryPopup from "./ui/InquiryPopup";
import { motion } from "framer-motion";
import Typewriter from "./ui/Typewriter";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

export default function HeroSection() {
  return (
    <>
      {/* ══════════════════════════════════════
          BLACK HERO — Video pinned on desktop, centered & aligned on mobile
      ══════════════════════════════════════ */}
      <section
        id="home"
        className="relative bg-[#0a0a0a] w-full overflow-hidden flex flex-col justify-between"
        style={{ minHeight: "min(88vh, 820px)" }}
      >
        {/* Dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative h-full flex flex-col lg:flex-row flex-1">
          <div className="container-xl flex flex-col lg:flex-row items-center w-full flex-1 gap-6 lg:gap-12">
            {/* LEFT — text (Centered on mobile, left on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex-1 flex flex-col justify-center items-center lg:items-start pt-20 pb-4 sm:pt-28 sm:pb-8 lg:pt-24 lg:pb-8 w-full text-center lg:text-left"
            >
              {/* Status badge */}
              <div className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-xs text-gray-300 mb-4 sm:mb-6 font-medium bg-white/[0.04] backdrop-blur-sm max-w-full truncate">
                <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse flex-shrink-0" />
                <span className="truncate">Gianni Vilayhane — Full-Stack Developer</span>
              </div>

              {/* Headline (Centered on mobile) */}
              <h1
                className="font-black text-white leading-[0.95] sm:leading-[0.9] mb-4 sm:mb-6 uppercase tracking-tight text-center lg:text-left"
                style={{ fontSize: "clamp(2.1rem, 7vw, 5.6rem)" }}
              >
                BUILD SOFTWARE
                <br />
                <span className="inline-flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2" style={{ color: "#aaed2e" }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="#aaed2e"
                    className="inline-block flex-shrink-0"
                    style={{ width: "clamp(1.5rem, 5vw, 4rem)", height: "clamp(1.5rem, 5vw, 4rem)" }}
                    aria-hidden="true"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  AI SYSTEMS
                </span>
                <br />
                GROW YOUR BUSINESS
              </h1>

              {/* Typewriter Subtitle (Centered on mobile) */}
              <div className="min-h-[3.2rem] sm:min-h-[3.25rem] mb-6 sm:mb-8 flex items-start justify-center lg:justify-start overflow-hidden w-full">
                <p className="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed max-w-[460px] text-center lg:text-left mx-auto lg:mx-0 h-full">
                  <Typewriter
                    strings={[
                        "Scalable web applications, AI platforms & enterprise integrations built for growth.",
                        "Full-stack engineering with React, Next.js, TypeScript, Python, FastAPI, Node.js & Laravel.",
                        "Connecting complex systems through APIs, automation, cloud infrastructure & intelligent workflows.",
                    ]}
                    typingSpeed={45}
                    deletingSpeed={25}
                    pauseDuration={2800}
                  />
                </p>
              </div>

              {/* CTA Buttons — Both side-by-side in the SAME line on Mobile */}
              <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full flex-nowrap">
                <InquiryPopup
                  trigger={
                    <button
                      className="group inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full font-bold text-[#0a0a0a] text-xs sm:text-sm transition-all duration-200 hover:scale-105 active:scale-95 animate-pulse-glow shadow-lg shadow-[#aaed2e]/20 whitespace-nowrap flex-shrink-0"
                      style={{ background: "#aaed2e" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0a0a0a"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Start Your Project
                    </button>
                  }
                />

                <Link
                  href="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 pl-1.5 pr-3.5 sm:pl-2 sm:pr-5 py-1.5 sm:py-2 rounded-full font-semibold text-white text-xs sm:text-sm border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0"
                >
                  <span className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white/30 bg-white/10 flex-shrink-0 transition-transform duration-300 group-hover:rotate-45">
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                    >
                      <path d="M7 1h6v6M1 13L13 1" />
                    </svg>
                  </span>
                  View My Work
                </Link>
              </div>
            </motion.div>

            {/* RIGHT — Desktop Video player card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:flex flex-shrink-0 items-center justify-center"
              style={{ width: "clamp(360px, 42vw, 550px)" }}
            >
              <div
                className="relative rounded-[2rem] overflow-hidden w-full border border-white/15 shadow-2xl group"
                style={{
                  background: "#111111",
                  height: "clamp(520px, 76vh, 720px)",
                }}
              >
                <video
                  src="/hero/herovid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />

                {/* Subtle gradient overlay at top & bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

                {/* Floating info card at bottom */}
                <div className="absolute bottom-6 left-5 right-5 z-20">
                  <div className="bg-[#0a0a0a]/85 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#aaed2e" }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold">Engineering Solutions in Action</p>
                        <p className="text-gray-400 text-[10px]">Full-Stack · Mobile · DevOps · Cloud</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MOBILE VIDEO DISPLAY — Elevated, God-tier Height & Polish
        ══════════════════════════════════════ */}
        <div
          id="hero-mobile-video"
          data-mobile-video="true"
          className="lg:hidden w-full px-4 pt-3 pb-6 flex justify-center"
        >
          <div
            className="relative w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/20 bg-[#111111] shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(170,237,46,0.08)] select-none group"
            style={{
              maxWidth: "500px",
              height: "clamp(300px, 48vh, 440px)",
            }}
          >
            <video
              src="/hero/herovid.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
            {/* Top & Bottom gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />



            {/* Top-Left Category Badge */}
            <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/15 text-[10px] font-medium text-gray-300 shadow-md">
              <svg viewBox="0 0 24 24" fill="none" stroke="#aaed2e" strokeWidth="2.5" className="w-3 h-3 flex-shrink-0">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>Featured Work</span>
            </div>

            {/* Bottom Floating Info Card */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20">
              <div className="bg-[#0a0a0a]/90 backdrop-blur-xl rounded-xl px-3.5 py-2.5 flex items-center justify-between border border-white/15 shadow-xl">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(170,237,46,0.3)]"
                    style={{ background: "#aaed2e" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold tracking-tight">Engineering Solutions in Action</p>
                    <p className="text-gray-400 text-[10px] font-medium">Full-Stack · Mobile · DevOps · Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHITE AREA — Follow Me
      ══════════════════════════════════════ */}
      <section className="bg-white w-full py-4 sm:py-6 border-b border-gray-100/80">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-xs sm:text-sm font-bold text-[#0a0a0a] whitespace-nowrap uppercase tracking-wider">
                Follow Me:
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#0a0a0a]/20 sm:border-2 sm:border-[#0a0a0a] flex items-center justify-center text-[#0a0a0a] bg-gray-50/50 sm:bg-transparent transition-all duration-200 hover:bg-[#0a0a0a] hover:text-white hover:scale-110 active:scale-95"
                    aria-label={s.label || s.id}
                  >
                    {socialIcons[s.id]}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-xs text-gray-400 font-medium">
              <span>Available for Freelance & Contract</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
