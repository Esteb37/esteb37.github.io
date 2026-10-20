import { motion } from "framer-motion";
import Section from "./Section";
import { languages, skillGroups } from "@/content/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Skills & languages."
      description="A working toolbox for embodied AI: policy learning, navigation and perception, simulation and hardware, control, and the systems plumbing that ties them together."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="surface p-6"
          >
            <h3 className="list-heading">{group.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-bg-subtle px-2.5 py-1 text-sm text-ink-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="surface mt-4 p-6">
        <h3 className="list-heading">Languages</h3>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {languages.map((l) => (
            <div key={l.language} className="flex items-baseline gap-2">
              <span className="font-medium text-ink">{l.language}</span>
              <span className="text-ink-subtle">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
