import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/primitives/Section';
import { Reveal, TiltCard } from '@/components/primitives/Motion';

import expenseTracker from '@/assets/projects/expense-tracker.png';
import weatherDashboard from '@/assets/projects/weather-dashboard.png';

const PREVIEW: Record<string, string> = {
  'expense-tracker': expenseTracker,
  'weather-dashboard': weatherDashboard,
};

const STATUS_STYLE: Record<Project['status'], string> = {
  Shipped: 'bg-sage/15 text-sage',
  'In Progress': 'bg-copper/15 text-copper',
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accentText = project.accent === 'copper' ? 'text-copper' : 'text-sage';
  const accentBorder = project.accent === 'copper' ? 'hover:border-copper/40' : 'hover:border-sage/40';
  const isPlaceholder = project.id === 'future-project';
  const preview = PREVIEW[project.id];

  return (
    <Reveal delay={(index % 2) * 0.08}>
      <TiltCard max={6} className="h-full">
        <article
          className={`surface-card group h-full overflow-hidden transition-colors ${accentBorder}`}
        >
          {/* Preview */}
          <div className="relative aspect-[16/9] overflow-hidden border-b border-base-line">
            {preview ? (
              <motion.img
                src={preview}
                alt={`${project.name} preview`}
                loading="lazy"
                className="h-full w-full object-cover opacity-95 transition-all duration-700 group-hover:scale-110"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-base-raised to-base-bg">
                <div className="text-center">
                  <Sparkles className={`mx-auto h-8 w-8 ${accentText}`} />
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest2 text-ink-faint">
                    in the editor
                  </p>
                </div>
              </div>
            )}
            {/* overlay tint */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-base-surface/35 via-transparent to-transparent"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 ${STATUS_STYLE[project.status]}`}>
                {project.status}
              </span>
            </div>
            <div className="absolute right-4 top-4 flex items-center gap-2">
              {project.metrics.map((m) => (
                <span
                  key={m.label}
                  className="rounded-full border border-base-line bg-base-bg/60 px-2.5 py-1 font-mono text-[10px] text-ink-muted backdrop-blur-sm"
                >
                  {m.value}
                </span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-ink">{project.name}</h3>
                <p className={`mt-1 text-sm ${accentText}`}>{project.tagline}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-base-line bg-base-raised px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-base-line pt-5">
              <a
                href={project.github}
                target={project.github === '#' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg border border-base-line px-3.5 py-2 text-sm font-medium transition-colors ${
                  isPlaceholder
                    ? 'cursor-not-allowed text-ink-faint'
                    : 'text-ink-muted hover:border-copper hover:text-copper'
                }`}
                aria-disabled={isPlaceholder}
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={project.demo}
                target={project.demo === '#' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg border border-copper px-3.5 py-2 text-sm font-medium transition-colors ${
                  isPlaceholder
                    ? 'cursor-not-allowed text-ink-faint'
                    : accentText + ' hover:opacity-80'
                }`}
                aria-disabled={isPlaceholder}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </TiltCard>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"

description="A collection of full-stack and frontend applications I've built to strengthen my software engineering skills. Each project focuses on solving real-world problems while improving my understanding of modern web technologies."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
