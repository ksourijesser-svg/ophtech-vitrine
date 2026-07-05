import { Eye } from "lucide-react";

const cols = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#fonctionnalites" },
      { label: "Modules", href: "#modules" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Comment ça marche", href: "#workflow" },
      { label: "Demander une démo", href: "#demo" },
      { label: "Support", href: "mailto:contact@ophtech.fr" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "CGU", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-luna-100 to-luna-300 text-luna-900 shadow-glow">
                <Eye className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="text-lg font-semibold text-foreground">
                Ophtech
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/55">
              La plateforme SaaS tout-en-un pensée pour les cabinets
              d&apos;ophtalmologie. Simple, sécurisée, en français.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-foreground">{c.title}</p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-foreground/55 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-foreground/45">
            © {new Date().getFullYear()} Ophtech. Tous droits réservés.
          </p>
          <p className="text-sm text-foreground/45">
            Conçu pour les ophtalmologistes modernes.
          </p>
        </div>
      </div>
    </footer>
  );
}
