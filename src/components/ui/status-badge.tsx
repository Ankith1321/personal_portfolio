type StatusBadgeProps = {
  children: string;
  tone?: "default" | "muted" | "success";
};

function resolveTone(children: string, tone?: StatusBadgeProps["tone"]) {
  if (tone) {
    return tone;
  }

  const normalized = children.toLowerCase();

  if (normalized.includes("completed") || normalized.includes("abgeschlossen")) {
    return "success";
  }

  if (normalized.includes("progress") || normalized.includes("arbeit")) {
    return "muted";
  }

  return "default";
}

export function StatusBadge({
  children,
  tone,
}: StatusBadgeProps) {
  const resolvedTone = resolveTone(children, tone);

  return (
    <span
      className={[
        "inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-[0.02em]",
        resolvedTone === "default"
          ? "border-accent/25 bg-accent/10 text-accent"
          : resolvedTone === "success"
            ? "border-emerald-700/18 bg-emerald-600/14 text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/12 dark:text-emerald-200"
            : "border-border bg-surface-muted text-text-muted",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
