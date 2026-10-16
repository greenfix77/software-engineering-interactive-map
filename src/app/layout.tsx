import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Software Engineering Interactive Map — Explore • Learn • Build • Better",
  description:
    "An interactive, bilingual (English/Persian) map of the complete software engineering journey: 12 stages from idea to production, with tools, topics, decisions, checklists and full-text search.",
  keywords: [
    "software engineering",
    "roadmap",
    "interactive map",
    "learning path",
    "stages",
    "tools",
    "architecture",
    "bilingual",
  ],
  authors: [{ name: "SE Map" }],
  openGraph: {
    title: "Software Engineering Interactive Map",
    description:
      "From concepts to production — 12 stages, tools, topics, decisions and checklists in one interactive, bilingual map.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1226" },
    { media: "(prefers-color-scheme: light)", color: "#f4f5fb" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
