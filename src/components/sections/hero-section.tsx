import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { homepageHero } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site-config";

const externalActions = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    ariaLabel: "Open LinkedIn profile in a new tab",
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    ariaLabel: "Open GitHub profile in a new tab",
  },
] as const;

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-surface scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_32px_90px_rgba(18,23,34,0.18)]"
    >
      <div className="relative grid gap-6 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_10.5rem] lg:items-start lg:gap-8">
        <div className="relative z-10 space-y-6 lg:space-y-7">
          <div className="space-y-3">
            <h1 className="prose-balanced max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="text-xl font-semibold tracking-tight text-text sm:text-2xl">
              {homepageHero.title}
            </p>
            <p className="max-w-3xl text-base leading-7 text-text-muted sm:text-lg">
              {homepageHero.positioning}
            </p>
          </div>

          <div className="grid gap-2 text-sm leading-6 text-text-muted sm:text-base">
            <p>{siteConfig.location}</p>
            <p>{homepageHero.education}</p>
            <p>{homepageHero.institution}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {homepageHero.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border bg-background/88 px-3 py-1.5 text-sm text-text-muted"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/#projects">View Projects</ButtonLink>
            {externalActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={action.ariaLabel}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface/78 px-5 py-3 text-sm font-medium text-text shadow-[0_10px_24px_rgba(18,23,34,0.08)] backdrop-blur-sm hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5"
              >
                {action.label} <span aria-hidden="true">&nbsp;&#8599;</span>
              </a>
            ))}
            <ButtonLink href="/#contact" variant="secondary">
              Contact
            </ButtonLink>
            <ButtonLink href={siteConfig.social.resumeUrl} variant="secondary">
              Download Resume
            </ButtonLink>
          </div>

          <p className="text-sm font-medium text-secondary-accent">
            {homepageHero.availability}
          </p>
        </div>

        <div className="order-4 mx-auto w-full max-w-[7.25rem] sm:max-w-[8.25rem] lg:order-none lg:mx-0 lg:justify-self-end lg:max-w-[10rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] border border-border/80 bg-surface-muted shadow-[0_12px_28px_rgba(18,23,34,0.10)]">
            <Image
              src="/images/profile/profile-photo-v2.jpg"
              alt="Portrait of Saiankith Reddy Kolli"
              fill
              priority
              sizes="(max-width: 767px) 116px, (max-width: 1279px) 132px, 160px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
