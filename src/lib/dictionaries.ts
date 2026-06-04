import type { Locale } from "@/lib/i18n";

type NavItem = {
  label: string;
  section: string;
};

type ProjectCardDictionary = {
  title: string;
  summary: string;
  tags: readonly string[];
  status: string;
  detailsState: string;
  slug?: "lane-detection-ebike";
};

type SkillGroup = {
  title: string;
  items: readonly string[];
};

type ExperienceEntry = {
  id: "junior-engineer" | "internship";
  role: string;
  company: string;
  description: string;
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  common: {
    skipToContent: string;
    menu: string;
    openNavigationMenu: string;
    closeNavigationMenu: string;
    closeNavigationOverlay: string;
    primaryNavigation: string;
    mobileNavigation: string;
    footerNavigation: string;
    opensInNewTab: string;
    themeToggleToDark: string;
    themeToggleToLight: string;
    selectGerman: string;
    selectEnglish: string;
  };
  nav: {
    items: readonly NavItem[];
  };
  hero: {
    title: string;
    description: string;
    location: string;
    education: string;
    institution: string;
    chips: readonly string[];
    actions: {
      projects: string;
      linkedin: string;
      github: string;
      contact: string;
      resume: string;
    };
    disabledResume: string;
    availability: string;
    portraitAlt: string;
  };
  about: {
    heading: string;
    title: string;
    text: string;
    pageTitle: string;
    pageDescription: string;
    narrative: readonly string[];
    verificationNote: string;
  };
  projects: {
    heading: string;
    title: string;
    intro: string;
    cards: readonly ProjectCardDictionary[];
    pageTitle: string;
    pageDescription: string;
    pageCards: readonly ProjectCardDictionary[];
    verificationNote: string;
  };
  experience: {
    heading: string;
    title: string;
    entries: readonly ExperienceEntry[];
    pageTitle: string;
    pageDescription: string;
    verificationNote: string;
  };
  skills: {
    heading: string;
    title: string;
    groups: readonly SkillGroup[];
    pageTitle: string;
    pageDescription: string;
    evidenceGroups: readonly SkillGroup[];
    verificationGroupTitle: string;
    verificationGroupItems: readonly string[];
    verificationNote: string;
  };
  contact: {
    heading: string;
    title: string;
    text: string;
    location: string;
    actions: {
      linkedin: string;
      github: string;
      email: string;
      resume: string;
    };
    disabledEmail: string;
    disabledResume: string;
    pageTitle: string;
    pageDescription: string;
    locationCardTitle: string;
    linksCardTitle: string;
    verificationNote: string;
  };
  footer: {
    location: string;
    linkedin: string;
    github: string;
    backToTop: string;
  };
  laneDetection: {
    backLabel: string;
    category: string;
    status: string;
    title: string;
    summary: string;
    overviewHeading: string;
    overviewText: string;
    workflowHeading: string;
    workflowSteps: readonly string[];
    stepLabel: string;
    snapshotEyebrow: string;
    snapshotTitle: string;
    technologiesTitle: string;
    technologies: string;
    frameworkPlaceholder: string;
    datasetTitle: string;
    datasetSize: string;
    datasetPlaceholder: string;
    evaluationTitle: string;
    evaluationNote: string;
    evaluationPlaceholder: string;
    evidenceHeading: string;
    evidenceItems: readonly string[];
    evidencePlaceholder: string;
    linksHeading: string;
    githubPlaceholder: string;
    demoPlaceholder: string;
  };
};

