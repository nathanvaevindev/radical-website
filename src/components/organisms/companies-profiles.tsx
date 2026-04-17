"use client";

import { motion } from "framer-motion";

const BLOCKS = [
  {
    title: "WE WORK WITH COMPANIES",
    items: [
      "Scaling AI companies in the Netherlands (20–200 fte) without in-house AI recruiters",
      "AI teams inside mid-to-large corporates that need specialist recruitment support",
      "CTO, CEO, or MD personally feeling the hiring pain",
    ],
  },
  {
    title: "WE PLACE CANDIDATES",
    items: [
      "Permanent hires — end-to-end recruitment with guarantee period",
      "Interim professionals — fast placement for urgent AI capability gaps",
      "Project secondment — scoped delivery with a dedicated Radical",
    ],
  },
  {
    title: "PARTNERSHIP",
    items: [
      "We work on a personal base with clients at any time — not at volume",
      "We stay involved through the selection procedure and beyond",
      "Every placement backed by a full APAC assessment report",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesProfiles() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {BLOCKS.map((block, i) => (
            <motion.div
              key={block.title}
              className="rounded-[12px] border border-surface-border bg-surface p-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
                {block.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-body">
                    <span className="mt-0.5 shrink-0 text-smaragd" aria-hidden="true">
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
