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
  title: "Ana Sofia Arango — Full Stack & AI Engineer",
  description:
    "Portafolio personal de Ana Sofia Arango Yanza. Ingeniería de Sistemas. Full Stack Developer con interés en IA y agentes.",
  authors: [{ name: "Ana Sofia Arango Yanza" }],
  keywords: [
    "Ana Sofia Arango",
    "Full Stack Developer",
    "AI Engineer",
    "Portfolio",
    "Ingeniería de Sistemas",
    "Universidad del Cauca",
  ],
  openGraph: {
    title: "Ana Sofia Arango — Full Stack & AI Engineer",
    description:
      "Portafolio personal. Full Stack Developer con interés en IA y agentes.",
    type: "website",
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
