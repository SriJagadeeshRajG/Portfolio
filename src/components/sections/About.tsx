import { Code2, BookOpen, Lightbulb } from 'lucide-react';
import { about } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/primitives/Section';
import { Reveal } from '@/components/primitives/Motion';

const ICONS = [Code2, BookOpen, Lightbulb];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Passionate About Building Modern Web Applications"
        description={about.lead}
      />

      {/* Highlights */}
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {about.pillars.map((pillar, index) => {
          const Icon = ICONS[index];

          return (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <div className="surface-card h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-copper/10 text-copper">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold text-ink">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-ink-muted">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="mt-24">
        <Reveal>
          <h3 className="text-3xl font-bold text-ink">
            My Journey
          </h3>

          <p className="mt-3 max-w-2xl text-ink-muted leading-7">
            Every project has helped me improve my technical skills and
            understand how software is designed, built, and deployed. Here's a
            quick overview of my learning journey.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {about.timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.08}>
              <div className="surface-card relative overflow-hidden rounded-2xl border border-base-line p-7">

                <div className="absolute left-0 top-0 h-full w-1 bg-copper" />

                <span className="inline-block rounded-full bg-copper/10 px-4 py-1 text-sm font-semibold text-copper">
                  {item.year}
                </span>

                <h4 className="mt-5 text-xl font-semibold text-ink">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-ink-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}