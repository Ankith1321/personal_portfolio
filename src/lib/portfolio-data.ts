export type ProjectCardId =
  | "lane-detection-ebike"
  | "drug-feedback-analytics"
  | "uv-roller-blind"
  | "turtlebot3-line-following"
  | "sentinel-rag-assistant";

export type PublishedProjectSlug =
  | "lane-detection-ebike"
  | "drug-feedback-analytics";

type ProjectAsset = {
  imageSrc?: string;
};

type PublishedProjectLinkConfig = {
  demoHref?: string;
  githubHref?: string;
  githubTodo?: string;
};

const projectAssets: Record<ProjectCardId, ProjectAsset> = {
  "lane-detection-ebike": {
    imageSrc: "/images/projects/lane-detection-visual.svg",
  },
  "drug-feedback-analytics": {
    imageSrc: "/images/projects/drug-feedback-analytics-hero.svg",
  },
  "uv-roller-blind": {
    imageSrc: "/images/projects/uv-roller-blind-visual.svg",
  },
  "turtlebot3-line-following": {
    imageSrc: "/images/projects/turtlebot-visual.svg",
  },
  "sentinel-rag-assistant": {},
};

const publishedProjectLinks: Record<
  PublishedProjectSlug,
  PublishedProjectLinkConfig
> = {
  "lane-detection-ebike": {},
  "drug-feedback-analytics": {
    demoHref: "https://drug-performance.streamlit.app/",
    githubTodo: "TODO: ADD VERIFIED GITHUB REPOSITORY URL",
  },
};

export function getProjectAsset(id: ProjectCardId) {
  return projectAssets[id];
}

export function getPublishedProjectLinks(slug: PublishedProjectSlug) {
  return publishedProjectLinks[slug];
}
