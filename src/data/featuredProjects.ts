export interface FeaturedProject {
  id: number;
  title: string;
  summary: string;
  services: string[];
  outcome: string;
  link: string;
}

import { workDetails } from "@/data/workDetails";

const featuredSlugs = [
  "celune-watch-brand",
  "foodie-hub",
  "fast-food-brand",
  "bear-and-bean",
] as const;

export const featuredProjects: FeaturedProject[] = [
  ...featuredSlugs
    .map((slug) => workDetails.find((project) => project.slug === slug))
    .filter(Boolean)
    .map((project, index) => ({
      id: index + 1,
      title: project.title,
      summary: project.shortDescription,
      // Reuse existing UI slots with content from the case study itself.
      services: project.stack.slice(0, 3),
      outcome: project.result,
      link: `/work/${project.slug}/`,
    })),
];
