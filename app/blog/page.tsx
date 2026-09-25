"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, blogCategories } from "@/data/blog";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrappers";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.tags && p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden bg-[#f8f9fa] min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#0a0a0a] w-full pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden text-white">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="container-xl relative z-10 px-4 sm:px-6 lg:px-8">
            <FadeInUp className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/15 bg-white/5 text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest mb-4 sm:mb-5">
                <span className="w-2 h-2 rounded-full bg-[#aaed2e] animate-pulse" />
                Technical Publications
              </div>
              <h1 className="font-black uppercase text-white leading-[0.95] mb-4 sm:mb-6 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl">
                LATEST ARTICLES &amp; <br />
                <span className="relative inline-block text-[#aaed2e]">
                  TECHNICAL GUIDES
                  <span className="absolute -bottom-1 left-0 h-[4px] sm:h-[5px] w-full rounded-full bg-[#aaed2e]" />
                </span>
              </h1>
              <p className="text-gray-300 text-xs sm:text-base leading-relaxed font-normal mb-6 sm:mb-8">
                In-depth architecture benchmarks, high-concurrency Spring Boot backend tuning, Next.js 15 SEO masterclasses, Docker DevOps, and Agentic AI engineering written by Gianni Vilayhane.
              </p>

              {/* Search Bar */}
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search articles by title, category, or tech stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#16161c] border border-white/20 rounded-xl sm:rounded-2xl px-4 pl-10 sm:pl-11 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#aaed2e] transition-colors shadow-lg"
                />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="bg-white w-full py-4 sm:py-6 border-b border-[#e8eaed] sticky top-[56px] sm:top-[64px] z-30 shadow-xs">
          <div className="container-xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto aichat-hide-scroll py-1">
              {blogCategories.map((cat) => {
                const count = cat === "All" ? blogPosts.length : blogPosts.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${activeCategory === cat
                        ? "bg-[#0a0a0a] text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200/60"
                      }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full font-black ${activeCategory === cat ? "bg-[#aaed2e] text-[#0a0a0a]" : "bg-gray-200 text-gray-700"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="w-full py-12 sm:py-16 lg:py-20">
          <div className="container-xl px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                <p className="text-gray-500 font-bold text-sm sm:text-base mb-2">No technical guides found matching your search.</p>
                <p className="text-xs text-gray-400 mb-6">Try searching for keywords like &quot;Spring Boot&quot;, &quot;Next.js&quot;, or &quot;Docker&quot;.</p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white font-extrabold text-xs hover:bg-[#aaed2e] hover:text-[#0a0a0a] transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                {/* Featured Post Card if viewing "All" and no search filter */}
                {activeCategory === "All" && !searchQuery && (
                  <FadeInUp className="mb-8 sm:mb-12">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="group relative rounded-2xl sm:rounded-3xl border-2 border-gray-900 bg-[#0a0a0a] text-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl transition-all duration-300 hover:border-[#aaed2e]"
                    >
                      <div className="relative lg:col-span-6 h-[220px] xs:h-[260px] sm:h-[320px] lg:h-full overflow-hidden">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 z-10 max-w-[90%]">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-[#aaed2e] text-[#0a0a0a] shadow-lg">
                            ★ FEATURED GUIDE
                          </span>
                        </div>
                      </div>

                      <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-center bg-[#0a0a0a] relative z-10">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-400 font-medium mb-3">
                          <span className="text-[#aaed2e] font-bold">{featuredPost.date}</span>
                          <span>•</span>
                          <span>{featuredPost.readTime}</span>
                          {featuredPost.views && (
                            <>
                              <span>•</span>
                              <span className="text-gray-300 font-semibold">{featuredPost.views}</span>
                            </>
                          )}
                        </div>

                        <h3 className="font-black text-lg sm:text-2xl lg:text-3xl text-white mb-3 sm:mb-4 leading-snug group-hover:text-[#aaed2e] transition-colors">
                          {featuredPost.title}
                        </h3>

                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal line-clamp-3 sm:line-clamp-none">
                          {featuredPost.excerpt}
                        </p>

                        {featuredPost.tags && (
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                            {featuredPost.tags.map((tag, i) => (
                              <span key={i} className="text-[9px] sm:text-[10px] font-bold text-gray-300 bg-white/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-white/10">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pt-4 border-t border-white/15">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-[#aaed2e]">
                              <img src="/gianni/gianni_pf.png" alt="Gianni Vilayhane" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[11px] sm:text-xs font-bold text-gray-300">Gianni Vilayhane</span>
                          </div>

                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#aaed2e] text-[#0a0a0a] font-extrabold text-[11px] sm:text-xs group-hover:bg-[#bbf646] transition-all ml-auto sm:ml-0">
                            <span>Read Article</span>
                            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                              <path d="M1 7h12M8 2l5 5-5 5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeInUp>
                )}

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                  {filtered.map((post) => (
                    <StaggerItem key={post.id}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#aaed2e]"
                      >
                        <div className="relative overflow-hidden w-full h-[190px] xs:h-[210px] sm:h-[220px]">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#0a0a0a]/90 backdrop-blur-md text-[#aaed2e] border border-[#aaed2e]/30 shadow-md">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 sm:p-6 flex flex-col flex-1 bg-white">
                          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-400 font-medium mb-2.5">
                            <span className="text-gray-500 font-semibold">{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="font-extrabold text-base sm:text-lg text-[#0a0a0a] group-hover:text-[#0a0a0a] line-clamp-2 mb-2.5 leading-snug">
                            {post.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed flex-1">
                            {post.excerpt}
                          </p>

                          {post.tags && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {post.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200/60">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between mt-auto">
                            <span className="text-xs font-extrabold text-[#0a0a0a] group-hover:underline">Read Article</span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center group-hover:bg-[#aaed2e] group-hover:text-[#0a0a0a] transition-all duration-300 group-hover:rotate-45 shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                                <path d="M1 13L13 1M13 1H5M13 1v8" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
