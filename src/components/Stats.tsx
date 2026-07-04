import Reveal from "./Reveal";

const stats = [
  { value: "8", label: "modules intégrés" },
  { value: "100%", label: "en ligne, sans installation" },
  { value: "30 s", label: "pour prendre un rendez-vous" },
  { value: "24/7", label: "accessible partout" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-luna-300/10 bg-luna-700/20">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="text-center sm:text-left"
            >
              <p className="font-display text-3xl font-semibold text-luna-100 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-cloud/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
