import { ProjectCard } from "@/components/ui/project-card";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/i18n";
import {
  getProjectAsset,
  getPublishedProjectLinks,
  partitionProjectsByType,
} from "@/lib/portfolio-data";

type ProjectsPreviewProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectsPreview({ locale, dictionary }: ProjectsPreviewProps) {
  const groupedProjects = partitionProjectsByType(dictionary.projects.cards);
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
    <section id="projects" className="home-scroll-section tech-divider scroll-mt-24 space-y-5">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          {dictionary.projects.title}
        </h2>
      </div>

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
              <h3 className="text-lg font-semibold tracking-tight text-text sm:text-xl">
                {group.heading}
              </h3>
            </div>
            <div className="section-depth grid gap-4 rounded-[1.75rem] border border-border/80 p-4 sm:p-5 md:grid-cols-2 xl:grid-cols-3">
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
    </section>
  );
}
