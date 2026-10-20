import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    role: "Robotics Research Assistant",
    org: "Computer Vision and Geometry Lab, ETH Zürich",
    location: "Zürich, Switzerland",
    period: "Sep 2026 – Present",
    current: true,
    logo: "logos/cvg.png",
    bullets: [
      "Working on multi-agent localization, mapping and language-grounded navigation in visually repetitive indoor spaces under Prof. Dr. Marc Pollefeys, covering Boston Dynamics Spot, Pollen Robotics Reachy and people wearing recording glasses.",
      "The project aims to ground natural-language navigation requests in visual and geometric cues so robots can tell apart similar-looking destinations.",
      "Setting up, deploying and maintaining Spot Arm, Reachy 2 and Franka Duo for lab experiments.",
    ],
    tags: [
      "Multi-Agent SLAM",
      "Language-Grounded Navigation",
      "Legged & Humanoid Robots",
      "Robot Deployment",
    ],
  },
  {
    role: "Research Intern — MSc Thesis",
    org: "GVLab — University of Tokyo",
    location: "Tokyo, Japan",
    period: "Feb – Aug 2026",
    logo: "logos/utokyo.png",
    bullets: [
      "Developed a method to track humans, robots and their interactions using ground-reaction forces sampled at 100 Hz from a coarse grid of force plates, without cameras or wearables.",
      "Applied physics-constrained convex optimization to attribute forces and infer contacts, with probabilistic tracking to maintain identities during interactions.",
      "Implemented ROS 2 sensor ingestion, calibration, synchronization, filtering and visualization.",
    ],
    links: [
      {
        label: "Common Ground Feature",
        href: "https://tecgihan-co-jp.translate.goog/case/introduction/22.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=es-419&_x_tr_pto=wapp",
      },
    ],
    tags: [
      "Multi-Object Tracking",
      "State Estimation",
      "Convex Optimization",
      "HRI",
      "ROS 2",
    ],
  },
  {
    role: "Teaching Assistant — Real World Robotics",
    org: "Soft Robotics Laboratory, ETH Zürich",
    location: "Zürich, Switzerland",
    period: "Sep 2025 – Feb 2026",
    logo: "logos/srl.png",
    bullets: [
      "Supported student teams in the Real World Robotics course under Prof. Dr. Robert Katzschmann with robot bring-up, control, simulation and physical testing.",
      "As additional lab research, implemented a PPO training pipeline in Isaac Lab for selecting and rotating a cube in-hand to a requested face, and deployed the policy to a physical ORCA robotic hand.",
      "Recorded egocentric human manipulation demonstrations with Aria glasses and teleoperated a bimanual Franka / ORCA hand system via Meta Quest hand tracking for EgoVerse, about 40 hours of data in total.",
    ],
    links: [
      { label: "ORCA", href: "https://orca.ethz.ch" },
      { label: "Real World Robotics", href: "https://rwr.ethz.ch" },
      { label: "EgoVerse", href: "https://egoverse.ai" },
    ],
    tags: [
      "Reinforcement Learning",
      "Sim-to-Real",
      "Dexterous Manipulation",
      "Teleoperation",
      "Data Collection",
    ],
  },
  {
    role: "Software Engineering Intern — PyTorch / ExecuTorch",
    org: "Meta Platforms",
    location: "New York, USA",
    period: "Jun – Aug 2024",
    logo: "logos/meta.png",
    bullets: [
      "Built open-source Vulkan GPU characterization tooling for PyTorch and ExecuTorch.",
      "Optimized edge matrix multiplication through buffer and memory management, loop unrolling and 4-bit quantization, reducing representative inference runtime by approximately 70%.",
    ],
    links: [
      {
        label: "GPUInfo Repository",
        href: "https://github.com/pytorch/executorch/tree/main/backends/vulkan/tools/gpuinfo",
      },
    ],
    tags: ["PyTorch", "On-Device ML", "Vulkan", "Quantization"],
  },
  {
    role: "Software Engineering Intern — Core AI",
    org: "Meta Platforms",
    location: "Seattle, USA",
    period: "Jun – Aug 2023",
    logo: "logos/meta.png",
    bullets: [
      "Re-engineered a deep-learning image and video enhancement pipeline, previously deployed on a virtual GPU, for C++ CPU execution on servers and AR glasses.",
      "Reduced runtime by 99.66% while preserving visual quality.",
    ],
    tags: ["C++", "ML Inference", "Computer Vision"],
  },
  {
    role: "Software Engineering Intern — WhatsApp Infrastructure",
    org: "Meta Platforms",
    location: "Menlo Park, CA, USA",
    period: "May – Jul 2022",
    logo: "logos/meta.png",
    bullets: [
      "Built centralized crash-report processing in Hack with logging, symbolication, categorization and asynchronous server communication.",
      "Reduced client crash-log upload wait time by approximately 95%.",
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
      "Completed a three-week Android development bootcamp in Java, followed by a five-week project phase.",
      "Developed a native app that recommends open-source projects to developers based on their interests, using an interaction-based recommendation algorithm.",
    ],
    tags: ["Android", "Java", "Recommender Systems"],
  },
];
