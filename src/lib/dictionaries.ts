import type { Locale } from "@/lib/i18n";
import type {
  ProjectCardId,
  PublishedProjectSlug,
} from "@/lib/portfolio-data";

type NavItem = {
  label: string;
  section: string;
};

type ProjectCardDictionary = {
  id: ProjectCardId;
  title: string;
  summary: string;
  tags: readonly string[];
  status: string;
  imageAlt: string;
  imagePlaceholder?: string;
  detailsState?: string;
  slug?: PublishedProjectSlug;
};

type ProjectGroupDictionary = {
  heading: string;
};

type SkillGroup = {
  title: string;
  items: readonly string[];
};

type ExperienceEntry = {
  id: "junior-engineer" | "internship";
  role: string;
  company: string;
  bullets: readonly string[];
};

type ProjectSnapshotItem = {
  label: string;
  value: string;
};

type DrugFeedbackDictionary = {
  backLabel: string;
  status: string;
  title: string;
  summary: string;
  heroImageAlt: string;
  actions: {
    liveDemo: string;
    tryPredictions: string;
    viewGithub: string;
    githubDisabled: string;
  };
  snapshot: {
    eyebrow: string;
    title: string;
    items: readonly ProjectSnapshotItem[];
  };
  problem: {
    eyebrow: string;
    title: string;
    text: string;
  };
  impact: {
    eyebrow: string;
    title: string;
    text: string;
  };
  contribution: {
    eyebrow: string;
    title: string;
    items: readonly string[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    stepLabel: string;
    steps: readonly string[];
  };
  demo: {
    eyebrow: string;
    title: string;
    text: string;
    steps: readonly string[];
    actions: {
      openDemo: string;
      tryPredictions: string;
    };
  };
  results: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: readonly {
      title: string;
      value: string;
      description: string;
    }[];
    closing: string;
  };
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
    summaryLines: readonly [string, string];
    metadataRow: string;
    location: string;
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
    projectGroups: {
      academic: ProjectGroupDictionary;
      personal: ProjectGroupDictionary;
    };
    actions: {
      viewCaseStudy: string;
      tryLiveDemo: string;
      github: string;
      liveDemoOpensInNewTab: string;
      githubDisabled: string;
    };
    cards: readonly ProjectCardDictionary[];
    pageTitle: string;
    pageDescription: string;
    pageCards: readonly ProjectCardDictionary[];
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
  trafficSignDetection: {
    backLabel: string;
    category: string;
    title: string;
    summary: string;
    visualPlaceholder: string;
    overviewHeading: string;
    overviewText: string;
    workflowHeading: string;
    workflowSteps: readonly string[];
    contribution: {
      eyebrow: string;
      title: string;
      items: readonly string[];
    };
    stepLabel: string;
    technicalOverviewEyebrow: string;
    technicalOverviewTitle: string;
    technicalOverviewItems: readonly ProjectSnapshotItem[];
  };
  uvMonitoringRollerBlind: {
    backLabel: string;
    category: string;
    title: string;
    summary: string;
    overviewHeading: string;
    overviewText: string;
    contributionHeading: string;
    contributionItems: readonly string[];
    demonstratedHeading: string;
    demonstratedItems: readonly string[];
    limitationHeading: string;
    limitationText: string;
    technicalConceptsHeading: string;
    technicalConcepts: readonly string[];
  };
  drugFeedback: DrugFeedbackDictionary;
};

