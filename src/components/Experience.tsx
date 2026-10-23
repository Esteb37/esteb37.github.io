import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import { experience } from "@/content/experience";
import { asset } from "@/lib/asset";
import type { Link } from "@/lib/types";

// Logos are white-on-transparent; invert them to dark gray for the light theme.
const LOGO_CLASS =
  "max-h-10 max-w-full object-contain opacity-60 [filter:grayscale(1)_invert(1)]";

export default function Experience() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (idx: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });

  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I have built things."
      description="Research and industry roles spanning language-grounded navigation at ETH, reinforcement learning and dexterous manipulation at the Soft Robotics Lab, multi-agent tracking in Tokyo, and four internships at Meta."
    >
      <ol className="border-t border-border">
        {experience.map((item, idx) => {
          const open = openSet.has(idx);
          const detailsId = `experience-details-${idx}`;
          return (
            <motion.li
              key={`${item.org}-${item.period}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="border-b border-border"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={open}
                aria-controls={detailsId}
                className="group grid w-full cursor-pointer gap-x-10 gap-y-3 py-6 text-left md:grid-cols-[11rem_minmax(0,1fr)]"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:block">
                  <div className="font-medium text-ink-muted">{item.period}</div>
                  <div className="inline-flex items-center gap-1.5 text-ink-subtle md:mt-1">
                    <MapPin size={13} className="md:hidden" />
                    {item.location}
                  </div>
                  {item.current ? (
                    <span className="chip chip-accent md:mt-3">Current</span>
                  ) : null}
                </div>

                <div className="flex min-w-0 items-start justify-between gap-6">
                  <div className="min-w-0">
                    {item.roles ? (
                      <ul className="space-y-3">
                        {item.roles.map((role) => (
                          <li key={role.period}>
                            <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                              {role.role}
                            </h3>
                            <p className="text-xs font-medium text-ink-subtle">
                              {role.period} · {role.location.split(",")[0]}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                        {item.role}
                      </h3>
                    )}
                    <p className={`text-sm text-ink-muted ${item.roles ? "mt-3" : "mt-0.5"}`}>
                      {item.org}
                    </p>
                  </div>
                  <div className="flex flex-none items-center gap-4">
                    {item.logo ? (
                      <div className="flex h-8 w-20 items-center justify-center sm:h-10 sm:w-28">
                        <img
                          src={asset(item.logo)}
                          alt={`${item.org} logo`}
                          loading="lazy"
                          className={LOGO_CLASS}
                        />
                      </div>
                    ) : null}
                    <ChevronDown
                      size={18}
                      className={`text-ink-subtle transition-transform duration-300 group-hover:text-accent ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    id={detailsId}
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-x-10 pb-8 md:grid-cols-[11rem_minmax(0,1fr)]">
                      <div className="min-w-0 md:col-start-2">
                        <Details bullets={item.bullets} links={item.links} tags={item.tags} />

                        {item.roles ? (
                          <ol className="space-y-6">
                            {item.roles.map((role) => (
                              <li
                                key={role.period}
                                className="border-l-2 border-accent-soft pl-4"
                              >
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-ink-subtle">
                                  <span>{role.period}</span>
                                  <span className="inline-flex items-center gap-1">
                                    <MapPin size={11} />
                                    {role.location}
                                  </span>
                                </div>
                                <h4 className="mt-1 text-base font-semibold text-ink">
                                  {role.role}
                                </h4>
                                <div className="mt-2">
                                  <Details
                                    bullets={role.bullets}
                                    links={role.links}
                                    tags={role.tags}
                                  />
                                </div>
                              </li>
                            ))}
                          </ol>
                        ) : null}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}

function Details({
  bullets,
  links,
  tags,
}: {
  bullets: string[];
  links?: Link[];
  tags?: string[];
}) {
  return (
    <>
      {bullets.length > 0 ? (
        <ul className="space-y-2 text-sm leading-relaxed text-ink-muted">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5">
              <span className="bullet" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {links && links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-tint"
            >
              {link.label} <ExternalLink size={11} />
            </a>
          ))}
        </div>
      ) : null}

      {tags && tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}
