import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, Star } from "lucide-react";
import type { Project } from "@/lib/types";
import { asset } from "@/lib/asset";

type Props = {
  project: Project;
  onOpen: (p: Project) => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  const hasVideo = (project.videos?.length ?? 0) > 0;

  return (
    <motion.button
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.35 }}
      className="surface surface-hover group relative flex w-full flex-col overflow-hidden text-left"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-bg-subtle">
        <img
          src={asset(project.cover)}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {project.featured || hasVideo ? (
          <div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5">
            {project.featured ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-ink shadow-sm">
                <Star size={12} className="fill-accent text-accent" /> Featured
              </span>
            ) : null}
            {hasVideo ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-ink shadow-sm">
                <PlayCircle size={12} /> Video
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs font-medium">
            <span className="text-accent">{project.category}</span>
            <span className="text-ink-subtle">{project.period}</span>
          </div>
          <h3 className="mt-1.5 text-base font-semibold leading-snug text-ink sm:text-lg">
            {project.title}
          </h3>
          <p className="mt-1.5 hidden text-sm leading-relaxed text-ink-muted sm:block">
            {project.subtitle}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5">
          <span className="chip sm:hidden">
            {project.tags[0]}
          </span>
          {project.tags.length > 1 ? (
            <span className="chip sm:hidden">+{project.tags.length - 1}</span>
          ) : null}
          <span className="hidden sm:contents">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
            {project.tags.length > 4 ? (
              <span className="chip">+{project.tags.length - 4}</span>
            ) : null}
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-border pt-3 text-xs sm:text-sm">
          <span className="truncate text-ink-subtle">{project.org}</span>
          <span className="inline-flex flex-none items-center gap-1 font-medium text-accent opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
            Open <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
