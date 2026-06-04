import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experienceEntries } from "@/lib/portfolio-data";

export default function ExperiencePage() {
  const [juniorEngineer, internship] = experienceEntries;

  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow="Experience">
          Industrial exposure shaping practical engineering context
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          This page stays intentionally high level until dates, locations,
          departments, and responsibility details are fully verified.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
            {juniorEngineer.role}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text">
            {juniorEngineer.company}
          </h2>
          <ul className="mt-5 space-y-2 text-sm leading-7 text-text-muted sm:text-base">
            {juniorEngineer.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
            {internship.role}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text">
            {internship.company}
          </h2>
          <p className="mt-5 text-sm leading-7 text-text-muted sm:text-base">
            {"description" in internship ? internship.description : null}
          </p>
        </article>
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">
          Verification note: employment dates, departments, cities, and
          achievement bullets remain
          <span className="font-semibold"> TODO: VERIFY</span>.
        </p>
      </section>
    </Container>
  );
}
