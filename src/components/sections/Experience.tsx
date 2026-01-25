"use client";

import Container from "../layout/Container";
import { profile } from "@/content/profile";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { fadeUp, fadeUpScale, stagger } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -left-64 top-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
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
              <span className="text-sm text-cyan-400 font-medium uppercase tracking-wider">Career</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeUp} 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Professional <span className="gradient-text">Experience</span>
            </motion.h2>
          </div>

          {/* Experience timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-transparent hidden md:block" />
            
            <div className="space-y-8">
              {profile.experience.map((exp, index) => (
                <motion.div 
                  key={exp.role} 
                  variants={fadeUpScale}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-0 md:left-6 top-8 w-4 h-4 rounded-full bg-cyan-400 hidden md:flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </motion.div>
                  
                  <Card className="p-8 md:p-10" hover>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-cyan-400 font-medium">{exp.company}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                      </div>
                      
                      {/* Status badge */}
                      {exp.period.includes("Current") && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                          <span className="status-dot" style={{ width: 6, height: 6 }} />
                          <span className="text-xs font-medium text-emerald-400">Current Role</span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i, duration: 0.5 }}
                          className="flex items-start gap-4 text-muted-foreground"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
