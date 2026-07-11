import { notes } from "@/content/notes";
import { FadeIn } from "./FadeIn";

export function Notes() {
  return (
    <section id="notes" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Workshop Notes
            </h2>
            <p className="mt-4 text-secondary-text">
              Recent updates and progress
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-12">
          {notes.map((note, idx) => (
            <FadeIn key={`${note.month}-${note.year}`} delay={idx * 0.1}>
              <div>
                <h3 className="text-lg font-semibold text-accent">
                  {note.month} {note.year}
                </h3>
                <ul className="mt-4 space-y-3 border-l-2 border-card-border pl-6">
                  {note.entries.map((entry, index) => (
                    <li
                      key={index}
                      className="relative text-sm text-secondary-text before:absolute before:-left-[29px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-accent/50"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
