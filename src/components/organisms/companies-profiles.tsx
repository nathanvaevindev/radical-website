"use client";

import { motion } from "framer-motion";

const BLOCKS = [
  {
    title: "Client profile",
    items: [
      "Based on intake and interview with organisation and team lead",
      "Insight into: challenges · team dynamics · culture and expectations",
    ],
  },
  {
    title: "Candidate profile",
    items: [
      "Consists of: CV · interview · APAC test",
      "Insight into: skills · behaviour · human qualities",
    ],
  },
  {
    title: "Matching process",
    items: [
      "AI matches enriched profiles",
      "Human-in-the-loop validation by recruiter",
      "Remaining uncertainties resolved before candidate is presented",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesProfiles() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.h2
          className="max-w-3xl font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          We don&apos;t send CVs. We deliver matches.
        </motion.h2>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-body"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We don&apos;t work with standard vacancy profiles and CVs. We build
          enriched profiles for both client and candidate.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {BLOCKS.map((block, i) => (
            <motion.div
              key={block.title}
              className="rounded-[12px] border border-surface-border bg-surface p-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
            >
              <h3 className="font-heading text-lg font-bold text-heading">
                {block.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-body">
                    <span
                      className="mt-0.5 text-smaragd"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
