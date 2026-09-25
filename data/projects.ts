import type { Project, Accomplishment, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-microservices",
    title: "E-Commerce Microservices Platform",
    description:
      "Built a fully functional e-commerce platform using Spring Boot microservices with JWT auth, Kafka event streaming, and Docker orchestration.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&auto=format&fit=crop&q=80",
    tags: ["Java", "Spring Boot", "Kafka", "Docker"],
    link: "#",
  },
  {
    id: "banking-api",
    title: "Banking REST API System",
    description:
      "Designed and built a secure banking REST API with Spring Security, JWT authentication, PostgreSQL, and comprehensive audit logging.",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=700&auto=format&fit=crop&q=80",
    tags: ["Spring Security", "JWT", "PostgreSQL"],
    link: "#",
  },
  {
    id: "realtime-chat",
    title: "Real-time Chat Application",
    description:
      "Developed a real-time messaging platform with Spring WebSocket, Kafka message broker, React frontend, and Redis session caching.",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=700&auto=format&fit=crop&q=80",
    tags: ["Kafka", "WebSocket", "React", "Redis"],
    link: "#",
  },
  {
    id: "task-dashboard",
    title: "Enterprise Task Dashboard",
    description:
      "Created a full-stack task management app with Next.js, Spring Boot REST API, PostgreSQL database, and real-time status updates.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=80",
    tags: ["Next.js", "Spring Boot", "TypeScript"],
    link: "#",
  },
];

export const accomplishments: Accomplishment[] = [
  { id: "projects", value: "80+", label: "Projects Completed" },
  { id: "experience", value: "12+", label: "Years Experience" },
  { id: "technologies", value: "40+", label: "Technologies Mastered" },
  { id: "apis", value: "160+", label: "REST APIs Designed" },
];

export const socialLinks: SocialLink[] = [
  { id: "github", label: "Gh", href: "https://github.com/giannivilayhane" },
  { id: "linkedin", label: "In", href: "https://www.linkedin.com/in/gianne-vilayhane" },
];