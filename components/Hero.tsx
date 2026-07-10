import { ArrowRight, User } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="animate-fade-in text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          Han Neng
        </h1>
        <p
          className="animate-fade-in mt-4 text-xl font-medium text-secondary-text sm:text-2xl"
          style={{ animationDelay: "0.1s" }}
        >
          An Indie Software Studio
        </p>
        <p
          className="animate-fade-in mt-6 text-lg font-medium text-accent sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Building useful software, one project at a time.
        </p>
        <div
          className="animate-fade-in mt-8 space-y-4 text-secondary-text"
          style={{ animationDelay: "0.3s" }}
        >
          <p>
            I build practical software powered by AI, cybersecurity, cloud
            technologies, and data.
          </p>
          <p className="space-y-1">
            <span className="block">Some ideas become products.</span>
            <span className="block">Some remain experiments.</span>
            <span className="block">Every project teaches me something new.</span>
          </p>
          <p className="font-medium text-foreground">Welcome to my studio.</p>
        </div>
        <div
          className="animate-fade-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Explore Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            <User size={16} />
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
