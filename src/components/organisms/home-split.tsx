"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeSplit() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-6 px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Talent — left */}
        <motion.div
          className="flex flex-col justify-between rounded-[12px] border border-surface-border bg-surface p-8 lg:p-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-heading lg:text-4xl">
              <span className="gradient-text">Become a Radical.</span>
            </h2>
            <p className="mt-4 text-body">
              Join a community that invests in who you are, not just what you
              know.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Personal guidance",
                "Professional career coaching",
                "Community events and peer-to-peer learning with other top AI experts",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-body">
                  <span className="mt-0.5 text-smaragd" aria-hidden="true">
                    ✔
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <Button href="/become-a-radical">Become a Radical</Button>
          </div>
        </motion.div>

        {/* Companies — right */}
        <motion.div
          className="flex flex-col justify-between rounded-[12px] border border-surface-border bg-surface p-8 lg:p-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-heading lg:text-4xl">
              Hire AI talent that doesn&apos;t expire
            </h2>
            <p className="mt-4 text-body">
              Access professionals who grow with the field, selected for impact,
              not just skills.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Only the best candidates from our community",
                "Sharpest rates in the market",
                "junior - medior - senior level AI experts",
                "recruitment, interim and secondment",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-body">
                  <span className="mt-0.5 text-smaragd" aria-hidden="true">
                    ✔
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <Button href="/for-companies" variant="coral">Hire a Radical</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
