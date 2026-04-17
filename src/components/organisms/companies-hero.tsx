"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesHero() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Two-column: heading left, portrait right */}
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <motion.h1
            className="font-courier text-3xl font-bold leading-snug text-heading md:text-4xl lg:text-[2.75rem]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            The real power of AI is not in the code, but in the human conscience
            behind it. We provide selected professionals who ensure your
            technology works, continues to grow, compliant with the EU AI act.
          </motion.h1>

          <motion.div
            className="relative aspect-[3/4] overflow-hidden rounded-[12px] bg-surface-light md:aspect-[4/5]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Image
              src="/Nelieke.jpeg"
              alt="Portrait of Nelieke Wismans"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Full-width paragraph below */}
        <motion.p
          className="mt-12 max-w-3xl text-lg leading-relaxed text-body lg:mt-16"
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
