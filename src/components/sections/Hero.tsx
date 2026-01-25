"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../layout/Container";
import { profile } from "@/content/profile";
import { Button } from "../ui/Button";
import { fadeUp, staggerSlow, scaleUp } from "@/lib/motion";
import { Card } from "../ui/Card";
import Magnetic from "../ui/Magnetic";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Premium animated background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          className="orb orb-1 -top-64 -left-32"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="orb orb-2 top-1/4 -right-48"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="orb orb-3 bottom-0 left-1/3"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-60" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(var(--bg))_70%)]" />
      </div>

      {/* Noise texture */}
      <div className="noise" />

      <Container className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div 
          style={{ y, opacity }}
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-center"
        >
          {/* Left content */}
          <motion.div 
            variants={staggerSlow} 
            initial="hidden" 
            animate="show" 
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            {/* Headline */}
            <motion.p 
              variants={fadeUp} 
              className="text-sm md:text-base text-muted-foreground tracking-wide uppercase"
            >
              {profile.headline}
            </motion.p>

            {/* Name with gradient */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
            >
              <span className="gradient-text-hero">{profile.name}</span>
              <span className="text-cyan-400 glow-text">.</span>
            </motion.h1>

            {/* Summary */}
            <motion.p 
              variants={fadeUp} 
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <Magnetic strength={15}>
                <a href="#projects">
                  <Button size="lg" glow>
                    View Projects
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </a>
              </Magnetic>
              <Magnetic strength={12}>
                <a href="#contact">
                  <Button variant="ghost" size="lg">Contact Me</Button>
                </a>
              </Magnetic>
              <Magnetic strength={12}>
                <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="lg">LinkedIn</Button>
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right - Signal Panel */}
          <motion.div 
            variants={scaleUp}
            initial="hidden"
            animate="show"
            className="hidden lg:block"
          >
            <Card className="p-8" hover glow>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Signal Panel
              </div>
              
              <div className="space-y-5">
                {[
                  { label: "LLM Evaluation", value: "1+ yrs", highlight: true },
                  { label: "Leadership", value: "Pod Lead", highlight: false },
                  { label: "Team Scale", value: "Up to 20", highlight: false },
                ].map((item, i) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                  >
                    <span className="text-sm">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.highlight ? 'text-cyan-400 glow-text' : ''}`}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <Magnetic strength={10}>
                  <a href={profile.contact.github} target="_blank" rel="noreferrer" className="block">
                    <Button variant="ghost" className="w-full justify-center">
                      GitHub
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                  </a>
                </Magnetic>
                <Magnetic strength={10}>
                  <a href={`mailto:${profile.contact.email}`} className="block">
                    <Button variant="ghost" className="w-full justify-center">
                      Email
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                  </a>
                </Magnetic>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 rounded-full bg-cyan-400" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
