import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { affiliations, profile } from "@/content/profile";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section id="portfolio" className="relative pt-28 sm:pt-36">
      <div className="container-page grid items-center gap-12 pb-8 sm:pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-start gap-2 text-sm font-medium text-accent">
            <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-accent" />
            Currently at the Computer Vision and Geometry Lab, ETH Zürich
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-2xl font-normal leading-snug tracking-tight text-ink-muted sm:text-3xl">
            Building the intelligence stack for robots that{" "}
            <span className="font-medium text-accent">act</span>,{" "}
            <span className="font-medium text-accent">interact</span> and{" "}
            <span className="font-medium text-accent">explore</span>.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            <span className="font-medium text-ink">{profile.tagline}</span>
            <span className="text-ink-subtle"> — </span>
            {profile.focusAreas[0]}
            <span className="text-ink-subtle"> · </span>
            {profile.focusAreas[1]}
            <span className="text-ink-subtle"> · </span>
            {profile.focusAreas[2]}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-subtle">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {profile.locations.join(" · ")}
            </span>
            <span className="hidden text-border-strong sm:inline">|</span>
            <span>ETH Zürich · ex-Meta</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="btn btn-primary">
              See my work <ArrowDownRight size={16} />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="btn btn-secondary"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <img
            src={asset(profile.portrait)}
            alt={`${profile.name} with a robot`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card ring-1 ring-black/5"
          />
        </motion.div>
      </div>

      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-border py-8 [--logo-h:1.75rem] sm:justify-between sm:[--logo-h:2rem]">
          {affiliations.map((item) => {
            const mask = `url("${asset(item.logo)}") center / contain no-repeat`;
            return (
              // The hidden img sizes the box; the mask paints the logo in the accent color.
              <span
                key={item.name}
                role="img"
                aria-label={item.name}
                title={item.name}
                className="inline-block bg-accent opacity-80 transition-opacity hover:opacity-100"
                style={{ mask, WebkitMask: mask }}
              >
                <img
                  src={asset(item.logo)}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="w-auto opacity-0"
                  style={{ height: `calc(var(--logo-h) * ${item.scale ?? 1})` }}
                />
              </span>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-border py-6 text-sm text-ink-subtle">
          <span>Robot Learning</span>
          <span>Autonomous Navigation</span>
          <span>Manipulation</span>
          <span>Perception & State Estimation</span>
          <span>RL · VLMs · SLAM · MPC</span>
        </div>
      </div>
    </section>
  );
}
