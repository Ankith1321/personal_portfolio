import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, getLocalizedPath, resolveLocale } from "@/lib/i18n";

const projectImages = [
  {
    imageSrc: "/images/projects/lane-detection-visual.svg",
    imageAlt: "Abstract illustration of lane-detection perception and output flow",
  },
  {
    imageSrc: "/images/projects/uv-roller-blind-visual.svg",
    imageAlt: "Abstract illustration of UV sensing and automated blind control",
  },
  {
    imageSrc: "/images/projects/turtlebot-visual.svg",
    imageAlt: "Abstract illustration of TurtleBot line following and obstacle avoidance",
  },
] as const;

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow={dictionary.projects.heading}>
          {dictionary.projects.pageTitle}
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          {dictionary.projects.pageDescription}
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        {dictionary.projects.pageCards.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            href={
              project.slug
                ? getLocalizedPath(locale, `/projects/${project.slug}`)
                : undefined
            }
            imageSrc={projectImages[index]?.imageSrc}
            imageAlt={projectImages[index]?.imageAlt}
          />
        ))}
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">
          {dictionary.projects.verificationNote}
        </p>
      </section>
    </Container>
  );
}
