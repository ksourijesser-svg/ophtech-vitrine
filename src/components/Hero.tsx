import Image from "next/image";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-0 sm:pt-32 lg:pt-36"
    >
      {/* Background layers */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-luna-300/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-10 right-0 h-[380px] w-[380px] rounded-full bg-luna-100/25 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-[360px] w-[360px] rounded-full bg-luna-500/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        {/* Portrait — she points toward the headline on the right */}
        <div className="relative order-2 lg:order-1 lg:self-end">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Glow ring behind portrait */}
            <div className="absolute inset-x-6 bottom-4 top-10 rounded-[2.5rem] bg-gradient-to-tr from-luna-300/40 via-luna-100/25 to-transparent blur-2xl" />
            <div className="relative">
              <Image
                src="/doc.png"
                alt="Ophtalmologiste présentant Ophtech"
                width={1000}
                height={640}
                priority
                className="relative z-10 h-auto w-full select-none drop-shadow-[0_30px_60px_rgba(8,32,51,0.35)]"
              />
            </div>

            {/* Floating stat chips */}
            <div className="glass absolute left-0 top-16 z-20 hidden rounded-2xl px-4 py-3 shadow-soft sm:block">
              <p className="text-2xl font-semibold text-accent">+30%</p>
              <p className="text-xs text-foreground/70">de temps gagné</p>
            </div>
            <div className="glass absolute left-[40%] top-0 z-20 hidden rounded-2xl px-4 py-3 shadow-soft sm:block">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5">
                  <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-luna-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-luna-300" />
                </span>
                <p className="text-sm font-medium text-foreground">
                  Salle d&apos;attente en direct
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 text-center lg:order-2 lg:-mt-16 lg:self-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-luna-300/10 px-4 py-1.5 text-xs font-medium text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Conçu exclusivement pour l&apos;ophtalmologie
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Gérez votre cabinet{" "}
            <span className="text-gradient">d&apos;ophtalmologie</span> en toute
            simplicité
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/70 lg:mx-0 lg:text-lg">
            Patients, rendez-vous, salle d&apos;attente en temps réel, chirurgies,
            facturation, ordonnances et prise de rendez-vous en ligne — le tout
            réuni dans une plateforme unique, sécurisée et pensée pour vous.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#demo"
              className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Démarrer gratuitement
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#workflow"
              className="btn-outline inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
            >
              <PlayCircle className="h-4 w-4" />
              Voir la démo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
