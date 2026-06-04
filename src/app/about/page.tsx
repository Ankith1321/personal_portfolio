import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutNarrative } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow="About">An interdisciplinary path into applied AI</SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          This overview keeps to verified public information while fuller
          education details continue to be checked.
        </p>
      </section>
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <ul className="space-y-4 text-sm leading-7 text-text-muted sm:text-base">
          {aboutNarrative.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">
          Verification note: education dates and some institution details remain
          marked as <span className="font-semibold">TODO: VERIFY</span> in the
          source-of-truth file and are intentionally not expanded here yet.
        </p>
      </section>
    </Container>
  );
}
