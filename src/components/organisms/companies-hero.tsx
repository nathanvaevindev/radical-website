"use client";

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

        {/* Right — Portrait placeholder */}
        <motion.div
          className="aspect-[3/4] overflow-hidden rounded-[12px] bg-surface-light md:aspect-[4/5]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-smaragd/10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-smaragd"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </div>
              <p className="text-xs text-muted">Nelieke Wismans</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
