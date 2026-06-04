import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/lib/dictionaries";

export function AboutPreview({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section
      id="about"
      className="home-scroll-section scroll-mt-24 rounded-[1.75rem] border border-border bg-surface/82 px-6 py-6 shadow-[0_14px_36px_rgba(18,23,34,0.07)] sm:px-8"
    >
      <div>
        <SectionHeading>{dictionary.about.heading}</SectionHeading>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-text-muted sm:text-base">
          {dictionary.about.text}
        </p>
      </div>
    </section>
  );
}
