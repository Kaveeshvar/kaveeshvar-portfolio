"use client";

import Container from "../layout/Container";
import { profile } from "@/content/profile";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { fadeUp, fadeUpScale, stagger } from "@/lib/motion";

const categoryIcons: Record<string, string> = {
  "AI/ML/Data": "🤖",
  "Programming Languages": "💻",
  "Web/DB": "🌐",
  "Soft Skills": "🎯",
};

const categoryGradients: Record<string, { border: string; bg: string; text: string }> = {
  "AI/ML/Data": {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
  },
  "Programming Languages": {
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    text: "text-violet-300",
  },
  "Web/DB": {
    border: "border-pink-500/30",
    bg: "bg-pink-500/10",
    text: "text-pink-300",
  },
  "Soft Skills": {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
  },
};

export default function Skills() {
  const groups = Object.entries(profile.skills);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 -left-64 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
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
              <span className="text-sm text-cyan-400 font-medium uppercase tracking-wider">Expertise</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeUp} 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Skills & <span className="gradient-text">Technologies</span>
            </motion.h2>
          </div>

          {/* Skills grid */}
          <motion.div 
            variants={stagger}
            className="grid gap-8 md:grid-cols-2"
          >
            {groups.map(([category, skills]) => {
              const colors = categoryGradients[category];
              return (
                <motion.div key={category} variants={fadeUpScale}>
                  <Card className="p-8 md:p-10 h-full" hover>
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center text-2xl`}>
                        {categoryIcons[category]}
                      </div>
                      <h3 className="text-lg font-semibold">{category}</h3>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05, duration: 0.4 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={`px-4 py-2.5 rounded-xl border ${colors.border} ${colors.bg} ${colors.text} text-sm font-medium backdrop-blur-sm transition-colors hover:border-opacity-50`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
