import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Freelance Domain & SSL Protection Services — Website Security & Monitoring",
  description:
    "Secure your online presence with freelance domain setup, SSL certificates, DNS management, DDoS protection, and 24/7 security monitoring by Gianni Vilayhane. Hire a security-conscious developer.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/domain-ssl",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/domain-ssl",
    },
  },
  keywords: [
    "freelance SSL certificate installation",
    "domain setup freelance",
    "website security freelance",
    "DDoS protection service",
    "DNS management freelance",
    "HTTPS setup service",
    "Cloudflare setup freelance",
    "website security hardening",
    "SSL certificate renewal",
    "security headers configuration",
    "uptime monitoring service",
    "website security audit",
    "freelance DevOps security",
    "server security hardening",
    "web application firewall setup",
    "Let's Encrypt setup freelance",
    "Gianni Vilayhane security services",
    "Washington website security",
    "hire DevOps engineer US",
  ],
  openGraph: {
    title: "Freelance Domain & SSL Protection | Gianni Vilayhane",
    description: "Secure your online presence with freelance domain, SSL, and security monitoring.",
    url: "https://giannivilayhane.com/services/domain-ssl",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Freelance Domain & SSL Protection — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Domain & SSL Protection | Gianni Vilayhane",
    description: "Secure your online presence with freelance domain, SSL, and security monitoring.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function DomainSslServicePage() {
  const domainSslServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Domain, SSL Protection & Cloud DevOps Infrastructure",
    "serviceType": "DevOps & Cloud Security",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "Enterprise cloud security hardening, domain DNS, automated SSL renewal, security headers (CSP, HSTS), and Cloudflare DDoS protection.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Security & Cloud DevOps Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated SSL Installation & 24/7 Certificate Renewal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DNS Management & High-Speed Edge CDN Setup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Headers Hardening (CSP, HSTS, X-Frame)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloudflare WAF & DDoS Mitigation Rules" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "Domain Assessment & Registration", desc: "I evaluate your current domain setup, register new domains if needed, and configure DNS records for optimal performance and reliability." },
    { step: "02", title: "SSL Certificate Installation", desc: "Install and configure SSL certificates (Let's Encrypt or premium CA). Enforce HTTPS across all pages with proper redirect rules." },
    { step: "03", title: "Security Headers & Hardening", desc: "Configure CSP, HSTS, X-Frame-Options, X-Content-Type-Options, and other security headers. Harden server configuration against common attacks." },
    { step: "04", title: "DDoS Protection & Monitoring", desc: "Set up Cloudflare or similar CDN for DDoS mitigation, rate limiting, and Web Application Firewall (WAF) rules." },
    { step: "05", title: "Ongoing Monitoring & Maintenance", desc: "24/7 uptime monitoring, automatic SSL renewal, vulnerability scanning, and instant alerts if anything goes wrong." },
  ];

  const features = [
    { title: "Domain Registration", desc: "Register or transfer domains with optimal DNS configuration for speed and reliability." },
    { title: "SSL Certificates", desc: "Free Let's Encrypt or premium SSL certificates with automatic renewal." },
    { title: "HTTPS Enforcement", desc: "Force HTTPS on all pages with proper 301 redirects — no mixed content warnings." },
    { title: "Security Headers", desc: "CSP, HSTS, X-Frame-Options, and more — configured for maximum protection." },
    { title: "DDoS Protection", desc: "Cloudflare-powered DDoS mitigation with rate limiting and bot detection." },
    { title: "Uptime Monitoring", desc: "24/7 monitoring with instant alerts via email, SMS, or Slack if your site goes down." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(domainSslServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              Security & Infrastructure
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              DOMAIN & SSL
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                PROTECTION
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              Secure your digital assets end-to-end — domain setup, SSL certificates, security headers, DDoS protection, and 24/7 monitoring. Your website and users stay protected.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Secure Your Website</button>} />
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
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">Before securing your infrastructure, I assess your current setup and understand your security needs.</p>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Current Setup", desc: "Existing domain, hosting, DNS provider, and any current SSL certificates." },
                { title: "Security Concerns", desc: "Known vulnerabilities, past incidents, or specific security requirements." },
                { title: "Compliance Needs", desc: "GDPR, HIPAA, PCI-DSS — regulatory requirements that affect your security posture." },
                { title: "Traffic & Scale", desc: "Expected traffic volume and growth plans — DDoS protection scales with you." },
                { title: "Budget & Preferences", desc: "Free (Let's Encrypt) or premium SSL? Cloudflare or AWS? I match your needs." },
                { title: "Monitoring Alerts", desc: "Who gets notified when something goes wrong? Email, SMS, Slack integration." },
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

        {/* Security Setup & Monitoring */}
        <section className="bg-[#f8f9fa] w-full py-20 lg:py-28">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeInUp>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                  Step 2
                </span>
                <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-6">SECURITY SETUP & 24/7 MONITORING</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  From SSL installation to DDoS protection — I set up a comprehensive security layer and monitor it around the clock so you never have to worry.
                </p>
                <div className="space-y-4">
                  {["SSL certificate installation & auto-renewal", "HTTPS enforcement with zero mixed content", "Cloudflare CDN & DDoS protection setup", "Security headers (CSP, HSTS, X-Frame)", "24/7 uptime monitoring with instant alerts", "Monthly security reports and vulnerability scans"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg viewBox="0 0 14 14" fill="none" stroke="#aaed2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-1 flex-shrink-0"><polyline points="2 7 5.5 10.5 12 3.5" /></svg>
                      <span className="text-sm text-[#0a0a0a]">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e8eaed]">
                  <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80" alt="Security monitoring dashboard" className="w-full h-auto" />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Protection Process */}
        <section className="bg-white w-full py-20 lg:py-28">
          <div className="container-xl">
            <FadeInUp className="mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#aaed2e]/15 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
                Step 3
              </span>
              <h2 className="font-black uppercase text-[#0a0a0a] text-3xl sm:text-4xl mb-4">PROTECTION PROCESS</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">A systematic approach to lock down your infrastructure — from domain to deployment.</p>
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
              <h2 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>READY TO SECURE YOUR WEBSITE?</h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Don&apos;t wait for a breach. Let&apos;s lock down your domain, SSL, and security today.</p>
              <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: "#aaed2e" }}>Get in Touch</button>} />
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
