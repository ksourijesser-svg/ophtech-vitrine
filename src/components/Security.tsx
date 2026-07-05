import Reveal from "./Reveal";
import { Lock, Server, UserCheck, Building2 } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Isolation multi-cabinet",
    text: "Les données de chaque praticien sont strictement cloisonnées. Aucun croisement possible entre cabinets.",
  },
  {
    icon: Lock,
    title: "Authentification sécurisée",
    text: "Connexion par JWT, mots de passe chiffrés et vérification par code à usage unique.",
  },
  {
    icon: UserCheck,
    title: "Rôles dédiés",
    text: "Médecin, secrétaire et patient : chacun accède uniquement à ce qui le concerne.",
  },
  {
    icon: Server,
    title: "Hébergement fiable",
    text: "Infrastructure cloud performante, sauvegardes régulières et disponibilité continue.",
  },
];

export default function Security() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass overflow-hidden rounded-[2.5rem] p-8 sm:p-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Sécurité &amp; confidentialité
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Vos données médicales méritent le meilleur niveau de protection
              </h2>
              <p className="mt-4 text-foreground/65">
                La confidentialité des données de santé est notre priorité
                absolue. Ophtech est conçu dès le départ autour de la sécurité
                et de l&apos;isolation des données.
              </p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {items.map((it, i) => (
                <Reveal
                  key={it.title}
                  delay={i * 90}
                  className="panel rounded-2xl p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-luna-300/15 text-accent">
                    <it.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {it.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
