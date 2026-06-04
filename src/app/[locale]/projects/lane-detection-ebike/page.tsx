import { Container } from "@/components/layout/container";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectPlaceholder } from "@/components/projects/project-placeholder";
import { ProjectSection } from "@/components/projects/project-section";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, getLocalizedPath, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedLaneDetectionProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);
  const content = dictionary.laneDetection;

  return (
    <Container className="space-y-6 py-10 sm:space-y-8 sm:py-14">
      <ProjectHero
        backHref={getLocalizedPath(locale, "/projects")}
        backLabel={content.backLabel}
        category={content.category}
        status={content.status}
        summary={content.summary}
        title={content.title}
      />

      <ProjectSection
        eyebrow={content.overviewHeading}
        title={content.overviewHeading}
        description={content.overviewText}
      />

      <ProjectSection eyebrow={content.workflowHeading} title={content.workflowHeading}>
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.workflowSteps.map((step, index) => (
            <li
              key={step}
              className="rounded-[1.5rem] border border-border bg-background p-5"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
                {content.stepLabel} {index + 1}
              </p>
              <p className="mt-3 text-base font-medium text-text">{step}</p>
            </li>
          ))}
        </ol>
      </ProjectSection>

      <ProjectSection eyebrow={content.snapshotEyebrow} title={content.snapshotTitle}>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[1.5rem] border border-border bg-background p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
              {content.technologiesTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
              {content.technologies}
            </p>
            <div className="mt-4">
              <ProjectPlaceholder label={content.frameworkPlaceholder} />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-background p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
              {content.datasetTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
              {content.datasetSize}
            </p>
            <div className="mt-4">
              <ProjectPlaceholder label={content.datasetPlaceholder} />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-background p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
              {content.evaluationTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
              {content.evaluationNote}
            </p>
            <div className="mt-4">
              <ProjectPlaceholder label={content.evaluationPlaceholder} />
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection eyebrow={content.evidenceHeading} title={content.evidenceHeading}>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.evidenceItems.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-border bg-background p-5"
            >
              <p className="text-sm font-medium text-text">{item}</p>
              <div className="mt-4">
                <ProjectPlaceholder label={content.evidencePlaceholder} />
              </div>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection eyebrow={content.linksHeading} title={content.linksHeading}>
        <div className="grid gap-4 lg:grid-cols-2">
          <ProjectPlaceholder label={content.githubPlaceholder} />
          <ProjectPlaceholder label={content.demoPlaceholder} />
        </div>
      </ProjectSection>
    </Container>
  );
}
