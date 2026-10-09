import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  ZoomIn,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { asset } from "@/lib/asset";
import VideoEmbedView from "./VideoEmbed";

type Props = {
  projects: Project[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function ProjectModal({
  projects,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const isOpen = index !== null && index >= 0 && index < projects.length;
  const project = isOpen ? projects[index] : null;

  const [imgIndex, setImgIndex] = useState<number | null>(null);

  const images = useMemo(() => {
    if (!project) return [] as string[];
    const seen = new Set<string>();
    const list: string[] = [];
    const push = (src?: string) => {
      if (!src || seen.has(src)) return;
      seen.add(src);
      list.push(src);
    };
    push(project.cover);
    project.gallery?.forEach(push);
    return list;
  }, [project]);

  useEffect(() => {
    setImgIndex(null);
  }, [index]);

  const closeImage = useCallback(() => setImgIndex(null), []);
  const prevImage = useCallback(() => {
    setImgIndex((i) =>
      i === null ? null : (i + images.length - 1) % images.length,
    );
  }, [images.length]);
  const nextImage = useCallback(() => {
    setImgIndex((i) =>
      i === null ? null : (i + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (imgIndex !== null) closeImage();
        else onClose();
      } else if (e.key === "ArrowLeft") {
        if (imgIndex !== null) prevImage();
        else onPrev();
      } else if (e.key === "ArrowRight") {
        if (imgIndex !== null) nextImage();
        else onNext();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, imgIndex, onClose, onPrev, onNext, closeImage, prevImage, nextImage]);

  const videos = project?.videos ?? [];

  return (
    <AnimatePresence>
      {isOpen && project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur sm:items-center sm:p-6"
          onClick={onClose}
        >
          {/* Prev / Next project arrows — visible on the sides */}
          {projects.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                aria-label="Previous project"
                className="absolute left-3 top-1/2 z-[51] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/70 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink sm:inline-flex md:left-6 md:h-14 md:w-14"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                aria-label="Next project"
                className="absolute right-3 top-1/2 z-[51] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/70 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink sm:inline-flex md:right-6 md:h-14 md:w-14"
              >
                <ChevronRight size={22} />
              </button>
            </>
          ) : null}

          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-t-3xl border border-border bg-bg-elevated sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/80 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Project counter pill */}
            {projects.length > 1 ? (
              <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-border bg-bg/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-muted backdrop-blur">
                <span className="text-accent">{(index ?? 0) + 1}</span>
                <span className="text-ink-subtle">/ {projects.length}</span>
              </div>
            ) : null}

            <div className="max-h-[92vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setImgIndex(0)}
                className="group relative block aspect-[16/9] w-full overflow-hidden bg-bg-subtle"
                aria-label="Open image"
              >
                <img
                  src={asset(project.cover)}
                  alt={project.title}
                  className="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-border bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <ZoomIn size={11} /> click to zoom
                </div>
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-bg">
                    {project.category}
                  </span>
                  <span className="chip">{project.period}</span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-muted">{project.org}</p>

                {project.links && project.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links.map((link, idx) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          idx === 0
                            ? "inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg shadow-sm transition-transform hover:scale-[1.03] hover:bg-accent-soft"
                            : "inline-flex items-center gap-1.5 rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                        }
                      >
                        {link.label} <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                ) : null}

                <p className="mt-5 text-base leading-relaxed text-ink-muted">
                  {project.summary}
                </p>

                {project.highlights.length > 0 ? (
                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      // highlights
                    </div>
                    <ul className="mt-2 space-y-2 text-sm text-ink-muted">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.gallery && project.gallery.length > 0 ? (
                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      // media
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {project.gallery.map((g) => {
                        const i = images.indexOf(g);
                        return (
                          <button
                            type="button"
                            key={g}
                            onClick={() => setImgIndex(i >= 0 ? i : 0)}
                            className="group relative block overflow-hidden rounded-xl border border-border bg-bg-subtle text-left transition-colors hover:border-accent/60"
                            aria-label="Open image"
                          >
                            <img
                              src={asset(g)}
                              alt=""
                              loading="lazy"
                              className="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            />
                            <div className="pointer-events-none absolute right-2 top-2 inline-flex items-center gap-1 rounded-full border border-border bg-bg/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-muted opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                              <ZoomIn size={10} /> zoom
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {videos.length > 0 ? (
                  <div className="mt-8">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      // videos
                    </div>
                    <div
                      className={`mt-3 grid gap-4 ${
                        videos.length > 1 ? "sm:grid-cols-2" : ""
                      }`}
                    >
                      {videos.map((video) => (
                        <div key={`${video.kind}-${video.src}`}>
                          <VideoEmbedView video={video} />
                          {video.title ? (
                            <p className="mt-2 text-xs text-ink-subtle">
                              {video.title}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>

          {/* Image lightbox — overlays the modal */}
          <AnimatePresence>
            {imgIndex !== null && images[imgIndex] ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
                onClick={(e) => {
                  e.stopPropagation();
                  closeImage();
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeImage();
                  }}
                  className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/70 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink"
                  aria-label="Close image"
                >
                  <X size={18} />
                </button>
                {images.length > 1 ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/70 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/70 text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                ) : null}

                <motion.div
                  key={images[imgIndex]}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="relative max-h-[90vh] max-w-[92vw]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={asset(images[imgIndex])}
                    alt={project.title}
                    className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain"
                  />
                  <div className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-ink-muted">
                    {project.title}
                    <span className="ml-2 text-ink-subtle">
                      {imgIndex + 1} / {images.length}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
