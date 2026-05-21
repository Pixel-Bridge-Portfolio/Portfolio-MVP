export interface FeaturedProject {
  id: number;
  title: string;
  summary: string;
  services: string[];
  outcome: string;
  link: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Creative Portfolio Platform",
    summary:
      "A modular portfolio ecosystem focused on storytelling, performance, and visual consistency across devices.",
    services: ["Brand Direction", "UI Engineering", "Content Systems"],
    outcome: "Faster publishing flow with a premium brand presentation.",
    link: "/projects/creative-portfolio",
  },
  {
    id: 2,
    title: "Startup Launch Experience",
    summary:
      "An MVP-ready launch site with clear positioning, conversion-focused sections, and smooth onboarding journeys.",
    services: ["Positioning", "Web Design", "Frontend Architecture"],
    outcome: "Clearer message hierarchy and stronger lead quality.",
    link: "/projects/startup",
  },
  {
    id: 3,
    title: "SaaS Product Dashboard",
    summary:
      "A scalable dashboard interface with reusable design primitives and data-focused interaction patterns.",
    services: ["Product UI", "Design System", "React Implementation"],
    outcome: "Reduced UI debt and faster feature release cycles.",
    link: "/projects/dashboard",
  },
  {
    id: 4,
    title: "Commerce Experience Refresh",
    summary:
      "A high-trust commerce experience with cleaner browsing flows and performance-aware front-end improvements.",
    services: ["UX Strategy", "Interaction Design", "Optimization"],
    outcome: "Higher confidence across key shopping touchpoints.",
    link: "/projects/ecommerce",
  },
];
