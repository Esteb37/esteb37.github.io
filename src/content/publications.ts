import type { Publication, ThesisCard } from "@/lib/types";

export const publications: Publication[] = [
  {
    title:
      "OpenFrontier: General Navigation with Visual-Language Grounded Frontiers",
    authors: "Esteban Padilla Cerdio*, Boyang Sun*, Marc Pollefeys, Hermann Blum",
    venue: "Robotics: Science and Systems (RSS)",
    year: 2026,
    abstract:
      "Open-world navigation requires robots to make decisions in complex everyday environments while adapting to flexible task requirements. We formulate navigation as a sparse subgoal identification and reaching problem and propose OpenFrontier, a training-free framework that uses visual navigation frontiers as semantic anchors. OpenFrontier presents detected frontiers to a VLM in image space, enabling efficient language-conditioned exploration without dense 3D mapping, policy training, or fine-tuning.",
    highlights: [
      "Object-aware exploration policies that integrate frontier exploration with vision–language models.",
      "77% success rate on ObjectNav benchmarks in fully zero-shot settings.",
      "Real-world deployment on a mobile legged robot in large indoor environments.",
    ],
    images: ["openfrontier-1.png"],
    links: [
      {
        label: "Project Website",
        href: "https://boysun045.github.io/OpenFrontier-Project/",
      },
    ],
  },
];

export const thesis: ThesisCard = {
  title: "Common Ground: Tracking Human-Robot Interaction through Coarse Force-Plate Sensing",
  subtitle: "Master Thesis",
  org: "GVLab — University of Tokyo",
  period: "August 2026",
  summary:
  "A real-time, privacy-preserving smart-floor sensing framework for tracking humans, robots, and objects and recovering physical interaction structure from coarse ground-reaction-force and center-of-pressure measurements, without cameras or wearables.",
  objectives: [
    "Real-time tracking of multiple agents from coarse force-plate measurements using force, spatial, and temporal associations.",
    "Resolve under-determined multi-contact measurements using physics-constrained convex optimization and physical priors.",
    "Estimate agent force contributions and contact locations while preserving measured force and first-moment constraints.",
    "Fuse measurements across multiple force plates to recover global agent positions and interaction dynamics, including robot pose correction, touch contacts, and object carrying.",
    "Provide a gait- and form-factor-agnostic sensing framework for humans, robots, and objects without cameras or wearable sensors.",
    "Characterize sensing accuracy and evaluate real-time multi-agent tracking performance under human–robot and object-interaction scenarios."
  ],
  tags: ["HRI", "Force plates", "ROS 2", "Streaming ML", "Privacy-preserving"],
  image: "thesis.gif",
};
