import type { Project, ProjectCategory } from "@/lib/types";

export const projectCategories: ProjectCategory[] = [
  "Learning & Manipulation",
  "Semantic Navigation & SLAM",
  "Aerial Robotics & Control",
  "ML Systems & Performance",
];

export const projects: Project[] = [
  {
    id: "Common Ground",
    sortDate: "2026-08",
    title: "Common Ground — Force-Plate Multi-Agent Localization",
    subtitle:
      "Real-time localization and tracking of humans, robots and objects without cameras or wearables.",
    category: "Semantic Navigation & SLAM",
    period: "University of Tokyo · Feb – Aug 2026",
    org: "GVLab — University of Tokyo",
    summary:
      "Common Ground is a privacy-preserving smart-floor sensing system that estimates the position, velocity, heading and load of humans, robots and objects from a grid of force plates. It combines probabilistic tracking, constrained optimization and sensor fusion to recover physical interaction structure from underdetermined measurements in real time.",
    highlights: [
      "Tracked multiple humans, robots and objects without cameras or wearable sensors.",
      "Resolved ambiguous multi-contact measurements using physics-constrained convex optimization.",
      "Preserved agent identity through footprint assignment and probabilistic temporal tracking.",
      "Fused measurements across force plates for global localization and HRI analysis.",
    ],
    tags: [
      "Multi-Agent Localization",
      "Sensor Fusion",
      "Force Sensing",
      "HRI",
      "Convex Optimization",
      "ROS 2",
    ],
    cover: "thesis-cover.webp",
    videos: [
      {
        kind: "mp4",
        src: "twopeople_aligned.mp4",
        title: "Two-person localization and tracking",
      },
      {
        kind: "mp4",
        src: "full_dots_aligned.mp4",
        title: "Full-floor multi-agent tracking",
      },
      {
        kind: "mp4",
        src: "pickup_aligned.mp4",
        title: "Object pickup interaction",
      },
      {
        kind: "mp4",
        src: "touch2_aligned.mp4",
        title: "Human–robot touch interaction",
      },
      {
        kind: "mp4",
        src: "tworobots_aligned.mp4",
        title: "Two-robot localization and tracking",
      },
    ],
    links: [
      {
        label: "Thesis PDF",
        href: "./assets/CommonGround_EstebanPadillaCerdio.pdf",
      },
      {
        label: "Common Ground Feature",
        href: "https://tecgihan-co-jp.translate.goog/case/introduction/22.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=es-419&_x_tr_pto=wapp",
      },
    ],
    featured: true,
  },

  // === Dexterous Manipulation ===
  {
    id: "rapunzel-hand",
    sortDate: "2025-02",
    title: "RAPUNZEL — Tendon-Driven Anthropomorphic Hand",
    subtitle:
      "17-DoF tendon-driven hand integrated with a Franka Panda arm, taught by demonstration.",
    category: "Learning & Manipulation",
    period: "ETH Zürich · 2024 – 2025",
    org: "Soft Robotics Lab, ETH Zürich",
    summary:
      "Designed and built a 17-DoF tendon-driven robotic hand and the full software stack to teach it new skills. A motion-capture teleoperation rig collects high-quality manipulation demonstrations, which are then used to train imitation-learning policies (ACT) for multi-step tasks like grasping and object reorientation.",
    highlights: [
      "Built ROS 2 teleoperation and demonstration-collection pipeline.",
      "Collected 600+ demonstrations across multiple manipulation tasks.",
      "Trained ACT-based imitation-learning policies for autonomous execution.",
      "Enabled multi-step tasks including grasping and in-hand reorientation.",
    ],
    tags: [
      "ROS 2",
      "MuJoCo",
      "PyTorch",
      "Imitation Learning (ACT)",
      "MOCAP Teleop",
      "Franka",
    ],
    cover: "hand-spinner-cover.webp",
    gallery: [
      "rapunzel-labelled.webp",
      "rapunzel2.webp",
      "rapunzel3.webp",
    ],
    videos: [
      {
        kind: "mp4",
        src: "hand-spinner.mp4",
        title: "In-hand object spinning",
      },
      {
        kind: "mp4",
        src: "hand-card.mp4",
        title: "Card manipulation",
      },
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Esteb37/dextrous_hand",
      },
    ],
    featured: true,
  },
  {
    id: "egoverse",
    sortDate: "2025-12",
    title: "EgoVerse — Egocentric Human Demonstration Data",
    subtitle:
      "Contributed as a data collector to EgoVerse, a collaborative ecosystem for human-centric robot learning.",
    category: "Learning & Manipulation",
    period: "ETH Zürich · 2025",
    org: "Soft Robotics Lab × EgoVerse consortium",
    summary:
      "EgoVerse is an ecosystem for robot learning from egocentric human data, built across four academic labs and three industry partners. With the Soft Robotics Lab team, I helped collect rich, diverse and consistent egocentric demonstrations that feed the shared dataset.",
    highlights: [
      "Egocentric data collection sessions with consistent task and protocol design.",
      "Contributed to a multi-lab, multi-partner robot-learning dataset.",
      "Direct experience operating capture hardware (Quest, body-worn cameras) for data scale.",
    ],
    tags: ["Data collection", "Egocentric", "Robot learning"],
    cover: "me-egoverse.webp",
    gallery: ["egoverse.webp", "egoverse2.jpg", "me-egoverse.webp"],
    links: [{ label: "egoverse.ai", href: "https://egoverse.ai" }],
  },
  {
    id: "groot-hackathon",
    sortDate: "2025-04",
    title: "Mistral AI × GR00T — Generalized VLA in 48 Hours",
    subtitle:
      "Built a vision–language–action pipeline on NVIDIA GR00T during the Mistral AI Robotics Hackathon in Paris.",
    category: "Learning & Manipulation",
    period: "Paris · April 2025",
    org: "Mistral AI Physical AI & Robotics Hackathon",
    summary:
      "At the Mistral AI Robotics Summit & Hackathon in Paris (April 2025), our team developed a generalized vision–language–action pipeline using NVIDIA GR00T in 48 hours, running on Hugging Face's LeRobot arms and powered by Mistral AI models.",
    highlights: [
      "End-to-end VLA pipeline assembled from scratch in 48 hours.",
      "Integrated NVIDIA GR00T with LeRobot hardware and Mistral language models.",
      "Showcased real-time language-conditioned manipulation on a real robotic arm.",
    ],
    tags: ["VLA", "NVIDIA GR00T", "LeRobot", "Mistral AI", "Hackathon"],
    cover: "me-with-groot.jpg",
    gallery: ["me-with-groot.jpg", "groot.webp"],
    videos: [
      {
        kind: "mp4",
        src: "https://huggingface.co/datasets/roboticshack/submissions/resolve/main/Team15-final.mp4",
        title: "Mistral × GR00T — final submission",
      },
    ],
    links: [
      {
        label: "Final submission video",
        href: "https://huggingface.co/datasets/roboticshack/submissions/resolve/main/Team15-final.mp4",
      },
    ],
  },


  // === Semantic Navigation & SLAM ===
  {
    id: "openfrontier",
    sortDate: "2026-07",
    title: "OpenFrontier — VLM-Grounded Frontier Navigation",
    subtitle:
      "Training-free language-conditioned navigation that uses visual frontiers as semantic anchors. RSS 2026.",
    category: "Semantic Navigation & SLAM",
    period: "ETH Zürich · 2024 – 2026",
    org: "ETH Zürich · Microsoft Spatial AI Lab · University of Bonn",
    summary:
      "OpenFrontier reframes open-world navigation as a sparse subgoal identification problem. Detected visual frontiers are presented to a VLM in image space, which scores them for relevance to a natural-language goal. The grounded frontiers drive long-horizon, language-conditioned exploration without dense 3D mapping or fine-tuning, with strong zero-shot results across ObjectNav benchmarks and real-robot deployment.",
    highlights: [
      "77.3% success rate on HM3D ObjectNav, zero-shot.",
      "Set-of-marks frontier prompting over single RGB observations.",
      "Real-world deployment on a mobile legged robot.",
    ],
    tags: ["VLMs", "ObjectNav", "Habitat", "Zero-shot", "Mobile robots"],
    cover: "openfrontier-1.webp",
    gallery: ["openfrontier-1.webp", "openfrontier-2.webp"],
    videos: [
      {
        kind: "youtube",
        src: "iZt5yWM9tIs",
        title: "OpenFrontier — project video",
      },
    ],
    links: [
      { label: "arXiv 2603.05377", href: "https://arxiv.org/abs/2603.05377" },
      {
        label: "RSS Paper",
        href: "https://www.roboticsproceedings.org/rss22/p067.html",
      },
      {
        label: "Project Website",
        href: "https://boysun045.github.io/OpenFrontier-Project/",
      },
      { label: "Code", href: "https://github.com/cvg/OpenFrontier" },
    ],
    featured: true,
  },
  {
    id: "ocslam",
    sortDate: "2024-03",
    title: "Easy Object-Conscious SLAM",
    subtitle:
      "Lightweight semantic SLAM for mobile robots, fusing 2D LiDAR with YOLOv8 detection on a budget.",
    category: "Semantic Navigation & SLAM",
    period: "Ulm University · 2023",
    org: "Ulm University",
    summary:
      "OCSLAM augments classical SLAM with a layer of semantic awareness. By combining the 2D LiDAR data already used for mapping with YOLOv8 visual detections and wheel odometry, the system locates, classifies and tracks objects in the map while staying lightweight enough for resource-constrained robots.",
    highlights: [
      "Lightweight pipeline targeting mobile, resource-constrained robots.",
      "Fuses 2D LiDAR clustering with YOLOv8 detections and wheel odometry.",
      "Designed for deployment on small robots without dense 3D maps.",
    ],
    tags: ["SLAM", "YOLOv8", "LiDAR", "ROS"],
    cover: "ocslam.webp",
    gallery: ["ocslam.webp"],
    videos: [
      {
        kind: "youtube",
        src: "ok1H8ay-ka0",
        title: "OCSLAM — demonstration",
      },
      {
        kind: "youtube",
        src: "0UuDkLe7XX8",
        title: "OCSLAM — presentation",
      },
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Esteb37/easy-object-conscious-slam",
      },
    ],
  },
  {
    id: "puzzlebot-slam",
    sortDate: "2024-06",
    title: "Ray-tracing SLAM for maze-solving robot",
    subtitle:
      "Autonomous navigation stack for a differential-drive robot equipped with LiDAR and enhanced with ray-tracing capabilities for maze navigation.",
    category: "Semantic Navigation & SLAM",
    period: "Tec de Monterrey · 2024",
    org: "Tec de Monterrey",
    summary:
      "End-to-end autonomous navigation of the PuzzleBot in Gazebo: ROS 1 package setup, sensor integration, mapping and navigation stack configuration, and custom node development for ray-tracing-based bug navigation and Kalman Filter localization. Achieved robust maze-solving performance in simulation.",
    highlights: [
      "Full mapping + navigation stack in Gazebo simulation.",
      "Bug navigation with ray-tracing, KF localization and ArUco marker detection scripts.",
    ],
    tags: ["ROS", "Gazebo", "Kalman Filter", "ArUco"],
    cover: "puzzlebot.webp",
    links: [
      {
        label: "Repository",
        href: "https://github.com/Esteb37/aranchubots_autonomousnavigation_puzzlebot",
      },
    ],
  },

  // === Aerial Robotics & Control ===
  {
    id: "atic",
    sortDate: "2025-05",
    title: "Distributed MPC for Modular Aerial Robots",
    subtitle:
      "ADMM-based decentralized MPC for the DRAGON articulated aerial platform.",
    category: "Aerial Robotics & Control",
    period: "ETH Zürich · 2025",
    org: "ETH Zürich",
    summary:
      "DRAGON is an articulated modular aerial robot of four interlinked modules with two-DoF joints and vectoring thrust apparatus. Centralized planning becomes computationally heavy at this scale. Our solution distributes the load: each module is treated as an independent, rigidly linked drone solving a constrained MPC problem coordinated through ADMM, producing scalable shape-shifting trajectories and distributed wrench control.",
    highlights: [
      "Distributed MPC with ADMM coordination across modules.",
      "Trajectory optimization for snake, line and U-shape configurations.",
      "Distributed wrench-control allocation validated in simulation.",
    ],
    tags: [
      "MPC",
      "ADMM",
      "CVXPY",
      "PyBullet",
      "Trajectory optimization",
      "Aerial robotics",
    ],
    cover: "atic-snake-cover.webp",
    gallery: ["dragon.jpeg"],
    videos: [
      {
        kind: "mp4",
        src: "atic-snake.mp4",
        title: "Snake configuration trajectory",
      },
      {
        kind: "mp4",
        src: "atic-ushape.mp4",
        title: "U-shape obstacle trajectory",
      },
      {
        kind: "mp4",
        src: "atic-line.mp4",
        title: "Line configuration trajectory",
      },
      {
        kind: "mp4",
        src: "atic-wrench.mp4",
        title: "Distributed wrench control",
      },
    ],
    links: [
      { label: "Repository", href: "https://github.com/Esteb37/atic" },
      {
        label: "DRAGON",
        href: "https://www.dragon.t.u-tokyo.ac.jp/publications/references/2023-ijrr-dragon-zhao/",
      },
    ],
  },

  // === ML Systems & Performance ===
  {
    id: "executorch",
    sortDate: "2024-08",
    title: "ExecuTorch GPU Tooling & 4-bit Quantization",
    subtitle:
      "Open-source GPU tooling and matmul/quantization optimizations for edge ML inference at Meta.",
    category: "ML Systems & Performance",
    period: "Meta · 2024",
    org: "Meta — PyTorch / ExecuTorch",
    summary:
      "Built tooling to identify internal hardware bottlenecks for mobile GPUs (inspired by Romou-style benchmarks) and implemented matrix multiplication optimizations and low-bit quantization in the ExecuTorch ML framework for edge devices, achieving ~70% inference speedups.",
    highlights: [
      "Open-source GPU tooling for hardware-bottleneck identification.",
      "Matrix multiplication optimizations: buffer management, loop unrolling.",
      "4-bit quantization paths for edge deep-learning inference.",
      "~70% speed improvements on representative workloads.",
    ],
    tags: ["PyTorch", "ExecuTorch", "CUDA", "Quantization", "GPU perf"],
    cover: "executorch-internship.png",
    gallery: ["executorch-internship.png", "executorch-logo.webp"],
    links: [
      {
        label: "GPUInfo Repository",
        href: "https://github.com/pytorch/executorch/tree/main/backends/vulkan/tools/gpuinfo",
      },
    ],
  },
  {
    id: "core-ai-enhance",
    sortDate: "2023-08",
    title: "Core AI — Image Enhancement CPU Rewrite",
    subtitle:
      "Re-engineered a deep-learning image enhancement algorithm for efficient CPU execution.",
    category: "ML Systems & Performance",
    period: "Meta · 2023",
    org: "Meta — Core AI",
    summary:
      "Took a deep-learning image-enhancement algorithm and re-engineered it for efficient CPU execution. The combination of algorithmic restructuring and systems-level optimization reduced end-to-end runtime by approximately 99.7% while preserving output quality.",
    highlights: [
      "Algorithmic restructuring of a DL image-enhancement pipeline.",
      "System-level CPU optimizations and memory-layout tuning.",
      "~99.7% runtime reduction with preserved visual quality.",
    ],
    tags: ["C++", "CPU Optimization", "Image Processing"],
    cover: "autoenhance-after.webp",
    gallery: ["autoenhance-before.webp", "autoenhance-after.webp"],
  },
];
