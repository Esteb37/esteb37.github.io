import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    role: "Research Assistant",
    org: "Computer Vision and Geometry Lab, ETH Zürich",
    location: "Zürich, Switzerland",
    period: "Sep 2026 – Present",
    current: true,
    bullets: [
      "Implementing a full-stack semantic SLAM pipeline with video-based mapping, dense object localization, visual frontier navigation and multi-robot collaboration under Prof. Dr. Marc Pollefeys.",
      "Setting up, deploying and maintaining Spot Arm, Reachy 2 and Franka Duo for lab experiments.",
    ],
    tags: [
      "Semantic SLAM",
      "Visual Navigation",
      "Multi-Robot Systems",
      "Robot Deployment",
    ],
  },
  {
    role: "Research Intern",
    org: "GVLab — University of Tokyo",
    location: "Tokyo, Japan",
    period: "Feb – Aug 2026",
    logo: "logos/utokyo.png",
    bullets: [
      "Developed Common Ground, a real-time multi-agent localization and tracking system that estimates human and robot position, velocity, heading and load from a grid of force plates—without cameras or wearables.",
      "Designed probabilistic tracking, constrained optimization and sensor-fusion methods for footprint assignment, identity preservation and HRI analysis in an underdetermined system.",
    ],
    links: [
      {
        label: "Common Ground Feature",
        href: "https://tecgihan-co-jp.translate.goog/case/introduction/22.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=es-419&_x_tr_pto=wapp",
      },
    ],
    tags: ["Multi-Agent Localization", "Sensor Fusion", "HRI", "Force Sensing"],
  },
  {
    role: "Teaching Assistant",
    org: "Soft Robotics Laboratory, ETH Zürich",
    location: "Zürich, Switzerland",
    period: "Sep 2025 – Feb 2026",
    logo: "logos/srl.png",
    bullets: [
      "Implemented a PPO training pipeline in Isaac Lab and deployed it to an ORCA robotic hand for the Real World Robotics course under Prof. Dr. Robert Katzschmann.",
      "Collected bimanual manipulation demonstrations using motion capture and robot hardware for EgoVerse.",
    ],
    links: [
      { label: "ORCA", href: "https://orca.ethz.ch" },
      { label: "Real World Robotics", href: "https://rwr.ethz.ch" },
      { label: "EgoVerse", href: "https://egoverse.ai" },
    ],
    tags: ["PPO", "Isaac Lab", "Sim-to-Real", "Motion Capture"],
  },
  {
    role: "Software Engineering Intern — PyTorch / ExecuTorch",
    org: "Meta Platforms",
    location: "New York, USA",
    period: "Jun – Aug 2024",
    logo: "logos/meta.png",
    bullets: [
      "Built open-source Vulkan GPU characterization tooling for PyTorch and ExecuTorch.",
      "Optimized edge inference through memory-management changes, loop unrolling and 4-bit quantization, reducing representative runtimes by approximately 70%.",
    ],
    links: [
      {
        label: "GPUInfo Repository",
        href: "https://github.com/pytorch/executorch/tree/main/backends/vulkan/tools/gpuinfo",
      },
    ],
    tags: ["PyTorch", "ExecuTorch", "Vulkan", "Quantization"],
  },
  {
    role: "Software Engineering Intern — Core AI",
    org: "Meta Platforms",
    location: "Seattle, USA",
    period: "Jun – Aug 2023",
    logo: "logos/meta.png",
    bullets: [
      "Re-engineered a deep-learning image and video enhancement pipeline for C++ CPU-only execution on servers and AR glasses.",
      "Reduced runtime by 99.66% through algorithmic and systems optimizations.",
    ],
    tags: ["C++", "CPU Optimization", "Computer Vision"],
  },
  {
    role: "Software Engineering Intern — WhatsApp Infrastructure",
    org: "Meta Platforms",
    location: "Menlo Park, CA, USA",
    period: "May – Jul 2022",
    logo: "logos/meta.png",
    bullets: [
      "Built asynchronous crash-report processing with logging and symbolication in Hack.",
      "Reduced client upload wait time by approximately 95%.",
    ],
    tags: ["Hack", "Distributed Systems", "Infrastructure"],
  },
  {
    role: "Software Development Intern — Meta University",
    org: "Meta Platforms",
    location: "Remote",
    period: "Jun – Aug 2021",
    logo: "logos/meta.png",
    bullets: [
      "Partook in a three-week Android development bootcamp with Java, followed by a five-week project phase.",
      "Developed a native application with a recommendation system aimed at developers who wish to find open-source projects that align with their interests.",
      "Implemented an interaction-based recommendation algorithm",
    ]
  }
];
