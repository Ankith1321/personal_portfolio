import { Container } from "@/components/layout/container";
import { AboutPreview } from "@/components/sections/about-preview";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleStaticParams, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <Container className="home-scroll-container space-y-6 py-8 sm:space-y-8 sm:py-10 lg:space-y-10 lg:py-12">
      <HeroSection locale={locale} dictionary={dictionary} />
      <AboutPreview dictionary={dictionary} />
      <ProjectsPreview locale={locale} dictionary={dictionary} />
      <ExperiencePreview dictionary={dictionary} />
      <SkillsPreview dictionary={dictionary} />
      <ContactCta dictionary={dictionary} locale={locale} />
    </Container>
  );
}
