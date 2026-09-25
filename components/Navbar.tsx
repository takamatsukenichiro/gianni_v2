"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import InquiryPopup from "./ui/InquiryPopup";
import { TextRoll } from "./ui/TextRoll";
import WhatsAppNavDropdown from "./WhatsAppNavDropdown";
import ShareDropdown from "./ShareDropdown";

const mobileNavItems = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Services",
    href: "/services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    label: "Work",
    href: "/portfolio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Blog",
    href: "/blog",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ═══ TOP NAVBAR — Desktop ═══ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 hidden md:block ${
          scrolled
            ? "py-3 bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container-xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Gianni Vilayhane — Home">
            <img
              src="/sm-logo.svg"
              alt="Gianni Vilayhane — BF Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <span className="font-extrabold text-white text-lg tracking-tight group-hover:text-gray-100 transition-colors">
              BRANDYN<span style={{ color: "#aaed2e" }} className="animate-pulse">.</span>
            </span>
          </Link>

          {/* Floating Glass Pill Navigation */}
          <div className="flex items-center bg-white/[0.04] border border-white/10 backdrop-blur-xl rounded-full px-2 py-1 shadow-inner shadow-white/5">
            <ul className="flex items-center gap-1">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/portfolio" },
                { label: "Process", href: "/process" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
              ].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    {link.href === "/" ? (
                      <button
                        onClick={() => scrollToSection("home")}
                        className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center ${
                          isActive
                            ? "bg-[#aaed2e] text-[#0a0a0a] shadow-lg shadow-[#aaed2e]/30 font-extrabold"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <TextRoll>{link.label}</TextRoll>
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center ${
                          isActive
                            ? "bg-[#aaed2e] text-[#0a0a0a] shadow-lg shadow-[#aaed2e]/30 font-extrabold"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <TextRoll>{link.label}</TextRoll>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Let's Talk & Action CTA Buttons */}
          <div className="flex items-center gap-2.5">
            <InquiryPopup
              trigger={
                <button
                  className="px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#0a0a0a] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(170,237,46,0.3)] hover:shadow-[0_0_30px_rgba(170,237,46,0.6)] flex-shrink-0 cursor-pointer"
                  style={{ background: "#aaed2e" }}
                >
                  Let&apos;s Talk
                </button>
              }
            />
            {/* <WhatsAppNavDropdown />
            <ShareDropdown /> */}
          </div>
        </div>
      </nav>

      {/* ═══ TOP NAVBAR — Mobile (logo & CTAs) ═══ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full md:hidden transition-all duration-300 ${scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-transparent"
          }`}
      >
        <div className="container-xl py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Gianni Vilayhane — Home">
            <img
              src="/sm-logo.svg"
              alt="Gianni Vilayhane — SM Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:rotate-6"
            />
            <span className="font-bold text-white text-lg tracking-tight">
              BRANDYN<span style={{ color: "#aaed2e" }}>.</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <InquiryPopup
              trigger={
                <button
                  className="px-4 py-2 rounded-full font-bold text-xs text-[#0a0a0a] transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: "#aaed2e" }}
                >
                  Let&apos;s Talk
                </button>
              }
            />
            {/* <WhatsAppNavDropdown />
            <ShareDropdown /> */}
          </div>
        </div>
      </nav>

      {/* ═══ BOTTOM NAV BAR — Mobile ═══ */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: "rgba(10, 10, 10, 0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <div className="flex items-center justify-around px-2 py-1">
          {mobileNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-0.5 py-2 px-3 rounded-xl transition-all duration-200 relative"
                style={{
                  minWidth: "52px",
                }}
              >
                {/* Active indicator */}
                {isActive && (
                  <div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-full"
                    style={{ background: "#aaed2e" }}
                  />
                )}

                <div
                  className="transition-colors duration-200"
                  style={{ color: isActive ? "#aaed2e" : "#666" }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-[10px] font-semibold transition-colors duration-200"
                  style={{ color: isActive ? "#aaed2e" : "#666" }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
