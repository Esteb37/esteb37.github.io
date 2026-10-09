import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import Section from "./Section";
import { education } from "@/content/education";

export default function Education() {
  return (
    <Section
      id="education"
      label="// education"
      title="Education."
      description="From a robotics undergrad valedictorian in Mexico, to a year abroad in Germany, to an MSc Robotics, Systems and Control at ETH Zürich."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((e, idx) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="surface surface-hover p-5"
          >
            <div className="flex items-center gap-2 text-accent">
              <GraduationCap size={18} />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
                {e.period}
              </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-ink">{e.school}</h3>
            <p className="text-sm text-ink-muted">{e.degree}</p>
            <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-ink-subtle">
              <MapPin size={12} />
              {e.location}
            </div>
            {e.highlights ? (
              <ul className="mt-4 space-y-2 text-xs leading-relaxed text-gold/70">
                {e.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold/50" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
