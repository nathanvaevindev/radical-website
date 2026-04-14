"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavLink } from "@/types";
import Button from "@/components/atoms/button";
import LanguageSwitcher from "@/components/molecules/language-switcher";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  pathname: string;
};

export default function MobileMenu({
  open,
  onClose,
  links,
  pathname,
}: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-page lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Spacer for header height */}
          <div className="h-18" />

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={[
                  "font-heading text-3xl font-bold transition-colors duration-150",
                  pathname === link.href
                    ? "text-smaragd"
                    : "text-heading hover:text-smaragd",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-6 pb-12">
            <LanguageSwitcher />
            <Button href="/contact" onClick={onClose} size="md">
              Contact
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
