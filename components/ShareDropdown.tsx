"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ShareDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [qrLoaded, setQrLoaded] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileModalRef = useRef<HTMLDivElement>(null);

  const shareTitle = "Gianni Vilayhane — Senior Freelance Full-Stack Developer & SaaS Architect";
  const shareText = "Explore high-concurrency web apps, mobile apps, SaaS platforms, and cloud DevOps solutions by Gianni Vilayhane.";
  const shareUrl = "https://giannivilayhane.com";

  // Pre-generate QR Code image for the portfolio URL
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
    shareUrl
  )}&color=0a0a0a&bgcolor=ffffff&margin=8`;

  useEffect(() => {
    setIsMounted(true);
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanNativeShare(true);
    }
    const img = new Image();
    img.src = qrImageUrl;
    img.onload = () => setQrLoaded(true);
  }, [qrImageUrl]);

  // Click outside to close (desktop dropdown only; mobile backdrop handles mobile close)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      // If clicking inside trigger container or mobile modal, DO NOT close!
      if (
        (containerRef.current && containerRef.current.contains(target)) ||
        (mobileModalRef.current && mobileModalRef.current.contains(target))
      ) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Lock body scroll when modal is open on mobile
  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else if (typeof window !== "undefined") {
      document.body.style.overflow = "unset";
    }
    return () => {
      if (typeof window !== "undefined") document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyLink = async () => {
    try {
      const urlToCopy = typeof window !== "undefined" ? window.location.href : shareUrl;
      await navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: typeof window !== "undefined" ? window.location.href : shareUrl,
        });
        setIsOpen(false);
      } catch {
        // User cancelled share or dismissed
      }
    }
  };

  const shareLinks = [
    {
      name: "Email",
      url: `mailto:?subject=${encodeURIComponent(
        `Recommendation: ${shareTitle}`
      )}&body=${encodeURIComponent(
        `Hi,\n\nI wanted to share Gianni Vilayhane's portfolio with you:\n\n${shareText}\n\nPortfolio Link: ${shareUrl}\n\nBest regards.`
      )}`,
      color: "#aaed2e",
      bgHover: "hover:bg-[#aaed2e]/15 hover:border-[#aaed2e]/40",
      textColor: "text-[#aaed2e]",
      icon: (
        <svg className="w-4.5 h-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${shareTitle}\n\n${shareText}\n\n${shareUrl}`
      )}`,
      color: "#25D366",
      bgHover: "hover:bg-[#25D366]/15 hover:border-[#25D366]/40",
      textColor: "text-[#25D366]",
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.594-1.049 3.834 3.793-.996.999.635zm11.233-5.765c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      color: "#0A66C2",
      bgHover: "hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40",
      textColor: "text-[#0A66C2]",
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
      color: "#24A1DE",
      bgHover: "hover:bg-[#24A1DE]/15 hover:border-[#24A1DE]/40",
      textColor: "text-[#24A1DE]",
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      {/* ── Share Trigger Button ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Share Website"
        title="Share Gianni Vilayhane's Portfolio"
        className={`relative w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer group shadow-md ${
          isOpen
            ? "bg-[#aaed2e] text-[#0a0a0a] shadow-[0_0_20px_rgba(170,237,46,0.7)] scale-105"
            : "bg-white/[0.06] border border-white/15 text-gray-300 hover:text-white hover:bg-white/15 hover:border-[#aaed2e]/60 hover:shadow-[0_0_20px_rgba(170,237,46,0.35)] hover:scale-105 active:scale-95"
        }`}
      >
        <svg
          className={`w-4.5 h-4.5 sm:w-5 sm:h-5 transition-transform duration-300 stroke-current fill-none ${
            isOpen ? "scale-110 rotate-12" : "group-hover:rotate-12"
          }`}
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </button>

      {/* ── DESKTOP DROPDOWN POPUP (Anchored under Navbar button) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block absolute right-0 top-full mt-3.5 w-84 rounded-2xl bg-[#0e0e14]/98 border border-[#aaed2e]/35 p-4.5 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(170,237,46,0.15)] backdrop-blur-2xl z-50 overflow-hidden"
          >
            {/* Top Pointer Arrow */}
            <div className="absolute -top-1.5 right-4 w-3 h-3 bg-[#0e0e14] border-t border-l border-[#aaed2e]/35 rotate-45" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  Share Portfolio
                </span>
              </div>
              <button
                onClick={() => setShowQr((prev) => !prev)}
                className="text-[11px] font-bold text-gray-400 hover:text-[#aaed2e] transition-colors flex items-center gap-1.5 cursor-pointer py-1 px-2 rounded-lg hover:bg-white/5"
                title={showQr ? "Show Share Links" : "Show QR Code"}
              >
                {showQr ? (
                  <>
                    <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span>Links</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <span>QR Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Content: Either Links or QR Code */}
            {showQr ? (
              <div className="flex flex-col items-center justify-center p-3 bg-black/40 rounded-xl border border-white/10">
                <div className="bg-white p-2.5 rounded-xl shadow-inner mb-2.5">
                  {qrLoaded ? (
                    <img
                      src={qrImageUrl}
                      alt="Portfolio QR Code"
                      width={180}
                      height={180}
                      className="w-44 h-44 object-contain rounded-lg"
                    />
                  ) : (
                    <div className="w-44 h-44 bg-gray-100 flex items-center justify-center rounded-lg">
                      <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>
                <p className="text-[11px] font-medium text-gray-400 text-center mb-2.5">
                  Scan with any phone camera to open instantly
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowQr(false);
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  Back to Share Links
                </button>
              </div>
            ) : (
              <>
                {/* Copy Link Input / Button */}
                <div className="mb-3">
                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#aaed2e]/50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-[#aaed2e]/15 text-[#aaed2e] flex items-center justify-center flex-shrink-0">
                        {copied ? (
                          <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-gray-200 truncate">
                        {copied ? "Link Copied to Clipboard!" : "giannivilayhane.com"}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-md transition-all ${
                        copied
                          ? "bg-[#aaed2e] text-[#0a0a0a]"
                          : "bg-white/10 text-gray-300 group-hover:bg-[#aaed2e] group-hover:text-[#0a0a0a]"
                      }`}
                    >
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>

                {/* Social Share Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {shareLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/8 ${item.bgHover} transition-all duration-200 group`}
                    >
                      <div className={`w-7 h-7 rounded-lg bg-black/40 flex items-center justify-center ${item.textColor}`}>
                        {item.icon}
                      </div>
                      <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Native Device Share Sheet (if supported) */}
                {canNativeShare && (
                  <button
                    onClick={handleNativeShare}
                    className="w-full mt-2.5 flex items-center justify-center gap-2 p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-bold text-gray-300 hover:text-white transition-all cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    More Sharing Options...
                  </button>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE MODAL POPUP (Rendered via Portal to escape stacking context) ── */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div className="sm:hidden fixed inset-0 z-[9999] flex flex-col justify-end">
                {/* Backdrop Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                {/* Bottom Sheet Modal */}
                <motion.div
                  ref={mobileModalRef}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 320 }}
                  className="relative z-10 w-full bg-[#0e0e14] border-t border-[#aaed2e]/35 rounded-t-3xl p-5 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] max-h-[85vh] overflow-y-auto"
                >
                  {/* Top drag handle */}
                  <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4" />

                  {/* Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
                      <span className="text-sm font-black uppercase tracking-wider text-white">
                        {showQr ? "Scan Portfolio QR" : "Share Portfolio"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowQr((prev) => !prev);
                        }}
                        className="text-xs font-bold text-gray-300 bg-white/10 hover:bg-white/20 py-1.5 px-3 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        {showQr ? "Share Links" : "QR Code"}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsOpen(false);
                        }}
                        aria-label="Close"
                        className="w-8 h-8 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer"
                      >
                        <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {showQr ? (
                    <div className="flex flex-col items-center justify-center p-4 bg-black/40 rounded-2xl border border-white/10 my-1">
                      <div className="bg-white p-3 rounded-2xl shadow-inner mb-3">
                        {qrLoaded ? (
                          <img
                            src={qrImageUrl}
                            alt="Portfolio QR Code"
                            width={220}
                            height={220}
                            className="w-52 h-52 object-contain rounded-xl"
                          />
                        ) : (
                          <div className="w-52 h-52 bg-gray-100 flex items-center justify-center rounded-xl">
                            <div className="w-8 h-8 border-3 border-black border-t-transparent rounded-full animate-spin" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs font-medium text-gray-400 text-center mb-3">
                        Scan with your smartphone camera to view portfolio instantly
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowQr(false);
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                          <line x1="19" y1="12" x2="5" y2="12" />
                          <polyline points="12 19 5 12 12 5" />
                        </svg>
                        Back to Share Links
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Copy Link Input */}
                      <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/[0.06] active:bg-white/[0.12] border border-white/15 mb-3.5"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#aaed2e]/20 text-[#aaed2e] flex items-center justify-center flex-shrink-0">
                            {copied ? (
                              <svg className="w-4.5 h-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            ) : (
                              <svg className="w-4.5 h-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                              </svg>
                            )}
                          </div>
                          <span className="text-xs font-semibold text-gray-200 truncate">
                            {copied ? "Link Copied to Clipboard!" : "giannivilayhane.com"}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-lg ${
                            copied ? "bg-[#aaed2e] text-[#0a0a0a]" : "bg-white/10 text-gray-200"
                          }`}
                        >
                          {copied ? "Copied!" : "Copy"}
                        </span>
                      </button>

                      {/* Native Mobile Share Button */}
                      {canNativeShare && (
                        <button
                          onClick={handleNativeShare}
                          className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#aaed2e] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider mb-3.5 shadow-[0_0_20px_rgba(170,237,46,0.3)] active:scale-98"
                        >
                          <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                          </svg>
                          Share via Mobile Sheet
                        </button>
                      )}

                      {/* Social Share Grid */}
                      <div className="grid grid-cols-2 gap-2.5 mb-2">
                        {shareLinks.map((item) => (
                          <a
                            key={item.name}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] active:bg-white/[0.08] border border-white/10 ${item.textColor}`}
                          >
                            <div className="w-8 h-8 rounded-xl bg-black/40 flex items-center justify-center">
                              {item.icon}
                            </div>
                            <span className="text-xs font-bold text-gray-200">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
