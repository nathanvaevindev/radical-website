"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CommunityEvent } from "@/types";
import Button from "@/components/atoms/button";

// Placeholder events — will be replaced by Supabase data
const PLACEHOLDER_EVENTS: CommunityEvent[] = [
  {
    id: "1",
    title: "AI Ethics Roundtable",
    date: "2026-05-08",
    time: "18:00",
    type: "meetup",
    location: "Amsterdam",
    description: "Open discussion on responsible AI development",
  },
  {
    id: "2",
    title: "Radical Academy: LLM Fine-Tuning",
    date: "2026-05-15",
    time: "19:00",
    type: "workshop",
    location: "Online",
    description: "Hands-on session with real-world datasets",
  },
  {
    id: "3",
    title: "Community Meet & Greet",
    date: "2026-05-22",
    time: "17:30",
    type: "group event",
    location: "Rotterdam",
    description: "Quarterly gathering for all Radicals",
  },
  {
    id: "4",
    title: "Career Growth in AI — Panel",
    date: "2026-06-05",
    time: "18:30",
    type: "talk",
    location: "Online",
    description: "Senior AI leaders share their career paths",
  },
];

function formatDate(dateStr: string): { day: string; month: string } {
  const d = new Date(dateStr + "T00:00:00");
  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
  };
}

const COMMUNITY_VALUES = [
  "We learn together",
  "We make each other better",
  "We build the foundation for ethical AI in Europe",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type Props = {
  events?: CommunityEvent[];
};

export default function HomeCommunity({ events }: Props) {
  const displayEvents =
    events && events.length > 0 ? events.slice(0, 5) : PLACEHOLDER_EVENTS;

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          The Radical Community
        </motion.h2>

        <motion.p
          className="mt-6 max-w-3xl text-lg leading-relaxed text-body"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our community is built on a curated selection process, centered around
          our proprietary APAC framework and individual assessments. This ensures
          that every member brings not only technical excellence but also the
          human-centric qualities essential for leadership in AI.
        </motion.p>

        {/* Two-column layout */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left — Events + Values */}
          <div>
            <motion.p
              className="text-xs font-semibold uppercase tracking-wider text-muted"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              Upcoming Events
            </motion.p>

            <div className="mt-6 flex flex-col gap-4">
              {displayEvents.map((event, i) => {
                const { day, month } = formatDate(event.date);
                return (
                  <motion.div
                    key={event.id}
                    className="flex gap-4 rounded-[12px] border border-surface-border bg-surface p-4 transition-shadow duration-200 hover:shadow-card-hover"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: 0.08 * i }}
                  >
                    {/* Date block */}
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-surface-light">
                      <span className="text-lg font-bold leading-none text-heading">
                        {day}
                      </span>
                      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                        {month}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-sm font-bold text-heading">
                        {event.title}
                      </p>
                      {event.description && (
                        <p className="mt-0.5 text-xs text-muted line-clamp-1">
                          {event.description}
                        </p>
                      )}
                      <p className="mt-1.5 text-xs text-muted">
                        {event.time} · {event.location}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Community values */}
            <motion.ul
              className="mt-8 flex flex-col gap-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {COMMUNITY_VALUES.map((value) => (
                <li key={value} className="flex gap-3 text-body">
                  <span className="mt-0.5 text-smaragd" aria-hidden="true">
                    ✔
                  </span>
                  {value}
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              className="mt-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="/community">Go to Community</Button>
            </motion.div>
          </div>

          {/* Right — Community image */}
          <motion.div
            className="relative overflow-hidden rounded-[12px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative aspect-[4/3] w-full bg-surface-light md:aspect-auto md:h-full md:min-h-[480px]">
              {/* Placeholder — replace with real community photo from Supabase Storage */}
              <div className="absolute inset-0 flex items-center justify-center bg-surface-light">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-smaragd/10">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-smaragd"
                      aria-hidden="true"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted">Community photo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
