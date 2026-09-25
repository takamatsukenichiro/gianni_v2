"use client";

import { useState, useRef, useEffect } from "react";
import { services } from "@/data/services";
import type { InquiryFormData } from "@/types";

type InquiryFormProps = {
  onSuccess?: () => void;
};

const timelineOptions = [
  "ASAP (2 wks)",
  "1 - 2 Months",
  "2 - 4 Months",
  "4+ Months",
  "Flexible",
];

const budgetRangesMap = {
  USD: ["<$1k", "$1k - $3k", "$3k - $5k", "$5k - $10k", "$10k+"],
};

const countryCodes = [
  { code: "+1", country: "USA / Canada", flag: "🇺🇸", defaultCurrency: "USD" as const },
  { code: "+44", country: "UK", flag: "🇬🇧", defaultCurrency: "USD" as const },
  { code: "+61", country: "Australia", flag: "🇦🇺", defaultCurrency: "USD" as const },
  // { code: "+971", country: "UAE", flag: "🇦🇪", defaultCurrency: "USD" as const },
  // { code: "+65", country: "Singapore", flag: "🇸🇬", defaultCurrency: "USD" as const },
  // { code: "+49", country: "Germany", flag: "🇩🇪", defaultCurrency: "USD" as const },
  // { code: "+33", country: "France", flag: "🇫🇷", defaultCurrency: "USD" as const },
  // { code: "+966", country: "Saudi Arabia", flag: "🇸🇦", defaultCurrency: "USD" as const },
  // { code: "+81", country: "Japan", flag: "🇯🇵", defaultCurrency: "USD" as const },
  // { code: "+91", country: "India", flag: "🇮🇳", defaultCurrency: "INR" as const },
  { code: "+", country: "Other Country", flag: "🌐", defaultCurrency: "USD" as const },
];

