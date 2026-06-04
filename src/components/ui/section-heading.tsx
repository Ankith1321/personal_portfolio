import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
};

export function SectionHeading({
  children,
  eyebrow,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-secondary-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}
