import { Building2, Calendar, GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section, SectionHeading } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Motion";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="My Academic Journey"
        description="Building a strong foundation in software engineering while developing practical full-stack applications through hands-on projects."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Education Card */}
        <Reveal>
          <div className="surface-card relative overflow-hidden rounded-2xl p-8">

            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(184,115,51,0.35), transparent 70%)",
              }}
            />

            <div className="relative">

              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-copper/30 bg-copper/10 text-copper">
                    <GraduationCap className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-ink-faint">
                      Integrated M.Tech
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-ink">
                      {education.institution}
                    </h3>
                  </div>
                </div>

                <span className="rounded-full border border-sage/30 bg-sage/10 px-4 py-1.5 text-sm text-sage">
                  Current
                </span>
              </div>

              <h4 className="text-xl font-medium text-ink">
                {education.degree}
              </h4>

              <p className="mt-4 text-ink-muted leading-7">
                I am pursuing an Integrated M.Tech in Software Engineering at
                VIT-AP University, where I am building strong foundations in
                software engineering, full-stack development, databases,
                algorithms, and modern web technologies while applying these
                concepts through practical projects.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3 rounded-xl border border-base-line bg-base-raised/40 p-4">
                  <Calendar className="h-5 w-5 text-copper" />
                  <div>
                    <p className="text-xs text-ink-faint">
                      Duration
                    </p>
                    <p className="font-medium text-ink">
                      {education.period}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-base-line bg-base-raised/40 p-4">
                  <Building2 className="h-5 w-5 text-copper" />
                  <div>
                    <p className="text-xs text-ink-faint">
                      Status
                    </p>
                    <p className="font-medium text-ink">
                      {education.status}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Reveal>

        {/* Coursework */}
        <Reveal delay={0.1}>
          <div className="surface-card rounded-2xl p-8">

            <h3 className="text-xl font-semibold text-ink">
              Relevant Coursework
            </h3>

            <p className="mt-2 text-sm text-ink-muted">
              Key subjects that have strengthened my understanding of software
              engineering and application development.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-base-line bg-base-raised px-4 py-2 text-sm font-medium text-ink transition-all duration-300 hover:border-copper hover:text-copper"
                >
                  {course}
                </span>
              ))}
            </div>

          </div>
        </Reveal>
      </div>
    </Section>
  );
}