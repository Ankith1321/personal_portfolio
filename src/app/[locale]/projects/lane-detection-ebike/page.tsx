import { Container } from "@/components/layout/container";
import { ProjectActionLink } from "@/components/projects/project-action-link";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectSection } from "@/components/projects/project-section";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, getLocalizedPath, resolveLocale } from "@/lib/i18n";
import { getProjectAsset } from "@/lib/portfolio-data";

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
  const technicalOverviewItems = locale === "de"
    ? [
        { label: "Bereich", value: "Computer Vision" },
        { label: "Anwendung", value: "E-Bike Perception" },
        {
          label: "Analyse",
          value:
            "Kamerabilder vorverarbeitet, analysiert und mit Deep Learning für Lane Detection ausgewertet.",
        },
        { label: "Datensatz", value: "Ungefähr 35.000 Bilder" },
      ]
    : [
        { label: "Domain", value: "Computer Vision" },
        { label: "Use case", value: "E-bike perception" },
        {
          label: "Analysis",
          value:
            "Camera images were preprocessed, analyzed, and evaluated with deep learning for lane detection.",
        },
        { label: "Dataset", value: "Approximately 35,000 images" },
      ];

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
        imageSrc={getProjectAsset("lane-detection-ebike").imageSrc}
        imageAlt="Cyclist on an urban bike lane representing the e-bike perception use case"
      />

      <ProjectSection
        eyebrow={content.overviewHeading}
        title={content.overviewHeading}
        description={content.overviewText}
      />

      <ProjectSection
        eyebrow={content.workflowHeading}
        title={content.workflowHeading}
      >
        <ol className="grid gap-4 md:grid-cols-3">
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
        eyebrow={content.technicalOverviewEyebrow}
        title={content.technicalOverviewTitle}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {technicalOverviewItems.map((item) => (
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
