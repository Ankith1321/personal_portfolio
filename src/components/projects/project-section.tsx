import type { ReactNode } from "react";

type ProjectSectionProps = {
  children?: ReactNode;
  description?: string;
  eyebrow?: string;
  title: string;
};

export function ProjectSection({
  children,
  description,
  eyebrow,
  title,
}: ProjectSectionProps) {
  return (
    <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-secondary-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
