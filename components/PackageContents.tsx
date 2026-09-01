import Tag from "./Tag";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import {
  IconToothbrush,
  IconTube,
  IconBrush,
  IconBottle,
  IconLipBalm,
  IconFidget,
  IconBook,
} from "./icons";
import { hygieneItems, activityItems } from "@/lib/content";

const hygieneIcons: Record<string, any> = {
  Toothbrush: IconToothbrush,
  Toothpaste: IconTube,
  Hairbrush: IconBrush,
  "Body wash": IconBottle,
  Chapstick: IconLipBalm,
};

const activityIcons: Record<string, any> = {
  Fidgets: IconFidget,
  "Activity books": IconBook,
};

export default function PackageContents() {
  return (
    <section id="contents" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mb-12 max-w-xl">
        <span className="eyebrow text-teal">What we send</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Two kinds of comfort, in every package.
        </h2>
        <p className="mt-4 font-body text-ink/70">
          Every item is brand new and factory-sealed before it ever reaches a
          hospital.
        </p>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <div className="mb-6 inline-block [perspective:600px]">
            <Parallax>
              <Tag
                bg="bg-coral-light"
                rotate={-1}
                withHole={false}
                className="px-4 py-1.5"
              >
                <span className="eyebrow text-coral-dark">
                  Hygiene &amp; personal care
                </span>
              </Tag>
            </Parallax>
          </div>
          <ul className="space-y-3">
            {hygieneItems.map((label) => {
              const Icon = hygieneIcons[label];
              return (
                <li
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-white/50 px-4 py-3 text-ink/80 transition hover:-translate-y-0.5 hover:border-coral/40 hover:bg-white hover:shadow-sm"
                >
                  <Icon className="text-coral-dark transition group-hover:scale-110" />
                  <span className="font-body text-sm font-medium">
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="mb-6 inline-block [perspective:600px]">
            <Parallax>
              <Tag
                bg="bg-mint-light"
                rotate={1}
                withHole={false}
                className="px-4 py-1.5"
              >
                <span className="eyebrow text-mint">
                  Activities &amp; sensory support
                </span>
              </Tag>
            </Parallax>
          </div>
          <ul className="space-y-3">
            {activityItems.map((label) => {
              const Icon = activityIcons[label];
              return (
                <li
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-white/50 px-4 py-3 text-ink/80 transition hover:-translate-y-0.5 hover:border-mint/40 hover:bg-white hover:shadow-sm"
                >
                  <Icon className="text-mint transition group-hover:scale-110" />
                  <span className="font-body text-sm font-medium">
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 font-body text-sm leading-relaxed text-ink/60">
            Small things to keep hands and minds occupied — a way to pass a
            long afternoon that isn&rsquo;t about being sick.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
