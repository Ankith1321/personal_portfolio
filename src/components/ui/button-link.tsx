import type { ReactNode } from "react";
import Link from "next/link";
import { isVerifiedLink } from "@/lib/site-config";

type ButtonLinkProps = {
  children: ReactNode;
  href: string | null;
  variant?: "primary" | "secondary";
  className?: string;
  download?: string;
  analyticsAttrs?: Record<string, string | undefined>;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className,
  download,
  analyticsAttrs,
}: ButtonLinkProps) {
  const sharedClassName = [
    "inline-flex min-h-11 items-center rounded-full px-5 py-3 text-sm font-medium shadow-[0_12px_24px_rgba(18,23,34,0.10)] motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-reduce:transform-none",
    variant === "primary"
      ? "border border-white/12 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_92%,white_8%),color-mix(in_srgb,var(--accent-hover)_88%,black_12%))] text-white hover:shadow-[0_18px_34px_rgba(188,115,89,0.28)]"
      : "border border-border bg-surface/82 text-text backdrop-blur-sm hover:border-accent hover:text-accent hover:bg-surface-muted/54 hover:shadow-[0_16px_30px_rgba(18,23,34,0.12)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!isVerifiedLink(href)) {
    return (
      <span
        aria-disabled="true"
        {...analyticsAttrs}
        className={[
          sharedClassName,
          "cursor-not-allowed opacity-100 hover:border-border hover:text-text",
          variant === "primary" ? "bg-accent/80" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </span>
    );
  }

  if (download) {
    return (
      <a href={href} download={download} className={sharedClassName} {...analyticsAttrs}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName} {...analyticsAttrs}>
      {children}
    </Link>
  );
}
