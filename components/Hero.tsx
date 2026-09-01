import Image from "next/image";
import Tag from "./Tag";
import Parallax from "./Parallax";
import { hero, site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grain absolute inset-0" aria-hidden="true" />

      {/* Soft floating brand-color accents */}
      <div
        className="blob -left-16 -top-10 h-64 w-64 bg-mint"
        style={{ animationDelay: "0s" }}
        aria-hidden="true"
      />
      <div
        className="blob -right-10 top-24 h-52 w-52 bg-peach"
        style={{ animationDelay: "2.5s" }}
        aria-hidden="true"
      />
      <div
        className="blob bottom-0 left-1/3 h-40 w-40 bg-coral"
        style={{ animationDelay: "5s" }}
        aria-hidden="true"
      />

      {/* Large faded logo watermark in the background */}
      <Image
        src="/logo-icon.png"
        alt=""
        aria-hidden="true"
        width={301}
        height={208}
        className="pointer-events-none absolute -right-24 -top-10 w-[420px] opacity-[0.07] sm:w-[520px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-24">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-ink/70">
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            A little comfort travels far,{" "}
            <span className="italic text-teal">even</span> down a hospital
            hallway.
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink/75">
            {hero.subhead}
          </p>

          <p className="mt-3 font-display text-base italic text-peach-dark">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contents"
              className="focus-ring rounded-full bg-teal px-6 py-3 font-body text-sm font-semibold text-linen transition hover:bg-teal-dark hover:shadow-lg"
            >
              See what we send
            </a>
            <a
              href="#involved"
              className="focus-ring rounded-full border border-ink/20 px-6 py-3 font-body text-sm font-semibold text-ink transition hover:border-ink/40 hover:bg-ink/5"
            >
              Get involved
            </a>
          </div>

          <div className="mt-12 inline-block [perspective:600px]">
            <Parallax>
              <Tag bg="bg-teal" rotate={-2} className="px-6 py-4 pt-6 shadow-sm">
                <p className="font-mono text-3xl font-semibold text-peach sm:text-4xl">
                  60+
                </p>
                <p className="mt-1 max-w-[10rem] font-body text-xs text-linen/80">
                  care packages sent to hospitalized patients
                </p>
              </Tag>
            </Parallax>
          </div>
        </div>

        <div className="relative mx-auto h-[340px] w-[280px] [perspective:900px] sm:h-[400px] sm:w-[320px]">
          <div className="animate-sway absolute left-1/2 top-0 h-full w-full -translate-x-1/2 [transform-origin:top_center]">
            <svg
              className="absolute left-1/2 top-0 -translate-x-1/2"
              width="2"
              height="70"
              viewBox="0 0 2 70"
              aria-hidden="true"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="70"
                stroke="#26221F"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            </svg>

            <div className="absolute left-1/2 top-16 w-full -translate-x-1/2">
              <Parallax>
                <Tag
                  bg="bg-coral"
                  rotate={-4}
                  className="mx-auto flex h-[300px] w-[260px] flex-col items-center justify-center gap-4 p-8 shadow-lg sm:h-[330px] sm:w-[290px]"
                >
                  <p className="font-display text-2xl italic text-linen">
                    {hero.noteCardTitle}
                  </p>
                  <div className="h-px w-16 bg-linen/50" />
                  <p className="whitespace-pre-line text-center font-body text-sm text-linen/90">
                    {hero.noteCardBody}
                  </p>
                  <span className="eyebrow mt-2 rounded-full bg-linen/20 px-3 py-1 text-linen">
                    {site.orgName}
                  </span>
                </Tag>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
