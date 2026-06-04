import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollDepth } from "@/components/ui/scroll-depth";
import { getDictionary } from "@/lib/dictionaries";
import { fontVariables } from "@/lib/fonts";
import { getLocaleStaticParams, resolveLocale } from "@/lib/i18n";
import "@/app/globals.css";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);

  return {
    title: {
      default: dictionary.metadata.title,
      template: `%s | ${dictionary.metadata.title}`,
    },
    description: dictionary.metadata.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${fontVariables} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-text">
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-text"
        >
          {dictionary.common.skipToContent}
        </a>
        <div className="flex min-h-screen flex-col">
          <ScrollDepth />
          <SiteHeader locale={locale} dictionary={dictionary} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter locale={locale} dictionary={dictionary} />
        </div>
      </body>
    </html>
  );
}
