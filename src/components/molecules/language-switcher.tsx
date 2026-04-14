"use client";

import { useState } from "react";

const languages = ["EN", "NL"] as const;
type Language = (typeof languages)[number];

export default function LanguageSwitcher() {
  const [active, setActive] = useState<Language>("EN");

  return (
    <div className="flex items-center gap-1 text-xs font-semibold" role="radiogroup" aria-label="Language">
      {languages.map((lang, i) => (
        <span key={lang} className="flex items-center gap-1">
          <button
            role="radio"
            aria-checked={active === lang}
            onClick={() => setActive(lang)}
            className={[
              "rounded-full px-2 py-1 transition-colors duration-150",
              "focus-visible:ring-2 focus-visible:ring-smaragd focus-visible:ring-offset-2 focus-visible:ring-offset-page",
              active === lang
                ? "text-heading"
                : "text-muted hover:text-body",
            ].join(" ")}
          >
            {lang}
          </button>
          {i < languages.length - 1 && (
            <span className="text-surface-border" aria-hidden="true">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
