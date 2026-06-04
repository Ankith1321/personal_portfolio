import { Container } from "@/components/layout/container";
import { ProjectActionLink } from "@/components/projects/project-action-link";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectPlaceholder } from "@/components/projects/project-placeholder";
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
      <ProjectHero
        backHref={getLocalizedPath(locale, "/projects")}
        backLabel={content.backLabel}
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
          {
            label: content.actions.viewGithub,
            href: projectLinks.githubHref,
            disabledReason: projectLinks.githubTodo ?? content.actions.githubDisabled,
            external: true,
            variant: "ghost",
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

      <section className="rounded-[1.9rem] border border-border bg-[linear-gradient(145deg,rgba(111,117,180,0.14),rgba(255,250,242,0.95)_52%,rgba(127,151,136,0.14))] px-6 py-8 shadow-[0_18px_44px_rgba(18,23,34,0.10)] sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-secondary-accent">
          {content.demo.eyebrow}
        </p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
              {content.demo.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
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
          <ol className="rounded-[1.5rem] border border-border/80 bg-surface/82 p-5">
            {content.demo.steps.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 border-b border-border/70 py-3 last:border-b-0 last:pb-0 first:pt-0"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/12 text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-text-muted">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProjectSection
        eyebrow={content.screenshots.eyebrow}
        title={content.screenshots.title}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.screenshots.items.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-border bg-background p-5"
            >
              <p className="text-sm font-medium text-text">{item}</p>
              <div className="mt-4">
                <ProjectPlaceholder label={content.screenshots.placeholder} />
              </div>
            </div>
          ))}
        </div>
      </ProjectSection>

      <section className="grid gap-6 lg:grid-cols-2">
        <ProjectSection
          eyebrow={content.results.eyebrow}
          title={content.results.title}
          description={content.results.text}
        />
        <ProjectSection
          eyebrow={content.disclaimer.eyebrow}
          title={content.disclaimer.title}
          description={content.disclaimer.text}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ProjectSection
          eyebrow={content.reflection.eyebrow}
          title={content.reflection.title}
          description={content.reflection.text}
        />
        <ProjectSection
          eyebrow={content.links.eyebrow}
          title={content.links.title}
        >
          {projectLinks.githubHref ? (
            <ProjectActionLink
              label={content.actions.viewGithub}
              href={projectLinks.githubHref}
              external
              variant="secondary"
            />
          ) : (
            <ProjectPlaceholder
              label={projectLinks.githubTodo ?? content.links.githubTodo}
            />
          )}
        </ProjectSection>
      </section>
    </Container>
  );
}
