import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { homepageProjects } from "@/lib/portfolio-data";

export function ProjectsPreview() {
  return (
    <section id="projects" className="scroll-mt-24 space-y-5">
      <SectionHeading eyebrow="Projects">
        Selected projects at a glance
      </SectionHeading>
      <div className="grid gap-4 xl:grid-cols-3">
        {homepageProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
