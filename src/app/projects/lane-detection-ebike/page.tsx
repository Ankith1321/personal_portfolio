import { Container } from "@/components/layout/container";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectPlaceholder } from "@/components/projects/project-placeholder";
import { ProjectSection } from "@/components/projects/project-section";
import { laneDetectionProject } from "@/lib/portfolio-data";

export default function LaneDetectionProjectPage() {
  return (
    <Container className="space-y-6 py-10 sm:space-y-8 sm:py-14">
      <ProjectHero
        backHref="/projects"
        backLabel="Back to Projects"
        category={laneDetectionProject.category}
        status={laneDetectionProject.status}
        summary={laneDetectionProject.summary}
        title={laneDetectionProject.title}
      />

      <ProjectSection
        eyebrow="Overview"
        title="Overview"
        description={laneDetectionProject.overview}
      />

      <ProjectSection
        eyebrow="Workflow"
        title="Workflow"
      >
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {laneDetectionProject.workflow.map((step, index) => (
            <li
              key={step}
              className="rounded-[1.5rem] border border-border bg-background p-5"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
                Step {index + 1}
              </p>
              <p className="mt-3 text-base font-medium text-text">{step}</p>
            </li>
          ))}
        </ol>
      </ProjectSection>

      <ProjectSection eyebrow="Snapshot" title="Technical snapshot">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[1.5rem] border border-border bg-background p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
              Technologies
            </p>
            <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
              {laneDetectionProject.technologies}
            </p>
            <div className="mt-4">
              <ProjectPlaceholder label="TODO: VERIFY framework" />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-background p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
              Dataset
            </p>
            <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
              {laneDetectionProject.dataset.approximateSize}
            </p>
            <div className="mt-4">
              <ProjectPlaceholder label={laneDetectionProject.dataset.placeholder} />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-background p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
              Evaluation
            </p>
            <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
              {laneDetectionProject.evaluationNote}
            </p>
            <div className="mt-4">
              <ProjectPlaceholder
                label={laneDetectionProject.evaluationPlaceholder}
              />
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow="Evidence"
        title="Evidence"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {laneDetectionProject.visualEvidence.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-border bg-background p-5"
            >
              <p className="text-sm font-medium text-text">{item}</p>
              <div className="mt-4">
                <ProjectPlaceholder label="TODO: ADD VERIFIED SCREENSHOT" />
              </div>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection eyebrow="Links" title="Links">
        <div className="grid gap-4 lg:grid-cols-2">
          <ProjectPlaceholder label="TODO: VERIFY GitHub repository" />
          <ProjectPlaceholder label="TODO: VERIFY demo availability" />
        </div>
      </ProjectSection>
    </Container>
  );
}
