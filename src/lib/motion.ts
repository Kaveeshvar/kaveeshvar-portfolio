import type { Variants } from "framer-motion";

// Premium easing curves
const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

// Fade up with blur - main reveal animation
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

// Fade up with scale - for cards and panels
export const fadeUpScale: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    scale: 0.95,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.9,
      ease: easeOutExpo,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

// Scale up with bounce
export const scaleUp: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: easeOutBack,
    },
  },
};

// Stagger container
export const stagger: Variants = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1,
    } 
  },
};

// Fast stagger for lists
export const staggerFast: Variants = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.05,
      delayChildren: 0.05,
    } 
  },
};

// Slow stagger for hero sections
export const staggerSlow: Variants = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2,
    } 
  },
};

// Text reveal character by character
export const textReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

// Hover animations for cards
export const cardHover = {
  rest: { 
    scale: 1,
    y: 0,
  },
  hover: { 
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.4,
      ease: easeOutExpo,
    },
  },
};

// Glow pulse animation
export const glowPulse: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Float animation
export const float: Variants = {
  hidden: { y: 0 },
  show: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Line draw animation
export const drawLine: Variants = {
  hidden: { 
    pathLength: 0,
    opacity: 0,
  },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: easeOutExpo },
      opacity: { duration: 0.3 },
    },
  },
};

// Progress bar animation
export const progressBar = (width: string) => ({
  hidden: { 
    width: 0,
    opacity: 0,
  },
  show: {
    width,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easeOutExpo,
    },
  },
});

// Navbar scroll animation
export const navbarVariants: Variants = {
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hidden: { 
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

