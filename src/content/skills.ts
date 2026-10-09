import type { LanguageItem, SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    group: "Autonomy & Spatial Intelligence",
    items: [
      "SLAM",
      "Autonomous navigation",
      "Multi-agent localization",
      "Sensor fusion",
      "State estimation",
      "Motion & path planning",
      "Frontier exploration",
    ],
  },
  {
    group: "Perception",
    items: [
      "Vision–language models",
      "3D LiDAR",
      "RGB-D vision",
      "Point-cloud processing",
      "OpenCV",
      "SAM3",
      "YOLO",
      "Force sensing",
    ],
  },
  {
    group: "Robotics Software & Hardware",
    items: [
      "ROS / ROS 2",
      "Nav2",
      "Real-time pipelines",
      "Robot bring-up",
      "Boston Dynamics Spot Arm",
      "Reachy 2",
      "Franka Panda / Duo",
      "TurtleBot 3",
    ],
  },
  {
    group: "Robot Learning & Simulation",
    items: [
      "PyTorch",
      "Imitation learning",
      "Reinforcement learning",
      "Behavior cloning",
      "Sim-to-real",
      "Isaac Sim / Isaac Lab",
      "MuJoCo",
      "Habitat",
      "PyBullet",
    ],
  },
  {
    group: "Optimization & Control",
    items: [
      "Model Predictive Control",
      "Trajectory optimization",
      "Kinematics",
      "Kalman filtering",
      "Convex optimization",
      "ADMM",
      "CVXPY",
    ],
  },
  {
    group: "Programming & Systems",
    items: [
      "Python",
      "C++",
      "CUDA",
      "Linux",
      "Git",
      "C",
      "Bash",
      "GPU optimization",
      "Multithreading",
      "ExecuTorch",
      "Vulkan",
    ],
  },
];

export const languages: LanguageItem[] = [
  { language: "Spanish", level: "Native" },
  { language: "English", level: "Fluent" },
  { language: "German", level: "Conversational" },
];
