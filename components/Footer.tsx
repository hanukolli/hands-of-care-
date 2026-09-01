import Image from "next/image";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-teal-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center">
        <Image
          src="/logo-icon.png"
          alt={`${site.orgName} logo`}
          width={301}
          height={208}
          className="h-12 w-auto opacity-90"
        />
        <p className="font-script text-3xl leading-none text-linen">
          {site.orgName}
        </p>
        <p className="max-w-md font-body text-sm italic text-peach/80">
          {site.tagline}
        </p>
        <p className="max-w-md font-body text-sm text-linen/60">
          Comfort, care, and compassion for hospitalized patients across the
          Research Triangle, NC.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-body text-sm text-linen/70">
          <a
            href={`mailto:${site.contactEmail}`}
            className="focus-ring transition hover:text-linen"
          >
            {site.contactEmail}
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring transition hover:text-linen"
          >
            @{site.instagramHandle}
          </a>
        </div>
        <p className="font-mono text-xs text-linen/40">
          &copy; {new Date().getFullYear()} {site.orgFullName}. Student-led
          nonprofit initiative.
        </p>
      </div>
    </footer>
  );
}
