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
  },
  {
    letter: "P",
    title: "Personality",
    tagline: "Authenticity as the most powerful instrument",
    description:
      "The Prompt Engineer of the Soul. Personality measures analytical ability, creativity, curiosity and growth mindset. Do you dare to look beyond the data?",
    color: "text-apac-personality",
  },
  {
    letter: "A",
    title: "Awareness",
    tagline: "The moral compass of AI",
    description:
      "Awareness measures your EQ, contextual intelligence and ethical awareness. Do you dare to say \u2018no\u2019 to unethical solutions? Crucial for EU AI Act compliance.",
    color: "text-apac-awareness",
  },
  {
    letter: "C",
    title: "Connection",
    tagline: "Human connection is becoming increasingly rare",
    description:
      "Connection measures your social connection with yourself, society and your community. Self-reflection, team connection and inherent risk awareness. A Radical in a team is an ethical guardrail.",
    color: "text-apac-connection",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function RadicalApac() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          The APAC-framework, our proprietary selection method.
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
              <p className="mt-1 text-base italic text-muted">
                {item.tagline}
              </p>
              <p className="mt-3 text-body">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 flex flex-col gap-4 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button href="https://radicalnetwork.nl">Start your journey here</Button>
          <Button href="/about" variant="secondary">
            Read all about it here
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
