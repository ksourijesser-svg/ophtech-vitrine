import Reveal from "./Reveal";
import {
  Users,
  CalendarDays,
  Stethoscope,
  Activity,
  Scissors,
  Receipt,
  FileText,
  BarChart3,
} from "lucide-react";

const modules = [
  {
    icon: Users,
    title: "Dossiers patients",
    text: "Fiches complètes, historique des consultations, documents et ordonnances centralisés.",
  },
  {
    icon: CalendarDays,
    title: "Rendez-vous & agenda",
    text: "Vues mois, semaine et jour. Gérez et confirmez vos consultations en un clin d'œil.",
  },
  {
    icon: Activity,
    title: "Salle d'attente en direct",
    text: "Tableau kanban temps réel : à venir, en attente, en consultation, terminé.",
  },
  {
    icon: Stethoscope,
    title: "Consultations",
    text: "Saisissez diagnostic et traitement, avec suivi complet du parcours de soin.",
  },
  {
    icon: Scissors,
    title: "Chirurgies",
    text: "Planifiez vos opérations : type d'intervention, œil, anesthésie, salle et statut.",
  },
  {
    icon: Receipt,
    title: "Facturation",
    text: "Factures, lignes détaillées, paiements et statut automatique. Simple et fiable.",
  },
  {
    icon: FileText,
    title: "Ordonnances & PDF",
    text: "Ordonnances médicales et lunettes, export PDF prêt à imprimer en un clic.",
  },
  {
    icon: BarChart3,
    title: "Tableaux de bord",
    text: "Statistiques, revenus et rapports analytiques pour piloter votre activité.",
  },
];

export default function Modules() {
  return (
    <section id="modules" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-luna-300/12 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Modules
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Une suite complète, prête à l&apos;emploi
          </h2>
          <p className="mt-4 text-foreground/65">
            Huit modules qui couvrent l&apos;ensemble du quotidien de votre
            cabinet, du premier rendez-vous à la facture finale.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m, i) => (
            <Reveal
              key={m.title}
              delay={(i % 4) * 80}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-luna-300/15 text-accent transition-colors group-hover:bg-gradient-to-br group-hover:from-luna-100 group-hover:to-luna-300 group-hover:text-luna-900">
                <m.icon className="h-6 w-6" strokeWidth={2.1} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {m.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
