import type { Metadata } from "next";
import { Outfit, Fraunces } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ophtech — Le logiciel des ophtalmologistes modernes",
  description:
    "Ophtech est la plateforme SaaS tout-en-un pensée pour les cabinets d'ophtalmologie : patients, rendez-vous, salle d'attente en direct, chirurgies, facturation, ordonnances et prise de rendez-vous en ligne.",
  keywords: [
    "ophtalmologie",
    "logiciel médical",
    "cabinet ophtalmologie",
    "rendez-vous en ligne",
    "gestion patients",
    "ordonnances",
    "Ophtech",
  ],
  authors: [{ name: "Ophtech" }],
  openGraph: {
    title: "Ophtech — Le logiciel des ophtalmologistes modernes",
    description:
      "La plateforme SaaS tout-en-un pour les cabinets d'ophtalmologie.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
