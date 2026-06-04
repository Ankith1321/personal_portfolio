type ProjectMetadataProps = {
  items: readonly string[];
};

export function ProjectMetadata({ items }: ProjectMetadataProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm leading-7 text-text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
