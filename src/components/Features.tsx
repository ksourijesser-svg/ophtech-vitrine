import Reveal from "./Reveal";
import { ShieldCheck, Clock, Layers } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Gagnez du temps chaque jour",
    text: "Automatisez la prise de rendez-vous, la salle d'attente et la facturation. Moins d'administratif, plus de temps pour vos patients.",
  },
  {
    icon: Layers,
    title: "Tout au même endroit",
    text: "Dossiers patients, consultations, ordonnances, chirurgies et rapports : une seule plateforme au lieu de dix outils dispersés.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurisé et confidentiel",
    text: "Chaque cabinet dispose de données strictement isolées. Chiffrement, authentification forte et hébergement conforme.",
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-luna-300">
            Pourquoi Ophtech
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-cloud sm:text-4xl">
            Pensé par et pour les ophtalmologistes
          </h2>
          <p className="mt-4 text-cloud/65">
            Une plateforme moderne qui remplace vos outils éparpillés et vous
            fait gagner un temps précieux, sans compromis sur la sécurité.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 100}
              className="group glass relative overflow-hidden rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-luna-300/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-luna-100 to-luna-300 text-luna-900 shadow-glow">
                <f.icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="relative mt-6 text-xl font-semibold text-cloud">
                {f.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-cloud/65">
                {f.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
