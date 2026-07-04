import Reveal from "./Reveal";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "29",
    tagline: "Pour démarrer sereinement",
    features: [
      "Dossiers patients illimités",
      "Rendez-vous & agenda",
      "Salle d'attente en direct",
      "Ordonnances & export PDF",
      "Support par e-mail",
    ],
    highlighted: false,
  },
  {
    name: "Cabinet",
    price: "59",
    tagline: "Le plus populaire",
    features: [
      "Tout l'Essentiel, plus :",
      "Prise de rendez-vous en ligne",
      "Facturation & paiements",
      "Chirurgies & planification",
      "Tableaux de bord & rapports",
      "Support prioritaire",
    ],
    highlighted: true,
  },
  {
    name: "Clinique",
    price: "Sur devis",
    tagline: "Pour les structures multi-praticiens",
    features: [
      "Tout le plan Cabinet, plus :",
      "Praticiens multiples",
      "Accès secrétaires dédiés",
      "Intégrations personnalisées",
      "Accompagnement dédié",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-luna-500/12 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-luna-300">
            Tarifs
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-cloud sm:text-4xl">
            Des offres simples et transparentes
          </h2>
          <p className="mt-4 text-cloud/65">
            Sans engagement. Changez ou annulez à tout moment.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className={`relative flex flex-col rounded-3xl p-8 ${
                p.highlighted
                  ? "border-2 border-luna-100/60 bg-gradient-to-b from-luna-500/25 to-luna-700/25 shadow-glow"
                  : "glass"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-luna-100 to-luna-300 px-4 py-1 text-xs font-semibold text-luna-900">
                  Recommandé
                </span>
              )}
              <p className="text-sm font-semibold text-luna-100">{p.name}</p>
              <p className="mt-1 text-sm text-cloud/55">{p.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1">
                {p.price === "Sur devis" ? (
                  <span className="font-display text-3xl font-semibold text-cloud">
                    Sur devis
                  </span>
                ) : (
                  <>
                    <span className="font-display text-4xl font-semibold text-cloud">
                      {p.price}€
                    </span>
                    <span className="text-sm text-cloud/55">/ mois</span>
                  </>
                )}
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-luna-100" />
                    <span className="text-cloud/75">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-8 rounded-full py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.highlighted
                    ? "bg-gradient-to-r from-luna-100 to-luna-300 text-luna-900 shadow-glow"
                    : "border border-luna-300/30 bg-luna-500/5 text-cloud hover:border-luna-300/60"
                }`}
              >
                {p.price === "Sur devis" ? "Nous contacter" : "Choisir ce plan"}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
