import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillsByEvidence } from "@/lib/portfolio-data";

export default function SkillsPage() {
  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow="Skills">
          Skills grouped by evidence level
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          Verified skills are separated from items that still need confirmation
          before they are presented as established strengths.
        </p>
      </section>
      <section className="grid gap-5 xl:grid-cols-3">
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">
            Industrial Exposure
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-text-muted sm:text-base">
            {skillsByEvidence.industrialExposure.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">
            Used in Projects
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-text-muted sm:text-base">
            {skillsByEvidence.usedInProjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">
            TODO: VERIFY before adding
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-text-muted sm:text-base">
            {skillsByEvidence.todoVerifyBeforeAdding.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">
          Verification note: unverified tools and language levels remain
          separate by design and are not presented here as confirmed skills.
        </p>
      </section>
    </Container>
  );
}
