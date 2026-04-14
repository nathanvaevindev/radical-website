"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItem = {
  title: string;
  content: string[];
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpen?: number;
};

export default function Accordion({ items, defaultOpen = -1 }: AccordionProps) {
  const [openIdx, setOpenIdx] = useState(defaultOpen);

  function toggle(i: number) {
    setOpenIdx(openIdx === i ? -1 : i);
  }

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={item.title}
            className="border-b border-surface-border"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-smaragd focus-visible:ring-offset-2 focus-visible:ring-offset-page"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg font-bold text-heading">
                {item.title}
              </span>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-colors duration-150"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={[
                    "transition-transform duration-200",
                    isOpen ? "rotate-45" : "",
                  ].join(" ")}
                >
                  <line x1="8" y1="2" x2="8" y2="14" />
                  <line x1="2" y1="8" x2="14" y2="8" />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={defaultOpen === i}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="flex flex-col gap-2 pb-5">
                    {item.content.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3 text-sm text-body"
                      >
                        <span
                          className="mt-0.5 text-smaragd"
                          aria-hidden="true"
                        >
                          ·
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
