export type ProjectStatus = "Live" | "Building" | "Planning";

export interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  icon: string;
  url?: string;
  github?: string;
  category: "live" | "building";
}

export const projects: Project[] = [
  {
    name: "PostJourney",
    description: "Track, organise and showcase postcard collections from around the world.",
    status: "Live",
    tags: ["Cloudflare Pages", "Maps", "AI"],
    icon: "📮",
    url: "https://postjourney.com",
    github: "",
    category: "live",
  },
  {
    name: "1024.today",
    description: "A newsletter covering Alibaba Cloud, AI, cloud computing and cybersecurity with practical insights.",
    status: "Live",
    tags: ["Newsletter", "Cloud", "AI"],
    icon: "📰",
    url: "https://1024.today",
    github: "",
    category: "live",
  },
  {
    name: "What Should I Wear Today",
    description: "An AI-powered outfit recommendation platform that suggests what to wear based on weather, occasion and personal style.",
    status: "Building",
    tags: ["AI", "Next.js", "Fashion"],
    icon: "👔",
    url: "",
    github: "",
    category: "building",
  },
  {
    name: "CyberReady",
    description: "Helping SMEs assess and improve their cybersecurity readiness through practical guidance and assessment tools.",
    status: "Planning",
    tags: ["Cybersecurity", "SaaS", "SME"],
    icon: "🛡️",
    url: "",
    github: "",
    category: "building",
  },
];
