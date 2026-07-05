import Reveal from "./Reveal";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="demo" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-luna-300/25 bg-gradient-to-br from-luna-500 via-luna-700 to-luna-900 px-6 py-16 text-center shadow-soft sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-luna-300/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-luna-100/20 blur-[110px]" />
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Prêt à moderniser votre cabinet d&apos;ophtalmologie ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Rejoignez les praticiens qui ont choisi Ophtech pour gagner du
              temps et offrir une meilleure expérience à leurs patients.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:contact@ophtech.fr"
                className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Demander une démo gratuite
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:contact@ophtech.fr"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                contact@ophtech.fr
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
