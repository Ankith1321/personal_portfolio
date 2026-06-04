import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { opportunityFocus } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site-config";

const contactItems = [
  { label: "Email", value: siteConfig.social.email },
  { label: "LinkedIn", value: siteConfig.social.linkedin },
  { label: "GitHub", value: siteConfig.social.github },
  { label: "Resume", value: siteConfig.social.resumeUrl },
] as const;

export default function ContactPage() {
  return (
    <Container className="space-y-8 py-16 sm:py-20">
      <section className="rounded-[1.75rem] border border-border bg-surface px-6 py-8 sm:px-8">
        <SectionHeading eyebrow="Contact">
          Opportunity overview and verified contact status
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          Contact publishing is intentionally conservative until public links
          and the resume filename are verified.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">
            Location and Opportunity Focus
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
            {siteConfig.location}
          </p>
          <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
            {opportunityFocus}
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">
            Contact Links
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-text-muted sm:text-base">
            {contactItems.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-dashed border-border bg-background px-4 py-3"
              >
                <span className="font-medium text-text">{item.label}:</span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        </article>
      </section>
      <section className="rounded-[1.5rem] border border-dashed border-border bg-background px-6 py-5">
        <p className="text-sm text-text-muted">
          Verification note: professional email and resume download remain in
          <span className="font-semibold"> TODO: VERIFY</span> state until
          their public values are confirmed.
        </p>
      </section>
    </Container>
  );
}