/* ── Custom Glassmorphism Country Code Selector ── */
function CountryCodeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (code: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = countryCodes.find((c) => c.code === value) || countryCodes[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl border bg-[#141417] text-white text-xs sm:text-sm font-bold cursor-pointer transition-all duration-200"
        style={{
          borderColor: isOpen ? "#aaed2e" : "rgba(255, 255, 255, 0.15)",
          boxShadow: isOpen ? "0 0 0 3px rgba(170, 237, 46, 0.15)" : "none",
        }}
      >
        <span className="text-sm sm:text-base leading-none">{selected.flag}</span>
        <span className="text-[#aaed2e] font-[family-name:var(--font-space-grotesk)] font-bold">
          {selected.code}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaed2e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3 transition-transform duration-200"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="popup-form-scroll absolute top-[calc(100%+6px)] left-0 z-50 w-[210px] max-w-[85vw] max-h-[220px] overflow-y-auto bg-[#0d0d0f] rounded-xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.9),0_0_20px_rgba(170,237,46,0.1)] p-1.5"
        >
          {countryCodes.map((c) => {
            const isSelected = c.code === value;
            return (
              <button
                key={c.code + c.country}
                type="button"
                onClick={() => {
                  onChange(c.code);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between p-2 rounded-lg border-0 text-xs font-semibold cursor-pointer text-left transition-all duration-150"
                style={{
                  background: isSelected ? "rgba(170, 237, 46, 0.14)" : "transparent",
                  color: isSelected ? "#aaed2e" : "#ffffff",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{c.flag}</span>
                  <span className="truncate">{c.country}</span>
                </div>
                <span style={{ color: isSelected ? "#aaed2e" : "#888895", fontWeight: 700, fontSize: "11px" }}>
                  {c.code}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Helper Icon Mapping for Service Categories ── */
function getServiceCategoryIcon(iconType: string) {
  switch (iconType) {
    case "website":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "webapp":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case "desktop":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M6 18h12M10 17v4M14 17v4" />
        </svg>
      );
    case "uiux":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "seo":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "marketing":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      );
    case "chatbot":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4M8 15h.01M16 15h.01" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
  }
}

/* ── Clean & Beautiful Direct Multi-Select Service Chips (Zero scroll, instant tap) ── */
function ServicesSelector({
  selectedServices,
  onToggle,
  onSelectAll,
  onClearAll,
}: {
  selectedServices: string[];
  onToggle: (title: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-gray-400 tracking-wider uppercase m-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
          Services Needed
        </label>
        <div className="flex items-center gap-2">
          {selectedServices.length > 0 ? (
            <>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#aaed2e]/15 text-[#aaed2e] border border-[#aaed2e]/30">
                {selectedServices.length} Selected
              </span>
              <button
                type="button"
                onClick={onClearAll}
                className="text-[10px] font-bold text-gray-400 hover:text-red-400 cursor-pointer transition-colors"
              >
                Clear
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={onSelectAll}
              className="text-[10px] font-bold text-[#aaed2e] hover:underline cursor-pointer transition-colors"
            >
              Select All
            </button>
          )}
        </div>
      </div>

      {/* Clean Multi-Select Chip Grid (Zero scroll, instant 1-tap select) */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {services.map((s) => {
          const isSelected = selectedServices.includes(s.title);
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onToggle(s.title)}
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? "bg-[#aaed2e] text-[#0a0a0a] border-[#aaed2e] shadow-[0_0_14px_rgba(170,237,46,0.35)] scale-[1.02]"
                  : "bg-white/[0.04] text-gray-300 border-white/10 hover:bg-white/[0.08] hover:border-[#aaed2e]/40 hover:text-white"
              }`}
            >
              {/* Animated checkmark or category icon */}
              {isSelected ? (
                <svg viewBox="0 0 14 14" fill="none" stroke="#0a0a0a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0">
                  <polyline points="2 7 5.5 10.5 12 3.5" />
                </svg>
              ) : (
                <span className="opacity-60 text-gray-400 shrink-0">
                  {getServiceCategoryIcon(s.iconType)}
                </span>
              )}
              <span className="truncate max-w-[200px] sm:max-w-none">{s.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function InquiryForm({ onSuccess }: InquiryFormProps) {
  // Default to INR for India / mobile by default, USD for international
  const [currency, setCurrency] = useState<"USD">("USD");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");

  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    budget: "",
    timeline: "",
    description: "",
    referralSource: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    description?: string;
  }>({});

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle Country Code Change with Auto Currency Sync
  const handleCountryCodeChange = (code: string) => {
    setSelectedCountryCode(code);
    const country = countryCodes.find((c) => c.code === code);
    if (country) {
      setCurrency(country.defaultCurrency);
    }
  };

  const toggleService = (serviceTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceTitle)
        ? prev.services.filter((s) => s !== serviceTitle)
        : [...prev.services, serviceTitle],
    }));
  };

  const setBudget = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      budget: prev.budget === val ? "" : val,
    }));
  };

  const setTimeline = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      timeline: prev.timeline === val ? "" : val,
    }));
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; phone?: string; description?: string } = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s'.-]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should only contain letters and spaces";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (if provided)
    if (formData.phone.trim()) {
      const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
      if (!/^\d{6,15}$/.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid phone number (6-15 digits)";
      }
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "Project details are required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Please describe your project in at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMsg("Please fix the errors above before submitting.");
      setStatus("error");
      return;
    }

    const fullPhone = formData.phone.trim()
      ? `${selectedCountryCode} ${formData.phone.trim()}`
      : "";

    const formattedBudget = formData.budget
      ? `${formData.budget} (${currency})`
      : "";

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: fullPhone,
          budget: formattedBudget,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8 sm:py-10 px-4">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-5">
          <div className="absolute inset-[-8px] rounded-full bg-[radial-gradient(circle,rgba(170,237,46,0.4)_0%,rgba(170,237,46,0)_70%)] animate-pulse" />
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#aaed2e] to-[#75c918] flex items-center justify-center shadow-[0_12px_40px_rgba(170,237,46,0.45)] relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        <h3 className="font-black text-xl sm:text-2xl md:text-3xl text-white mb-2 tracking-tight font-[family-name:var(--font-space-grotesk)]">
          Successfully Sent!
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto mb-5">
          Thank you, <span className="text-[#aaed2e] font-bold">{formData.name}</span>! Your proposal request has been received. I&apos;ll review it and get back to you within 24 hours.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#aaed2e]/10 border border-[#aaed2e]/25 text-[#aaed2e] text-xs sm:text-sm font-bold">
          <svg viewBox="0 0 24 24" fill="none" stroke="#aaed2e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          Direct Line: gianni@giannivilayhane.com
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="inquiry-form flex flex-col gap-2.5 sm:gap-3">
      {/* Row 1 — Name, Email, Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
        <Field label="Your Name" required error={errors.name}>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder="e.g. Alex Morgan"
            style={{
              borderColor: errors.name ? "rgba(239, 68, 68, 0.7)" : undefined,
              background: errors.name ? "rgba(239, 68, 68, 0.05)" : undefined,
            }}
          />
        </Field>

        <Field label="Email Address" required error={errors.email}>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="you@company.com"
            style={{
              borderColor: errors.email ? "rgba(239, 68, 68, 0.7)" : undefined,
              background: errors.email ? "rgba(239, 68, 68, 0.05)" : undefined,
            }}
          />
        </Field>

        <Field label="Phone / WhatsApp" error={errors.phone}>
          <div className="flex gap-1.5">
            {/* Custom Country Code Dropdown with Auto Currency Sync */}
            <CountryCodeSelect
              value={selectedCountryCode}
              onChange={handleCountryCodeChange}
            />

            {/* Phone Input */}
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              placeholder={selectedCountryCode === "+1" ? "(555) 123-4567" : "Mobile number"}
              style={{
                borderColor: errors.phone ? "rgba(239, 68, 68, 0.7)" : undefined,
                background: errors.phone ? "rgba(239, 68, 68, 0.05)" : undefined,
              }}
            />
          </div>
        </Field>
      </div>

      {/* Row 2 — Company & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3">
        <div className="md:col-span-4">
          <Field label="Company / Brand">
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Optional"
            />
          </Field>
        </div>
        <div className="md:col-span-8">
          <label className="block text-[11px] sm:text-xs font-bold text-gray-400 mb-1.5 tracking-wider uppercase">
            Expected Timeline
          </label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {timelineOptions.map((t) => {
              const selected = formData.timeline === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTimeline(t)}
                  className="chip-btn"
                  data-selected={selected}
                >
                  {selected && (
                    <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                      <polyline points="2 7 5.5 10.5 12 3.5" />
                    </svg>
                  )}
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Row 3 — Services (Left) & Budget (Right with Live Currency Toggle) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
        {/* Services Needed — Clean & Direct Multi-Select Chips */}
        <ServicesSelector
          selectedServices={formData.services}
          onToggle={toggleService}
          onSelectAll={() =>
            setFormData((prev) => ({
              ...prev,
              services: services.map((s) => s.title),
            }))
          }
          onClearAll={() =>
            setFormData((prev) => ({
              ...prev,
              services: [],
            }))
          }
        />

        {/* Budget Range with USD Currency Selector */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-gray-400 tracking-wider uppercase m-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Estimated Budget
            </label>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {budgetRangesMap.USD.map((b) => {
              const selected = formData.budget === b;
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(b)}
                  className="budget-chip"
                  data-selected={selected}
                >
                  {selected ? (
                    <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                      <polyline points="2 7 5.5 10.5 12 3.5" />
                    </svg>
                  ) : (
                    <span className="text-[10px] opacity-40 text-[#aaed2e]">
                      $
                    </span>
                  )}
                  {b}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Row 4 — Description */}
      <div>
        <label className="block text-[11px] sm:text-xs font-bold mb-1.5 tracking-wider uppercase" style={{ color: errors.description ? "#ff5555" : "#b4b4c2" }}>
          Project Details <span className="text-[#aaed2e]">*</span>
        </label>
        <textarea
          required
          rows={2}
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
            if (errors.description) setErrors((prev) => ({ ...prev, description: undefined }));
          }}
          placeholder="Tell me about your project goals, key features, or design preferences..."
          style={{
            resize: "none" as const,
            lineHeight: 1.4,
            borderColor: errors.description ? "rgba(239, 68, 68, 0.7)" : undefined,
            background: errors.description ? "rgba(239, 68, 68, 0.05)" : undefined,
          }}
        />
        {errors.description && (
          <span className="block text-[11px] text-[#ff5555] font-semibold mt-1">
            {errors.description}
          </span>
        )}
      </div>

      {/* Error Message */}
      {status === "error" && errorMsg && (
        <div className="p-3 rounded-xl bg-red-900/20 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {errorMsg}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 px-4 rounded-xl border-0 text-[#0a0a0a] text-sm font-extrabold cursor-pointer transition-all duration-200 tracking-wide font-[family-name:var(--font-space-grotesk)] shadow-[0_4px_20px_rgba(170,237,46,0.35)] mt-1.5 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed"
        style={{
          background: status === "submitting" ? "#88b824" : "linear-gradient(135deg, #aaed2e 0%, #95d622 100%)",
        }}
      >
        {status === "submitting" ? (
          <span className="inline-flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4 animate-spin">
              <path d="M21 12a9 9 0 11-6.219-8.56" />
            </svg>
            Sending Proposal Request...
          </span>
        ) : (
          <span className="inline-flex items-center justify-center gap-2">
            Send Project Details
            <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        )}
      </button>

      <p className="text-[11px] text-gray-500 text-center mt-0.5 mb-0 flex items-center justify-center gap-1.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
        <span>Privacy guaranteed. Your idea and contact info remain 100% confidential.</span>
      </p>

      <style>{`
        .inquiry-form input,
        .inquiry-form select,
        .inquiry-form textarea {
          width: 100%;
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #141417;
          color: #ffffff;
          font-size: 13px;
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-weight: 500;
          outline: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .inquiry-form input,
          .inquiry-form select,
          .inquiry-form textarea {
            padding: 11px 14px;
            font-size: 13.5px;
          }
        }
        .inquiry-form input:focus,
        .inquiry-form select:focus,
        .inquiry-form textarea:focus {
          border-color: #aaed2e !important;
          box-shadow: 0 0 0 3px rgba(170, 237, 46, 0.18), 0 0 15px rgba(170, 237, 46, 0.12) !important;
          background: #18181c !important;
        }
        .inquiry-form input::placeholder,
        .inquiry-form textarea::placeholder {
          color: #777788;
        }
        .chip-btn, .budget-chip {
          padding: 6px 10px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.85);
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.21, 0.47, 0.32, 0.98);
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          line-height: 1.4;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        @media (min-width: 640px) {
          .chip-btn, .budget-chip {
            padding: 7px 13px;
            font-size: 12px;
            gap: 6px;
          }
        }
        .chip-btn:hover:not([data-selected="true"]),
        .budget-chip:hover:not([data-selected="true"]) {
          border-color: rgba(170, 237, 46, 0.5) !important;
          background: rgba(170, 237, 46, 0.08) !important;
          color: #ffffff !important;
          transform: translateY(-1px);
        }
        .chip-btn[data-selected="true"],
        .budget-chip[data-selected="true"] {
          border-color: #aaed2e !important;
          background: rgba(170, 237, 46, 0.16) !important;
          color: #aaed2e !important;
          box-shadow: 0 0 14px rgba(170, 237, 46, 0.22) !important;
          font-weight: 700 !important;
        }
      `}</style>
    </form>
  );
}

/* ── Reusable field wrapper ── */
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[11px] sm:text-xs font-bold mb-1.5 tracking-wider uppercase" style={{ color: error ? "#ff5555" : "#b4b4c2" }}>
        {label} {required && <span className="text-[#aaed2e]">*</span>}
      </label>
      {children}
      {error && (
        <span className="block text-[11px] text-[#ff5555] font-semibold mt-1">
          {error}
        </span>
      )}
    </div>
  );
}
