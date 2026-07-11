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
    name: "PostJourney Gallery",
    description: "A public collection of postcards and stamps from around the world.",
    status: "Live",
    tags: ["Cloudflare Pages", "Maps", "AI", "Travel"],
    icon: "📮",
    url: "https://postjourney.app/",
    github: "",
    category: "live",
  },
  {
    name: "1024.today",
    description: "AI-powered weekly intelligence covering Alibaba Cloud, Qwen, AI and cloud technologies.",
    status: "Live",
    tags: ["Newsletter", "AI", "Alibaba Cloud"],
    icon: "📰",
    url: "https://1024.today/",
    github: "",
    category: "live",
  },
  {
    name: "Stylomylo",
    description: "AI-powered Style Assistant. Never Wonder What to Wear Again.",
    status: "Live",
    tags: ["AI", "Fashion", "Next.js"],
    icon: "👗",
    url: "https://stylomylo.co/",
    github: "",
    category: "live",
  },
  {
    name: "PropTrader.guru",
    description: "Professional trading tools and analytics platforms.",
    status: "Live",
    tags: ["Finance", "Trading", "Analytics"],
    icon: "📊",
    url: "https://www.proptrader.guru/",
    github: "",
    category: "live",
  },
  {
    name: "AI Virtual CISO",
    description: "An AI-powered virtual security advisor that helps organisations strengthen their cybersecurity posture.",
    status: "Building",
    tags: ["AI", "Cybersecurity", "SaaS"],
    icon: "🛡️",
    url: "",
    github: "",
    category: "building",
  },
  {
    name: "Tourism Data Intelligence",
    description: "Transform tourism and hospitality datasets into practical business intelligence dashboards.",
    status: "Planning",
    tags: ["Data", "BI", "Tourism"],
    icon: "🌏",
    url: "",
    github: "",
    category: "building",
  },
];
