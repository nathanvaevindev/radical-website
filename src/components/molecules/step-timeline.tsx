"use client";

import { motion } from "framer-motion";

type Step = {
  title: string;
  description: string;
};

type StepTimelineProps = {
  steps: Step[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="relative flex flex-col gap-0">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          className="relative flex gap-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 * i }}
        >
          {/* Vertical line + dot */}
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-smaragd/15 text-xs font-bold text-smaragd">
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="w-px flex-1 bg-surface-border" />
            )}
          </div>

          {/* Content */}
          <div className="pb-10">
            <p className="font-heading text-lg font-bold text-heading">
              {step.title}
            </p>
            <p className="mt-1 text-sm text-body">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
