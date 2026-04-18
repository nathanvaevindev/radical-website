"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FounderBlockProps = {
  name: string;
  title: string;
  quote: string;
  paragraphs: string[];
  imageSrc: string;
  email?: string;
  flipped?: boolean;
  objectPosition?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FounderBlock({
  name,
  title,
  quote,
  paragraphs,
  imageSrc,
  email,
  flipped = false,
  objectPosition,
}: FounderBlockProps) {
  const portrait = (
    <motion.div
      className="relative mx-auto aspect-[3/4] w-1/2 overflow-hidden rounded-[12px] bg-surface-light"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={imageSrc}
        alt={`Portrait of ${name}`}
        fill
        className="object-cover"
        style={objectPosition ? { objectPosition } : undefined}
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </motion.div>
  );

  const text = (
    <motion.div
      className="flex flex-col justify-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: 0.08 }}
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
        <p className="font-heading text-2xl font-bold text-heading">{name}</p>
        <p className="text-sm text-body">{title}</p>
        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-1 inline-block text-sm text-smaragd transition-colors duration-150 hover:text-smaragd-light"
          >
            {email}
          </a>
        )}
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
