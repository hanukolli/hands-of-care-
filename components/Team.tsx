import Tag from "./Tag";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { team } from "@/lib/content";

const styles = [
  { bg: "bg-teal", fg: "text-linen", sub: "text-linen/70", rotate: -3 },
  { bg: "bg-teal", fg: "text-linen", sub: "text-linen/70", rotate: 3 },
  { bg: "bg-coral", fg: "text-linen", sub: "text-linen/75", rotate: -2 },
  { bg: "bg-peach", fg: "text-ink", sub: "text-ink/65", rotate: 2 },
  { bg: "bg-mint", fg: "text-linen", sub: "text-linen/75", rotate: -1 },
];

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mb-14 max-w-xl">
        <span className="eyebrow text-teal">The team</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Run by students, for patients.
        </h2>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-14">
        {team.map((member, i) => {
          const s = styles[i % styles.length];
          return (
            <Reveal
              key={member.name}
              delay={i * 90}
              className="relative pt-8 [perspective:800px]"
            >
              <svg
                className="absolute left-1/2 top-0 -translate-x-1/2"
                width="2"
                height="34"
                viewBox="0 0 2 34"
                aria-hidden="true"
              >
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="34"
                  stroke="#26221F"
                  strokeOpacity="0.3"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>
              <div className="transition-transform duration-200 hover:-translate-y-1.5">
                <Parallax>
                  <Tag
                    bg={s.bg}
                    rotate={s.rotate}
                    className="flex w-44 flex-col items-center gap-1 px-4 py-5 pt-7 text-center shadow-md"
                  >
                    <p className={`font-display text-base font-semibold ${s.fg}`}>
                      {member.name}
                    </p>
                    <p
                      className={`font-mono text-[0.65rem] uppercase tracking-wide ${s.sub}`}
                    >
                      {member.role}
                    </p>
                  </Tag>
                </Parallax>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
