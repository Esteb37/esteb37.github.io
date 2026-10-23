import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Rocket, X } from "lucide-react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature, mesh } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import { useEffect, useMemo, useState } from "react";
import Section from "./Section";
import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { places } from "@/content/places";
import { projects } from "@/content/projects";
import { asset } from "@/lib/asset";
import type { Place } from "@/lib/types";

const WIDTH = 960;
const HEIGHT = 440;
const ANTARCTICA = "010";

// Same treatment as the experience list: logos are white-on-transparent.
const LOGO_CLASS =
  "max-h-6 max-w-full object-contain opacity-60 [filter:grayscale(1)_invert(1)]";

type Stop = {
  kind: "work" | "study" | "project";
  title: string;
  org: string;
  period: string;
  summary?: string;
  logo?: string;
};

type WorldTopology = Topology<{ countries: GeometryCollection }>;

type MapShapes = {
  countries: { id: string; d: string }[];
  borders: string;
  coastline: string;
  pins: { place: Place; x: number; y: number }[];
};

const stopsByLocation = new Map<string, Stop[]>();
for (const item of experience) {
  // Multi-role entries span several cities; pin each role on its own.
  if (item.roles) {
    for (const role of item.roles) {
      const stops = stopsByLocation.get(role.location) ?? [];
      stops.push({
        kind: "work",
        title: role.role,
        org: item.org,
        period: role.period,
        summary: role.bullets[0],
        logo: item.logo,
      });
      stopsByLocation.set(role.location, stops);
    }
    continue;
  }
  const stops = stopsByLocation.get(item.location) ?? [];
  stops.push({
    kind: "work",
    title: item.role,
    org: item.org,
    period: item.period,
    summary: item.bullets[0],
    logo: item.logo,
  });
  stopsByLocation.set(item.location, stops);
}
for (const item of education) {
  const stops = stopsByLocation.get(item.location) ?? [];
  stops.push({
    kind: "study",
    title: item.degree,
    org: item.school,
    period: item.period,
    summary: item.highlights?.[0],
  });
  stopsByLocation.set(item.location, stops);
}
for (const item of projects) {
  if (!item.location) continue;
  const stops = stopsByLocation.get(item.location) ?? [];
  stops.push({
    kind: "project",
    title: item.title,
    org: item.org,
    // Project periods read "City · Date"; the card already names the city.
    period: item.period.split(" · ").pop() ?? item.period,
    summary: item.subtitle,
  });
  stopsByLocation.set(item.location, stops);
}

const visitedCountries = new Set(places.map((p) => p.countryId));

function buildShapes(world: WorldTopology): MapShapes {
  const all = feature(world, world.objects.countries) as FeatureCollection;
  const land: FeatureCollection = {
    type: "FeatureCollection",
    features: all.features.filter((f) => f.id !== ANTARCTICA),
  };
  const projection = geoNaturalEarth1().fitExtent(
    [
      [8, 8],
      [WIDTH - 8, HEIGHT - 8],
    ],
    land,
  );
  const path = geoPath(projection);
  const notAntarctica = (g: { id?: string | number }) => g.id !== ANTARCTICA;

  return {
    countries: land.features.map((f: Feature<Geometry | null>) => ({
      id: String(f.id),
      d: path(f) ?? "",
    })),
    borders:
      path(
        mesh(world, world.objects.countries, (a, b) => a !== b && notAntarctica(a)),
      ) ?? "",
    coastline:
      path(
        mesh(world, world.objects.countries, (a, b) => a === b && notAntarctica(a)),
      ) ?? "",
    pins: places.map((place) => {
      const [x, y] = projection(place.coords) ?? [0, 0];
      return { place, x, y };
    }),
  };
}

const TAG_POSITION: Record<Place["tag"], string> = {
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
};

