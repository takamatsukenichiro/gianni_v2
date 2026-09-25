"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:border-[#aaed2e]"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden w-full" style={{ height: "clamp(190px, 22vw, 230px)" }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#0a0a0a]/85 backdrop-blur-md text-[#aaed2e] border border-[#aaed2e]/30 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#aaed2e]" />
            {post.category}
          </span>
        </div>

        {/* Views / Read Time Badge */}
        {post.views && (
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-gray-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-[#aaed2e]">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {post.views}
            </span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1 bg-white">
        <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
          <span className="text-gray-500 font-semibold">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="font-extrabold text-base sm:text-lg text-[#0a0a0a] group-hover:text-[#0a0a0a] line-clamp-2 mb-3 leading-snug tracking-tight">
          {post.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-5 leading-relaxed flex-1 font-normal">
          {post.excerpt}
        </p>

        {/* Tech Tag Pills */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200/60">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-xs font-extrabold text-[#0a0a0a] group-hover:text-[#aaed2e] transition-colors flex items-center gap-1">
            Read Full Article
          </span>
          <div className="w-8 h-8 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center group-hover:bg-[#aaed2e] group-hover:text-[#0a0a0a] transition-all duration-300 group-hover:rotate-45 shadow-sm">
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M1 13L13 1M13 1H5M13 1v8" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPreview() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.id !== featuredPost.id).slice(0, 3);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to subscribe. Please try again.");
      }

      setStatus("success");
      setShowToast(true);
      setEmail("");

      // Auto dismiss toast after 6s
      setTimeout(() => {
        setShowToast(false);
      }, 6000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <section id="blog" className="bg-[#f8f9fa] w-full py-20 lg:py-28 relative overflow-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-4 sm:right-6 z-[99999] transition-all duration-300 animate-slide-in-right">
          <div className="flex items-center gap-3 bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#aaed2e]/60 text-white px-5 py-3.5 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(170,237,46,0.2)]">
            <div className="w-8 h-8 rounded-full bg-[#aaed2e] text-[#0a0a0a] flex items-center justify-center font-black text-xs flex-shrink-0">
              ✓
            </div>
            <div>
              <p className="font-extrabold text-xs text-white uppercase tracking-wider">Subscription Confirmed!</p>
              <p className="text-[11px] text-gray-300 font-medium">Thanks for subscribing. Welcome email sent to your inbox!</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-gray-400 hover:text-white ml-2 text-xs font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Background Accent Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <FadeInUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#aaed2e]/20 border border-[#aaed2e]/50 text-xs font-extrabold text-[#0a0a0a] uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
              Engineering Insights &amp; Deep-Dives
            </div>
            <h2 className="font-black uppercase leading-[0.92] text-[#0a0a0a]" style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)" }}>
              LATEST ARTICLES &amp; <br />
              <span className="relative inline-block text-[#0a0a0a]">
                TECHNICAL GUIDES
                <span className="absolute -bottom-1.5 left-0 h-[6px] w-full rounded-full bg-[#aaed2e]" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="text-xs sm:text-sm text-gray-600 max-w-md lg:text-right font-medium leading-relaxed">
              In-depth system architecture decisions, backend performance tuning, AI engineering, and modern DevOps strategies written by Gianni Vilayhane.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white font-extrabold text-xs hover:bg-[#aaed2e] hover:text-[#0a0a0a] transition-all duration-200 shadow-md group"
            >
              <span>Explore All Articles ({blogPosts.length})</span>
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                <path d="M1 7h12M8 2l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </FadeInUp>

        {/* Featured Hero Article Banner */}
        <FadeInUp className="mb-10 sm:mb-12">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative rounded-3xl border-2 border-gray-900 bg-[#0a0a0a] text-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl transition-all duration-300 hover:border-[#aaed2e]"
          >
            {/* Featured Image */}
            <div className="relative lg:col-span-6 min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 lg:hidden" />

              <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#aaed2e] text-[#0a0a0a] shadow-lg">
                  ★ FEATURED GUIDE
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-extrabold bg-black/70 backdrop-blur-md text-white border border-white/20">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            {/* Featured Content */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-[#0a0a0a] relative z-10">
              <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-4">
                <span className="text-[#aaed2e] font-bold">{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
                {featuredPost.views && (
                  <>
                    <span>•</span>
                    <span className="text-gray-300 font-semibold flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#aaed2e]">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      {featuredPost.views}
                    </span>
                  </>
                )}
              </div>

              <h3 className="font-black text-xl sm:text-2xl lg:text-3xl text-white mb-4 leading-tight group-hover:text-[#aaed2e] transition-colors">
                {featuredPost.title}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {featuredPost.excerpt}
              </p>

              {/* Tags */}
              {featuredPost.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-gray-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-5 border-t border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-[#aaed2e]">
                    <img src="/gianni/gianni_pf.png" alt="Gianni Vilayhane" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-bold text-gray-300">Gianni Vilayhane</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#aaed2e] text-[#0a0a0a] font-extrabold text-xs group-hover:bg-[#bbf646] transition-all">
                  <span>Read Full Article</span>
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                    <path d="M1 7h12M8 2l5 5-5 5" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </FadeInUp>

        {/* Regular Articles Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {regularPosts.map((post) => (
            <StaggerItem key={post.id}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Interactive Technical Newsletter Box */}
        <FadeInUp className="w-full rounded-3xl bg-[#0a0a0a] text-white p-8 sm:p-12 border border-white/15 relative overflow-hidden shadow-2xl">
          {/* Subtle Glow Background */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#aaed2e]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#aaed2e]/20 text-[#aaed2e] border border-[#aaed2e]/30 mb-3">
                Technical Newsletter
              </span>
              <h3 className="font-black text-2xl sm:text-3xl text-white mb-2 uppercase">
                Stay Ahead in Software Engineering
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-medium">
              Get monthly deep-dives on full-stack engineering, enterprise integrations, AI systems, APIs, cloud infrastructure, and software architecture straight to your inbox. No spam, just practical insights from real-world engineering.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px]">
              {status === "success" ? (
                <div className="p-5 rounded-2xl bg-[#121c0b] border border-[#aaed2e]/40 text-[#aaed2e] text-xs font-bold text-center shadow-xl flex items-center justify-center gap-2 animate-fadeIn">
                  <span className="w-5 h-5 rounded-full bg-[#aaed2e] text-[#0a0a0a] flex items-center justify-center font-black text-[10px]">
                    ✓
                  </span>
                  <span>Thanks for subscribing! Welcome email sent to your inbox.</span>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col sm:flex-row items-center gap-2 bg-[#16161b] p-2 rounded-2xl border border-white/15 shadow-inner">
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "submitting"}
                      className="w-full bg-transparent px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#aaed2e] text-[#0a0a0a] font-extrabold text-xs hover:bg-[#bbf646] active:scale-95 transition-all whitespace-nowrap cursor-pointer shadow-md disabled:opacity-50"
                    >
                      {status === "submitting" ? "Subscribing..." : "Subscribe Free"}
                    </button>
                  </div>
                  {status === "error" && errorMsg && (
                    <p className="text-[11px] text-red-400 font-medium px-2">{errorMsg}</p>
                  )}
                </div>
              )}
            </form>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
