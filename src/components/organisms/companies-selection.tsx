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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesSelection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[720px] px-6 lg:px-8">
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          How Radicals Are Selected
        </motion.h2>

        <div className="mt-12">
          <StepTimeline steps={STEPS} />
        </div>
      </div>
    </section>
  );
}
