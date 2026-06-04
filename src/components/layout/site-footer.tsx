import Link from "next/link";
import { Container } from "@/components/layout/container";
import { isVerifiedLink, siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "GitHub", href: siteConfig.social.github },
];

export function SiteFooter() {
  const verifiedLinks = socialLinks.filter((item) => isVerifiedLink(item.href));

  return (
    <footer className="border-t border-border bg-surface/70">
      <Container className="py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base font-semibold text-text">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-text-muted">{siteConfig.location}</p>
          </div>
          <nav aria-label="Footer links" className="flex flex-wrap gap-4 text-sm">
            {verifiedLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-text-muted hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <Link href="/#home" className="text-text-muted hover:text-accent">
              Back to top
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
