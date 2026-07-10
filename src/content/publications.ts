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
  title: "Floor-Based Behavioral Odometry for Anticipatory HRI",
  subtitle: "Master Thesis (in progress)",
  org: "GVLab — University of Tokyo",
  period: "Feb 2026 – Present",
  summary:
    "A distributed, privacy-preserving intelligent floor capable of global behavioral odometry and tracking of human–robot interaction across wide spaces, extracting rich spatiotemporal structure from a minimal modality: ground reaction forces and center-of-pressure dynamics from an under-determined source of data.",
  objectives: [
    "Robust, low-latency streaming models (TCNs, state-space models) for force-plate signals.",
    "Retrieval of individual pressure influence from an under-determined low-resolution sensor array using physical priors.",
    "Multi-plate fusion to estimate human and robot global position, zone transitions, and multi-agent coexistence without visual tracking.",
    "Incremental learning of interaction patterns for proactive, anticipatory robot behavior.",
    "Privacy-by-design: no cameras, no wearables, only biomechanical ground interaction.",
  ],
  tags: ["HRI", "Force plates", "ROS 2", "Streaming ML", "Privacy-preserving"],
  image: "thesis.gif",
};
