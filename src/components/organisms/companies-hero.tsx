"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesHero() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left — Quote */}
        <motion.blockquote
          className="font-heading text-3xl font-bold leading-snug text-heading md:text-4xl lg:text-[2.75rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          &ldquo;The AI market moves faster than traditional recruitment can
          follow. By the time a standard process delivers a candidate, the role
          has already evolved. That&apos;s why we built a radically different
          approach.&rdquo;
        </motion.blockquote>

        {/* Right — Nelieke portrait */}
        <motion.div
          className="relative aspect-[3/4] overflow-hidden rounded-[12px] bg-surface-light md:aspect-[4/5]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Image
            src="/nelieke.jpeg"
            alt="Portrait of Nelieke Wismans"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
