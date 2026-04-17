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
    bg: "bg-apac-adaptability/10",
    ring: "ring-apac-adaptability/30",
  },
  {
    letter: "P",
    title: "Personality",
    description:
      "Brings ownership, energy, and initiative. Communicates clearly and contributes actively within teams.",
    color: "text-apac-personality",
    bg: "bg-apac-personality/10",
    ring: "ring-apac-personality/30",
  },
  {
    letter: "A",
    title: "Awareness",
    description:
      "Understands context beyond the task. Acts with ethical responsibility and sees the broader impact of decisions.",
    color: "text-apac-awareness",
    bg: "bg-apac-awareness/10",
    ring: "ring-apac-awareness/30",
  },
  {
    letter: "C",
    title: "Connection",
    description:
      "Builds strong relationships across teams and stakeholders. Collaborates effectively and aligns with people and environment.",
    color: "text-apac-connection",
    bg: "bg-apac-connection/10",
    ring: "ring-apac-connection/30",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesApac() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <motion.h2
          className="text-center font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          The APAC Framework
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-body"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We select for the human qualities that predict real-world impact. Every
          Radical is assessed on four dimensions that go far beyond technical
          skills, because the best hires are defined by who they are, not just
          what they know.
        </motion.p>

        {/* Visual: 2x2 grid of dimension tiles */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {APAC_ITEMS.map((item, i) => (
            <motion.div
              key={item.title + i}
              className="relative flex flex-col items-center rounded-[16px] border border-surface-border bg-surface p-8 text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full ring-2 ${item.bg} ${item.ring}`}
              >
                <span
                  className={`font-heading text-5xl font-bold ${item.color}`}
                >
                  {item.letter}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-heading">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button href="/about" variant="dark">
            Learn more about the APAC test
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
