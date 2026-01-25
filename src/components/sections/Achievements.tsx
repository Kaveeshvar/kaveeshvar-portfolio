"use client";

import Container from "../layout/Container";
import { profile } from "@/content/profile";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { fadeUp, fadeUpScale, stagger } from "@/lib/motion";

export default function Achievements() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 -right-64 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
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
              <span className="text-sm text-cyan-400 font-medium uppercase tracking-wider">Recognition</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeUp} 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Achievements & <span className="gradient-text">Internship</span>
            </motion.h2>
          </div>

          {/* Cards grid */}
          <motion.div 
            variants={stagger}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Achievement Card */}
            <motion.div variants={fadeUpScale}>
              <Card className="p-8 md:p-10 h-full relative overflow-hidden" hover glow>
                {/* Trophy decoration */}
                <div className="absolute -top-10 -right-10 text-9xl opacity-5 select-none">
                  🏆
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center text-3xl">
                    🏆
                  </div>
                  <div>
                    <span className="text-xs text-amber-400 font-medium uppercase tracking-wider">Achievement</span>
                    <h3 className="text-lg font-semibold">Winner</h3>
                  </div>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                  {profile.achievements[0]?.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {profile.achievements[0]?.detail}
                </p>
                
                {/* Animated badge */}
                <motion.div 
                  className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-amber-400">₹8000</span>
                  <span className="text-sm text-muted-foreground">Cash Prize</span>
                </motion.div>
              </Card>
            </motion.div>

            {/* Internship Card */}
            <motion.div variants={fadeUpScale}>
              <Card className="p-8 md:p-10 h-full" hover>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center text-3xl">
                    💼
                  </div>
                  <div>
                    <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">Internship</span>
                    <h3 className="text-lg font-semibold">Experience</h3>
                  </div>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold mb-2">
                  {profile.internship[0]?.role}
                </h4>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-cyan-400 font-medium">{profile.internship[0]?.company}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="text-sm text-muted-foreground">{profile.internship[0]?.period}</span>
                </div>
                
                <ul className="space-y-4">
                  {profile.internship[0]?.bullets.map((bullet, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 text-muted-foreground"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
