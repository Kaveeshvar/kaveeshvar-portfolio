"use client";

import { useState, useRef } from "react";
import Container from "../layout/Container";
import { profile } from "@/content/profile";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { fadeUp, fadeUpScale, stagger } from "@/lib/motion";
import Magnetic from "../ui/Magnetic";

interface Project {
  title: string;
  period: string;
  description: string;
  tech: string[];
  role: string;
  highlight: string;
  video: string | null;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.video) {
      videoRef.current.play().catch(() => {
        // Ignore AbortError when play is interrupted by pause
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && project.video) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      {/* Video popup overlay */}
      {project.video && isHovered && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div 
            className="relative w-[80vw] max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ pointerEvents: "auto" }}
          >
            <video
              ref={videoRef}
              src={project.video}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
            />
            {/* Subtle gradient for title readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Title overlay on video */}
            <div className="absolute bottom-6 left-8 right-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white/0">
                {project.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Original card */}
      <motion.div 
        variants={fadeUpScale}
        className="relative"
      >
        <Magnetic strength={8}>
          <Card
            className="p-8 md:p-10 h-full group relative overflow-hidden"
            hover
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Original content */}
            <div>
              {/* Project number */}
              <div className="absolute top-6 right-6 text-7xl font-bold text-white/[0.03] select-none">
                0{index + 1}
              </div>

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.period}
                </p>
              </div>
              <span className="tag shrink-0">{project.role}</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:border-cyan-400/30 hover:text-foreground transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Highlight */}
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <span className="text-cyan-400 font-medium flex items-center gap-2">
                <span className="text-lg">✨</span>
                {project.highlight}
              </span>
              <motion.span className="text-muted-foreground group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                →
              </motion.span>
            </div>

            {/* Hover hint for video projects */}
            {project.video && (
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/60">
                <span className="inline-block w-4 h-4">▶</span>
                <span>Hover to preview project</span>
              </div>
            )}
          </div>
        </Card>
      </Magnetic>
    </motion.div>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/3 -right-64 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 -left-64 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
              <span className="text-sm text-cyan-400 font-medium uppercase tracking-wider">
                Work
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>

          {/* Projects grid */}
          <motion.div
            variants={stagger}
            className="grid gap-8 md:grid-cols-2"
          >
            {profile.projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
