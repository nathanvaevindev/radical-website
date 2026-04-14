"use client";

import { motion } from "framer-motion";

const DOMAINS = [
  "AI Engineering",
  "Design",
  "Strategy",
  "Innovation",
  "Ethics",
  "Product",
  "Automations",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function RadicalHero() {
  return (
    <section className="relative flex min-h-[85dvh] items-center justify-center overflow-hidden">
      {/* Background portrait placeholder */}
      <div className="absolute inset-0 bg-surface-light">
        <div className="absolute inset-0 bg-page/70" />
      </div>

      {/* Domain tags — top left */}
      <motion.div
        className="absolute left-6 top-8 z-10 flex flex-wrap gap-2 lg:left-10 lg:top-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {DOMAINS.map((d) => (
          <span
            key={d}
            className="rounded-full bg-surface/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm"
          >
            {d}
          </span>
        ))}
      </motion.div>

      {/* Centre content */}
      <div className="relative z-10 px-6 text-center">
        <motion.p
          className="text-lg text-body md:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Become a
        </motion.p>

        <motion.h1
          className="font-heading text-7xl font-bold text-heading sm:text-8xl md:text-9xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Radical
        </motion.h1>

        <motion.p
          className="mt-3 text-lg text-body md:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Europe&apos;s thriving AI recruitment community
        </motion.p>
      </div>
    </section>
  );
}
