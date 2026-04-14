"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Button from "@/components/atoms/button";

const ParticleRCanvas = dynamic(
  () => import("@/components/atoms/particle-r-canvas"),
  { ssr: false }
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 * i,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function HeroHome() {
  return (
    <section className="relative -mt-18 flex min-h-[100dvh] items-center justify-center overflow-hidden">
      {/* Three.js particle background — sits behind everything */}
      <div className="absolute inset-0">
        <ParticleRCanvas />
      </div>

      {/* Radial glow overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(46,213,115,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content — pointer-events-none so cursor passes through to canvas */}
      <div className="pointer-events-none relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center lg:px-8">
        <motion.p
          className="mb-5 text-sm font-semibold uppercase tracking-widest text-smaragd"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Radical Recruitment
        </motion.p>

        <motion.h1
          className="mx-auto max-w-4xl font-heading text-5xl font-bold leading-[1.08] text-heading sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          AI is everywhere.{" "}
          <span className="gradient-text">The human factor</span> is rare.
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-body md:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          We connect companies with elite AI professionals selected for what
          makes them exceptional — not just their CV.
        </motion.p>

        <motion.div
          className="pointer-events-auto mt-10 flex flex-col gap-4 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <Button href="/for-companies" size="md">
            Find a Radical
          </Button>
          <Button href="/become-a-radical" variant="secondary" size="md">
            Become a Radical
          </Button>
        </motion.div>
      </div>

      {/* Bottom gradient fade into page bg */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-full"
        style={{
          background:
            "linear-gradient(to top, var(--bg-page) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
