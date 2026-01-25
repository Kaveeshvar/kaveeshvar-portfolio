"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgba(60,242,255,0.95), rgba(139,92,246,0.85), rgba(236,72,153,0.75))",
        boxShadow: "0 0 20px rgba(60,242,255,0.18)",
      }}
    />
  );
}
