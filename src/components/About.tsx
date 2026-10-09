import { motion } from "framer-motion";
import { BrainCircuit, Compass, Hand } from "lucide-react";
import type { ReactNode } from "react";
import Section from "./Section";
import { pillars, profile } from "@/content/profile";

const pillarIcons: ReactNode[] = [
  <BrainCircuit key="brain" size={20} />,
  <Compass key="compass" size={20} />,
  <Hand key="hand" size={20} />,
];

export default function About() {
  return (
    <Section id="about" label="// about" title="What I work on.">
      <div className="relative">
        <div className="pointer-events-none absolute -top-12 right-0 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-1/3 -z-10 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="surface overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-ink sm:text-xl">
              {profile.bio[0]}
            </p>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              {profile.bio.slice(1).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid divide-y divide-border border-t border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group relative overflow-hidden p-6 transition-colors hover:bg-accent/5"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    {pillarIcons[idx]}
                  </span>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {pillar.tag}
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
