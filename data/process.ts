import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    stepNumber: 1,
    title: "Discovery & Strategy",
    description:
      "I start by understanding your business, goals, users, and technical requirements. Through workshops, competitive analysis, and stakeholder interviews, I define a clear roadmap for your project.",
    deliverables: [
      "Project brief and scope document",
      "Technical architecture proposal",
      "Timeline and milestone plan",
      "Risk assessment report",
    ],
    iconType: "discover",
  },
  {
    id: "design",
    stepNumber: 2,
    title: "UI/UX Design",
    description:
      "My design phase transforms strategy into visual reality. I create wireframes, interactive prototypes, and high-fidelity designs that are both beautiful and user-centred — validated through real user feedback.",
    deliverables: [
      "User personas and journey maps",
      "Wireframes and information architecture",
      "Interactive prototype (Figma)",
      "Design system and component library",
    ],
    iconType: "design",
  },
  {
    id: "develop",
    stepNumber: 3,
    title: "Development & Testing",
    description:
      "Using agile sprints, I build your product with clean, scalable code. Every feature is unit-tested, integration-tested, and code-reviewed. You get regular demos and can provide feedback at every sprint.",
    deliverables: [
      "Clean, documented source code",
      "Unit and integration tests",
      "API documentation (Swagger)",
      "Sprint demo and feedback sessions",
    ],
    iconType: "develop",
  },
  {
    id: "deploy",
    stepNumber: 4,
    title: "Deployment & Launch",
    description:
      "I handle the entire deployment pipeline — Docker containerization, CI/CD, cloud infrastructure, domain setup, DNS configuration, SSL/TLS certificates, and performance optimization. Zero-downtime launches guaranteed.",
    deliverables: [
      "Dockerized application",
      "CI/CD pipeline (GitHub Actions)",
      "Cloud infrastructure (AWS/GCP/Azure)",
      "Domain, DNS, and SSL/TLS configuration",
    ],
    iconType: "deploy",
  },
  {
    id: "support",
    stepNumber: 5,
    title: "Support & Evolution",
    description:
      "Post-launch, I provide ongoing monitoring, bug fixes, performance optimization, and feature additions. Your product evolves with your business needs — I'm always just a message away.",
    deliverables: [
      "Monitoring and alerting setup",
      "Bug fixes and security patches",
      "Performance optimization reports",
      "Feature roadmap and iterations",
    ],
    iconType: "support",
  },
];

export const faqs = [
  {
    id: "q1",
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. A small web app takes 4-8 weeks, a medium full-stack project 2-4 months, and enterprise-grade systems 4-8 months. As a freelance developer, I provide a detailed timeline during the Discovery phase and keep you updated at every sprint.",
  },
  {
    id: "q2",
    question: "Do you work with startups or only enterprises?",
    answer:
      "I work with everyone — from early-stage startups building their MVP to established enterprises modernizing their systems. As a freelance developer, my flexible engagement models adapt to your needs and budget. I&apos;m especially passionate about helping startups launch their first product.",
  },
  {
    id: "q3",
    question: "What happens after the project is launched?",
    answer:
      "Every project includes post-launch support (duration depends on the scope). I handle bug fixes, monitoring, and minor updates. For ongoing needs, I offer freelance retainer packages and dedicated hourly/monthly arrangements.",
  },
  {
    id: "q4",
    question: "How do you ensure code quality?",
    answer:
      "Every line of code goes through peer code reviews, automated testing (unit + integration), linting, and security scans. I follow clean architecture principles and industry best practices. As a freelance developer, my reputation depends on the quality I deliver.",
  },
  {
    id: "q5",
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. I offer staff augmentation, pair programming, and consulting models where I integrate directly with your team. I adapt to your tools, processes, and communication channels. Many clients hire me as a freelance extension of their in-house team.",
  },
  {
    id: "q6",
    question: "What technologies do you use?",
    answer:
      "I specialize in Java, Spring Boot, React, Next.js, TypeScript, PostgreSQL, Redis, Docker, Kubernetes, and Kafka. But I choose technologies based on what&apos;s best for your specific project, not one-size-fits-all.",
  },
  {
    id: "q7",
    question: "How do I hire you as a freelance developer?",
    answer:
      "Simply reach out via the contact form or email. We&apos;ll start with a free 30-minute consultation to understand your project. I&apos;ll then provide a detailed proposal with timeline, cost, and approach. You can hire me for fixed-price projects or on an hourly/monthly basis.",
  },
  {
    id: "q8",
    question: "What are your freelance rates?",
    answer:
      "Every project is unique, so I provide custom quotes based on scope, complexity, and timeline. I offer competitive freelance rates for startups and businesses of all sizes. Contact me for a free estimate — no obligation.",
  },
  {
    id: "q9",
    question: "Do you offer ongoing freelance support and maintenance?",
    answer:
      "Yes! I offer flexible freelance retainer packages for ongoing development, maintenance, monitoring, and feature additions. Many of my clients maintain long-term freelance relationships for continuous product evolution.",
  },
  {
    id: "q10",
    question: "Do you sign Non-Disclosure Agreements (NDA) and transfer IP rights?",
    answer:
      "Yes, 100%. I sign a strict NDA before discussing sensitive project details. Upon full payment, 100% of the intellectual property (IP) rights, source code, design files, and deployment assets belong entirely to you.",
  },
];
