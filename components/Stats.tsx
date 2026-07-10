"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  label: string;
  value: number | string;
  suffix?: string;
}

function StatCard({ label, value, suffix }: StatCardProps) {
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
          let start = 0;
          const end = value;
          const duration = 1000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * end);
            setDisplayValue(start);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-card-border bg-card p-8 text-center transition-all hover:border-accent/30"
    >
      <div className="text-4xl font-bold text-foreground">
        {displayValue}
        {suffix && <span className="text-accent">{suffix}</span>}
      </div>
      <div className="mt-2 text-sm text-secondary-text">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard label="Products" value={4} />
          <StatCard label="Live" value={2} />
          <StatCard label="Building" value={2} />
          <StatCard label="Ideas" value="∞" />
        </div>
      </div>
    </section>
  );
}
