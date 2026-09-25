"use client";

import Link from "next/link";
import { socialLinks } from "@/data/projects";
import { services } from "@/data/services";
import CrowdCanvas from "./CrowdCanvas";
import { TextRoll } from "./ui/TextRoll";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

const serviceLinks = [
  { label: "Websites", href: "/services/websites" },
  { label: "Web Applications", href: "/services/web-apps" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "Agentic AI Chatbots", href: "/services/agentic-ai-chatbots" },
  { label: "System Integration & Business Automation", href:  "/services/integration-automation" },
  { label: "DevOps & Cloud", href: "/services/devops-cloud" },
  { label: "SEO & GEO", href: "/services/seo-optimization" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] text-white border-t border-white/10 flex flex-col">
      {/* 1. Main Footer Info Section */}
      <div className="container-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* ═══ MOBILE LAYOUT (< md) — Minimal, Clean & 2-Col Side-by-Side ═══ */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Brand header & tagline */}
          <div className="flex flex-col items-start gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-decoration-none group"
              aria-label="Gianni Vilayhane — Home"
            >
              <img
                src="/sm-logo.svg"
                alt="Gianni Vilayhane — FB Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <span className="font-bold text-white text-lg tracking-tight">
                BRANDYN<span className="text-[#aaed2e]">.</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Full-stack developer delivering custom websites, web apps, mobile apps, and agentic AI solutions.
            </p>
            {/* Social media icons */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.id}
                  className="w-7 h-7 rounded-full border border-white/15 bg-white/5 hover:bg-[#aaed2e] hover:border-[#aaed2e] hover:text-black flex items-center justify-center text-gray-400 transition-all duration-200"
                >
                  {socialIcons[s.id]}
                </a>
              ))}
            </div>
          </div>

          {/* 2-COLUMN SIDE-BY-SIDE: Navigation (Left) & Services (Right) */}
          <div className="grid grid-cols-2 gap-4 pt-5 pb-5 border-t border-b border-white/10">
            {/* LEFT — Navigation */}
            <div>
              <h4 className="text-[11px] font-extrabold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                Navigation
              </h4>
              <ul className="space-y-2 p-0 m-0 list-none">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-[#aaed2e] transition-colors duration-200 block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — Services */}
            <div>
              <h4 className="text-[11px] font-extrabold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                Services
              </h4>
              <ul className="space-y-2 p-0 m-0 list-none">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-xs text-gray-400 hover:text-[#aaed2e] transition-colors duration-200 block py-0.5 truncate"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct Contact & Availability Info on Mobile */}
          <div className="flex flex-col gap-2 pt-1 text-xs text-gray-400">
            <a
              href="mailto:gianni@giannivilayhane.com"
              className="text-xs text-gray-300 hover:text-[#aaed2e] transition-colors duration-200 flex items-center gap-2 truncate"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#aaed2e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 shrink-0"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              <span className="truncate">gianni@giannivilayhane.com</span>
            </a>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="#aaed2e" strokeWidth="2" className="w-3 h-3 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Washington, US
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#aaed2e]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e] animate-pulse" />
                Available for hire
              </span>
            </div>
          </div>
        </div>

        {/* ═══ DESKTOP LAYOUT (>= md) — 4 Column Spacious Grid ═══ */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-4 text-decoration-none group"
              aria-label="Gianni Vilayhane — Home"
            >
              <img
                src="/sm-logo.svg"
                alt="Gianni Vilayhane — BF Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <span className="font-bold text-white text-xl tracking-tight">
                BRANDYN<span className="text-[#aaed2e]">.</span>
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
            Freelance full-stack software engineer Gianni Vilayhane delivers end-to-end digital solutions across web applications, AI platforms, enterprise integrations, APIs, automation, and cloud infrastructure. Hire me to build, connect, and scale your next software product.
            </p>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.id}
                  className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-[#aaed2e] hover:border-[#aaed2e] hover:text-black flex items-center justify-center text-gray-400 transition-all duration-200"
                >
                  {socialIcons[s.id]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 p-0 m-0 list-none">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#aaed2e] transition-colors duration-200 block"
                  >
                    <TextRoll>{link.label}</TextRoll>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 p-0 m-0 list-none">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-[#aaed2e] transition-colors duration-200 block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3.5 p-0 m-0 list-none">
              <li>
                <a
                  href="mailto:gianni@giannivilayhane.com"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#aaed2e] transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#aaed2e"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 shrink-0"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                  <span>gianni@giannivilayhane.com</span>
                </a>
              </li>

              <li>
                <span className="text-sm text-gray-400 flex items-center gap-2.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#aaed2e"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Washington, US
                </span>
              </li>

              <li className="pt-1">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#aaed2e]">
                  <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
                  Available for new projects
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Dedicated White Crowd Canvas Section (Mobile responsive height)
      <div className="relative w-full h-[90px] sm:h-[180px] md:h-[240px] lg:h-[280px] bg-white border-t border-white/10 overflow-hidden">
        <CrowdCanvas
          src="/images/peeps/all-peeps.png"
          rows={15}
          cols={7}
          className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-95"
        />
      </div> */}

      {/* 3. Copyright Bar (Black Area — with extra mobile bottom padding for mobile navbar clearance) */}
      <div className="border-t border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="container-xl px-4 sm:px-6 lg:px-8 pt-5 pb-24 md:pb-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-gray-400 m-0">
            &copy; {currentYear}&nbsp;&nbsp;Gianni Vilayhane &mdash; All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/about"
              className="text-xs text-gray-400 hover:text-[#aaed2e] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-gray-400 hover:text-[#aaed2e] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
