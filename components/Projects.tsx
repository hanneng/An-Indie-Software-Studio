import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "./FadeIn";

export function Projects() {
  const liveProjects = projects.filter((p) => p.category === "live");
  const buildingProjects = projects.filter((p) => p.category === "building");

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Projects
            </h2>
            <p className="mt-4 text-secondary-text">
              Software products and experiments I&apos;m building
            </p>
          </div>
        </FadeIn>

        {/* Live Products */}
        <div className="mt-16">
          <FadeIn>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="text-xl">🚀</span> Live Products
            </h3>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {liveProjects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* On the Workbench */}
        <div className="mt-12">
          <FadeIn>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="text-xl">🛠</span> On the Workbench
            </h3>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {buildingProjects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
