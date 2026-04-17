"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Testimonial } from "@/types";

// Placeholder testimonials — replaced by Supabase data
const PLACEHOLDER: Testimonial[] = [
  {
    id: "1",
    quote:
      "Radical didn't just find me a role; they invested in who I am. The coaching and community changed my career trajectory.",
    name: "Sophie de Vries",
    role: "AI Engineer",
    location: "Amsterdam",
    photoUrl: null,
    rating: 5,
  },
  {
    id: "2",
    quote:
      "For the first time, a recruiter understood that my value isn't just my technical skills. The APAC process felt genuinely human.",
    name: "Marco Jansen",
    role: "Data Scientist",
    location: "Rotterdam",
    photoUrl: null,
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The peer-to-peer learning alone is worth it. I've grown more in six months than in two years at my previous company.",
    name: "Aisha Bakker",
    role: "ML Engineer",
    location: "Utrecht",
    photoUrl: null,
    rating: 5,
  },
  {
    id: "4",
    quote:
      "I was skeptical of recruitment agencies. Radical proved me wrong; they care about long-term fit, not quick placements.",
    name: "Thomas Visser",
    role: "LLM Specialist",
    location: "The Hague",
    photoUrl: null,
    rating: 5,
  },
  {
    id: "5",
    quote:
      "The community events are incredible. Real conversations with people who are shaping the future of AI in Europe.",
    name: "Lena Müller",
    role: "AI Ethicist",
    location: "Berlin",
    photoUrl: null,
    rating: 4,
  },
  {
    id: "6",
    quote:
      "My coach helped me see career possibilities I hadn't considered. Radical is a partner, not a middleman.",
    name: "David Smit",
    role: "Product Lead",
    location: "Eindhoven",
    photoUrl: null,
    rating: 5,
  },
  {
    id: "7",
    quote:
      "Being selected through APAC felt meaningful. It's not about keywords on a CV; it's about who you really are.",
    name: "Nina Hendriks",
    role: "Data Scientist",
    location: "Amsterdam",
    photoUrl: null,
    rating: 5,
  },
  {
    id: "8",
    quote:
      "The Radical Academy sessions keep me sharp. I'm learning alongside the best AI professionals in Europe.",
    name: "Jasper de Groot",
    role: "AI Engineer",
    location: "Delft",
    photoUrl: null,
    rating: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={i < count ? "#d4a017" : "none"}
          stroke={i < count ? "#d4a017" : "currentColor"}
          strokeWidth="1"
          className={i < count ? "" : "text-surface-border"}
          aria-hidden="true"
        >
          <path d="M6 1l1.545 3.13L11 4.635 8.5 7.07l.59 3.43L6 8.885 2.91 10.5l.59-3.43L1 4.635l3.455-.505L6 1z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex w-[340px] shrink-0 flex-col gap-4 rounded-[12px] border border-surface-border bg-surface p-6 sm:w-[400px]">
      <p className="text-sm leading-relaxed text-heading">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3">
        {/* Photo placeholder */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-smaragd/15 text-xs font-bold text-smaragd">
          {t.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-heading">{t.name}</p>
          <p className="text-xs text-muted">
            {t.role} · {t.location}
          </p>
        </div>
      </div>
      <Stars count={t.rating} />
    </div>
  );
}

type Props = {
  testimonials?: Testimonial[];
};

export default function RadicalTestimonials({ testimonials }: Props) {
  const items =
    testimonials && testimonials.length > 0 ? testimonials : PLACEHOLDER;

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  const stripRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offset = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    // Total width of one set of items
    const halfWidth = strip.scrollWidth / 2;
    const speed = 0.5; // px per frame

    function animate() {
      raf.current = requestAnimationFrame(animate);
      if (paused) return;

      offset.current += speed;
      if (offset.current >= halfWidth) {
        offset.current -= halfWidth;
      }
      strip!.style.transform = `translateX(-${offset.current}px)`;
    }

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [paused]);

  return (
    <motion.section
      className="overflow-hidden py-12 lg:py-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div
        ref={stripRef}
        className="flex gap-5 will-change-transform"
        style={{ width: "max-content" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </motion.section>
  );
}
