import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareButtons from "@/components/blog/ShareButtons";
import { FadeInUp } from "@/components/ui/MotionWrappers";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const siteUrl = "https://giannivilayhane.com";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function renderTable(rows: string[]) {
  const cells = (row: string) => row.split("|").slice(1, -1).map((c) => c.trim());
  const isSeparator = (row: string) => {
    const c = cells(row);
    return c.length > 0 && c.every((x) => /^:?-+:?$/.test(x));
  };
  const headerRow = rows[0];
  const bodyRows = rows.slice(1).filter((r) => !isSeparator(r));
  let out = "<table>";
  out += `<thead><tr>${cells(headerRow).map((c) => `<th>${c}</th>`).join("")}</tr></thead>`;
  out += `<tbody>${bodyRows.map((r) => `<tr>${cells(r).map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>`;
  out += "</table>";
  return out;
}

function buildContentHtml(content: string) {
  const lines = content.split("\n");
  const codeBlocks: string[] = [];
  let html = "";
  let inList: "ul" | "ol" | null = null;
  let inCode = false;
  let codeBuffer: string[] = [];
  let inTable = false;
  let tableBuffer: string[] = [];
  let paragraph: string[] = [];

  const closeList = () => {
    if (inList) {
      html += `</${inList}>`;
      inList = null;
    }
  };
  const closeTable = () => {
    if (inTable) {
      html += renderTable(tableBuffer);
      inTable = false;
      tableBuffer = [];
    }
  };
  const flushParagraph = () => {
    if (paragraph.length) {
      html += `<p>${paragraph.join(" ")}</p>`;
      paragraph = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    if (trimmed.startsWith("```")) {
      if (!inCode) {
        flushParagraph();
        closeList();
        closeTable();
        inCode = true;
        codeBuffer = [];
      } else {
        html += `\u0000CODE${codeBlocks.length}\u0000`;
        codeBlocks.push(codeBuffer.join("\n"));
        inCode = false;
      }
      continue;
    }
    if (inCode) {
      codeBuffer.push(lines[i]);
      continue;
    }
    if (trimmed === "") {
      flushParagraph();
      closeList();
      closeTable();
      continue;
    }
    if (trimmed.startsWith("|")) {
      flushParagraph();
      closeList();
      if (!inTable) {
        inTable = true;
        tableBuffer = [];
      }
      tableBuffer.push(trimmed);
      continue;
    }
    if (inTable) {
      closeTable();
    }

    const h2 = trimmed.match(/^##\s+(.+)$/);
    if (h2) {
      flushParagraph();
      closeList();
      html += `<h2 id="${slugify(h2[1])}">${h2[1]}</h2>`;
      continue;
    }
    const h3 = trimmed.match(/^###\s+(.+)$/);
    if (h3) {
      flushParagraph();
      closeList();
      html += `<h3 id="${slugify(h3[1])}">${h3[1]}</h3>`;
      continue;
    }
    const bq = trimmed.match(/^>\s?(.+)$/);
    if (bq) {
      flushParagraph();
      closeList();
      html += `<blockquote>${bq[1]}</blockquote>`;
      continue;
    }
    const ul = trimmed.match(/^-\s+(.+)$/);
    if (ul) {
      flushParagraph();
      if (inList !== "ul") {
        closeList();
        inList = "ul";
        html += "<ul>";
      }
      html += `<li>${ul[1]}</li>`;
      continue;
    }
    const ol = trimmed.match(/^(\d+)\.\s+(.+)$/);
    if (ol) {
      flushParagraph();
      if (inList !== "ol") {
        closeList();
        inList = "ol";
        html += "<ol>";
      }
      html += `<li>${ol[2]}</li>`;
      continue;
    }

    closeList();
    paragraph.push(trimmed);
  }
  flushParagraph();
  closeList();
  if (inCode) {
    html += `\u0000CODE${codeBlocks.length}\u0000`;
    codeBlocks.push(codeBuffer.join("\n"));
  }
  closeTable();

  html = html
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\u0000CODE(\d+)\u0000/g, (_, n) => `<pre><code>${codeBlocks[Number(n)]}</code></pre>`);

  return html;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `${siteUrl}/blog/${post.slug}`;
  const postImage = post.image.startsWith("http")
    ? post.image
    : `${siteUrl}${post.image}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.title.toLowerCase(),
      post.category.toLowerCase(),
      "Gianni Vilayhane blog",
      "full-stack development article",
      "freelance developer blog",
      "software engineering insights",
      `${post.category.toLowerCase()} tutorial`,
      "web development best practices",
      "hire freelance developer",
    ],
    authors: [{ name: post.author, url: siteUrl }],
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
      publishedTime: post.date,
      authors: [post.author],
      locale: "en_IN",
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: `${post.title} — Article by Gianni Vilayhane`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: postImage,
          alt: `${post.title} — Article by Gianni Vilayhane`,
        },
      ],
      site: "@giannivilayhane",
      creator: "@giannivilayhane",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = blogPosts[currentIndex - 1];
  const nextPost = blogPosts[currentIndex + 1];
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const contentHtml = buildContentHtml(post.content);

  const toc = post.content
    .split("\n")
    .filter((line) => line.startsWith("## ") || line.startsWith("### "))
    .map((line) => {
      const isSub = line.startsWith("### ");
      const title = line.replace(/^#{2,3} /, "").trim();
      return { title, id: slugify(title), isSub };
    });

  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const postImage = post.image.startsWith("http")
    ? post.image
    : `${siteUrl}${post.image}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteUrl,
      jobTitle: "Freelance Full-Stack Developer",
      sameAs: [
        "https://github.com/giannivilayhane",
        "https://www.linkedin.com/in/gianne-vilayhane",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Gianni Vilayhane — Freelance Development Services",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/gianni/gianni_pf.png`,
        width: 1000,
        height: 1000,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    image: postImage,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    inLanguage: "en-IN",
    keywords: [post.category, "web development", "software engineering", "freelance developer"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ReadingProgress />
      <Navbar />
      <main className="w-full overflow-x-hidden bg-white">
        {/* Hero */}
        <section className="bg-[#0a0a0a] w-full pt-28 pb-20 lg:pt-36 lg:pb-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, #aaed2e 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
          <div className="container-xl relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-[#aaed2e] transition-colors mb-6"
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M13 7H1M6 2L1 7l5 5" />
              </svg>
              Back to all articles
            </Link>

            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#aaed2e]/20 border border-[#aaed2e]/40 text-[11px] font-bold text-[#aaed2e] uppercase tracking-widest">
                {post.category}
              </span>
              {post.tags?.slice(0, 2).map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-gray-300">
                  #{tag}
                </span>
              ))}
            </div>

            <h1
              className="font-black uppercase text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.9rem)" }}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#aaed2e]">
                  <img src="/gianni/gianni_pf.png" alt={post.author} className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-white">{post.author}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
              <time dateTime={post.date}>{post.date}</time>
              <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
              <span>{post.readTime}</span>
              {post.views && (
                <>
                  <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#aaed2e]">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    {post.views}
                  </span>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Featured image */}
        <section className="bg-white w-full">
          <div className="container-xl -mt-10 relative z-10">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e8eaed] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <Image
                src={post.image}
                alt={`${post.title} — ${post.category} article by Gianni Vilayhane`}
                width={1536}
                height={1024}
                priority
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white w-full py-10 lg:py-16">
          <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Table of contents */}
            {toc.length > 0 && (
              <aside className="lg:col-span-3 hidden lg:block">
                <nav className="sticky top-28 rounded-2xl border border-[#e8eaed] bg-[#fafbfc] p-5 max-h-[calc(100vh-140px)] overflow-y-auto aichat-hide-scroll">
                  <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4">
                    On this page
                  </p>
                  <ul className="space-y-1">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`block text-xs font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors py-1 ${item.isSub ? "pl-3 text-gray-400" : "font-bold"
                            }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            {/* Article */}
            <div className="lg:col-span-9 min-w-0">
              {/* Mobile TOC */}
              {toc.length > 0 && (
                <details className="lg:hidden mb-8 rounded-2xl border border-[#e8eaed] bg-[#fafbfc] p-4">
                  <summary className="text-[11px] font-black uppercase tracking-widest text-gray-500 cursor-pointer select-none">
                    On this page
                  </summary>
                  <ul className="mt-3 space-y-1.5">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className={`text-xs font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors ${item.isSub ? "pl-3" : "font-bold"}`}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <article className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap items-center gap-2 pt-6 border-t border-[#e8eaed]">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400 mr-1">
                    Tags
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full border border-gray-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Share */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#0a0a0a] text-white p-5">
                <div>
                  <p className="text-sm font-black text-white mb-1">Enjoyed this article?</p>
                  <p className="text-xs text-gray-400">Share it with your engineering network.</p>
                </div>
                <ShareButtons url={postUrl} title={post.title} />
              </div>

              {/* Author card */}
              <div className="mt-8 rounded-2xl border-2 border-[#e8eaed] p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-5 bg-[#fafbfc]">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#aaed2e] flex-shrink-0">
                  <img src="/gianni/gianni_pf.png" alt={post.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-black text-sm text-[#0a0a0a] mb-1">
                    {post.author} <span className="font-medium text-gray-400">— Freelance Full-Stack Developer</span>
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    Building enterprise-grade software since 2021. Specializes in Spring Boot microservices,
                    Next.js 15 performance engineering, Docker/Kubernetes DevOps, and Agentic AI systems.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/giannivilayhane"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-[#0a0a0a] border border-[#e8eaed] bg-white px-3.5 py-1.5 rounded-full hover:border-[#0a0a0a] transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gianne-vilayhane"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-[#0a0a0a] border border-[#e8eaed] bg-white px-3.5 py-1.5 rounded-full hover:border-[#0a0a0a] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <Link
                      href="/contact"
                      className="text-[11px] font-bold text-[#0a0a0a] bg-[#aaed2e] px-3.5 py-1.5 rounded-full hover:bg-[#bbf646] transition-colors"
                    >
                      Hire Me
                    </Link>
                  </div>
                </div>
              </div>

              {/* Prev / Next */}
              <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group rounded-2xl border border-[#e8eaed] p-5 transition-all duration-300 hover:border-[#aaed2e] hover:shadow-md flex items-center gap-4"
                  >
                    <div className="hidden sm:block relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={prevPost.image} alt="" fill className="object-cover" sizes="64px" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1">
                        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform">
                          <path d="M13 7H1M6 2L1 7l5 5" />
                        </svg>
                        Previous
                      </p>
                      <p className="text-xs font-bold text-[#0a0a0a] line-clamp-2 leading-snug group-hover:text-[#aaed2e] transition-colors">
                        {prevPost.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group rounded-2xl border border-[#e8eaed] p-5 transition-all duration-300 hover:border-[#aaed2e] hover:shadow-md flex items-center gap-4 sm:text-right"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1 sm:justify-end">
                        Next
                        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform">
                          <path d="M1 7h12M8 2l5 5-5 5" />
                        </svg>
                      </p>
                      <p className="text-xs font-bold text-[#0a0a0a] line-clamp-2 leading-snug group-hover:text-[#aaed2e] transition-colors">
                        {nextPost.title}
                      </p>
                    </div>
                    <div className="hidden sm:block relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={nextPost.image} alt="" fill className="object-cover" sizes="64px" />
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
            </div>
          </div>
        </section>

        {/* Related posts */}
        <section className="bg-[#f8f9fa] w-full py-14 lg:py-20 border-t border-[#e8eaed]">
          <div className="container-xl">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-black uppercase text-[#0a0a0a]" style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>
                Keep <span className="text-[#aaed2e]">Reading</span>
              </h2>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-extrabold text-[#0a0a0a] hover:text-[#aaed2e] transition-colors"
              >
                View all articles
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                  <path d="M1 7h12M8 2l5 5-5 5" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {relatedPosts.map((related) => (
                <FadeInUp key={related.id}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group rounded-2xl border border-[#e8eaed] bg-white overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:border-[#aaed2e] h-full"
                  >
                    <div className="relative w-full overflow-hidden" style={{ height: "clamp(150px, 16vw, 190px)" }}>
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-semibold mb-2">
                        <span className="text-[#0a0a0a] font-bold uppercase tracking-wider">{related.category}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="font-extrabold text-sm text-[#0a0a0a] leading-snug line-clamp-2 group-hover:text-[#aaed2e] transition-colors mb-2">
                        {related.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mt-auto">{related.excerpt}</p>
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
