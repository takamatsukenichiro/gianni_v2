import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Freelance Custom Desktop Application Development — Windows, Mac & Linux",
  description:
    "Freelance desktop app developer Gianni Vilayhane building high-performance software for Windows, macOS, and Linux — built with Electron, Tauri, and React. Internal business tools, POS systems, and professional software. Hire a desktop app developer.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/desktop-apps",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/desktop-apps",
    },
  },
  keywords: [
    "freelance desktop application developer",
    "Electron app developer freelance",
    "cross-platform desktop software",
    "Tauri developer freelance",
    "hire desktop app developer",
    "business desktop software developer",
    "Windows application developer",
    "macOS application developer",
    "Linux application developer",
    "Electron.js developer US",
    "internal tool developer",
    "desktop software freelance",
    "offline desktop application",
    "point of sale developer",
    "inventory management software",
    "ERP software developer",
    "desktop database application",
    "Gianni Vilayhane desktop apps",
    "Washington desktop application developer",
  ],
  openGraph: {
    title: "Freelance Desktop Application Development | Gianni Vilayhane",
    description: "Freelance desktop app developer building high-performance software for Windows, macOS, and Linux.",
    url: "https://giannivilayhane.com/services/desktop-apps",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Freelance Desktop Application Development — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Desktop Application Development | Gianni Vilayhane",
    description: "Freelance desktop app developer building high-performance software for Windows, macOS, and Linux.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function DesktopAppsServicePage() {
  const desktopAppsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cross-Platform Desktop Application Development",
    "serviceType": "Desktop Software Development",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "High-performance cross-platform desktop software for Windows, macOS, and Linux built with Tauri, Electron, React, and SQLite.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Desktop Software Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Windows, macOS & Linux Cross-Platform Apps" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Offline-First SQLite Database Tools" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Internal Business Operations & POS Software" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Code-Signed Installers & Automated Binary Updates" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "Discovery & Requirements", desc: "Platform targets (Windows, macOS, Linux), hardware requirements, file system needs, offline capabilities, and distribution method." },
    { step: "02", title: "UI/UX Design & Figma Prototype", desc: "Desktop-optimized Figma designs with native platform patterns. Interactive prototype for stakeholder review and usability testing." },
    { step: "03", title: "Backend & Core Logic", desc: "Electron/Tauri shell with local database, file system access, system APIs, and business logic. Multi-threaded for zero UI freezing." },
    { step: "04", title: "Frontend Development", desc: "React-based desktop UI with native menus, keyboard shortcuts, system tray integration, and responsive layouts." },
    { step: "05", title: "Packaging, Signing & Support", desc: "Platform-specific installers, code signing for trust, auto-update mechanism, and ongoing maintenance with crash reporting." },
  ];

  const features = [
    { title: "Cross-Platform (Win/Mac/Linux)", desc: "Single codebase builds native installers for all three desktop platforms." },
    { title: "Native Performance", desc: "Multi-threaded processing, hardware acceleration, and zero UI freezing during heavy computation." },
    { title: "File System Access", desc: "Full local file read/write, drag-and-drop, and document management." },
    { title: "Offline Capability", desc: "Works fully offline with local SQLite database and background sync when online." },
    { title: "Auto-Update Mechanism", desc: "Seamless background updates with binary code signature verification for security." },
    { title: "System Tray & Shortcuts", desc: "Background running, system tray integration, global keyboard shortcuts, and notifications." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(desktopAppsServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              Desktop Application Development
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              DESKTOP SOFTWARE
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                BUILT TO PERFORM
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              High-performance desktop applications for Windows, macOS, and Linux — perfect for internal business tools, data processing, and professional software.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Start Your Desktop Project</button>} />
          </FadeInUp>
        </section>

        {/* Client Requirements */}
        <section className="bg-white w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                Step 1
              </span>
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">CLIENT REQUIREMENTS</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">Desktop apps have unique needs — hardware access, offline mode, and native OS integration.</p>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Target Platforms", desc: "Windows, macOS, Linux — or all three? Minimum OS versions and hardware requirements." },
                { title: "Offline Requirements", desc: "Does the app need to work fully offline? Local database, background sync, and data conflict resolution." },
                { title: "Hardware Integration", desc: "Serial ports, USB devices, printers, scanners — what hardware does the app need to access?" },
                { title: "Data & Storage", desc: "Local file management, database size, import/export formats, and data encryption needs." },
                { title: "Distribution", desc: "Direct download, Microsoft Store, Mac App Store, or Linux package managers?" },
                { title: "Update Strategy", desc: "Auto-updates, manual updates, or OTA? Frequency and rollback requirements." },
              ].map((item, i) => (
                <StaggerItem key={i}>
                    <div className="rounded-2xl border-2 border-[#e8eaed] bg-[#f8f9fa] p-5 sm:p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-[#aaed2e]/15 flex items-center justify-center mb-4">
                      <span className="text-sm font-black text-[#0a0a0a]">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-bold text-[#0a0a0a] text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* UI/UX Design & Prototype */}
        <section className="bg-[#f8f9fa] w-full py-20 lg:py-28">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeInUp>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                  Step 2
                </span>
                <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-6">UI/UX DESIGN & FIGMA PROTOTYPE</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Desktop-optimized Figma designs with native platform patterns. Window management, keyboard shortcuts, and menu structures are designed for power users.
                </p>
                <div className="space-y-4">
                  {["Platform-native UI patterns (Windows, macOS, Linux)", "Interactive prototype with keyboard navigation", "Multi-window and panel layout designs", "Dark mode and accessibility support", "Developer-ready specs and asset export"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-1 flex-shrink-0"><polyline points="2 7 5.5 10.5 12 3.5" /></svg>
                      <span className="text-sm text-[#0a0a0a]">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e8eaed]">
                  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80" alt="Desktop app development" className="w-full h-auto" />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="bg-white w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                Step 3
              </span>
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">DEVELOPMENT PROCESS</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">From design approval to packaged desktop application — structured, tested, and ready to distribute.</p>
            </FadeInUp>
            <StaggerContainer className="space-y-6">
              {process.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-4 sm:gap-5 items-start p-5 sm:p-6 rounded-2xl border-2 border-[#e8eaed] bg-[#f8f9fa] hover:border-[#aaed2e] transition-colors duration-300">
                    <span className="text-2xl sm:text-3xl font-black text-[#aaed2e]/40 flex-shrink-0">{item.step}</span>
                    <div>
                      <h3 className="font-bold text-[#0a0a0a] text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#f8f9fa] w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12 text-center">
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">WHAT YOU GET</h2>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#e8eaed] bg-white h-full">
                    <h3 className="font-bold text-[#0a0a0a] text-sm mb-2">{f.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0a0a] w-full py-16 sm:py-20 text-center">
          <div className="container-xl">
            <FadeInUp>
              <h2 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>READY TO BUILD DESKTOP SOFTWARE?</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">From internal tools to commercial products — let&apos;s build something powerful.</p>
              <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Get in Touch</button>} />
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
