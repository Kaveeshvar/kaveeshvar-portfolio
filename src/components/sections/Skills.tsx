"use client";

import Container from "../layout/Container";
import { profile } from "@/content/profile";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { fadeUp, fadeUpScale, stagger } from "@/lib/motion";

const skillLevels: Record<string, number> = {
  "LLMs and Chatbots": 95,
  "LLM Evaluation": 90,
  "Prompt Engineering": 92,
  "Python": 85,
  "C": 70,
  "C++": 70,
  "PHP": 75,
  "JavaScript": 80,
  "HTML/CSS/JS": 85,
  "MySQL": 78,
  "Web App Development": 82,
  "Leadership": 90,
  "Time Management": 88,
  "Problem Solving": 92,
  "Adaptability": 90,
};

const categoryIcons: Record<string, string> = {
  "AI/ML/Data": "🤖",
  "Programming Languages": "💻",
  "Web/DB": "🌐",
  "Soft Skills": "🎯",
};

const categoryGradients: Record<string, string> = {
  "AI/ML/Data": "from-cyan-500 to-blue-500",
  "Programming Languages": "from-violet-500 to-purple-500",
  "Web/DB": "from-pink-500 to-rose-500",
  "Soft Skills": "from-emerald-500 to-teal-500",
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
            {groups.map(([category, skills]) => (
              <motion.div key={category} variants={fadeUpScale}>
                <Card className="p-8 md:p-10 h-full" hover>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryGradients[category]}/20 flex items-center justify-center text-2xl`}>
                      {categoryIcons[category]}
                    </div>
                    <h3 className="text-lg font-semibold">{category}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-6">
                    {skills.map((skill, index) => {
                      const level = skillLevels[skill] || 75;
                      return (
                        <motion.div 
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">{skill}</span>
                            <span className="text-xs text-muted-foreground">{level}%</span>
                          </div>
                          
                          {/* Progress bar */}
                          <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${categoryGradients[category]}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${level}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1.2, 
                                delay: index * 0.05,
                                ease: [0.16, 1, 0.3, 1] 
                              }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
