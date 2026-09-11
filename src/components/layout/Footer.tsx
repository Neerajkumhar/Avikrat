import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-content py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo size="md" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-soft font-normal">
              {site.tagline}
            </p>
            <div className="mt-6 font-mono text-[0.7rem] uppercase tracking-widest text-faint">
              COMPUTATIONAL ARCHITECTURE · RESEARCH LAB
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow">Navigation</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs uppercase tracking-nav text-soft hover:text-charcoal transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Contact & Research</p>
            <ul className="mt-5 space-y-3 font-mono text-xs text-soft">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-charcoal transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-charcoal transition-colors">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 font-mono text-[0.75rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© MMXXVI AVIKRAT. ALL RIGHTS RESERVED.</p>
          <p className="uppercase">CONST-MEMORY INFERENCE ARCHITECTURE</p>
        </div>
      </div>
    </footer>
  );
}
