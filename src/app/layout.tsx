import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satrahlabs — Personal science, built with precision",
  description:
    "Satrahlabs builds science-backed, privacy-first health technology. Our first product, BioAge, measures your biological age across 8 health pillars.",
  openGraph: {
    title: "Satrahlabs",
    description: "Science-backed health technology. Privacy-first, always.",
    url: "https://satrahlabs.github.io",
    siteName: "Satrahlabs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" style={{ background: "#080808" }}>
      <body className="min-h-full flex flex-col" style={{ background: "#080808" }}>
        {children}
      </body>
    </html>
  );
}
