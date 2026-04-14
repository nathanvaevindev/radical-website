"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section className="py-32 lg:py-44">
      <div className="mx-auto max-w-[720px] px-6 text-center lg:px-8">
        <motion.h1
          className="font-heading text-6xl font-bold text-heading md:text-7xl lg:text-8xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          Radical Recruitment
        </motion.h1>

        <motion.p
          className="mt-10 text-xl leading-relaxed text-body md:text-2xl md:leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          We are here for the doers, the thinkers, and the builders who find
          that technology only creates valuable impact when the human factor is
          right: &ldquo;human on the loop!&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
