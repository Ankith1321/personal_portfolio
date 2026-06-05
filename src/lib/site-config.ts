type ResumeLocale = "de" | "en";

export const siteConfig = {
  name: "Saiankith Reddy Kolli",
  headline: "LLM Engineer | AI / ML Engineer",
  location: "Amberg, Germany",
  navigation: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  social: {
    github: "https://github.com/Ankith1321",
    linkedin: "https://www.linkedin.com/in/saiankithreddyk",
    email: "mailto:ankithreddy580@gmail.com",
    emailAddress: "ankithreddy580@gmail.com",
    resumeUrls: {
      en: "/resume/Saiankith_Resume.pdf",
      de: "/resume/Saiankith_Lebenslauf.pdf",
    } satisfies Record<ResumeLocale, string>,
  },
} as const;

export function isVerifiedLink(value: string | null): value is string {
  return typeof value === "string" && value.length > 0;
}
