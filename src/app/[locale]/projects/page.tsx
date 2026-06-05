import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, getLocalizedPath, resolveLocale } from "@/lib/i18n";
import {
  getProjectAsset,
  getPublishedProjectLinks,
  partitionProjectsByType,
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
  const groupedProjects = partitionProjectsByType(dictionary.projects.pageCards);
  const projectGroups = [
    {
      key: "academic",
      heading: dictionary.projects.projectGroups.academic.heading,
      cards: groupedProjects.academic,
    },
    {
      key: "personal",
      heading: dictionary.projects.projectGroups.personal.heading,
      cards: groupedProjects.personal,
    },
  ] as const;

  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {dictionary.projects.title}
        </h1>
      </section>
      <div className="space-y-8">
        {projectGroups.map((group) => (
          <section
            key={group.key}
            className={[
              "space-y-4",
              group.key === "personal" ? "border-t border-border/70 pt-7" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="max-w-3xl space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-text sm:text-2xl">
                {group.heading}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.cards.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  summary={project.summary}
                  tags={project.tags}
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
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
