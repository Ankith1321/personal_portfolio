import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/lib/dictionaries";

export function SkillsPreview({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="skills" className="home-scroll-section tech-divider scroll-mt-24 space-y-5">
      <SectionHeading eyebrow={dictionary.skills.heading}>
        {dictionary.skills.title}
      </SectionHeading>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {dictionary.skills.groups.map((group) => (
          <article
            key={group.title}
            className="flex h-full flex-col rounded-[1.5rem] border border-border bg-surface/88 p-5 shadow-[0_12px_30px_rgba(18,23,34,0.07)]"
          >
            <h3 className="text-lg font-semibold text-text">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
