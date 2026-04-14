"use client";

import { motion } from "framer-motion";
import StepTimeline from "@/components/molecules/step-timeline";

const STEPS = [
  {
    title: "We receive your request",
    description: "Company submits intake",
  },
  {
    title: "In-depth intake",
    description:
      "We visit for an interview about your organisation, challenges, and team",
  },
  {
    title: "We make the match",
    description: "Selection of best-fit candidates from the community",
  },
  {
    title: "Profiles & interviews",
    description:
      "You receive 2–3 profiles and conduct selection conversations",
  },
  {
    title: "Placement",
    description: "Candidate is placed",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesMatching() {
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
          How We Match You With Your Radical
        </motion.h2>

        <div className="mt-12">
          <StepTimeline steps={STEPS} />
        </div>
      </div>
    </section>
  );
}
