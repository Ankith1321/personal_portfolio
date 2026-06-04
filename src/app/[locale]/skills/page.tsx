import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedSkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow={dictionary.skills.heading}>
          {dictionary.skills.pageTitle}
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {dictionary.skills.pageDescription}
        </p>
      </section>
      <section className="grid gap-5 xl:grid-cols-3">
        {dictionary.skills.evidenceGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.75rem] border border-border bg-surface p-6"
          >
            <h2 className="text-xl font-semibold tracking-tight text-text">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-text-muted sm:text-base">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">
            {dictionary.skills.verificationGroupTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-text-muted sm:text-base">
            {dictionary.skills.verificationGroupItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">
          {dictionary.skills.verificationNote}
        </p>
      </section>
    </Container>
  );
}
