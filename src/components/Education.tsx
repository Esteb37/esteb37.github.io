import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import Section from "./Section";
import { education } from "@/content/education";

export default function Education() {
  return (
    <Section
      id="education"
      label="Education"
      title="Education."
      description="From a robotics undergrad valedictorian in Mexico, to an exchange semester in Germany, to an MSc Robotics, Systems and Control at ETH Zürich."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((e, idx) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="surface p-6"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <GraduationCap size={20} />
            </span>
            <div className="mt-5 text-sm font-medium text-ink-subtle">
              {e.period}
            </div>
            <h3 className="mt-1 text-lg font-semibold text-ink">{e.school}</h3>
            <p className="mt-0.5 text-sm text-ink-muted">{e.degree}</p>
            <div className="mt-3 flex items-center gap-1.5 text-sm text-ink-subtle">
              <MapPin size={14} />
              {e.location}
            </div>
            {e.highlights ? (
              <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm leading-relaxed text-ink-muted">
                {e.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5">
                    <span className="bullet" />
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
