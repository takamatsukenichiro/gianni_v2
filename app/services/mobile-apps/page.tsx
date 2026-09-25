import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Freelance Cross-Platform Mobile App Development — iOS & Android",
  description:
    "Freelance mobile app developer Gianni Vilayhane building cross-platform apps for iOS and Android — one codebase, native performance. Built with React Native and Expo. App Store submission included. Hire a mobile app developer today.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/mobile-apps",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/mobile-apps",
    },
  },
  keywords: [
    "freelance mobile app developer",
    "hire React Native developer",
    "iOS Android app developer freelance",
    "cross-platform mobile developer",
    "hire mobile app developer US",
    "app store submission service",
    "Expo developer freelance",
    "React Native freelancer",
    "mobile app development US",
    "affordable mobile app development",
    "startup app developer",
    "business mobile app developer",
    "e-commerce mobile app",
    "food delivery app developer",
    "fitness app developer",
    "on-demand app developer",
    "flutter developer freelance",
    "hybrid app developer",
    "Gianni Vilayhane mobile apps",
    "Washington mobile app developer",
  ],
  openGraph: {
    title: "Freelance Mobile App Development | Gianni Vilayhane",
    description: "Freelance mobile app developer building cross-platform apps for iOS and Android — one codebase, native performance.",
    url: "https://giannivilayhane.com/services/mobile-apps",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Freelance Mobile App Development — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Mobile App Development | Gianni Vilayhane",
    description: "Freelance mobile app developer building cross-platform apps for iOS and Android — one codebase, native performance.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function MobileAppsServicePage() {
  const mobileAppServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cross-Platform Mobile App Development",
    "serviceType": "Mobile Development",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "High-performance iOS and Android mobile applications built with React Native and Expo. Seamless App Store and Google Play Store submission.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Development Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS & Android Cross-Platform Apps" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile E-Commerce & Retail Stores" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare & Appointment Mobile Clients" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real-Time Field Service & Logistics Apps" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "Discovery & Requirements", desc: "Platform selection (iOS, Android, or both), feature prioritization, device requirements, and app store guidelines review." },
    { step: "02", title: "UI/UX Design & Figma Prototype", desc: "Mobile-first Figma designs with platform-specific patterns. Interactive prototype for stakeholder review and user testing." },
    { step: "03", title: "Frontend Development", desc: "React Native / Expo development with native modules, animations, and platform-specific optimizations for smooth 60fps performance." },
    { step: "04", title: "Backend & API Integration", desc: "Firebase or custom Node.js backend with push notifications, offline sync, real-time data, and user authentication." },
    { step: "05", title: "Testing, App Store & Support", desc: "Device testing, beta distribution, App Store and Play Store submission, and ongoing maintenance with OTA updates." },
  ];

  const features = [
    { title: "Cross-Platform (iOS + Android)", desc: "One codebase that looks and feels native on both Apple and Android devices." },
    { title: "Push Notifications", desc: "Engage users with targeted push notifications powered by Firebase Cloud Messaging." },
    { title: "Offline Support", desc: "Local data caching and offline sync so the app works even without internet connectivity." },
    { title: "Device Features", desc: "Camera, GPS, biometrics, file system, Bluetooth, and device sensor integration." },
    { title: "In-App Purchases", desc: "Stripe, RevenueCat, and native App Store/Play Store in-app billing." },
    { title: "App Store Publishing", desc: "Complete handling of the submission, review, and approval process on both stores." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              Mobile App Development
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              CROSS-PLATFORM
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                MOBILE APPS
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              One codebase, native performance on iOS and Android. From consumer apps to business tools — I handle design, development, testing, and app store submission.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Start Your Mobile Project</button>} />
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
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">Every mobile app starts with understanding your users, platforms, and business goals.</p>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "App Purpose", desc: "What problem does your app solve? Consumer-facing, internal tool, or marketplace?" },
                { title: "Target Platforms", desc: "iOS only, Android only, or both? Device-specific features and minimum OS versions." },
                { title: "Core Features", desc: "MVP feature list, priority ranking, and any must-have device integrations." },
                { title: "User Accounts", desc: "Authentication methods, user profiles, social login, and privacy requirements." },
                { title: "Monetization", desc: "In-app purchases, subscriptions, ads, or free? Revenue model shapes the architecture." },
                { title: "App Store Assets", desc: "App name, description, screenshots, and marketing materials for store listing." },
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
                  Mobile-first Figma designs that follow iOS Human Interface Guidelines and Material Design patterns. You get an interactive prototype before development.
                </p>
                <div className="space-y-4">
                  {["Platform-specific design patterns (iOS & Android)", "Interactive prototype with gesture-based navigation", "Responsive layouts for all screen sizes", "Design tokens and component library", "User testing and iteration rounds"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-1 flex-shrink-0"><polyline points="2 7 5.5 10.5 12 3.5" /></svg>
                      <span className="text-sm text-[#0a0a0a]">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e8eaed]">
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80" alt="Mobile app design" className="w-full h-auto" />
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
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">From design approval to App Store launch — structured, tested, and on schedule.</p>
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
              <h2 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>READY TO SHIP YOUR APP?</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">From concept to App Store — let&apos;s build something your users will love.</p>
              <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Get in Touch</button>} />
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
