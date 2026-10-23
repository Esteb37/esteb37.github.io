import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import { affiliations, profile } from "@/content/profile";
import { asset } from "@/lib/asset";

const VERBS = [
  "act",
  "interact",
  "navigate",
  "explore",
  "learn",
  "perceive",
  "manipulate",
  "adapt",
];

function RotatingVerb() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % VERBS.length),
      2200,
    );
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <>
      <span className="sr-only">{VERBS.join(", ")}.</span>
      {/* Clips the slide; the period rides along so nothing jumps after the word. */}
      <span aria-hidden className="inline-block overflow-hidden align-bottom">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={VERBS[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-block"
          >
            <span className="font-medium text-accent">{VERBS[index]}</span>.
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}

// On phones the banner opens on Meta; wider screens keep the lead-in logos.
const PHONE_START = affiliations.findIndex((a) => a.name === "Meta");

function useIsPhone() {
  const query = "(max-width: 639px)";
  const [isPhone, setIsPhone] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setIsPhone(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return isPhone;
}

// "accent" paints every logo in the site purple; "original" shows the brand colors.
const LOGO_STYLE: "accent" | "original" = "original";

const originalLogo = (logo: string) =>
  logo.replace("logos/banner/", "logos/banner/color/");

export default function Hero() {
  const isPhone = useIsPhone();
  const start = isPhone && PHONE_START > 0 ? PHONE_START : 0;
  const logos = [...affiliations.slice(start), ...affiliations.slice(0, start)];
  // Each half of the track repeats the logos twice so it still fills ultra-wide screens.
  // Phones skip the repeat to keep the animated layer small for the GPU.
  const banner = isPhone ? logos : [...logos, ...logos];

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
            Building the intelligence stack for robots that <RotatingVerb />
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

      {/* Two copies of the logos scroll by half their width, so the loop is seamless. */}
      <div className="relative border-y border-border">
        <div className="overflow-hidden py-8 [--logo-h:1.75rem] sm:[--logo-h:2rem]">
          <div
            className="flex w-max animate-marquee items-center will-change-transform"
            // Half the track on phones, so half the duration keeps the same speed.
            style={isPhone ? { animationDuration: "45s" } : undefined}
          >
            {[...banner, ...banner].map((item, idx) => {
              const copy = idx >= affiliations.length;
              const height = `calc(var(--logo-h) * ${item.scale ?? 1})`;
              const label = {
                role: copy ? undefined : "img",
                "aria-label": copy ? undefined : item.name,
                "aria-hidden": copy || undefined,
                title: item.name,
              };
              if (LOGO_STYLE === "original") {
                return (
                  <span
                    key={`${item.name}-${idx}`}
                    {...label}
                    className="mx-7 inline-block flex-none sm:mx-9"
                  >
                    <img
                      src={asset(originalLogo(item.logo))}
                      alt=""
                      aria-hidden
                      className="w-auto max-w-none"
                      style={{ height }}
                    />
                  </span>
                );
              }
              const mask = `url("${asset(item.logo)}") center / contain no-repeat`;
              return (
                // The hidden img sizes the box; the mask paints the logo in the accent color.
                <span
                  key={`${item.name}-${idx}`}
                  {...label}
                  className="mx-7 inline-block flex-none bg-accent opacity-80 transition-opacity hover:opacity-100 sm:mx-9"
                  style={{ mask, WebkitMask: mask }}
                >
                  <img
                    src={asset(item.logo)}
                    alt=""
                    aria-hidden
                    className="w-auto max-w-none opacity-0"
                    style={{ height }}
                  />
                </span>
              );
            })}
          </div>
        </div>
        {/* Overlays instead of mask-image: WebKit drops masked content with animated children. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg to-transparent sm:w-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg to-transparent sm:w-24"
        />
      </div>

      <div className="container-page">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 py-6 text-sm text-ink-subtle">
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
