import type { Affiliation, Pillar, Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Esteban Padilla Cerdio",
  tagline: "Robotics Research Engineer",
  focusAreas: [
    "Robot Learning",
    "Autonomous Navigation",
    "Perception & State Estimation",
  ],
  locations: ["Zürich, Switzerland"],
  bio: [
    "Robotics research engineer building robots that perceive, learn and move through the real world, from perception to learned policies, running on physical hardware.",
    "Currently at ETH Zürich's Computer Vision and Geometry Lab, working on multi-agent mapping and language-grounded navigation for legged robots. Previously: RSS 2026 navigation paper, manipulation policies at the Soft Robotics Lab, tracking at GVLab Tokyo, and four Meta internships.",
  ],
  links: {
    github: "https://github.com/esteb37",
    linkedin: "https://www.linkedin.com/in/esteban-padilla-cerdio/",
    email: "esteban37padilla@gmail.com",
    cv: "Esteban_Padilla_Cerdio_CV.pdf",
  },
  portrait: "hero-portrait.webp",
  aboutImage: "me-robot-2.jpg",
};

export const affiliations: Affiliation[] = [
  // Three logos lead so Meta enters mid-banner and stays on screen longer.
  { name: "FIRST Robotics Competition", logo: "logos/banner/first.png", scale: 1.15 },
  { name: "PyTorch", logo: "logos/banner/pytorch.png", scale: 0.85 },
  { name: "Robotics: Science and Systems", logo: "logos/banner/rss.png", scale: 1.1 },
  { name: "Meta", logo: "logos/banner/meta.png", scale: 0.85 },
  { name: "ETH Zürich", logo: "logos/banner/eth.svg", scale: 0.8 },
  { name: "University of Tokyo", logo: "logos/banner/utokyo.png" },
  { name: "Computer Vision and Geometry Lab", logo: "logos/banner/cvg.png", scale: 1.1 },
  { name: "Soft Robotics Lab", logo: "logos/banner/srl.png", scale: 1.3 },
  { name: "GVLab, University of Tokyo", logo: "logos/banner/gvlab.png", scale: 1.1 },
  { name: "Tecnológico de Monterrey", logo: "logos/banner/tec.png", scale: 1.1 },
  { name: "ExecuTorch", logo: "logos/banner/executorch.png", scale: 1.3 },
  { name: "Paradigm", logo: "logos/banner/paradigm.png", scale: 1.4 },
];

export const pillars: Pillar[] = [
  {
    title: "Robot Learning",
    description:
      "Reinforcement and imitation learning on real hardware, sim-to-real transfer and VLA models for manipulation.",
    tag: "// learning",
  },
  {
    title: "Autonomous Navigation",
    description:
      "Language-grounded exploration, semantic SLAM and multi-agent localization on legged and wheeled robots.",
    tag: "// navigation",
  },
  {
    title: "Perception & State Estimation",
    description:
      "Probabilistic tracking and sensor fusion across vision, LiDAR and force, plus efficient on-device inference.",
    tag: "// perception",
  },
];
