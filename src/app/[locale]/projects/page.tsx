import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, getLocalizedPath, resolveLocale } from "@/lib/i18n";
import {
  getProjectAsset,
  getPublishedProjectLinks,
} from "@/lib/portfolio-data";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow={dictionary.projects.heading}>
          {dictionary.projects.pageTitle}
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {dictionary.projects.pageDescription}
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        {dictionary.projects.pageCards.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            summary={project.summary}
            tags={project.tags}
            status={project.status}
            caseStudyLabel={dictionary.projects.actions.viewCaseStudy}
            liveDemoLabel={dictionary.projects.actions.tryLiveDemo}
            githubLabel={dictionary.projects.actions.github}
            disabledGithubReason={
              project.slug
                ? getPublishedProjectLinks(project.slug).githubTodo
                : undefined
            }
            detailsState={project.detailsState}
            href={
              project.slug
                ? getLocalizedPath(locale, `/projects/${project.slug}`)
                : undefined
            }
            liveDemoHref={
              project.slug
                ? getPublishedProjectLinks(project.slug).demoHref
                : undefined
            }
            githubHref={
              project.slug
                ? getPublishedProjectLinks(project.slug).githubHref
                : undefined
            }
            imageSrc={getProjectAsset(project.id).imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </section>
    </Container>
  );
}
