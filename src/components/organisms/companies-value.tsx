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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesValue() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[720px] px-6 lg:px-8">
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          What Your Radicals Bring
        </motion.h2>

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
      </div>
    </section>
  );
}
