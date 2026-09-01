import Reveal from "./Reveal";
import { site } from "@/lib/content";

export default function GetInvolved() {
  return (
    <section id="involved" className="bg-teal">
      <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center">
        <span className="eyebrow text-peach">Get involved</span>
        <h2 className="mt-4 font-display text-3xl font-semibold text-linen sm:text-4xl">
          Help us send the next package.
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body leading-relaxed text-linen/75">
          Whether you want to donate supplies, volunteer for an assembly day,
          or bring Hands of Care to a hospital near you, we&rsquo;d love to
          hear from you.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.contactEmail}`}
            className="focus-ring rounded-full bg-linen px-6 py-3 font-body text-sm font-semibold text-teal-dark transition hover:-translate-y-0.5 hover:bg-coral-light hover:shadow-lg"
          >
            Email the team
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full border border-linen/30 px-6 py-3 font-body text-sm font-semibold text-linen transition hover:-translate-y-0.5 hover:border-linen/60"
          >
            @{site.instagramHandle} on Instagram
          </a>
        </div>

        <p className="mt-6 font-body text-xs text-linen/50">
          {site.contactEmail} &middot; @{site.instagramHandle}
        </p>
      </Reveal>
    </section>
  );
}
