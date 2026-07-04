import Reveal from "./Reveal";
import { CheckCircle2, MapPin, Star, CalendarCheck } from "lucide-react";

const points = [
  "Page publique personnalisée avec votre photo et votre présentation",
  "Localisation Google Maps et avis patients intégrés",
  "Créneaux occupés masqués automatiquement",
  "Confirmation instantanée, sans appel téléphonique",
];

export default function Booking() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-luna-300">
              Prise de rendez-vous en ligne
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-cloud sm:text-4xl">
              Vos patients réservent, vous vous concentrez sur les soins
            </h2>
            <p className="mt-4 text-cloud/65">
              Offrez à vos patients une page de réservation moderne et
              rassurante. Ils choisissent leur créneau en quelques secondes,
              vous recevez le rendez-vous directement dans votre agenda.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-luna-100" />
                  <span className="text-sm text-cloud/80">{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="#demo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-luna-100 to-luna-300 px-6 py-3 text-sm font-semibold text-luna-900 shadow-glow transition-transform hover:scale-[1.03]"
            >
              <CalendarCheck className="h-4 w-4" />
              Activer ma page de réservation
            </a>
          </Reveal>

          {/* Mock booking card */}
          <Reveal delay={120}>
            <div className="glass relative rounded-3xl p-6 shadow-soft sm:p-8">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-luna-300/15 blur-3xl" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-luna-100 to-luna-300 font-display text-2xl font-semibold text-luna-900">
                  Dr
                </div>
                <div>
                  <p className="text-lg font-semibold text-cloud">
                    Dr. Camille Laurent
                  </p>
                  <p className="text-sm text-cloud/60">
                    Ophtalmologue — Cabinet Vision+
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-luna-100">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                    <span className="ml-1 text-xs text-cloud/60">
                      4,9 · 128 avis
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-luna-500/10 px-4 py-3 text-sm text-cloud/75">
                <MapPin className="h-4 w-4 text-luna-100" />
                12 avenue de la République, Paris
              </div>

              <p className="mt-6 text-sm font-medium text-cloud/70">
                Choisissez un créneau
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2.5">
                {["09:00", "09:30", "10:00", "10:30", "11:00", "14:00"].map(
                  (t, i) => (
                    <button
                      key={t}
                      className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                        i === 3
                          ? "border-luna-100 bg-gradient-to-r from-luna-100 to-luna-300 text-luna-900"
                          : "border-luna-300/20 bg-luna-900/40 text-cloud/80 hover:border-luna-300/50"
                      }`}
                    >
                      {t}
                    </button>
                  ),
                )}
              </div>

              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-luna-100 to-luna-300 py-3 text-sm font-semibold text-luna-900">
                Confirmer le rendez-vous
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
