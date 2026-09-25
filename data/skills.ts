import type { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "backend",
    iconType: "backend",
    title: "Backend Development",
    description: "Expert in Java, Spring Boot, Microservices & REST API design patterns",
    highlighted: true,
  },
  {
    id: "frontend",
    iconType: "frontend",
    title: "Frontend Development",
    description: "Building modern UIs with React, Next.js, TypeScript & Tailwind CSS",
  },
  {
    id: "database",
    iconType: "database",
    title: "Database Management",
    description: "Expert in PostgreSQL, MySQL, MongoDB, Redis & query optimization",
  },
  {
    id: "devops",
    iconType: "devops",
    title: "DevOps & Messaging",
    description: "Docker containerization, Apache Kafka streaming & CI/CD pipelines",
  },
  {
    id: "api",
    iconType: "api",
    title: "API & Security",
    description: "JWT authentication, OAuth2, Spring Security & API Gateway patterns",
  },
  {
    id: "system",
    iconType: "system",
    title: "System Design",
    description: "Architecting secure, scalable enterprise-grade distributed systems",
  },
];
