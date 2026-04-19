"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Direct impact on your projects",
    description:
      "Junior, medior or senior, trained to create value immediately",
  },
  {
    title: "Ethical compass in every decision",
    description:
      "Professionals who build responsible and transparent AI",
  },
  {
    title: "Built for tomorrow's challenges",
    description:
      "We match talent to the skills and vision you need ahead",
  },
];

const PLACEMENT_FEES = [
  { label: "Junior", years: "0–2 years", rate: "12,5%" },
  { label: "Medior", years: "3–4 years", rate: "15%" },
  { label: "Senior", years: "5+ years", rate: "17,5%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesValue() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left — Existing value text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl font-bold text-heading md:text-5xl">
              What Your Radicals Bring
            </h2>

            <ul className="mt-12 flex flex-col gap-8">
              {ITEMS.map((item, i) => (
                <motion.li
                  key={item.title}
                  className="flex gap-4"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                >
                  <span className="mt-0.5 text-lg text-smaragd" aria-hidden="true">
                    ✔
                  </span>
                  <div>
                    <p className="font-heading text-lg font-bold text-heading">
                      {item.title}
                    </p>
                    <p className="mt-1 text-body">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Our Tariffs card */}
          <motion.div
            className="rounded-sm border border-surface-border bg-surface p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-heading text-2xl font-bold text-heading">
              Our Tariffs
            </h3>

            {/* Sub-card 1 — Placement fees */}
            <div className="mt-6 rounded-sm border border-surface-border bg-surface-light p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Radical placement fees
              </p>
              <ul className="mt-4 flex flex-col divide-y divide-surface-border">
                {PLACEMENT_FEES.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between py-3"
                  >
                    <div>
                      <p className="font-heading text-base font-bold text-heading">
                        {row.label}
                      </p>
                      <p className="text-xs text-muted">{row.years}</p>
                    </div>
                    <span className="font-heading text-xl font-bold text-smaragd">
                      {row.rate}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-card 2 — Development fee */}
            <div className="mt-4 rounded-sm border border-surface-border bg-surface-light p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Radical development fee*
              </p>
              <p className="mt-4 font-heading text-4xl font-bold text-heading">
                €199
                <span className="text-lg font-normal text-muted">/month</span>
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {[
                  "Radical Academy",
                  "Personal and professional coaching",
                  "Peer learning",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-body">
                    <span className="mt-0.5 shrink-0 text-smaragd" aria-hidden="true">
                      ✔
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted">
                *This fulfils your L&amp;D obligation under Dutch employment law.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
