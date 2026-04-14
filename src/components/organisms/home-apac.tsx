"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/button";

const APAC_ITEMS = [
  {
    letter: "A",
    title: "Adaptability",
    description:
      "Thrives in ambiguity and change. Learns fast, adapts quickly, and remains effective as environments evolve.",
    color: "text-apac-adaptability",
  },
  {
    letter: "P",
    title: "Personality",
    description:
      "Brings ownership, energy, and initiative. Communicates clearly and contributes actively within teams.",
    color: "text-apac-personality",
  },
  {
    letter: "A",
    title: "Awareness",
    description:
      "Understands context beyond the task. Acts with ethical responsibility and sees the broader impact of decisions.",
    color: "text-apac-awareness",
  },
  {
    letter: "C",
    title: "Connection",
    description:
      "Builds strong relationships across teams and stakeholders. Collaborates effectively and aligns with people and environment.",
    color: "text-apac-connection",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeApac() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[720px] px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          The APAC Framework
        </motion.h2>

        <motion.p
          className="mt-6 text-lg leading-relaxed text-body"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We don&apos;t select on certifications or years of experience. We
          assess the human qualities that predict real-world impact. This is what
          separates good AI professionals from exceptional ones.
        </motion.p>

        {/* APAC items */}
        <div className="mt-14 flex flex-col gap-10">
          {APAC_ITEMS.map((item, i) => (
            <motion.div
              key={item.title + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className={`font-heading text-2xl font-bold ${item.color}`}
                >
                  {item.letter}
                </span>
                <span className="font-heading text-2xl font-bold text-heading">
                  {item.title}
                </span>
              </div>
              <p className="mt-2 text-body">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          className="mt-14 flex flex-col gap-4 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button href="/for-companies">Hire a Radical</Button>
          <Button href="https://radicalnetwork.nl" variant="secondary">
            Apply to the program
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
