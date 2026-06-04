import { SectionHeading } from "@/components/ui/section-heading";
import { experienceEntries } from "@/lib/portfolio-data";

export function ExperiencePreview() {
  const [juniorEngineer, internship] = experienceEntries;

  return (
    <section
      id="experience"
      className="scroll-mt-24 space-y-5 rounded-[1.75rem] border border-border bg-surface px-6 py-6 sm:px-8"
    >
      <SectionHeading eyebrow="Experience">
        Industrial experience
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-border bg-background p-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-accent">
            {juniorEngineer.role}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-text">
            {juniorEngineer.company}
          </h3>
          <p className="mt-3 text-sm leading-7 text-text-muted">
            Pharmaceutical-industry processes, monitoring, sensors, actuators,
            automation, PFDs, and P&amp;IDs.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-border bg-background p-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-accent">
            {internship.role}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-text">
            {internship.company}
          </h3>
          <p className="mt-3 text-sm leading-7 text-text-muted">
            {"description" in internship ? internship.description : null}
          </p>
        </article>
      </div>
    </section>
  );
}
