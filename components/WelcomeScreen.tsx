"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const LANGUAGES = [
  { text: "Hello", lang: "English" },
  // { text: "নমস্কার", lang: "Bengali" },
  // { text: "नमस्ते", lang: "Hindi" },
  // { text: "ಕನ್ನಡ", lang: "Kannada" },
  // { text: "你好", lang: "Chinese" },
  // { text: "こんにちは", lang: "Japanese" },
  // { text: "안녕하세요", lang: "Korean" },
  // { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const SESSION_KEY = "gianni_intro_seen";

const subscribe = () => () => {};
const getSnapshot = (): boolean => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return true;
  }
};
const getServerSnapshot = (): boolean => true;

export default function WelcomeScreen() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isSeen = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const isVisible = isHome && !isSeen && !dismissed;

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* noop */
    }
    setDismissed(true);
  }, []);

  // Reduced motion — skip after brief delay
  const prefersReduced = useReducedMotion();
  useEffect(() => {
    if (!isVisible || !prefersReduced) return;
    const t = setTimeout(finish, 600);
    return () => clearTimeout(t);
  }, [isVisible, prefersReduced, finish]);

  // Cycle through languages
  useEffect(() => {
    if (!isVisible || prefersReduced) return;

    const TICK = 600;
    let i = 0;
    let cancelled = false;

    const step = () => {
      if (cancelled) return;
      i++;
      if (i >= LANGUAGES.length) {
        timers.current.push(
          setTimeout(() => {
            if (!cancelled) finish();
          }, 600)
        );
        return;
      }
      setIndex(i);
      timers.current.push(setTimeout(step, TICK));
    };

    timers.current.push(setTimeout(step, TICK));

    const hardStop = setTimeout(() => {
      if (!cancelled) finish();
    }, 6000);

    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
      timers.current = [];
      clearTimeout(hardStop);
    };
  }, [isVisible, prefersReduced, finish]);

  // Not on home page or animation finished / already seen — render nothing
  if (!isVisible) return null;

  const item = LANGUAGES[index];

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{ backgroundColor: "#0a0a0a" }}
      onClick={finish}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(170,237,46,0.06) 0%, rgba(123,90,219,0.03) 40%, transparent 70%)",
        }}
      />

      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(170,237,46,0.15), transparent)",
        }}
      />

      {/* Skip Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 cursor-pointer text-white bg-white/10 hover:bg-[#aaed2e] hover:text-[#0a0a0a] border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg"
        style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
      >
        Skip ✕
      </button>

      {/* Hint */}
      <div
        className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 text-white/70 text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase whitespace-nowrap bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
        style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
      >
        Tap anywhere to skip
      </div>

      {/* Animated text */}
      <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6 md:gap-8 px-6 w-full max-w-lg">
        <div
          className="flex items-center justify-center w-full"
          style={{ minHeight: "100px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-center gap-3 sm:gap-4"
            >
              <h1
                className="text-white font-black leading-none text-center"
                style={{
                  fontFamily: "var(--font-space-grotesk, sans-serif)",
                  fontSize: "clamp(2.5rem, 10vw, 7rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                {item.text}
              </h1>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className="w-6 sm:w-8 md:w-12 h-px"
                  style={{ backgroundColor: "rgba(170,237,46,0.3)" }}
                />
                <span
                  className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.5em] uppercase text-white/30"
                  style={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                  }}
                >
                  {item.lang}
                </span>
                <div
                  className="w-6 sm:w-8 md:w-12 h-px"
                  style={{ backgroundColor: "rgba(170,237,46,0.3)" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 sm:gap-[6px]">
          {LANGUAGES.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? 20 : 5,
                height: 5,
                backgroundColor:
                  i === index
                    ? "#aaed2e"
                    : i < index
                      ? "rgba(170,237,46,0.2)"
                      : "rgba(255,255,255,0.07)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
