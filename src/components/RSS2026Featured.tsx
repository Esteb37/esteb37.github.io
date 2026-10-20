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
      className="relative pt-24 sm:pt-28"
    >
      <div className="container-page pb-12 sm:pb-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 text-sm text-ink-subtle">
          <span className="inline-flex items-center gap-2 font-medium text-accent">
            <Sparkles size={14} /> Featured for RSS 2026
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
            <p className="section-label">Connect</p>
            <h1
              id="rss-featured-title"
              className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl"
            >
              {profile.name}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {profile.tagline}
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-subtle">
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
                  className="group flex items-center gap-3 rounded-lg border border-border bg-bg-elevated px-3.5 py-3 transition-colors hover:border-border-strong hover:bg-bg-subtle"
                >
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-ink-subtle">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-ink">{value}</span>
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
              className="link-accent mt-6 inline-flex items-center gap-2 text-sm font-medium"
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
                <span className="chip chip-accent">
                  RSS {openFrontier.year}
                </span>
                <span className="chip">Featured paper</span>
              </div>
              <span className="text-xs font-medium text-ink-subtle">
                OpenFrontier
              </span>
            </div>

            <div className="border-b border-border bg-white p-2 sm:p-3">
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
                    className="btn btn-primary"
                  >
                    Project Website <ExternalLink size={15} />
                  </a>
                ))}
                <a
                  href="#research"
                  className="btn btn-secondary"
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
