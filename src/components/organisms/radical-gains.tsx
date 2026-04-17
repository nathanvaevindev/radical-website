"use client";

import { motion } from "framer-motion";
import Accordion from "@/components/molecules/accordion";
import Button from "@/components/atoms/button";

const ITEMS = [
  {
    title: "Personal & professional 1-on-1 coaching",
    content: [
      "Monthly 1-on-1 sessions with a dedicated coach",
      "Honest, direct feedback on your growth and decisions",
      "Career strategy tailored to your ambitions",
      "A recruiter who stays after placement, not disappears",
      "Focus on long-term fit, not short-term placement",
    ],
  },
  {
    title: "Peer-to-peer learning & community events",
    content: [
      "Access to a curated network of top AI professionals",
      "Peer-to-peer learning across companies and domains",
      "Community events designed for real connection and growth",
      "Exchange of ideas, challenges, and real-world experience",
      "A space where you stay human in a high-tech world",
    ],
  },
  {
    title: "Continuous development",
    content: [
      "Ongoing learning through Radical Academy",
      "Masterclasses, sessions, and practical learning formats",
      "Stay ahead of AI developments instead of catching up",
      "Structured growth alongside your career path",
      "Development focused on both technical and human skills",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function RadicalGains() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[720px] px-6 lg:px-8">
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          As a Radical you get:
        </motion.h2>

        <motion.div
          className="mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion items={ITEMS} defaultOpen={0} />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Button href="https://radicalnetwork.nl">Start your journey</Button>
          <p className="text-sm text-muted">
            You&apos;re not joining a database. You&apos;re entering a system
            built around your growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
