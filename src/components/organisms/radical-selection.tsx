"use client";

import { motion } from "framer-motion";
import StepTimeline from "@/components/molecules/step-timeline";

const STEPS = [
  {
    title: "Applications arrive",
    description: "Sourcing via network and community",
  },
  {
    title: "APAC test",
    description: "Candidates complete the APAC assessment",
  },
  {
    title: "Human assessment",
    description:
      "Evaluation on human qualities: adaptability, ethics, character",
  },
  {
    title: "Joins the Radical community",
    description: "Candidate enters the community",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function RadicalSelection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left — Introductory text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold leading-snug text-heading md:text-4xl">
            How Radicals Are Selected
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-body">
            <p>
              At Radical Recruitment, it&apos;s about who you are, not just
              what&apos;s on your r&eacute;sum&eacute;.
            </p>
            <p>
              A lasting career in AI begins with personality and ambition.
              Radical selects candidates before a role is found, so companies
              already know someone is exceptional before the first conversation.
            </p>
          </div>
        </motion.div>

        {/* Right — Timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <StepTimeline steps={STEPS} />
        </motion.div>
      </div>
    </section>
  );
}
