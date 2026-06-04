"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getHomeSectionHref } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = dictionary.nav.items.map((item) => ({
    label: item.label,
    href: getHomeSectionHref(locale, item.section),
  }));

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/88 backdrop-blur-md">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-accent">
              SR
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[0.02em] text-text">
                {siteConfig.name}
              </span>
              <span className="hidden text-sm text-text-muted sm:block">
                {siteConfig.headline}
              </span>
            </span>
          </Link>

          <nav
            aria-label={dictionary.common.primaryNavigation}
            className="hidden items-center gap-1 md:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-text-muted hover:bg-surface hover:text-text"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher
              locale={locale}
              labels={{
                selectGerman: dictionary.common.selectGerman,
                selectEnglish: dictionary.common.selectEnglish,
              }}
            />
            <ThemeToggle
              labels={{
                toDark: dictionary.common.themeToggleToDark,
                toLight: dictionary.common.themeToggleToLight,
              }}
            />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher
              locale={locale}
              labels={{
                selectGerman: dictionary.common.selectGerman,
                selectEnglish: dictionary.common.selectEnglish,
              }}
            />
            <ThemeToggle
              labels={{
                toDark: dictionary.common.themeToggleToDark,
                toLight: dictionary.common.themeToggleToLight,
              }}
            />
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={
                isMenuOpen
                  ? dictionary.common.closeNavigationMenu
                  : dictionary.common.openNavigationMenu
              }
              className="flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text hover:border-accent hover:text-accent"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {dictionary.common.menu}
            </button>
            {isMenuOpen ? (
              <>
                <button
                  type="button"
                  aria-label={dictionary.common.closeNavigationOverlay}
                  className="fixed inset-0 z-20 cursor-default bg-transparent"
                  onClick={() => setIsMenuOpen(false)}
                />
                <div
                  id="mobile-nav"
                  className="absolute right-0 top-full z-30 mt-3 w-56 rounded-3xl border border-border bg-surface p-4 shadow-[0_16px_40px_rgba(87,62,47,0.12)]"
                >
                  <nav
                    aria-label={dictionary.common.mobileNavigation}
                    className="flex flex-col gap-2"
                  >
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl px-4 py-3 text-sm text-text-muted hover:bg-surface-muted hover:text-text"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </header>
  );
}
