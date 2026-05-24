export type GalleryItem = {
  type: "image" | "video";
  src: string;
};

export type WorkProject = {
  slug: string;
  title: string;
  shortDescription: string;
  client: string;
  industry: string;
  year: string;
  coverImage: string;

  categories: string[];

  heroMedia: {
    type: "image" | "video";
    src: string;
    mobileSrc: string;
  };

  problem: string;
  solution: string;
  result: string;

  stack: string[];

  testimonial: {
    quote: string;
    author: string;
    role: string;
  };

  gallery: GalleryItem[];
};

export const workDetails: WorkProject[] = [
  {
    slug: "celune-watch-brand",
    title: "Celune Watch Brand",
    shortDescription:
      "Luxury watch brand identity designed with elegant and minimal visuals.",
    client: "Celune",
    industry: "Fashion & Accessories",
    year: "2026",
    coverImage: "/branding/img3.jpg",

    categories: ["branding", "design", "product"],

    heroMedia: {
      type: "image",
      src: "/branding/img4.jpg",
      mobileSrc: "/branding/img3.jpg",
    },

    problem:
      "The brand needed a modern and premium visual identity that could reflect elegance, sophistication, and timeless design.",

    solution:
      "We designed a complete branding system in Adobe Illustrator with refined typography, luxury-inspired layouts, and polished visual elements.",

    result:
      "The final branding created a strong and memorable identity that elevated the watch brand's premium presence.",

    stack: ["Adobe Illustrator", "Brand Identity", "Logo Design"],

    testimonial: {
      quote:
        "The branding perfectly captured the luxury and elegance we wanted for our watch collection.",
      author: "Ariana Wells",
      role: "Founder of Celune",
    },

    gallery: [
      {
        type: "image",
        src: "/branding/img5.jpg",
      },
      {
        type: "image",
        src: "/branding/img6.jpg",
      },
      {
        type: "image",
        src: "/branding/img2.jpg",
      },
    ],
  },

  {
    slug: "foodie-hub",
    title: "Foodie Hub",
    shortDescription:
      "Restaurant website built with HTML and Bootstrap for food ordering and discovery.",

    client: "Foodie Hub",
    industry: "Food & Restaurant",
    year: "2026",
    coverImage: "/sites/img1.JPG",

    categories: ["frontend", "design", "comms"],

    heroMedia: {
      type: "video",
      src: "/sites/vid2.mp4",
      mobileSrc: "/sites/vid2.mp4",
    },

    problem:
      "The business needed a responsive website where users could explore menu items and easily navigate restaurant services.",

    solution:
      "We developed a clean and responsive restaurant website using HTML and Bootstrap with modern sections and smooth layouts.",

    result:
      "The website improved the restaurant's online presence and made browsing food items easier across devices.",

    stack: ["HTML", "Bootstrap", "CSS", "JavaScript"],

    testimonial: {
      quote:
        "The website gave our restaurant a fresh and professional online experience.",
      author: "Daniel Carter",
      role: "Owner of Foodie Hub",
    },

    gallery: [
      {
        type: "image",
        src: "/sites/img1.JPG",
      },
      {
        type: "image",
        src: "/sites/img2.JPG",
      },
      {
        type: "image",
        src: "/sites/img3.JPG",
      },
    ],
  },

  {
    slug: "fast-food-brand",
    title: "Fast Food Brand",
    shortDescription:
      "Bold restaurant branding project designed for a modern fast food business.",

    client: "Fast Food Restaurant",
    industry: "Restaurant & Branding",
    year: "2026",
    coverImage: "/branding/img9.jpg",

    categories: ["branding", "design", "social", "video"],

    heroMedia: {
      type: "image",
      src: "/branding/img9.jpg",
      mobileSrc: "/branding/img9.jpg",
    },

    problem:
      "The restaurant lacked a strong visual identity that could attract younger audiences and stand out in a competitive market.",

    solution:
      "We created energetic branding visuals with bold colors, modern typography, and eye-catching promotional assets.",

    result:
      "The new branding helped the restaurant establish a more recognizable and engaging identity.",

    stack: ["Adobe Illustrator", "Branding", "Typography"],

    testimonial: {
      quote:
        "The branding instantly made our restaurant look more modern and exciting.",
      author: "Emily Stone",
      role: "Restaurant Manager",
    },

    gallery: [
      {
        type: "image",
        src: "/branding/img8.jpg",
      },
      {
        type: "image",
        src: "/branding/img7.jpg",
      },
      {
        type: "image",
        src: "/branding/img10.jpg",
      },
    ],
  },

  {
    slug: "bear-and-bean",
    title: "Bear & Bean Coffee Shop",
    shortDescription:
      "Coffee shop branding focused on cozy visuals and warm identity design.",

    client: "Bear & Bean",
    industry: "Coffee Shop & Cafe",
    year: "2026",
    coverImage: "/branding/img13.jpg",

    categories: ["branding", "design", "product"],

    heroMedia: {
      type: "image",
      src: "/branding/img13.jpg",
      mobileSrc: "/branding/img13.jpg",
    },

    problem:
      "The coffee shop needed branding that reflected its warm atmosphere and welcoming customer experience.",

    solution:
      "We designed a friendly and cozy branding system with earthy tones, modern packaging concepts, and cafe-inspired visuals.",

    result:
      "The branding gave the coffee shop a memorable personality and stronger visual consistency.",

    stack: ["Adobe Illustrator", "Brand Identity", "Packaging Design"],

    testimonial: {
      quote:
        "The branding captured the exact cozy feeling we wanted customers to experience.",
      author: "Sophia Lee",
      role: "Owner of Bear & Bean",
    },

    gallery: [
      {
        type: "image",
        src: "/branding/img11.jpg",
      },
      {
        type: "image",
        src: "/branding/img12.jpg",
      },
      {
        type: "image",
        src: "/branding/img14.jpg",
      },
    ],
  },

  {
    slug: "motorx-marketplace",
    title: "MotorX Marketplace",
    shortDescription:
      "Vehicle marketplace website for browsing and buying cars and motorbikes.",

    client: "MotorX",
    industry: "Automotive & Marketplace",
    year: "2026",
    coverImage: "/sites/img4.JPG",

    categories: ["frontend", "product", "backend", "ai"],

    heroMedia: {
      type: "video",
      src: "/sites/vid1.mp4",
      mobileSrc: "/sites/vid1.mp4",
    },

    problem:
      "Users needed a modern platform to browse vehicles easily with a clean interface and responsive experience.",

    solution:
      "We built a fast and interactive marketplace website using Vite and React with modern UI components and smooth navigation.",

    result:
      "The platform created a seamless browsing experience for users searching for cars and motorbikes online.",

    stack: ["Vite", "React", "TailwindCSS", "TypeScript"],

    testimonial: {
      quote:
        "The platform feels modern, smooth, and very easy to use for our customers.",
      author: "Michael Carter",
      role: "Founder of MotorX",
    },

    gallery: [
      {
        type: "image",
        src: "/sites/img4.JPG",
      },
      {
        type: "image",
        src: "/sites/img6.JPG",
      },
      {
        type: "image",
        src: "/sites/img5.JPG",
      },
    ],
  },
];


