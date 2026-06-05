import Image from "next/image";
import { ProjectActionLink } from "@/components/projects/project-action-link";
import { ProjectPlaceholder } from "@/components/projects/project-placeholder";

type ProjectCardProps = {
  title: string;
  summary: string;
  tags: readonly string[];
  caseStudyLabel: string;
  liveDemoLabel: string;
  githubLabel: string;
  disabledGithubReason?: string;
  detailsState?: string;
  href?: string;
  liveDemoHref?: string;
  githubHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePlaceholder?: string;
};

export function ProjectCard({
  title,
  summary,
  tags,
  caseStudyLabel,
  liveDemoLabel,
  githubLabel,
  disabledGithubReason,
  detailsState,
  href,
  liveDemoHref,
  githubHref,
  imageSrc,
  imageAlt,
  imagePlaceholder,
}: ProjectCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/90 bg-[linear-gradient(160deg,color-mix(in_srgb,var(--surface)_86%,transparent),color-mix(in_srgb,var(--surface-muted)_80%,transparent))] p-6 shadow-[0_16px_40px_rgba(18,23,34,0.10)] backdrop-blur-sm hover:border-accent/40 hover:shadow-[0_24px_50px_rgba(18,23,34,0.14)] motion-safe:hover:[transform:perspective(1200px)_translateY(-0.25rem)_rotateX(1deg)] motion-reduce:transform-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,117,180,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(127,151,136,0.10),transparent_28%)] opacity-90"
      />
      {imageSrc ? (
        <div className="project-showcase relative z-10 mb-5 overflow-hidden rounded-[1.35rem] border border-border/75">
          <div className="relative aspect-[16/10]">
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      ) : imagePlaceholder ? (
        <ProjectPlaceholder
          label={imagePlaceholder}
          className="project-showcase relative z-10 mb-5"
        />
      ) : null}
      <h3 className="relative z-10 mt-4 max-w-[18rem] text-xl font-semibold tracking-tight text-text">
        {title}
      </h3>
      <p className="relative z-10 mt-4 text-sm leading-7 text-text-muted">
        {summary}
      </p>
      <ul className="relative z-10 mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border/80 bg-background/72 px-3 py-1 text-xs text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:bg-surface-muted/80 dark:text-panel-text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="relative z-10 mt-6 border-t border-border/80 pt-4">
        <div className="flex flex-wrap gap-2">
          {href ? (
            <ProjectActionLink
              href={href}
              label={caseStudyLabel}
              variant="secondary"
              className="backdrop-blur-sm"
            />
          ) : detailsState ? (
            <span className="inline-flex rounded-full border border-dashed border-border px-3 py-2 text-sm text-text-muted">
              {detailsState}
            </span>
          ) : null}
          {liveDemoHref ? (
            <ProjectActionLink
              href={liveDemoHref}
              label={liveDemoLabel}
              external
              variant="primary"
            />
          ) : null}
          {githubHref ? (
            <ProjectActionLink
              href={githubHref}
              label={githubLabel}
              external
              variant="ghost"
            />
          ) : disabledGithubReason ? (
            <ProjectActionLink
              label={githubLabel}
              disabledReason={disabledGithubReason}
              variant="ghost"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}
