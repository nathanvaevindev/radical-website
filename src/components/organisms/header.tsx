"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/types";
import Logo from "@/components/atoms/logo";
import Button from "@/components/atoms/button";
import LanguageSwitcher from "@/components/molecules/language-switcher";
import MobileMenu from "@/components/molecules/mobile-menu";

const NAV_LINKS: NavLink[] = [
  { label: "For Companies", href: "/for-companies" },
  { label: "Become a Radical", href: "/become-a-radical" },
  { label: "Community", href: "/community" },
  { label: "About Us", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // initialise on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleMobile = useCallback(() => setMobileOpen((o) => !o), []);

  return (
    <>
      <header
        className={[
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled || mobileOpen
            ? "bg-page/80 shadow-[0_1px_0_0_var(--bg-surface-border)] backdrop-blur-xl"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-18 max-w-[1280px] items-center justify-between px-6 lg:px-8">
          {/* Left — Logo */}
          <Logo />

          {/* Centre — Desktop nav links */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150",
                  "focus-visible:ring-2 focus-visible:ring-smaragd focus-visible:ring-offset-2 focus-visible:ring-offset-page",
                  pathname === link.href
                    ? "text-smaragd"
                    : "text-body hover:text-heading",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — Language switcher + CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            <div className="hidden lg:block">
              <Button href="/contact" size="sm">
                Contact
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-heading transition-colors duration-150 hover:bg-surface-light focus-visible:ring-2 focus-visible:ring-smaragd lg:hidden"
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex w-5 flex-col gap-[5px]">
                <span
                  className={[
                    "block h-[2px] w-full rounded-full bg-current transition-all duration-200",
                    mobileOpen ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block h-[2px] w-full rounded-full bg-current transition-all duration-200",
                    mobileOpen ? "opacity-0" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block h-[2px] w-full rounded-full bg-current transition-all duration-200",
                    mobileOpen ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
        pathname={pathname}
      />
    </>
  );
}
