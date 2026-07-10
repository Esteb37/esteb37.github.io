import { motion } from "framer-motion";
import {
  ArrowDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile } from "@/content/profile";
import { publications } from "@/content/publications";
import { asset } from "@/lib/asset";

const openFrontier = publications[0];

const contactLinks = [
  {
    label: "LinkedIn",
    value: "/in/esteban-padilla-cerdio",
    href: profile.links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/esteb37",
    href: profile.links.github,
    icon: Github,
    external: true,
  },
];

export default function RSS2026Featured() {
  return (
    <section
      id="top"
      aria-labelledby="rss-featured-title"
      className="relative isolate overflow-hidden pt-24 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_70%_55%_at_75%_0%,rgba(251,191,36,0.12),transparent_58%),radial-gradient(ellipse_55%_45%_at_10%_20%,rgba(167,139,250,0.16),transparent_65%)]" />

      <div className="container-page pb-12 sm:pb-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
          <span className="inline-flex items-center gap-2 text-gold">
            <Sparkles size={13} /> Featured for RSS 2026
          </span>
          <span>Robotics: Science and Systems</span>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="surface relative overflow-hidden p-5 sm:p-7"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/10 blur-3xl" />
            <p className="section-label">// connect</p>
            <h1
              id="rss-featured-title"
              className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl"
            >
              {profile.name}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {profile.tagline}
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-ink-subtle">
              <MapPin size={13} className="text-accent" />
              {profile.locations.join(" · ")}
            </p>

            <div className="mt-6 space-y-2">
              {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-bg/40 px-3.5 py-3 transition-colors hover:border-accent/60 hover:bg-accent/5"
                >
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition-transform group-hover:scale-105">
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                      {label}
                    </span>
                    <span className="block truncate text-sm text-ink">{value}</span>
                  </span>
                  {external ? (
                    <ExternalLink
                      size={14}
                      className="ml-auto flex-none text-ink-subtle transition-colors group-hover:text-accent"
                    />
                  ) : null}
                </a>
              ))}
            </div>

            <a
              href="#portfolio"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent transition-colors hover:text-accent-soft"
            >
              Explore the full portfolio <ArrowDown size={14} />
            </a>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="surface relative overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 sm:px-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip border-gold/50 bg-gold/10 text-gold">
                  RSS {openFrontier.year}
                </span>
                <span className="chip">Featured paper</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                OpenFrontier
              </span>
            </div>

            <div className="bg-white p-2 sm:p-3">
              <img
                src={asset(openFrontier.images[0])}
                alt="OpenFrontier visual frontier reasoning and zero-shot navigation results"
                loading="eager"
                className="h-auto w-full rounded-lg"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h2 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                {openFrontier.title}
              </h2>
              <p className="mt-2 text-sm text-ink-muted">{openFrontier.authors}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                {openFrontier.abstract}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {openFrontier.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg shadow-[0_8px_24px_-12px_rgba(167,139,250,0.7)] transition-transform hover:scale-[1.03] hover:bg-accent-soft"
                  >
                    Project Website <ExternalLink size={15} />
                  </a>
                ))}
                <a
                  href="#research"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent/60 hover:text-ink"
                >
                  Research details <ArrowDown size={15} />
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
