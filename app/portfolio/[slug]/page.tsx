import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp } from "@/components/ui/MotionWrappers";
import InquiryPopup from "@/components/ui/InquiryPopup";
import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const siteUrl = "https://giannivilayhane.com";

const resolveImage = (src: string) => (src.startsWith("http") ? src : `${siteUrl}${src}`);

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return {};
  const url = `${siteUrl}/portfolio/${study.slug}`;
  return {
    title: `${study.title} — Case Study`,
    description: `${study.challenge} See how Gianni Vilayhane, a freelance full-stack developer, built this ${study.industry.toLowerCase()} project using ${study.techStack.slice(0, 3).join(", ")}.`,
    keywords: [
      study.title.toLowerCase(),
      `${study.industry.toLowerCase()} case study`,
      `${study.techStack[0]?.toLowerCase() || "full-stack"} project`,
      "Gianni Vilayhane portfolio",
      "freelance developer case study",
      "full-stack developer project",
      "web application case study",
      "hire full-stack developer",
      `${study.industry.toLowerCase()} software development`,
    ],
    authors: [{ name: "Gianni Vilayhane", url: siteUrl }],
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
      },
    },
    openGraph: {
      title: `${study.title} — Case Study | Gianni Vilayhane`,
      description: `${study.challenge} Built with ${study.techStack.slice(0, 3).join(", ")} by freelance developer Gianni Vilayhane.`,
      type: "article",
      url,
      siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
      locale: "en_IN",
      images: [
        {
          url: resolveImage(study.image),
          width: 1200,
          height: 630,
          alt: `${study.title} — ${study.industry} Project by Gianni Vilayhane`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} — Case Study`,
      description: `${study.challenge} Built with ${study.techStack.slice(0, 3).join(", ")} by Gianni Vilayhane.`,
      images: [
        {
          url: resolveImage(study.image),
          alt: `${study.title} — ${study.industry} Project`,
        },
      ],
      site: "@giannivilayhane",
      creator: "@giannivilayhane",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const prevStudy = caseStudies[currentIndex - 1];
  const nextStudy = caseStudies[currentIndex + 1];
  const relatedStudies = caseStudies.filter((cs) => cs.id !== study.id).slice(0, 2);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: study.title,
    description: study.challenge,
    author: {
      "@type": "Person",
      name: "Gianni Vilayhane",
      url: siteUrl,
    },
    datePublished: new Date().toISOString(),
    image: resolveImage(study.image),
    url: `${siteUrl}/portfolio/${study.slug}`,
    about: {
      "@type": "Organization",
      name: study.client,
    },
    keywords: study.techStack.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
      <Navbar />
      <main className="w-full overflow-x-hidden bg-white">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="container-xl relative z-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-[#aaed2e] transition-colors mb-6"
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M13 7H1M6 2L1 7l5 5" />
              </svg>
              Back to Portfolio
            </Link>

            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#aaed2e]/20 border border-[#aaed2e]/40 text-[11px] font-bold text-[#aaed2e] uppercase tracking-widest">
                {study.industry}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-gray-300">
                {study.techStack.length}+ technologies
              </span>
            </div>

            <h1
              className="font-black uppercase text-white leading-[1.02] mb-5"
              style={{ fontSize: "clamp(1.7rem, 5vw, 3rem)" }}
            >
              {study.title}
            </h1>

            {/* <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#aaed2e]">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-white font-bold">Client:</span> {study.client}
              </span>
            </div> */}
          </div>
        </section>

        {/* Featured image */}
        <section className="bg-white w-full">
          <div className="container-xl -mt-10 relative z-10">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e8eaed] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <Image
                src={study.image}
                alt={`${study.title} — ${study.industry} project by Gianni Vilayhane`}
                width={1536}
                height={1024}
                unoptimized
                priority
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1280px"
              />
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="bg-white w-full py-12 lg:py-16">
          <div className="container-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {study.results.map((r, i) => (
                <FadeInUp key={r.metric} delay={i * 0.05}>
                  <div className="rounded-2xl border-2 border-[#e8eaed] p-5 sm:p-6 text-center h-full">
                    <span className="block font-black text-2xl sm:text-3xl text-[#aaed2e] mb-1.5">{r.value}</span>
                    <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-semibold">{r.metric}</span>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white w-full pb-16 lg:pb-24">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-10 min-w-0">
                <div>
                  <h2 className="font-black text-xl text-[#0a0a0a] uppercase mb-3 flex items-center gap-3">
                    <span className="w-1.5 h-6 rounded-full bg-[#aaed2e]" />
                    The Challenge
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h2 className="font-black text-xl text-[#0a0a0a] uppercase mb-3 flex items-center gap-3">
                    <span className="w-1.5 h-6 rounded-full bg-[#aaed2e]" />
                    The Solution
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{study.solution}</p>
                </div>

                {study.keyFeatures && study.keyFeatures.length > 0 && (
                  <div>
                    <h2 className="font-black text-xl text-[#0a0a0a] uppercase mb-4 flex items-center gap-3">
                      <span className="w-1.5 h-6 rounded-full bg-[#aaed2e]" />
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {study.keyFeatures.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-xl border border-[#e8eaed] bg-[#fafbfc] p-3.5 transition-colors duration-200 hover:border-[#aaed2e]/60"
                        >
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-[#aaed2e] flex items-center justify-center flex-shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="3" className="w-3 h-3">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </span>
                          <span className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {study.outcome && (
                  <div className="rounded-2xl border-2 border-[#0a0a0a] bg-[#0a0a0a] text-white p-6 sm:p-7 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#aaed2e]/10 blur-3xl pointer-events-none" />
                    <h2 className="font-black text-xl text-white uppercase mb-3 flex items-center gap-3">
                      <span className="w-1.5 h-6 rounded-full bg-[#aaed2e]" />
                      The Outcome
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed relative z-10">{study.outcome}</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
              {study.industry.toLowerCase() === "mobile" ? (
                  <div className="grid grid-cols-2 gap-3">
                    {study.android_link && (
                      <a
                        href={study.android_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-[1.02] shadow-md"
                        style={{ background: "#aaed2e" }}
                      >
                        Android ↗
                      </a>
                    )}

                    {study.iOS_link && (
                      <a
                        href={study.iOS_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-[1.02] shadow-md"
                        style={{ background: "#aaed2e" }}
                      >
                        iOS ↗
                      </a>
                    )}
                  </div>
                ) : (
                  study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-[1.02] shadow-md"
                      style={{ background: "#aaed2e" }}
                    >
                      Visit Live Site ↗
                    </a>
                  )
                )}
                <div className="rounded-2xl border-2 border-[#e8eaed] p-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full border border-[#0a0a0a]/10 text-xs font-semibold text-[#0a0a0a] bg-[#f8f9fa]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {study.testimonial && (
                  <div className="rounded-2xl border-2 border-[#aaed2e]/30 bg-[#aaed2e]/5 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <svg viewBox="0 0 24 24" fill="#aaed2e" className="w-6 h-6">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#aaed2e]">Client Testimonial</h3>
                    </div>
                    <blockquote className="text-sm text-[#0a0a0a] leading-relaxed italic mb-3">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="text-xs font-bold text-[#0a0a0a]">{study.testimonial.author}</p>
                    <p className="text-xs text-gray-500">{study.testimonial.title}</p>
                  </div>
                )}

                <div className="rounded-2xl bg-[#0a0a0a] p-6 sm:p-7 text-center border border-white/10 shadow-xl">
                  <h3 className="font-black text-white text-lg uppercase mb-2 tracking-tight">Like What You See?</h3>
                  <p className="text-xs text-gray-400 mb-5 leading-relaxed font-medium">Let&apos;s build something great together.</p>
                  <InquiryPopup
                    trigger={
                      <button className="w-full px-6 py-3.5 rounded-full font-bold text-sm text-[#0a0a0a] transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg inline-flex items-center justify-center gap-2" style={{ background: "#aaed2e" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Start Your Project
                      </button>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <nav className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevStudy ? (
                <Link
                  href={`/portfolio/${prevStudy.slug}`}
                  className="group rounded-2xl border border-[#e8eaed] p-5 transition-all duration-300 hover:border-[#aaed2e] hover:shadow-md flex items-center gap-4"
                >
                  <div className="hidden sm:block relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={prevStudy.image} alt="" fill unoptimized className="object-cover" sizes="64px" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1">
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform">
                        <path d="M13 7H1M6 2L1 7l5 5" />
                      </svg>
                      Previous Project
                    </p>
                    <p className="text-xs font-bold text-[#0a0a0a] line-clamp-2 leading-snug group-hover:text-[#aaed2e] transition-colors">
                      {prevStudy.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextStudy ? (
                <Link
                  href={`/portfolio/${nextStudy.slug}`}
                  className="group rounded-2xl border border-[#e8eaed] p-5 transition-all duration-300 hover:border-[#aaed2e] hover:shadow-md flex items-center gap-4 sm:text-right"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1 sm:justify-end">
                      Next Project
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform">
                        <path d="M1 7h12M8 2l5 5-5 5" />
                      </svg>
                    </p>
                    <p className="text-xs font-bold text-[#0a0a0a] line-clamp-2 leading-snug group-hover:text-[#aaed2e] transition-colors">
                      {nextStudy.title}
                    </p>
                  </div>
                  <div className="hidden sm:block relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={nextStudy.image} alt="" fill unoptimized className="object-cover" sizes="64px" />
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </div>
        </section>

        {/* Related projects */}
        <section className="bg-[#f8f9fa] w-full py-14 lg:py-20 border-t border-[#e8eaed]">
          <div className="container-xl">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-black uppercase text-[#0a0a0a]" style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>
                More <span className="text-[#aaed2e]">Work</span>
              </h2>
              <Link
                href="/portfolio"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-extrabold text-[#0a0a0a] hover:text-[#aaed2e] transition-colors"
              >
                View all projects
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                  <path d="M1 7h12M8 2l5 5-5 5" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {relatedStudies.map((related) => (
                <FadeInUp key={related.id}>
                  <Link
                    href={`/portfolio/${related.slug}`}
                    className="group rounded-2xl border border-[#e8eaed] bg-white overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:border-[#aaed2e] h-full"
                  >
                    <div className="relative w-full overflow-hidden" style={{ height: "clamp(150px, 16vw, 190px)" }}>
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-semibold mb-2">
                        <span className="text-[#0a0a0a] font-bold uppercase tracking-wider">{related.industry}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{related.client}</span>
                      </div>
                      <h3 className="font-extrabold text-sm text-[#0a0a0a] leading-snug line-clamp-2 group-hover:text-[#aaed2e] transition-colors mb-2">
                        {related.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mt-auto">{related.challenge}</p>
                    </div>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
