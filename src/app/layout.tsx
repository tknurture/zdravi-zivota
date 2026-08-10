import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import AuraField from "@/components/AuraField";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  axes: ["opsz"],
  style: ["normal", "italic"],
  weight: "variable",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zdraví života — Jana Jaroš & Přemysl Jirák",
  description:
    "Energie, zdraví a výživa. Individuální konzultace zaměřené na energetickou a mentální rovnováhu a specializované výživové poradenství.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${display.variable} ${inter.variable}`}>
      <body>
        <AuraField />
        <div className="grain" aria-hidden="true" />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
