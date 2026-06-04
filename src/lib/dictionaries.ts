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
  detailsState?: string;
  slug?: PublishedProjectSlug;
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
    text: string;
    metricLabel: string;
    metricValue: string;
  };
  disclaimer: {
    eyebrow: string;
    title: string;
    text: string;
  };
  links: {
    eyebrow: string;
    title: string;
    githubTodo: string;
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
    datasetTitle: string;
    datasetSize: string;
    evaluationTitle: string;
    evaluationNote: string;
    sourcesHeading: string;
    sourcesText: string;
  };
  drugFeedback: DrugFeedbackDictionary;
};

const dictionaries = {
  de: {
    metadata: {
      title: "Saiankith Reddy Kolli | Machine Learning Engineer",
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
      title: "Machine Learning Engineer",
      summaryLines: [
        "Ich studiere im M.Eng. mit Fokus auf Machine Learning, Computer Vision und Data Analytics.",
        "Ich entwickle praktische Projekte für reale technische Anwendungen.",
      ],
      location: "Amberg, Deutschland",
      education: "M.Eng. AI für Smart Sensors and Actuators",
      institution: "Deggendorf Institute of Technology",
      chips: [
        "Computer Vision",
        "Machine Learning",
        "Data Analytics",
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
      text: "Ich studiere AI für Smart Sensors and Actuators an der Deggendorf Institute of Technology. In meinen Masterprojekten entwickle ich praktische Kenntnisse in Machine Learning, Computer Vision, Data Analytics, Smart Sensors, Edge Systems und interaktiven ML-Anwendungen. Meine Erfahrung aus der Pharmaindustrie hilft mir zusätzlich beim Verständnis von Prozessen, Monitoring, Sensoren, Aktoren und Automatisierung.",
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
      title:
        "Ausgewählte Projekte aus Computer Vision, Smart Sensors und intelligenten Systemen.",
      intro: "Ausgewählte Projekte aus Computer Vision, Smart Sensors und intelligenten Systemen.",
      actions: {
        viewCaseStudy: "Case Study ansehen",
        tryLiveDemo: "Live-Demo testen",
        github: "GitHub",
        liveDemoOpensInNewTab: "Live-Demo öffnet in einem neuen Tab",
        githubDisabled: "GitHub",
      },
      cards: [
        {
          id: "lane-detection-ebike",
          title: "Lane Detection für E-Bike Perception",
          summary:
            "Kamerabasierte Lane Detection mit Bildvorverarbeitung und Deep-Learning-Training für ein E-Bike-Perception-Projekt.",
          tags: ["Computer Vision", "OpenCV", "Deep Learning"],
          status: "Abgeschlossen",
          imageAlt:
            "Cyclist on an urban bike lane representing the e-bike perception use case",
          slug: "lane-detection-ebike",
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
          id: "uv-roller-blind",
          title: "UV-Messung und automatische Rollladensteuerung",
          summary:
            "Smart-Sensor-Projekt mit UV-Monitoring, Bluetooth-Kommunikation, Edge-Device-Architektur und automatischer Rollladensteuerung.",
          tags: ["Smart Sensors", "Bluetooth", "Edge Systems"],
          status: "Abgeschlossen",
          imageAlt:
            "Abstrakte Illustration von UV-Sensorik und automatischer Rollladensteuerung",
          detailsState: "Details folgen bald",
        },
      ],
      pageTitle: "Projektrichtung und Nachweisstatus",
      pageDescription:
        "Diese Projektübersicht nutzt nur geprüfte Aussagen aus dem Master-Dokument. Das Lane-Detection-Projekt und das Drug-Feedback-Projekt haben veröffentlichte Case Studies. Weitere Detailseiten bleiben geschlossen, bis ihre Nachweise geprüft sind.",
      pageCards: [
        {
          id: "lane-detection-ebike",
          title: "Lane Detection für E-Bike Perception",
          summary:
            "Kamerabasierte Lane Detection mit Bildvorverarbeitung und Deep-Learning-Training für ein E-Bike-Perception-Projekt.",
          tags: ["Computer Vision", "OpenCV", "Deep Learning"],
          status: "Abgeschlossen",
          imageAlt:
            "Abstrakte Illustration von Lane Detection, Wahrnehmung und Ausgabefluss",
          slug: "lane-detection-ebike",
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
          id: "uv-roller-blind",
          title: "UV-Messung und automatische Rollladensteuerung",
          summary:
            "Smart-Sensor-Projekt mit UV-Monitoring, Bluetooth-Kommunikation, Edge-Device-Architektur und automatischer Rollladensteuerung.",
          tags: ["Smart Sensors", "Bluetooth", "Edge Systems"],
          status: "Abgeschlossen",
          imageAlt:
            "Abstrakte Illustration von UV-Sensorik und automatischer Rollladensteuerung",
          detailsState: "Details folgen bald",
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
          id: "sentinel-rag-assistant",
          title: "Sentinel Enterprise RAG Assistant",
          summary:
            "Enterprise-RAG-Assistent ist noch in Arbeit. Nur wirklich umgesetzte Teile werden später veröffentlicht. Geplante Funktionen bleiben getrennt.",
          tags: ["In Progress", "Enterprise RAG"],
          status: "In Arbeit",
          imageAlt: "Abstrakte Illustration eines Enterprise-RAG-Assistenten",
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
            "Arbeit mit Pharma-Prozessen, Monitoring, Sensoren, Aktoren, Automatisierung, PFDs und P&IDs. Diese Erfahrung stärkte mein Verständnis für reale technische Systeme.",
        },
        {
          id: "internship",
          role: "Praktikant",
          company: "Aurobindo Pharma Ltd.",
          description:
            "Praktische Einblicke in Abläufe und Prozessumgebungen der Pharmaindustrie. Das Praktikum half mir beim Verständnis industrieller Prozesse.",
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
    laneDetection: {
      backLabel: "← Zurück zu den Projekten",
      category: "Computer Vision",
      status: "Abgeschlossen",
      title: "Lane Detection für E-Bike Perception",
      summary:
        "Dieses abgeschlossene Projekt untersucht kamerabasierte Lane Detection für ein E-Bike-Perception-System. Der Workflow umfasst Kamerabilder, Bildvorverarbeitung, Deep-Learning-Training und eine Lane-Detection-Ausgabe.",
      overviewHeading: "Überblick",
      overviewText:
        "Dieses abgeschlossene Projekt untersucht kamerabasierte Lane Detection für ein E-Bike-Perception-System. Der Workflow umfasst Kamerabilder, Bildvorverarbeitung, Deep-Learning-Training und eine Lane-Detection-Ausgabe.",
      workflowHeading: "Projektablauf und Beitrag",
      workflowSteps: [
        "Situation — Das Projekt behandelte kamerabasierte Lane Detection für ein E-Bike-Perception-System.",
        "Aufgabe — Einen Workflow für Kamerabilder, Bildvorverarbeitung und Deep-Learning-Training entwickeln.",
        "Umsetzung — Bilddaten für den Lane-Detection-Workflow vorbereitet und vorverarbeitet.",
        "Umsetzung — Mit einem Datensatz von ungefähr 35.000 Bildern gearbeitet und einen Deep-Learning-Ansatz trainiert.",
        "Ergebnis — Einen funktionierenden Lane-Detection-Workflow abgeschlossen. Die genaue Definition der früher genannten Accuracy muss vor der Veröffentlichung noch geprüft werden.",
      ],
      stepLabel: "Schritt",
      snapshotEyebrow: "Snapshot",
      snapshotTitle: "Technischer Überblick",
      technologiesTitle: "Technologien",
      technologies: "Python · OpenCV · Deep Learning",
      datasetTitle: "Datensatz",
      datasetSize: "Ungefähr 35.000 Bilder",
      evaluationTitle: "Evaluation",
      evaluationNote:
        "Die genaue Definition der früher genannten Accuracy muss vor der Veröffentlichung noch geprüft werden.",
      sourcesHeading: "Quellen",
      sourcesText:
        "Projektbericht und technische Quellen werden nach der Prüfung ergänzt.",
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
          {
            label: "Status",
            value: "Abgeschlossen",
          },
        ],
      },
      problem: {
        eyebrow: "Problem",
        title: "Warum dieses Projekt gebaut wurde",
        text:
          "Patientenbasiertes Drug Feedback enthält Signale wie Effectiveness, Satisfaction, Ease of Use, Drug Name und textuelle Informationen. Ziel dieses Projekts war eine interaktive Analytics-Anwendung für Datenanalyse und Condition-Classification.",
      },
      impact: {
        eyebrow: "Bedeutung",
        title: "Warum dieses Projekt wichtig ist",
        text:
          "Dieses Projekt verbindet meine Erfahrung aus der Pharmaindustrie mit meiner Machine-Learning-Richtung. Es zeigt einen End-to-End-Workflow von Datenladung und Vorverarbeitung bis zu ML-Modellierung, Evaluation, Deployment und interaktiver Nutzung.",
      },
      contribution: {
        eyebrow: "Beitrag",
        title: "Was ich entwickelt habe",
        items: [
          "Eine interaktive Streamlit-Anwendung für die Analyse von patientenbasiertem Drug Feedback und für direkte Prediction-Tests im Browser entwickelt.",
          "EDA-Ansichten für Verteilungen, Korrelationen und Zusammenhänge zwischen Drug-Feedback-Features erstellt.",
          "Numerische, kategorische und textbasierte Features für Machine-Learning-Workflows vorbereitet und transformiert.",
          "Einen Condition-Classification-Workflow umgesetzt und eine Live-Prediction-Oberfläche für Benutzer integriert.",
          "Clustering- und Regression-Seiten ergänzt, um verschiedene Analyseaufgaben in einer Anwendung zu vergleichen.",
          "Die abgeschlossene Anwendung öffentlich über Streamlit deployt, damit Recruiter und Benutzer den Workflow direkt testen können.",
        ],
      },
      workflow: {
        eyebrow: "Workflow",
        title: "Vom Datensatz bis zur Prediction",
        stepLabel: "Schritt",
        steps: [
          "Datensatz",
          "Datenladung",
          "EDA",
          "Vorverarbeitung",
          "Feature Engineering",
          "Classification",
          "Evaluation",
          "Live-Prediction-Oberfläche",
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
        text:
          "Die Werte oben sind die aktuell in der Anwendung angezeigten Ergebnisse. Classification ist der zentrale Portfolio-Workflow. Clustering und Regression sind zusätzliche Analyse-Experimente.",
        metricLabel: "Classification",
        metricValue: "Test Accuracy: 69,14 %",
      },
      disclaimer: {
        eyebrow: "Hinweis",
        title: "Wichtiger Kontext",
        text:
          "ML-Lernprojekt auf Basis von patientenbasiertem Feedback. Kein medizinisches, diagnostisches oder klinisches Entscheidungssystem.",
      },
      links: {
        eyebrow: "Repository",
        title: "Links",
        githubTodo: "",
      },
    },
  },
  en: {
    metadata: {
      title: "Saiankith Reddy Kolli | Machine Learning Engineer",
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
      title: "Machine Learning Engineer",
      summaryLines: [
        "M.Eng. student focused on machine learning, computer vision, and data analytics.",
        "Building practical projects for real-world engineering applications.",
      ],
      location: "Amberg, Germany",
      education: "M.Eng. in AI for Smart Sensors and Actuators",
      institution: "Deggendorf Institute of Technology",
      chips: [
        "Computer Vision",
        "Machine Learning",
        "Data Analytics",
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
      text: "I am pursuing an M.Eng. in AI for Smart Sensors and Actuators at Deggendorf Institute of Technology. Through my master’s projects, I am building practical skills in machine learning, computer vision, data analytics, smart sensors, edge systems, and interactive ML applications. My previous pharmaceutical-industry experience gives me an additional understanding of industrial processes, monitoring, sensors, actuators, and automation.",
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
      title: "Selected projects at a glance",
      intro:
        "Selected projects from computer vision, smart sensors, and intelligent systems.",
      actions: {
        viewCaseStudy: "View Case Study",
        tryLiveDemo: "Try Live Demo",
        github: "GitHub",
        liveDemoOpensInNewTab: "Live demo opens in a new tab",
        githubDisabled: "GitHub",
      },
      cards: [
        {
          id: "lane-detection-ebike",
          title: "Lane Detection for E-Bike Perception",
          summary:
            "Camera-based lane detection using image preprocessing and deep-learning training for an e-bike perception use case.",
          tags: ["Computer Vision", "OpenCV", "Deep Learning"],
          status: "Completed",
          imageAlt:
            "Cyclist on an urban bike lane representing the e-bike perception use case",
          slug: "lane-detection-ebike",
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
          id: "uv-roller-blind",
          title: "UV Measurement and Automated Roller-Blind Steering",
          summary:
            "Smart-sensor project involving UV monitoring, Bluetooth communication, edge-device architecture, and automated roller-blind control.",
          tags: ["Smart Sensors", "Bluetooth", "Edge Systems"],
          status: "Completed",
          imageAlt:
            "Abstract illustration of UV sensing and automated blind control",
          detailsState: "Details coming soon",
        },
      ],
      pageTitle: "Project directions and evidence status",
      pageDescription:
        "These project summaries use only verified claims from the master content document. The lane-detection project and the drug-feedback project now have published case studies, while the remaining detail views stay unavailable until their evidence is reviewed.",
      pageCards: [
        {
          id: "lane-detection-ebike",
          title: "Lane Detection for E-Bike Perception",
          summary:
            "Camera-based lane detection using image preprocessing and deep-learning training for an e-bike perception use case.",
          tags: ["Computer Vision", "OpenCV", "Deep Learning"],
          status: "Completed",
          imageAlt:
            "Cyclist on an urban bike lane representing the e-bike perception use case",
          slug: "lane-detection-ebike",
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
          id: "uv-roller-blind",
          title: "UV Measurement and Automated Roller-Blind Steering",
          summary:
            "Smart-sensor project involving UV monitoring, Bluetooth communication, edge-device architecture, and automated roller-blind control.",
          tags: ["Smart Sensors", "Bluetooth", "Edge Systems"],
          status: "Completed",
          imageAlt:
            "Abstract illustration of UV sensing and automated blind control",
          detailsState: "Details coming soon",
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
          id: "sentinel-rag-assistant",
          title: "Sentinel Enterprise RAG Assistant",
          summary:
            "Enterprise RAG assistant concept in progress. Only implemented components will be published later, with planned functionality kept separate.",
          tags: ["In Progress", "Enterprise RAG"],
          status: "In progress",
          imageAlt: "Abstract illustration of an enterprise RAG assistant concept",
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
            "Worked with pharmaceutical processes, industrial monitoring, sensors, actuators, automation, PFDs, and P&IDs. This experience strengthened my understanding of real-world engineering systems.",
        },
        {
          id: "internship",
          role: "Intern",
          company: "Aurobindo Pharma Ltd.",
          description:
            "Gained practical exposure to pharmaceutical-industry workflows and process environments. The internship developed my understanding of industrial operations.",
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
    laneDetection: {
      backLabel: "← Back to Projects",
      category: "Computer Vision",
      status: "Completed",
      title: "Lane Detection for E-Bike Perception",
      summary:
        "This completed project explores camera-based lane detection for an e-bike perception use case. The workflow includes camera-image processing, image preprocessing, deep-learning training, and lane-related visual output.",
      overviewHeading: "Overview",
      overviewText:
        "This completed project explores camera-based lane detection for an e-bike perception use case. The workflow includes camera-image processing, image preprocessing, deep-learning training, and lane-related visual output.",
      workflowHeading: "Project workflow and contribution",
      workflowSteps: [
        "Situation — The project addressed the need for camera-based lane-related perception in an e-bike use case.",
        "Task — Build a workflow that processes camera images and supports lane detection through deep-learning training.",
        "Action — Prepared and preprocessed image data for the lane-detection workflow.",
        "Action — Worked with an image dataset of approximately 35,000 images and trained a deep-learning-based approach.",
        "Result — Completed a working lane-detection workflow. The exact evaluation definition for the previously stated accuracy value remains to be verified before publication.",
      ],
      stepLabel: "Step",
      snapshotEyebrow: "Snapshot",
      snapshotTitle: "Technical snapshot",
      technologiesTitle: "Technologies",
      technologies: "Python · OpenCV · Deep Learning",
      datasetTitle: "Dataset",
      datasetSize: "Approximately 35,000 images",
      evaluationTitle: "Evaluation",
      evaluationNote:
        "The exact evaluation definition for the previously stated accuracy value remains to be verified before publication.",
      sourcesHeading: "Sources",
      sourcesText:
        "Project paper and technical sources will be added after verification.",
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
            label: "Interface",
            value: "Streamlit web application",
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
          {
            label: "Status",
            value: "Completed",
          },
        ],
      },
      problem: {
        eyebrow: "Problem Statement",
        title: "Why this project exists",
        text:
          "Patient-reported drug-feedback datasets contain signals such as effectiveness, satisfaction, ease of use, drug identity, and textual drug information. The goal of this project was to build an interactive analytics application that supports data exploration and condition classification.",
      },
      impact: {
        eyebrow: "Why It Matters",
        title: "Domain context and end-to-end ML",
        text:
          "This project connects my pharmaceutical-industry exposure with my machine-learning direction. It demonstrates an end-to-end workflow from data loading and preprocessing to ML modeling, evaluation, deployment, and interactive user testing.",
      },
      contribution: {
        eyebrow: "My Contribution",
        title: "What I built",
        items: [
          "Built an interactive Streamlit application for exploring patient-reported drug-feedback data and testing prediction workflows directly in the browser.",
          "Created exploratory-data-analysis views for rating distributions, correlations, and relationships between drug-feedback features.",
          "Prepared numerical, categorical, and text-based features for machine-learning workflows using preprocessing and feature-transformation steps.",
          "Implemented a medical-condition classification workflow and exposed a live prediction interface for user-driven testing.",
          "Added clustering and regression exploration pages to compare different analytical tasks inside one application.",
          "Deployed the completed application publicly through Streamlit so recruiters and users can test the workflow directly.",
        ],
      },
      workflow: {
        eyebrow: "Workflow",
        title: "From dataset to live prediction",
        stepLabel: "Step",
        steps: [
          "Dataset",
          "Data Loading",
          "EDA",
          "Preprocessing",
          "Feature Engineering",
          "Classification",
          "Evaluation",
          "Live Prediction Interface",
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
        text:
          "The values below are the current app-reported results. Classification is the main portfolio workflow. Clustering and regression are included as additional analytical explorations.",
        metricLabel: "Classification",
        metricValue: "Test accuracy: 69.14%",
      },
      disclaimer: {
        eyebrow: "Disclaimer",
        title: "Important scope note",
        text:
          "Educational ML project based on patient-reported feedback. Not a medical, diagnostic, or clinical decision-support tool.",
      },
      links: {
        eyebrow: "Repository",
        title: "Links",
        githubTodo: "",
      },
    },
  },
} satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
