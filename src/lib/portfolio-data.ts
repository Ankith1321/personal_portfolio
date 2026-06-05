export type ProjectCardId =
  | "traffic-sign-detection-ebike"
  | "drug-feedback-analytics"
  | "uv-monitoring-roller-blind";

export type ProjectType = "academic" | "personal";

export type PublishedProjectSlug =
  | "traffic-sign-detection-ebike"
  | "uv-monitoring-roller-blind"
  | "drug-feedback-analytics";

type ProjectAsset = {
  projectType: ProjectType;
  imageSrc?: string;
  imageFit?: "cover" | "contain";
};

type PublishedProjectLinkConfig = {
  demoHref?: string;
  githubHref?: string;
  githubTodo?: string;
};

const projectAssets: Record<ProjectCardId, ProjectAsset> = {
  "traffic-sign-detection-ebike": {
    projectType: "academic",
    imageSrc: "/images/projects/lane-detection-ebike/hero.png",
  },
  "drug-feedback-analytics": {
    projectType: "personal",
    imageSrc: "/images/projects/drug-feedback-analytics-hero.svg",
  },
  "uv-monitoring-roller-blind": {
    projectType: "academic",
    imageSrc: "/images/projects/uv-monitoring-roller-blind/uv-monitoring-roller-blind.svg",
    imageFit: "contain",
  },
};

const publishedProjectLinks: Record<
  PublishedProjectSlug,
  PublishedProjectLinkConfig
> = {
  "traffic-sign-detection-ebike": {},
  "uv-monitoring-roller-blind": {},
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
