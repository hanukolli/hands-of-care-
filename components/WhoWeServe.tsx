import Reveal from "./Reveal";
import { patientBenefits } from "@/lib/content";

export default function WhoWeServe() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <span className="eyebrow text-teal">Who we serve</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Not medical treatment. Just a little more comfortable.
          </h2>
          <p className="mt-4 font-body leading-relaxed text-ink/70">
            Our packages are for hospitalized patients — not to treat, but to
            help a hospital stay feel more bearable, one small comfort at a
            time.
          </p>
        </Reveal>

        <ul className="space-y-3">
          {patientBenefits.map((b, i) => (
            <Reveal
              key={b}
              as="li"
              delay={i * 80}
              className="flex items-center gap-3 border-b border-ink/10 py-3 font-body text-ink/80 transition hover:pl-1 hover:text-ink"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
              {b}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
