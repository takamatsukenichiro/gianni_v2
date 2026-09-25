import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "GEO & AI Search Optimization Services — Rank in Google AI, ChatGPT & Perplexity",
  description:
    "Generative Engine Optimization (GEO) by Gianni Vilayhane. Position your brand as an authoritative source cited directly in Google AI Overviews (SGE), ChatGPT Search, and Perplexity AI responses.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/geo-optimization",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/geo-optimization",
    },
  },
  keywords: [
    "GEO optimization services",
    "Generative Engine Optimization",
    "Google AI Overviews optimization",
    "ChatGPT Search SEO",
    "Perplexity AI optimization",
    "AI search ranking specialist",
    "LLM search engine optimization",
    "Knowledge Graph SEO",
    "JSON-LD microdata schema",
    "AI-scannable content optimization",
    "Gianni Vilayhane GEO",
  ],
  openGraph: {
    title: "GEO & AI Search Optimization Services | Gianni Vilayhane",
    description: "Generative Engine Optimization (GEO) to get your business cited in Google AI Overviews, ChatGPT & Perplexity.",
    url: "https://giannivilayhane.com/services/geo-optimization",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "GEO & AI Search Optimization Services — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO & AI Search Optimization | Gianni Vilayhane",
    description: "Generative Engine Optimization (GEO) to get your business cited in Google AI Overviews, ChatGPT & Perplexity.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function GeoOptimizationServicePage() {
  const geoOptimizationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Generative Engine Optimization (GEO) & AI Search Visibility",
    "serviceType": "AI Search Optimization",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "Optimize your business data and website architecture to rank in Google AI Overviews, ChatGPT Search, Perplexity AI, and Claude recommendations.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Generative Engine Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google AI Overviews & SGE Inclusions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ChatGPT Search & Perplexity AI Citations" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Semantic Knowledge Graph & Microdata Engineering" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Machine-Readable llms.txt & LLM Crawler Optimization" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "AI Search Audit", desc: "Evaluate how LLMs (ChatGPT, Claude, Perplexity) and Google AI Overviews currently view, cite, and summarize your brand." },
    { step: "02", title: "Entity & Schema Engineering", desc: "Build comprehensive JSON-LD Knowledge Graph schemas and structured semantic entities to establish domain authority." },
    { step: "03", title: "AI-Scannable Content Restructuring", desc: "Re-architect page content into direct-answer format with bulleted summaries, tables, and authoritative data sources LLMs prefer." },
    { step: "04", title: "Multi-Engine Citation Building", desc: "Optimize digital footprint across trusted platforms, registries, and citations indexed by AI search crawlers." },
    { step: "05", title: "LLM Visibility Benchmarking", desc: "Continuous monitoring of AI prompt citations, Perplexity source listings, and Google SGE answer panel inclusions." },
  ];

  const features = [
    { title: "Google AI Overviews Optimization", desc: "Format content to get selected for top AI summary panels in Google Search." },
    { title: "ChatGPT & Perplexity Visibility", desc: "Optimize site data so AI search tools cite your website as the primary recommended answer." },
    { title: "Advanced Semantic Schema Markup", desc: "Deep JSON-LD entities mapping organization, services, products, authors, and credentials." },
    { title: "Knowledge Graph Integration", desc: "Establish strong brand entity connections across Wikidata, Google Knowledge Graph, and databases." },
    { title: "Direct-Answer Content Architecture", desc: "Structure headers, Q&A sections, and technical tables for maximum AI crawler extraction." },
    { title: "AI Brand Authority Engineering", desc: "Position your brand as an industry authority trusted by Large Language Models." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(geoOptimizationServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-300 uppercase tracking-widest mb-5">
              <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
              GEO &amp; AI Search Optimization
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              RANK IN GOOGLE AI,
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                CHATGPT &amp; PERPLEXITY
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              Generative Engine Optimization (GEO) positions your site as an authoritative primary source cited directly in AI search engines, Google AI Overviews, and conversational LLM responses.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl" style={{ background: "#aaed2e" }}>Optimize For AI Search Engines</button>} />
          </FadeInUp>
        </section>

        {/* Deliverables / Features Grid */}
        <section className="bg-white w-full py-16 lg:py-24">
          <div className="container-xl">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">Generative Engine Optimization (GEO) Solutions</h2>
              <p className="text-gray-600 text-sm sm:text-base">Prepare your business for the next era of search where AI tools recommend products and services directly.</p>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="p-7 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#aaed2e] hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] text-[#aaed2e] flex items-center justify-center font-mono font-bold text-sm mb-5 group-hover:scale-110 transition-transform">
                        0{i + 1}
                      </div>
                      <h3 className="font-bold text-lg text-[#0a0a0a] mb-2">{f.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="bg-[#0a0a0a] w-full py-16 lg:py-24 text-white">
          <div className="container-xl">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">My GEO Optimization Roadmap</h2>
              <p className="text-gray-400 text-sm sm:text-base">Engineering entity authority and structured datasets for seamless AI search engine inclusion.</p>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {process.map((p, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#aaed2e] block mb-2">{p.step}</span>
                    <h3 className="font-bold text-sm text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white w-full py-16 lg:py-20 border-t border-gray-100">
          <div className="container-xl text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">Is Your Brand Visible In AI Search?</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8">Get an AI search visibility audit to see how ChatGPT, Google AI, and Perplexity perceive your business.</p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl" style={{ background: "#aaed2e" }}>Schedule GEO Consultation</button>} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
