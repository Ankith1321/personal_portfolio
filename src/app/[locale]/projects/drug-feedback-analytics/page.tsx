import { Container } from "@/components/layout/container";
import { ProjectActionLink } from "@/components/projects/project-action-link";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectSection } from "@/components/projects/project-section";
import { getDictionary } from "@/lib/dictionaries";
import {
  getLocaleStaticParams,
  getLocalizedPath,
  resolveLocale,
} from "@/lib/i18n";
import {
  getProjectAsset,
  getPublishedProjectLinks,
} from "@/lib/portfolio-data";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedDrugFeedbackProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);
  const content = dictionary.drugFeedback;
  const projectLinks = getPublishedProjectLinks("drug-feedback-analytics");
  const projectAsset = getProjectAsset("drug-feedback-analytics");

  return (
    <Container className="space-y-6 py-10 sm:space-y-8 sm:py-14">
      <ProjectActionLink
        label={content.backLabel}
        href={getLocalizedPath(locale, "/projects")}
        variant="secondary"
        className="inline-flex shadow-[0_10px_22px_rgba(18,23,34,0.08)]"
      />
      <ProjectHero
        category={content.snapshot.items[0]?.value ?? ""}
        status={content.status}
        summary={content.summary}
        title={content.title}
        imageSrc={projectAsset.imageSrc}
        imageAlt={content.heroImageAlt}
        actions={[
          {
            label: content.actions.liveDemo,
            href: projectLinks.demoHref,
            external: true,
            variant: "primary",
          },
          {
            label: content.actions.tryPredictions,
            href: projectLinks.demoHref,
            external: true,
            variant: "secondary",
          },
        ]}
      />

      <ProjectSection
        eyebrow={content.snapshot.eyebrow}
        title={content.snapshot.title}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.snapshot.items.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-border bg-background p-5"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </ProjectSection>

      <section className="grid gap-6 lg:grid-cols-2">
        <ProjectSection
          eyebrow={content.problem.eyebrow}
          title={content.problem.title}
          description={content.problem.text}
        />
        <ProjectSection
          eyebrow={content.impact.eyebrow}
          title={content.impact.title}
          description={content.impact.text}
        />
      </section>

      <ProjectSection
        eyebrow={content.contribution.eyebrow}
        title={content.contribution.title}
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {content.contribution.items.map((item) => (
            <li
              key={item}
              className="rounded-[1.5rem] border border-border bg-background px-5 py-4 text-sm leading-7 text-text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection
        eyebrow={content.workflow.eyebrow}
        title={content.workflow.title}
      >
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.workflow.steps.map((step, index) => (
            <li
              key={step}
              className="rounded-[1.5rem] border border-border bg-background p-5"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
                {content.workflow.stepLabel} {index + 1}
              </p>
              <p className="mt-3 text-base font-medium text-text">{step}</p>
            </li>
          ))}
        </ol>
      </ProjectSection>

      <section className="panel-surface rounded-[1.9rem] border bg-[linear-gradient(145deg,rgba(111,117,180,0.14),rgba(255,250,242,0.95)_52%,rgba(127,151,136,0.14))] px-6 py-8 shadow-[0_18px_44px_rgba(18,23,34,0.10)] sm:px-8 dark:bg-[linear-gradient(145deg,rgba(111,117,180,0.18),rgba(24,33,48,0.96)_52%,rgba(127,151,136,0.14))]">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-secondary-accent">
          {content.demo.eyebrow}
        </p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)] lg:items-center">
          <div>
            <h2 className="panel-text text-2xl font-semibold tracking-tight sm:text-3xl">
              {content.demo.title}
            </h2>
            <p className="panel-text-muted mt-4 max-w-2xl text-sm leading-7 sm:text-base">
              {content.demo.text}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ProjectActionLink
                label={content.demo.actions.openDemo}
                href={projectLinks.demoHref}
                external
                variant="primary"
              />
              <ProjectActionLink
                label={content.demo.actions.tryPredictions}
                href={projectLinks.demoHref}
                external
                variant="secondary"
              />
            </div>
          </div>
          <ol className="rounded-[1.5rem] border border-panel-border bg-panel-surface/90 p-5">
            {content.demo.steps.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 border-b border-border/70 py-3 last:border-b-0 last:pb-0 first:pt-0"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/12 text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                <span className="panel-text-muted text-sm leading-7">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProjectSection
        eyebrow={content.results.eyebrow}
        title={content.results.title}
      >
        <p className="max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {content.results.intro}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.results.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.5rem] border border-border bg-background p-5 shadow-[0_10px_26px_rgba(18,23,34,0.05)] dark:bg-surface/90"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-accent">
                {card.title}
              </p>
              <p className="mt-3 text-2xl font-semibold text-emerald-700 dark:text-emerald-300">
                {card.value}
              </p>
              <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {content.results.closing}
        </p>
      </ProjectSection>

      <div className="flex flex-wrap gap-3 px-2">
        <ProjectActionLink
          label={content.actions.viewGithub}
          href={projectLinks.githubHref}
          external
          variant="secondary"
        />
      </div>
    </Container>
  );
}
