"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutClosing() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-[720px]">
          <motion.h2
            className="text-center font-heading text-4xl font-bold text-heading md:text-5xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            Love or money
          </motion.h2>

          <motion.div
            className="mt-10 flex flex-col gap-6 text-center text-lg leading-relaxed text-body md:text-xl md:leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p>
              On a business website, you rarely read about love. Yet that is
              exactly what drives us: love for people and for humanity. Not as a
              &ldquo;soft&rdquo; concept, but as the foundation for the future.
            </p>
            <p>
              In a world full of AI and automation, human connection is the only
              guarantee that systems will not drive us further apart. That is why
              our starting point is not money, but love for people and for
              humanity.
            </p>
          </motion.div>
        </div>

        <motion.h1
          className="mt-16 text-center font-heading text-2xl font-bold leading-snug text-heading md:text-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="block">Join the movement.</span>
          <span className="block">Hire a Radical.</span>
          <span className="block">Be a Radical.</span>
        </motion.h1>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Button href="/for-companies" variant="coral">
            Hire a Radical
          </Button>
          <Button href="/become-a-radical">Become a Radical</Button>
        </motion.div>
      </div>
    </section>
  );
}