export default function WorldMap() {
  const [shapes, setShapes] = useState<MapShapes | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("world-atlas/countries-110m.json").then((mod) => {
      if (!cancelled) setShapes(buildShapes(mod.default as unknown as WorldTopology));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const active = useMemo(
    () => shapes?.pins.find((p) => p.place.location === selected) ?? null,
    [shapes, selected],
  );

  const toggle = (location: string) =>
    setSelected((prev) => (prev === location ? null : location));

  const countryCount = visitedCountries.size;

  return (
    <Section
      id="map"
      label="Map"
      title="Where I have worked, studied and built."
      description={`${places.length} cities across ${countryCount} countries. Click a tag on the map to see what I did there.`}
    >
      <div
        className="surface relative overflow-hidden bg-white"
        onClick={() => setSelected(null)}
      >
        <div className="relative" style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}>
          {shapes ? (
            <svg
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label="World map with the places I have worked and studied"
            >
              <g>
                {shapes.countries.map((c, i) => (
                  <path
                    key={i}
                    d={c.d}
                    fill={visitedCountries.has(c.id) ? "#f3effe" : "#ffffff"}
                  />
                ))}
              </g>
              <path
                d={shapes.borders}
                fill="none"
                stroke="#ddd6fe"
                strokeWidth={0.6}
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={shapes.coastline}
                fill="none"
                stroke="#7c3aed"
                strokeWidth={1}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          ) : null}

          {shapes?.pins.map(({ place, x, y }) => {
            const isActive = selected === place.location;
            return (
              <button
                key={place.location}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(place.location);
                }}
                aria-pressed={isActive}
                aria-label={`${place.city}, ${place.country}`}
                className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 p-1.5"
                style={{
                  left: `${(x / WIDTH) * 100}%`,
                  top: `${(y / HEIGHT) * 100}%`,
                }}
              >
                <span className="relative block h-2.5 w-2.5">
                  {isActive ? (
                    <span className="absolute inset-0 animate-ping rounded-full bg-accent/50" />
                  ) : null}
                  <span className="absolute inset-0 rounded-full border-2 border-white bg-accent shadow-sm" />
                  <span
                    className={`absolute hidden whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium shadow-sm transition-colors sm:block ${
                      TAG_POSITION[place.tag]
                    } ${
                      isActive
                        ? "border-accent bg-accent text-white"
                        : "border-accent/40 bg-white text-accent-deep group-hover:border-accent group-hover:bg-accent-soft"
                    }`}
                  >
                    {place.city}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {active ? (
            <motion.div
              key={active.place.location}
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className={`z-20 border-t border-border bg-bg-elevated md:absolute md:top-4 md:max-h-[calc(100%-2rem)] md:w-[22rem] md:overflow-y-auto md:rounded-xl md:border md:shadow-card ${
                active.x > WIDTH / 2 ? "md:left-4" : "md:right-4"
              }`}
            >
              <PlaceCard
                place={active.place}
                stops={stopsByLocation.get(active.place.location) ?? []}
                onClose={() => setSelected(null)}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Tags are hidden on small screens, so list the places as chips instead. */}
      <div className="mt-4 flex flex-wrap gap-2 sm:hidden">
        {places.map((place) => (
          <button
            key={place.location}
            type="button"
            onClick={() => toggle(place.location)}
            aria-pressed={selected === place.location}
            className={`chip ${selected === place.location ? "chip-accent" : ""}`}
          >
            <MapPin size={12} />
            {place.city}
          </button>
        ))}
      </div>
    </Section>
  );
}

function StopIcon({ kind }: { kind: Stop["kind"] }) {
  if (kind === "work") return <Briefcase size={15} />;
  if (kind === "study") return <GraduationCap size={16} />;
  return <Rocket size={15} />;
}

function PlaceCard({
  place,
  stops,
  onClose,
}: {
  place: Place;
  stops: Stop[];
  onClose: () => void;
}) {
  return (
    <div className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-accent">
            <MapPin size={14} />
            {place.country}
          </div>
          <h3 className="mt-1 text-lg font-semibold text-ink">{place.city}</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="icon-btn h-8 w-8 flex-none"
          aria-label="Close"
        >
          <X size={14} />
        </button>
      </div>

      <ul className="mt-4 space-y-4 border-t border-border pt-4">
        {stops.map((stop) => (
          <li key={`${stop.org}-${stop.period}`} className="flex gap-3">
            <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent">
              <StopIcon kind={stop.kind} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div className="text-xs font-medium text-ink-subtle">{stop.period}</div>
                {stop.logo ? (
                  <img
                    src={asset(stop.logo)}
                    alt={`${stop.org} logo`}
                    loading="lazy"
                    className={`${LOGO_CLASS} w-14`}
                  />
                ) : null}
              </div>
              <h4 className="mt-0.5 text-sm font-semibold leading-snug text-ink">
                {stop.title}
              </h4>
              <p className="mt-0.5 text-sm text-ink-muted">{stop.org}</p>
              {stop.summary ? (
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-ink-subtle">
                  {stop.summary}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
