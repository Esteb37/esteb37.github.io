import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  // Jump back to the start whenever the filter changes the slide set.
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    updateScrollState();
  }, [filtered, updateScrollState]);

  useEffect(() => {
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  // Arrows advance two cards at a time.
  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const [first, second] = Array.from(el.children as HTMLCollectionOf<HTMLElement>);
    const step = first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  // Scrolls a partially hidden slide fully into view. Returns whether it moved.
  const revealSlide = (slide: HTMLElement) => {
    const el = trackRef.current;
    if (!el) return false;
    const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
    const visLeft = el.scrollLeft + pad;
    const visRight = el.scrollLeft + el.clientWidth - pad;
    const start = slide.offsetLeft;
    const end = start + slide.offsetWidth;
    if (start >= visLeft - 1 && end <= visRight + 1) return false;

    // Pick the first snap point that shows the whole slide.
    let target = start - pad;
    if (start >= visLeft) {
      const snap = Array.from(el.children as HTMLCollectionOf<HTMLElement>)
        .map((s) => s.offsetLeft - pad)
        .find((t) => t + el.clientWidth - pad >= end - 1);
      if (snap !== undefined) target = snap;
    }
    el.scrollTo({
      left: Math.min(target, el.scrollWidth - el.clientWidth),
      behavior: "smooth",
    });
    return true;
  };

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
      label="Projects"
      title="Selected work, by domain."
      description="From imitation learning on a 17-DoF tendon-driven hand and a 48-hour VLA build, to language-grounded navigation on Spot, semantic SLAM, distributed MPC for aerial robots, and on-device ML at Meta."
    >
      <div className="no-scrollbar -mx-5 flex items-center gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {filters.map((f) => {
          const isActive = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-bg-elevated text-ink-muted hover:border-border-strong hover:text-ink"
              }`}
            >
              {f}
              <span
                className={`ml-2 text-xs ${
                  isActive ? "text-white/70" : "text-ink-subtle"
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

      <div className="relative mt-8">
        <div
          ref={trackRef}
          onScroll={updateScrollState}
          className="no-scrollbar relative -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:scroll-px-0 sm:px-0"
        >
          {filtered.map((p) => (
            <div
              key={p.id}
              className="flex w-[75%] flex-none snap-start sm:w-[40%] lg:w-[27%]"
              onClickCapture={(e) => {
                if (revealSlide(e.currentTarget)) {
                  e.stopPropagation();
                  window.setTimeout(() => handleOpen(p), 450);
                }
              }}
            >
              <ProjectCard project={p} onOpen={handleOpen} />
            </div>
          ))}
        </div>

        {/* Edge fades hint that more cards sit off-screen in that direction. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 -left-5 w-12 bg-gradient-to-r from-bg to-transparent transition-opacity duration-300 sm:left-0 sm:w-24 ${
            canPrev ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 -right-5 w-12 bg-gradient-to-l from-bg to-transparent transition-opacity duration-300 sm:right-0 sm:w-24 ${
            canNext ? "opacity-100" : "opacity-0"
          }`}
        />

        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Previous projects"
          className="absolute left-0 top-1/2 z-10 h-11 w-11 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-border bg-bg-elevated text-ink shadow-md transition-all duration-200 hover:border-border-strong hover:text-accent disabled:cursor-default disabled:opacity-40 disabled:hover:border-border disabled:hover:text-ink"
          disabled={!canPrev}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Next projects"
          className="absolute right-0 top-1/2 z-10 h-11 w-11 -translate-y-1/2 translate-x-1/2 inline-flex items-center justify-center rounded-full border border-border bg-bg-elevated text-ink shadow-md transition-all duration-200 hover:border-border-strong hover:text-accent disabled:cursor-default disabled:opacity-40 disabled:hover:border-border disabled:hover:text-ink"
          disabled={!canNext}
        >
          <ChevronRight size={20} />
        </button>
      </div>

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
