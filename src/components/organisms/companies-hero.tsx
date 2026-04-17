"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesHero() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.h1
          className="mx-auto max-w-4xl text-center font-courier text-3xl font-bold leading-snug text-heading md:text-4xl lg:text-[2.75rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <span className="block">
            The real power of AI is not in the code, but in the human conscience
            behind it.
          </span>
          <span className="mt-8 block">
            We provide selected professionals who ensure your technology works,
            continues to grow, compliant with the EU AI act.
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-body lg:mt-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Technical skills are table-stakes. What determines whether an AI hire
          succeeds is how they operate under ambiguity, collaborate across teams,
          and make judgment calls a model cannot. That&apos;s exactly what we
          assess.
        </motion.p>
      </div>
    </section>
  );
}
