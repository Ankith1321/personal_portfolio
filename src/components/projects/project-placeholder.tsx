type ProjectPlaceholderProps = {
  label: string;
  className?: string;
};

export function ProjectPlaceholder({
  label,
  className,
}: ProjectPlaceholderProps) {
  return (
    <div
      className={[
        "rounded-[1.5rem] border border-dashed border-border bg-background px-5 py-6 text-sm leading-7 text-text-muted",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </div>
  );
}
