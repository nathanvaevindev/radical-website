import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/molecules/language-switcher";

const NAV_LINKS = [
  { label: "For Companies", href: "/for-companies" },
  { label: "Become a Radical", href: "/become-a-radical" },
  { label: "Community", href: "/community" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-12 py-16 md:grid-cols-3 md:gap-8 lg:py-20">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-xl font-bold text-heading transition-opacity duration-150 hover:opacity-80"
              aria-label="Radical Recruitment — Home"
            >
              <Image
                src="/logo 1.png"
                alt=""
                width={28}
                height={28}
                className="rounded-md"
                aria-hidden="true"
              />
              <span>Radical Recruitment</span>
            </Link>
            <p className="max-w-[280px] text-sm leading-relaxed text-muted">
              AI is everywhere. The human factor is rare.
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/radical-recruitment"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-surface-light hover:text-smaragd focus-visible:ring-2 focus-visible:ring-smaragd focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              aria-label="Radical Recruitment on LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-body transition-colors duration-150 hover:text-heading"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Legal + Language */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted">
                Legal
              </h3>
              <ul className="flex flex-col gap-3">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-body transition-colors duration-150 hover:text-heading"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
                Language
              </h3>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-border py-6">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Radical Recruitment. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
