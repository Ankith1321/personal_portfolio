import { redirect } from "next/navigation";
import { getLocaleStaticParams, getLocalizedPath, resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function LegacyUvRollerBlindRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);

  redirect(getLocalizedPath(locale, "/projects/uv-monitoring-roller-blind"));
}
