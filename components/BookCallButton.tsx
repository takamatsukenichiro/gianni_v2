"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import BookCallDrawer from "./BookCallDrawer";

const subscribe = () => () => {};

export default function BookCallButton() {
  const isMounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
    return () => {
      document.body.classList.remove("popup-open");
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    if (!isMounted) return;
    const checkChatState = () => {
      setIsChatOpen(document.body.classList.contains("chat-open"));
    };

    checkChatState();

    const observer = new MutationObserver(checkChatState);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      {/* Positioned strictly on the Right Side, automatically hiding when AI Chat Bot is open */}
      <div
        className={`fixed bottom-32 right-4 sm:bottom-20 sm:right-7 z-50 group flex items-center justify-end transition-all duration-300 transform ${
          isChatOpen
            ? "opacity-0 scale-90 translate-y-4 pointer-events-none"
            : "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        }`}
      >
        {/* Ambient glowing background aura */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#aaed2e] to-[#88d91c] opacity-50 blur-md group-hover:opacity-90 transition duration-300 pointer-events-none" />

        <button
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Book a free call"
          className="relative flex items-center flex-row-reverse p-2.5 sm:p-3 rounded-full bg-[#0d0d0f]/95 border border-[#aaed2e]/40 backdrop-blur-xl text-white shadow-[0_12px_36px_rgba(0,0,0,0.85),0_0_20px_rgba(170,237,46,0.2)] hover:border-[#aaed2e] hover:shadow-[0_16px_44px_rgba(170,237,46,0.4)] transition-all duration-300 transform group-hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
        >
          {/* Calendar/Call Icon Badge — Anchored on the Right */}
          <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#aaed2e] text-[#0a0a0a] font-bold shrink-0 shadow-[0_0_12px_rgba(170,237,46,0.6)]">
            {/* Pulsing online status dot */}
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#aaed2e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#aaed2e] border-2 border-[#0d0d0f]" />
            </span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>

          {/* Collapsible Container: Text + Arrow (Reveals on hover, expanding to the LEFT inward) */}
          <div className="flex items-center flex-row-reverse max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-3 group-hover:pl-1 transition-all duration-300 ease-out overflow-hidden whitespace-nowrap">
            <span className="text-xs sm:text-sm font-extrabold text-white tracking-tight group-hover:text-[#aaed2e] transition-colors">
              Book a Free Call
            </span>

            {/* Arrow Icon */}
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#aaed2e] group-hover:bg-[#aaed2e] group-hover:text-[#0a0a0a] transition-all duration-300 mr-2 shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      <BookCallDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
