"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeCta() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.h2
          className="text-center font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          Get in touch
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* For Companies */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <Link
              href="/contact"
              className="group flex flex-col items-center justify-center rounded-sm border border-surface-border bg-surface p-10 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover lg:p-14"
            >
              <span className="font-heading text-2xl font-bold text-heading transition-colors duration-200 group-hover:text-smaragd lg:text-3xl">
                For Companies
              </span>
              <span className="mt-2 text-sm text-muted">
                Find your next AI professional
              </span>
            </Link>
          </motion.div>

          {/* For Professionals */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="https://radicalnetwork.nl"
              className="group flex flex-col items-center justify-center rounded-sm border border-surface-border bg-surface p-10 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover lg:p-14"
            >
              <span className="font-heading text-2xl font-bold text-heading transition-colors duration-200 group-hover:text-smaragd lg:text-3xl">
                For Professionals
              </span>
              <span className="mt-2 text-sm text-muted">
                Start your journey as a Radical
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
