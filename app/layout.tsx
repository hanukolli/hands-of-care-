import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/yellowtail/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hands of Care Initiative — Hands That Care, Lives Repair",
  description:
    "Hands of Care Initiative is a student-led nonprofit sending non-medical comfort and sensory-support care packages to hospitalized patients across the Research Triangle, NC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-linen text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
