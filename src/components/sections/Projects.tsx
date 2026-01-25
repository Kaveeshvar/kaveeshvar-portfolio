"use client";

import Container from "../layout/Container";
import { profile } from "@/content/profile";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { fadeUp, fadeUpScale, stagger } from "@/lib/motion";
import Magnetic from "../ui/Magnetic";

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
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
              <span className="text-sm text-cyan-400 font-medium uppercase tracking-wider">Work</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeUp} 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeUp} 
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              Expandable case-study cards — add more projects later by editing{" "}
              <code className="text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded text-sm">
                src/content/profile.ts
              </code>
            </motion.p>
          </div>

          {/* Projects grid */}
          <motion.div 
            variants={stagger}
            className="grid gap-8 md:grid-cols-2"
          >
            {profile.projects.map((project, index) => (
              <motion.div key={project.title} variants={fadeUpScale}>
                <Magnetic strength={8}>
                  <Card className="p-8 md:p-10 h-full group" hover>
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
                        <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                      </div>
                      <span className="tag shrink-0">
                        {project.role}
                      </span>
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
                      <motion.span 
                        className="text-muted-foreground group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                      >
                        →
                      </motion.span>
                    </div>
                  </Card>
                </Magnetic>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
