import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function ContactCta({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const resumeUrl =
    siteConfig.social.resumeUrls[locale as keyof typeof siteConfig.social.resumeUrls];
  const resumeFilename =
    locale === "de" ? "Saiankith_Lebenslauf.pdf" : "Saiankith_Resume.pdf";
  const contactActions = [
    {
      label: dictionary.contact.actions.linkedin,
      href: siteConfig.social.linkedin,
    },
    {
      label: dictionary.contact.actions.github,
      href: siteConfig.social.github,
    },
    {
      label: dictionary.contact.actions.email,
      href: siteConfig.social.email,
    },
  ] as const;

  return (
    <section
      id="contact"
      className="home-scroll-section section-depth scroll-mt-24 rounded-[1.75rem] border border-border/80 px-6 py-6 sm:px-8"
    >
      <SectionHeading eyebrow={dictionary.contact.heading}>
        {dictionary.contact.title}
      </SectionHeading>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
        {dictionary.contact.text}
      </p>
      <p className="mt-3 text-sm text-text-muted">{dictionary.contact.location}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {contactActions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={action.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
            aria-label={
              action.href.startsWith("mailto:")
                ? action.label
                : `${action.label} ${dictionary.common.opensInNewTab}`
            }
            className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface/78 px-4 py-2.5 text-sm font-medium text-text shadow-[0_10px_24px_rgba(18,23,34,0.08)] backdrop-blur-sm hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5"
          >
            {action.label}
            {action.href.startsWith("mailto:") ? null : (
              <span aria-hidden="true">&nbsp;&#8599;</span>
            )}
          </a>
        ))}
        <ButtonLink
          href={resumeUrl}
          download={resumeFilename}
          variant="secondary"
        >
          {dictionary.contact.actions.resume}
        </ButtonLink>
      </div>
    </section>
  );
}
