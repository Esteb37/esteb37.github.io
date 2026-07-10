import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section
      id="portfolio"
      className="relative isolate overflow-hidden pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(167,139,250,0.18),transparent_60%)]" />

      <div className="container-page grid items-center gap-12 pb-20 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-pulseDot rounded-full bg-accent" />
              <span className="absolute inset-0 rounded-full bg-accent/40 blur" />
            </span>
            Currently in Tokyo · GVLab, U-Tokyo
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-2xl font-bold leading-[1.05] tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Building the intelligence stack for robots that{" "}
            <span className="bg-gradient-to-r from-accent via-accent-soft to-fuchsia-300 bg-clip-text text-transparent">
              act
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-accent-soft via-accent to-fuchsia-400 bg-clip-text text-transparent">
              interact
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-accent to-accent-soft bg-clip-text text-transparent">
              explore
            </span>
            .
          </h2>

          <p className="mt-5 text-base text-ink-muted sm:text-lg">
            {profile.tagline}
            <span className="text-ink"> — </span>
            <span className="text-ink">{profile.focusAreas[0]}</span>
            <span className="text-ink-subtle"> · </span>
            <span className="text-ink">{profile.focusAreas[1]}</span>
            <span className="text-ink-subtle"> · </span>
            <span className="text-ink">{profile.focusAreas[2]}</span>
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={12} />
              {profile.locations.join("  ·  ")}
            </span>
            <span className="hidden text-ink-subtle sm:inline">|</span>
            <span>ETH Zürich · ex-Meta</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg shadow-[0_8px_24px_-12px_rgba(167,139,250,0.7)] transition-transform hover:scale-[1.03]"
            >
              See my work <ArrowDownRight size={16} />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent/60 hover:text-ink"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent/60 hover:text-ink"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent/60 hover:text-ink"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="surface relative overflow-hidden rounded-3xl">
            <img
              src={asset(profile.portrait)}
              alt={`${profile.name} with a robot`}
              loading="eager"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">
                <span className="text-accent">// in the lab</span>
                <span>ETH Zürich</span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-accent/15 blur-3xl" />
        </motion.div>
      </div>

      <div className="container-page pb-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle">
          <span>Robot Learning</span>
          <span className="h-1 w-1 rounded-full bg-ink-subtle" />
          <span>Semantic Navigation</span>
          <span className="h-1 w-1 rounded-full bg-ink-subtle" />
          <span>Dexterous Manipulation</span>
          <span className="h-1 w-1 rounded-full bg-ink-subtle" />
          <span>Imitation & RL</span>
          <span className="h-1 w-1 rounded-full bg-ink-subtle" />
          <span>VLMs · MPC · SLAM</span>
        </div>
      </div>
    </section>
  );
}
