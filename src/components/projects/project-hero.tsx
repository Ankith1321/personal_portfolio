import Link from "next/link";
import { StatusBadge } from "@/components/ui/status-badge";

type ProjectHeroProps = {
  backHref: string;
  backLabel: string;
  category: string;
  status: string;
  summary: string;
  title: string;
};

export function ProjectHero({
  backHref,
  backLabel,
  category,
  status,
  summary,
  title,
}: ProjectHeroProps) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(145deg,rgba(184,110,83,0.10),rgba(255,250,242,0.96)_45%,rgba(128,147,124,0.10))] px-6 py-8 shadow-[0_20px_60px_rgba(87,62,47,0.08)] sm:px-8 sm:py-10">
      <Link
        href={backHref}
        className="inline-flex text-sm font-medium text-text-muted hover:text-accent"
      >
        {backLabel}
      </Link>
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-secondary-accent">
            {category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-8 text-text-muted sm:text-lg">
            {summary}
          </p>
        </div>
        <StatusBadge>{status}</StatusBadge>
      </div>
    </section>
  );
}
