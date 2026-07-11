export interface RoadmapItem {
  title: string;
  items: string[];
}

export const roadmap = {
  now: {
    title: "Now",
    items: [
      "Launch HanNeng.net",
      "Improve Stylomylo",
      "Publish more workshop notes",
    ],
  },
  next: {
    title: "Next",
    items: [
      "AI Virtual CISO",
      "Tourism Data Intelligence",
      "More AI utilities",
    ],
  },
  future: {
    title: "Future",
    items: [
      "Build more useful SaaS products",
      "Experiment with AI",
      "Continue learning",
    ],
  },
};
