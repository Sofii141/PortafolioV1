import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const sans = Geist({
  variable: "--font-sans-custom",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ana Sofia Arango — Full Stack & AI Engineer",
    template: "%s · Ana Sofia Arango",
  },
  description:
    "Portafolio personal de Ana Sofia Arango Yanza. Ingeniería de Sistemas. Full Stack Developer con interés en IA y agentes. Issue 01 · 2026.",
  applicationName: "Ana Sofia · Portfolio",
  authors: [{ name: "Ana Sofia Arango Yanza" }],
  creator: "Ana Sofia Arango Yanza",
  keywords: [
    "Ana Sofia Arango",
    "Ana Sofia Arango Yanza",
    "Full Stack Developer",
    "AI Engineer",
    "Portfolio",
    "Portafolio",
    "Ingeniería de Sistemas",
    "Universidad del Cauca",
    "Popayán",
    "Next.js",
    "React",
    "TypeScript",
  ],
  category: "portfolio",
  openGraph: {
    title: "Ana Sofia Arango — Full Stack & AI Engineer",
    description:
      "Portafolio personal estilo editorial. Full Stack Developer & AI Engineer. Issue 01 · 2026.",
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    siteName: "Ana Sofia · Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Sofia Arango — Full Stack & AI Engineer",
    description:
      "Portafolio personal estilo editorial. Full Stack & AI Engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${sans.variable} ${mono.variable} ${display.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-portfolio">
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
