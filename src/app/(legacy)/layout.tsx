import { fontVariables } from "@/lib/fonts";
import "@/app/globals.css";

export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full bg-background text-text">{children}</body>
    </html>
  );
}
