import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/primitives/Section';
import { Reveal } from '@/components/primitives/Motion';

interface ContactRow {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  copyable?: boolean;
}

const rows: ContactRow[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    copyable: true,
  },

  {
    label: "GitHub",
    value: "@SriJagadeeshRajG",
    href: profile.github,
    icon: Github,
  },

  {
    label: "LinkedIn",
    value: "Sri Jagadeesh Raj G",
    href: profile.linkedin,
    icon: Linkedin,
  },

  {
    label: "Resume",
    value: "Download Resume",
    href: profile.resumeUrl,
    icon: FileText,
  },

  {
    label: "Location",
    value: profile.location,
    href: "#",
    icon: MapPin,
  },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (value: string, label: string) => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 1600);
    });
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="I'm actively looking for Software Engineering and Full Stack Development internships. If you're hiring — or just want to talk shop — the door is open."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
        {/* Contact list */}
        <Reveal>
          <div className="surface-card divide-y divide-base-line overflow-hidden">
            {rows.map((row) => {
              const Icon = row.icon;
              const isCopied = copied === row.label;
              return (
                <div
                  key={row.label}
                  className="group flex items-center gap-4 p-5 transition-colors hover:bg-base-raised/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-base-line bg-base-raised text-ink-muted transition-colors group-hover:border-copper/40 group-hover:text-copper">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
                      {row.label}
                    </div>
                    <a
                      href={row.href}
                      target={row.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="block truncate text-sm text-ink transition-colors hover:text-copper-hover"
                    >
                      {row.value}
                    </a>
                  </div>
                  {row.copyable && (
                    <button
                      onClick={() => copy(row.value, row.label)}
                      className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-base-line text-ink-faint transition-colors hover:border-ink-muted hover:text-ink"
                      aria-label={`Copy ${row.label}`}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {isCopied ? (
                          <motion.span
                            key="check"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="text-sage"
                          >
                            <Check className="h-4 w-4" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="copy"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                          >
                            <Copy className="h-4 w-4" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Social CTA */}
        <Reveal delay={0.1}>
          <div className="surface-card relative flex h-full flex-col justify-between overflow-hidden p-7">
            <div
              aria-hidden
              className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full opacity-40 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(110,143,133,0.3), transparent 70%)' }}
            />
            <div className="relative">
              <span className="eyebrow">
                <span className="h-px w-6 bg-sage/60" aria-hidden />
                Elsewhere
              </span>
              <h3 className="heading-md mt-5">Find me where I ship.</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                The best way to see how I work is to read the code and the commits. My
                GitHub is where the real portfolio lives.
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-base-raised px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-muted hover:bg-base-bg"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-base-raised px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-muted hover:bg-base-bg"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-medium text-base-bg transition-colors hover:bg-copper-hover"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
