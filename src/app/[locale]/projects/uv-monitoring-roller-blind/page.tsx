import { Container } from "@/components/layout/container";
import { ProjectActionLink } from "@/components/projects/project-action-link";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectSection } from "@/components/projects/project-section";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, getLocalizedPath, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedUvMonitoringRollerBlindPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);
  const content = dictionary.uvMonitoringRollerBlind;

  return (
    <Container className="space-y-6 py-10 sm:space-y-8 sm:py-14">
      <ProjectActionLink
        label={content.backLabel}
        href={getLocalizedPath(locale, "/projects")}
        variant="secondary"
        className="inline-flex shadow-[0_10px_22px_rgba(18,23,34,0.08)]"
      />
      <ProjectHero
        category={content.category}
        summary={content.summary}
        title={content.title}
      />

      <ProjectSection
        eyebrow={content.overviewHeading}
        title={content.overviewHeading}
        description={content.overviewText}
      />

      <ProjectSection
        eyebrow={content.contributionHeading}
        title={content.contributionHeading}
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {content.contributionItems.map((item) => (
            <li
              key={item}
              className="rounded-[1.35rem] border border-border bg-background px-5 py-4 text-sm leading-7 text-text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection
        eyebrow={content.demonstratedHeading}
        title={content.demonstratedHeading}
      >
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {content.demonstratedItems.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-surface px-4 py-3 text-sm text-text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection
        eyebrow={content.limitationHeading}
        title={content.limitationHeading}
      >
        <div className="max-w-3xl rounded-[1.35rem] border border-border bg-surface/80 px-5 py-4 text-sm leading-7 text-text-muted">
          {content.limitationText}
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow={content.technicalConceptsHeading}
        title={content.technicalConceptsHeading}
      >
        <ul className="flex flex-wrap gap-2">
          {content.technicalConcepts.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border/80 bg-background/72 px-3 py-1 text-xs text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:bg-surface-muted/80 dark:text-panel-text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </ProjectSection>
    </Container>
  );
}
