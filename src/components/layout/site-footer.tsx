import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getHomeSectionHref } from "@/lib/i18n";
import { isVerifiedLink, siteConfig } from "@/lib/site-config";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const socialLinks = [
    { label: dictionary.footer.linkedin, href: siteConfig.social.linkedin },
    { label: dictionary.footer.github, href: siteConfig.social.github },
    { label: dictionary.contact.actions.email, href: siteConfig.social.email },
  ];
  const verifiedLinks = socialLinks.filter((item) => isVerifiedLink(item.href));

  return (
    <footer className="border-t border-border bg-surface/70">
      <Container className="py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base font-semibold text-text">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-text-muted">{dictionary.footer.location}</p>
          </div>
          <nav
            aria-label={dictionary.common.footerNavigation}
            className="flex flex-wrap gap-4 text-sm"
          >
            {verifiedLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                className="text-text-muted hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <Link
              href={getHomeSectionHref(locale, "home")}
              className="text-text-muted hover:text-accent"
            >
              {dictionary.footer.backToTop}
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
