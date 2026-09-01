import Reveal from "./Reveal";

export default function Mission() {
  return (
    <section id="mission" className="border-y border-ink/10 bg-teal-light/40">
      <Reveal className="mx-auto max-w-4xl px-6 py-20 text-center">
        <span className="eyebrow text-teal">Our mission</span>
        <p className="mt-6 font-display text-3xl italic leading-snug text-teal-dark sm:text-4xl">
          &ldquo;Bring comfort, care, and compassion to hospitalized patients
          through thoughtfully curated non-medical care packets and sensory
          support items.&rdquo;
        </p>
        <p className="mx-auto mt-8 max-w-2xl font-body leading-relaxed text-ink/70">
          Founded by two students who wanted hospital stays to feel a little
          less lonely, Hands of Care has grown into a small team focused on
          one job: getting useful, comforting, hospital-safe items into the
          hands of patients who need them.
        </p>
      </Reveal>
    </section>
  );
}
