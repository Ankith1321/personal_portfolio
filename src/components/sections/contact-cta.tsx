import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { opportunityFocus } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site-config";

const contactActions = [
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

export function ContactCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 rounded-[1.75rem] border border-border bg-surface px-6 py-6 sm:px-8"
    >
      <SectionHeading eyebrow="Contact">Let&apos;s connect</SectionHeading>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
        {opportunityFocus}
      </p>
      <p className="mt-3 text-sm text-text-muted">{siteConfig.location}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {contactActions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={action.ariaLabel}
            className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text hover:border-accent hover:text-accent"
          >
            {action.label} <span aria-hidden="true">&nbsp;&#8599;</span>
          </a>
        ))}
        <ButtonLink href={siteConfig.social.email} variant="secondary">
          TODO: VERIFY professional email
        </ButtonLink>
        <ButtonLink href={siteConfig.social.resumeUrl} variant="secondary">
          TODO: VERIFY resume PDF
        </ButtonLink>
      </div>
    </section>
  );
}
