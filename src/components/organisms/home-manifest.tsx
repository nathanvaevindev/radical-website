"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const POINTS = [
  "30+ years of experience and network",
  "Strong connection with Gen Z and AI natives",
  "Selective entry and personal development",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          {/* Nelieke — left */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[12px] bg-surface-light">
            <Image
              src="/nelieke.jpeg"
              alt="Portrait of Nelieke Wismans"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 340px"
            />
          </div>

          {/* Oscar — right */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[12px] bg-surface-light">
            <Image
              src="/oscar.png"
              alt="Portrait of Oscar Voskuil"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 340px"
            />
          </div>
        </motion.div>

        {/* Checklist — centred, typographically light */}
        <motion.ul
          className="mt-12 flex flex-col items-center gap-3 lg:mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
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
