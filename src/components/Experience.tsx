import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import DetailModal from "./DetailModal";
import { experience } from "@/content/experience";
import { asset } from "@/lib/asset";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Experience() {
  const isMobile = useIsMobile();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? experience[openIdx] : null;

  return (
    <Section
      id="experience"
      label="// experience"
      title="Where I have built things."
      description="Research and industry roles spanning semantic SLAM and robot deployment at ETH, multi-agent localization in Tokyo, and four internships at Meta."
    >
      <ol className="relative ml-3 border-l border-border">
        {experience.map((item, idx) => (
          <motion.li
            key={`${item.org}-${item.period}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="relative ml-6 pb-10 last:pb-0"
          >
            <span
              className={`absolute -left-[34px] mt-1 inline-flex h-3 w-3 items-center justify-center rounded-full border ${
                item.current
                  ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(167,139,250,0.22)]"
                  : "border-border bg-bg-elevated"
              }`}
              aria-hidden
            />
            <div
              className={`surface surface-hover p-5 text-left md:cursor-default ${
                isMobile ? "cursor-pointer active:scale-[0.99]" : ""
              }`}
              role={isMobile ? "button" : undefined}
              tabIndex={isMobile ? 0 : undefined}
              onClick={isMobile ? () => setOpenIdx(idx) : undefined}
              onKeyDown={
                isMobile
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenIdx(idx);
                      }
                    }
                  : undefined
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-subtle">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={12} /> {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} /> {item.location}
                    </span>
                    {item.current ? (
                      <span className="rounded-full border border-accent/50 bg-accent/15 px-2 py-0.5 text-accent">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-ink">
                    {item.role}
                  </h3>
                  <p className="text-sm text-ink-muted">{item.org}</p>
                </div>
                {item.logo ? (
                  <div className="flex h-14 w-32 flex-none items-center justify-end">
                    <img
                      src={asset(item.logo)}
                      alt={`${item.org} logo`}
                      loading="lazy"
                      className="max-h-12 max-w-full object-contain opacity-90 [filter:grayscale(1)_brightness(1.6)_contrast(1)]"
                    />
                  </div>
                ) : null}
              </div>

              <ul className="mt-3 hidden space-y-1.5 text-sm text-ink-muted md:block">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-accent/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {item.links && item.links.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
                    >
                      {link.label} <ExternalLink size={11} />
                    </a>
                  ))}
                </div>
              ) : null}

              {item.tags && item.tags.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-accent md:hidden">
                Tap to open <ArrowUpRight size={12} />
              </div>
            </div>
          </motion.li>
        ))}
      </ol>

      <DetailModal open={active !== null} onClose={() => setOpenIdx(null)}>
        {active ? (
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-subtle">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase size={12} /> {active.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} /> {active.location}
                  </span>
                  {active.current ? (
                    <span className="rounded-full border border-accent/50 bg-accent/15 px-2 py-0.5 text-accent">
                      Current
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  {active.role}
                </h3>
                <p className="text-sm text-ink-muted">{active.org}</p>
              </div>
              {active.logo ? (
                <div className="flex h-14 w-28 flex-none items-center justify-end">
                  <img
                    src={asset(active.logo)}
                    alt={`${active.org} logo`}
                    className="max-h-12 max-w-full object-contain opacity-90 [filter:grayscale(1)_brightness(1.6)_contrast(1)]"
                  />
                </div>
              ) : null}
            </div>

            <ul className="mt-5 space-y-2 text-sm text-ink-muted">
              {active.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {active.links && active.links.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {active.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
                  >
                    {link.label} <ExternalLink size={11} />
                  </a>
                ))}
              </div>
            ) : null}

            {active.tags && active.tags.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </DetailModal>
    </Section>
  );
}
