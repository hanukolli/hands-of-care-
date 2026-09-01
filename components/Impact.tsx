import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { stats } from "@/lib/content";

const numberColor = (value: string) => {
  if (value.startsWith("60")) return "text-teal";
  if (value === "3") return "text-coral-dark";
  return "text-peach-dark";
};

export default function Impact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mb-12 max-w-xl">
        <span className="eyebrow text-teal">Our impact, so far</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Every package is one patient with something new to hold.
        </h2>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120} className="text-center">
            <p
              className={`font-mono text-5xl font-semibold ${numberColor(
                s.value
              )}`}
            >
              <CountUp value={s.value} />
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
