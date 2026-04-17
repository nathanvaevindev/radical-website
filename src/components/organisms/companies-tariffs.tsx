"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const PLACEMENT_FEES = [
  { label: "Junior", years: "0–2 years", rate: "12,5%" },
  { label: "Medior", years: "3–4 years", rate: "15%" },
  { label: "Senior", years: "5+ years", rate: "17,5%" },
];

export default function CompaniesTariffs() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Left card — Placement fees */}
          <motion.div
            className="rounded-[12px] border border-surface-border bg-surface p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Radical placement fees
            </h3>
            <ul className="mt-6 flex flex-col divide-y divide-surface-border">
              {PLACEMENT_FEES.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between py-4"
                >
                  <div>
                    <p className="font-heading text-base font-bold text-heading">
                      {row.label}
                    </p>
                    <p className="text-xs text-muted">{row.years}</p>
                  </div>
                  <span className="font-heading text-2xl font-bold text-smaragd">
                    {row.rate}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right card — Development fee */}
          <motion.div
            className="rounded-[12px] border border-surface-border bg-surface p-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Radical development fee*
            </h3>
            <p className="mt-6 font-heading text-5xl font-bold text-heading">
              €199
              <span className="text-xl font-normal text-muted">/month</span>
            </p>
            <ul className="mt-6 flex flex-col gap-3">
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
            <p className="mt-8 text-xs text-muted">
              *This fulfils your L&amp;D obligation under Dutch employment law.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
