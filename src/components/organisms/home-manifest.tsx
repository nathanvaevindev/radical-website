"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeManifest() {
  return (
    <section className="py-12 lg:py-16">
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

      </div>
    </section>
  );
}
