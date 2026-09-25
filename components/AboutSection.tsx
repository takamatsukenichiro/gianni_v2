"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useCallback, useState, useEffect } from "react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

/* ═════════════════════════════════════════════════════════════════════
   MOBILE SCRATCH CARD COMPONENT — Permanent Reveal, No Scroll Flash
═════════════════════════════════════════════════════════════════════ */
function MobileScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScratching = useRef<boolean>(false);
  const isRevealedRef = useRef<boolean>(false);
  const isInitializedRef = useRef<boolean>(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  const [scratchPercent, setScratchPercent] = useState<number>(0);
  const [isFullyRevealed, setIsFullyRevealed] = useState<boolean>(false);
  const [hasStartedScratching, setHasStartedScratching] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Initialize canvas only once or on explicit reset — NEVER resets automatically on scroll or resize
  const initCanvas = useCallback((force = false) => {
    if ((isRevealedRef.current || isInitializedRef.current) && !force) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = "source-over";

    // Draw base front cover photo
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = "/gianni/gianni_pf.png";
    img.onload = () => {
      const hRatio = rect.width / img.width;
      const vRatio = rect.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (rect.width - img.width * ratio) / 2;
      const centerShiftY = (rect.height - img.height * ratio) / 2;

      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );

      ctx.fillStyle = "rgba(10, 10, 10, 0.04)";
      ctx.fillRect(0, 0, rect.width, rect.height);
      setIsLoaded(true);
      isInitializedRef.current = true;
    };

    setScratchPercent(0);
    setIsFullyRevealed(false);
    isRevealedRef.current = false;
    setHasStartedScratching(false);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  // Smooth scratch stroke
  const scratch = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas || isRevealedRef.current) return;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 46;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (lastPoint.current) {
        ctx.beginPath();
        ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(x, y, 23, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      lastPoint.current = { x, y };

      if (!hasStartedScratching) {
        setHasStartedScratching(true);
      }
    },
    [hasStartedScratching]
  );

  // Calculate percentage scratched via lightweight grid sampling
  const calculatePercentage = useCallback(() => {
    if (isRevealedRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    try {
      const width = canvas.width;
      const height = canvas.height;
      const stride = Math.floor(Math.max(2, width / 24));
      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;
      let transparentPixels = 0;
      let totalSampled = 0;

      for (let y = 0; y < height; y += stride) {
        for (let x = 0; x < width; x += stride) {
          const alpha = data[(y * width + x) * 4 + 3];
          if (alpha < 120) {
            transparentPixels++;
          }
          totalSampled++;
        }
      }

      if (totalSampled > 0) {
        const percent = Math.min(100, Math.round((transparentPixels / totalSampled) * 100));
        setScratchPercent(percent);

        // Auto-complete reveal once 35% is scratched off
        if (percent >= 35 && !isRevealedRef.current) {
          setIsFullyRevealed(true);
          isRevealedRef.current = true;
        }
      }
    } catch (e) {
      // Fallback
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealedRef.current) return;
    isScratching.current = true;
    lastPoint.current = null;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching.current || isRevealedRef.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching.current) return;
    isScratching.current = false;
    lastPoint.current = null;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (_) { }
    calculatePercentage();
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    isRevealedRef.current = false;
    isInitializedRef.current = false;
    initCanvas(true);
  };

  const handleRevealAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullyRevealed(true);
    isRevealedRef.current = true;
    setScratchPercent(100);
  };

  return (
    <div className="sm:hidden w-full flex flex-col items-center select-none py-2">
      {/* Tall, Generous Height Scratch Card */}
      <div
        ref={containerRef}
        className="relative rounded-[1.75rem] overflow-hidden shadow-2xl border border-white/20 bg-[#0a0a0a]"
        style={{
          width: "100%",
          maxWidth: "360px",
          aspectRatio: "3 / 4",
        }}
      >
        {/* UNDERNEATH LAYER — Revealed Background Artwork */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gianni/bgimghero.png"
            alt="Gianni Vilayhane background reveal"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 90vw, 360px"
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* TOP LAYER — Interactive Scratch Off Canvas */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-10 touch-pan-y"
          style={{
            opacity: isFullyRevealed ? 0 : 1,
            transition: isFullyRevealed ? "opacity 0.5s ease" : "none",
            pointerEvents: isFullyRevealed ? "none" : "auto",
          }}
        />

        {/* TOP-LEFT — Animated Scratch Prompt Badge */}
        {!hasStartedScratching && !isFullyRevealed && isLoaded && (
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#aaed2e]/60 pointer-events-none shadow-md animate-bounce">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#aaed2e"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 flex-shrink-0"
            >
              <path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0V12" />
              <path d="M11 11.5a1.5 1.5 0 0 1 3 0V12" />
              <path d="M14 10.5a1.5 1.5 0 0 1 3 0V12" />
              <path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2a6 6 0 0 1-4.24-1.76l-3.76-3.76a1.5 1.5 0 0 1 2.12-2.12L8 16" />
            </svg>
            <span className="text-[11px] font-bold text-[#aaed2e] tracking-wide">
              Scratch to reveal
            </span>
          </div>
        )}

        {/* TOP-LEFT — Real-Time Scratch Progress Bar */}
        {(hasStartedScratching || isFullyRevealed) && (
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 shadow-md">
            <div className="w-10 h-1.5 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full bg-[#aaed2e] transition-all duration-200"
                style={{ width: `${isFullyRevealed ? 100 : scratchPercent}%` }}
              />
            </div>
            <span className="text-[10px] font-bold text-[#aaed2e]">
              {isFullyRevealed ? "100% Revealed" : `${scratchPercent}% Scratched`}
            </span>
          </div>
        )}

        {/* TOP-RIGHT — Quick Controls */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          {hasStartedScratching && (
            <button
              onClick={handleReset}
              className="p-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-gray-300 hover:text-white active:scale-90 transition-all shadow-md cursor-pointer"
              title="Reset Scratch"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                <path d="M23 4v6h-6" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            </button>
          )}

          {!isFullyRevealed && (
            <button
              onClick={handleRevealAll}
              className="px-2.5 py-1 rounded-full bg-[#aaed2e] text-[#0a0a0a] text-[10px] font-extrabold active:scale-95 transition-all shadow-md cursor-pointer"
            >
              Reveal All
            </button>
          )}
        </div>

        {/* BOTTOM — Floating Name Badge */}
        <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
          <div className="bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 border border-white/10 shadow-xl">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(170,237,46,0.3)]"
              style={{ background: "#aaed2e" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-tight">Gianni Vilayhane</p>
              <p className="text-gray-300 text-[10px] font-medium leading-tight">Full-Stack Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════
   ABOUT SECTION COMPONENT
═════════════════════════════════════════════════════════════════════ */
export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isHovering = useRef(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !overlayRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!overlayRef.current) return;
      // Smooth spotlight circle follows cursor on desktop
      overlayRef.current.style.transition = "none";
      overlayRef.current.style.clipPath = `circle(130px at ${x}px ${y}px)`;
      overlayRef.current.style.opacity = "1";
      if (!isHovering.current && hintRef.current) {
        hintRef.current.style.opacity = "0";
        isHovering.current = true;
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!overlayRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Smooth collapse to center on leave
    overlayRef.current.style.transition =
      "clip-path 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease";
    overlayRef.current.style.clipPath = `circle(0px at ${rect.width / 2}px ${rect.height / 2}px)`;
    overlayRef.current.style.opacity = "0";
  }, []);

  return (
    <section id="about" className="bg-white w-full pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-18 overflow-hidden">
      <div className="container-xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* LEFT COLUMN — Interactive Spotlight Hover Card on Desktop, Scratch Card on Mobile */}
          <FadeInUp className="w-full lg:w-1/2 flex justify-center flex-shrink-0">
            {/* Desktop Card — Spotlight Hover Reveal */}
            <div className="hidden sm:block w-full max-w-[480px]">
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-[2rem] overflow-hidden w-full cursor-crosshair shadow-2xl border border-gray-200"
                style={{
                  background: "#0a0a0a",
                  height: "clamp(520px, 68vh, 640px)",
                }}
              >
                {/* Decorative accents */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-white/20 opacity-60 z-10" />
                <div className="absolute top-8 right-8 w-4 h-4 rounded-full bg-[#aaed2e]/30 z-10" />

                {/* Layer 1 — Base profile photo */}
                <div className="absolute inset-0">
                  <Image
                    src="/gianni/gianni_pf.png"
                    alt="Gianni Vilayhane — Full-Stack Software Engineer"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                </div>

                {/* Layer 2 — Reveal image (clipped to cursor spotlight circle) */}
                <div
                  ref={overlayRef}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: "circle(0px at 50% 50%)",
                    opacity: 0,
                    willChange: "clip-path",
                  }}
                >
                  <Image
                    src="/gianni/bgimghero.png"
                    alt="Gianni Vilayhane background reveal"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                  {/* Spotlight rim overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle 130px at var(--mx,50%) var(--my,50%), transparent 60%, rgba(0,0,0,0.35) 100%)",
                    }}
                  />
                </div>

                {/* Hover hint badge */}
                <div
                  ref={hintRef}
                  className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 pointer-events-none"
                  style={{ transition: "opacity 0.4s ease" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#aaed2e" strokeWidth="2.2" className="w-3.5 h-3.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                  <span className="text-xs font-semibold text-white/90 tracking-wide">Hover to reveal</span>
                </div>

                {/* Name & Role Badge at bottom */}
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <div className="bg-[#0a0a0a]/90 backdrop-blur-md rounded-2xl px-4 py-3.5 border border-white/10 flex items-center gap-3 shadow-xl">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(170,237,46,0.3)]"
                      style={{ background: "#aaed2e" }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Gianni Vilayhane</p>
                      <p className="text-gray-300 text-xs font-medium">Full-Stack Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Card — Full-Height Proper Scratch Card */}
            <MobileScratchCard />
          </FadeInUp>

          {/* RIGHT COLUMN — Bio statement & details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0a0a0a]/15 bg-gray-50 text-xs font-bold text-[#0a0a0a] mb-5 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0a0a0a] flex-shrink-0" />
                ABOUT ME
              </div>

              <h2
                className="font-bold text-[#0a0a0a] leading-[1.65] mb-6 tracking-tight"
                style={{ fontSize: "clamp(1.3rem, 2.3vw, 1.8rem)" }}
              >
                I&apos;m Gianni, a full-stack software engineer building{" "}
                <span className="font-black text-[#0a0a0a] bg-[#aaed2e] px-2 py-0.5 rounded-md [box-decoration-break:clone] inline shadow-sm">
                COMPLETE DIGITAL SYSTEMS
                </span>{" "}
                for startups, growing businesses, and enterprise teams. From{" "}
                <span className="font-black text-[#0a0a0a] bg-[#aaed2e] px-2 py-0.5 rounded-md [box-decoration-break:clone] inline shadow-sm">
                WEB APPLICATIONS, MOBILE APPS, API INTEGRATIONS, AUTOMATION,
                </span>{" "}
                and{" "}
                <span className="font-black text-[#0a0a0a] bg-[#aaed2e] px-2 py-0.5 rounded-md [box-decoration-break:clone] inline shadow-sm">
                  CLOUD INFRASTRUCTURE
                </span>
                , I handle the full engineering lifecycle from architecture to deployment so your systems work together, scale reliably, and support your business as it grows.
              </h2>
            </FadeInUp>

            {/* Tech stack badges */}
            <StaggerContainer className="mt-4 flex flex-wrap gap-2">
              {[
                  "React",
                  "Next.js",
                  "Svelte",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "FastAPI",
                  "Laravel",
                  "Java",
                  "Spring Boot",
                  "PostgreSQL",
                  "MongoDB",
                  "REST APIs",
                  "WebSockets",
                  "Webhooks",
                  "OAuth",
                  "Docker",
                  "Linux",
                  "AWS",
                  "Azure",
                  "GCP",

                  // Mobile
                  "React Native",
                  "Expo",
                  "Flutter",
                  "Dart",
                  "Swift",
                  "SwiftUI",
                  "Kotlin",
                  "Android",
                  "iOS",

                  // Enterprise & Integrations
                  "Salesforce",
                  "Litify",
                  "Filevine",
                  "Zendesk",
                  "HubSpot",
                  "QuickBooks",
              ].map((tech) => (
                <StaggerItem key={tech}>
                  <span
                    className="px-3 py-1.5 rounded-full border border-[#0a0a0a]/15 text-xs font-semibold text-[#0a0a0a] bg-white hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all duration-200 cursor-default select-none block"
                  >
                    {tech}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA row */}
            <FadeInUp delay={0.15} className="mt-8 flex items-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#0a0a0a] text-white text-sm font-bold transition-all duration-300 hover:bg-[#aaed2e] hover:text-[#0a0a0a] hover:scale-105 active:scale-95 shadow-md"
              >
                Learn More About Me
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" />
                </svg>
              </Link>
            </FadeInUp>
          </div>

        </div>
      </div>
    </section>
  );
}
