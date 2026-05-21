export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type CoreValue = {
  title: string;
  description: string;
  label: string;
};

export const mission = {
  title: "We build digital products that people remember.",
  description:
    "Pixel Bridge is a multidisciplinary team of engineers, designers, and strategists. We combine strong technical execution with clear creative direction to deliver websites, brand experiences, and product solutions that perform.",
};

export const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Started experimenting with design systems and frontend development.",
  },
  {
    year: "2023",
    title: "Creative Expansion",
    description:
      "Expanded into branding, storytelling, and multidisciplinary collaboration.",
  },
  {
    year: "2024",
    title: "Portfolio MVP",
    description:
      "Focused on building scalable portfolio experiences with modern technologies.",
  },
  {
    year: "2025",
    title: "Global Reach",
    description:
      "Serving clients across 3 continents with a team of 20+ creators.",
  },
];

export const coreValues: CoreValue[] = [
  {
    title: "Craft",
    description: "Attention to detail and thoughtful execution in every experience.",
    label: "CR",
  },
  {
    title: "Code",
    description: "Clean, scalable, and maintainable engineering practices.",
    label: "CD",
  },
  {
    title: "Connect",
    description: "Building meaningful relationships between people and products.",
    label: "CN",
  },
  {
    title: "Create",
    description: "Turning ideas into impactful digital experiences.",
    label: "CT",
  },
];

export const philosophy = {
  title: "The Bridge Philosophy",
  description:
    "We believe the best digital products emerge when design, development, and storytelling work together as one connected system.",
};
