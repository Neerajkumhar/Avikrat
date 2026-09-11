import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-content py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-soft">
              {site.tagline}
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-soft">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-ink">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-[0.75rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© MMXXVI AVIKRAT.</p>
          <p>Statistical claims are targets, not measured production benchmarks.</p>
        </div>
      </div>
    </footer>
  );
}
