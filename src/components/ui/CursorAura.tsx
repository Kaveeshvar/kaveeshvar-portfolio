"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorAura() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const sx = useSpring(x, { stiffness: 300, damping: 35, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 300, damping: 35, mass: 0.6 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 160);
      y.set(e.clientY - 160);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <>
      {/* Big soft glow */}
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[5] h-[320px] w-[320px] rounded-full"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(60,242,255,0.18), rgba(139,92,246,0.10), transparent 60%)",
            filter: "blur(18px)",
          }}
        />
      </motion.div>

      {/* Tiny crisp core */}
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[6] h-[120px] w-[120px] rounded-full opacity-70"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.14), transparent 60%)",
            filter: "blur(10px)",
          }}
        />
      </motion.div>
    </>
  );
}
