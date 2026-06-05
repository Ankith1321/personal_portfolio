import { Container } from "@/components/layout/container";
import { getLocaleStaticParams, resolveLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const isGerman = locale === "de";
  const heading = isGerman ? "Datenschutz" : "Privacy";
  const text = isGerman
    ? "Dieses Portfolio verwendet Umami Analytics, um die anonyme Nutzung der Website zu verstehen und die Benutzererfahrung zu verbessern. Die Analytics-Konfiguration erfasst anonyme Seitenaufrufe und ausgewählte Interaktionen, zum Beispiel Klicks auf Projektdetails, Lebenslauf-Downloads und Demo-Links. Es werden kein Werbe-Tracking, keine Sitzungsaufzeichnung und keine persönliche Identifikation von Besuchern verwendet."
    : "This portfolio uses Umami Analytics to understand anonymous website usage and improve the user experience. The analytics setup records anonymous page views and selected interaction events, such as project-detail clicks, resume downloads, and demo-link clicks. No advertising tracking, session recording, or personal visitor identification is used.";

  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {heading}
        </h1>
        <p className="mt-5 max-w-4xl text-sm leading-7 text-text-muted sm:text-base">
          {text}
        </p>
        <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
          {isGerman ? "Bei Fragen:" : "For questions, contact:"}{" "}
          <a
            href={`mailto:${siteConfig.social.emailAddress}`}
            className="text-text underline decoration-border underline-offset-4 hover:text-accent"
          >
            {siteConfig.social.emailAddress}
          </a>
        </p>
      </section>
    </Container>
  );
}
