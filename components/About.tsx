import { ExternalLink } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./BrandIcons";

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Han Neng
        </h2>

        <div className="mt-8 space-y-4 text-secondary-text">
          <p>
            I&apos;m a cybersecurity and technology professional with a passion
            for building useful software.
          </p>
          <p>
            My interests span AI, cybersecurity, cloud computing, data
            analytics, automation, and product development.
          </p>
          <p>
            Outside of my professional work, I enjoy creating practical digital
            products that solve everyday problems.
          </p>
          <p className="font-medium text-foreground">
            HanNeng.net is where I document that journey and share everything
            I&apos;m building.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/hanneng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/hanneng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://1024.today"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            <ExternalLink size={16} />
            1024.today
          </a>
        </div>
      </div>
    </section>
  );
}
