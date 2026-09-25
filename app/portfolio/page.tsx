import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/case-studies";
import PortfolioGrid from "@/components/PortfolioGrid";
import { FadeInUp } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Portfolio — Freelance Full-Stack Developer Projects & Case Studies",
  description:
    "Explore the portfolio of Gianni Vilayhane — a freelance full-stack developer. Real projects including fintech payment platforms, healthcare telemedicine systems, e-commerce microservices, and EdTech learning management systems built for clients worldwide.",
  keywords: [
    "freelance developer portfolio",
    "full-stack developer portfolio US",
    "web application portfolio",
    "mobile app portfolio",
    "React developer projects",
    "Spring Boot projects",
    "e-commerce development portfolio",
    "healthcare software portfolio",
    "fintech application portfolio",
    "client projects freelance",
    "real world software projects",
    "SaaS application portfolio",
    "startup MVP portfolio",
    "freelance work samples",
    "Gianni Vilayhane projects",
    "full-stack developer case studies",
    "freelance developer client work",
    "web development portfolio US",
  ],
  alternates: {
    canonical: "https://giannivilayhane.com/portfolio",
    languages: {
      "en-IN": "https://giannivilayhane.com/portfolio",
    },
  },
  openGraph: {
    title: "Portfolio — Freelance Full-Stack Developer Projects | Gianni Vilayhane",
    description:
      "Explore real projects — fintech platforms, healthcare systems, e-commerce, and EdTech — built by freelance developer Gianni Vilayhane.",
    url: "https://giannivilayhane.com/portfolio",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Gianni Vilayhane Portfolio — Freelance Full-Stack Developer Projects",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Freelance Full-Stack Developer Projects | Gianni Vilayhane",
    description:
      "Explore real projects — fintech, healthcare, e-commerce, and EdTech — built by freelance developer Gianni Vilayhane.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function PortfolioPage() {
  const portfolioCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Verified Case Studies & Client Software Portfolio — Gianni Vilayhane",
    "description": "Explore custom business software, doctor practice platforms, restaurant ordering systems, sports e-commerce stores, and high-concurrency fintech microservices built by Gianni Vilayhane.",
    "url": "https://giannivilayhane.com/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "DIETOMOUMI — Doctor & Dietitian Practice Platform",
          "url": "https://giannivilayhane.com/portfolio/dietomoumi-dietation-doctor"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dugguz Delight — Restaurant Online Ordering & Table Reservation System",
          "url": "https://giannivilayhane.com/portfolio/dugguz-delight-restaurant"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Super Gearz — Sports & Retail E-Commerce Platform",
          "url": "https://giannivilayhane.com/portfolio/super-gearz-sports-ecommerce"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "PayBridge Solutions — High-Concurrency FinTech Payment Gateway",
          "url": "https://giannivilayhane.com/portfolio/fintech-payment-platform"
        }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioCollectionSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <FadeInUp className="container-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
              My Work
            </div>
            <h1
              className="font-black uppercase text-white leading-[0.92] mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Featured Projects
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Real projects, real results. Here&apos;s a look at the products I&apos;ve built across AI, fintech, healthcare, Real Estate, retail, and education.
            </p>
          </FadeInUp>
        </section>

        {/* Portfolio Grid */}
        <PortfolioGrid studies={caseStudies} />
      </main>
      <Footer />
    </>
  );
}
