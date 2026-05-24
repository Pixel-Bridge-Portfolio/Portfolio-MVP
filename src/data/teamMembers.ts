import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";

import {
  MdVideoCameraBack,
  MdBrush,
  MdOutlinePhotoCamera,
} from "react-icons/md";

import {
  TbBrandAdobePhotoshop,
  TbBrandAdobePremier,
  TbBrandAdobeAfterEffect,
} from "react-icons/tb";

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: {
    icon: React.ElementType;
    name: string;
  }[];
  socials: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1755775660054-baf59d0ac3ff?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Sophia creates modern responsive interfaces with strong attention to animations, accessibility, clean UI systems, and high-performance frontend architecture.",
    skills: [
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        icon: SiMui,
        name: "MUI",
      },
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      portfolio: "https://example.com",
    },
  },

  {
    id: 2,
    name: "Emma Rodriguez",
    role: "Creative Designer",
    image:
      "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?q=80&w=1200&auto=format&fit=crop",
    bio: "Emma specializes in modern visual design, branding systems, UI/UX experiences, and professional creative workflows for digital products.",
    skills: [
      {
        icon: TbBrandAdobePhotoshop,
        name: "Photoshop",
      },
      {
        icon: MdBrush,
        name: "Illustrator",
      },
      {
        icon: SiFigma,
        name: "Figma",
      },
      {
        icon: MdOutlinePhotoCamera,
        name: "Adobe XD",
      },
    ],
    socials: {
      linkedin: "https://linkedin.com",
      portfolio: "https://example.com",
    },
  },

  {
    id: 3,
    name: "Olivia Bennett",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    bio: "Olivia develops scalable full stack applications with modern frontend technologies, secure backend APIs, and optimized deployment workflows.",
    skills: [
      {
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      portfolio: "https://example.com",
    },
  },

  {
    id: 4,
    name: "Isabella Moore",
    role: "Video Editor",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    bio: "Isabella produces engaging visual content, cinematic edits, motion graphics, and social media campaigns for modern brands and startups.",
    skills: [
      {
        icon: TbBrandAdobePremier,
        name: "Premiere Pro",
      },
      {
        icon: TbBrandAdobeAfterEffect,
        name: "After Effects",
      },
      {
        icon: MdVideoCameraBack,
        name: "Video Editing",
      },
      {
        icon: TbBrandAdobePhotoshop,
        name: "Photoshop",
      },
    ],
    socials: {
      linkedin: "https://linkedin.com",
      portfolio: "https://example.com",
    },
  },

  {
    id: 5,
    name: "Mia Thompson",
    role: "UI Engineer",
    image:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1200&auto=format&fit=crop",
    bio: "Mia focuses on elegant user interfaces, component systems, responsive layouts, and seamless user experiences across modern web platforms.",
    skills: [
    {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        icon: SiReact,
        name: "React",
      },
      
      {
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },

  {
    id: 6,
    name: "Charlotte Davis",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    bio: "Charlotte designs clean digital experiences with a focus on user-centered design systems, mobile responsiveness, and visual storytelling.",
    skills: [
      {
        icon: SiFigma,
        name: "Figma",
      },
      {
        icon: MdOutlinePhotoCamera,
        name: "Adobe XD",
      },
      {
        icon: MdBrush,
        name: "Illustrator",
      },
    ],
    socials: {
      linkedin: "https://linkedin.com",
      portfolio: "https://example.com",
    },
  },
];