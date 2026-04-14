"use client";

import { motion } from "framer-motion";

type FounderBlockProps = {
  name: string;
  title: string;
  quote: string;
  paragraphs: string[];
  flipped?: boolean;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FounderBlock({
  name,
  title,
  quote,
  paragraphs,
  flipped = false,
}: FounderBlockProps) {
  const portrait = (
    <motion.div
      className="aspect-[3/4] overflow-hidden rounded-[12px] bg-surface-light"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Replace with real portrait via next/image */}
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-smaragd/10">
            <svg
              width="24"
              height="24"
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
          <p className="text-xs text-muted">{name}</p>
        </div>
      </div>
    </motion.div>
  );

  const text = (
    <motion.div
      className="flex flex-col justify-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h2 className="font-heading text-2xl font-bold leading-snug text-heading md:text-3xl lg:text-4xl">
        &ldquo;{quote}&rdquo;
      </h2>

      <div className="mt-8 flex flex-col gap-4 text-body leading-relaxed">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>

      <div className="mt-8">
        <p className="font-heading text-lg font-bold text-heading">{name}</p>
        <p className="text-sm text-muted">{title}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
        {flipped ? (
          <>
            {text}
            {portrait}
          </>
        ) : (
          <>
            {portrait}
            {text}
          </>
        )}
      </div>
    </section>
  );
}
