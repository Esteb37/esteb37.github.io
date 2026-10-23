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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 from-10% via-black/55 via-50% to-transparent to-80%" />
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
        <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-accent opacity-100 shadow-sm transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-base font-semibold leading-snug text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.6)] sm:text-lg">
            {project.title}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-white/85 [text-shadow:0_1px_2px_rgb(0_0_0/0.6)]">
            {project.period}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <span className="text-xs font-medium text-accent">{project.category}</span>
        <div className="-mt-1.5 hidden sm:block">
          <p className="line-clamp-4 text-sm leading-relaxed text-ink-muted">
            {project.subtitle}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
