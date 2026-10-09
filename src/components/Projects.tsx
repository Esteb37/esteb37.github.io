import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, projectCategories } from "@/content/projects";
import type { Project, ProjectCategory } from "@/lib/types";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...projectCategories];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const matching =
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter);

    return [...matching].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  }, [filter]);

  const handleOpen = useCallback(
    (project: Project) => {
      const idx = filtered.findIndex((p) => p.id === project.id);
      setActiveIndex(idx >= 0 ? idx : null);
    },
    [filtered],
  );

  const handleClose = useCallback(() => setActiveIndex(null), []);
  const handlePrev = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : (i + filtered.length - 1) % filtered.length,
    );
  }, [filtered.length]);
  const handleNext = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : (i + 1) % filtered.length,
    );
  }, [filtered.length]);

  return (
    <Section
      id="projects"
      label="// projects"
      title="Selected work, by domain."
      description="From a 17-DoF tendon-driven hand at ETH to ADMM-distributed MPC on an articulated aerial robot, semantic SLAM at Ulm, and ML systems work at Meta — categorized below."
    >
      <div className="no-scrollbar -mx-5 flex items-center gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {filters.map((f) => {
          const isActive = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
                isActive
                  ? "border-accent/60 bg-accent/15 text-accent"
                  : "border-border text-ink-muted hover:border-border-strong hover:text-ink"
              }`}
            >
              {f}
              <span
                className={`ml-2 text-[10px] ${
                  isActive ? "text-accent/80" : "text-ink-subtle"
                }`}
              >
                {f === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === f).length}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={handleOpen} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal
        projects={filtered}
        index={activeIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </Section>
  );
}
