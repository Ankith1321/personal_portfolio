import Image from "next/image";
import { ProjectActionLink } from "@/components/projects/project-action-link";

type ProjectHeroAction = {
  label: string;
  href?: string;
  disabledReason?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  analyticsAttrs?: Record<string, string | undefined>;
};

type ProjectHeroProps = {
  category: string;
  summary: string;
  title: string;
  actions?: readonly ProjectHeroAction[]; 
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

export function ProjectHero({
  category,
  summary,
  title,
  actions,
  imageSrc,
  imageAlt,
  imageFit = "cover",
}: ProjectHeroProps) {
  return (
    <section className="panel-surface overflow-hidden rounded-[2rem] border bg-[linear-gradient(145deg,rgba(184,110,83,0.10),rgba(255,250,242,0.96)_45%,rgba(128,147,124,0.10))] px-6 py-8 shadow-[0_20px_60px_rgba(87,62,47,0.08)] sm:px-8 sm:py-10 dark:bg-[linear-gradient(145deg,rgba(111,117,180,0.18),rgba(23,33,47,0.95)_45%,rgba(127,151,136,0.12))]">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] xl:items-center">
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-secondary-accent">
                {category}
              </p>
              <h1 className="panel-text mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="panel-text-muted mt-4 text-base leading-8 sm:text-lg">
                {summary}
              </p>
            </div>
          </div>
          {actions?.length ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {actions.map((action) => (
                <ProjectActionLink
                  key={`${action.label}-${action.href ?? action.disabledReason ?? "disabled"}`}
                  label={action.label}
                  href={action.href}
                  disabledReason={action.disabledReason}
                  external={action.external}
                  variant={action.variant}
                  analyticsAttrs={action.analyticsAttrs}
                />
              ))}
            </div>
          ) : null}
        </div>
        {imageSrc ? (
          <div className="project-showcase relative overflow-hidden rounded-[1.8rem] border border-border/75 bg-surface/70 p-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
              <Image
                src={imageSrc}
                alt={imageAlt ?? ""}
                fill
                sizes="(max-width: 1279px) 100vw, 40vw"
                className={imageFit === "contain" ? "object-contain p-2" : "object-cover"}
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
