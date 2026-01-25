"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

export function Card({ className, children, hover = false, glow = false, gradient = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.01 } : undefined}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-white/[0.03] dark:bg-white/[0.03]",
        "border border-white/[0.08]",
        "backdrop-blur-xl",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_50px_-12px_rgba(0,0,0,0.25)]",
        hover && "cursor-pointer transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_25px_60px_-12px_rgba(0,0,0,0.4)]",
        hover && "hover:border-cyan-500/20",
        glow && "glow-cyan",
        gradient && "gradient-border",
        "shine",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      {hover && (
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
