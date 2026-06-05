export type ProjectCardId =
  | "lane-detection-ebike"
  | "drug-feedback-analytics"
  | "uv-roller-blind"
  | "turtlebot3-line-following"
  | "sentinel-rag-assistant";

export type ProjectType = "academic" | "personal";

export type PublishedProjectSlug =
  | "lane-detection-ebike"
  | "drug-feedback-analytics";

type ProjectAsset = {
  projectType: ProjectType;
  imageSrc?: string;
};

type PublishedProjectLinkConfig = {
  demoHref?: string;
  githubHref?: string;
  githubTodo?: string;
};

const projectAssets: Record<ProjectCardId, ProjectAsset> = {
  "lane-detection-ebike": {
    projectType: "academic",
    imageSrc: "/images/projects/lane-detection-ebike/hero.png",
  },
  "drug-feedback-analytics": {
    projectType: "personal",
    imageSrc: "/images/projects/drug-feedback-analytics-hero.svg",
  },
  "uv-roller-blind": {
    projectType: "academic",
    imageSrc: "/images/projects/uv-roller-blind-visual.svg",
  },
  "turtlebot3-line-following": {
    projectType: "academic",
    imageSrc: "/images/projects/turtlebot-visual.svg",
  },
  "sentinel-rag-assistant": {
    projectType: "personal",
  },
};

const publishedProjectLinks: Record<
  PublishedProjectSlug,
  PublishedProjectLinkConfig
> = {
  "lane-detection-ebike": {},
  "drug-feedback-analytics": {
    demoHref: "https://drug-performance.streamlit.app/",
    githubHref: "https://github.com/Ankith1321/Drug-Preformance-Evaluation",
    githubTodo: "TODO: CLEAN UP REPOSITORY NAMING BEFORE FINAL POLISH",
  },
};

export function getProjectAsset(id: ProjectCardId) {
  return projectAssets[id];
}

export function getProjectType(id: ProjectCardId) {
  return projectAssets[id].projectType;
}

export function partitionProjectsByType<T extends { id: ProjectCardId }>(
  projects: readonly T[],
) {
  return {
    academic: projects.filter((project) => getProjectType(project.id) === "academic"),
    personal: projects.filter((project) => getProjectType(project.id) === "personal"),
  };
}

export function getPublishedProjectLinks(slug: PublishedProjectSlug) {
  return publishedProjectLinks[slug];
}
