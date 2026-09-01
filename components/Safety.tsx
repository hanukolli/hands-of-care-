import { IconCheck } from "./icons";
import Reveal from "./Reveal";
import { safetyStandards } from "@/lib/content";

export default function Safety() {
  return (
    <section className="bg-teal-dark">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-12 max-w-xl">
          <span className="eyebrow text-peach">Safety, first</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-linen sm:text-4xl">
            Every package is built to belong in a hospital.
          </h2>
          <p className="mt-4 font-body text-linen/70">
            We take hospital requirements seriously, so patients — and
            hospital staff — can trust what comes through the door.
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {safetyStandards.map((item, i) => (
            <Reveal
              key={item}
              as="li"
              delay={i * 60}
              className="flex items-start gap-3 rounded-xl border border-linen/15 px-4 py-3.5 transition hover:border-peach/50 hover:bg-linen/5"
            >
              <IconCheck className="mt-0.5 text-peach" />
              <span className="font-body text-sm leading-relaxed text-linen/90">
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
