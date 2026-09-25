"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import InquiryPopup from "./ui/InquiryPopup";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  isProfanity?: boolean;
  hasTyped?: boolean;
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const defaultGreeting: Message = {
  id: "greeting",
  sender: "bot",
  text: "Welcome! I am Gianni Vilayhane's AI Assistant. I can help scope your custom Website, Web Application, Mobile App, or Technical SEO project, provide technical insights, and answer all questions.\n\n[Explore About Me Page](/about)\n\n[Explore Services Page](/services)",
  timestamp: formatTime(new Date()),
  hasTyped: false,
};

const subscribe = () => () => { };

const formatCountdown = (seconds: number): string => {
  if (!seconds || seconds <= 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

// Embedded Agentic AI Direct Booking Card Component with visible calendar icon
function EmbeddedAgenticBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "11:00",
    topic: "Web Application & SaaS",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) {
      setErrorMsg("Please fill in your name, email, and preferred date.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Booking submission failed. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Agentic booking submit error:", err);
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full my-2.5 p-3.5 rounded-xl bg-[#121c0b] border border-[#aaed2e]/40 text-left space-y-1.5 shadow-lg shadow-[#aaed2e]/10">
        <div className="flex items-center gap-2 text-[#aaed2e] font-extrabold text-xs">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Discovery Call Confirmed!</span>
        </div>
        <p className="text-[11px] text-gray-300">
          Thank you, <strong className="text-white">{formData.name}</strong>! Gianni has received your booking for <strong className="text-[#aaed2e]">{formData.date} at {formData.time}</strong>.
        </p>
        <p className="text-[10px] text-gray-400">
          A confirmation summary has been sent. Gianni will reach out to <span className="text-white">{formData.email}</span> prior to the meeting.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full my-2.5 p-3 rounded-xl bg-[#141419] border border-white/15 space-y-2 text-left shadow-lg select-text">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1">
        <span className="font-extrabold text-xs text-[#aaed2e] flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-[#aaed2e]">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Agentic AI Direct Booking
        </span>
        <span className="text-[9px] font-bold text-gray-400 bg-white/5 px-2 py-0.5 rounded">30-Min Discovery Call</span>
      </div>

      {errorMsg && <p className="text-[10px] text-red-400 font-medium">{errorMsg}</p>}

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Your Name *</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#0d0d0f] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#aaed2e]"
          />
        </div>
        <div>
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Email *</label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#0d0d0f] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#aaed2e]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Phone / WhatsApp</label>
          <input
            type="text"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#0d0d0f] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#aaed2e]"
          />
        </div>
        <div>
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Project Topic</label>
          <select
            value={formData.topic}
            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            className="w-full bg-[#0d0d0f] border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-[#aaed2e] cursor-pointer"
          >
            <option value="Web Application & SaaS">Web App / SaaS</option>
            <option value="Mobile App Development">Mobile App (iOS/Android)</option>
            <option value="Backend Systems & Microservices">Backend Architecture</option>
            <option value="Technical SEO & GEO">Technical SEO</option>
            <option value="Other Consulting">Other Consulting</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#aaed2e]">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Preferred Date *
          </label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-[#0d0d0f] border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-[#aaed2e] [color-scheme:dark] cursor-pointer font-medium"
          />
        </div>
        <div>
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#aaed2e]">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Preferred Time
          </label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full bg-[#0d0d0f] border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-[#aaed2e] [color-scheme:dark] cursor-pointer font-medium"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-2 mt-1 rounded-lg bg-[#aaed2e] text-[#0a0a0a] font-extrabold text-xs hover:bg-[#bbf646] active:scale-95 transition-all cursor-pointer shadow-md disabled:opacity-50 flex items-center justify-center gap-1.5"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        {status === "loading" ? "Confirming Booking..." : "Confirm & Schedule Discovery Call"}
      </button>
    </form>
  );
}

// Embedded Social Media Links Card Component with official icons
function EmbeddedSocialLinksCard() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gianne-vilayhane",
      color: "bg-[#0077b5]/20 hover:bg-[#0077b5]/35 border-[#0077b5]/50 text-blue-300",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#0077b5]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/giannivilayhane",
      color: "bg-white/10 hover:bg-white/20 border-white/25 text-gray-200",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full my-2.5 p-3 rounded-xl bg-[#141419] border border-white/15 space-y-2 text-left shadow-lg select-text">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1">
        <span className="font-extrabold text-xs text-[#aaed2e] flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-[#aaed2e]">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          Follow Gianni Vilayhane
        </span>
        <span className="text-[9px] font-bold text-gray-400 bg-white/5 px-2 py-0.5 rounded">Social Media</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-2.5 py-2 rounded-lg border ${link.color} font-bold text-xs transition-all duration-150 hover:scale-[1.02] active:scale-95 shadow-sm group`}
          >
            {link.icon}
            <span>{link.name}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

// Smooth Typewriter Effect for Bot Messages with blinking cursor (runs typing animation only once per message)
function TypewriterMessage({
  text,
  hasTyped,
  onComplete,
  renderFormattedText,
}: {
  text: string;
  hasTyped?: boolean;
  onComplete?: () => void;
  renderFormattedText: (t: string) => React.ReactNode;
}) {
  const [displayedLength, setDisplayedLength] = useState(hasTyped ? text.length : 0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (hasTyped) {
      setDisplayedLength(text.length);
      return;
    }

    setDisplayedLength(0);
    let index = 0;
    const stepSize = 3;
    const interval = setInterval(() => {
      index += stepSize;
      if (index >= text.length) {
        setDisplayedLength(text.length);
        clearInterval(interval);
        onCompleteRef.current?.();
      } else {
        setDisplayedLength(index);
      }
    }, 15);

    return () => {
      clearInterval(interval);
    };
  }, [text, hasTyped]);

  const currentText = text.substring(0, displayedLength);

  return (
    <div className="flex flex-col items-start gap-1 w-full">
      {renderFormattedText(currentText)}
      {!hasTyped && displayedLength < text.length && (
        <span className="inline-block w-1.5 h-3 bg-[#aaed2e] animate-pulse ml-0.5" />
      )}
    </div>
  );
}

export default function AIChatBot() {
  const pathname = usePathname();
  const router = useRouter();
  const isMounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("gianni-chat-open") === "true";
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"focused" | "other">("focused");
  const [profanityCount, setProfanityCount] = useState(0);

  // Auto-minimize AI box on mobile screens whenever the route/page changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
      setIsExpanded(false);
      localStorage.setItem("gianni-chat-open", "false");
    }
  }, [pathname]);

  // Persistent Full Website 30-Minute Lockout Countdown state
  const [lockoutRemaining, setLockoutRemaining] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const savedLockout =
      localStorage.getItem("gianni-website-lockout-until") ||
      localStorage.getItem("gianni-chat-lockout-until");
    if (!savedLockout) return 0;
    const remaining = Math.max(0, Math.ceil((Number(savedLockout) - Date.now()) / 1000));
    return remaining;
  });

  // Lock body & html scroll and sync website-locked-active class
  useEffect(() => {
    if (lockoutRemaining > 0) {
      document.documentElement.classList.add("website-locked-active");
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.classList.remove("website-locked-active");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.classList.remove("website-locked-active");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [lockoutRemaining]);

  // Live 1-second countdown tick timer & Auto-clear chat on expiry
  useEffect(() => {
    if (lockoutRemaining <= 0) return;

    const interval = setInterval(() => {
      const savedLockout =
        localStorage.getItem("gianni-website-lockout-until") ||
        localStorage.getItem("gianni-chat-lockout-until");
      if (!savedLockout) {
        setLockoutRemaining(0);
        clearInterval(interval);
        return;
      }
      const remaining = Math.max(0, Math.ceil((Number(savedLockout) - Date.now()) / 1000));

      if (remaining <= 0) {
        setLockoutRemaining(0);
        localStorage.removeItem("gianni-website-lockout-until");
        localStorage.removeItem("gianni-chat-lockout-until");
        localStorage.removeItem("gianni-chat-messages");
        setMessages([defaultGreeting]);
        setProfanityCount(0);
        document.body.style.overflow = "";
        clearInterval(interval);
      } else {
        setLockoutRemaining(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lockoutRemaining]);

  // Clean expired lockout on initial load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedLockout =
      localStorage.getItem("gianni-website-lockout-until") ||
      localStorage.getItem("gianni-chat-lockout-until");
    if (savedLockout && Number(savedLockout) <= Date.now()) {
      localStorage.removeItem("gianni-website-lockout-until");
      localStorage.removeItem("gianni-chat-lockout-until");
      localStorage.removeItem("gianni-chat-messages");
      setMessages([defaultGreeting]);
      setProfanityCount(0);
    }
  }, []);

  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [{ ...defaultGreeting, hasTyped: false }];
    const savedMessages = localStorage.getItem("gianni-chat-messages");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const seenKeys = new Set<string>();
          return parsed.map((msg: Message, idx: number) => {
            let key = msg.id;
            if (!key || seenKeys.has(key)) {
              key = `msg_${idx}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
            }
            seenKeys.add(key);
            // Default saved messages to already typed so they don't re-type on reload
            return { ...msg, id: key, hasTyped: msg.hasTyped ?? true };
          });
        }
      } catch (e) {
        console.error("Error parsing saved messages", e);
      }
    }
    return [{ ...defaultGreeting, hasTyped: false }];
  });

  const markMessageAsTyped = useCallback((id: string) => {
    setMessages((prev) => {
      const target = prev.find((m) => m.id === id);
      if (!target || target.hasTyped) return prev;
      return prev.map((m) => (m.id === id ? { ...m, hasTyped: true } : m));
    });
  }, []);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Save messages to localStorage
  useEffect(() => {
    if (!isMounted || messages.length === 0) return;
    localStorage.setItem("gianni-chat-messages", JSON.stringify(messages));
  }, [messages, isMounted]);

  // Sync body class when chat open state changes
  useEffect(() => {
    if (!isMounted) return;
    if (isOpen) {
      document.body.classList.add("chat-open");
    } else {
      document.body.classList.remove("chat-open");
    }
    return () => {
      document.body.classList.remove("chat-open");
    };
  }, [isOpen, isMounted]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen && activeTab === "focused") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, activeTab, isOpen]);

  if (!isMounted) return null;

  const toggleChat = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    localStorage.setItem("gianni-chat-open", String(nextState));
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
    if (!isOpen) setIsOpen(true);
  };

  // Render text with interactive navbar page buttons, section buttons & Embedded Agentic Booking Form
  const renderFormattedText = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\((#[^)]+|\/[^)]+|https?:\/\/[^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const label = match[1];
      const target = match[2];

      if (target === "#ai-booking" || target === "#book-call" || target === "book-call") {
        parts.push(
          <div key={`agentic_booking_${match.index}_${Math.random().toString(36).substring(2, 5)}`} className="w-full">
            <EmbeddedAgenticBookingForm />
          </div>
        );
      } else if (target === "#social-links" || target === "#social" || target === "social-links") {
        parts.push(
          <div key={`social_card_${match.index}_${Math.random().toString(36).substring(2, 5)}`} className="w-full">
            <EmbeddedSocialLinksCard />
          </div>
        );
      } else if (target.startsWith("#") || target.startsWith("/")) {
        parts.push(
          <button
            key={`btn_${match.index}_${Math.random().toString(36).substring(2, 5)}`}
            onClick={(e) => {
              e.preventDefault();
              // On mobile screens, automatically minimize the AI box so the user immediately sees the destination page
              if (typeof window !== "undefined" && window.innerWidth < 768) {
                setIsOpen(false);
                setIsExpanded(false);
                localStorage.setItem("gianni-chat-open", "false");
              }

              if (target.startsWith("#")) {
                const sectionId = target.substring(1);
                const el = document.getElementById(sectionId);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  router.push(`/#${sectionId}`);
                }
              } else {
                router.push(target);
              }
            }}
            className="my-1.5 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#aaed2e] text-[#0a0a0a] font-extrabold text-[11px] hover:bg-[#bbf646] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md shadow-[#aaed2e]/15 border border-[#aaed2e] w-fit"
          >
            <span>{label}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        );
      } else {
        const isInternal = target.startsWith("/") || target.startsWith("#");
        parts.push(
          <a
            key={`link_${match.index}_${Math.random().toString(36).substring(2, 5)}`}
            href={target}
            onClick={() => {
              if (isInternal && typeof window !== "undefined" && window.innerWidth < 768) {
                setIsOpen(false);
                setIsExpanded(false);
                localStorage.setItem("gianni-chat-open", "false");
              }
            }}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noopener noreferrer"}
            className="text-[#aaed2e] underline font-bold hover:text-white"
          >
            {label}
          </a>
        );
      }
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Real AI completion via Google Gemini API / API route with profanity detection & full website 30-min lockout
  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping || lockoutRemaining > 0) return;

    // Detect Slang / Profanity in User Input
    const profanityRegex = /(?:fuck|shit|bitch|bastard|asshole|dick|pussy|cunt|motherfucker|bullshit|stupid|idiot|dumb|nonsense|rubbish|trash|junk|scam|waste dev|waste developer)/i;
    const isSlang = profanityRegex.test(text);

    if (isSlang) {
      if (profanityCount >= 1) {
        // SECOND STRIKE: PERSISTENT 30-MINUTE FULL WEBSITE LOCKOUT
        const lockoutUntil = Date.now() + 30 * 60 * 1000;
        localStorage.setItem("gianni-website-lockout-until", String(lockoutUntil));
        localStorage.setItem("gianni-chat-lockout-until", String(lockoutUntil));
        setLockoutRemaining(1800);

        const userProfanityMsg: Message = {
          id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          sender: "user",
          text,
          timestamp: formatTime(new Date()),
          isProfanity: true,
        };

        const lockoutBotMsg: Message = {
          id: `bot_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          sender: "bot",
          text: "⛔ Website Access Temporarily Suspended for 30 Minutes!\n\nDue to repeated inappropriate language, your access to this website has been locked for 30 minutes. Please return when the countdown timer expires.",
          timestamp: formatTime(new Date()),
          isProfanity: true,
          hasTyped: false,
        };

        setMessages((prev) => [...prev, userProfanityMsg, lockoutBotMsg]);
        setInputValue("");
        return;
      } else {
        // FIRST STRIKE: Highlight user message in RED with red working SVG icon
        const userProfanityMsg: Message = {
          id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          sender: "user",
          text,
          timestamp: formatTime(new Date()),
          isProfanity: true,
        };

        const warningBotMsg: Message = {
          id: `bot_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          sender: "bot",
          text: "⚠️ Warning: Please maintain a respectful and professional tone. If inappropriate language is used again, access to the website will be locked for 30 minutes.",
          timestamp: formatTime(new Date()),
          isProfanity: true,
          hasTyped: false,
        };

        setMessages((prev) => [...prev, userProfanityMsg, warningBotMsg]);
        setProfanityCount(1);
        setInputValue("");
        return;
      }
    }

    const userMsg: Message = {
      id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      sender: "user",
      text,
      timestamp: formatTime(new Date()),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      const data = await response.json();

      const botMsg: Message = {
        id: `bot_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        sender: "bot",
        text:
          data.text ||
          "Gianni's official contact details:\n\n- Email: gianni@giannivilayhane.com\n- WhatsApp: Scan QR Code in top navbar to message!\n\n[Explore About Me Page](/about)",
        timestamp: formatTime(new Date()),
        hasTyped: false,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Gemini AI Chatbot error:", error);
      const botMsg: Message = {
        id: `bot_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        sender: "bot",
        text: "Gianni's official contact details:\n\n- Email: gianni@giannivilayhane.com\n- WhatsApp: Scan QR Code in top navbar to message!\n\n[Explore About Me Page](/about)",
        timestamp: formatTime(new Date()),
        hasTyped: false,
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    localStorage.removeItem("gianni-chat-messages");
    setProfanityCount(0);
    setMessages([{ ...defaultGreeting, hasTyped: false }]);
  };

  const quickReplies = [
    { label: "Book a Free Call", text: "I want to book a free 30-minute discovery call with Gianni." },
    { label: "Follow & Social Media", text: "What are Gianni's social media handles and follow links?" },
    { label: "About Gianni", text: "Who is Gianni Vilayhane? Tell me more about this developer." },
    { label: "Email & Contact", text: "What is Gianni's email ID and phone number?" },
    { label: "Web Application", text: "What services do you offer for Web Application development?" },
    { label: "Mobile App", text: "Tell me about Mobile App development for iOS & Android." },
    { label: "Pricing & Quote", text: "What is your pricing model and how can I get a project quote?" },
  ];

  if (lockoutRemaining > 0) {
    return (
      <div
        id="website-lockout-overlay"
        className="fixed inset-0 top-0 left-0 w-screen h-screen z-[999999] bg-[#050507] text-white flex flex-col items-center justify-center p-4 select-none overflow-hidden overscroll-none touch-none font-sans"
      >
        {/* Ambient Red Blur Aura */}
        <div className="absolute w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Centered Premium Lockout Card */}
        <div className="relative z-10 max-w-md w-full bg-[#0d0d12] border border-red-500/50 rounded-3xl p-8 text-center flex flex-col items-center gap-5 shadow-[0_25px_80px_rgba(239,68,68,0.3)]">
          {/* Pulsing Shield Warning Icon */}
          <div className="relative p-4 rounded-2xl bg-red-950/80 border border-red-500/40">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-red-500 animate-pulse">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
              Website Access Suspended
            </h2>
            <p className="text-xs text-red-200/80 leading-relaxed max-w-xs mx-auto">
              Your access to this entire portfolio has been temporarily locked for <strong className="text-red-400">30 minutes</strong> due to repeated inappropriate language.
            </p>
          </div>

          {/* Giant Digital Countdown Timer */}
          <div className="w-full p-5 rounded-2xl bg-[#15080a] border border-red-500/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_10px_30px_rgba(239,68,68,0.15)] flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-black text-red-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              Time Remaining Until Unlock
            </span>

            <span className="font-mono text-4xl sm:text-5xl font-black text-red-500 tracking-widest drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">
              {formatCountdown(lockoutRemaining)}
            </span>
          </div>

          <div className="text-[11px] text-gray-400 space-y-1">
            <p>Closing or refreshing your browser will <strong className="text-white">NOT</strong> bypass the countdown.</p>
            <p className="text-[#aaed2e] font-semibold">
              Full website access will automatically restore when the timer reaches 00:00.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed z-40 transition-all duration-300 ease-out select-none bottom-[58px] sm:bottom-0 left-3 right-3 sm:left-auto ${isExpanded
          ? "sm:right-4 sm:w-[720px] max-w-[95vw]"
          : "sm:right-8 sm:w-[410px]"
        }`}
    >
      <style>{`
          .aichat-scroll::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          .aichat-scroll::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
          }
          .aichat-scroll::-webkit-scrollbar-thumb {
            background: rgba(170, 237, 46, 0.35);
            border-radius: 4px;
          }
          .aichat-scroll::-webkit-scrollbar-thumb:hover {
            background: #aaed2e;
          }
          .aichat-hide-scroll::-webkit-scrollbar {
            display: none;
          }
          .aichat-hide-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      <div
        className={`bg-[#0d0d0f] border border-white/15 border-t-[#aaed2e] border-t-2 border-b-0 rounded-t-2xl rounded-b-none shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(170,237,46,0.15)] flex flex-col overflow-hidden transition-all duration-300 ease-out w-full ${isOpen
            ? isExpanded
              ? "h-[88vh] max-h-[680px]"
              : "h-[80vh] max-h-[560px] sm:h-[540px]"
            : "h-[52px]"
          }`}
      >
        {/* ═══ CHAT HEADER ═══ */}
        <div
          onClick={toggleChat}
          className="h-[54px] min-h-[54px] px-4 bg-[#121215] border-b border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/[0.04] transition-colors duration-150"
        >
          <div className="flex items-center gap-3">
            {/* Avatar with status dot */}
            <div className="relative w-8 h-8 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden border border-[#aaed2e]/40 shadow-sm">
                <img
                  src="/gianni/gianni_pf.png"
                  alt="Gianni Vilayhane"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#aaed2e] rounded-full border-2 border-[#0d0d0f] flex items-center justify-center">
                <span className="absolute w-full h-full bg-[#aaed2e] rounded-full animate-ping opacity-75" />
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-white tracking-tight">Gianni&apos;s AI Assistant</span>
                <span className="text-[9px] font-black text-[#aaed2e] bg-[#aaed2e]/15 px-1.5 py-0.5 rounded border border-[#aaed2e]/30 uppercase">AI</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${lockoutRemaining > 0 ? "bg-red-500 animate-pulse" : "bg-[#aaed2e]"}`} />
                {lockoutRemaining > 0 ? `Website Suspended (${formatCountdown(lockoutRemaining)})` : "Online • Active Response"}
              </span>
            </div>
          </div>

          {/* Controls: Reset, Expand/Shrink, Minimize */}
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {/* Reset Chat */}
            <button
              onClick={clearChat}
              disabled={lockoutRemaining > 0}
              className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer disabled:opacity-30"
              title="Reset Chat"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
                <path d="M23 4v6h-6" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            </button>

            {/* Expand / Restore Big Screen Button */}
            <button
              onClick={toggleExpand}
              className="hidden sm:flex p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              title={isExpanded ? "Restore Normal Size" : "Expand to Big Screen"}
            >
              {isExpanded ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              )}
            </button>

            {/* Minimize / Collapse Button */}
            <button
              onClick={toggleChat}
              className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              title={isOpen ? "Minimize Chat" : "Open Chat"}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "" : "rotate-180"}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>

        {/* ═══ TABS ═══ */}
        {isOpen && (
          <>
            <div className="flex items-center bg-[#151518] border-b border-white/10 px-2 py-1 gap-1">
              <button
                onClick={() => setActiveTab("focused")}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer ${activeTab === "focused"
                    ? "bg-[#aaed2e] text-[#0a0a0a] shadow-sm font-extrabold"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                AI Conversation
              </button>
              <button
                onClick={() => setActiveTab("other")}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer ${activeTab === "other"
                    ? "bg-[#aaed2e] text-[#0a0a0a] shadow-sm font-extrabold"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                Quick Actions
              </button>
            </div>

            {/* ═══ TAB 1: AI CONVERSATION ═══ */}
            {activeTab === "focused" && (
              <div className="flex-1 flex flex-col min-h-0 bg-[#0d0d0f]">
                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3.5 aichat-scroll">
                  <AnimatePresence initial={false}>
                    {messages.map((msg, index) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                      >
                        <div
                          className={`max-w-[88%] sm:max-w-[92%] rounded-2xl p-3 text-xs leading-relaxed transition-all ${msg.sender === "user"
                              ? msg.isProfanity
                                ? "bg-red-950/90 text-red-200 border border-red-500/60 rounded-tr-none shadow-lg shadow-red-950/40 font-semibold"
                                : "bg-[#aaed2e] text-[#0a0a0a] font-medium rounded-tr-none shadow-md shadow-[#aaed2e]/10"
                              : msg.isProfanity
                                ? "bg-[#1c0f12] border border-red-500/50 text-red-100 rounded-tl-none whitespace-pre-wrap flex flex-col items-start gap-1 w-full shadow-md shadow-red-950/20"
                                : "bg-[#16161b] border border-white/10 text-gray-200 rounded-tl-none whitespace-pre-wrap flex flex-col items-start gap-1 w-full"
                            }`}
                        >
                          {msg.isProfanity && (
                            <div className="flex items-center gap-1.5 mb-1 font-extrabold text-[10px] uppercase tracking-wider text-red-400 border-b border-red-500/30 pb-1 w-full">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-red-400 shrink-0 animate-pulse">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                              </svg>
                              <span>Language Warning</span>
                            </div>
                          )}

                          {msg.sender === "bot" ? (
                            <TypewriterMessage
                              text={msg.text}
                              hasTyped={msg.hasTyped}
                              onComplete={() => markMessageAsTyped(msg.id)}
                              renderFormattedText={renderFormattedText}
                            />
                          ) : (
                            msg.text
                          )}
                        </div>
                        <span className="text-[9px] text-gray-500 mt-1 px-1">{msg.timestamp}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2"
                    >
                      <div className="bg-[#16161b] border border-white/10 rounded-2xl rounded-tl-none p-3 text-xs text-gray-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e] animate-bounce [animation-delay:0.4s]" />
                        <span className="text-[10px] ml-1 text-gray-400">AI response...</span>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Suggestion Chips */}
                {lockoutRemaining <= 0 && (
                  <div className="px-3 py-2 bg-[#121215] border-t border-white/5 flex gap-1.5 overflow-x-auto aichat-hide-scroll shrink-0">
                    {quickReplies.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(chip.text)}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#aaed2e]/50 hover:bg-[#aaed2e]/10 whitespace-nowrap transition-all cursor-pointer shrink-0"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(inputValue);
                  }}
                  className="p-3 bg-[#121215] border-t border-white/10 flex items-center gap-2 shrink-0"
                >
                  <input
                    type="text"
                    disabled={lockoutRemaining > 0}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={
                      lockoutRemaining > 0
                        ? `Website suspended (Lockout active: ${formatCountdown(lockoutRemaining)})`
                        : "Ask AI anything or request contact email..."
                    }
                    className="flex-1 bg-[#1a1a1f] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#aaed2e] transition-colors disabled:opacity-40"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping || lockoutRemaining > 0}
                    className="w-8 h-8 rounded-xl bg-[#aaed2e] text-[#0a0a0a] font-bold flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 transition-all cursor-pointer shrink-0"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              </div>
            )}

            {/* ═══ TAB 2: QUICK ACTIONS ═══ */}
            {activeTab === "other" && (
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0d0d0f] aichat-scroll">
                <div className="p-3.5 rounded-xl bg-[#16161b] border border-white/10">
                  <h4 className="text-xs font-bold text-white mb-1">Book Free Consultation</h4>
                  <p className="text-[11px] text-gray-400 mb-3">Schedule a 30-minute call to discuss your project requirements.</p>
                  <InquiryPopup
                    trigger={
                      <button className="w-full py-2 rounded-lg bg-[#aaed2e] text-[#0a0a0a] font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer">
                        Schedule Call Now
                      </button>
                    }
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#16161b] border border-white/10">
                  <h4 className="text-xs font-bold text-white mb-1">Direct Contact & WhatsApp</h4>
                  <p className="text-[11px] text-gray-400 mb-2 font-medium">Connect with Gianni Vilayhane directly:</p>
                  <div className="space-y-2 text-xs text-gray-300">
                    <p className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#aaed2e] shrink-0">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>gianni@giannivilayhane.com</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366] shrink-0">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.594-1.049 3.834 3.793-.996.999.635zm11.233-5.765c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                      <span>WhatsApp: Click WhatsApp icon in top navbar to scan QR Code &amp; message!</span>
                    </p>
                  </div>
                </div>

                <EmbeddedSocialLinksCard />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
