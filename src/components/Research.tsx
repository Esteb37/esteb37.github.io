import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FlaskConical } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import DetailModal from "./DetailModal";
import { publications, thesis } from "@/content/publications";
import { asset } from "@/lib/asset";

const MEDIA_HEIGHT = "h-64 sm:h-72";

type ResearchKind = "paper" | "thesis";

export default function Research() {
  const paper = publications[0];
  const [open, setOpen] = useState<ResearchKind | null>(null);

  const cardProps = (kind: ResearchKind) => ({
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog" as const,
    onClick: () => setOpen(kind),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(kind);
      }
    },
  });

  return (
    <Section
      id="research"
      label="Research"
      title="Publications & thesis."
      description="Selected research outputs: a first-author RSS 2026 paper on zero-shot, language-conditioned navigation and a Master Thesis on camera-free multi-agent tracking of humans and robots."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="surface surface-hover flex h-full cursor-pointer flex-col overflow-hidden text-left"
          {...cardProps("paper")}
        >
          <div
            className={`grid grid-cols-1 gap-px border-b border-border bg-border ${MEDIA_HEIGHT} flex-none`}
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
            <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">
              {paper.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{paper.authors}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {paper.links.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`btn btn-sm ${idx === 0 ? "btn-primary" : "btn-tint"}`}
                >
                  {link.label} <ExternalLink size={12} />
                </a>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-accent">
              Read abstract <ArrowUpRight size={14} />
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="surface surface-hover flex h-full cursor-pointer flex-col overflow-hidden text-left"
          {...cardProps("thesis")}
        >
          {thesis.image ? (
            <div className={`${MEDIA_HEIGHT} w-full flex-none overflow-hidden border-b border-border bg-bg-subtle`}>
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
            <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">
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
                  className="btn btn-sm btn-primary"
                >
                  Read thesis <ExternalLink size={12} />
                </a>
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {thesis.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-accent">
              Read details <ArrowUpRight size={14} />
            </div>
          </div>
        </motion.article>
      </div>

      <DetailModal open={open === "paper"} onClose={() => setOpen(null)}>
        <div>
          <div className="-mx-6 -mt-6 mb-6 grid grid-cols-2 gap-px border-b border-border bg-border sm:-mx-8 sm:-mt-8">
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
          <h3 className="mt-3 text-2xl font-semibold leading-snug text-ink">
            {paper.title}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{paper.authors}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {paper.links.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`btn ${idx === 0 ? "btn-primary" : "btn-tint"}`}
              >
                {link.label} <ExternalLink size={13} />
              </a>
            ))}
          </div>

          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            {paper.abstract}
          </p>

          <h4 className="list-heading mt-6">Highlights</h4>
          <ul className="mt-2 space-y-2 text-sm text-ink-muted">
            {paper.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="bullet" />
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
            <div className="-mx-6 -mt-6 mb-6 overflow-hidden border-b border-border sm:-mx-8 sm:-mt-8">
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
          <h3 className="mt-3 text-2xl font-semibold leading-snug text-ink">
            {thesis.title}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{thesis.org}</p>

          {thesis.pdf ? (
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={asset(thesis.pdf)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Read thesis <ExternalLink size={13} />
              </a>
            </div>
          ) : null}

          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            {thesis.summary}
          </p>

          <h4 className="list-heading mt-6">Objectives</h4>
          <ul className="mt-2 space-y-2 text-sm text-ink-muted">
            {thesis.objectives.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="bullet" />
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
