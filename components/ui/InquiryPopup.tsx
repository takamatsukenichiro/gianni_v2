"use client";

import { useState } from "react";
import InquiryForm from "./InquiryForm";
import PopupModal from "./PopupModal";

export default function InquiryPopup({ trigger }: { trigger?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} style={{ cursor: "pointer", display: "inline-flex" }}>
        {trigger || (
          <button
            style={{
              padding: "14px 28px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #aaed2e 0%, #95d622 100%)",
              color: "#0a0a0a",
              fontSize: "14px",
              fontWeight: 800,
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              transition: "all 0.25s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
              boxShadow: "0 4px 20px rgba(170, 237, 46, 0.3)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(170, 237, 46, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(170, 237, 46, 0.3)";
            }}
          >
            Start Your Project
            <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        )}
      </div>
      <PopupModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Start Your Project">
        <InquiryForm onSuccess={() => setTimeout(() => setIsOpen(false), 3500)} />
      </PopupModal>
    </>
  );
}
