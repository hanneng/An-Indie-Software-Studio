import { ExternalLink } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./BrandIcons";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            About Han Neng
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-4 text-secondary-text">
            <p>
              I&apos;m a cybersecurity and technology professional who enjoys
              building practical software.
            </p>
            <p>
              My interests include AI, cloud computing, cybersecurity,
              automation, data analytics, and product development.
            </p>
            <p className="font-medium text-foreground">
              HanNeng.net is my indie software studio where I build products,
              experiment with new ideas, and document the journey.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/hanneng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-card hover:border-accent/30"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/hanneng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-card hover:border-accent/30"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href="https://1024.today"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-card hover:border-accent/30"
            >
              <ExternalLink size={16} />
              1024.today
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
