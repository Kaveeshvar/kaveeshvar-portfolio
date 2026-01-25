"use client";

import Container from "../layout/Container";
import { profile } from "@/content/profile";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { fadeUp, fadeUpScale, stagger } from "@/lib/motion";

const pillars = [
  { 
    title: "LLM Quality", 
    desc: "Evaluation + reviews that raise the floor and the ceiling.",
    icon: "🎯",
    gradient: "from-cyan-500/20 to-cyan-500/5"
  },
  { 
    title: "Operational Excellence", 
    desc: "Process design that boosts throughput without chaos.",
    icon: "⚡",
    gradient: "from-violet-500/20 to-violet-500/5"
  },
  { 
    title: "Leadership", 
    desc: "Pod-level execution, mentoring, and team performance.",
    icon: "🚀",
    gradient: "from-pink-500/20 to-pink-500/5"
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 -right-64 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
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
              <span className="text-sm text-cyan-400 font-medium uppercase tracking-wider">About Me</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeUp} 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Building reliable <span className="gradient-text">AI delivery</span> pipelines
            </motion.h2>
            
            <motion.p 
              variants={fadeUp} 
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              I focus on evaluating LLM responses, sharpening prompts, and designing workflows 
              that improve output and expert efficiency. Every process I touch gets faster, 
              cleaner, and more impactful.
            </motion.p>
          </div>

          {/* Pillars grid */}
          <motion.div 
            variants={stagger}
            className="grid gap-6 md:grid-cols-3"
          >
            {pillars.map((pillar, index) => (
              <motion.div key={pillar.title} variants={fadeUpScale}>
                <Card className="p-8 h-full group" hover>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-6 text-2xl`}>
                    {pillar.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                  
                  {/* Number indicator */}
                  <div className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] select-none">
                    0{index + 1}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Education section */}
          <motion.div variants={fadeUpScale}>
            <Card className="p-8 md:p-10" hover>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center text-xl">
                  🎓
                </div>
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {profile.education.map((edu, index) => (
                  <motion.div 
                    key={edu.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative pl-6 border-l-2 border-white/10 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-cyan-400" />
                    <h4 className="font-medium">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{edu.meta}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
