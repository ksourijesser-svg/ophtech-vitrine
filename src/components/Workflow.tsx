import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Le patient réserve en ligne",
    text: "Depuis votre page publique, le patient trouve votre cabinet, consulte vos avis et réserve un créneau en moins d'une minute.",
  },
  {
    n: "02",
    title: "L'accueil gère la salle d'attente",
    text: "À son arrivée, le patient est ajouté au tableau en direct. Médecin et secrétaire suivent le flux en temps réel.",
  },
  {
    n: "03",
    title: "Le médecin consulte et prescrit",
    text: "Diagnostic, traitement, ordonnances médicales ou lunettes, et planification d'une éventuelle chirurgie.",
  },
  {
    n: "04",
    title: "Facturation automatique",
    text: "La facture est générée à partir de la consultation, avec suivi des paiements et statut mis à jour automatiquement.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="section-alt relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Comment ça marche
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Un parcours fluide, de la réservation à la facture
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-luna-300/40 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 120}
                className="relative text-center lg:text-left"
              >
                <div className="glass mx-auto flex h-16 w-16 items-center justify-center rounded-2xl font-display text-xl font-semibold text-accent shadow-glow lg:mx-0">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
