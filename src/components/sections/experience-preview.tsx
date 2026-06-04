import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/lib/dictionaries";

export function ExperiencePreview({ dictionary }: { dictionary: Dictionary }) {
  const juniorEngineer = dictionary.experience.entries.find(
    (entry) => entry.id === "junior-engineer",
  );
  const internship = dictionary.experience.entries.find(
    (entry) => entry.id === "internship",
  );

  if (!juniorEngineer || !internship) {
    return null;
  }

  return (
    <section
      id="experience"
      className="home-scroll-section scroll-mt-24 space-y-5 rounded-[1.75rem] border border-border bg-surface/85 px-6 py-6 shadow-[0_14px_36px_rgba(18,23,34,0.07)] sm:px-8"
    >
      <SectionHeading eyebrow={dictionary.experience.heading}>
        {dictionary.experience.title}
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-border bg-background/90 p-5 shadow-[0_10px_26px_rgba(18,23,34,0.06)]">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-accent">
            {juniorEngineer.role}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-text">
            {juniorEngineer.company}
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-text-muted">
            {juniorEngineer.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-border bg-background/90 p-5 shadow-[0_10px_26px_rgba(18,23,34,0.06)]">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-accent">
            {internship.role}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-text">
            {internship.company}
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-text-muted">
            {internship.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
