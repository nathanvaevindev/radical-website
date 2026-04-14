"use client";

import { motion } from "framer-motion";
import Accordion from "@/components/molecules/accordion";

const FAQ_ITEMS = [
  {
    title: "What does the APAC test measure?",
    content: [
      "The APAC test evaluates adaptability, personality, awareness, and connection.",
      "We're looking for people who can think, grow, and act responsibly in AI.",
      "It's not a technical exam. It's a conversation about who you are.",
    ],
  },
  {
    title: "How long does the process take?",
    content: [
      "The APAC test takes 10–20 minutes.",
      "If you are among the top 10%, the interview follows within a week.",
      "The entire process typically takes two to three weeks to enter the community and enjoy all benefits.",
    ],
  },
  {
    title: "Is there a cost to join?",
    content: [
      "No. Membership is free for selected candidates.",
      "We're building this community carefully, focusing on quality rather than volume.",
    ],
  },
  {
    title: "What happens after I join?",
    content: [
      "You gain access to the Radical community, job opportunities, and a dedicated career coach.",
      "We support your personal and professional development and stay involved in your growth.",
    ],
  },
  {
    title: "Can I refer other candidates?",
    content: [
      "Yes. If you know someone who fits the Radical standard, you can refer them.",
      "We actively encourage strong additions to the community.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function RadicalFaq() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[720px] px-6 lg:px-8">
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          FAQ
        </motion.h2>

        <motion.div
          className="mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion items={FAQ_ITEMS} />
        </motion.div>
      </div>
    </section>
  );
}
