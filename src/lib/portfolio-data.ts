export const homepageHero = {
  title: "Applied AI / Machine Learning Engineer",
  positioning:
    "M.Eng. student building practical solutions for computer vision, smart sensors, edge systems, and industrial applications.",
  education:
    "M.Eng. in AI for Smart Sensors and Actuators",
  institution: "Deggendorf Institute of Technology",
  availability:
    "Open to working-student, internship, research-assistant, and master's-thesis opportunities.",
  chips: [
    "Computer Vision",
    "Machine Learning",
    "Smart Sensors",
    "Industrial AI",
  ],
} as const;
export const opportunityFocus =
  "I am open to working-student, internship, research-assistant, and master's-thesis opportunities involving applied AI, computer vision, smart sensors, and industrial systems." as const;

export const aboutPreview =
  "I combine an industrial-engineering foundation with applied-AI project work. My pharmaceutical-industry experience introduced me to process monitoring, sensors, actuators, automation, PFDs, and P&IDs. I am now pursuing an M.Eng. in AI for Smart Sensors and Actuators at Deggendorf Institute of Technology." as const;

export const aboutNarrative = [
  "Chemical engineering developed systems thinking and process understanding.",
  "Pharmaceutical-industry experience introduced industrial monitoring, sensors, actuators, and automation.",
  "The M.Eng. degree develops applied-AI, computer-vision, smart-sensor, and edge-system knowledge.",
  "Projects provide practical evidence.",
] as const;

export const featuredProjects = [
  {
    title: "Lane Detection for E-Bike Perception",
    summary:
      "Camera-based lane detection using image preprocessing and deep-learning training for an e-bike perception use case.",
    tags: ["Computer Vision", "OpenCV", "Deep Learning"],
    status: "Status: TODO: VERIFY",
    detailsState: "View Details",
    href: "/projects/lane-detection-ebike",
    imageSrc: "/images/projects/lane-detection-visual.svg",
    imageAlt: "Abstract illustration of lane-detection perception and output flow",
  },
  {
    title: "UV Measurement and Automated Roller-Blind Steering",
    summary:
      "Smart-sensor project involving UV monitoring, Bluetooth communication, edge-device architecture, and automated roller-blind control.",
    tags: ["Smart Sensors", "Bluetooth", "Edge Systems"],
    status: "Status: TODO: VERIFY",
    detailsState: "Details coming soon",
    href: undefined,
    imageSrc: "/images/projects/uv-roller-blind-visual.svg",
    imageAlt: "Abstract illustration of UV sensing and automated blind control",
  },
] as const;

export const homepageProjects = [
  ...featuredProjects,
  {
    title:
      "TurtleBot3 Line Following and Obstacle Avoidance",
    summary:
      "ROS2 academic project combining camera-based line tracking with LiDAR-based static-obstacle detection and control logic.",
    tags: ["ROS2", "OpenCV", "LiDAR"],
    status: "In progress",
    detailsState: "Details coming soon",
    href: undefined,
    imageSrc: "/images/projects/turtlebot-visual.svg",
    imageAlt: "Abstract illustration of TurtleBot line following and obstacle avoidance",
  },
] as const;

export const projectOverview = [
  ...homepageProjects,
  {
    title: "Sentinel Enterprise RAG Assistant",
    summary:
      "Enterprise RAG assistant concept in progress. Only implemented components will be published later, with planned functionality kept separate.",
    tags: ["In Progress", "Enterprise RAG"],
    status: "In progress",
    detailsState: "Publication deferred until implementation is verified",
    href: undefined,
    imageSrc: undefined,
    imageAlt: undefined,
  },
] as const;

export const laneDetectionProject = {
  title: "Lane Detection for E-Bike Perception",
  category: "Computer Vision",
  status: "TODO: VERIFY status",
  summary:
    "Camera-based lane-detection project involving image preprocessing and deep-learning training for an e-bike perception use case.",
  overview:
    "This project explores camera-based lane detection for an e-bike perception use case, with image preprocessing and deep-learning training forming the current verified workflow.",
  workflow: [
    "Camera Input",
    "Image Preprocessing",
    "Deep-Learning Workflow",
    "Lane-Detection Output",
  ],
  technologies: "Python · OpenCV · Deep Learning",
  dataset: {
    approximateSize: "Approximately 35,000 images",
    placeholder: "TODO: VERIFY source and exact split",
  },
  evaluationNote:
    "A stated 95% accuracy result requires verification before publication.",
  evaluationPlaceholder: "TODO: VERIFY metric definition and evaluation method",
  visualEvidence: [
    "Input image",
    "Preprocessed image",
    "Prediction output",
    "Training or Evaluation Visual",
  ],
} as const;

export const experienceEntries = [
  {
    id: "junior-engineer",
    role: "Junior Engineer",
    company: "Hetero Labs Ltd.",
    description:
      "Pharmaceutical-industry processes, monitoring, sensors, actuators, automation, PFDs, and P&IDs.",
  },
  {
    id: "internship",
    role: "Intern",
    company: "Aurobindo Pharma Ltd.",
    description: "Pharmaceutical-industry internship experience.",
  },
] as const;

export const skillsByEvidence = {
  industrialExposure: [
    "Process monitoring",
    "Sensors and actuators",
    "Automation",
    "PFDs",
    "P&IDs",
  ],
  usedInProjects: [
    "Python",
    "OpenCV",
    "Computer vision",
    "Image preprocessing",
    "Deep learning",
    "Smart-sensor concepts",
    "Bluetooth communication",
    "Edge-device concepts",
    "ROS2",
    "LiDAR-based obstacle detection",
    "Gazebo",
    "RViz2",
  ],
  todoVerifyBeforeAdding: [
    "Exact ML frameworks",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "SQL",
    "Git and GitHub",
    "Linux",
    "Docker",
    "APIs",
    "FastAPI",
    "Cloud services",
    "Microcontrollers",
    "Embedded programming languages",
    "German-language level",
    "English-language level",
  ],
  aiComputerVision: [
    "Python",
    "OpenCV",
    "Computer Vision",
    "Image Preprocessing",
    "Deep Learning",
  ],
  smartSensorsEdgeSystems: [
    "Smart Sensors",
    "Edge-System Concepts",
    "Bluetooth Communication",
    "Sensors and Actuators",
  ],
  industrialEngineering: [
    "Process Monitoring",
    "Automation",
    "PFDs",
    "P&IDs",
    "Pharmaceutical Processes",
  ],
} as const;
