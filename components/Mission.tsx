import Reveal from "./Reveal";
import Tag from "./Tag";
import Parallax from "./Parallax";
import { hospitals } from "@/lib/content";

const hospitalStyles = [
  { bg: "bg-coral", fg: "text-linen", rotate: -3 },
  { bg: "bg-teal", fg: "text-linen", rotate: 2 },
  { bg: "bg-peach", fg: "text-ink", rotate: -2 },
];

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
          hands of patients at WakeMed, Duke, and UNC Health.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 [perspective:600px]">
          {hospitals.map((hospital, i) => {
            const s = hospitalStyles[i % hospitalStyles.length];
            return (
              <Parallax key={hospital}>
                <Tag
                  bg={s.bg}
                  rotate={s.rotate}
                  withHole={false}
                  className="px-5 py-2.5"
                >
                  <span className={`font-body text-sm font-semibold ${s.fg}`}>
                    {hospital}
                  </span>
                </Tag>
              </Parallax>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
