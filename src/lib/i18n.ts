import { notFound } from "next/navigation";

export type Locale = "de" | "en";

export const supportedLocales = ["de", "en"] as const;

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function assertLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

export async function resolveLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  return assertLocale(locale);
}

export function getLocaleStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export function getLocalizedPath(locale: Locale, path = "/") {
  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getHomeSectionHref(locale: Locale, section: string) {
  return `/${locale}#${section}`;
}

export function swapLocaleInPathname(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (firstSegment && isLocale(firstSegment)) {
    segments[1] = nextLocale;
    return segments.join("/") || "/";
  }

  const normalizedPath = pathname === "/" ? "" : pathname;
  return `/${nextLocale}${normalizedPath}`;
}
