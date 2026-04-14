"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FounderBlockProps = {
  name: string;
  title: string;
  quote: string;
  paragraphs: string[];
  imageSrc: string;
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
  imageSrc,
  flipped = false,
}: FounderBlockProps) {
  const portrait = (
    <motion.div
      className="relative aspect-[3/4] overflow-hidden rounded-[12px] bg-surface-light"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={imageSrc}
        alt={`Portrait of ${name}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
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
