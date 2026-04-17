"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/button";

const APAC_ITEMS = [
  {
    letter: "A",
    title: "Adaptability",
    tagline: "Flexibility in a changing world",
    description:
      "How fast do you adapt? In the AI sector, the half-life of knowledge is months. Adaptability measures your ability to let go of outdated methods and switch between different levels of abstraction.",
    color: "text-apac-adaptability",
    bg: "bg-apac-adaptability/10",
    ring: "ring-apac-adaptability/30",
  },
  {
    letter: "P",
    title: "Personality",
    tagline: "Authenticity as the most powerful instrument",
    description:
      "The Prompt Engineer of the Soul. Personality measures analytical ability, creativity, curiosity and growth mindset. Do you dare to look beyond the data?",
    color: "text-apac-personality",
    bg: "bg-apac-personality/10",
    ring: "ring-apac-personality/30",
  },
  {
    letter: "A",
    title: "Awareness",
    tagline: "The moral compass of AI",
    description:
      "Awareness measures your EQ, contextual intelligence and ethical awareness. Do you dare to say \u2018no\u2019 to unethical solutions? Crucial for EU AI Act compliance.",
    color: "text-apac-awareness",
    bg: "bg-apac-awareness/10",
    ring: "ring-apac-awareness/30",
  },
  {
    letter: "C",
    title: "Connection",
    tagline: "Human connection is becoming increasingly rare",
    description:
      "Connection measures your social connection with yourself, society and your community. Self-reflection, team connection and inherent risk awareness. A Radical in a team is an ethical guardrail.",
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
          The APAC-framework, our proprietary selection method.
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
              <p className="mt-1 text-sm italic text-muted">
                {item.tagline}
              </p>
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
