import type { Pillar, Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Esteban Padilla Cerdio",
  tagline: "Robotics Research Engineer",
  focusAreas: [
    "Robot Learning",
    "Autonomous Navigation",
    "Perception & State Estimation",
  ],
  locations: ["Zürich, Switzerland", "Open to relocate"],
  bio: [
    "Robotics research engineer building robots that perceive, learn and move through the real world. My work spans the full stack, from perception, state estimation and mapping to learned policies and planning, and I care most about getting it running on physical hardware.",
    "Currently a Robotics Research Assistant in the Computer Vision and Geometry Lab at ETH Zürich, working on multi-agent localization, mapping and language-grounded navigation with legged and humanoid robots. Before that I published language-conditioned navigation work at RSS 2026, trained and deployed manipulation policies at the ETH Soft Robotics Lab, built camera-free multi-agent tracking at GVLab in Tokyo, and optimized on-device ML inference across four internships at Meta.",
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

export const pillars: Pillar[] = [
  {
    title: "Robot Learning",
    description:
      "Reinforcement and imitation learning on real hardware: teleoperation and demonstration pipelines, sim-to-real policy training and deployment, and vision–language–action models for manipulation.",
    tag: "// learning",
  },
  {
    title: "Autonomous Navigation",
    description:
      "Language-grounded and frontier-based exploration, semantic SLAM and multi-agent localization, from mapping and planning through deployment on legged and wheeled robots.",
    tag: "// navigation",
  },
  {
    title: "Perception & State Estimation",
    description:
      "Probabilistic tracking, sensor fusion and constrained optimization over vision, LiDAR, odometry and force sensing, plus the efficient ML inference that runs it on-device.",
    tag: "// perception",
  },
];
