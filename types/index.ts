export type Skill = {
  id: string;
  iconType: "backend" | "frontend" | "database" | "devops" | "api" | "system";
  title: string;
  description: string;
  highlighted?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export type Accomplishment = {
  id: string;
  value: string;
  label: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type Service = {
  id: string;
  iconType: "website" | "webapp" | "mobile" | "desktop" | "uiux" | "security" | "seo" | "marketing" | "chatbot" | "integration";
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  startingPrice: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  keyFeatures?: string[];
  outcome?: string;
  results: { metric: string; value: string }[];
  techStack: string[];
  image: string;
  gallery: string[];
  link?: string;
  android_link?: string;
  iOS_link?: string;
  testimonial?: { quote: string; author: string; title: string };
  serviceIds: string[];
};

export type ProcessStep = {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  deliverables: string[];
  iconType: "discover" | "design" | "develop" | "deploy" | "support";
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  featured?: boolean;
  views?: string;
  tags?: string[];
};

export type InquiryFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
  referralSource: string;
};

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};
