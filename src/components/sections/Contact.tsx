"use client";

import Container from "../layout/Container";
import { profile } from "@/content/profile";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

function copy(text: string) {
  navigator.clipboard.writeText(text);
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }}>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight">
            Contact
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-muted-foreground max-w-2xl">
            Want someone who can ship AI-quality improvements and keep ops clean? Let’s talk.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <Card className="p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">{profile.contact.email}</div>

                <div className="pt-3 text-sm text-muted-foreground">Phone</div>
                <div className="font-medium">{profile.contact.phone}</div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button onClick={() => copy(profile.contact.email)}>Copy Email</Button>
                <Button variant="ghost" onClick={() => copy(profile.contact.phone)}>Copy Phone</Button>
                <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
                  <Button variant="ghost">LinkedIn</Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
