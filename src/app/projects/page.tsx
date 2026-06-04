import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectOverview } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow="Projects">Project directions and evidence status</SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          These project summaries use only verified claims from the master
          content document. The lane-detection project now has an initial case
          study page, while the remaining project detail views stay unavailable
          until their evidence is reviewed.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        {projectOverview.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">
          Verification note: the lane-detection accuracy figure is not promoted
          here because its evaluation meaning still requires
          <span className="font-semibold"> TODO: VERIFY</span>.
        </p>
      </section>
    </Container>
  );
}
