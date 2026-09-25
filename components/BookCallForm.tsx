"use client";

import { useState } from "react";

type BookCallFormProps = {
  date: string;
  time: string;
  onSuccess: () => void;
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 14px",
  borderRadius: "11px",
  border: "1.5px solid rgba(255, 255, 255, 0.12)",
  background: "#141417",
  color: "#ffffff",
  fontSize: "13px",
  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
  fontWeight: 500,
  outline: "none",
  transition: "all 0.25s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
  boxSizing: "border-box" as const,
};

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  borderColor: "#f87171",
  background: "rgba(239, 68, 68, 0.1)",
};

const labelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "11px",
  fontWeight: 700,
  color: "#d4d4d8",
  marginBottom: "7px",
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
};

const requiredDot: React.CSSProperties = {
  width: "5px",
  height: "5px",
  borderRadius: "50%",
  background: "#aaed2e",
  flexShrink: 0,
};

export default function BookCallForm({
  date,
  time,
  onSuccess,
}: BookCallFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const handleFocus = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    e.target.style.borderColor = "#aaed2e";
    e.target.style.boxShadow = "0 0 0 3px rgba(174, 237, 46, 0.2)";
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
    e.target.style.boxShadow = "none";
  };

  const handleFieldBlur = (
    fieldName: string,
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setTouchedFields((prev) => new Set(prev).add(fieldName));
    handleBlur(e);
  };

  const isNameEmpty = touchedFields.has("name") && !name.trim();
  const isEmailEmpty = touchedFields.has("email") && !email.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Please enter your name and email.");
      setStatus("error");
      setTouchedFields(new Set(["name", "email"]));
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, date, time, topic }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      onSuccess();
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        {/* Animated checkmark */}
        <div
          style={{
            width: "76px",
            height: "76px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #aaed2e 0%, #8bc923 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            boxShadow: "0 10px 40px rgba(174, 237, 46, 0.35)",
            animation: "successPop 0.5s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "34px", height: "34px" }}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          style={{
            fontWeight: 900,
            color: "#ffffff",
            fontSize: "22px",
            textTransform: "uppercase",
            marginBottom: "10px",
            letterSpacing: "-0.03em",
          }}
        >
          Call Booked!
        </h3>
        <p
          style={{
            color: "#a1a1aa",
            fontSize: "14px",
            lineHeight: 1.6,
            maxWidth: "300px",
            margin: "0 auto 20px",
          }}
        >
          Confirmation emails sent to both of us. See you on{" "}
          <strong style={{ color: "#aaed2e" }}>{date}</strong> at{" "}
          <strong style={{ color: "#aaed2e" }}>{time}</strong>!
        </p>

        {/* Booking badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            borderRadius: "12px",
            background: "rgba(174, 237, 46, 0.1)",
            border: "1px solid rgba(174, 237, 46, 0.25)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaed2e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "16px", height: "16px" }}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
            {date} &middot; {time}
          </span>
        </div>

        <style>{`
          @keyframes successPop {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
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
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
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
            Your details
          </h3>
          <p
            style={{
              fontSize: "11px",
              color: "#a1a1aa",
              margin: "3px 0 0",
              fontWeight: 500,
            }}
          >
            So Gianni can prepare for the call
          </p>
        </div>
      </div>

      {/* Booking Summary Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "14px 16px",
          borderRadius: "12px",
          background: "rgba(174, 237, 46, 0.08)",
          border: "1px solid rgba(174, 237, 46, 0.2)",
          marginBottom: "22px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "rgba(174, 237, 46, 0.15)",
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
            style={{ width: "16px", height: "16px" }}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <div>
          <span style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff" }}>
            {date}
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#71717a",
              margin: "0 8px",
            }}
          >
            &middot;
          </span>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#aaed2e" }}>
            {time}
          </span>
        </div>
      </div>

      {/* Name */}
      <div style={{ marginBottom: "16px" }}>
        <label style={labelStyle}>
          Full Name <span style={requiredDot} />
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={isNameEmpty ? inputErrorStyle : inputStyle}
          placeholder="Your full name"
          onFocus={handleFocus}
          onBlur={(e) => handleFieldBlur("name", e)}
        />
        {isNameEmpty && (
          <p style={{ fontSize: "11px", color: "#f87171", margin: "4px 0 0", fontWeight: 600 }}>
            Please enter your name
          </p>
        )}
      </div>

      {/* Email */}
      <div style={{ marginBottom: "16px" }}>
        <label style={labelStyle}>
          Email <span style={requiredDot} />
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={isEmailEmpty ? inputErrorStyle : inputStyle}
          placeholder="you@email.com"
          onFocus={handleFocus}
          onBlur={(e) => handleFieldBlur("email", e)}
        />
        {isEmailEmpty && (
          <p style={{ fontSize: "11px", color: "#f87171", margin: "4px 0 0", fontWeight: 600 }}>
            Please enter your email
          </p>
        )}
      </div>

      {/* Phone */}
      <div style={{ marginBottom: "16px" }}>
        <label style={labelStyle}>Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
          placeholder="+1 (555) 123-4567"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {/* Topic */}
      <div style={{ marginBottom: "22px" }}>
        <label style={labelStyle}>What would you like to discuss?</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={{
            ...inputStyle,
            cursor: "pointer",
            appearance: "none" as const,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%23aaed2e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
            paddingRight: "38px",
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="" style={{ background: "#141417", color: "#ffffff" }}>Select a topic (optional)</option>
          <option value="Website Development" style={{ background: "#141417", color: "#ffffff" }}>Website Development</option>
          <option value="Web Application & SaaS" style={{ background: "#141417", color: "#ffffff" }}>Web Application &amp; SaaS</option>
          <option value="Mobile App Development" style={{ background: "#141417", color: "#ffffff" }}>Mobile App Development</option>
          <option value="SEO & GEO Optimization" style={{ background: "#141417", color: "#ffffff" }}>SEO &amp; GEO Optimization</option>
          <option value="Digital Marketing & Growth" style={{ background: "#141417", color: "#ffffff" }}>Digital Marketing &amp; Growth</option>
          <option value="Agentic AI Chatbots & Automation" style={{ background: "#141417", color: "#ffffff" }}>Agentic AI Chatbots &amp; Automation</option>
          <option value="Technical Consultation" style={{ background: "#141417", color: "#ffffff" }}>Technical Consultation</option>
          <option value="General Inquiry" style={{ background: "#141417", color: "#ffffff" }}>General Inquiry</option>
        </select>
      </div>

      {/* Error */}
      {status === "error" && errorMsg && (
        <div
          style={{
            padding: "14px 18px",
            borderRadius: "12px",
            background: "rgba(239, 68, 68, 0.1)",
            border: "1.5px solid rgba(239, 68, 68, 0.3)",
            color: "#f87171",
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: "18px",
              height: "18px",
              flexShrink: 0,
            }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "14px",
          border: "none",
          background: status === "submitting"
            ? "#95d124"
            : "linear-gradient(135deg, #aaed2e 0%, #8bc923 100%)",
          color: "#0a0a0a",
          fontSize: "15px",
          fontWeight: 800,
          fontFamily:
            "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
          cursor: status === "submitting" ? "not-allowed" : "pointer",
          transition: "all 0.25s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
          letterSpacing: "0.02em",
          boxShadow:
            status === "submitting"
              ? "none"
              : "0 6px 28px rgba(174, 237, 46, 0.3)",
        }}
        onMouseEnter={(e) => {
          if (status !== "submitting") {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 8px 36px rgba(174, 237, 46, 0.4)";
          }
        }}
        onMouseLeave={(e) => {
          if (status !== "submitting") {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 6px 28px rgba(174, 237, 46, 0.3)";
          }
        }}
      >
        {status === "submitting" ? (
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <span style={{
              width: "18px",
              height: "18px",
              border: "2.5px solid rgba(10,10,10,0.2)",
              borderTopColor: "#0a0a0a",
              borderRadius: "50%",
              animation: "spin 0.6s linear infinite",
              display: "inline-block",
            }} />
            Booking...
          </span>
        ) : (
          "Confirm Booking →"
        )}
      </button>

      <p
        style={{
          fontSize: "12px",
          color: "#a1a1aa",
          textAlign: "center",
          marginTop: "14px",
          lineHeight: 1.5,
        }}
      >
        Both you and  will receive a confirmation email.
      </p>Gianni

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
