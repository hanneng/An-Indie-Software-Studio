import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<string, string> = {
  Live: "bg-green-500/10 text-green-400 border-green-500/20",
  Building: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Planning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background text-2xl">
          {project.icon}
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${statusColors[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <h3
        className="mt-4 text-lg font-semibold text-foreground"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-secondary-text">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-background px-2.5 py-1 text-xs text-secondary-text"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-4 py-2 text-xs font-medium text-accent transition-all duration-200 hover:bg-accent/20"
          >
            <ExternalLink size={14} />
            Visit
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-background px-4 py-2 text-xs font-medium text-secondary-text transition-colors duration-200 hover:text-foreground"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
