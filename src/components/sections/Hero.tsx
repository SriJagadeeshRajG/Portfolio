import { motion, useReducedMotion as fmReduced } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  FolderGit2,
  Mail,
  Download,
} from "lucide-react";

import { profile } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks";
import { Magnetic } from "@/components/primitives/Motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = fmReduced();
  const localReduced = useReducedMotion();

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden pt-28 sm:pt-32 lg:pt-40"
    >
      {/* Top Line */}
      <div className="container-page">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-base-line-strong to-transparent" />
      </div>

      <div className="container-page pt-16 sm:pt-20 lg:pt-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-base-line bg-base-surface/60 px-4 py-2 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
            </span>

            <span className="text-xs font-medium text-ink-muted">
              Open to Internship Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="mt-8 text-balance text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            className="mt-5 text-xl font-medium text-copper sm:text-2xl"
          >
            {profile.role}
          </motion.h2>

          {/* Intro */}
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            className="mt-8 max-w-3xl text-lg leading-8 text-ink-muted sm:text-xl"
          >
            {profile.intro}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Magnetic
              as="button"
              onClick={scrollToProjects}
              strength={0.25}
            >
              <span className="group inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-medium text-base-bg shadow-glow transition hover:bg-copper-hover">
                <FolderGit2 className="h-4 w-4" />
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Magnetic>

            <Magnetic
              as="a"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              strength={0.25}
              ariaLabel="GitHub"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-base-line-strong bg-base-surface/60 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur-md transition hover:border-ink-muted hover:bg-base-raised">
                <ArrowUpRight className="h-4 w-4" />
                GitHub
              </span>
            </Magnetic>
            <Magnetic
  as="a"
  href={profile.resumeUrl}
  target="_blank"
  rel="noopener noreferrer"
  strength={0.25}
>
  <span className="inline-flex items-center gap-2 rounded-full border border-base-line-strong bg-base-surface/60 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur-md transition-colors hover:border-copper hover:bg-base-raised">
    <Download className="h-4 w-4" />
    Download Resume
  </span>
</Magnetic>

            <Magnetic
              as="a"
              href="#contact"
              strength={0.25}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-base-line-strong bg-base-surface/60 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur-md transition hover:border-copper hover:bg-base-raised">
                <Mail className="h-4 w-4" />
                Contact
              </span>
            </Magnetic>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-base-line-strong bg-base-surface/60 px-4 py-2 text-sm text-ink-muted backdrop-blur-md transition hover:border-copper hover:text-ink"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
  {[
    { value: "2+", label: "Projects" },
    { value: "5+", label: "Certificates" },
    { value: "2028", label: "Graduation" },
    { value: "Open", label: "Internships" },
  ].map((item) => (
    <div
      key={item.label}
      className="rounded-xl border border-base-line bg-base-raised/40 px-5 py-4 text-center transition-all duration-300 hover:border-copper/40 hover:-translate-y-1"
    >
      <h3 className="text-2xl font-bold text-copper">
        {item.value}
      </h3>

      <p className="mt-1 text-xs uppercase tracking-widest text-ink-faint">
        {item.label}
      </p>
    </div>
  ))}
</div>

        {/* Scroll */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 flex justify-center"
        >
          <button
            onClick={scrollToProjects}
            className="group flex flex-col items-center gap-2 text-ink-faint hover:text-ink"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Scroll
            </span>

            <motion.span
              animate={
                localReduced
                  ? undefined
                  : { y: [0, 6, 0] }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}