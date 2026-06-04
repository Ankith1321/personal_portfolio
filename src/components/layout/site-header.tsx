import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/88 backdrop-blur-md">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
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
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex"
          >
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-text-muted hover:bg-surface hover:text-text"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text marker:hidden hover:border-accent hover:text-accent">
                Menu
              </summary>
              <div className="absolute right-0 top-full mt-3 w-56 rounded-3xl border border-border bg-surface p-4 shadow-[0_16px_40px_rgba(87,62,47,0.12)]">
                <nav aria-label="Mobile" className="flex flex-col gap-2">
                  {siteConfig.navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-2xl px-4 py-3 text-sm text-text-muted hover:bg-surface-muted hover:text-text"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
