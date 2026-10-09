import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FlaskConical } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import DetailModal from "./DetailModal";
import { publications, thesis } from "@/content/publications";
import { asset } from "@/lib/asset";
import { useIsMobile } from "@/lib/useIsMobile";

const MEDIA_HEIGHT = "h-64 sm:h-72";

type ResearchKind = "paper" | "thesis";

export default function Research() {
  const paper = publications[0];
  const isMobile = useIsMobile();
  const [open, setOpen] = useState<ResearchKind | null>(null);

  const openOnMobile = (kind: ResearchKind) => {
    if (isMobile) setOpen(kind);
  };

  return (
    <Section
      id="research"
      label="// research"
      title="Publications & thesis."
      description="Selected research outputs: a first-author RSS paper on zero-shot semantic navigation and a completed Master Thesis on force-plate-based multi-agent localization."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className={`surface surface-hover flex flex-col overflow-hidden text-left md:cursor-default ${
            isMobile ? "cursor-pointer active:scale-[0.99]" : ""
          }`}
          role={isMobile ? "button" : undefined}
          tabIndex={isMobile ? 0 : undefined}
          onClick={() => openOnMobile("paper")}
          onKeyDown={
            isMobile
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openOnMobile("paper");
                  }
                }
              : undefined
          }
        >
          <div
            className={`grid grid-cols-1 gap-px bg-border ${MEDIA_HEIGHT} flex-none`}
          >
            {paper.images.map((img) => (
              <div key={img} className="overflow-hidden bg-bg-elevated">
                <img
                  src={asset(img)}
                  alt="OpenFrontier figure"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip-accent">
                {paper.venue} {paper.year}
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-ink">
              {paper.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{paper.authors}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {paper.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-bg shadow-sm transition-transform hover:scale-[1.03] hover:bg-accent-soft"
                >
                  {link.label} <ExternalLink size={12} />
                </a>
              ))}
            </div>

            <div className="mt-4 hidden md:block">
              <p className="text-sm leading-relaxed text-ink-muted">
                {paper.abstract}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {paper.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-accent md:hidden">
              Tap to read abstract <ArrowUpRight size={12} />
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={`surface surface-hover flex flex-col overflow-hidden text-left md:cursor-default ${
            isMobile ? "cursor-pointer active:scale-[0.99]" : ""
          }`}
          role={isMobile ? "button" : undefined}
          tabIndex={isMobile ? 0 : undefined}
          onClick={() => openOnMobile("thesis")}
          onKeyDown={
            isMobile
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openOnMobile("thesis");
                  }
                }
              : undefined
          }
        >
          {thesis.image ? (
            <div className={`${MEDIA_HEIGHT} w-full flex-none overflow-hidden bg-bg-elevated`}>
              <img
                src={asset(thesis.image)}
                alt="Thesis context"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
          <div className="flex flex-1 flex-col p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip-accent">
                <FlaskConical size={12} /> {thesis.subtitle}
              </span>
              <span className="chip">{thesis.period}</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-ink">
              {thesis.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{thesis.org}</p>

            {thesis.pdf ? (
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={asset(thesis.pdf)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-bg shadow-sm transition-transform hover:scale-[1.03] hover:bg-accent-soft"
                >
                  Read thesis <ExternalLink size={12} />
                </a>
              </div>
            ) : null}

            <div className="mt-4 hidden md:block">
              <p className="text-sm leading-relaxed text-ink-muted">
                {thesis.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {thesis.objectives.slice(0, 5).map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent/70" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {thesis.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-accent md:hidden">
              Tap to read details <ArrowUpRight size={12} />
            </div>
          </div>
        </motion.article>
      </div>

      <DetailModal open={open === "paper"} onClose={() => setOpen(null)}>
        <div>
          <div className="-mx-6 -mt-6 mb-6 grid grid-cols-2 gap-px bg-border sm:-mx-8 sm:-mt-8">
            {paper.images.map((img) => (
              <div key={img} className="overflow-hidden bg-bg-elevated">
                <img
                  src={asset(img)}
                  alt="OpenFrontier figure"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip chip-accent">
              {paper.venue} {paper.year}
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-ink">{paper.title}</h3>
          <p className="text-sm text-ink-muted">{paper.authors}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {paper.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg shadow-sm transition-transform hover:scale-[1.03] hover:bg-accent-soft"
              >
                {link.label} <ExternalLink size={13} />
              </a>
            ))}
          </div>

          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            {paper.abstract}
          </p>

          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            // highlights
          </div>
          <ul className="mt-2 space-y-2 text-sm text-ink-muted">
            {paper.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {paper.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </DetailModal>

      <DetailModal open={open === "thesis"} onClose={() => setOpen(null)}>
        <div>
          {thesis.image ? (
            <div className="-mx-6 -mt-6 mb-6 overflow-hidden sm:-mx-8 sm:-mt-8">
              <img
                src={asset(thesis.image)}
                alt="Thesis context"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          ) : null}
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip chip-accent">
              <FlaskConical size={12} /> {thesis.subtitle}
            </span>
            <span className="chip">{thesis.period}</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-ink">
            {thesis.title}
          </h3>
          <p className="text-sm text-ink-muted">{thesis.org}</p>

          {thesis.pdf ? (
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={asset(thesis.pdf)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg shadow-sm transition-transform hover:scale-[1.03] hover:bg-accent-soft"
              >
                Read thesis <ExternalLink size={13} />
              </a>
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/15 px-3.5 py-1.5 text-xs font-semibold text-gold">
              Master Thesis — completed
            </span>
          </div>

          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            {thesis.summary}
          </p>

          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            // objectives
          </div>
          <ul className="mt-2 space-y-2 text-sm text-ink-muted">
            {thesis.objectives.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent/70" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {thesis.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </DetailModal>
    </Section>
  );
}
