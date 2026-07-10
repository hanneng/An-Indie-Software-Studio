import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const liveProjects = projects.filter((p) => p.category === "live");
  const buildingProjects = projects.filter((p) => p.category === "building");

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-secondary-text">
            Software products and experiments I&apos;m building
          </p>
        </div>

        {/* Live Projects */}
        <div className="mt-16">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
            <span className="text-xl">🚀</span> Live
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {liveProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* Building Projects */}
        <div className="mt-12">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
            <span className="text-xl">🛠</span> Building
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {buildingProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
