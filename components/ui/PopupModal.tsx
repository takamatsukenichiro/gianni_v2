"use client";

import { useEffect, useRef, useCallback, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

type PopupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const subscribe = () => () => {};

export default function PopupModal({ isOpen, onClose, children, title }: PopupModalProps) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 250);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.add("popup-open");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.classList.remove("popup-open");
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.classList.remove("popup-open");
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    const preventTouchScroll = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      const modal = document.querySelector(".popup-content");
      if (!modal || !modal.contains(target)) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleEsc);
    document.addEventListener("touchmove", preventTouchScroll, { passive: false });
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("touchmove", preventTouchScroll);
    };
  }, [isOpen, handleClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="popup-overlay fixed inset-0 z-[100] grid place-items-center overflow-y-auto p-2.5 sm:p-4 md:p-6"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0a0a0a]/90 backdrop-blur-md transition-opacity duration-200"
        style={{
          opacity: isAnimating ? 0 : 1,
        }}
      />

      {/* Modal Container — Mobile Responsive & Desktop Pristine */}
      <div
        className="popup-content relative z-10 w-full max-w-[840px] max-h-[94vh] sm:max-h-[92vh] bg-[#0d0d0f] rounded-2xl sm:rounded-3xl border border-white/15 shadow-[0_30px_100px_-10px_rgba(0,0,0,0.95),0_0_40px_rgba(170,237,46,0.08)] flex flex-col overflow-hidden transition-all duration-250 ease-out"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? "scale(0.96) translateY(12px)" : "scale(1) translateY(0)",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="popup-close-btn absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#aaed2e] hover:border-[#aaed2e] hover:text-[#0a0a0a] hover:rotate-90"
        >
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white transition-colors duration-200 group-hover:text-black">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {/* Form Scroll Container */}
        <div className="popup-form-scroll flex-1 min-w-0 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-7 bg-[#0d0d0f]">
          {/* Header */}
          <div className="mb-3.5 sm:mb-4 pr-8">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#aaed2e] opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#aaed2e]" />
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold text-[#aaed2e] tracking-wider uppercase">
                Available for New Projects
              </span>
            </div>
            <h2 className="font-black text-xl sm:text-2xl md:text-3xl text-white leading-tight tracking-tight m-0 font-[family-name:var(--font-space-grotesk)]">
              {title || "Start Your Project"}
            </h2>
          </div>

          {/* Form content */}
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
