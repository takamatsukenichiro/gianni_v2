import React from "react";
import { faqs } from "@/data/process";

export default function StructuredData() {
  const websiteUrl = "https://giannivilayhane.com";
  const logoUrl = `${websiteUrl}/gianni/gianni_pf.png`;
  const profileImageUrl = `${websiteUrl}/gianni/gianni_pf.png`;
  const contactEmail = "gianni@giannivilayhane.com";

  const logoImageObject = {
    "@type": "ImageObject",
    "@id": `${websiteUrl}/#logo`,
    "url": logoUrl,
    "contentUrl": logoUrl,
    "width": 1000,
    "height": 1000,
    "caption": "Gianni Vilayhane — Freelance Full-Stack Developer Logo & Profile",
    "inLanguage": "en-IN"
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${websiteUrl}/#service`,
    "name": "Gianni Vilayhane | Freelance Full-Stack Developer",
    "alternateName": ["Gianni", "Gianni Vilayhane Freelance Developer", "Gianni Developer"],
    "image": profileImageUrl,
    "url": websiteUrl,
    "logo": logoImageObject,
    "email": contactEmail,
    "telephone": "+17864907508",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bellingham",
      "addressRegion": "Washington",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5726",
      "longitude": "88.3639"
    },
    "description": "Freelance full-stack developer Gianni Vilayhane delivering end-to-end digital solutions for startups, SMBs, and enterprises worldwide. From web & mobile apps to DevOps & cloud deployment — hire me for complete software development.",
    "disambiguatingDescription": "Freelance full-stack developer based in Washington, US specializing in React, Next.js, Spring Boot, Node.js, and cloud-native architecture.",
    "sameAs": [
      "https://github.com/giannivilayhane",
      "https://www.linkedin.com/in/gianne-vilayhane",
    ],
    "areaServed": [
      { "@type": "Country", "name": "US" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Australia" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Singapore" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "22.5726",
        "longitude": "88.3639"
      },
      "geoRadius": "25000km"
    },
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${websiteUrl}/api/book-call`,
          "inLanguage": "en",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Free 30-Minute Business & Software Discovery Consultation"
        }
      },
      {
        "@type": "ScheduleAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${websiteUrl}/contact`,
          "inLanguage": "en"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom Business Software, Web Application & Digital Solutions by Gianni Vilayhane",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Business Website & Landing Page Development",
            "serviceType": "Web Development",
            "description": "Bespoke business websites and high-converting landing pages built with Next.js 15, React 19, and Tailwind CSS. 95+ Lighthouse speed scores, responsive design, and SEO-optimized architecture.",
            "url": `${websiteUrl}/services/websites`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Doctor, Clinic & Healthcare Patient Portals",
            "serviceType": "Healthcare Software",
            "description": "Custom medical practice platforms with interactive BMI calculators, appointment booking engines, patient records, and automated two-way email/SMS notifications (as built for Dietomoumi.in).",
            "url": `${websiteUrl}/portfolio/dietomoumi-dietation-doctor`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restaurant Online Ordering & Table Reservation Systems",
            "serviceType": "Hospitality Software",
            "description": "Full-stack restaurant platforms featuring real-time menu management, contactless table reservations, customer review workflows, and live kitchen order management dashboards (as built for Dugguz Delight).",
            "url": `${websiteUrl}/portfolio/dugguz-delight-restaurant`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce & Online Retail Store Development",
            "serviceType": "E-Commerce Development",
            "description": "High-converting online shopping platforms with product catalogs, dynamic filtering, real-time inventory synchronization, and Razorpay/Stripe checkout (as built for Super Gearz sports retail).",
            "url": `${websiteUrl}/portfolio/super-gearz-sports-ecommerce`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Application & SaaS MVP Development",
            "serviceType": "SaaS Engineering",
            "description": "Scalable web applications, SaaS platforms, customer dashboards, and internal business management systems with JWT authentication, role-based access, and payment integrations.",
            "url": `${websiteUrl}/services/web-apps`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cross-Platform Mobile App Development (iOS & Android)",
            "serviceType": "Mobile Development",
            "description": "Single-codebase native performance mobile applications built with React Native and Expo. Push notifications, offline data sync, in-app payments, and App Store & Play Store publication.",
            "url": `${websiteUrl}/services/mobile-apps`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agentic AI Chatbots & Business Process Automation",
            "serviceType": "AI & Automation",
            "description": "Autonomous AI agents and custom conversational chatbots powered by LLMs (OpenAI GPT-4o, Gemini 2.0, Claude) with RAG vector search, WhatsApp automation, and CRM integrations.",
            "url": `${websiteUrl}/services/agentic-ai-chatbots`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO & Generative Engine Optimization (GEO)",
            "serviceType": "SEO & Search Optimization",
            "description": "End-to-end SEO and Generative Engine Optimization (GEO) to rank #1 on Google and secure top citations in ChatGPT Search, Google AI Overviews (SGE), and Perplexity AI.",
            "url": `${websiteUrl}/services/seo-optimization`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FinTech High-Concurrency Microservices & Payment Gateways",
            "serviceType": "FinTech Architecture",
            "description": "Enterprise microservices built with Java 21, Spring Boot 3, Apache Kafka, and PostgreSQL handling 12,000+ concurrent transactions/second with 99.97% uptime (as built for PayBridge).",
            "url": `${websiteUrl}/portfolio/fintech-payment-platform`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design & High-Fidelity Figma Prototypes",
            "serviceType": "Product Design",
            "description": "User-centric UI/UX design with user persona research, wireframing, clickable Figma interactive prototypes, design systems, and seamless developer handoff.",
            "url": `${websiteUrl}/services/ui-ux-design`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domain, SSL Protection & Cloud DevOps Infrastructure",
            "serviceType": "DevOps & Cloud Security",
            "description": "Docker containerization, Kubernetes orchestration, CI/CD pipelines, SSL encryption, security headers (CSP, HSTS), and DDoS protection via Cloudflare.",
            "url": `${websiteUrl}/services/domain-ssl`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing, Google Ads PPC & Growth Strategy",
            "serviceType": "Digital Marketing",
            "description": "Data-driven Google Ads (PPC), Meta Campaigns, Conversion Rate Optimization (CRO), and automated lead acquisition funnels to predictably scale business revenue.",
            "url": `${websiteUrl}/services/digital-marketing`,
            "provider": { "@type": "Person", "name": "Gianni Vilayhane" }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "50",
      "reviewCount": "50"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Moumita D." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Gianni built a complete online presence for my practice at Dietomoumi.in. Patients love the BMI calculator and booking system, and SEO has doubled my inbound leads.",
        "itemReviewed": { "@type": "Service", "name": "Doctor & Dietitian Patient Platform Development" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Dugguz Delight Team" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "The online ordering system transformed our restaurant business. Customers love the seamless experience, and the admin panel makes tracking revenue effortless.",
        "itemReviewed": { "@type": "Service", "name": "Restaurant Online Ordering & Table Reservation Platform" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Super Gearz Team" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "The online store handles our entire inventory of 500+ products effortlessly. Fast checkout and Razorpay integration have significantly increased our online sales.",
        "itemReviewed": { "@type": "Service", "name": "Sports E-Commerce Platform Development" }
      }
    ]
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Gianni Vilayhane",
      "alternateName": ["Gianni", "Gianni Developer"],
      "image": profileImageUrl,
      "description": "Freelance full-stack developer Gianni Vilayhane delivering end-to-end digital solutions for startups, SMBs, and enterprises worldwide. Available for hire — web, mobile, desktop, DevOps, and UI/UX.",
      "knowsAbout": [
        "Full-Stack Development",
        "Web Application Development",
        "Mobile App Development",
        "Desktop Application Development",
        "DevOps & Deployment",
        "Microservices Architecture",
        "UI/UX Design",
        "Cloud Architecture",
        "Freelance Software Development",
        "React & Next.js",
        "Java & Spring Boot",
        "Node.js & Express",
        "PostgreSQL & MongoDB",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "REST API Design",
        "SaaS Development",
        "MVP Development",
        "TypeScript",
        "Firebase",
        "Apache Kafka",
        "Redis",
        "GraphQL",
        "Tailwind CSS",
        "React Native",
        "Electron",
        "Tauri",
        "Figma",
        "System Design",
        "Database Design",
        "Performance Optimization",
        "Search Engine Optimization (SEO)",
        "Generative Engine Optimization (GEO)",
        "Google AI Overviews (SGE) Optimization",
        "ChatGPT Search Optimization",
        "Perplexity AI SEO",
        "Agentic AI Chatbots",
        "Autonomous AI Agents",
        "Retrieval-Augmented Generation (RAG)",
        "LangChain & OpenAI API",
      ],
      "jobTitle": "Freelance Full-Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Self-Employed",
        "url": websiteUrl
      },
      "url": websiteUrl,
      "email": contactEmail,
      "telephone": "+17864907508",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bellingham",
        "addressRegion": "Washington",
        "addressCountry": "US"
      },
      "nationality": {
        "@type": "Country",
        "name": "US"
      },
      "sameAs": [
        "https://github.com/giannivilayhane",
        "https://www.linkedin.com/in/gianne-vilayhane",
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Calcutta"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Freelance Full-Stack Developer",
        "occupationLocation": {
          "@type": "City",
          "name": "Bellingham"
        },
        "skills": "React, Next.js, Spring Boot, Node.js, PostgreSQL, Docker, Kubernetes, TypeScript, Firebase, AWS"
      }
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${websiteUrl}/#organization`,
    "name": "Gianni Vilayhane — Freelance Development Services",
    "alternateName": ["Gianni Developer", "Gianni Vilayhane Portfolio"],
    "url": websiteUrl,
    "logo": logoImageObject,
    "image": logoImageObject,
    "description": "Freelance full-stack development services by Gianni Vilayhane — web, mobile, desktop, DevOps, and UI/UX.",
    "founder": {
      "@type": "Person",
      "name": "Gianni Vilayhane"
    },
    "sameAs": [
      "https://github.com/giannivilayhane",
      "https://www.linkedin.com/in/gianne-vilayhane",
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${websiteUrl}/#website`,
    "url": websiteUrl,
    "name": "Gianni Vilayhane — Freelance Full-Stack Developer",
    "alternateName": "Gianni Developer Portfolio",
    "description": "Freelance full-stack developer Gianni Vilayhane delivering end-to-end digital solutions for startups, SMBs, and enterprises worldwide.",
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "Organization",
      "name": "Gianni Vilayhane — Freelance Development Services",
      "url": websiteUrl,
      "logo": logoImageObject
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${websiteUrl}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${websiteUrl}/#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": websiteUrl },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": `${websiteUrl}/services` },
      { "@type": "ListItem", "position": 3, "name": "Portfolio", "item": `${websiteUrl}/portfolio` },
      { "@type": "ListItem", "position": 4, "name": "Process", "item": `${websiteUrl}/process` },
      { "@type": "ListItem", "position": 5, "name": "Blog", "item": `${websiteUrl}/blog` },
      { "@type": "ListItem", "position": 6, "name": "About", "item": `${websiteUrl}/about` },
      { "@type": "ListItem", "position": 7, "name": "Contact", "item": `${websiteUrl}/contact` },
    ]
  };

  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+17864907508",
    "email": contactEmail,
    "contactType": "sales",
    "availableLanguage": ["English", "Bengali", "Hindi"],
    "areaServed": "Worldwide",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gianni Vilayhane — Freelance Full-Stack Developer",
    "image": profileImageUrl,
    "logo": logoImageObject,
    "url": websiteUrl,
    "telephone": "+17864907508",
    "email": contactEmail,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bellingham",
      "addressRegion": "Washington",
      "postalCode": "98229",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5726",
      "longitude": "88.3639"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "21:00"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "ratingCount": "50"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${websiteUrl}/#faq`,
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build and Launch a Custom Business Web Application with Gianni Vilayhane",
    "description": "A proven 5-step engineering process to design, develop, test, and deploy enterprise-grade custom business websites, web applications, and mobile apps.",
    "image": profileImageUrl,
    "totalTime": "P14D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "Custom"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Discovery & Technical Requirements",
        "text": "Deep-dive architecture consultation to map business logic, database schemas, user roles, APIs, and timeline goals.",
        "url": `${websiteUrl}/process`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "UI/UX Design & Clickable Figma Prototype",
        "text": "Craft high-fidelity Figma mockups and interactive user flows for complete client approval before coding.",
        "url": `${websiteUrl}/process`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Full-Stack Development & Clean Architecture",
        "text": "Build modular frontend (Next.js 15/React 19) and high-concurrency backend (Node.js/Spring Boot) with secure authentication.",
        "url": `${websiteUrl}/process`
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Quality Assurance, Security & Performance Tuning",
        "text": "Rigorous automated testing, penetration testing, database index optimization, and achieving 95+ Google PageSpeed scores.",
        "url": `${websiteUrl}/process`
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Zero-Downtime Cloud Deployment & Technical SEO",
        "text": "Cloud deployment with Docker/Kubernetes/Vercel, SSL encryption, sitemaps, JSON-LD Schema markup, and ongoing maintenance.",
        "url": `${websiteUrl}/process`
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    </>
  );
}
