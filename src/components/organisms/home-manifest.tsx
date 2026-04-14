"use client";

import { motion } from "framer-motion";

const POINTS = [
  "30+ years of experience and network",
  "Strong connection with Gen Z and AI natives",
  "Selective entry and personal development",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeManifest() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[720px] px-6 lg:px-8">
        {/* Two founder portraits — no header, no captions */}
        <motion.div
          className="grid grid-cols-2 gap-4 lg:gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Nelieke — left */}
          <div className="aspect-[3/4] overflow-hidden rounded-[12px] bg-surface-light">
            {/* Replace with real portrait via next/image */}
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
                <p className="text-xs text-muted">Nelieke</p>
              </div>
            </div>
          </div>

          {/* Oscar — right */}
          <div className="aspect-[3/4] overflow-hidden rounded-[12px] bg-surface-light">
            {/* Replace with real portrait via next/image */}
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
                <p className="text-xs text-muted">Oscar</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Checklist — centred, typographically light */}
        <motion.ul
          className="mt-12 flex flex-col items-center gap-3 lg:mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {POINTS.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 text-body"
            >
              <span className="text-smaragd" aria-hidden="true">✔</span>
              {point}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
