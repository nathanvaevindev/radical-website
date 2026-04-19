"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Slide = {
  id: string;
  src: string | null;
  alt: string;
};

const SLIDES: Slide[] = [
  {
    id: "1",
    src: "/photos/Chinese_Dutch_woman_twenties_parc.png",
    alt: "Radical community moment 1",
  },
  {
    id: "2",
    src: "/photos/Dutch-Turkish_woman_Campus.png",
    alt: "Radical community moment 2",
  },
  {
    id: "3",
    src: "/photos/Dutch_man_mid_twenties_half_long_hair.png",
    alt: "Radical community moment 3",
  },
  {
    id: "4",
    src: "/photos/Dutch_woman_early_forties.png",
    alt: "Radical community moment 4",
  },
  {
    id: "5",
    src: "/photos/Nelieke%20werk%20blauwe%20jas.jpg",
    alt: "Radical community moment 5",
  },
  {
    id: "7",
    src: "/photos/Oscar_chill.jpeg",
    alt: "Radical community moment 7",
  },
  {
    id: "8",
    src: "/photos/Scandinavian_woman_ealy_thirties.png",
    alt: "Radical community moment 8",
  },
  {
    id: "9",
    src: "/photos/South_Asian%20man.png",
    alt: "Radical community moment 9",
  },
  {
    id: "10",
    src: "/photos/Spanish_man_mid_thirties.png",
    alt: "Radical community moment 10",
  },
];

function PlaceholderIcon() {
  return (
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
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div
      className="relative aspect-[4/3] w-[280px] shrink-0 overflow-hidden rounded-sm bg-surface-light sm:w-[360px] lg:w-[420px]"
      aria-hidden={slide.src ? undefined : true}
    >
      {slide.src ? (
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-smaragd/10">
            <PlaceholderIcon />
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomePhotoSlider() {
  // Double the slides for a seamless loop
  const doubled = [...SLIDES, ...SLIDES];

  const stripRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offset = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const halfWidth = strip.scrollWidth / 2;
    const speed = 0.5;

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
        className="flex gap-5 will-change-transform touch-pan-x"
        style={{ width: "max-content" }}
      >
        {doubled.map((slide, i) => (
          <SlideCard key={`${slide.id}-${i}`} slide={slide} />
        ))}
      </div>
    </motion.section>
  );
}
