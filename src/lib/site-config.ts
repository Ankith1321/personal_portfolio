export const siteConfig = {
  name: "Saiankith Reddy Kolli",
  headline: "Applied AI / Machine Learning Engineer",
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
    email: null,
    resumeUrl: null,
  },
} as const;

export function isVerifiedLink(value: string | null) {
  return typeof value === "string" && value.length > 0;
}
