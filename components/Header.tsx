import Image from "next/image";
import { site } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-linen/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="focus-ring flex items-center gap-2.5">
          <Image
            src="/logo-icon.png"
            alt={`${site.orgName} logo`}
            width={301}
            height={208}
            className="h-11 w-auto"
            priority
          />
          <span className="font-script text-2xl leading-none text-teal-dark">
            {site.orgName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Mission", "#mission"],
            ["What We Send", "#contents"],
            ["Team", "#team"],
            ["Get Involved", "#involved"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="focus-ring font-body text-sm font-medium text-ink/75 transition hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#involved"
          className="focus-ring rounded-full bg-teal px-5 py-2 font-body text-sm font-semibold text-linen transition hover:bg-teal-dark hover:shadow-md"
        >
          Get Involved
        </a>
      </div>
    </header>
  );
}
