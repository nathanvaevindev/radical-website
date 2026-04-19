"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FOUNDERS = [
  {
    name: "Nelieke Wismans",
    role: "Co-founder",
    email: "nelieke@radicalrecruitment.ai",
    photoUrl: "/nelieke.jpeg",
  },
  {
    name: "Oscar Voskuil",
    role: "Founder",
    email: "oscar@radicalrecruitment.ai",
    photoUrl: "/oscar.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutFounders() {
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
          Meet the Founders
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {FOUNDERS.map((f, i) => (
            <motion.div
              key={f.name}
              className="rounded-sm border border-surface-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-sm bg-surface-light">
                <Image
                  src={f.photoUrl}
                  alt={`Portrait of ${f.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <p className="font-heading text-xl font-bold text-heading">
                  {f.name}
                </p>
                <p className="mt-0.5 text-sm text-muted">{f.role}</p>
                <a
                  href={`mailto:${f.email}`}
                  className="mt-3 inline-block text-sm text-smaragd transition-colors duration-150 hover:text-smaragd-light"
                >
                  {f.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
