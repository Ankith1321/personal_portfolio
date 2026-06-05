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

export default async function LocalizedUvMonitoringRollerBlindPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);
  const content = dictionary.uvMonitoringRollerBlind;
  const imageSrc = getProjectAsset("uv-monitoring-roller-blind").imageSrc;
  const imageAlt = locale === "de"
    ? "Illustration für UV-Messung und Rollladensteuerung mit einem Raspberry-Pi-basierten Prototyp"
    : "Illustration of UV sensing and roller-blind control using a Raspberry Pi-based prototype";

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
        imageAlt={imageAlt}
        imageFit="contain"
        imageSrc={imageSrc}
        summary={content.summary}
        title={content.title}
      />

      <ProjectSection
        title={content.overviewHeading}
        description={content.overviewText}
      />

      <ProjectSection
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
        title={content.resultsHeading}
      >
        <p className="max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {content.resultsText}
        </p>
      </ProjectSection>
    </Container>
  );
}
