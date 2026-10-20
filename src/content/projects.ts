import type { Project, ProjectCategory } from "@/lib/types";

export const projectCategories: ProjectCategory[] = [
  "Robot Learning & Manipulation",
  "Navigation & Perception",
  "Aerial Robotics & Control",
  "ML Systems & Performance",
];

export const projects: Project[] = [
  {
    id: "Common Ground",
    sortDate: "2026-08",
    title: "Common Ground — Force-Plate Multi-Agent Tracking",
    subtitle:
      "Real-time tracking of humans, robots and their interactions from 100 Hz ground-reaction forces, without cameras or wearables.",
    category: "Navigation & Perception",
    period: "University of Tokyo · Feb – Aug 2026",
    org: "GVLab — University of Tokyo",
    summary:
      "My MSc thesis: a method to track humans, robots and their interactions using ground-reaction forces sampled at 100 Hz from a coarse grid of force plates, without cameras or wearables. Physics-constrained convex optimization attributes force contributions and infers contacts, while probabilistic tracking maintains identities through multi-agent interactions. The system estimates position, velocity, heading, load, force contributions and contact locations for each agent.",
    highlights: [
      "Tracked multiple humans, robots and objects without cameras or wearable sensors.",
      "Resolved under-determined multi-contact measurements with physics-constrained convex optimization.",
      "Preserved agent identity through force, spatial and temporal association with probabilistic tracking.",
      "Fused measurements across plates to recover global positions and interactions such as touch contacts, object carrying and robot pose correction.",
      "Built the ROS 2 pipeline for sensor ingestion, calibration, synchronization, filtering and visualization, plus a multi-agent simulation for validation.",
    ],
    tags: [
      "Multi-Object Tracking",
      "State Estimation",
      "Sensor Fusion",
      "Convex Optimization",
      "HRI",
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

  // === Robot Learning & Manipulation ===
  {
    id: "rapunzel-hand",
    sortDate: "2025-02",
    title: "RAPUNZEL — Tendon-Driven Anthropomorphic Hand",
    subtitle:
      "17-DoF tendon-driven hand integrated with a Franka Panda arm, taught by demonstration.",
    category: "Robot Learning & Manipulation",
    period: "ETH Zürich · 2024 – 2025",
    org: "Soft Robotics Lab, ETH Zürich",
    summary:
      "A team project to build a 17-DoF tendon-driven robotic hand and the software stack to teach it new skills. A motion-capture teleoperation rig collects manipulation demonstrations, which the team used to train imitation-learning policies (ACT) for tasks like grasping and object reorientation. I designed and built the pipeline architecture for control, teleoperation, demonstration recording, deployment and inference.",
    highlights: [
      "Designed the ROS 2 architecture for control, motion-capture teleoperation, demonstration recording, policy deployment and inference.",
      "Team collected 600+ demonstrations across multiple manipulation tasks.",
      "Team trained ACT imitation-learning policies for autonomous execution.",
      "Policies performed tasks including grasping and in-hand reorientation.",
    ],
    tags: [
      "ROS 2",
      "MuJoCo",
      "PyTorch",
      "Imitation Learning (ACT)",
      "Policy Deployment",
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
      "Recorded about 40 hours of egocentric human and bimanual-robot demonstrations for EgoVerse, a collaborative ecosystem for human-centric robot learning.",
    category: "Robot Learning & Manipulation",
    period: "ETH Zürich · Dec 2025 – Jan 2026",
    org: "Soft Robotics Lab × EgoVerse consortium",
    summary:
      "EgoVerse is an ecosystem for robot learning from egocentric human data, built across four academic labs and three industry partners. With the Soft Robotics Lab team, I recorded human manipulation demonstrations with Aria glasses and teleoperated a bimanual system of two Franka arms with ORCA hands through Meta Quest hand tracking, about 40 hours of data in total.",
    highlights: [
      "Recorded egocentric human manipulation demonstrations with Aria glasses.",
      "Teleoperated and recorded a bimanual Franka / ORCA hand system via Meta Quest hand tracking.",
      "Contributed about 40 hours of data to a multi-lab, multi-partner robot-learning dataset.",
    ],
    tags: [
      "Data collection",
      "Egocentric",
      "Teleoperation",
      "Bimanual",
      "Robot learning",
    ],
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
    category: "Robot Learning & Manipulation",
    period: "Paris · April 2025",
    org: "Mistral AI Physical AI & Robotics Hackathon",
    summary:
      "At the Mistral AI Robotics Summit & Hackathon in Paris (April 2025), our team developed a generalized vision–language–action pipeline using NVIDIA GR00T in 48 hours, running on Hugging Face's LeRobot arms and powered by Mistral AI models.",
    highlights: [
      "End-to-end VLA pipeline assembled from scratch in 48 hours.",
      "Integrated NVIDIA GR00T with LeRobot hardware and Mistral language models.",
      "Showcased real-time language-conditioned manipulation on a real robotic arm.",
      "Demonstrated collaborative construction with tool handover between robot and human.",
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


  // === Navigation & Perception ===
  {
    id: "openfrontier",
    sortDate: "2026-07",
    title: "OpenFrontier — VLM-Grounded Frontier Navigation",
    subtitle:
      "Training-free language-conditioned navigation that uses visual frontiers as semantic anchors. RSS 2026.",
    category: "Navigation & Perception",
    period: "ETH Zürich · 2024 – 2026",
    org: "ETH Zürich · Microsoft Spatial AI Lab · University of Bonn",
    summary:
      "OpenFrontier reframes open-world navigation as a sparse subgoal identification problem. Detected visual frontiers are presented to a VLM in image space, which scores them for relevance to a natural-language goal. The grounded frontiers drive long-horizon, language-conditioned exploration without dense 3D mapping or fine-tuning, with strong zero-shot results across ObjectNav benchmarks and real-robot deployment. I implemented the semantic navigation pipeline and the Boston Dynamics Spot deployment; frontier detection builds on FrontierNet.",
    highlights: [
      "77.3% success rate on HM3D ObjectNav, zero-shot.",
      "Set-of-marks frontier prompting over single RGB observations.",
      "Real-world deployment on Boston Dynamics Spot in large indoor environments.",
      "First-author paper at Robotics: Science and Systems (RSS) 2026.",
    ],
    tags: ["VLMs", "ObjectNav", "Habitat", "Zero-shot", "ROS", "Spot"],
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
    category: "Navigation & Perception",
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
    category: "Navigation & Perception",
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
      "Built tooling to identify internal hardware bottlenecks for mobile GPUs (inspired by Romou-style benchmarks) and implemented matrix multiplication optimizations and low-bit quantization in the ExecuTorch ML framework for edge devices, reducing inference runtime by approximately 70% on representative workloads versus the previous pipeline.",
    highlights: [
      "Open-source GPU tooling for hardware-bottleneck identification.",
      "Matrix multiplication optimizations: buffer management, loop unrolling.",
      "4-bit quantization paths for edge deep-learning inference.",
      "~70% runtime reduction on representative workloads versus the previous pipeline.",
    ],
    tags: ["PyTorch", "ExecuTorch", "Vulkan", "Quantization", "On-device ML"],
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
      "Reworked a deep-learning image-enhancement pipeline, previously deployed on a virtual GPU, for efficient CPU execution on servers and AR glasses. The combination of algorithmic restructuring and systems-level optimization reduced end-to-end runtime by 99.66% while preserving output quality.",
    highlights: [
      "Algorithmic restructuring of a DL image-enhancement pipeline.",
      "System-level CPU optimizations and memory-layout tuning.",
      "99.66% runtime reduction with preserved visual quality.",
    ],
    tags: ["C++", "CPU Optimization", "ML Inference", "Image Processing"],
    cover: "autoenhance-after.webp",
    gallery: ["autoenhance-before.webp", "autoenhance-after.webp"],
  },
];
