export interface FeaturedProject {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Creative Portfolio",
    image: "https://picsum.photos/600/400?1",
    link: "/projects/creative-portfolio",
  },
  {
    id: 2,
    title: "Startup Landing Page",
    image: "https://picsum.photos/600/400?2",
    link: "/projects/startup",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    image: "https://picsum.photos/600/400?3",
    link: "/projects/dashboard",
  },
  {
    id: 4,
    title: "E-Commerce Experience",
    image: "https://picsum.photos/600/400?4",
    link: "/projects/ecommerce",
  },
];