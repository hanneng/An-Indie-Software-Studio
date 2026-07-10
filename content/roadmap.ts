export interface RoadmapItem {
  title: string;
  items: string[];
}

export const roadmap = {
  now: {
    title: "Now",
    items: [
      "Launch HanNeng.net",
      "Complete What Should I Wear Today",
      "Build CyberReady MVP",
    ],
  },
  next: {
    title: "Next",
    items: [
      "Hotel Intelligence",
      "AI Virtual Security Officer",
      "Singapore Open Data Explorer",
    ],
  },
  future: {
    title: "Future",
    items: [
      "Build more useful SaaS products",
      "Publish technical articles",
      "Continue experimenting with AI",
      "Learn new cloud technologies",
    ],
  },
};
