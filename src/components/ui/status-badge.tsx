type StatusBadgeProps = {
  children: string;
  tone?: "default" | "muted";
};

export function StatusBadge({
  children,
  tone = "default",
}: StatusBadgeProps) {
  return (
    <span
      className={[
        "inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-[0.02em]",
        tone === "default"
          ? "border-accent/25 bg-accent/10 text-accent"
          : "border-border bg-surface-muted text-text-muted",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
