import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-eden",
    slug: "eden-ai",
    title: "EDEN - Autonomous Creative AI Studio",
    client: "genekogan.com",
    industry: "AI / Technology",
    challenge:"The generative AI space is dominated by single-shot prompt-and-response tools: type a prompt, get an image, close the tab. Eden set out to build something more ambitious: a platform where creators could build persistent, autonomous AI agents with their own personalities, their own custom-trained visual models, and the ability to collaborate with humans and with each other on multi-step creative work. That meant solving problems the space doesn't have textbook answers for yet — training custom visual models on user-provided samples at reasonable cost, running a workflow ecosystem where community-contributed ComfyUI pipelines could be called autonomously by agents and earn their creators revenue, giving agents context, tools, and identity that persist across sessions, and building all of it on an open-source foundation so the platform stays extensible.",
    solution:"I built the core experience at app.eden.art: a Next.js frontend and Fastify (Node.js) backend where creators build agents, train custom visual models, and generate multi-modal work. Behind it, a FastAPI (Python) orchestration service handles model calls, tool use, and agent execution — turning 'run this agent' into a chain of ComfyUI workflow calls that returns a finished output. A custom Flux LoRA training pipeline deployed on GCP lets users train visual models on their own sample images, so agent output reflects the creator's own style rather than a generic default. Community-contributed ComfyUI workflows become tools any agent can call, with contributors earning revenue when their workflows are used. On top of this, autonomous agents like Eve, Eden's flagship agent, can hold conversations and produce multi-step creative work — art, video, and stories — without a prompt at every step.",
    keyFeatures: [
      "Persistent, autonomous AI agents with their own identity and tools",
      "Custom Flux LoRA visual model training pipeline on GCP",
      "FastAPI orchestration layer for model calls, tool use & workflow execution",
      "Community ComfyUI workflow ecosystem with contributor revenue share",
      "Multi-modal generation: image, video, audio, and multi-step story output",
      "Open-source foundation with a developer SDK and documented API",
    ],
    outcome:"Eden is live at app.eden.art with public agents, custom model training, and multi-modal generation available to creators today. It runs on an open-source foundation with an SDK developers can build on and a documented API at docs.eden.art, and has grown an active community across Discord, X, and Instagram.",
    results: [
      { metric: "Product Status", value: "Live" },
      { metric: "Platform", value: "Open-source + SDK" },
      { metric: "Community", value: "Active" },
      { metric: "Flagship Agent", value: "Eve" },
    ],
    techStack: [
      "Next.js",
      "Fastify (Node.js)",
      "FastAPI (Python)",
      "Google Cloud Platform",
      "ComfyUI",
      "Flux LoRA",
      "Stable Diffusion",
    ],
    image: "/projects/eden.png",
    link: "https://app.eden.art/",
    gallery: ["/projects/eden.png"],
    testimonial: {
      quote: "I endorse! Gianni is a capable engineer.",
      author: "Gene Kogan",
      title: "Co‑Founder, Eden Labs",
    },
    serviceIds: ["fullstack", "aiml", "api", "devops"],
  },
  {
    id: "cs-fxempire",
    slug: "fxempire-market-platform",
    title: "FXEmpire - Financial Markets & Trading Platform",
    client: "FXEmpire",
    industry: "Finance",
    challenge:"FXEmpire operates a large financial publishing and market-data platform covering forex, commodities, stocks, indices, cryptocurrencies, and ETFs. The platform combines financial news and analysis with real-time market information, trading tools, calendars, screeners, and other data-driven features used by traders and investors. My involvement was focused specifically on the backend side of the platform, supporting the APIs and server-side functionality required to deliver reliable financial data and application features without representing the entire FXEmpire product as my work.",
  
    solution:"As a backend contractor, I worked on server-side functionality and API development supporting FXEmpire's financial-market platform. My focus was on building and improving backend services responsible for handling application requests, structuring financial data for frontend consumption, and integrating backend logic with market-oriented features. I worked within the existing platform architecture rather than owning the complete product, contributing specifically to the backend layer that supports data-driven experiences such as market information, financial instruments, and trading-related functionality. The work required attention to API reliability, data consistency, performance, and clean separation between backend services and the user-facing application.",
  
    keyFeatures: [
      "Backend APIs supporting financial-market application features",
      "Server-side processing and delivery of structured market data",
      "Integration of backend services with frontend financial tools",
      "API endpoints for financial instruments and market-oriented functionality",
      "Data validation and transformation for application consumption",
      "Performance and reliability improvements within the backend layer",
    ],
  
    outcome:"My contribution strengthened the backend layer supporting FXEmpire's data-driven financial platform. The work helped provide reliable server-side functionality for a product serving millions of users and handling large volumes of financial information across multiple asset classes. FXEmpire currently reports 10M+ active users, 20K+ live financial prices, and 250K+ published articles.",
  
    results: [
      { metric: "Focus", value: "API & Server-Side Development" },
      { metric: "Domain", value: "Financial Markets" },
      { metric: "Data Coverage", value: "Multi-Asset Market Data" },
      { metric: "Platform Scale", value: "10M+ Active Users" },
    ],
  
    techStack: [
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Backend Services",
      "Financial Market Data",
      "API Integration",
    ],
  
    image: "/projects/fxempire.png",
    link: "https://www.fxempire.com/",
    gallery: ["/projects/fxempire.png"],
  
    testimonial: {
      quote: "",
      author: "",
      title: "",
    },
  
    serviceIds: ["backend", "api", "fintech"],
  },
  {
    id: "cs-keepcoming",
    slug: "keepcoming",
    title: "KeepComing - Digital Loyalty Platform for Independent Shops",
    client: "keepcoming.app",
    industry: "Retail",
    challenge:"Small independent businesses — cafes, restaurants, salons, barbers, retail shops — run on regulars. The paper punch card is the oldest, most reliable retention tool in that world, and also the most fragile: cards get lost, forgotten, or thrown in a drawer. Every existing digital alternative asked customers to download yet another app, which is exactly the friction that kills adoption at the counter. KeepComing set out to build something a customer could opt into in under fifteen seconds, with no download, no account setup, and no card to lose, using infrastructure they already carry: Apple Wallet and Google Wallet. It also targeted a segment most SaaS loyalty tools ignore, independent shops, because average revenue per customer is too small for enterprise sales motions.",
    solution:"I built a multi-tenant SaaS platform on a Next.js frontend and NestJS backend, with PostgreSQL for data, Redis and BullMQ for background jobs, and real integrations with Apple PassKit and the Google Wallet API — the two hardest technical pieces, and the ones most SMB loyalty tools skip. A shop signs up in minutes, sets a reward, and gets a QR code; customers scan it, add the card to Apple Wallet or Google Wallet in one tap, and every visit pushes a real-time update to the card already on their phone. On top of that core loop: multi-channel delivery via QR, link, WhatsApp (WhatsApp Business API), and email; birthday and reward automations that fire on their own once a shop sets the rules; staff scan pages that work from any phone camera with no extra hardware; an owner-facing analytics view for visits, top customers, and redemption patterns; and a native mobile app so shop owners can manage their program on the go. The platform was also built as an ecosystem from day one — a public, versioned developer API and documentation, plus a partners program for agencies, resellers, and technology partners — treating our own frontend as just one client among many.",
    keyFeatures: [
      "Real Apple Wallet & Google Wallet integration with real-time card updates",
      "Zero-download onboarding — customers join in under 15 seconds via QR scan",
      "Multi-tenant architecture with fully isolated customer, staff & analytics data",
      "Birthday & reward automations, staff scan pages, and owner analytics dashboard",
      "Multi-channel delivery: QR, link, WhatsApp, and email",
      "Public developer API, documentation & partners program for third-party integrations",
      "Native mobile app for shop owners to manage loyalty on the go",
    ],
    outcome:"KeepComing is live at www.keepcoming.app with paid customers in production, running real Apple Wallet and Google Wallet integration on both iPhone and Android with real-time updates. It ships a public developer API and documentation so third-party integrations are supported rather than blocked, and runs on a three-tier pricing model with a 14-day, no-credit-card trial.",
    results: [
      { metric: "Product Status", value: "Live / Paid Customers" },
      { metric: "Wallet Platforms", value: "Apple + Google" },
      { metric: "Onboarding Time", value: "<15s" },
      { metric: "Pricing Plans", value: "$19–$79/mo" },
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Apple PassKit",
      "Google Wallet API",
      "WhatsApp Business API",
    ],
    image: "/projects/keepcoming.png",
    link: "https://www.keepcoming.app/",
    gallery: ["/projects/keepcoming.png"],
    testimonial: {
      quote: "",
      author: "",
      title: "",
    },
    serviceIds: ["fullstack", "saas", "api", "mobile"],
  },
  {
    id: "cs-veenox",
    slug: "veenox",
    title: "VeenoX — DeFi Trading & Learning Platform",
    client: "VeenoX",
    industry: "Finance",
  
    challenge:"VeenoX set out to build a decentralized trading platform that delivers a centralized-exchange-quality experience while addressing a major problem in the perpetual trading ecosystem: users often chase trading volume and airdrops without developing real trading knowledge. The platform needed to combine advanced trading workflows with an integrated learning and progression system.",
  
    solution:"I developed a full-stack decentralized trading experience centered around perpetual markets on Monad. The platform combines advanced trading workflows, customizable take-profit and stop-loss management, interactive charting, asset swaps, wallet-based transactions, and trading analytics with an integrated Trading Academy. The Academy uses short professional lessons, simulated trading exercises, and knowledge quizzes to turn education into practical trading experience. A gamified progression system then connects trading performance, education, and community participation to ranks, achievements, fee benefits, lessons, and trading competitions.",
  
    keyFeatures: [
      "Decentralized perpetual trading experience with CEX-quality UX",
      "Multiple take-profit and stop-loss order configurations",
      "Interactive charts with drag-and-drop TP/SL modification",
      "Trading Academy with concise professional lessons",
      "Simulated trading environments for practical learning",
      "Knowledge quizzes covering patterns and market conditions",
      "Soul-Bound Token recognition for completed learning paths",
      "Progressive trader ranking and achievement system",
      "Trading statistics, PnL tracking, and performance metrics",
      "Monad-native spot trading and asset swap functionality",
      "Staking with rewards and reduced trading-fee benefits",
      "Trading events and tier-based competitions",
    ],
  
    outcome:"VeenoX combines decentralized trading, structured education, and gamification into a single ecosystem. Instead of optimizing solely for trading volume, the platform is designed to help users develop trading knowledge, practice strategies, track performance, and progress through a competitive ranking system while participating in the Monad ecosystem.",
  
    results: [
      { metric: "Trading Model", value: "Decentralized Perpetuals" },
      { metric: "Network", value: "Monad" },
      { metric: "Education", value: "Integrated Trading Academy" },
      { metric: "Progression", value: "Tier-Based Ranking System" },
    ],
  
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Web3",
      "Monad",
      "Smart Contracts",
      "Blockchain",
    ],
  
    image: "/projects/veenox.png",
    link: "https://app.veenox.xyz/",
    gallery: [
      "/projects/veenox.png",
    ],
  
    testimonial: {
      quote:
        "VeenoX brings trading, education, and progression together into one decentralized ecosystem, giving traders a more engaging way to learn, practice, and improve.",
      author: "VeenoX Team",
      title: "VeenoX",
    },
  
    serviceIds: ["fullstack", "api", "cloudbackend"],
  },
  {
    id: "cs-heartcloud",
    slug: "heartcloud-digital-health",
    title: "HeartCloud - Digital Health & Remote Patient Monitoring",
    client: "HeartCloud",
    industry: "Healthcare",
    challenge: "Healthcare practices need to manage increasing amounts of patient-generated health data from connected devices while keeping that information useful alongside existing medical records. HeartCloud addresses this by bringing physiologic measurements, patient-reported data, and medical-record information together within the clinical workflow. As a contractor, I contributed to a specific part of the platform focused on connecting digital health data with the application experience and making that information easier to visualize and use.",
    solution: "I contributed to the platform's digital health data workflow, focusing on the application layer responsible for presenting device measurements and patient-generated information in a usable clinical experience. My work involved integrating health data into application workflows, supporting data visualization and patient monitoring experiences, and helping connect information from different digital-health sources with the broader clinical interface. The wider HeartCloud platform supports remote physiologic monitoring, remote therapeutic monitoring, continuous glucose monitoring, chronic condition management, device integrations, patient surveys, care plans, and automated clinical summaries.",
    keyFeatures: [
      "Digital health data visualization for clinical workflows",
      "Remote patient monitoring data experience",
      "Patient-generated health information workflows",
      "Integration of device and medical-record data",
      "Clinical dashboards for monitoring patient measurements",
      "Automated health-data summaries and reporting",
    ],
    outcome: "The contributed functionality supports HeartCloud's broader goal of making remote patient and physiologic data easier for healthcare practices to access and interpret alongside existing clinical information. The platform provides an integrated environment for monitoring measurements, patient-reported outcomes, care plans, and digital health data without requiring practices to leave their existing clinical workflow.",
    results: [
      { metric: "Healthcare Data", value: "Connected & Visualized" },
      { metric: "Monitoring", value: "Remote Patient Monitoring" },
      { metric: "Clinical Data", value: "Device + EMR Context" },
      { metric: "Workflow", value: "Digital Health Integration" },
    ],
    techStack: [
      "Svelte",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "FHIR",
      "API Integrations",
      "Healthcare Data",
    ],
    image: "/projects/heartcloud.png",
    link: "https://www.practices.heartcloud.io/",
    gallery: ["/projects/heartcloud.png"],
    serviceIds: ["healthcare", "api", "integration"],
  },
  {
    id: "cs-homedesignsai",
    slug: "homedesigns-ai",
    title: "HomeDesignsAI - AI-Powered Home Design Platform",
    client: "HomeDesignsAI",
    industry: "AI / Technology",
    challenge:"HomeDesignsAI is an AI-powered design platform that helps users visualize interior, exterior, and garden transformations from real photos. As a contractor on the product, I was brought in to work on a specific part of the AI design workflow rather than the platform as a whole. The focus was improving the generation experience so users could turn an existing space into realistic design concepts while maintaining a simple, fast interaction flow.",
    solution:"I contributed as a contractor to the AI image-generation and design workflow, working on the product layer responsible for taking user-selected design parameters and turning them into generation requests. My work focused on integrating the design-generation flow into the application, handling generation inputs and outputs, and improving how generated results were returned and presented to users. I also worked around the supporting API and frontend integration required to make the AI workflow reliable inside the existing product. The broader platform supports multiple AI use cases including interior and exterior redesign, virtual staging, landscaping, material changes, sketch-to-render, and other visual design tools.",
  
    keyFeatures: [
      "AI-powered interior, exterior, and garden visualization",
      "Photo-based design generation workflow",
      "Generation parameter and style selection",
      "AI image-generation API integration",
      "Frontend integration for generated design results",
      "Reusable workflow for different home-design use cases",
    ],
  
    outcome:"My contribution helped strengthen a production AI workflow inside HomeDesignsAI, giving users a smoother path from uploading an existing space and selecting design preferences to receiving an AI-generated visualization. The platform has since expanded into a broad AI home-design ecosystem serving homeowners and professional users across interior, exterior, landscaping, staging, and architectural visualization use cases.",
    results: [
      { metric: "AI Workflows", value: "Multiple Design Use Cases" },
      { metric: "Design Areas", value: "Interior, Exterior & Garden" },
      { metric: "Generation", value: "Photo-Based AI Visualization" },
      { metric: "Product", value: "Production AI Platform" },
    ],
  
    techStack: [
      "AI Image Generation",
      "REST APIs",
      "JavaScript / TypeScript",
      "React",
      "AI Workflow Integration",
      "Cloud APIs",
    ],
  
    image: "/projects/homedesignsai.png",
    link: "https://homedesigns.ai/",
    gallery: ["/projects/homedesignsai.png"],
    serviceIds: ["fullstack","aiml","api"],
  },
  {
    id: "cs-twinsai",
    slug: "twinsai",
    title: "TwinsAI - Real-Time AI Sales Intelligence",
  
    client: "TwinsAI",
    industry: "AI / Technology",
  
    challenge:"TwinsAI is built around a simple problem: sales teams generate enormous amounts of valuable information during calls and meetings, but much of that context is lost between the conversation, the CRM, and the next sales action. As a contractor, I worked on a specific part of the product focused on transforming conversation data into structured, actionable context for the sales workflow.",
  
    solution:"I contributed to the conversation intelligence workflow, focusing on the application and integration layer that connects AI-generated conversation insights with downstream sales workflows. My work involved handling structured conversation data, integrating AI-generated outputs into the product experience, and supporting the flow of contextual information between the conversation interface and business systems. This helped make conversation-derived information more useful inside the sales workflow rather than treating transcription or summaries as an isolated feature. TwinsAI's broader platform combines real-time AI coaching, botless meeting capture, automated follow-ups, CRM updates, parallel dialing, and revenue agents.",
  
    keyFeatures: [  
      "AI-powered conversation intelligence",
      "Structured extraction of sales conversation context",
      "Real-time contextual information for sales workflows",
      "AI-generated insights and follow-up data",
      "CRM and workflow integration",
      "Conversation data mapped to actionable sales information",
    ],
  
    outcome:"My contribution supported the product's broader goal of turning sales conversations into usable context for revenue teams. Instead of leaving conversation data in transcripts or isolated notes, the workflow connects insights with follow-ups, CRM activity, and other sales actions. TwinsAI now operates as a broader conversation layer across calls, meetings, coaching, and revenue workflows.",
    results: [
      { metric: "Conversation Layer", value: "AI-Powered" },
      { metric: "Workflow", value: "Conversation → Context → Action" },
      { metric: "Integrations", value: "CRM + Sales Platforms" },
      { metric: "Use Case", value: "Sales Intelligence & Automation" },
    ],
    techStack: [
      "AI / LLMs",
      "REST APIs",
      "JavaScript / TypeScript",
      "Real-Time Data Processing",
      "CRM Integrations",
      "AI Workflow Automation",
    ],
    image: "/projects/twinsai.png",
    link: "https://www.twinsai.com/",
    gallery: [
      "/projects/twinsai.png"
    ],
    serviceIds: ["aiml", "api", "automation"],
  },
  {
    id: "cs-waon",
    slug: "waon-online-tracker",
    title: "Waon - Online Tracker & Last Seen",
    client: "Waon",
    industry: "Mobile",
  
    challenge:"Waon is a mobile application designed around real-time online-status and last-seen monitoring. The product needed to present continuously changing status information in a simple mobile experience while supporting notifications and monitoring across multiple contacts. As a contractor, I contributed to a specific part of the mobile application focused on the Flutter implementation and user-facing monitoring experience.",
    solution:"I worked on the Flutter application layer, focusing on the monitoring interface, state management, and real-time notification experience. I used Flutter with GetX to manage reactive application state and keep monitoring-related UI updates synchronized with incoming status information. I also contributed to the contact monitoring interface and notification flow, ensuring the experience remained responsive while handling multiple monitoring tasks. My work was focused on the mobile product layer rather than the entire underlying monitoring infrastructure.",
  
    keyFeatures: [  
      "Flutter-based mobile application interface",
      "Reactive state management with GetX",
      "Real-time online-status notification experience",
      "Last-seen monitoring interface",
      "Multiple-contact monitoring workflow",
      "Responsive UI across different device sizes",
    ],
  
    outcome:"The contributed mobile experience provides users with a streamlined way to view monitored contact activity and receive timely status notifications. The Flutter implementation provides a responsive foundation for the application's monitoring workflows across supported mobile devices.",
  
    results: [
      { metric: "Platform", value: "iOS & Android" },
      { metric: "Framework", value: "Flutter" },
      { metric: "State Management", value: "GetX" },
      { metric: "Core Experience", value: "Real-Time Monitoring" },
    ],
  
    techStack: [
      "Flutter",
      "Dart",
      "GetX",
      "Real-Time Notifications",
      "Mobile UI",
    ],
  
    image: "/projects/waon.png",
    android_link : "https://play.google.com/store/apps/details?id=wa.waon.onlinetracker",
    iOS_link: "https://apps.apple.com/us/app/waon-online-tracker-last-seen/id6667119774",
    gallery: [
      "/projects/waon.png"
    ],
    serviceIds: [
      "mobile",
      "frontend"
    ],
  },
  {
    id: "cs-vagustim",
    slug: "vagustim",
    title: "Vagustim - Wearable Health & Wellness",
    client: "Vagustim",
    industry: "Mobile",
    challenge:"Vagustim is a wearable health and wellness device that delivers gentle electrical pulses through the ears to support stress reduction, sleep, gut health, pain relief, and recovery. The companion mobile app needed reliable Bluetooth connectivity with the device, a scalable architecture for multiple application variants, and a responsive interface that could work consistently across phones and tablets.",
    solution:"I contributed to the Flutter application, focusing on BLE connectivity and the overall mobile architecture. I helped combine multiple applications into a single Flutter project using flavors, while implementing a modular architecture based on Bloc and the Repository pattern. I also built reusable UI components following atomic design principles and ensured screens were responsive across different device sizes. For local data management, I implemented a flexible Hive-based database layer using the Strategy pattern.",
    keyFeatures: [
      "BLE connectivity with the Vagustim wearable device",
      "Flutter flavor-based multi-app architecture",
      "Modular architecture using Bloc and Repository pattern",
      "Responsive interfaces for phones and tablets",
      "Reusable UI components following atomic design principles",
      "Flexible local database layer using Hive",
      "Strategy pattern for adaptable data management",
      "Health and wellness device control experience",
    ],
    outcome:"The resulting Flutter architecture provides a scalable foundation for the Vagustim companion app, with reliable device connectivity, reusable components, responsive interfaces, and flexible local data management. The modular structure also makes it easier to maintain and extend multiple application variants within a single project.",
    results: [
      { metric: "Platform", value: "iOS & Android" },
      { metric: "Framework", value: "Flutter" },
      { metric: "Connectivity", value: "Bluetooth Low Energy" },
      { metric: "Architecture", value: "Bloc + Repository" },
      { metric: "Local Database", value: "Hive" },
      { metric: "UI Approach", value: "Atomic Design" },
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Repository Pattern",
      "Bluetooth Low Energy",
      "Hive",
      "Strategy Pattern",
      "Atomic Design",
      "Responsive UI",
      "Flutter Flavors",
    ],
    image: "/projects/vagustim.png",
    android_link:"https://play.google.com/store/apps/details?id=com.vagustim.vagustimpro&hl=en",
  
    iOS_link:"https://apps.apple.com/tr/app/vagustim/id6480218578?l=en&platform=iphone",
  
    gallery: [
      "/projects/vagustim.png"
    ],
    serviceIds: [
      "mobile",
      "frontend"
    ],
  },
  {
    id: "cs-diya-estate",
    slug: "diya-estate",
    title: "Diya Estate - AI Agents for Real Estate Operations",
    client: "Diya Estate",
    industry: "Real Estate",
  
    challenge: "Real estate professionals spend significant time on lead follow-up, CRM updates, client research, comparative market analysis, document review, and deal coordination. Diya Estate was designed to turn these repetitive operational tasks into AI-assisted workflows while keeping professionals in control of the final decisions. As a contractor, I contributed to a specific part of the platform focused on the application and automation layer rather than building the entire product.",
  
    solution: "I contributed to the AI-powered application workflows that connect real-estate data, client information, and automated actions within the platform. My work focused on integrating workflow logic and user-facing functionality for AI-assisted operations, including structured client information, automated follow-up flows, and data-driven real-estate workflows. The broader platform uses specialized AI agents to handle lead capture, client briefs, automated CMAs, contract and HOA document synthesis, outreach, deal tracking, and CRM updates. Each workflow is designed to prepare an action or deliverable for professional review before it reaches a client.",
  
    keyFeatures: [
      "AI-powered real estate workflow automation",
      "Automated lead capture, qualification, and follow-up",
      "Client briefs with ranked neighborhood and market information",
      "AI-assisted CMA and pricing workflows",
      "Contract and HOA document synthesis with source citations",
      "Self-managing CRM with client context and automated deal tracking",
    ],
  
    outcome: "The contributed functionality supports Diya Estate's broader goal of reducing repetitive operational work for real estate professionals. AI agents can prepare lead responses, client reports, pricing analyses, document summaries, outreach, and deal reminders while keeping human review as the final step. The platform brings these workflows together through a centralized workspace designed for brokerages, firms, and property operations.",
  
    results: [
      { metric: "Industry", value: "Real Estate" },
      { metric: "Workflow", value: "AI-Powered Automation" },
      { metric: "CRM", value: "Self-Managing" },
      { metric: "AI Agents", value: "24/7 Operations" },
    ],
  
    techStack: [
      "React",
      "Laravel",
      "PHP",
      "PostgreSQL",
      "REST APIs",
      "AI / LLM Integration",
      "Real Estate Data",
      "Workflow Automation",
    ],
  
    image: "/projects/diya-estate.png",
  
    link: "https://diya.estate/",
  
    gallery: [
      "/projects/diya-estate.png"
    ],
  
    serviceIds: [
      "aiml",
      "api",
      "automation",
      "realestate"
    ],
  },


  // {
  //   id: "cs-dietomoumi",
  //   slug: "dietomoumi-dietation-doctor",
  //   title: "DIETOMOUMI — Dietation Doctor Platform",
  //   client: "Dietomoumi.in",
  //   industry: "Healthcare",
  //   challenge:
  //     "A professional dietitian needed a complete digital presence — a patient-facing web application with BMI calculation, appointment booking, two-way email notifications, and an SEO-optimised portfolio to attract new clients through organic search and digital marketing.",
  //   solution:
  //     "I built a full-stack React.js application with a Node.js backend. The platform includes a smart BMI calculator with health recommendations, a seamless appointment booking system with calendar integration, and automated email notifications for both the doctor and patients on booking, rescheduling, and reminders. The SEO-optimised architecture includes meta tags, sitemaps, structured data, and performance tuning for top Google rankings. Digital marketing hooks — social sharing, lead capture forms, and analytics — were integrated from day one.",
  //   keyFeatures: [
  //     "Smart BMI calculator with personalized health recommendations",
  //     "Online appointment booking with calendar integration",
  //     "Automated two-way email notifications for bookings, rescheduling & reminders",
  //     "SEO-optimized architecture with structured data, sitemaps & meta tags",
  //     "Lead capture forms, social sharing and analytics from day one",
  //     "Mobile-responsive, fast-loading patient experience",
  //   ],
  //   outcome:
  //     "The platform became the practice's primary lead source. Organic search traffic grew steadily after launch, and automated confirmations and reminders removed the administrative overhead of manual appointment management end-to-end.",
  //   results: [
  //     { metric: "BMI Calculator Accuracy", value: "100%" },
  //     { metric: "Appointment Booking Flow", value: "30s" },
  //     { metric: "Email Notification Delivery", value: "<30s" },
  //     { metric: "SEO Page Speed Score", value: "95+" },
  //   ],
  //   techStack: ["React.js", "Node.js", "Express", "Nodemailer", "SEO", "Digital Marketing"],
  //   image: "/projects/dietomoumi.png",
  //   link: "https://www.dietomoumi.in/",
  //   gallery: ["/projects/dietomoumi.png"],
  //   testimonial: {
  //     quote:
  //       "Gianni built a complete online presence for my practice. Patients love the BMI calculator and the booking system is effortless. The SEO work has doubled my inbound leads through Google searches.",
  //     author: "Moumita D.",
  //     title: "Dietitian & Nutritionist, Dietomoumi",
  //   },
  //   serviceIds: ["fullstack", "uiux", "api", "devops"],
  // },
  // {
  //   id: "cs-dugguz",
  //   slug: "dugguz-delight-restaurant",
  //   title: "Dugguz Delight — Multicuisine Restaurant Platform",
  //   client: "Dugguz Delight",
  //   industry: "Retail",
  //   challenge:
  //     "A multicuisine restaurant needed a complete digital transformation — a customer-facing website with online ordering, table reservations, and reviews, plus an admin panel to manage menu items, track orders, and handle revenue reporting.",
  //   solution:
  //     "I built a full-stack restaurant management system using Next.js for the frontend and Spring Boot for the backend. Customers can browse the menu, place orders, leave reviews, and book tables online. The admin dashboard allows restaurant staff to add/edit menu items, manage incoming orders in real-time, track revenue, and respond to customer reviews. The secure backend handles JWT authentication, role-based access (admin vs. customer), and payment integration.",
  //   keyFeatures: [
  //     "Online menu browsing with real-time inventory sync",
  //     "Contactless table reservations for dine-in customers",
  //     "Customer reviews and ratings for individual dishes",
  //     "Admin dashboard for menu, orders, revenue & review management",
  //     "JWT authentication with role-based access for admin and customers",
  //     "Real-time order updates pushed to the kitchen panel",
  //   ],
  //   outcome:
  //     "Order processing dropped below 15 seconds, giving the kitchen real-time visibility of incoming orders. The admin panel replaced manual spreadsheets, and the review system started feeding directly into the restaurant's quality and menu-planning process.",
  //   results: [
  //     { metric: "Order Processing Time", value: "<15s" },
  //     { metric: "Menu Items Managed", value: "100+" },
  //     { metric: "Customer Reviews", value: "Real-time" },
  //     { metric: "Revenue Tracking", value: "Live" },
  //   ],
  //   techStack: ["Next.js", "Spring Boot", "PostgreSQL", "JWT", "REST API"],
  //   image: "/projects/dugguz.png",
  //   link: "https://dugguz.vercel.app/",
  //   gallery: ["/projects/dugguz.png"],
  //   testimonial: {
  //     quote:
  //       "The online ordering system transformed our business. Customers love the seamless experience, and the admin panel makes managing our menu and tracking revenue effortless.",
  //     author: "Dugguz Delight Team",
  //     title: "Restaurant Management",
  //   },
  //   serviceIds: ["fullstack", "uiux", "api", "database"],
  // },
  // {
  //   id: "cs-supergearz",
  //   slug: "super-gearz-sports-ecommerce",
  //   title: "Super Gearz — Online Sports E-Commerce Platform",
  //   client: "Super Gearz",
  //   industry: "Retail",
  //   challenge:
  //     "Super Gearz needed a full-fledged online sports e-commerce platform with secure payment processing through Razorpay, user authentication, shopping cart, order tracking, and an admin dashboard to manage products, inventory, and orders — all with a fast, modern shopping experience.",
  //   solution:
  //     "I built the platform using Next.js for the frontend and Firebase for the backend. Features include a browsable product catalog with categories and search, a seamless shopping cart with real-time inventory sync, and Razorpay payment gateway integration with secure checkout. The admin dashboard lets staff manage products, track orders, and view sales analytics. Firebase Authentication and Firestore provide secure user management and real-time data sync.",
  //   keyFeatures: [
  //     "Searchable product catalog with categories, filters & sorting",
  //     "Shopping cart with real-time inventory synchronization",
  //     "Razorpay payment gateway with secure, frictionless checkout",
  //     "Order tracking and status updates for customers",
  //     "Admin dashboard for products, orders & sales analytics",
  //     "Firebase Authentication and Firestore for secure, real-time data",
  //   ],
  //   outcome:
  //     "500+ products are now managed from a single dashboard. The 99.5% payment success rate and sub-1.2s page loads give the store a checkout experience that converts consistently, with order fulfillment visible in real time.",
  //   results: [
  //     { metric: "Products Listed", value: "500+" },
  //     { metric: "Payment Success Rate", value: "99.5%" },
  //     { metric: "Page Load Time", value: "<1.2s" },
  //     { metric: "Order Fulfillment", value: "Real-time" },
  //   ],
  //   techStack: ["Next.js", "Firebase", "Razorpay", "Tailwind CSS", "Firestore"],
  //   image: "/projects/supergearz.png",
  //   link: "https://www.supergearz.com/",
  //   gallery: [
  //     "/projects/supergearz.png",
  //   ],
  //   testimonial: {
  //     quote:
  //       "The online store Gianni built handles our entire inventory effortlessly. Our customers love the smooth checkout experience, and the Razorpay integration is super reliable. Sales have increased significantly since launch.",
  //     author: "Super Gearz Team",
  //     title: "Sports Retail",
  //   },
  //   serviceIds: ["fullstack", "uiux", "api", "database"],
  // },
  // {
  //   id: "cs1",
  //   slug: "fintech-payment-platform",
  //   title: "FinTech Payment Processing Platform",
  //   client: "PayBridge Solutions",
  //   industry: "Finance",
  //   challenge:
  //     "PayBridge needed a high-throughput payment processing system capable of handling 10,000+ concurrent transactions with 99.99% uptime, PCI-DSS compliance, and real-time fraud detection — all within a 4-month deadline.",
  //   solution:
  //     "I designed a microservices architecture using Spring Boot with event-driven communication through Apache Kafka. The system featured JWT-based authentication, PostgreSQL for transaction logging, Redis for session caching, and Docker/Kubernetes for orchestration. A custom fraud detection module processed transactions in real-time using rule-based engines.",
  //   keyFeatures: [
  //     "Microservices architecture with event-driven Kafka messaging",
  //     "JWT-based authentication and secure session management",
  //     "Real-time fraud detection with rule-based scoring engines",
  //     "PCI-DSS-aligned transaction logging in PostgreSQL",
  //     "Redis session caching for sub-50ms response paths",
  //     "Docker & Kubernetes orchestration with zero-downtime deploys",
  //   ],
  //   outcome:
  //     "The platform sustained 12,000+ concurrent transactions with 99.97% uptime. The fraud detection module flagged high-risk transactions in real time, and the event-driven core scaled horizontally without a single payment outage across the four-month launch window.",
  //   results: [
  //     { metric: "Concurrent Transactions", value: "12,000+" },
  //     { metric: "Uptime Achieved", value: "99.97%" },
  //     { metric: "Fraud Detection Rate", value: "98.5%" },
  //     { metric: "Average Response Time", value: "45ms" },
  //   ],
  //   techStack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
  //   image: "/projects/fintech.png",
  //   gallery: [
  //     "/projects/fintech.png",
  //   ],
  //   testimonial: {
  //     quote:
  //       "Gianni delivered a payment platform that handles our entire transaction volume flawlessly. The microservices architecture has been rock-solid, and the fraud detection module alone saved us millions.",
  //     author: "Vikram Mehta",
  //     title: "CTO, PayBridge Solutions",
  //   },
  //   serviceIds: ["fullstack", "api", "devops", "database"],
  // },
  // {
  //   id: "cs2",
  //   slug: "healthcare-telemedicine",
  //   title: "Healthcare Telemedicine Platform",
  //   client: "MediConnect India",
  //   industry: "Healthcare",
  //   challenge:
  //     "MediConnect wanted to build a HIPAA-compliant telemedicine platform supporting video consultations, prescription management, appointment scheduling, and electronic health records — accessible on web and mobile.",
  //   solution:
  //     "I built a cross-platform solution using Next.js for the web portal and React Native for mobile apps. The backend ran on Spring Boot with PostgreSQL for health records, Redis for real-time appointment status, and WebRTC for video consultations. End-to-end encryption ensured patient data privacy.",
  //   keyFeatures: [
  //     "Cross-platform web portal and React Native mobile apps",
  //     "WebRTC-powered HD video consultations",
  //     "Digital prescriptions and appointment scheduling",
  //     "Electronic health records with end-to-end encryption",
  //     "Real-time appointment status synced via Redis",
  //     "HIPAA-aligned security controls across the stack",
  //   ],
  //   outcome:
  //     "25,000+ monthly active users consult doctors remotely with an average wait time under two minutes. Patient satisfaction holds steady at 4.8/5, and the encrypted records system runs without a single documented breach since launch.",
  //   results: [
  //     { metric: "Monthly Active Users", value: "25,000+" },
  //     { metric: "Consultation Completion", value: "99.2%" },
  //     { metric: "Patient Satisfaction", value: "4.8/5" },
  //     { metric: "Average Wait Time", value: "<2 min" },
  //   ],
  //   techStack: ["Next.js", "React Native", "Spring Boot", "PostgreSQL", "WebRTC", "Redis"],
  //   image: "/projects/healthcare.png",
  //   gallery: [
  //     "/projects/healthcare.png",
  //   ],
  //   testimonial: {
  //     quote:
  //       "The platform Gianni built transformed how we deliver healthcare. Our doctors can now consult patients remotely with zero technical issues. The HIPAA compliance gives us complete peace of mind.",
  //     author: "Dr. Sneha Kapoor",
  //     title: "Director, MediConnect India",
  //   },
  //   serviceIds: ["fullstack", "mobile", "uiux", "database"],
  // },
  // {
  //   id: "cs3",
  //   slug: "ecommerce-microservices",
  //   title: "E-Commerce Microservices Platform",
  //   client: "ShopNova",
  //   industry: "Retail",
  //   challenge:
  //     "ShopNova's monolithic e-commerce platform was buckling under 50,000 daily users during flash sales. They needed a complete re-architecture to microservices with independent scaling, zero-downtime deployments, and a modern React frontend.",
  //   solution:
  //     "I decomposed the monolith into 8 microservices: Catalog, Cart, Order, Payment, Inventory, Notification, User, and Analytics. Each service was independently deployable via Docker containers orchestrated on Kubernetes. Apache Kafka handled inter-service communication, while PostgreSQL and Redis managed data persistence and caching respectively.",
  //   keyFeatures: [
  //     "8 independently deployable microservices across the commerce domain",
  //     "Kafka-powered asynchronous inter-service communication",
  //     "Independent autoscaling per domain for flash-sale traffic",
  //     "Zero-downtime rolling deployments on Kubernetes",
  //     "Redis caching layer with PostgreSQL for durable persistence",
  //     "Real-time analytics streamed from the event pipeline",
  //   ],
  //   outcome:
  //     "Flash sales now absorb 100K+ concurrent users with 0.8s page loads. Deployment frequency rose to 50x per week, while infrastructure cost fell 35% through targeted autoscaling instead of over-provisioning the monolith.",
  //   results: [
  //     { metric: "Page Load Time", value: "0.8s" },
  //     { metric: "Flash Sale Capacity", value: "100K+ users" },
  //     { metric: "Deployment Frequency", value: "50x/week" },
  //     { metric: "Infrastructure Cost", value: "-35%" },
  //   ],
  //   techStack: ["Spring Boot", "Kafka", "Kubernetes", "PostgreSQL", "Redis", "React", "Docker"],
  //   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&auto=format&fit=crop&q=80",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80",
  //   ],
  //   testimonial: {
  //     quote:
  //       "Our flash sales used to be a nightmare. Now we handle 100K+ concurrent users without breaking a sweat. The microservices architecture Gianni designed is the best investment we've made.",
  //     author: "Arjun Patel",
  //     title: "Founder, ShopNova",
  //   },
  //   serviceIds: ["fullstack", "devops", "database", "api"],
  // },
  // {
  //   id: "cs4",
  //   slug: "edtech-learning-platform",
  //   title: "EdTech Learning Management System",
  //   client: "LearnSphere",
  //   industry: "Education",
  //   challenge:
  //     "LearnSphere needed a complete learning management system with live class integration, progress tracking, assignment submission, certificate generation, and a dashboard for instructors — all while supporting 10,000 concurrent learners.",
  //   solution:
  //     "I built a full-stack LMS using Next.js with TypeScript for the frontend and Spring Boot for the backend. The platform featured real-time live classes via WebRTC, PostgreSQL for course data, MongoDB for activity logs, Redis for caching, and a custom certificate generation engine. Docker containerization ensured consistent deployments.",
  //   keyFeatures: [
  //     "WebRTC-powered live classes with real-time interaction",
  //     "Course progress tracking and assignment submissions",
  //     "Automated certificate generation engine",
  //     "Instructor dashboard for courses, learners & grading",
  //     "Redis caching with MongoDB for high-volume activity logs",
  //     "Docker containerization for consistent, portable deployments",
  //   ],
  //   outcome:
  //     "15,000+ concurrent learners stream content with 99.5% delivery speed. The 78% course completion rate ranks among the best in the platform's category, and instructors run their entire teaching workflow from a single dashboard.",
  //   results: [
  //     { metric: "Concurrent Learners", value: "15,000+" },
  //     { metric: "Course Completion Rate", value: "78%" },
  //     { metric: "Instructor Satisfaction", value: "4.9/5" },
  //     { metric: "Content Delivery Speed", value: "99.5%" },
  //   ],
  //   techStack: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "WebRTC"],
  //   image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&auto=format&fit=crop&q=80",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&auto=format&fit=crop&q=80",
  //   ],
  //   testimonial: {
  //     quote:
  //       "The LMS Gianni built handles our entire student body with ease. The live class integration is seamless, and instructors love the dashboard. It's been a game-changer for our online education.",
  //     author: "Prof. Anita Desai",
  //     title: "CEO, LearnSphere",
  //   },
  //   serviceIds: ["fullstack", "uiux", "database", "devops"],
  // },
];
