import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
} from "lucide-react";

import { certifications } from "@/data/portfolio";
import {
  Section,
  SectionHeading,
} from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Motion";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Professional Certifications"
        description="Industry certifications, workshops, and technical programs that have strengthened my software engineering and full-stack development skills."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const accent =
            cert.accent === "copper"
              ? "border-copper/30 bg-copper/10 text-copper"
              : "border-sage/30 bg-sage/10 text-sage";

          return (
            <Reveal key={cert.id} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className="surface-card group flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:border-copper/40"
              >
                {/* Top */}

                <div className="flex items-start justify-between">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl border text-lg font-bold ${accent}`}
                  >
                    {cert.orgInitial}
                  </div>

                  <Award
                    className={`h-6 w-6 ${
                      cert.accent === "copper"
                        ? "text-copper"
                        : "text-sage"
                    }`}
                  />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-lg font-semibold leading-snug text-ink">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm text-ink-muted">
                  {cert.org}
                </p>

                {/* Date */}

                <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-base-line bg-base-raised px-3 py-2 text-xs text-ink-faint">
                  <BadgeCheck className="h-4 w-4 text-sage" />
                  Issued {cert.issued}
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href={cert.url}
                    target={cert.url === "#" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-copper transition-all duration-300 hover:gap-3"
                  >
                    View Certificate

                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}