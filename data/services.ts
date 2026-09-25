import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "website",
    iconType: "website",
    title: "Custom Business Website Development",
    shortDescription:
      "Modern, fast, and secure websites for clinics, restaurants, retail brands, and professional services that convert visitors into paying clients.",
    fullDescription:
      "I build high-performance business websites that convert visitors into revenue. From medical clinics and dietitian platforms to restaurant portals, fitness brands, and corporate landing pages - every site is engineered with Next.js 15, 95+ Google PageSpeed scores, and Schema.org structured SEO for top search rankings.",
    features: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "Technical SEO & Schema.org JSON-LD structured data",
      "Sub-second load times (95+ Lighthouse score)",
      "Interactive lead capture forms & booking integration",
      "SSL certificate installation & security hardening",
      "Dynamic blog & Content Management System (CMS)",
      "Google Analytics 4 & Meta Pixel conversion tracking",
      "Domain DNS setup & zero-downtime deployment",
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Vercel", "WordPress Headless"],
    startingPrice: "Custom",
  },
  {
    id: "webapp",
    iconType: "webapp",
    title: "Web Application & SaaS MVP Development",
    shortDescription:
      "Scalable SaaS platforms, custom dashboards, booking engines, and internal management tools with secure auth and payment integration.",
    fullDescription:
      "I build production-ready web applications and SaaS platforms that automate business operations and process real-time transactions. From multi-tenant SaaS MVPs and clinic patient management portals to restaurant food ordering dashboards and marketplace platforms - secure JWT auth, real-time WebSockets, and payment gateways included.",
    features: [
      "Secure JWT authentication & role-based access control",
      "Live analytics dashboards & custom reporting panels",
      "Stripe & Razorpay payment gateway integrations",
      "Real-time notifications, WebSockets & order sync",
      "PostgreSQL & MongoDB scalable database architecture",
      "RESTful API & GraphQL microservice design",
      "Automated CI/CD deployment & cloud hosting",
      "Dedicated post-launch maintenance & security patches",
    ],
    technologies: ["Next.js", "React", "Node.js", "Spring Boot 3", "PostgreSQL", "Redis", "Docker", "Kafka"],
    startingPrice: "Custom",
  },
  {
    id: "mobile",
    iconType: "mobile",
    title: "Cross-Platform Mobile App Development",
    shortDescription:
      "Native-speed iOS and Android mobile apps from a single codebase, published directly to Apple App Store and Google Play Store.",
    fullDescription:
      "I develop cross-platform mobile apps for iOS and Android using React Native and Expo. Whether you need a customer e-commerce app, food ordering mobile client, health appointment tool, or field service business app - I handle end-to-end architecture, mobile payment SDKs, and store submission.",
    features: [
      "Single codebase for iOS & Android with native performance",
      "Push notifications & user engagement triggers",
      "Offline database sync & local data persistence",
      "Camera, GPS location & biometric device access",
      "Secure mobile authentication & user profile management",
      "In-app purchases, subscriptions & mobile wallets",
      "Full App Store & Google Play Store submission support",
      "Real-time crash reporting & analytics monitoring",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase Firestore", "Swift", "Kotlin", "Stripe Mobile"],
    startingPrice: "Custom",
  },
  {
    id: "desktop",
    iconType: "desktop",
    title: "Desktop Application Development",
    shortDescription:
      "High-performance desktop software for Windows, macOS, and Linux - ideal for internal tools and professional software.",
    fullDescription:
      "Need desktop software that runs natively on your machine? I build cross-platform desktop applications for Windows, macOS, and Linux - perfect for internal business tools, data processing software, inventory systems, or any application that needs local performance and file access.",
    features: [
      "Cross-platform (Windows, macOS, Linux)",
      "Native look and feel",
      "File system access & management",
      "Offline capability",
      "Auto-update mechanism",
      "System tray & background services",
      "Database integration (local + cloud)",
      "Professional UI/UX design",
    ],
    technologies: ["Electron", "Tauri", "React", "TypeScript", "Node.js", "SQLite"],
    startingPrice: "Custom",
  },
  {
    id: "uiux",
    iconType: "uiux",
    title: "UI/UX Design",
    shortDescription:
      "Clean, intuitive designs that users love - wireframes, prototypes, and design systems for web and mobile.",
    fullDescription:
      "Great software starts with great design. I create clean, intuitive interfaces through user research, wireframing, high-fidelity prototypes, and usability testing - ensuring your product is not just functional but enjoyable to use.",
    features: [
      "User research & persona development",
      "Wireframing & information architecture",
      "High-fidelity prototypes (Figma)",
      "Design system & component library",
      "Responsive & mobile-first design",
      "Usability testing & iteration",
      "Brand identity & visual language",
      "Developer-ready handoff",
    ],
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Storybook", "Framer"],
    startingPrice: "Custom",
  },
  {
    id: "security",
    iconType: "security",
    title: "Domain & SSL Protection",
    shortDescription:
      "Secure your online presence with domain setup, SSL certificates, DNS management, and ongoing security monitoring.",
    fullDescription:
      "I help you secure your digital assets end-to-end - from domain registration and DNS configuration to SSL certificate installation, security headers, and ongoing vulnerability monitoring. Your website and users stay protected around the clock.",
    features: [
      "Domain registration & DNS management",
      "SSL certificate installation & renewal",
      "HTTPS enforcement & redirect setup",
      "Security headers (CSP, HSTS, X-Frame)",
      "DDoS protection & rate limiting",
      "Vulnerability scanning & patching",
      "Backup & disaster recovery setup",
      "24/7 uptime monitoring & alerts",
    ],
    technologies: ["Cloudflare", "Let's Encrypt", "Nginx", "AWS Route 53", "Namecheap", "GoDaddy"],
    startingPrice: "Custom",
  },
  {
    id: "seo",
    iconType: "seo",
    title: "SEO & GEO Optimization",
    shortDescription:
      "Dominate Google search results and rank in AI search engines (ChatGPT, Google AI Overviews, Perplexity) with unified SEO & GEO strategies.",
    fullDescription:
      "I deliver end-to-end Search Engine Optimization (SEO) and Generative Engine Optimization (GEO) solutions. From Technical SEO and speed performance to JSON-LD Schema and AI search citations, your site will rank #1 on Google and get recommended by AI models.",
    features: [
      "Technical SEO & site architecture audit",
      "Generative Engine Optimization (GEO) strategy",
      "Google AI Overviews & ChatGPT Search citations",
      "Core Web Vitals & speed optimization (90+ score)",
      "JSON-LD Schema & Knowledge Graph markup",
      "Keyword research & entity mapping",
      "Local SEO & Google Business Profile",
      "Monthly analytics & AI visibility tracking",
    ],
    technologies: ["Google Search Console", "Google AI Overviews", "ChatGPT Search", "Perplexity", "Schema.org", "Next.js SEO"],
    startingPrice: "Custom",
  },
  {
    id: "marketing",
    iconType: "marketing",
    title: "Digital Marketing & Growth",
    shortDescription:
      "Data-driven digital marketing campaigns - Google Ads, Meta Ads, Content Strategy, CRO, and Lead Generation.",
    fullDescription:
      "Scale your business revenue with comprehensive digital marketing services. From targeted paid search ads (PPC) and social media campaigns to Conversion Rate Optimization (CRO) and automated lead funnels, I help businesses acquire customers predictably.",
    features: [
      "Google Ads & Meta Paid Advertising (PPC)",
      "Conversion Rate Optimization (CRO)",
      "Content Marketing & Strategic Copywriting",
      "Social Media Growth & Brand Positioning",
      "Email Marketing & Lead Nurturing Automation",
      "Funnel Optimization & Landing Page CRO",
      "Google Analytics 4 & Conversion Tracking",
      "Competitor Benchmarking & ROI Reporting",
    ],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics 4", "HubSpot", "Mailchimp", "Hotjar"],
    startingPrice: "Custom",
  },
  {
    id: "chatbot",
    iconType: "chatbot",
    title: "Agentic AI Chatbots & Automation",
    shortDescription:
      "Autonomous AI agents and custom conversational chatbots that automate customer support, lead capture, and business workflows.",
    fullDescription:
      "I build intelligent, agentic AI chatbots powered by LLMs (OpenAI, Claude, Llama) that perform complex tasks, query databases, schedule appointments, and convert leads 24/7.",
    features: [
      "Autonomous AI Agent architecture",
      "Custom knowledge base & RAG (Retrieval-Augmented Generation)",
      "Multi-channel support (Website, WhatsApp, Telegram, Slack)",
      "CRM & database integration (HubSpot, PostgreSQL)",
      "Lead qualification & appointment booking automation",
      "Human handoff & live chat escalation rules",
      "Privacy-first & enterprise security compliance",
      "Analytics dashboard & conversation insights",
    ],
    technologies: ["OpenAI API", "LangChain", "LlamaIndex", "Vector DBs", "Pinecone", "Next.js", "Python"],
    startingPrice: "Custom",
  },
  {
    id: "integration",
    iconType: "integration",
    title: "System Integration & Business Automation",
    shortDescription:
      "Connect business systems, APIs, and third-party services through reliable integrations and automated workflows.",
    fullDescription:
      "I build middleware and integration systems that connect the tools your business relies on and automate the workflows between them. From CRM, payments, and communication platforms to internal applications and databases, I synchronize data, orchestrate APIs, and automate multi-step business processes so your systems work together seamlessly.",
    features: [
      "Multi-system & third-party API integration",
      "Custom middleware & integration layers",
      "CRM, ERP & SaaS system integration",
      "API orchestration & data synchronization",
      "Webhook & event-driven workflows",
      "Automated business process workflows",
      "Payment & subscription system integration",
      "Email, SMS & notification automation",
      "Internal application & database integration",
      "Integration monitoring, logging & error handling",
    ],
    technologies: [
      "REST APIs",
      "GraphQL",
      "Webhooks",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Make.com",
      "n8n",
    ],
    startingPrice: "Custom",
  },
];
