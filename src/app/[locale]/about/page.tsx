import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow={dictionary.about.heading}>
          {dictionary.about.pageTitle}
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {dictionary.about.pageDescription}
        </p>
      </section>
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <ul className="space-y-4 text-sm leading-7 text-text-muted sm:text-base">
          {dictionary.about.narrative.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">{dictionary.about.verificationNote}</p>
      </section>
    </Container>
  );
}
