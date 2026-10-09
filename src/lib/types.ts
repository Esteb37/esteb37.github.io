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
};

export type Pillar = {
  title: string;
  description: string;
  tag: string;
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
  | "Learning & Manipulation"
  | "Semantic Navigation & SLAM"
  | "Aerial Robotics & Control"
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
