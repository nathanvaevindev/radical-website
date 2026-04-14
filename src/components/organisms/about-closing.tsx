"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutClosing() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[720px] px-6 lg:px-8">
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl lg:text-6xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          Love or money
        </motion.h2>

        <motion.div
          className="mt-10 flex flex-col gap-6 text-lg leading-relaxed text-body md:text-xl md:leading-relaxed"
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
    </section>
  );
}
