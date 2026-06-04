import { AboutPreview } from "@/components/sections/about-preview";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <Container className="space-y-6 py-8 sm:space-y-8 sm:py-10 lg:space-y-10 lg:py-12">
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <ExperiencePreview />
      <SkillsPreview />
      <ContactCta />
    </Container>
  );
}
