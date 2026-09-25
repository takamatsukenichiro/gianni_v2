import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export const metadata: Metadata = {
  title: "Agentic AI Chatbots & Business Automation Services — Custom AI Agents",
  description:
    "Custom Agentic AI Chatbots and Business Automation workflows built by Gianni Vilayhane. Autonomous AI agents powered by OpenAI, Claude, LangChain & Vector Databases for 24/7 lead capture, support, and task execution.",
  alternates: {
    canonical: "https://giannivilayhane.com/services/agentic-ai-chatbots",
    languages: {
      "en-IN": "https://giannivilayhane.com/services/agentic-ai-chatbots",
    },
  },
  keywords: [
    "Agentic AI chatbot developer",
    "custom AI chatbot development",
    "AI agent developer freelancer",
    "LangChain developer US",
    "OpenAI API integration freelancer",
    "RAG chatbot developer",
    "vector database developer",
    "WhatsApp AI chatbot automation",
    "autonomous AI business agents",
    "Gianni Vilayhane AI chatbots",
  ],
  openGraph: {
    title: "Agentic AI Chatbots & Automation Services | Gianni Vilayhane",
    description: "Custom Agentic AI Chatbots & autonomous workflows to automate customer support, lead capture, and operations.",
    url: "https://giannivilayhane.com/services/agentic-ai-chatbots",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Agentic AI Chatbots & Automation Services — Gianni Vilayhane",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Chatbots & Automation | Gianni Vilayhane",
    description: "Custom Agentic AI Chatbots & autonomous workflows to automate customer support, lead capture, and operations.",
    images: ["https://giannivilayhane.com/gianni/gianni_pf.png"],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
};

export default function AgenticAiChatbotsServicePage() {
  const agenticAiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Agentic AI Chatbots & Business Process Automation",
    "serviceType": "AI & Automation",
    "provider": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "url": "https://giannivilayhane.com"
    },
    "areaServed": "Worldwide",
    "description": "Autonomous conversational AI agents powered by OpenAI GPT-4o, Claude, and Gemini 2.0 with RAG vector search, WhatsApp automation, and CRM integrations.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Customer Support & Lead Capture Chatbots" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp Business AI Automation & Booking" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Vector Embeddings & RAG Search" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM, Calendar & Database Action Calling" } }
      ]
    }
  };

  const process = [
    { step: "01", title: "Use Case & Knowledge Ingestion", desc: "Analyze business workflows, customer FAQs, databases, and APIs. Ingest company documents into custom vector embeddings." },
    { step: "02", title: "Agent Architecture & Prompt Engineering", desc: "Design multi-agent tool-calling pipelines using LangChain, OpenAI GPT-4o, and LlamaIndex for precise, hallucination-free answers." },
    { step: "03", title: "API & System Integration", desc: "Connect your AI agent directly with PostgreSQL databases, CRMs (HubSpot, Salesforce), Google Calendar, and payment gateways." },
    { step: "04", title: "Multi-Channel Deployment", desc: "Deploy your custom AI bot on Web widgets, WhatsApp Business API, Telegram, Slack, or mobile apps." },
    { step: "05", title: "Monitoring & RLHF Fine-Tuning", desc: "Track conversation analytics, fallback triggers, and human escalation rules to continuously refine AI response accuracy." },
  ];

  const features = [
    { title: "Autonomous Tool Execution", desc: "AI agents that perform actions — book meetings, search DBs, generate invoices, and send emails." },
    { title: "Retrieval-Augmented Generation (RAG)", desc: "Train your AI bot on your exact business PDFs, help docs, and database records." },
    { title: "Multi-Channel Availability", desc: "Embed your bot on your website, WhatsApp, Telegram, Slack, or custom web portals." },
    { title: "Database & CRM Sync", desc: "Seamless bi-directional sync with HubSpot, Supabase, PostgreSQL, and REST APIs." },
    { title: "Smart Human Handoff", desc: "Automated escalation to live customer support agents when complex queries arise." },
    { title: "Enterprise Security & Privacy", desc: "Role-based access control, data encryption, and GDPR-compliant conversational logging." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agenticAiServiceSchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-[#0a0a0a] w-full pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <FadeInUp className="container-xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-gray-300 uppercase tracking-widest mb-5">
              <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
              Agentic AI Chatbots &amp; Automation
            </span>
            <h1 className="font-black uppercase text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              AUTONOMOUS AI AGENTS
              <br />
              <span className="relative inline-block" style={{ color: "#aaed2e" }}>
                FOR YOUR BUSINESS
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full" style={{ background: "#aaed2e" }} />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              Custom conversational AI chatbots and autonomous agents that answer customer questions, book appointments, execute database queries, and capture qualified leads 24/7.
            </p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl" style={{ background: "#aaed2e" }}>Build Your Custom AI Chatbot</button>} />
          </FadeInUp>
        </section>

        {/* Deliverables / Features Grid */}
        <section className="bg-white w-full py-16 lg:py-24">
          <div className="container-xl">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">Agentic AI &amp; Chatbot Capabilities</h2>
              <p className="text-gray-600 text-sm sm:text-base">Go beyond static chatbots with intelligent AI agents that take real actions and automate business operations.</p>
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
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">My AI Agent Development Workflow</h2>
              <p className="text-gray-400 text-sm sm:text-base">From custom RAG embeddings to multi-channel deployment and continuous optimization.</p>
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
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] uppercase tracking-tight mb-4">Ready To Automate Your Business With AI?</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8">Let&apos;s build an autonomous AI agent tailored specifically for your customer workflows.</p>
            <InquiryPopup trigger={<button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[#0a0a0a] text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl" style={{ background: "#aaed2e" }}>Discuss Your AI Chatbot Project</button>} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
