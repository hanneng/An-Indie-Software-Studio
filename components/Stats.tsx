"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

interface StatCardProps {
  label: string;
  value: number | string;
  delay?: number;
}

function StatCard({ label, value, delay = 0 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(
    typeof value === "string" ? value : 0
  );
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof value === "string") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const end = value;
          const duration = 1200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <FadeIn delay={delay}>
      <div
        ref={ref}
        className="rounded-2xl border border-card-border bg-card p-8 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
      >
        <div
          className="text-4xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {displayValue}
        </div>
        <div className="mt-2 text-sm text-secondary-text">{label}</div>
      </div>
    </FadeIn>
  );
}

export function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard label="Products" value={7} delay={0} />
          <StatCard label="Live" value={5} delay={0.1} />
          <StatCard label="Building" value={2} delay={0.2} />
          <StatCard label="Years Building" value="2026–" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
