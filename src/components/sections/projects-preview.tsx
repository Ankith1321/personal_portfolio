import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/i18n";

type ProjectsPreviewProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const projectImages = [
  {
    imageSrc: "/images/projects/lane-detection-visual.svg",
    imageAlt: "Abstract illustration of lane-detection perception and output flow",
  },
  {
    imageSrc: "/images/projects/uv-roller-blind-visual.svg",
    imageAlt: "Abstract illustration of UV sensing and automated blind control",
  },
  {
    imageSrc: "/images/projects/turtlebot-visual.svg",
    imageAlt: "Abstract illustration of TurtleBot line following and obstacle avoidance",
  },
] as const;

export function ProjectsPreview({ locale, dictionary }: ProjectsPreviewProps) {
  return (
    <section id="projects" className="tech-divider scroll-mt-24 space-y-5">
      <SectionHeading eyebrow={dictionary.projects.heading}>
        {dictionary.projects.title}
      </SectionHeading>
      <div className="section-depth grid gap-4 rounded-[1.75rem] border border-border/80 p-4 sm:p-5 md:grid-cols-2 xl:grid-cols-3">
        {dictionary.projects.cards.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            href={
              project.slug
                ? getLocalizedPath(locale, `/projects/${project.slug}`)
                : undefined
            }
            imageSrc={projectImages[index]?.imageSrc}
            imageAlt={projectImages[index]?.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
