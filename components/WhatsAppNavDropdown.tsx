"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppNavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [qrLoaded, setQrLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Secure WhatsApp redirect URL — hides raw phone number from GitHub source code
  const whatsappUrl = "/api/whatsapp";
  const absoluteRedirectUrl = "https://giannivilayhane.com/api/whatsapp";
  
  // Fast, high-reliability QR code image URL
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
    absoluteRedirectUrl
  )}&color=0a0a0a&bgcolor=ffffff&margin=8`;

  // Preload QR Code Image on page load for 0ms instant display when opened
  useEffect(() => {
    setIsMounted(true);
    const img = new Image();
    img.src = qrImageUrl;
    img.onload = () => setQrLoaded(true);
  }, [qrImageUrl]);

  // Auto-close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll on mobile when modal is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Auto-close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      {/* Simple & Clean Icon-Only Navbar Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className={`relative w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer group shadow-md ${
          isOpen
            ? "bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,0.75)] scale-105"
            : "bg-[#122b1c] border border-[#25D366]/70 text-[#25D366] hover:bg-[#25D366] hover:text-black hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95"
        }`}
      >
        <svg
          className={`w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current transition-transform duration-300 ${
            isOpen ? "scale-110" : "group-hover:rotate-12"
          }`}
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.594-1.049 3.834 3.793-.996.999.635zm11.233-5.765c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </button>

      {/* ── DESKTOP DROPDOWN (Anchored under navbar button) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block absolute right-0 top-full mt-3.5 w-80 rounded-2xl bg-[#0d0d12]/98 border border-[#25D366]/40 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(37,211,102,0.2)] backdrop-blur-2xl z-50 overflow-hidden"
          >
            {/* Top Pointer Arrow */}
            <div className="absolute -top-1.5 right-3.5 w-3 h-3 bg-[#0d0d12] border-t border-l border-[#25D366]/40 rotate-45" />

            {/* Header */}
            <div className="flex items-center gap-3 mb-3.5 pb-3 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.594-1.049 3.834 3.793-.996.999.635zm11.233-5.765c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  Chat on WhatsApp
                </h4>
                <p className="text-[11px] text-gray-400">
                  Scan QR code or tap below to connect
                </p>
              </div>
            </div>

            {/* QR Code Container with instant preloaded display */}
            <div className="relative mx-auto w-48 h-48 rounded-xl bg-white p-2.5 shadow-lg border-2 border-[#25D366]/30 flex items-center justify-center mb-4">
              {!qrLoaded && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-xl flex items-center justify-center text-xs text-gray-400 font-semibold">
                  Loading QR...
                </div>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrImageUrl}
                alt="WhatsApp QR Code for Gianni Vilayhane"
                className={`w-full h-full object-contain rounded-md transition-opacity duration-200 ${
                  qrLoaded ? "opacity-100" : "opacity-0"
                }`}
                loading="eager"
                decoding="sync"
              />
            </div>

            {/* Direct CTA Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs tracking-wide shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.594-1.049 3.834 3.793-.996.999.635zm11.233-5.765c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Open WhatsApp Directly
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE MODAL (Portaled to document.body for dead-center screen alignment) ── */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div className="sm:hidden fixed inset-0 z-[9999] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black/85 backdrop-blur-md"
                />

                {/* Dead-Center Modal Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: -25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -25 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-xs rounded-3xl bg-[#0f0f13] border border-[#25D366]/40 p-6 text-center text-white shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(37,211,102,0.2)] z-10 overflow-hidden"
                >
                  {/* Top Ambient Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent rounded-full shadow-[0_0_15px_#25D366]" />

                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                    className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Header */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-2.5 shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                      <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.594-1.049 3.834 3.793-.996.999.635zm11.233-5.765c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Chat with Gianni
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Scan QR code or tap below to connect
                    </p>
                  </div>

                  {/* QR Code Container with instant preloaded display */}
                  <div className="relative mx-auto w-44 h-44 rounded-2xl bg-white p-2.5 shadow-xl border-2 border-[#25D366]/30 flex items-center justify-center mb-4">
                    {!qrLoaded && (
                      <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-2xl flex items-center justify-center text-xs text-gray-400 font-semibold">
                        Loading QR...
                      </div>
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={qrImageUrl}
                      alt="WhatsApp QR Code for Gianni Vilayhane"
                      className={`w-full h-full object-contain rounded-md transition-opacity duration-200 ${
                        qrLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      loading="eager"
                      decoding="sync"
                    />
                  </div>

                  {/* Direct Link CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs tracking-wide shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.594-1.049 3.834 3.793-.996.999.635zm11.233-5.765c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    Open WhatsApp Directly
                  </a>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
