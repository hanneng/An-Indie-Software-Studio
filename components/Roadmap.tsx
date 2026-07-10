import { roadmap } from "@/content/roadmap";

export function Roadmap() {
  return (
    <section id="roadmap" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Roadmap
          </h2>
          <p className="mt-4 text-secondary-text">
            What I&apos;m working on and what&apos;s coming next
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Now */}
          <div className="rounded-2xl border border-accent/30 bg-card p-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {roadmap.now.title}
              </h3>
            </div>
            <ul className="mt-4 space-y-3">
              {roadmap.now.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-secondary-text"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Next */}
          <div className="rounded-2xl border border-card-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              {roadmap.next.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {roadmap.next.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-secondary-text"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary-text/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Future */}
          <div className="rounded-2xl border border-card-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              {roadmap.future.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {roadmap.future.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-secondary-text"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary-text/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