const dictionaries = {
  de: {
    metadata: {
      title: "Saiankith Reddy Kolli | Applied AI und Machine Learning",
      description:
        "Portfolio von Saiankith Reddy Kolli. Applied AI, Computer Vision, Smart Sensors, Edge Systems und industrielle Anwendungen.",
    },
    common: {
      skipToContent: "Zum Inhalt springen",
      menu: "Menü",
      openNavigationMenu: "Navigationsmenü öffnen",
      closeNavigationMenu: "Navigationsmenü schließen",
      closeNavigationOverlay: "Navigationsmenü schließen",
      primaryNavigation: "Hauptnavigation",
      mobileNavigation: "Mobile Navigation",
      footerNavigation: "Footer-Links",
      opensInNewTab: "öffnet in einem neuen Tab",
      themeToggleToDark: "Zum dunklen Design wechseln",
      themeToggleToLight: "Zum hellen Design wechseln",
      selectGerman: "Deutsch auswählen",
      selectEnglish: "Select English",
    },
    nav: {
      items: [
        { label: "Start", section: "home" },
        { label: "Über mich", section: "about" },
        { label: "Projekte", section: "projects" },
        { label: "Erfahrung", section: "experience" },
        { label: "Kenntnisse", section: "skills" },
        { label: "Kontakt", section: "contact" },
      ],
    },
    hero: {
      title: "Applied AI / Machine Learning Engineer",
      description:
        "Ich studiere AI für Smart Sensors and Actuators. Ich entwickle praktische Lösungen für Computer Vision, Smart Sensors, Edge Systems und industrielle Anwendungen.",
      location: "Amberg, Deutschland",
      education: "M.Eng. AI für Smart Sensors and Actuators",
      institution: "Deggendorf Institute of Technology",
      chips: [
        "Computer Vision",
        "Machine Learning",
        "Smart Sensors",
        "Industrial AI",
      ],
      actions: {
        projects: "Projekte ansehen",
        linkedin: "LinkedIn",
        github: "GitHub",
        contact: "Kontakt",
        resume: "Lebenslauf",
      },
      disabledResume: "Lebenslauf folgt bald",
      availability:
        "Ich suche Werkstudentenstellen, Praktika, Forschungsprojekte und Masterarbeitsthemen.",
      portraitAlt: "Porträt von Saiankith Reddy Kolli",
    },
    about: {
      heading: "Über mich",
      title: "AI-Systeme für die reale Welt",
      text: "Ich verbinde industrielle Erfahrung mit Applied AI. Durch mein Studium im Chemieingenieurwesen und meine Arbeit in der Pharmaindustrie kenne ich Prozesse, Monitoring, Sensoren, Aktoren, Automatisierung, PFDs und P&IDs. Heute studiere ich AI für Smart Sensors and Actuators und arbeite an Projekten mit Computer Vision, Smart Sensors und Edge Systems.",
      pageTitle: "Ein interdisziplinärer Weg in Applied AI",
      pageDescription:
        "Diese Übersicht zeigt nur geprüfte öffentliche Informationen. Weitere Ausbildungsdetails werden noch geprüft.",
      narrative: [
        "Chemieingenieurwesen hat mein Systemdenken und mein Prozessverständnis aufgebaut.",
        "Die Arbeit in der Pharmaindustrie brachte mir Monitoring, Sensoren, Aktoren und Automatisierung näher.",
        "Das M.Eng.-Studium erweitert mein Wissen in Applied AI, Computer Vision, Smart Sensors und Edge Systems.",
        "Projekte zeigen praktische Arbeit in diesem Bereich.",
      ],
      verificationNote:
        "Prüfhinweis: Ausbildungsdaten und einige Institutionsdetails bleiben im Source-of-Truth noch als TODO: VERIFY markiert und werden hier bewusst nicht erweitert.",
    },
    projects: {
      heading: "Projekte",
      title:
        "Ausgewählte Projekte aus Computer Vision, Smart Sensors und intelligenten Systemen.",
      intro: "Ausgewählte Projekte aus Computer Vision, Smart Sensors und intelligenten Systemen.",
      cards: [
        {
          title: "Lane Detection für E-Bike Perception",
          summary:
            "Kamerabasierte Lane Detection mit Bildvorverarbeitung und Deep-Learning-Training für ein E-Bike-Perception-Projekt.",
          tags: ["Computer Vision", "OpenCV", "Deep Learning"],
          status: "Status: TODO: VERIFY",
          detailsState: "Details ansehen",
          slug: "lane-detection-ebike",
        },
        {
          title: "UV-Messung und automatische Rollladensteuerung",
          summary:
            "Smart-Sensor-Projekt mit UV-Monitoring, Bluetooth-Kommunikation, Edge-Device-Architektur und automatischer Rollladensteuerung.",
          tags: ["Smart Sensors", "Bluetooth", "Edge Systems"],
          status: "Status: TODO: VERIFY",
          detailsState: "Details folgen bald",
        },
        {
          title: "TurtleBot3 Linienverfolgung und Hinderniserkennung",
          summary:
            "ROS2-Hochschulprojekt mit kamerabasierter Linienverfolgung, LiDAR-Hinderniserkennung und Steuerlogik.",
          tags: ["ROS2", "OpenCV", "LiDAR"],
          status: "In Arbeit",
          detailsState: "Details folgen bald",
        },
      ],
      pageTitle: "Projektrichtung und Nachweisstatus",
      pageDescription:
        "Diese Projektübersicht nutzt nur geprüfte Aussagen aus dem Master-Dokument. Das Lane-Detection-Projekt hat bereits eine erste Detailseite. Andere Detailseiten bleiben noch geschlossen, bis die Nachweise geprüft sind.",
      pageCards: [
        {
          title: "Lane Detection für E-Bike Perception",
          summary:
            "Kamerabasierte Lane Detection mit Bildvorverarbeitung und Deep-Learning-Training für ein E-Bike-Perception-Projekt.",
          tags: ["Computer Vision", "OpenCV", "Deep Learning"],
          status: "Status: TODO: VERIFY",
          detailsState: "Details ansehen",
          slug: "lane-detection-ebike",
        },
        {
          title: "UV-Messung und automatische Rollladensteuerung",
          summary:
            "Smart-Sensor-Projekt mit UV-Monitoring, Bluetooth-Kommunikation, Edge-Device-Architektur und automatischer Rollladensteuerung.",
          tags: ["Smart Sensors", "Bluetooth", "Edge Systems"],
          status: "Status: TODO: VERIFY",
          detailsState: "Details folgen bald",
        },
        {
          title: "TurtleBot3 Linienverfolgung und Hinderniserkennung",
          summary:
            "ROS2-Hochschulprojekt mit kamerabasierter Linienverfolgung, LiDAR-Hinderniserkennung und Steuerlogik.",
          tags: ["ROS2", "OpenCV", "LiDAR"],
          status: "In Arbeit",
          detailsState: "Details folgen bald",
        },
        {
          title: "Sentinel Enterprise RAG Assistant",
          summary:
            "Enterprise-RAG-Assistent ist noch in Arbeit. Nur wirklich umgesetzte Teile werden später veröffentlicht. Geplante Funktionen bleiben getrennt.",
          tags: ["In Progress", "Enterprise RAG"],
          status: "In Arbeit",
          detailsState: "Veröffentlichung nach Prüfung",
        },
      ],
      verificationNote:
        "Prüfhinweis: Die Zahl von 95 % Accuracy wird hier nicht hervorgehoben, weil ihre genaue Bedeutung und Evaluation noch TODO: VERIFY ist.",
    },
    experience: {
      heading: "Erfahrung",
      title: "Industrielle Erfahrung",
      entries: [
        {
          id: "junior-engineer",
          role: "Junior Engineer",
          company: "Hetero Labs Ltd.",
          description:
            "Erfahrung mit Pharma-Prozessen, Monitoring, Sensoren, Aktoren, Automatisierung, PFDs und P&IDs.",
        },
        {
          id: "internship",
          role: "Praktikant",
          company: "Aurobindo Pharma Ltd.",
          description: "Praktikum in der Pharmaindustrie.",
        },
      ],
      pageTitle: "Industrielle Erfahrung als praktischer Kontext",
      pageDescription:
        "Diese Seite bleibt bewusst kurz, bis Daten, Orte, Abteilungen und Aufgaben vollständig geprüft sind.",
      verificationNote:
        "Prüfhinweis: Beschäftigungsdaten, Abteilungen, Städte und Erfolgsbullets bleiben TODO: VERIFY.",
    },
    skills: {
      heading: "Kenntnisse",
      title: "Zentrale Kompetenzbereiche",
      groups: [
        {
          title: "AI / Computer Vision",
          items: [
            "Python",
            "OpenCV",
            "Computer Vision",
            "Bildvorverarbeitung",
            "Deep Learning",
          ],
        },
        {
          title: "Smart Sensors / Edge Systems",
          items: [
            "Smart Sensors",
            "Edge-System-Konzepte",
            "Bluetooth-Kommunikation",
            "Sensoren und Aktoren",
          ],
        },
        {
          title: "Industrielles Engineering",
          items: [
            "Prozess-Monitoring",
            "Automatisierung",
            "PFDs",
            "P&IDs",
            "Pharma-Prozesse",
          ],
        },
      ],
      pageTitle: "Kenntnisse nach Nachweisstand",
      pageDescription:
        "Geprüfte Kenntnisse bleiben getrennt von Punkten, die vor einer öffentlichen Darstellung noch bestätigt werden müssen.",
      evidenceGroups: [
        {
          title: "Industrielle Erfahrung",
          items: [
            "Prozess-Monitoring",
            "Sensoren und Aktoren",
            "Automatisierung",
            "PFDs",
            "P&IDs",
          ],
        },
        {
          title: "In Projekten genutzt",
          items: [
            "Python",
            "OpenCV",
            "Computer Vision",
            "Bildvorverarbeitung",
            "Deep Learning",
            "Smart-Sensor-Konzepte",
            "Bluetooth-Kommunikation",
            "Edge-Device-Konzepte",
            "ROS2",
            "LiDAR-Hinderniserkennung",
            "Gazebo",
            "RViz2",
          ],
        },
      ],
      verificationGroupTitle: "Vor Veröffentlichung prüfen",
      verificationGroupItems: [
        "Genaue ML-Frameworks",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "SQL",
        "Git und GitHub",
        "Linux",
        "Docker",
        "APIs",
        "FastAPI",
        "Cloud-Services",
        "Mikrocontroller",
        "Embedded-Sprachen",
        "Deutsch-Niveau",
        "Englisch-Niveau",
      ],
      verificationNote:
        "Prüfhinweis: Nicht geprüfte Tools und Sprachniveaus bleiben bewusst getrennt und werden hier nicht als bestätigte Kenntnisse gezeigt.",
    },
    contact: {
      heading: "Kontakt",
      title: "Lassen Sie uns sprechen",
      text: "Ich suche Werkstudentenstellen, Praktika, Forschungsprojekte und Masterarbeitsthemen im Bereich Applied AI, Computer Vision, Smart Sensors und industrielle Systeme.",
      location: "Amberg, Deutschland",
      actions: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "E-Mail",
        resume: "Lebenslauf",
      },
      disabledEmail: "E-Mail folgt bald",
      disabledResume: "Lebenslauf folgt bald",
      pageTitle: "Kontaktstatus und Fokus",
      pageDescription:
        "Öffentliche Kontaktangaben bleiben bewusst konservativ, bis Links und der Lebenslauf-Dateiname geprüft sind.",
      locationCardTitle: "Ort und Fokus",
      linksCardTitle: "Kontaktlinks",
      verificationNote:
        "Prüfhinweis: Professionelle E-Mail und Lebenslauf-Download bleiben TODO: VERIFY, bis die öffentlichen Werte bestätigt sind.",
    },
    footer: {
      location: "Amberg, Deutschland",
      linkedin: "LinkedIn",
      github: "GitHub",
      backToTop: "Nach oben",
    },
    laneDetection: {
      backLabel: "Zurück zu den Projekten",
      category: "Computer Vision",
      status: "Status: TODO: VERIFY",
      title: "Lane Detection für E-Bike Perception",
      summary:
        "Kamerabasierte Lane Detection mit Bildvorverarbeitung und Deep-Learning-Training für ein E-Bike-Perception-Projekt.",
      overviewHeading: "Überblick",
      overviewText:
        "Das Projekt untersucht kamerabasierte Lane Detection für ein E-Bike. Der Workflow nutzt Kameraeingaben, Bildvorverarbeitung und Deep-Learning-Training.",
      workflowHeading: "Workflow",
      workflowSteps: [
        "Kameraeingabe",
        "Bildvorverarbeitung",
        "Deep-Learning-Workflow",
        "Lane-Detection-Ausgabe",
      ],
      stepLabel: "Schritt",
      snapshotEyebrow: "Snapshot",
      snapshotTitle: "Technischer Überblick",
      technologiesTitle: "Technologien",
      technologies: "Python · OpenCV · Deep Learning",
      frameworkPlaceholder: "TODO: VERIFY Framework",
      datasetTitle: "Datensatz",
      datasetSize: "Ca. 35.000 Bilder",
      datasetPlaceholder: "TODO: VERIFY Quelle und genaue Aufteilung",
      evaluationTitle: "Evaluation",
      evaluationNote:
        "Ein Ergebnis von 95 % Accuracy ist in den Projekt-Notizen vorhanden. Die Definition und die Evaluationsmethode müssen noch geprüft werden.",
      evaluationPlaceholder: "TODO: VERIFY Metrik und Evaluationsmethode",
      evidenceHeading: "Nachweise",
      evidenceItems: [
        "Eingabebild",
        "Vorverarbeitetes Bild",
        "Prediction Output",
        "Training oder Evaluation",
      ],
      evidencePlaceholder: "TODO: VERIFIED SCREENSHOT HINZUFÜGEN",
      linksHeading: "Links",
      githubPlaceholder: "TODO: VERIFY GitHub Repository",
      demoPlaceholder: "TODO: VERIFY Demo",
    },
  },
  en: {
    metadata: {
      title: "Saiankith Reddy Kolli | Applied AI and Machine Learning",
      description:
        "Portfolio of Saiankith Reddy Kolli. Applied AI, computer vision, smart sensors, edge systems, and industrial applications.",
    },
    common: {
      skipToContent: "Skip to content",
      menu: "Menu",
      openNavigationMenu: "Open navigation menu",
      closeNavigationMenu: "Close navigation menu",
      closeNavigationOverlay: "Close navigation menu",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
      footerNavigation: "Footer links",
      opensInNewTab: "opens in a new tab",
      themeToggleToDark: "Switch to dark theme",
      themeToggleToLight: "Switch to light theme",
      selectGerman: "Deutsch auswählen",
      selectEnglish: "Select English",
    },
    nav: {
      items: [
        { label: "Home", section: "home" },
        { label: "About", section: "about" },
        { label: "Projects", section: "projects" },
        { label: "Experience", section: "experience" },
        { label: "Skills", section: "skills" },
        { label: "Contact", section: "contact" },
      ],
    },
    hero: {
      title: "Applied AI / Machine Learning Engineer",
      description:
        "M.Eng. student building practical solutions for computer vision, smart sensors, edge systems, and industrial applications.",
      location: "Amberg, Germany",
      education: "M.Eng. in AI for Smart Sensors and Actuators",
      institution: "Deggendorf Institute of Technology",
      chips: [
        "Computer Vision",
        "Machine Learning",
        "Smart Sensors",
        "Industrial AI",
      ],
      actions: {
        projects: "View Projects",
        linkedin: "LinkedIn",
        github: "GitHub",
        contact: "Contact",
        resume: "Download Resume",
      },
      disabledResume: "Resume coming soon",
      availability:
        "Open to working-student, internship, research-assistant, and master's-thesis opportunities.",
      portraitAlt: "Portrait of Saiankith Reddy Kolli",
    },
    about: {
      heading: "About",
      title: "AI systems for the physical world",
      text: "I combine an industrial-engineering foundation with applied-AI project work. My pharmaceutical-industry experience introduced me to process monitoring, sensors, actuators, automation, PFDs, and P&IDs. I am now pursuing an M.Eng. in AI for Smart Sensors and Actuators at Deggendorf Institute of Technology.",
      pageTitle: "An interdisciplinary path into applied AI",
      pageDescription:
        "This overview keeps to verified public information while fuller education details continue to be checked.",
      narrative: [
        "Chemical engineering developed systems thinking and process understanding.",
        "Pharmaceutical-industry experience introduced industrial monitoring, sensors, actuators, and automation.",
        "The M.Eng. degree develops applied-AI, computer-vision, smart-sensor, and edge-system knowledge.",
        "Projects provide practical evidence.",
      ],
      verificationNote:
        "Verification note: education dates and some institution details remain marked as TODO: VERIFY in the source-of-truth file and are intentionally not expanded here yet.",
    },
    projects: {
      heading: "Projects",
      title: "Selected projects at a glance",
      intro:
        "Selected projects from computer vision, smart sensors, and intelligent systems.",
      cards: [
        {
          title: "Lane Detection for E-Bike Perception",
          summary:
            "Camera-based lane detection using image preprocessing and deep-learning training for an e-bike perception use case.",
          tags: ["Computer Vision", "OpenCV", "Deep Learning"],
          status: "Status: TODO: VERIFY",
          detailsState: "View Details",
          slug: "lane-detection-ebike",
        },
        {
          title: "UV Measurement and Automated Roller-Blind Steering",
          summary:
            "Smart-sensor project involving UV monitoring, Bluetooth communication, edge-device architecture, and automated roller-blind control.",
          tags: ["Smart Sensors", "Bluetooth", "Edge Systems"],
          status: "Status: TODO: VERIFY",
          detailsState: "Details coming soon",
        },
        {
          title: "TurtleBot3 Line Following and Obstacle Avoidance",
          summary:
            "ROS2 academic project combining camera-based line tracking with LiDAR-based static-obstacle detection and control logic.",
          tags: ["ROS2", "OpenCV", "LiDAR"],
          status: "In progress",
          detailsState: "Details coming soon",
        },
      ],
      pageTitle: "Project directions and evidence status",
      pageDescription:
        "These project summaries use only verified claims from the master content document. The lane-detection project now has an initial case study page, while the remaining project detail views stay unavailable until their evidence is reviewed.",
      pageCards: [
        {
          title: "Lane Detection for E-Bike Perception",
          summary:
            "Camera-based lane detection using image preprocessing and deep-learning training for an e-bike perception use case.",
          tags: ["Computer Vision", "OpenCV", "Deep Learning"],
          status: "Status: TODO: VERIFY",
          detailsState: "View Details",
          slug: "lane-detection-ebike",
        },
        {
          title: "UV Measurement and Automated Roller-Blind Steering",
          summary:
            "Smart-sensor project involving UV monitoring, Bluetooth communication, edge-device architecture, and automated roller-blind control.",
          tags: ["Smart Sensors", "Bluetooth", "Edge Systems"],
          status: "Status: TODO: VERIFY",
          detailsState: "Details coming soon",
        },
        {
          title: "TurtleBot3 Line Following and Obstacle Avoidance",
          summary:
            "ROS2 academic project combining camera-based line tracking with LiDAR-based static-obstacle detection and control logic.",
          tags: ["ROS2", "OpenCV", "LiDAR"],
          status: "In progress",
          detailsState: "Details coming soon",
        },
        {
          title: "Sentinel Enterprise RAG Assistant",
          summary:
            "Enterprise RAG assistant concept in progress. Only implemented components will be published later, with planned functionality kept separate.",
          tags: ["In Progress", "Enterprise RAG"],
          status: "In progress",
          detailsState: "Publication deferred until implementation is verified",
        },
      ],
      verificationNote:
        "Verification note: the lane-detection accuracy figure is not promoted here because its evaluation meaning still requires TODO: VERIFY.",
    },
    experience: {
      heading: "Experience",
      title: "Industrial experience",
      entries: [
        {
          id: "junior-engineer",
          role: "Junior Engineer",
          company: "Hetero Labs Ltd.",
          description:
            "Experience with pharmaceutical-industry processes, monitoring, sensors, actuators, automation, PFDs, and P&IDs.",
        },
        {
          id: "internship",
          role: "Intern",
          company: "Aurobindo Pharma Ltd.",
          description: "Pharmaceutical-industry internship experience.",
        },
      ],
      pageTitle: "Industrial exposure shaping practical engineering context",
      pageDescription:
        "This page stays intentionally high level until dates, locations, departments, and responsibility details are fully verified.",
      verificationNote:
        "Verification note: employment dates, departments, cities, and achievement bullets remain TODO: VERIFY.",
    },
    skills: {
      heading: "Skills",
      title: "Core skill areas",
      groups: [
        {
          title: "AI / Computer Vision",
          items: [
            "Python",
            "OpenCV",
            "Computer Vision",
            "Image Preprocessing",
            "Deep Learning",
          ],
        },
        {
          title: "Smart Sensors / Edge Systems",
          items: [
            "Smart Sensors",
            "Edge-System Concepts",
            "Bluetooth Communication",
            "Sensors and Actuators",
          ],
        },
        {
          title: "Industrial Engineering",
          items: [
            "Process Monitoring",
            "Automation",
            "PFDs",
            "P&IDs",
            "Pharmaceutical Processes",
          ],
        },
      ],
      pageTitle: "Skills grouped by evidence level",
      pageDescription:
        "Verified skills are separated from items that still need confirmation before they are presented as established strengths.",
      evidenceGroups: [
        {
          title: "Industrial Exposure",
          items: [
            "Process monitoring",
            "Sensors and actuators",
            "Automation",
            "PFDs",
            "P&IDs",
          ],
        },
        {
          title: "Used in Projects",
          items: [
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
        },
      ],
      verificationGroupTitle: "TODO: VERIFY before adding",
      verificationGroupItems: [
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
      verificationNote:
        "Verification note: unverified tools and language levels remain separate by design and are not presented here as confirmed skills.",
    },
    contact: {
      heading: "Contact",
      title: "Let's connect",
      text: "I am open to working-student, internship, research-assistant, and master's-thesis opportunities involving applied AI, computer vision, smart sensors, and industrial systems.",
      location: "Amberg, Germany",
      actions: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email",
        resume: "Download Resume",
      },
      disabledEmail: "Email coming soon",
      disabledResume: "Resume coming soon",
      pageTitle: "Opportunity overview and verified contact status",
      pageDescription:
        "Contact publishing is intentionally conservative until public links and the resume filename are verified.",
      locationCardTitle: "Location and Opportunity Focus",
      linksCardTitle: "Contact Links",
      verificationNote:
        "Verification note: professional email and resume download remain in TODO: VERIFY state until their public values are confirmed.",
    },
    footer: {
      location: "Amberg, Germany",
      linkedin: "LinkedIn",
      github: "GitHub",
      backToTop: "Back to top",
    },
    laneDetection: {
      backLabel: "Back to Projects",
      category: "Computer Vision",
      status: "Status: TODO: VERIFY",
      title: "Lane Detection for E-Bike Perception",
      summary:
        "Camera-based lane-detection project involving image preprocessing and deep-learning training for an e-bike perception use case.",
      overviewHeading: "Overview",
      overviewText:
        "This project explores camera-based lane detection for an e-bike perception use case, with image preprocessing and deep-learning training forming the current verified workflow.",
      workflowHeading: "Workflow",
      workflowSteps: [
        "Camera Input",
        "Image Preprocessing",
        "Deep-Learning Workflow",
        "Lane-Detection Output",
      ],
      stepLabel: "Step",
      snapshotEyebrow: "Snapshot",
      snapshotTitle: "Technical snapshot",
      technologiesTitle: "Technologies",
      technologies: "Python · OpenCV · Deep Learning",
      frameworkPlaceholder: "TODO: VERIFY framework",
      datasetTitle: "Dataset",
      datasetSize: "Approximately 35,000 images",
      datasetPlaceholder: "TODO: VERIFY source and exact split",
      evaluationTitle: "Evaluation",
      evaluationNote:
        "A stated 95% accuracy result requires verification before publication.",
      evaluationPlaceholder: "TODO: VERIFY metric definition and evaluation method",
      evidenceHeading: "Evidence",
      evidenceItems: [
        "Input image",
        "Preprocessed image",
        "Prediction output",
        "Training or Evaluation Visual",
      ],
      evidencePlaceholder: "TODO: ADD VERIFIED SCREENSHOT",
      linksHeading: "Links",
      githubPlaceholder: "TODO: VERIFY GitHub repository",
      demoPlaceholder: "TODO: VERIFY demo",
    },
  },
} satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
