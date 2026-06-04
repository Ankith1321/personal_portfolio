import { SectionHeading } from "@/components/ui/section-heading";
import { skillsByEvidence } from "@/lib/portfolio-data";

export function SkillsPreview() {
  return (
    <section id="skills" className="tech-divider scroll-mt-24 space-y-5">
      <SectionHeading eyebrow="Skills">Core skill areas</SectionHeading>
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-[1.5rem] border border-border bg-surface/88 p-5 shadow-[0_12px_30px_rgba(18,23,34,0.07)]">
          <h3 className="text-lg font-semibold text-text">AI / Computer Vision</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillsByEvidence.aiComputerVision.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="rounded-[1.5rem] border border-border bg-surface/88 p-5 shadow-[0_12px_30px_rgba(18,23,34,0.07)]">
          <h3 className="text-lg font-semibold text-text">
            Smart Sensors / Edge Systems
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillsByEvidence.smartSensorsEdgeSystems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="rounded-[1.5rem] border border-border bg-surface/88 p-5 shadow-[0_12px_30px_rgba(18,23,34,0.07)]">
          <h3 className="text-lg font-semibold text-text">
            Industrial Engineering
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillsByEvidence.industrialEngineering.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
