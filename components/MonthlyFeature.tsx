import Reveal from "./Reveal";
import { monthlyFeature, site } from "@/lib/content";

const accents = ["bg-teal", "bg-coral", "bg-peach", "bg-mint"];

export default function MonthlyFeature() {
  return (
    <section
      id="awareness"
      className="border-y border-ink/10 bg-teal-light/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-12 max-w-xl">
          <span className="eyebrow text-teal">{monthlyFeature.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {monthlyFeature.title}
          </h2>
          <p className="mt-4 font-body text-ink/70">{monthlyFeature.intro}</p>
        </Reveal>

        <Reveal
          delay={80}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {monthlyFeature.months.map((m, i) => {
            const filled = Boolean(m.topic);
            const accent = accents[i % accents.length];
            return (
              <div
                key={m.month}
                className={`rounded-xl border px-4 py-4 transition hover:-translate-y-0.5 ${
                  filled
                    ? `${accent} border-transparent shadow-sm`
                    : "border-ink/10 bg-white/50"
                }`}
              >
                <p
                  className={`font-mono text-[0.65rem] uppercase tracking-wide ${
                    filled ? "text-linen/75" : "text-ink/50"
                  }`}
                >
                  {m.month}
                </p>
                <p
                  className={`mt-1.5 font-body text-sm font-semibold leading-snug ${
                    filled ? "text-linen" : "text-ink/40"
                  }`}
                >
                  {m.topic ?? "Topic TBA"}
                </p>
              </div>
            );
          })}
        </Reveal>

        <Reveal
          delay={160}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center"
        >
          <p className="font-body text-sm text-ink/70">
            {monthlyFeature.ctaText}
          </p>
          
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full bg-teal px-5 py-2 font-body text-sm font-semibold text-linen transition hover:bg-teal-dark"
          >
            @{site.instagramHandle} on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
