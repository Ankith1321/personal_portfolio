import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { isVerifiedLink, siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);
  const resumeUrl =
    siteConfig.social.resumeUrls[locale as keyof typeof siteConfig.social.resumeUrls];
  const resumeFilename =
    locale === "de" ? "Saiankith_Lebenslauf.pdf" : "Saiankith_Resume.pdf";
  const contactItems = [
    {
      label: dictionary.contact.actions.email,
      href: siteConfig.social.email,
      value: isVerifiedLink(siteConfig.social.email)
        ? siteConfig.social.emailAddress
        : dictionary.contact.disabledEmail,
      analyticsAttrs: {
        "data-umami-event": "email-click",
      },
    },
    {
      label: dictionary.contact.actions.linkedin,
      href: siteConfig.social.linkedin,
      value: siteConfig.social.linkedin,
      analyticsAttrs: {
        "data-umami-event": "linkedin-click",
      },
    },
    {
      label: dictionary.contact.actions.github,
      href: siteConfig.social.github,
      value: siteConfig.social.github,
      analyticsAttrs: {
        "data-umami-event": "github-profile-click",
      },
    },
  ] as const;

  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow={dictionary.contact.heading}>
          {dictionary.contact.pageTitle}
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {dictionary.contact.pageDescription}
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">
            {dictionary.contact.locationCardTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
            {dictionary.contact.location}
          </p>
          <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
            {dictionary.contact.text}
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">
            {dictionary.contact.linksCardTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-text-muted sm:text-base">
            {contactItems.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-dashed border-border bg-background px-4 py-3"
              >
                <span className="font-medium text-text">{item.label}:</span>{" "}
                {isVerifiedLink(item.href) ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                    {...item.analyticsAttrs}
                    className="text-text-muted underline decoration-border underline-offset-4 hover:text-accent"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <ButtonLink
              href={resumeUrl}
              download={resumeFilename}
              variant="secondary"
              className="w-full justify-center"
              analyticsAttrs={{
                "data-umami-event": "resume-download",
                "data-umami-event-locale": locale,
                "data-umami-event-file": resumeFilename,
              }}
            >
              {dictionary.contact.actions.resume}
            </ButtonLink>
          </div>
        </article>
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">{dictionary.contact.verificationNote}</p>
      </section>
    </Container>
  );
}
