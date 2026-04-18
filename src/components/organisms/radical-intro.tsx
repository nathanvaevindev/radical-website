"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function RadicalIntro() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <motion.p
          className="font-heading text-2xl font-medium leading-snug text-heading md:text-3xl lg:text-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          At Radical Recruitment, it&apos;s about who you are, not just what&apos;s
          on your r&eacute;sum&eacute;. Our Radical Community consists of
          candidates that stand out. Every candidate is assessed with our
          proprietary APAC-framework, a test about the human factors that
          predict success in AI roles. So companies already know you are
          exceptional before the first conversation. Join our Radical Community;
          it is more than a gateway to a job; it&apos;s a community where your
          human qualities are recognized as your greatest asset.
        </motion.p>
      </div>
    </section>
  );
}
