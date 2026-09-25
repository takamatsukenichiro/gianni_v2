"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DisableRightClick() {
  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();

      // Show red transparent toast
      setShowToast(true);

      // Clear existing timer if clicked repeatedly
      if (timerRef.current) clearTimeout(timerRef.current);

      // Auto-hide toast after 2.5 seconds
      timerRef.current = setTimeout(() => {
        setShowToast(false);
      }, 2500);
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 30, scale: 0.92 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed top-6 right-4 sm:right-6 z-[99999] pointer-events-none w-auto max-w-[90vw]"
        >
          <div className="flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-red-950/85 backdrop-blur-xl border border-red-500/40 text-white shadow-[0_10px_38px_rgba(239,68,68,0.35)] select-none">
            {/* Shield Warning Icon with Pulsing Red Rim */}
            <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-500/20 border border-red-400/50 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-40" />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff4d4d"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 relative z-10"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>

            {/* Text Message */}
            <p className="text-xs sm:text-sm font-bold text-red-100 tracking-wide">
              Right-Click Disabled
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

