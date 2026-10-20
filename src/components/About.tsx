import { motion } from "framer-motion";
import { BrainCircuit, Compass, ScanEye } from "lucide-react";
import type { ReactNode } from "react";
import Section from "./Section";
import { pillars, profile } from "@/content/profile";
import { asset } from "@/lib/asset";

const pillarIcons: ReactNode[] = [
  <BrainCircuit key="brain" size={20} />,
  <Compass key="compass" size={20} />,
  <ScanEye key="scan" size={20} />,
];

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      title="What I work on."
      intro={
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-xl leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">
            {profile.bio[0]}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
            {profile.bio.slice(1).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      }
      aside={
        profile.aboutImage ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface overflow-hidden"
          >
            <img
              src={asset(profile.aboutImage)}
              alt="Esteban working with Franka robot arms in the lab"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        ) : null
      }
    >
      <div className="grid gap-10 border-t border-border pt-10 sm:grid-cols-3 sm:gap-8">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              {pillarIcons[idx]}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
