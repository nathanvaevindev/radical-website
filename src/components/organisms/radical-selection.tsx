"use client";

import { motion } from "framer-motion";
import Accordion from "@/components/molecules/accordion";
import StepTimeline from "@/components/molecules/step-timeline";
import Button from "@/components/atoms/button";

const JOURNEY_STEPS = [
  { title: "Do the APAC test" },
  {
    title: "In-depth personal and professional assessment with our recruiter",
  },
  { title: "Enter the Radical Community" },
];

const GAINS = [
  {
    title: "Personal & professional 1-on-1 coaching",
    content: [
      "Monthly 1-on-1 sessions with a dedicated coach",
      "Honest, direct feedback on your growth and decisions",
      "Career strategy tailored to your ambitions",
      "A recruiter who stays after placement, not disappears",
      "Focus on long-term fit, not short-term placement",
    ],
  },
  {
    title: "Peer-to-peer learning & community events",
    content: [
      "Access to a curated network of top AI professionals",
      "Peer-to-peer learning across companies and domains",
      "Community events designed for real connection and growth",
      "Exchange of ideas, challenges, and real-world experience",
      "A space where you stay human in a high-tech world",
    ],
  },
  {
    title: "Continuous development",
    content: [
      "Ongoing learning through Radical Academy",
      "Masterclasses, sessions, and practical learning formats",
      "Stay ahead of AI developments instead of catching up",
      "Structured growth alongside your career path",
      "Development focused on both technical and human skills",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function RadicalSelection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left — Journey steps timeline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <StepTimeline steps={JOURNEY_STEPS} />
          </motion.div>

          {/* Right — As a Radical you get: accordion */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-heading text-3xl font-bold text-heading md:text-4xl">
              As a Radical you get:
            </h2>
            <div className="mt-8">
              <Accordion items={GAINS} defaultOpen={0} />
            </div>
          </motion.div>
        </div>

        {/* Full-width Coral CTA */}
        <motion.div
          className="mt-12 lg:mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Button
            href="https://radicalnetwork.nl"
            variant="coral"
            size="md"
            fullWidth
          >
            Start your journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
