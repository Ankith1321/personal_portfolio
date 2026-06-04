import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getHomeSectionHref } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const externalActions = [
    {
      label: dictionary.hero.actions.linkedin,
      href: siteConfig.social.linkedin,
    },
    {
      label: dictionary.hero.actions.github,
      href: siteConfig.social.github,
    },
  ] as const;

  return (
    <section
      id="home"
      className="home-scroll-section hero-surface scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_32px_90px_rgba(18,23,34,0.18)]"
    >
      <div className="relative grid gap-6 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-start lg:gap-8">
        <div className="relative z-10 space-y-6 lg:space-y-7">
          <div className="space-y-3">
            <h1 className="prose-balanced max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="text-xl font-semibold tracking-tight text-text sm:text-2xl">
              {dictionary.hero.title}
            </p>
            <div className="max-w-3xl space-y-2 text-base leading-7 text-text-muted sm:text-lg">
              {dictionary.hero.summaryLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-1 text-sm leading-6 text-text-muted sm:text-base">
            <p>{dictionary.hero.metadataRow}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {dictionary.hero.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border bg-background/88 px-3 py-1.5 text-sm text-text-muted"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={getHomeSectionHref(locale, "projects")}>
              {dictionary.hero.actions.projects}
            </ButtonLink>
            {externalActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${action.label} ${dictionary.common.opensInNewTab}`}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface/78 px-5 py-3 text-sm font-medium text-text shadow-[0_10px_24px_rgba(18,23,34,0.08)] backdrop-blur-sm hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5"
              >
                {action.label} <span aria-hidden="true">&nbsp;&#8599;</span>
              </a>
            ))}
            <ButtonLink href={getHomeSectionHref(locale, "contact")} variant="secondary">
              {dictionary.hero.actions.contact}
            </ButtonLink>
            <ButtonLink href={siteConfig.social.resumeUrl} variant="secondary">
              {siteConfig.social.resumeUrl
                ? dictionary.hero.actions.resume
                : dictionary.hero.disabledResume}
            </ButtonLink>
          </div>

          <p className="text-base font-medium text-text sm:text-lg">
            {dictionary.hero.availability}
          </p>
        </div>

        <div className="order-4 mx-auto w-full max-w-[8.75rem] sm:max-w-[10.25rem] lg:order-none lg:mx-0 lg:justify-self-end lg:max-w-[12.5rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] border border-border/80 bg-surface/88 shadow-[0_12px_28px_rgba(18,23,34,0.10)]">
            <Image
              src="/images/profile/profile-photo.jpg"
              alt={dictionary.hero.portraitAlt}
              fill
              priority
              sizes="(max-width: 767px) 140px, (max-width: 1279px) 170px, 200px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
