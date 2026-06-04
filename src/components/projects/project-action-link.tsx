import Link from "next/link";

type ProjectActionLinkProps = {
  label: string;
  href?: string;
  disabledReason?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses = {
  primary:
    "border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border-border bg-surface text-text hover:border-accent hover:text-accent",
  ghost:
    "border-panel-border bg-panel-surface/88 text-panel-text-muted hover:border-accent hover:text-accent",
} as const;

export function ProjectActionLink({
  label,
  href,
  disabledReason,
  external = false,
  variant = "secondary",
  className,
}: ProjectActionLinkProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 motion-reduce:transform-none",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={disabledReason}
        className={[
          classes,
          "cursor-not-allowed border-dashed text-panel-text-muted opacity-100 hover:translate-y-0",
        ].join(" ")}
      >
        {label}
      </span>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={classes}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
