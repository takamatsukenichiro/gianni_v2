"use client";

import { useState } from "react";

type BookCallCalendarProps = {
  onSelect: (date: string) => void;
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function BookCallCalendar({ onSelect }: BookCallCalendarProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  const isToday = (day: number) => {
    const d = new Date(year, month, day);
    return (
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  };

  const canGoPrev = () => {
    if (year < today.getFullYear()) return false;
    if (year === today.getFullYear() && month <= today.getMonth()) return false;
    return true;
  };

  const handleSelect = (day: number) => {
    if (isPast(day)) return;
    const d = new Date(year, month, day);
    setSelectedDate(d);
    const formatted = `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    onSelect(formatted);
  };

  const prevDisabled = !canGoPrev();

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
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
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
            Pick your preferred date
          </h3>
          <p
            style={{
              fontSize: "11px",
              color: "#a1a1aa",
              margin: "3px 0 0",
              fontWeight: 500,
            }}
          >
            Available all days &middot; {MONTHS[month]} {year}
          </p>
        </div>
      </div>

      {/* Calendar Card */}
      <div
        style={{
          background: "#141417",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "18px",
        }}
      >
        {/* Month Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <button
            onClick={() => {
              if (!prevDisabled)
                setViewDate(new Date(year, month - 1, 1));
            }}
            disabled={prevDisabled}
            aria-label="Previous month"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "10px",
              border: "1.5px solid rgba(255, 255, 255, 0.12)",
              background: "rgba(255, 255, 255, 0.05)",
              color: prevDisabled ? "#52525b" : "#ffffff",
              cursor: prevDisabled ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
              fontFamily: "inherit",
              opacity: prevDisabled ? 0.4 : 1,
            }}
            onMouseEnter={(e) => {
              if (!prevDisabled) {
                e.currentTarget.style.borderColor = "#aaed2e";
                e.currentTarget.style.background = "rgba(174, 237, 46, 0.15)";
                e.currentTarget.style.transform = "scale(1.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (!prevDisabled) {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "scale(1)";
              }
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "15px", height: "15px" }}
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <span
            style={{
              fontWeight: 800,
              fontSize: "15px",
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            {MONTHS[month]} {year}
          </span>

          <button
            onClick={() => setViewDate(new Date(year, month + 1, 1))}
            aria-label="Next month"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "10px",
              border: "1.5px solid rgba(255, 255, 255, 0.12)",
              background: "rgba(255, 255, 255, 0.05)",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#aaed2e";
              e.currentTarget.style.background = "rgba(174, 237, 46, 0.15)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "15px", height: "15px" }}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Day Headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            marginBottom: "8px",
          }}
        >
          {DAYS.map((d) => (
            <div
              key={d}
              style={{
                textAlign: "center",
                fontSize: "10px",
                fontWeight: 700,
                color: "#a1a1aa",
                padding: "6px 0",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "4px",
          }}
        >
          {calendarDays.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} style={{ aspectRatio: "1" }} />;
            }

            const disabled = isPast(day);
            const selected = isSelected(day);
            const todayMark = isToday(day);

            return (
              <button
                key={day}
                onClick={() => handleSelect(day)}
                disabled={disabled}
                aria-label={`${MONTHS[month]} ${day}${todayMark ? " (today)" : ""}${disabled ? " (unavailable)" : ""}${selected ? " (selected)" : ""}`}
                style={{
                  aspectRatio: "1",
                  borderRadius: "12px",
                  border: selected
                    ? "2px solid #aaed2e"
                    : todayMark
                    ? "2px solid rgba(174, 237, 46, 0.4)"
                    : "1.5px solid rgba(255, 255, 255, 0.05)",
                  background: selected
                    ? "#aaed2e"
                    : todayMark
                    ? "rgba(174, 237, 46, 0.08)"
                    : "rgba(255, 255, 255, 0.03)",
                  color: disabled
                    ? "#3f3f46"
                    : selected
                    ? "#0a0a0a"
                    : "#ffffff",
                  fontWeight: selected || todayMark ? 800 : 600,
                  fontSize: "14px",
                  cursor: disabled ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
                  fontFamily:
                    "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  opacity: disabled ? 0.35 : 1,
                  transform: selected ? "scale(1.1)" : "scale(1)",
                  boxShadow: selected
                    ? "0 4px 18px rgba(174, 237, 46, 0.35)"
                    : "none",
                  position: "relative" as const,
                }}
                onMouseEnter={(e) => {
                  if (!disabled && !selected) {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!disabled && !selected) {
                    e.currentTarget.style.background = todayMark
                      ? "rgba(174, 237, 46, 0.08)"
                      : "rgba(255, 255, 255, 0.03)";
                    e.currentTarget.style.borderColor = todayMark
                      ? "rgba(174, 237, 46, 0.4)"
                      : "1.5px solid rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              >
                {day}
                {todayMark && !selected && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#aaed2e",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          marginTop: "16px",
          paddingLeft: "2px",
        }}
      >
        {[
          {
            bg: "#aaed2e",
            border: "#aaed2e",
            label: "Selected",
          },
          {
            bg: "rgba(174, 237, 46, 0.08)",
            border: "rgba(174, 237, 46, 0.4)",
            label: "Today",
            hasDot: true,
          },
          {
            bg: "transparent",
            border: "#3f3f46",
            label: "Unavailable",
            isDashed: true,
          },
        ].map((item) => (
          <div
            key={item.label}
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <span
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "5px",
                background: item.bg,
                border: item.isDashed
                  ? "1.5px dashed #3f3f46"
                  : `1.5px solid ${item.border}`,
                position: "relative" as const,
              }}
            >
              {item.hasDot && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#aaed2e",
                  }}
                />
              )}
            </span>
            <span
              style={{
                fontSize: "10px",
                color: "#a1a1aa",
                fontWeight: 600,
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Available days note */}
      <div
        style={{
          marginTop: "18px",
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
          Available <strong style={{ color: "#ffffff" }}>7 days a week</strong>,
          9:00 AM – 7:30 PM EST
        </p>
      </div>
    </div>
  );
}
