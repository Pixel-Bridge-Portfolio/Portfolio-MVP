
export const fadeInUp = {
  hidden: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: "all 0.5s ease-out",
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: "opacity 0.5s ease-out",
  },
};
// -----------------Home page anime-----------
export const homeSection = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

export const homeItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export const homeButtons = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const homeCards = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};