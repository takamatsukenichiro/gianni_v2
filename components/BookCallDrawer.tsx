"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import BookCallCalendar from "./BookCallCalendar";
import BookCallTimeSlots from "./BookCallTimeSlots";
import BookCallForm from "./BookCallForm";

type BookCallDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Step = 1 | 2 | 3;

const subscribe = () => () => {};

export default function BookCallDrawer({ isOpen, onClose }: BookCallDrawerProps) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [isClosing, setIsClosing] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 320);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, handleClose]);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    timeoutRef.current = setTimeout(() => setStep(2), 300);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    timeoutRef.current = setTimeout(() => setStep(3), 300);
  };

  const handleGoBack = () => {
    if (step === 2) {
      setSelectedTime("");
    }
    setStep((step - 1) as Step);
  };

  if (!isOpen || !mounted) return null;

  const stepLabels = ["Date", "Time", "Details"];

  const drawerAnimStyle = isClosing
    ? { animation: "drawerSlideOut 0.3s cubic-bezier(0.55, 0, 0.1, 1) forwards" }
    : { animation: "drawerSlideIn 0.38s cubic-bezier(0.21, 0.47, 0.32, 0.98)" };

  const backdropAnimStyle = isClosing
    ? { animation: "drawerBackdropOut 0.28s ease forwards" }
    : { animation: "drawerBackdropIn 0.3s ease" };

  return createPortal(
    <div style={{ position: "fixed", inset: 0, zIndex: 100 }}>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10, 10, 10, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          ...backdropAnimStyle,
        }}
      />

      {/* Drawer Panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "100%",
          maxWidth: "460px",
          background: "#0d0d10",
          boxShadow:
            "-12px 0 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          ...drawerAnimStyle,
        }}
      >
        {/* ── Drawer Header ── */}
        <div
          style={{
            padding: "24px 24px 20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            background: "#0d0d10",
            flexShrink: 0,
          }}
        >
          {/* Close + Title Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              {/* Lime icon box */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #aaed2e 0%, #8bc923 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 6px 24px rgba(174, 237, 46, 0.3)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "22px", height: "22px" }}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: 900,
                    fontSize: "20px",
                    color: "#ffffff",
                    lineHeight: 1.15,
                    margin: 0,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Book a Free Call
                </h2>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#a1a1aa",
                    margin: "4px 0 0",
                    fontWeight: 500,
                  }}
                >
                  30-min consultation &middot; No commitments
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close booking drawer"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "11px",
                border: "1.5px solid rgba(255, 255, 255, 0.12)",
                background: "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                transition: "all 0.25s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#aaed2e";
                e.currentTarget.style.borderColor = "#aaed2e";
                e.currentTarget.style.transform = "rotate(90deg) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.transform = "rotate(0deg) scale(1)";
              }}
            >
              <svg
                viewBox="0 0 14 14"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                style={{ width: "12px", height: "12px" }}
              >
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>
          </div>

          {/* Step Progress */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0",
              padding: "4px 0 0",
            }}
          >
            {stepLabels.map((label, i) => {
              const stepNum = (i + 1) as Step;
              const isActive = step === stepNum;
              const isComplete = step > stepNum;

              const stepIcons = [
                <svg key="cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>,
                <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}>
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>,
                <svg key="user" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>,
              ];

              const checkIcon = (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: "13px", height: "13px" }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              );

              return (
                <div
                  key={label}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {/* Connector line */}
                  {i > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "17px",
                        right: "50%",
                        width: "100%",
                        height: "2px",
                        borderRadius: "1px",
                        background: isComplete ? "#aaed2e" : isActive ? "#aaed2e" : "rgba(255, 255, 255, 0.1)",
                        transition: "background 0.4s ease",
                        zIndex: 0,
                      }}
                    />
                  )}

                  {/* Step circle */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 1,
                      background: isComplete
                        ? "#aaed2e"
                        : isActive
                        ? "#aaed2e"
                        : "rgba(255, 255, 255, 0.06)",
                      color: isComplete
                        ? "#0a0a0a"
                        : isActive
                        ? "#0a0a0a"
                        : "#71717a",
                      boxShadow: isActive
                        ? "0 4px 18px rgba(174, 237, 46, 0.4)"
                        : isComplete
                        ? "0 3px 10px rgba(174, 237, 46, 0.25)"
                        : "none",
                      transform: isActive ? "scale(1.12)" : "scale(1)",
                      transition: "all 0.35s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
                    }}
                  >
                    {isComplete ? checkIcon : stepIcons[i]}
                  </div>

                  {/* Label */}
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: isActive ? 800 : 600,
                      color: isActive
                        ? "#aaed2e"
                        : isComplete
                        ? "#ffffff"
                        : "#71717a",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase" as const,
                      whiteSpace: "nowrap" as const,
                      marginTop: "7px",
                      transition: "color 0.3s ease",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Drawer Body ── */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px",
          }}
          className="book-call-drawer-body"
        >
          <div
            key={step}
            style={{
              animation: "drawerStepIn 0.32s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
            }}
          >
            {step === 1 && (
              <BookCallCalendar onSelect={handleDateSelect} />
            )}
            {step === 2 && (
              <BookCallTimeSlots onSelect={handleTimeSelect} selectedDate={selectedDate} />
            )}
            {step === 3 && (
              <BookCallForm
                date={selectedDate}
                time={selectedTime}
                onSuccess={() => {}}
              />
            )}
          </div>
        </div>

        {/* ── Drawer Footer ── */}
        <div
          style={{
            padding: "16px 24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            background: "#0d0d10",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {step > 1 ? (
              <button
                onClick={handleGoBack}
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "1.5px solid rgba(255, 255, 255, 0.12)",
                  background: "rgba(255, 255, 255, 0.06)",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily:
                    "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  transition: "all 0.2s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#aaed2e";
                  e.currentTarget.style.background = "rgba(174, 237, 46, 0.12)";
                  e.currentTarget.style.color = "#aaed2e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "13px", height: "13px" }}
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Back
              </button>
            ) : (
              <div />
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              {/* Security badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "11px",
                  color: "#a1a1aa",
                  fontWeight: 600,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "12px", height: "12px" }}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Free &middot; No commitments
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes drawerSlideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes drawerSlideOut {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        @keyframes drawerBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drawerBackdropOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes drawerStepIn {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @media (max-width: 480px) {
          .book-call-drawer-body {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </div>,
    document.body
  );
}
