import type { Pillar, Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Esteban Padilla Cerdio",
  tagline: "Robotics Research Engineer",
  focusAreas: [
    "Autonomous Navigation",
    "Localization & Sensor Fusion",
    "Real-Time Robotics",
  ],
  locations: ["Zürich, Switzerland", "Open to relocate"],
  bio: [
    "Robotics research engineer specialized in autonomous navigation, localization, sensor fusion and real-time robotics. I build and deploy end-to-end systems that help robots understand where they are, where to go and how to operate reliably in the physical world.",
    "Currently a Research Assistant in the Computer Vision and Geometry Lab at ETH Zürich, working on semantic SLAM, dense object localization, visual frontier navigation and multi-robot collaboration. Previously at GVLab, the ETH Soft Robotics Laboratory and Meta.",
  ],
  links: {
    github: "https://github.com/esteb37",
    linkedin: "https://www.linkedin.com/in/esteban-padilla-cerdio/",
    email: "esteban37padilla@gmail.com",
    cv: "Esteban_Padilla_Cerdio_CV.pdf",
  },
  portrait: "hero-portrait.webp",
};

export const pillars: Pillar[] = [
  {
    title: "Autonomous Navigation",
    description:
      "Semantic SLAM, frontier exploration and language-grounded navigation, from perception and mapping through planning and deployment on physical robots.",
    tag: "// navigation",
  },
  {
    title: "Localization & Sensor Fusion",
    description:
      "Probabilistic tracking and state estimation that combine vision, LiDAR, odometry and force sensing for robots, people and objects.",
    tag: "// localization",
  },
  {
    title: "Robot Learning",
    description:
      "Imitation and reinforcement learning on real anthropomorphic hardware, including motion-capture teleoperation, demonstration collection and sim-to-real policy deployment.",
    tag: "// learning",
  },
];
