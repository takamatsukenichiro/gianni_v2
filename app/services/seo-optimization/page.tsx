import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "SEO & GEO Optimization Services — Google & AI Search Ranking Strategy",
  description:
    "Data-driven Technical SEO & Generative Engine Optimization (GEO) by Gianni Vilayhane. Dominate Google search results and rank directly in Google AI Overviews, ChatGPT Search, and Perplexity AI responses.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/seo-optimization",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/seo-optimization",
    },
  },
  keywords: [
    "SEO & GEO optimization services",
    "freelance SEO developer",
    "Generative Engine Optimization",
    "Google AI Overviews SEO",
    "ChatGPT Search ranking",
    "Perplexity AI optimization",
    "technical SEO specialist",
    "Core Web Vitals optimization",
    "schema markup engineer",
    "organic search traffic strategy",
    "Gianni Vilayhane SEO",
  ],
  openGraph: {
    title: "SEO & GEO Optimization Services | Gianni Vilayhane",
    description: "Technical SEO & Generative Engine Optimization (GEO) to rank #1 on Google and get cited in ChatGPT, Google AI & Perplexity.",
    url: "https://giannivilayhane.com/services/seo-optimization",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "SEO & GEO Optimization Services — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & GEO Optimization Services | Gianni Vilayhane",
    description: "Technical SEO & Generative Engine Optimization (GEO) to rank #1 on Google and get cited in ChatGPT, Google AI & Perplexity.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function SeoOptimizationServicePage() {
  const seoOptimizationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Technical SEO & Generative Engine Optimization (GEO)",
    "serviceType": "SEO & Search Optimization",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "Rank #1 on Google and get cited across ChatGPT Search, Google AI Overviews, and Perplexity AI with unified technical SEO and Generative Engine Optimization.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Search Engine Optimization Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google PageSpeed 95+ Score & Core Web Vitals Optimization" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generative Engine Optimization (GEO) for ChatGPT & Perplexity" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schema.org JSON-LD Knowledge Graph & Rich Snippets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Business SEO & Multi-Region Search Ranking" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "Comprehensive Audit", desc: "In-depth Technical SEO & AI visibility audit analyzing site structure, indexing errors, speed bottlenecks, and LLM search presence." },
    { step: "02", title: "Entity & Keyword Mapping", desc: "Identify high-intent search keywords and semantic Knowledge Graph entities tailored to human searchers and AI search crawlers." },
    { step: "03", title: "Technical & GEO Engineering", desc: "Implement JSON-LD schemas, canonical links, XML sitemaps, and Core Web Vitals to achieve 90+ Lighthouse performance scores." },
    { step: "04", title: "Content & AI-Answer Structuring", desc: "Re-architect page headers, technical data tables, and FAQ schemas into direct-answer formats preferred by ChatGPT, Perplexity, and Google AI." },
    { step: "05", title: "Monitoring & Ranking Growth", desc: "Continuous tracking via Google Search Console, Ahrefs, and AI citation benchmarks with monthly ranking performance updates." },
  ];

  const features = [
    { title: "Technical SEO Audit", desc: "Fix crawl errors, broken links, duplicate content, indexing issues, and canonical setup." },
    { title: "Generative Engine Optimization (GEO)", desc: "Optimize site architecture to get cited in Google AI Overviews, ChatGPT Search, and Perplexity AI." },
    { title: "Core Web Vitals (90+ Score)", desc: "Lightning-fast page load speeds optimizing LCP, FID, and CLS for top search ranking boosts." },
    { title: "JSON-LD Schema & Knowledge Graph", desc: "Structured data implementation for rich snippets, FAQs, business details, and star ratings." },
    { title: "Direct-Answer Content Architecture", desc: "Semantic HTML5 heading hierarchies, Q&A blocks, and conversion-focused CTAs." },
    { title: "Local SEO & Business Profiling", desc: "Optimize Google Business Profile, local citations, map pack rankings, and geo-targeted keywords." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoOptimizationServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-300 uppercase tracking-widest mb-5">
              <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
              SEO &amp; GEO Optimization
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              DOMINATE GOOGLE &amp;
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                AI SEARCH ENGINE RANKINGS
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              Technical SEO, speed performance, and Generative Engine Optimization (GEO) engineered to drive organic search traffic and get your brand recommended in ChatGPT, Perplexity, and Google AI.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl" style={{ background: "#aaed2e" }}>Boost Your Search &amp; AI Rankings</button>} />
          </FadeInUp>
        </section>

        {/* Deliverables / Features Grid */}
        <section className="bg-white w-full py-16 lg:py-24">
          <div className="container-xl">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">What You Get With My SEO Services</h2>
              <p className="text-gray-600 text-sm sm:text-base">Every layer of Technical SEO and speed performance engineered from scratch for sustained organic search visibility.</p>
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
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">My 5-Step SEO Execution Process</h2>
              <p className="text-gray-400 text-sm sm:text-base">A transparent, data-driven workflow designed to deliver measurable search engine ranking growth.</p>
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
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">Ready To Rank On Page #1?</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8">Get a free SEO performance audit and tailored strategy plan for your website.</p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl" style={{ background: "#aaed2e" }}>Schedule Free SEO Audit</button>} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
