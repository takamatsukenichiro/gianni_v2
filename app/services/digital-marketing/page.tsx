import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Digital Marketing & Growth Services — Paid Ads, CRO & Lead Generation",
  description:
    "Data-driven Digital Marketing, Google Ads (PPC), Meta Advertising, Conversion Rate Optimization (CRO), and Lead Funnels built by Gianni Vilayhane to scale business revenue.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/digital-marketing",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/digital-marketing",
    },
  },
  keywords: [
    "digital marketing services",
    "freelance digital marketer",
    "Google Ads specialist PPC",
    "Meta Ads manager freelance",
    "Conversion Rate Optimization CRO",
    "lead generation funnels",
    "content marketing strategy",
    "social media growth manager",
    "Google Analytics 4 expert",
    "Gianni Vilayhane digital marketing",
  ],
  openGraph: {
    title: "Digital Marketing & Growth Services | Gianni Vilayhane",
    description: "Data-driven Google Ads, Meta Paid Campaigns, CRO, and Lead Funnels engineered to scale business revenue.",
    url: "https://giannivilayhane.com/services/digital-marketing",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing & Growth Services — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Growth Services | Gianni Vilayhane",
    description: "Data-driven Google Ads, Meta Paid Campaigns, CRO, and Lead Funnels engineered to scale business revenue.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function DigitalMarketingServicePage() {
  const digitalMarketingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing, Google Ads PPC & Growth Strategy",
    "serviceType": "Digital Marketing",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "Data-driven Google Ads (PPC), Meta Paid Campaigns, Conversion Rate Optimization (CRO), and automated lead acquisition funnels to predictably scale business revenue.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Growth & Advertising Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Search & Shopping Ads (PPC)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta (Facebook & Instagram) Paid Acquisition" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimization (CRO) & Funnel Testing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Analytics 4 & Conversion Event Tracking" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "Funnel & Market Analysis", desc: "Audit target audience demographics, competitor ad strategies, conversion bottlenecks, and landing page performance." },
    { step: "02", title: "Campaign Strategy & Copywriting", desc: "Craft high-converting ad copy, ad creatives, promotional offers, and targeted audience segments for maximum ROI." },
    { step: "03", title: "Paid Ads & Channel Setup", desc: "Launch targeted Google PPC campaigns, Meta (Facebook & Instagram) ads, remarketing funnels, and conversion tracking." },
    { step: "04", title: "Conversion Rate Optimization (CRO)", desc: "A/B test landing pages, CTA buttons, checkout flows, and lead forms to maximize customer conversion rates." },
    { step: "05", title: "Scaling & Performance Reporting", desc: "Scale budget on winning campaigns, optimize Cost Per Acquisition (CPA), and provide transparent monthly ROI reporting." },
  ];

  const features = [
    { title: "Google Ads (PPC) Management", desc: "High-intent search campaigns, shopping ads, and remarketing with max ROI optimization." },
    { title: "Meta (Facebook & IG) Campaigns", desc: "Eye-catching visual ad creatives, lookalike audiences, and high-converting retargeting funnels." },
    { title: "Conversion Rate Optimization (CRO)", desc: "Heatmap analysis, user flow optimization, and A/B testing to turn more clicks into leads." },
    { title: "Lead Generation Funnel Setup", desc: "Custom landing pages, automated lead capture forms, CRM sync, and email follow-up workflows." },
    { title: "Content Strategy & Copywriting", desc: "Persuasive sales copywriting, blog content strategy, and brand narrative engineering." },
    { title: "Analytics & Attribution (GA4)", desc: "Google Analytics 4, Meta Pixel, event tracking, and custom conversion dashboards." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMarketingServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-300 uppercase tracking-widest mb-5">
              <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
              Digital Marketing &amp; Growth
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              SCALE YOUR BUSINESS
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                REVENUE &amp; LEADS
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              Data-driven Google Ads (PPC), Meta campaigns, Conversion Rate Optimization (CRO), and automated lead funnels engineered to acquire high-value customers predictably.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl" style={{ background: "#aaed2e" }}>Scale Your Marketing ROI</button>} />
          </FadeInUp>
        </section>

        {/* Deliverables / Features Grid */}
        <section className="bg-white w-full py-16 lg:py-24">
          <div className="container-xl">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">Digital Marketing &amp; Growth Services</h2>
              <p className="text-gray-600 text-sm sm:text-base">Comprehensive marketing solutions that turn ad spend into high-ROI business growth.</p>
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
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">My Growth Marketing Roadmap</h2>
              <p className="text-gray-400 text-sm sm:text-base">From audience research and ad creative production to CRO and automated lead funnels.</p>
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
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">Ready To Scale Your Sales &amp; Leads?</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8">Get a free marketing campaign audit and custom acquisition growth strategy for your business.</p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl" style={{ background: "#aaed2e" }}>Schedule Free Growth Audit</button>} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
