import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { profile, navItems, type SectionId } from '@/data/portfolio';
import { Magnetic } from '@/components/primitives/Motion';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-base-line">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5"
              aria-label="Back to top"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-copper/40 bg-copper/10 font-mono text-copper">
                S
              </span>
              <span className="text-sm font-medium tracking-tightish text-ink">
                {profile.name}
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {profile.role}. Building full-stack software with an eye for the details
              that turn a working app into a product.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
              Navigate
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id as SectionId)}
                    className="text-sm text-ink-muted transition-colors hover:text-copper-hover"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top */}
          <div className="flex flex-col items-start gap-5 md:items-end">
            <Magnetic as="button" onClick={() => scrollToSection('home')} strength={0.3} ariaLabel="Back to top">
              <span className="inline-flex items-center gap-2 rounded-full border border-base-line px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-ink-muted hover:text-ink">
                <ArrowUp className="h-4 w-4" />
                Back to top
              </span>
            </Magnetic>
            <p className="text-sm text-ink-faint md:text-right">
              Open to internships
              <br />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-base-line pt-6 sm:flex-row">
          <p className="text-xs text-ink-faint">
            Designed &amp; Developed by {profile.name}
          </p>
          <p className="font-mono text-xs text-ink-faint">
            © {year ?? new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