const dictionaries = {
  de: {
    metadata: {
      title: "Saiankith Reddy Kolli | LLM Engineer | AI / ML Engineer",
      description:
        "Portfolio von Saiankith Reddy Kolli. Machine Learning, Computer Vision, Smart Sensors, Edge Systems, Datenanalyse und industrielle Anwendungen.",
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
      title: "LLM Engineer | AI / ML Engineer",
      summaryLines: [
        "M.Eng.-Student mit Projekten in Machine Learning, Computer Vision, Data Analytics und LLM-Anwendungen.",
        "Ich entwickle intelligente Software für reale Anwendungen.",
      ],
      metadataRow:
        "Amberg, Deutschland · M.Eng. AI für Smart Sensors and Actuators · Deggendorf Institute of Technology",
      location: "Amberg, Deutschland",
      chips: [
        "Computer Vision",
        "Machine Learning",
        "LLM Applications",
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
        "Offen für Werkstudentenstellen, Praktika, Forschungsprojekte und Masterarbeitsthemen.",
      portraitAlt: "Porträt von Saiankith Reddy Kolli",
    },
      about: {
      heading: "Über mich",
      title: "Über mich",
      text: "Ich studiere AI für Smart Sensors and Actuators an der Deggendorf Institute of Technology. Mein Fokus liegt auf AI/ML, Computer Vision, Data Analytics, LLM-Anwendungen und interaktiven Softwareprojekten. Meine Erfahrung aus der Pharmaindustrie hilft mir beim Verständnis von Monitoring, Sensoren, Automatisierung und realen Prozessumgebungen.",
      pageTitle: "Über mich",
      pageDescription:
        "Diese Übersicht zeigt nur geprüfte öffentliche Informationen. Weitere Ausbildungsdetails werden noch geprüft.",
      narrative: [
        "Chemieingenieurwesen hat mein Systemdenken und mein Prozessverständnis aufgebaut.",
        "Die Arbeit in der Pharmaindustrie brachte mir Monitoring, Sensoren, Aktoren und Automatisierung näher.",
        "Das M.Eng.-Studium erweitert mein Wissen in Machine Learning, Computer Vision, Smart Sensors und Edge Systems.",
        "Projekte zeigen praktische Arbeit in diesem Bereich.",
      ],
      verificationNote:
        "Prüfhinweis: Ausbildungsdaten und einige Institutionsdetails bleiben im Source-of-Truth noch als TODO: VERIFY markiert und werden hier bewusst nicht erweitert.",
    },
    projects: {
      heading: "Projekte",
      title: "Projekte",
      projectGroups: {
        academic: {
          heading: "Akademische Projekte",
        },
        personal: {
          heading: "Persönliche Projekte",
        },
      },
      actions: {
        viewCaseStudy: "Projektdetails ansehen",
        tryLiveDemo: "Live-Demo testen",
        github: "GitHub",
        liveDemoOpensInNewTab: "Live-Demo öffnet in einem neuen Tab",
        githubDisabled: "GitHub",
      },
      cards: [
        {
          id: "traffic-sign-detection-ebike",
          title: "Verkehrszeichenerkennung für E-Bike-Sicherheit",
          summary:
            "Computer-Vision-System zur Erkennung und Klassifikation deutscher Verkehrszeichen für E-Bike-Szenarien. Ein SSD-MobileNetV2-Modell wurde implementiert, trainiert und mit YOLOv11n verglichen.",
          tags: [
            "Computer Vision",
            "TensorFlow",
            "SSD MobileNetV2",
            "Object Detection",
            "YOLOv11n",
          ],
          status: "Abgeschlossen",
          imageAlt:
            "Traffic sign detection and classification workflow for e-bike safety",
          imagePlaceholder:
            "Verifizierte Projektvisualisierung ist derzeit nicht verfügbar.",
          slug: "traffic-sign-detection-ebike",
        },
        {
          id: "uv-monitoring-roller-blind",
          title: "UV-Monitoring und Rollladensteuerung",
          summary:
            "Raspberry-Pi-basiertes Hochschulprojekt für UV-Messung, CSV-Logging, manuelle Rollladensteuerung und Systemprüfung in einer Master-Slave-Architektur.",
          tags: ["Raspberry Pi", "I²C", "BLE", "ADC Interfacing", "CSV Logging"],
          status: "Abgeschlossen",
          imageAlt:
            "Abstrakte Illustration von UV-Sensorik und automatischer Rollladensteuerung",
          slug: "uv-monitoring-roller-blind",
        },
        {
          id: "turtlebot3-line-following",
          title: "TurtleBot3 Linienverfolgung und Hinderniserkennung",
          summary:
            "ROS2-Hochschulprojekt mit kamerabasierter Linienverfolgung, LiDAR-Hinderniserkennung und Steuerlogik.",
          tags: ["ROS2", "OpenCV", "LiDAR"],
          status: "In Arbeit",
          imageAlt:
            "Abstrakte Illustration von TurtleBot-Linienverfolgung und Hinderniserkennung",
          detailsState: "Details folgen bald",
        },
        {
          id: "drug-feedback-analytics",
          title: "Drug Feedback Analytics und Condition Classification",
          summary:
            "Interaktive Streamlit-Anwendung zur Analyse von patientenbasiertem Drug Feedback und zum Testen einer ML-basierten Condition-Classification.",
          tags: ["Python", "Scikit-learn", "Streamlit"],
          status: "Abgeschlossen",
          imageAlt:
            "Abstrakte Illustration von Pharma-Analytics, Charts und Prediction-Workflow",
          slug: "drug-feedback-analytics",
        },
        {
          id: "sentinel-rag-assistant",
          title: "Sentinel Enterprise RAG Assistant",
          summary:
            "In Arbeit befindliches privates Projekt zu Dokumentensuche, Enterprise Knowledge Access und LLM-gestützten Antworten.",
          tags: ["In Progress", "Enterprise RAG"],
          status: "In Arbeit",
          imageAlt: "Abstrakte Illustration eines Enterprise-RAG-Assistenten",
          detailsState: "Details folgen bald",
        },
      ],
      pageTitle: "Projekte",
      pageDescription:
        "Diese Projektübersicht zeigt akademische und persönliche Projekte aus Machine Learning, Computer Vision, Smart Sensors, Robotik, Data Analytics und LLM-Anwendungen.",
      pageCards: [
        {
          id: "traffic-sign-detection-ebike",
          title: "Verkehrszeichenerkennung für E-Bike-Sicherheit",
          summary:
            "Computer-Vision-System zur Erkennung und Klassifikation deutscher Verkehrszeichen für E-Bike-Szenarien. Ein SSD-MobileNetV2-Modell wurde implementiert, trainiert und mit YOLOv11n verglichen.",
          tags: [
            "Computer Vision",
            "TensorFlow",
            "SSD MobileNetV2",
            "Object Detection",
            "YOLOv11n",
          ],
          status: "Abgeschlossen",
          imageAlt:
            "Traffic sign detection and classification workflow for e-bike safety",
          imagePlaceholder:
            "Verifizierte Projektvisualisierung ist derzeit nicht verfügbar.",
          slug: "traffic-sign-detection-ebike",
        },
        {
          id: "uv-monitoring-roller-blind",
          title: "UV-Monitoring und Rollladensteuerung",
          summary:
            "Raspberry-Pi-basiertes Hochschulprojekt für UV-Messung, CSV-Logging, manuelle Rollladensteuerung und Systemprüfung in einer Master-Slave-Architektur.",
          tags: ["Raspberry Pi", "I²C", "BLE", "ADC Interfacing", "CSV Logging"],
          status: "Abgeschlossen",
          imageAlt:
            "Abstrakte Illustration von UV-Sensorik und automatischer Rollladensteuerung",
          slug: "uv-monitoring-roller-blind",
        },
        {
          id: "turtlebot3-line-following",
          title: "TurtleBot3 Linienverfolgung und Hinderniserkennung",
          summary:
            "ROS2-Hochschulprojekt mit kamerabasierter Linienverfolgung, LiDAR-Hinderniserkennung und Steuerlogik.",
          tags: ["ROS2", "OpenCV", "LiDAR"],
          status: "In Arbeit",
          imageAlt:
            "Abstrakte Illustration von TurtleBot-Linienverfolgung und Hinderniserkennung",
          detailsState: "Details folgen bald",
        },
        {
          id: "drug-feedback-analytics",
          title: "Drug Feedback Analytics und Condition Classification",
          summary:
            "Interaktive Streamlit-Anwendung zur Analyse von patientenbasiertem Drug Feedback und zum Testen einer ML-basierten Condition-Classification.",
          tags: ["Python", "Scikit-learn", "Streamlit"],
          status: "Abgeschlossen",
          imageAlt:
            "Abstrakte Illustration von Pharma-Analytics, Charts und Prediction-Workflow",
          slug: "drug-feedback-analytics",
        },
        {
          id: "sentinel-rag-assistant",
          title: "Sentinel Enterprise RAG Assistant",
          summary:
            "In Arbeit befindliches privates Projekt zu Dokumentensuche, Enterprise Knowledge Access und LLM-gestützten Antworten.",
          tags: ["In Progress", "Enterprise RAG"],
          status: "In Arbeit",
          imageAlt: "Abstrakte Illustration eines Enterprise-RAG-Assistenten",
          detailsState: "Details folgen bald",
        },
      ],
    },
      experience: {
        heading: "Erfahrung",
        title: "Industrielle Erfahrung",
        entries: [
        {
          id: "junior-engineer",
          role: "Junior Engineer",
          company: "Hetero Labs Ltd.",
          bullets: [
            "Arbeit mit Pharma-Prozessen, Monitoring, Sensoren, Aktoren, Automatisierung, PFDs und P&IDs.",
            "Praktisches Verständnis für reale technische Systeme und Prozessumgebungen entwickelt.",
          ],
        },
        {
          id: "internship",
          role: "Praktikant",
          company: "Aurobindo Pharma Ltd.",
          bullets: [
            "Einblicke in Abläufe und Prozessumgebungen der Pharmaindustrie erhalten.",
            "Grundlagen für Monitoring und industrielle Prozessabläufe aufgebaut.",
          ],
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
          title: "AI / ML and Data",
          items: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Sentence Transformers",
            "Matplotlib",
            "Seaborn",
            "Machine Learning",
            "Deep Learning",
          ],
        },
        {
          title: "Computer Vision and Robotics",
          items: [
            "OpenCV",
            "Computer Vision",
            "Image Preprocessing",
            "ROS2",
            "Gazebo",
            "RViz2",
            "LiDAR",
          ],
        },
        {
          title: "LLM Applications",
          items: [
            "LLM Applications",
            "RAG Assistant — In Progress",
          ],
        },
        {
          title: "Frontend and Web",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
          ],
        },
        {
          title: "Backend, Deployment, and Developer Tools",
          items: [
            "Python",
            "Streamlit",
            "Docker",
            "Git",
            "GitHub",
            "Vercel",
          ],
        },
        {
          title: "Smart Sensors",
          items: [
            "Sensors and Actuators",
            "Bluetooth Communication",
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
        "Deutsch-Niveau",
        "Englisch-Niveau",
      ],
      verificationNote:
        "Prüfhinweis: Nicht geprüfte Tools und Sprachniveaus bleiben bewusst getrennt und werden hier nicht als bestätigte Kenntnisse gezeigt.",
    },
    contact: {
      heading: "Kontakt",
      title: "Lassen Sie uns sprechen",
      text: "Ich suche Werkstudentenstellen, Praktika, Forschungsprojekte und Masterarbeitsthemen im Bereich Machine Learning, Computer Vision, Smart Sensors und industrielle Systeme.",
      location: "Amberg, Deutschland",
      actions: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "E-Mail",
        resume: "Lebenslauf",
      },
      disabledEmail: "E-Mail",
      disabledResume: "Lebenslauf folgt bald",
      pageTitle: "Kontaktstatus und Fokus",
      pageDescription:
        "Öffentliche Kontaktangaben bleiben bewusst konservativ, bis Links und der Lebenslauf-Dateiname geprüft sind.",
      locationCardTitle: "Ort und Fokus",
      linksCardTitle: "Kontaktlinks",
      verificationNote:
        "Prüfhinweis: Der Lebenslauf-Download bleibt TODO: VERIFY, bis der öffentliche Dateiname bestätigt ist.",
    },
    footer: {
      location: "Amberg, Deutschland",
      linkedin: "LinkedIn",
      github: "GitHub",
      backToTop: "Nach oben",
    },
    trafficSignDetection: {
      backLabel: "← Zurück zu den Projekten",
      category: "Computer Vision",
      title:
        "Erkennung und Klassifikation deutscher Verkehrszeichen für E-Bike-Sicherheit",
      summary:
        "Computer-Vision-System zur Erkennung und Klassifikation deutscher Verkehrszeichen für E-Bike-Szenarien. Ein SSD-MobileNetV2-Modell wurde implementiert, trainiert und mit YOLOv11n verglichen.",
      visualPlaceholder:
        "Verifizierte Projektvisualisierung ist derzeit nicht verfügbar.",
      overviewHeading: "Überblick",
      overviewText:
        "Dieses abgeschlossene akademische Projekt konzentriert sich auf die Erkennung und Klassifikation deutscher Verkehrszeichen für E-Bike-Sicherheit. Ein trainiertes SSD-MobileNetV2-Modell wird mit YOLOv11n verglichen.",
      workflowHeading: "Projektablauf",
      workflowSteps: [
        "Datensatz-Vorbereitung",
        "Annotation und Vorverarbeitung",
        "SSD-MobileNetV2-Training",
        "Vergleich mit YOLOv11n",
      ],
      contribution: {
        eyebrow: "Beitrag",
        title: "Was ich entwickelt habe",
        items: [
          "Szenen mit deutschen Verkehrszeichen annotiert und für das Training vorbereitet.",
          "Bounding Boxes, Resizing, Normalisierung, Augmentation, Pascal-VOC-XML und TFRecord vorbereitet.",
          "Ein SSD-MobileNetV2-320×320-FPN-Lite-Modell implementiert und trainiert.",
          "Die Vorhersagen mit YOLOv11n auf gemeinsamen Testbildern verglichen.",
          "Confidence Scores, Confusion Matrices und klassenbezogene Fehler analysiert.",
        ],
      },
      stepLabel: "Schritt",
      technicalOverviewEyebrow: "Technische Übersicht",
      technicalOverviewTitle: "Technische Übersicht",
      technicalOverviewItems: [
        { label: "Bereich", value: "Computer Vision" },
        { label: "Anwendung", value: "E-Bike-Sicherheit" },
        {
          label: "Aufgabe",
          value: "Erkennung und Klassifikation deutscher Verkehrszeichen",
        },
        {
          label: "Hauptmodell",
          value: "SSD MobileNetV2 320×320 FPN-Lite",
        },
        { label: "Vergleichsmodell", value: "YOLOv11n" },
        {
          label: "Klassen",
          value: "20 deutsche Verkehrszeichenklassen",
        },
        { label: "Framework", value: "TensorFlow" },
      ],
    },
    uvMonitoringRollerBlind: {
      backLabel: "← Zurück zu den Projekten",
      category: "Eingebettete Systeme",
      title: "Dezentrales UV-Monitoring und Rollladensteuerungs-Prototyp",
      summary:
        "Akademisches Teamprojekt mit Fokus auf UV-Messung, Logging, manuelle Rollladensteuerung und Prototyp-Verifikation mit Raspberry-Pi-Geräten.",
      overviewHeading: "Überblick",
      overviewText:
        "Das Projekt untersuchte einen dezentralen Raspberry-Pi-Prototyp für UV-Monitoring und Rollladensteuerung. Mein Beitrag lag bei Architektur, Master-Logik, Software-Ablauf und Verifikation.",
      contributionHeading: "Mein Beitrag",
      contributionItems: [
        "An der Hardware-Architektur für den Master-Slave-Prototyp mitgearbeitet.",
        "Den Software-Ablauf für Messung, Steuerung und Logging entwickelt.",
        "An der Master-Logik für manuelle Rollladensteuerung und Systemfunktionen gearbeitet.",
        "Funktionierende und nicht funktionierende Prototyp-Funktionen mit Testfällen geprüft.",
      ],
      demonstratedHeading: "Nachgewiesene Funktionen",
      demonstratedItems: [
        "Raspberry-Pi-Start und Initialisierung",
        "Verbindung zum UV-Sensor",
        "UV-Datenerfassung",
        "CSV-Logging",
        "Fehler- und Ereignislogging",
        "Manuelle Rollladensteuerung",
        "Automatischer Start beim Einschalten",
      ],
      limitationHeading: "Einschränkung",
      limitationText:
        "Die BLE-Verbindung konnte hergestellt werden, aber eine zuverlässige UV-Datenübertragung vom Slave zum Master wurde nicht abgeschlossen. Deshalb blieb die vollautomatische Rollladensteuerung unvollständig.",
      technicalConceptsHeading: "Technische Konzepte",
      technicalConcepts: [
        "Raspberry Pi",
        "UV Sensor",
        "ADC Interfacing",
        "I²C",
        "Bluetooth Low Energy",
        "CSV Logging",
        "Fault Logging",
        "Master-Slave Architecture",
        "Manual Motor Control",
        "Prototype Verification",
      ],
    },
    drugFeedback: {
      backLabel: "← Zurück zu den Projekten",
      status: "Abgeschlossen",
      title: "Drug Feedback Analytics und Condition Classification",
      summary:
        "Interaktive Machine-Learning-Anwendung zur Analyse von patientenbasiertem Drug Feedback und zum Testen einer Condition-Classification über eine deployte Streamlit-Oberfläche.",
      heroImageAlt:
        "Abstrakte Hero-Illustration zu Pharma-Analytics, Dashboards und ML-Prediction",
      actions: {
        liveDemo: "Live-Demo öffnen",
        tryPredictions: "Prediction testen",
        viewGithub: "GitHub ansehen",
        githubDisabled: "GitHub",
      },
      snapshot: {
        eyebrow: "Projekt-Snapshot",
        title: "Kompakter Überblick",
        items: [
          {
            label: "Bereich",
            value: "Pharma-Analytics und Analyse von Patient-Feedback",
          },
          {
            label: "Projekttyp",
            value: "Persönliches Applied-ML-Projekt",
          },
          {
            label: "Oberfläche",
            value: "Streamlit-Webanwendung",
          },
          {
            label: "Zentrale ML-Aufgabe",
            value: "Condition-Classification",
          },
          {
            label: "Datensatz",
            value: "Drug-Feedback-Datensatz",
          },
          {
            label: "Technologien",
            value:
              "Python, Pandas, Scikit-learn, Streamlit, Sentence Transformers, Matplotlib, Seaborn",
          },
          {
            label: "Deployment",
            value: "Streamlit",
          },
        ],
      },
      problem: {
        eyebrow: "Problem",
        title: "Warum dieses Projekt gebaut wurde",
        text:
          "Interaktive ML-Anwendung zur Analyse von patientenbasiertem Drug Feedback und zur Condition-Classification.",
      },
      impact: {
        eyebrow: "Bedeutung",
        title: "Warum das wichtig ist",
        text:
          "Dieses Projekt verbindet meine Erfahrung aus der Pharmaindustrie mit praktischer Machine-Learning-Arbeit und einer deployten, interaktiven Anwendung.",
      },
      contribution: {
        eyebrow: "Beitrag",
        title: "Was ich entwickelt habe",
        items: [
          "Streamlit-Anwendung für Drug-Feedback-Analyse und Live-Prediction entwickelt.",
          "EDA-Ansichten für Verteilungen, Korrelationen und Feature-Zusammenhänge erstellt.",
          "Numerische, kategorische und textbasierte Features für ML-Workflows vorbereitet.",
          "Classification-, Clustering- und Regression-Workflows in einer Oberfläche umgesetzt.",
        ],
      },
      workflow: {
        eyebrow: "Workflow",
        title: "Vom Datensatz bis zur Prediction",
        stepLabel: "Schritt",
        steps: [
          "Datensatz",
          "EDA und Vorverarbeitung",
          "Feature Engineering",
          "Modelle und Live-Prediction",
        ],
      },
      demo: {
        eyebrow: "Demo",
        title: "Live-Demo testen",
        text:
          "Öffnen Sie die deployte Streamlit-Anwendung und testen Sie den Prediction-Workflow direkt.",
        steps: [
          "App öffnen",
          "Überblick ansehen",
          "EDA-Seite prüfen",
          "Classification-Bereich öffnen",
          "Prediction-Formular nutzen",
          "Prediction testen",
        ],
        actions: {
          openDemo: "Demo öffnen",
          tryPredictions: "Prediction testen",
        },
      },
      results: {
        eyebrow: "Ergebnis",
        title: "Aktuelle Ergebnisse der Anwendung",
        intro:
          "Die deployte Streamlit-Anwendung zeigt aktuell folgende Ergebnisse:",
        cards: [
          {
            title: "Classification",
            value: "Test Accuracy: 69,14 %",
            description:
              "Der Classification-Workflow sagt Medical-Condition-Kategorien auf Basis von patientenbasierten Drug-Feedback-Features voraus.",
          },
          {
            title: "Clustering-Experiment",
            value: "Adjusted Rand Index: 1,00",
            description:
              "Der Clustering-Workflow ist als zusätzliche Analyse-Exploration enthalten.",
          },
          {
            title: "Regression-Experiment",
            value: "Mean Absolute Error: 0,0148",
            description:
              "Der Regression-Workflow ist als zusätzliche Analyse-Exploration enthalten.",
          },
        ],
        closing:
          "Classification ist der zentrale Portfolio-Workflow. Clustering und Regression sind zusätzliche explorative Komponenten der Anwendung.",
      },
    },
  },
  en: {
    metadata: {
      title: "Saiankith Reddy Kolli | LLM Engineer | AI / ML Engineer",
      description:
        "Portfolio of Saiankith Reddy Kolli. Machine learning, computer vision, smart sensors, edge systems, data analytics, and industrial applications.",
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
      title: "LLM Engineer | AI / ML Engineer",
      summaryLines: [
        "M.Eng. student building practical AI systems through machine learning, computer vision, data analytics, and LLM applications.",
        "Developing projects that connect intelligent software with real-world use cases.",
      ],
      metadataRow:
        "Amberg, Germany · M.Eng. AI for Smart Sensors and Actuators · Deggendorf Institute of Technology",
      location: "Amberg, Germany",
      chips: [
        "Computer Vision",
        "Machine Learning",
        "LLM Applications",
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
      title: "About",
      text: "I am pursuing an M.Eng. in AI for Smart Sensors and Actuators at Deggendorf Institute of Technology. My work focuses on AI/ML, computer vision, data analytics, LLM applications, and interactive software projects. My previous pharmaceutical-industry experience adds practical understanding of monitoring, sensors, automation, and real-world process environments.",
      pageTitle: "About",
      pageDescription:
        "This overview keeps to verified public information while fuller education details continue to be checked.",
      narrative: [
        "Chemical engineering developed systems thinking and process understanding.",
        "Pharmaceutical-industry experience introduced industrial monitoring, sensors, actuators, and automation.",
        "The M.Eng. degree develops machine-learning, computer-vision, smart-sensor, and edge-system knowledge.",
        "Projects provide practical evidence.",
      ],
      verificationNote:
        "Verification note: education dates and some institution details remain marked as TODO: VERIFY in the source-of-truth file and are intentionally not expanded here yet.",
    },
    projects: {
      heading: "Projects",
      title: "Projects",
      projectGroups: {
        academic: {
          heading: "Academic Projects",
        },
        personal: {
          heading: "Personal Projects",
        },
      },
      actions: {
        viewCaseStudy: "View Project Details",
        tryLiveDemo: "Try Live Demo",
        github: "GitHub",
        liveDemoOpensInNewTab: "Live demo opens in a new tab",
        githubDisabled: "GitHub",
      },
      cards: [
        {
          id: "traffic-sign-detection-ebike",
          title: "Traffic Sign Detection for E-Bike Safety",
          summary:
            "Computer-vision system for detecting and classifying German traffic signs relevant to e-bike scenarios. Implemented and custom-trained an SSD MobileNetV2 model and compared its performance with YOLOv11n.",
          tags: [
            "Computer Vision",
            "TensorFlow",
            "SSD MobileNetV2",
            "Object Detection",
            "YOLOv11n",
          ],
          status: "Completed",
          imageAlt:
            "Traffic sign detection and classification workflow for e-bike safety",
          imagePlaceholder:
            "A verified project visual is not available yet.",
          slug: "traffic-sign-detection-ebike",
        },
        {
          id: "uv-monitoring-roller-blind",
          title: "UV Monitoring and Roller-Blind Control",
          summary:
            "Raspberry Pi-based academic prototype for UV sensing, CSV logging, manual roller-blind control, and system verification in a master-slave architecture.",
          tags: ["Raspberry Pi", "I²C", "BLE", "ADC Interfacing", "CSV Logging"],
          status: "Completed",
          imageAlt:
            "Abstract illustration of UV sensing and roller-blind control",
          slug: "uv-monitoring-roller-blind",
        },
        {
          id: "turtlebot3-line-following",
          title: "TurtleBot3 Line Following and Obstacle Avoidance",
          summary:
            "ROS2 academic project combining camera-based line tracking with LiDAR-based static-obstacle detection and control logic.",
          tags: ["ROS2", "OpenCV", "LiDAR"],
          status: "In progress",
          imageAlt:
            "Abstract illustration of TurtleBot line following and obstacle avoidance",
          detailsState: "Details coming soon",
        },
        {
          id: "drug-feedback-analytics",
          title: "Drug Feedback Analytics and Condition Classification",
          summary:
            "Interactive Streamlit application for exploring patient-reported drug feedback and testing an ML-based medical-condition classification workflow.",
          tags: ["Python", "Scikit-learn", "Streamlit"],
          status: "Completed",
          imageAlt:
            "Abstract illustration of pharma analytics, charts, and prediction workflow",
          slug: "drug-feedback-analytics",
        },
        {
          id: "sentinel-rag-assistant",
          title: "Sentinel Enterprise RAG Assistant",
          summary:
            "In-progress private project exploring document retrieval, enterprise knowledge access, and LLM-assisted responses.",
          tags: ["In Progress", "Enterprise RAG"],
          status: "In progress",
          imageAlt: "Abstract illustration of an enterprise RAG assistant concept",
          detailsState: "Details coming soon",
        },
      ],
      pageTitle: "Projects",
      pageDescription:
        "These project summaries highlight the main public projects across computer vision, smart sensors, robotics, data analytics, and interactive LLM applications.",
      pageCards: [
        {
          id: "traffic-sign-detection-ebike",
          title: "Traffic Sign Detection for E-Bike Safety",
          summary:
            "Computer-vision system for detecting and classifying German traffic signs relevant to e-bike scenarios. Implemented and custom-trained an SSD MobileNetV2 model and compared its performance with YOLOv11n.",
          tags: [
            "Computer Vision",
            "TensorFlow",
            "SSD MobileNetV2",
            "Object Detection",
            "YOLOv11n",
          ],
          status: "Completed",
          imageAlt:
            "Traffic sign detection and classification workflow for e-bike safety",
          imagePlaceholder:
            "A verified project visual is not available yet.",
          slug: "traffic-sign-detection-ebike",
        },
        {
          id: "uv-monitoring-roller-blind",
          title: "UV Monitoring and Roller-Blind Control",
          summary:
            "Raspberry Pi-based academic prototype for UV sensing, CSV logging, manual roller-blind control, and system verification in a master-slave architecture.",
          tags: ["Raspberry Pi", "I²C", "BLE", "ADC Interfacing", "CSV Logging"],
          status: "Completed",
          imageAlt:
            "Abstract illustration of UV sensing and roller-blind control",
          slug: "uv-monitoring-roller-blind",
        },
        {
          id: "turtlebot3-line-following",
          title: "TurtleBot3 Line Following and Obstacle Avoidance",
          summary:
            "ROS2 academic project combining camera-based line tracking with LiDAR-based static-obstacle detection and control logic.",
          tags: ["ROS2", "OpenCV", "LiDAR"],
          status: "In progress",
          imageAlt:
            "Abstract illustration of TurtleBot line following and obstacle avoidance",
          detailsState: "Details coming soon",
        },
        {
          id: "drug-feedback-analytics",
          title: "Drug Feedback Analytics and Condition Classification",
          summary:
            "Interactive Streamlit application for exploring patient-reported drug feedback and testing an ML-based medical-condition classification workflow.",
          tags: ["Python", "Scikit-learn", "Streamlit"],
          status: "Completed",
          imageAlt:
            "Abstract illustration of pharma analytics, charts, and prediction workflow",
          slug: "drug-feedback-analytics",
        },
        {
          id: "sentinel-rag-assistant",
          title: "Sentinel Enterprise RAG Assistant",
          summary:
            "In-progress personal project exploring document retrieval, enterprise knowledge access, and LLM-assisted responses.",
          tags: ["In Progress", "Enterprise RAG"],
          status: "In progress",
          imageAlt: "Abstract illustration of an enterprise RAG assistant concept",
          detailsState: "Details coming soon",
        },
      ],
    },
      experience: {
        heading: "Experience",
        title: "Industrial experience",
        entries: [
        {
          id: "junior-engineer",
          role: "Junior Engineer",
          company: "Hetero Labs Ltd.",
          bullets: [
            "Worked with pharmaceutical processes, monitoring, sensors, actuators, automation, PFDs, and P&IDs.",
            "Developed practical understanding of real-world engineering systems and process environments.",
          ],
        },
        {
          id: "internship",
          role: "Intern",
          company: "Aurobindo Pharma Ltd.",
          bullets: [
            "Gained exposure to pharmaceutical-industry workflows and operational process environments.",
            "Built foundational understanding of industrial monitoring and process operations.",
          ],
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
          title: "AI / ML and Data",
          items: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Sentence Transformers",
            "Matplotlib",
            "Seaborn",
            "Machine Learning",
            "Deep Learning",
          ],
        },
        {
          title: "Computer Vision and Robotics",
          items: [
            "OpenCV",
            "Computer Vision",
            "Image Preprocessing",
            "ROS2",
            "Gazebo",
            "RViz2",
            "LiDAR",
          ],
        },
        {
          title: "LLM Applications",
          items: [
            "LLM Applications",
            "RAG Assistant — In Progress",
          ],
        },
        {
          title: "Frontend and Web",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
          ],
        },
        {
          title: "Backend, Deployment, and Developer Tools",
          items: [
            "Python",
            "Streamlit",
            "Docker",
            "Git",
            "GitHub",
            "Vercel",
          ],
        },
        {
          title: "Smart Sensors",
          items: [
            "Sensors and Actuators",
            "Bluetooth Communication",
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
        "German-language level",
        "English-language level",
      ],
      verificationNote:
        "Verification note: unverified tools and language levels remain separate by design and are not presented here as confirmed skills.",
    },
    contact: {
      heading: "Contact",
      title: "Let's connect",
      text: "I am open to working-student, internship, research-assistant, and master's-thesis opportunities involving machine learning, computer vision, smart sensors, and industrial systems.",
      location: "Amberg, Germany",
      actions: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email",
        resume: "Download Resume",
      },
      disabledEmail: "Email",
      disabledResume: "Resume coming soon",
      pageTitle: "Opportunity overview and verified contact status",
      pageDescription:
        "Contact publishing is intentionally conservative until public links and the resume filename are verified.",
      locationCardTitle: "Location and Opportunity Focus",
      linksCardTitle: "Contact Links",
      verificationNote:
        "Verification note: the resume download remains in TODO: VERIFY state until its public filename is confirmed.",
    },
    footer: {
      location: "Amberg, Germany",
      linkedin: "LinkedIn",
      github: "GitHub",
      backToTop: "Back to top",
    },
    trafficSignDetection: {
      backLabel: "← Back to Projects",
      category: "Computer Vision",
      title:
        "German Traffic Sign Detection and Classification for E-Bike Safety",
      summary:
        "Computer-vision system for detecting and classifying German traffic signs relevant to e-bike scenarios. Implemented and custom-trained an SSD MobileNetV2 model and compared its performance with YOLOv11n.",
      visualPlaceholder: "A verified project visual is not available yet.",
      overviewHeading: "Overview",
      overviewText:
        "This completed academic project focuses on detecting and classifying German traffic signs relevant to e-bike safety. The implementation uses a custom-trained SSD MobileNetV2 model and compares its predictions with YOLOv11n.",
      workflowHeading: "Project workflow",
      workflowSteps: [
        "Dataset Preparation",
        "Annotation and Preprocessing",
        "SSD MobileNetV2 Training",
        "SSD and YOLOv11n Comparison",
      ],
      contribution: {
        eyebrow: "Contribution",
        title: "What I built",
        items: [
          "Annotated German traffic-sign scenes and prepared them for training.",
          "Prepared bounding boxes, resizing, normalization, augmentation, Pascal VOC XML, and TFRecord conversion.",
          "Implemented and custom-trained an SSD MobileNetV2 320×320 FPN-Lite model.",
          "Compared predictions with YOLOv11n on shared test images.",
          "Reviewed confidence scores, confusion matrices, and class-level error analysis.",
        ],
      },
      stepLabel: "Step",
      technicalOverviewEyebrow: "Technical snapshot",
      technicalOverviewTitle: "Technical snapshot",
      technicalOverviewItems: [
        { label: "Domain", value: "Computer Vision" },
        { label: "Use case", value: "E-bike safety" },
        {
          label: "Task",
          value: "German traffic-sign detection and classification",
        },
        {
          label: "Primary implementation",
          value: "SSD MobileNetV2 320×320 FPN-Lite",
        },
        { label: "Comparison model", value: "YOLOv11n" },
        { label: "Classes", value: "20 German traffic-sign classes" },
        { label: "Framework", value: "TensorFlow" },
      ],
    },
    uvMonitoringRollerBlind: {
      backLabel: "← Back to Projects",
      category: "Embedded Systems",
      title: "Decentralized UV Monitoring and Roller-Blind Control Prototype",
      summary:
        "Academic team project focused on UV sensing, logging, manual blind control, and prototype verification using Raspberry Pi devices.",
      overviewHeading: "Overview",
      overviewText:
        "The project explored a decentralized Raspberry Pi prototype for UV monitoring and roller-blind control. My work focused on architecture design, master-side logic, software flow, and verification.",
      contributionHeading: "My Contribution",
      contributionItems: [
        "Contributed to the hardware architecture for the master-slave prototype.",
        "Designed the software-flow structure for sensing, control, and logging.",
        "Worked on master-side control logic for manual blind operation and system handling.",
        "Verified working and non-working prototype functions through structured test cases.",
      ],
      demonstratedHeading: "Demonstrated Functions",
      demonstratedItems: [
        "Raspberry Pi startup and initialization",
        "UV-sensor connection",
        "UV-data acquisition",
        "CSV logging",
        "Fault-event logging",
        "Manual blind control",
        "Auto-start on power-on",
      ],
      limitationHeading: "Limitation Note",
      limitationText:
        "BLE pairing could be established, but reliable Slave-to-Master UV-data transmission was not completed. Therefore, fully automatic blind control remained incomplete.",
      technicalConceptsHeading: "Technical Concepts",
      technicalConcepts: [
        "Raspberry Pi",
        "UV Sensor",
        "ADC Interfacing",
        "I²C",
        "Bluetooth Low Energy",
        "CSV Logging",
        "Fault Logging",
        "Master-Slave Architecture",
        "Manual Motor Control",
        "Prototype Verification",
      ],
    },
    drugFeedback: {
      backLabel: "← Back to Projects",
      status: "Completed",
      title: "Drug Feedback Analytics and Condition Classification",
      summary:
        "Interactive machine-learning application for analyzing patient-reported drug feedback and testing condition classification through a deployed Streamlit interface.",
      heroImageAlt:
        "Abstract hero illustration for pharma analytics, dashboards, and machine-learning prediction",
      actions: {
        liveDemo: "View Live Demo",
        tryPredictions: "Try Predictions",
        viewGithub: "View GitHub",
        githubDisabled: "GitHub",
      },
      snapshot: {
        eyebrow: "Project Snapshot",
        title: "Compact project view",
        items: [
          {
            label: "Domain",
            value: "Pharma analytics and patient-feedback analysis",
          },
          {
            label: "Project Type",
            value: "Personal applied-ML project",
          },
          {
            label: "Core ML Task",
            value: "Condition classification",
          },
          {
            label: "Dataset",
            value: "Drug-feedback dataset",
          },
          {
            label: "Technologies",
            value:
              "Python, Pandas, Scikit-learn, Streamlit, Sentence Transformers, Matplotlib, Seaborn",
          },
          {
            label: "Deployment",
            value: "Streamlit",
          },
        ],
      },
      problem: {
        eyebrow: "Problem Statement",
        title: "Why this project exists",
        text:
          "Built an interactive ML application to analyze patient-reported drug feedback and support condition classification.",
      },
      impact: {
        eyebrow: "Why It Matters",
        title: "Why This Matters",
        text:
          "This project connects my pharmaceutical-industry exposure with practical machine-learning work and a deployed interactive application.",
      },
      contribution: {
        eyebrow: "My Contribution",
        title: "What I built",
        items: [
          "Built a Streamlit application for drug-feedback analysis and live prediction.",
          "Created EDA views for distributions, correlations, and feature relationships.",
          "Prepared numerical, categorical, and text-based features for ML workflows.",
          "Implemented classification, clustering, and regression workflows in one interface.",
        ],
      },
      workflow: {
        eyebrow: "Workflow",
        title: "From dataset to live prediction",
        stepLabel: "Step",
        steps: [
          "Dataset",
          "EDA and preprocessing",
          "Feature engineering",
          "Models and live prediction",
        ],
      },
      demo: {
        eyebrow: "Demo",
        title: "Try the Live Demo",
        text:
          "Open the deployed Streamlit application and test the prediction workflow directly.",
        steps: [
          "Open the app",
          "Review the overview",
          "Explore the EDA page",
          "Open the classification section",
          "Use the prediction form",
          "Test a prediction",
        ],
        actions: {
          openDemo: "Open Demo",
          tryPredictions: "Try Predictions",
        },
      },
      results: {
        eyebrow: "Results",
        title: "Current Application Results",
        intro:
          "The deployed Streamlit application currently reports the following results:",
        cards: [
          {
            title: "Classification",
            value: "Test Accuracy: 69.14%",
            description:
              "The classification workflow predicts medical-condition categories based on patient-reported drug-feedback features.",
          },
          {
            title: "Clustering Exploration",
            value: "Adjusted Rand Index: 1.00",
            description:
              "The clustering workflow is included as an additional analytical exploration.",
          },
          {
            title: "Regression Exploration",
            value: "Mean Absolute Error: 0.0148",
            description:
              "The regression workflow is included as an additional analytical exploration.",
          },
        ],
        closing:
          "Classification is the main portfolio workflow. Clustering and regression are supporting exploratory components of the application.",
      },
    },
  },
} satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
