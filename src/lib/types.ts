export type Link = {
  label: string;
  href: string;
};

export type ProfileLinks = {
  github: string;
  linkedin: string;
  email: string;
  cv?: string;
};

export type Profile = {
  name: string;
  tagline: string;
  focusAreas: string[];
  locations: string[];
  bio: string[];
  links: ProfileLinks;
  portrait: string;
  aboutImage?: string;
};

export type Affiliation = {
  name: string;
  /** Silhouette on a transparent background; tinted with the accent color. */
  logo: string;
  /** Height relative to the other logos, to even out optical weight. */
  scale?: number;
};

export type Pillar = {
  title: string;
  description: string;
  tag: string;
};

export type ExperienceRole = {
  role: string;
  location: string;
  period: string;
  bullets: string[];
  links?: Link[];
  tags?: string[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  links?: Link[];
  tags?: string[];
  current?: boolean;
  logo?: string;
  /** Separate stints at the same org, shown inside one entry. */
  roles?: ExperienceRole[];
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract: string;
  highlights: string[];
  tags: string[];
  images: string[];
  links: Link[];
};

export type ThesisCard = {
  title: string;
  subtitle: string;
  org: string;
  period: string;
  summary: string;
  objectives: string[];
  tags: string[];
  image?: string;
  pdf?: string;
};

export type VideoEmbed = {
  kind: "youtube" | "mp4";
  src: string;
  title: string;
};

export type ProjectCategory =
  | "Robot Learning & Manipulation"
  | "Navigation & Perception"
  | "Planning & Control"
  | "ML Systems & Performance";

export type Project = {
  id: string;
  sortDate: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  period: string;
  org: string;
  summary: string;
  highlights: string[];
  tags: string[];
  cover: string;
  gallery?: string[];
  videos?: VideoEmbed[];
  links?: Link[];
  featured?: boolean;
  /** Pins the project on the world map; matches a `Place.location`. */
  location?: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  highlights?: string[];
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type LanguageItem = {
  language: string;
  level: string;
};

export type Place = {
  /** Matches `location` on experience and education items. */
  location: string;
  city: string;
  country: string;
  /** ISO 3166-1 numeric code, as used by world-atlas. */
  countryId: string;
  /** [longitude, latitude] */
  coords: [number, number];
  /** Side of the pin the tag sits on. */
  tag: "left" | "right" | "top" | "bottom";
};
