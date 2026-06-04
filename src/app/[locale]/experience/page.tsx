import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow={dictionary.experience.heading}>
          {dictionary.experience.pageTitle}
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {dictionary.experience.pageDescription}
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        {dictionary.experience.entries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-[1.75rem] border border-border bg-surface p-6"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
              {entry.role}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text">
              {entry.company}
            </h2>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-text-muted sm:text-base">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">
          {dictionary.experience.verificationNote}
        </p>
      </section>
    </Container>
  );
}
