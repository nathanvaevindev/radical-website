"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <motion.h1
              className="font-heading text-5xl font-bold leading-[1.05] text-heading md:text-6xl lg:text-7xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              Radical Recruitment
            </motion.h1>

            <motion.h2
              className="mt-8 font-heading text-2xl font-bold leading-snug text-heading md:text-3xl lg:text-4xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We are here for doers, thinkers, and builders. Where technology
              meets its human on the loop.
            </motion.h2>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-body md:text-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Technology only creates positive impact when the people around it
              are right. We exist to make that happen, by placing the humans who
              make it work, not just run.
            </motion.p>
          </div>

          {/* Right column — reserved */}
          <div aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
