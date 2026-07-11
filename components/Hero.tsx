import { ArrowRight, User } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h1
            className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            HAN NENG
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-xl font-medium text-secondary-text sm:text-2xl">
            An Indie Software Studio
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg font-medium text-accent sm:text-xl">
            Building useful software, one project at a time.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8 space-y-4 text-secondary-text">
            <p>
              I build practical software powered by AI, cybersecurity, cloud
              technologies, and data.
            </p>
            <div className="space-y-1">
              <p>Some ideas become products.</p>
              <p>Some remain experiments.</p>
              <p>Every project teaches me something new.</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
            >
              Explore Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-card hover:border-accent/30"
            >
              <User size={16} />
              About Me
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
