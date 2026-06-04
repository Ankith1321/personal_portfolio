import Link from "next/link";
import { StatusBadge } from "@/components/ui/status-badge";

type ProjectCardProps = {
  title: string;
  summary: string;
  tags: readonly string[];
  status: string;
  detailsState: string;
  href?: string;
};

export function ProjectCard({
  title,
  summary,
  tags,
  status,
  detailsState,
  href,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-border bg-surface p-6 shadow-[0_14px_36px_rgba(87,62,47,0.06)] hover:border-accent/40 hover:bg-surface-muted/35 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none">
      <div className="flex items-start justify-between gap-4">
        <h3 className="max-w-[18rem] text-xl font-semibold tracking-tight text-text">
          {title}
        </h3>
        <StatusBadge>{status}</StatusBadge>
      </div>
      <p className="mt-4 text-sm leading-7 text-text-muted">{summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-border pt-4">
        {href ? (
          <Link
            href={href}
            className="inline-flex rounded-full border border-border px-3 py-2 text-sm font-medium text-text hover:border-accent hover:text-accent"
          >
            {detailsState}
          </Link>
        ) : (
          <span className="inline-flex rounded-full border border-dashed border-border px-3 py-2 text-sm text-text-muted">
            {detailsState}
          </span>
        )}
      </div>
    </article>
  );
}
