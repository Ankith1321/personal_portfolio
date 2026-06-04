import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPreview } from "@/lib/portfolio-data";

export function AboutPreview() {
  return (
    <section
      id="about"
      className="scroll-mt-24 rounded-[1.75rem] border border-border bg-surface px-6 py-6 sm:px-8"
    >
      <div>
        <SectionHeading eyebrow="About">A concise transition into applied AI</SectionHeading>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-text-muted sm:text-base">
          {aboutPreview}
        </p>
      </div>
    </section>
  );
}
