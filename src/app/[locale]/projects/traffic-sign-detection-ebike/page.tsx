import { Container } from "@/components/layout/container";
import { ProjectActionLink } from "@/components/projects/project-action-link";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectPlaceholder } from "@/components/projects/project-placeholder";
import { ProjectSection } from "@/components/projects/project-section";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, getLocalizedPath, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedTrafficSignDetectionProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);
  const content = dictionary.trafficSignDetection;

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

      <ProjectPlaceholder label={content.visualPlaceholder} />

      <ProjectSection
        eyebrow={content.overviewHeading}
        title={content.overviewHeading}
        description={content.overviewText}
      />

      <ProjectSection
        eyebrow={content.workflowHeading}
        title={content.workflowHeading}
      >
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.workflowSteps.map((point, index) => (
            <li
              key={point}
              className="rounded-[1.5rem] border border-border bg-background p-5"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
                {index + 1}
              </p>
              <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
                {point}
              </p>
            </li>
          ))}
        </ol>
      </ProjectSection>

      <ProjectSection
        eyebrow={content.contribution.eyebrow}
        title={content.contribution.title}
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {content.contribution.items.map((item) => (
            <li
              key={item}
              className="rounded-[1.5rem] border border-border bg-background px-5 py-4 text-sm leading-7 text-text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection
        eyebrow={content.technicalOverviewEyebrow}
        title={content.technicalOverviewTitle}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.technicalOverviewItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-border bg-background p-5"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </Container>
  );
}
