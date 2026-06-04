import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { homepageProjects } from "@/lib/portfolio-data";

export function ProjectsPreview() {
  return (
    <section id="projects" className="tech-divider scroll-mt-24 space-y-5">
      <SectionHeading eyebrow="Projects">
        Selected projects at a glance
      </SectionHeading>
      <div className="section-depth grid gap-4 rounded-[1.9rem] border border-border/80 p-4 sm:p-5 xl:grid-cols-3">
        {homepageProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
