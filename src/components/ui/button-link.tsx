import type { ReactNode } from "react";
import Link from "next/link";
import { isVerifiedLink } from "@/lib/site-config";

type ButtonLinkProps = {
  children: ReactNode;
  href: string | null;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const sharedClassName = [
    "inline-flex min-h-11 items-center rounded-full px-5 py-3 text-sm font-medium",
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-hover"
      : "border border-border bg-surface text-text hover:border-accent hover:text-accent",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!isVerifiedLink(href)) {
    return (
      <span
        aria-disabled="true"
        className={[
          sharedClassName,
          "cursor-not-allowed opacity-70 hover:border-border hover:text-text",
          variant === "primary" ? "bg-accent/80" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {children}
    </Link>
  );
}
