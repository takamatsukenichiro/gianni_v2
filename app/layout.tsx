import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import AIChatBot from "@/components/AIChatBot";
import BookCallButton from "@/components/BookCallButton";
import WelcomeScreen from "@/components/WelcomeScreen";
import DisableRightClick from "@/components/DisableRightClick";
import ScrollToTop from "@/components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giannivilayhane.com"),
  title: {
    default: "Gianni Vilayhane | Freelance Full-Stack Developer — Web, Mobile & DevOps",
    template: "%s | Gianni Vilayhane — Freelance Developer",
  },
  description:
    "Hire Gianni Vilayhane — an expert freelance full-stack developer & software engineer delivering scalable custom web apps, mobile apps, SaaS products, and DevOps cloud deployments for startups, SMBs, and enterprises worldwide. Based in Washington, US.",
  keywords: [
    "Gianni Vilayhane",
    "Gianni Vilayhane developer",
    "freelance full-stack developer",
    "freelance full stack developer for hire",
    "full-stack developer for hire",
    "hire full-stack developer",
    "hire full stack engineer",
    "freelance web developer",
    "freelance software developer",
    "freelance developer US",
    "freelance developer Washington",
    "hire React developer",
    "hire Next.js developer",
    "hire Spring Boot developer",
    "hire DevOps engineer",
    "freelance mobile app developer",
    "hire React Native developer",
    "freelance UI/UX designer",
    "hire software engineer",
    "freelance Node.js developer",
    "freelance Java developer",
    "contract software developer",
    "remote full-stack developer",
    "web developer Washington",
    "mobile app developer US",
    "custom software development",
    "custom web application development",
    "SaaS application developer",
    "freelance SaaS developer",
    "microservices architecture expert",
    "cloud deployment engineer",
    "Docker Kubernetes freelancer",
    "freelance DevOps consultant",
    "end-to-end software development",
    "business software solutions",
    "zero-downtime deployment",
    "React developer US",
    "Next.js developer US",
    "TypeScript developer",
    "PostgreSQL developer",
    "MongoDB developer",
    "Firebase developer",
    "REST API developer",
    "GraphQL developer",
    "real-time application developer",
    "e-commerce developer",
    "startup MVP developer",
    "freelance MVP developer",
    "enterprise software developer",
    "digital transformation developer",
    "API integration specialist",
    "database design expert",
    "performance optimization expert",
    "SEO optimized web developer",
    "responsive web design",
    "cross-platform mobile development",
    "desktop application developer",
    "Electron app developer",
    "Tauri developer",
    "freelance Figma designer",
    "UI/UX design services",
    "full-stack freelance services",
    "affordable web development",
    "best freelance developer US",
    "top rated full-stack developer",
    "software consultant US",
    "CTO as a service",
    "technical co-founder",
    "MVP development for startups",
    "product development freelancer",
    "agile software developer",
    "clean code developer",
    "scalable web architecture",
    "backend developer US",
    "frontend developer US",
    "full-stack development services",
    "digital product developer",
    "web app development company",
    "custom software company US",
    "hire dedicated developer",
    "staff augmentation developer",
    "outsourced development US",
    "project-based development",
    "fixed-price web development",
    "hourly freelance developer",
    "freelance full-stack developer Washington",
    "hire full-stack developer US",
    "best freelance web developer",
    "top freelance software engineer",
    "full-stack developer for startups",
    "freelance developer for enterprises",
    "digital solutions freelancer",
    "custom website developer US",
    "SaaS MVP developer US",
    "freelance cloud architect",
    "React 19 developer",
    "Next.js 15 developer",
    "Spring Boot 3 expert",
    "Kubernetes cloud deployment",
    "Next.js SEO expert",
    "freelance SEO developer",
    "technical SEO optimization",
    "Generative Engine Optimization",
    "GEO optimization services",
    "Google AI Overviews SEO",
    "ChatGPT Search optimization",
    "Perplexity AI SEO specialist",
    "Agentic AI chatbot developer",
    "autonomous AI agents freelancer",
    "RAG chatbot development",
    "custom business website developer",
    "doctor clinic appointment website developer",
    "dietitian website developer",
    "restaurant food ordering web application",
    "online table reservation system developer",
    "sports ecommerce store developer",
    "retail online store developer",
    "real estate web application developer",
    "gym fitness website developer",
    "healthcare software developer US",
    "fintech payment gateway developer",
    "freelance software consultant Washington",
    "remote software engineer for hire",
  ],
  authors: [{ name: "Gianni Vilayhane", url: "https://giannivilayhane.com" }],
  creator: "Gianni Vilayhane",
  publisher: "Gianni Vilayhane",
  category: "Technology & Software Development",
  icons: {
    icon: [
      { url: "/gianni/gianni_pf.png", type: "image/png" },
      { url: "/gianni/gianni_pf.png", type: "image/png", sizes: "32x32" },
      { url: "/gianni/gianni_pf.png", type: "image/png", sizes: "192x192" },
      { url: "/gianni/gianni_pf.png", type: "image/png", sizes: "512x512" },
      { url: "/sm-logo.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: ["/gianni/gianni_pf.png", "/sm-logo.svg"],
    apple: [
      { url: "/gianni/gianni_pf.png", sizes: "180x180", type: "image/png" },
      { url: "/sm-logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://giannivilayhane.com",
    languages: {
      "en-IN": "https://giannivilayhane.com",
      "en-US": "https://giannivilayhane.com",
      "en-GB": "https://giannivilayhane.com",
      "en-CA": "https://giannivilayhane.com",
      "en-AU": "https://giannivilayhane.com",
      "x-default": "https://giannivilayhane.com",
    },
  },
  openGraph: {
    title: "Gianni Vilayhane | Freelance Full-Stack Developer — Web, Mobile & DevOps",
    description:
      "Hire Gianni Vilayhane — a freelance full-stack developer delivering end-to-end digital solutions for startups, SMBs, and enterprises. From custom web & mobile apps to DevOps & cloud deployment. Available worldwide.",
    type: "website",
    siteName: "Gianni Vilayhane — Freelance Full-Stack Developer",
    url: "https://giannivilayhane.com",
    locale: "en_IN",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        width: 1200,
        height: 630,
        alt: "Gianni Vilayhane — Freelance Full-Stack Developer | Web, Mobile & DevOps",
        type: "image/png",
      },
      {
        url: "https://giannivilayhane.com/sm-logo.svg",
        width: 512,
        height: 512,
        alt: "Gianni Vilayhane BF Logo",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianni Vilayhane | Freelance Full-Stack Developer — Web, Mobile & DevOps",
    description:
      "Hire Gianni Vilayhane — a freelance full-stack developer delivering end-to-end digital solutions for startups, SMBs, and enterprises. Web, mobile, DevOps — all under one roof.",
    images: [
      {
        url: "https://giannivilayhane.com/gianni/gianni_pf.png",
        alt: "Gianni Vilayhane — Freelance Full-Stack Developer",
        width: 1200,
        height: 630,
      },
    ],
    site: "@giannivilayhane",
    creator: "@giannivilayhane",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google1e768dc26890864e",
  },
  other: {
    "msvalidate.01": "bing-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="icon" href="/gianni/gianni_pf.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/gianni/gianni_pf.png" type="image/png" />
        <link rel="apple-touch-icon" href="/gianni/gianni_pf.png" />
        <meta name="theme-color" content="#aaed2e" />
        <meta name="msapplication-TileColor" content="#aaed2e" />
        <meta name="msapplication-TileImage" content="/gianni/gianni_pf.png" />
        <meta property="og:logo" content="https://giannivilayhane.com/gianni/gianni_pf.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('gianni-website-lockout-until') || localStorage.getItem('gianni-chat-lockout-until');
                  if (saved && Number(saved) > Date.now()) {
                    document.documentElement.classList.add('website-locked-active');
                  }
                } catch(e){}
                document.addEventListener('contextmenu', function(e) {
                  e.preventDefault();
                }, false);
              })();
            `,
          }}
        />
        <StructuredData />
      </head>
      <body className="min-h-screen font-[family-name:var(--font-space-grotesk)] bg-white text-[#0a0a0a]">
        <DisableRightClick />
        <WelcomeScreen />
        {children}
        <AIChatBot />
        <BookCallButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
