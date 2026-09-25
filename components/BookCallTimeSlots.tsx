"use client";

import { useState, useMemo, useRef, useEffect } from "react";

type BookCallTimeSlotsProps = {
  onSelect: (time: string) => void;
  selectedDate?: string;
};

const MORNING_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
];
const AFTERNOON_SLOTS = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM",
];
const EVENING_SLOTS = [
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM",
];

function parseTimeToMinutes(time: string): number {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function TimeSlotGroup({
  label,
  icon,
  slots,
  selected,
  onSelect,
  disabledSlots,
  groupRef,
  hasAnyAvailable,
}: {
  label: string;
  icon: React.ReactNode;
  slots: string[];
  selected: string | null;
  onSelect: (t: string) => void;
  disabledSlots: Set<string>;
  groupRef?: React.RefObject<HTMLDivElement | null>;
  hasAnyAvailable: boolean;
}) {
  const availableCount = slots.filter((s) => !disabledSlots.has(s)).length;

  return (
    <div ref={groupRef} style={{ marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            fontSize: "11px",
            fontWeight: 700,
            color: hasAnyAvailable ? "#e4e4e7" : "#52525b",
            letterSpacing: "0.05em",
            textTransform: "uppercase" as const,
          }}
        >
          {icon}
          {label}
        </div>
        <span
          style={{
            fontSize: "10px",
            fontWeight: 600,
            color: availableCount > 0 ? "#aaed2e" : "#52525b",
            background: availableCount > 0 ? "rgba(174, 237, 46, 0.15)" : "rgba(255, 255, 255, 0.05)",
            padding: "2px 8px",
            borderRadius: "10px",
          }}
        >
          {availableCount} / {slots.length}
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
        }}
      >
        {slots.map((slot) => {
          const isSelected = selected === slot;
          const isDisabled = disabledSlots.has(slot);

          return (
            <button
              key={slot}
              onClick={() => !isDisabled && onSelect(slot)}
              disabled={isDisabled}
              style={{
                padding: "12px 4px",
                minHeight: "46px",
                borderRadius: "11px",
                border: isSelected
                  ? "2px solid #aaed2e"
                  : isDisabled
                  ? "1.5px solid rgba(255, 255, 255, 0.04)"
                  : "1.5px solid rgba(255, 255, 255, 0.08)",
                background: isSelected
                  ? "#aaed2e"
                  : isDisabled
                  ? "rgba(255, 255, 255, 0.02)"
                  : "rgba(255, 255, 255, 0.04)",
                color: isSelected
                  ? "#0a0a0a"
                  : isDisabled
                  ? "#3f3f46"
                  : "#ffffff",
                fontSize: "13px",
                fontWeight: isSelected ? 800 : 600,
                cursor: isDisabled ? "not-allowed" : "pointer",
                transition: isDisabled
                  ? "none"
                  : "all 0.2s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
                fontFamily:
                  "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                textAlign: "center" as const,
                boxShadow: isSelected
                  ? "0 3px 14px rgba(174, 237, 46, 0.35)"
                  : "none",
                transform: isSelected ? "scale(1.04)" : "scale(1)",
                opacity: isDisabled ? 0.4 : 1,
                position: "relative" as const,
                textDecoration: isDisabled ? "line-through" : "none",
              }}
              onMouseEnter={(e) => {
                if (!isSelected && !isDisabled) {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.color = "#ffffff";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected && !isDisabled) {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = "#ffffff";
                }
              }}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookCallTimeSlots({
  onSelect,
  selectedDate,
}: BookCallTimeSlotsProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const morningRef = useRef<HTMLDivElement>(null);
  const afternoonRef = useRef<HTMLDivElement>(null);
  const eveningRef = useRef<HTMLDivElement>(null);

  const disabledSlots = useMemo(() => {
    const disabled = new Set<string>();

    if (!selectedDate) return disabled;

    const today = new Date();
    const todayStr = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    if (selectedDate !== todayStr) return disabled;

    const nowMinutes = today.getHours() * 60 + today.getMinutes();

    const allSlots = [
      ...MORNING_SLOTS,
      ...AFTERNOON_SLOTS,
      ...EVENING_SLOTS,
    ];

    for (const slot of allSlots) {
      if (parseTimeToMinutes(slot) <= nowMinutes) {
        disabled.add(slot);
      }
    }

    return disabled;
  }, [selectedDate]);

  // Auto-scroll to first available section
  useEffect(() => {
    if (!selectedDate) return;

    const today = new Date();
    const todayStr = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    if (selectedDate !== todayStr) {
      morningRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const nowMinutes = today.getHours() * 60 + today.getMinutes();

    if (nowMinutes < 12 * 60) {
      morningRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (nowMinutes < 17 * 60) {
      afternoonRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      eveningRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedDate]);

  const handleSelect = (time: string) => {
    setSelected(time);
    onSelect(time);
  };

  const morningAvailable = MORNING_SLOTS.some((s) => !disabledSlots.has(s));
  const afternoonAvailable = AFTERNOON_SLOTS.some((s) => !disabledSlots.has(s));
  const eveningAvailable = EVENING_SLOTS.some((s) => !disabledSlots.has(s));
  const totalAvailable =
    MORNING_SLOTS.length +
    AFTERNOON_SLOTS.length +
    EVENING_SLOTS.length -
    disabledSlots.size;

  const allDisabled = totalAvailable === 0;

  return (
    <div>
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "rgba(174, 237, 46, 0.12)",
            border: "1px solid rgba(174, 237, 46, 0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaed2e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "18px", height: "18px" }}
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <div>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "15px",
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Choose a time slot
          </h3>
          <p
            style={{
              fontSize: "11px",
              color: "#a1a1aa",
              margin: "3px 0 0",
              fontWeight: 500,
            }}
          >
            30-minute slots &middot; IST (UTC+5:30)
          </p>
        </div>
      </div>

      {/* All slots passed warning */}
      {allDisabled && (
        <div
          style={{
            padding: "16px 18px",
            borderRadius: "14px",
            background: "rgba(249, 115, 22, 0.1)",
            border: "1.5px solid rgba(249, 115, 22, 0.3)",
            marginBottom: "18px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",
              background: "rgba(249, 115, 22, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "16px", height: "16px" }}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#fdba74",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              All slots passed for today
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "#fed7aa",
                margin: "3px 0 0",
                fontWeight: 500,
              }}
            >
              Please go back and pick another date
            </p>
          </div>
        </div>
      )}

      {/* Available count banner */}
      {!allDisabled && (
        <div
          style={{
            padding: "10px 14px",
            borderRadius: "10px",
            background: "rgba(174, 237, 46, 0.06)",
            border: "1px solid rgba(174, 237, 46, 0.15)",
            marginBottom: "18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#aaed2e",
              boxShadow: "0 0 6px rgba(174, 237, 46, 0.5)",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#a1a1aa" }}>
            <strong style={{ color: "#ffffff" }}>{totalAvailable}</strong> slots
            available today
          </span>
        </div>
      )}

      {/* Time groups card */}
      <div
        style={{
          background: "#141417",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "18px",
        }}
      >
        <TimeSlotGroup
          label="Morning"
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "12px", height: "12px", color: "#f59e0b" }}
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          }
          slots={MORNING_SLOTS}
          selected={selected}
          onSelect={handleSelect}
          disabledSlots={disabledSlots}
          groupRef={morningRef}
          hasAnyAvailable={morningAvailable}
        />
        <TimeSlotGroup
          label="Afternoon"
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "12px", height: "12px", color: "#f97316" }}
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            </svg>
          }
          slots={AFTERNOON_SLOTS}
          selected={selected}
          onSelect={handleSelect}
          disabledSlots={disabledSlots}
          groupRef={afternoonRef}
          hasAnyAvailable={afternoonAvailable}
        />
        <TimeSlotGroup
          label="Evening"
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "12px", height: "12px", color: "#a78bfa" }}
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          }
          slots={EVENING_SLOTS}
          selected={selected}
          onSelect={handleSelect}
          disabledSlots={disabledSlots}
          groupRef={eveningRef}
          hasAnyAvailable={eveningAvailable}
        />
      </div>

      {/* IST note */}
      <div
        style={{
          marginTop: "16px",
          padding: "14px 16px",
          borderRadius: "12px",
          background: "rgba(174, 237, 46, 0.06)",
          border: "1px solid rgba(174, 237, 46, 0.15)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "8px",
            background: "rgba(174, 237, 46, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaed2e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "15px", height: "15px" }}
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <p
          style={{
            fontSize: "12px",
            color: "#a1a1aa",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Each slot is <strong style={{ color: "#ffffff" }}>30 minutes</strong>.
          Gianni will join via Google Meet.
        </p>
      </div>
    </div>
  );
}
