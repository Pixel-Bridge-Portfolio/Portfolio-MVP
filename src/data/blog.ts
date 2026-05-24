export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
};

export const categories = [
  "All",
  "Design",
  "Development",
  "AI",
  "Strategy",
];

export const posts: BlogPost[] = [
  {
    slug: "design-systems-at-scale",
    title: "Building Design Systems That Scale",
    excerpt:
      "How multidisciplinary teams maintain consistency across complex digital products.",
    category: "Design",
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    publishedAt: "May 12, 2025",
    readTime: "6 min read",
    featured: true,
  },

  {
    slug: "future-of-ai-workflows",
    title: "The Future of AI Workflows in Creative Teams",
    excerpt:
      "Why AI-assisted systems are reshaping collaboration between designers and developers.",
    category: "AI",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    publishedAt: "April 28, 2025",
    readTime: "4 min read",
  },

  {
    slug: "frontend-performance",
    title: "Frontend Performance Beyond Lighthouse Scores",
    excerpt:
      "Practical techniques for building interfaces that feel truly fast.",
    category: "Development",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    publishedAt: "March 18, 2025",
    readTime: "5 min read",
  },

  {
    slug: "brand-storytelling",
    title: "Brand Storytelling in Digital Products",
    excerpt:
      "Creating memorable digital experiences through narrative-driven design.",
    category: "Strategy",
    coverImage:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    publishedAt: "February 6, 2025",
    readTime: "7 min read",
  },
];