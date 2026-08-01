import {
  Database,
  GitBranch,
  Layout,
  Code2,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { skillCategories } from "@/data/portfolio";
import { Section, SectionHeading } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Motion";

const ICONS: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  code: Code2,
  wrench: Wrench,
  git: GitBranch,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I Work With"
        description="A collection of the technologies, programming languages, and tools I use while building modern full-stack web applications."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = ICONS[category.icon];

          return (
            <Reveal key={category.title} delay={index * 0.06}>
              <div className="surface-card group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40">

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-ink">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-base-line bg-base-raised px-4 py-2 text-sm font-medium text-ink transition-all duration-300 hover:border-copper hover:text-copper"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}