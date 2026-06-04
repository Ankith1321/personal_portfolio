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
      className="hero-surface scroll-mt-24 overflow-hidden rounded-[2rem] border border-border shadow-[0_24px_70px_rgba(87,62,47,0.10)]"
    >
      <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-center lg:gap-10">
        <div className="space-y-6 lg:space-y-7">
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
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface/92 px-5 py-3 text-sm font-medium text-text shadow-[0_8px_20px_rgba(87,62,47,0.06)] hover:border-accent hover:text-accent"
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

        <div className="mx-auto w-full max-w-[18rem] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-surface-muted shadow-[0_20px_50px_rgba(87,62,47,0.14)]">
            <Image
              src="/images/profile/profile-photo.jpg"
              alt="Portrait of Saiankith Reddy Kolli"
              fill
              priority
              sizes="(max-width: 767px) 70vw, (max-width: 1279px) 38vw, 288px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
