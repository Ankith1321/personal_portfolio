import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/i18n";
import {
  getProjectAsset,
  getPublishedProjectLinks,
} from "@/lib/portfolio-data";

type ProjectsPreviewProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectsPreview({ locale, dictionary }: ProjectsPreviewProps) {
  return (
    <section id="projects" className="home-scroll-section tech-divider scroll-mt-24 space-y-5">
      <SectionHeading eyebrow={dictionary.projects.heading}>
        {dictionary.projects.title}
      </SectionHeading>
      <div className="section-depth grid gap-4 rounded-[1.75rem] border border-border/80 p-4 sm:p-5 md:grid-cols-2 xl:grid-cols-3">
        {dictionary.projects.cards.map((project) => (
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
      </div>
    </section>
  );
}
