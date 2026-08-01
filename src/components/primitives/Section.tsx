import type { ReactNode } from 'react';
import { Reveal } from '@/components/primitives/Motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div
      id={id}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-copper/60" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="heading-lg mt-5 text-balance">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionShellProps) {
  return (
    <section
      id={id}
      className={`section-pad relative scroll-mt-24 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
