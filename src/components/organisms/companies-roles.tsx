"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Role } from "@/types";

// Placeholder roles — will be replaced by Supabase data
const PLACEHOLDER_ROLES: (Role & { intro: string })[] = [
  {
    id: "1",
    title: "AI Engineer",
    description: "Designs and deploys scalable systems",
    intro:
      "AI Engineers bridge the gap between research and production, turning models into reliable, scalable infrastructure that delivers real business value.",
    responsibilities: [
      "Builds and maintains production-ready AI systems",
      "Translates models into scalable infrastructure",
      "Works closely with product and data teams",
      "Ensures performance, reliability, and adaptability",
    ],
    imageUrl: null,
  },
  {
    id: "2",
    title: "AI Ethicist",
    description: "Guides responsible AI development",
    intro:
      "AI Ethicists ensure that every system respects human values, regulatory requirements, and societal impact, from design through deployment.",
    responsibilities: [
      "Develops ethical frameworks for AI projects",
      "Audits models for bias, fairness, and transparency",
      "Advises teams on responsible data practices",
      "Bridges technical and regulatory requirements",
    ],
    imageUrl: null,
  },
  {
    id: "3",
    title: "Data Scientist",
    description: "Turns data into strategic insight",
    intro:
      "Data Scientists extract actionable insights from complex datasets, combining statistical rigour with domain expertise to drive decision-making.",
    responsibilities: [
      "Designs experiments and builds predictive models",
      "Analyses large-scale datasets for patterns and insights",
      "Communicates findings to technical and non-technical stakeholders",
      "Collaborates with engineering on data pipeline quality",
    ],
    imageUrl: null,
  },
  {
    id: "4",
    title: "LLM Specialist",
    description: "Builds and fine-tunes language models",
    intro:
      "LLM Specialists work at the frontier of generative AI, building, fine-tuning, and deploying large language models for real-world applications.",
    responsibilities: [
      "Fine-tunes and evaluates large language models",
      "Designs prompt engineering and RAG pipelines",
      "Optimises model performance and cost efficiency",
      "Stays ahead of the rapidly evolving LLM landscape",
    ],
    imageUrl: null,
  },
  {
    id: "5",
    title: "ML Engineer",
    description: "Operationalises machine learning at scale",
    intro:
      "ML Engineers own the full lifecycle of machine learning systems, from training pipelines to monitoring in production.",
    responsibilities: [
      "Builds and maintains ML training and inference pipelines",
      "Implements monitoring, testing, and versioning for models",
      "Optimises model serving for latency and throughput",
      "Collaborates with data scientists and platform teams",
    ],
    imageUrl: null,
  },
  {
    id: "6",
    title: "Product Lead",
    description: "Drives AI product strategy and execution",
    intro:
      "Product Leads translate business vision into AI-powered products, aligning teams around outcomes that matter.",
    responsibilities: [
      "Defines product vision and roadmap for AI features",
      "Aligns engineering, design, and business stakeholders",
      "Prioritises based on impact, feasibility, and user value",
      "Ensures products ship with quality and purpose",
    ],
    imageUrl: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type Props = {
  roles?: (Role & { intro?: string })[];
};

export default function CompaniesRoles({ roles }: Props) {
  const displayRoles =
    roles && roles.length > 0 ? roles : PLACEHOLDER_ROLES;
  const [activeIdx, setActiveIdx] = useState(0);
  const active = displayRoles[activeIdx];

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          Roles We Place
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr,auto] lg:gap-12">
          {/* Left — Role detail */}
          <motion.div
            className="order-2 md:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-[12px] border border-surface-border bg-surface p-8 lg:p-10">
              {/* Portrait placeholder */}
              <div className="mb-6 h-48 w-full overflow-hidden rounded-lg bg-surface-light md:h-56">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-smaragd/10">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-smaragd"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M20 21a8 8 0 1 0-16 0" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted">Portrait</p>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-heading text-2xl font-bold text-heading">
                    {active.description}
                  </h3>
                  {"intro" in active && active.intro && (
                    <p className="mt-3 text-body">{active.intro}</p>
                  )}
                  {active.responsibilities &&
                    active.responsibilities.length > 0 && (
                      <ul className="mt-5 flex flex-col gap-2.5">
                        {active.responsibilities.map((r) => (
                          <li key={r} className="flex gap-3 text-sm text-body">
                            <span
                              className="mt-0.5 text-smaragd"
                              aria-hidden="true"
                            >
                              ·
                            </span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right — Role list */}
          <motion.div
            className="order-1 md:order-2 md:w-60 lg:w-72"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <nav aria-label="Available roles">
              <ul className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-1">
                {displayRoles.map((role, i) => (
                  <li key={role.id}>
                    <button
                      onClick={() => setActiveIdx(i)}
                      className={[
                        "w-full rounded-full px-5 py-2.5 text-left text-sm font-medium transition-all duration-150",
                        "focus-visible:ring-2 focus-visible:ring-smaragd focus-visible:ring-offset-2 focus-visible:ring-offset-page",
                        i === activeIdx
                          ? "bg-smaragd text-white"
                          : "text-body hover:bg-surface-light hover:text-heading",
                      ].join(" ")}
                    >
                      {role.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
