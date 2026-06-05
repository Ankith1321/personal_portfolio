"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import type { Locale } from "@/lib/i18n";
import { swapLocaleInPathname } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: {
    selectGerman: string;
    selectEnglish: string;
  };
};

function subscribeToLocation(callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);

  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
  };
}

function getLocationSuffixSnapshot() {
  if (typeof window === "undefined") {
    return "";
  }

  return `${window.location.search}${window.location.hash}`;
}

export function LanguageSwitcher({
  locale,
  labels,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const locationSuffix = useSyncExternalStore(
    subscribeToLocation,
    getLocationSuffixSnapshot,
    () => "",
  );

  const options: Array<{
    code: Locale;
    label: "DE" | "EN";
    ariaLabel: string;
  }> = [
    { code: "de", label: "DE", ariaLabel: labels.selectGerman },
    { code: "en", label: "EN", ariaLabel: labels.selectEnglish },
  ];

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-1 py-1"
      aria-label="Language switcher"
    >
      {options.map((option) => {
        const targetPath = swapLocaleInPathname(pathname, option.code);
        const href = `${targetPath}${locationSuffix}`;
        const isActive = option.code === locale;

        return (
          <Link
            key={option.code}
            href={href}
            aria-label={option.ariaLabel}
            aria-current={isActive ? "page" : undefined}
            data-umami-event="language-switch"
            data-umami-event-locale={option.code}
            className={[
              "inline-flex h-8 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold tracking-[0.08em] transition-colors",
              isActive
                ? "bg-accent text-white"
                : "text-text-muted hover:text-text",
            ].join(" ")}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
