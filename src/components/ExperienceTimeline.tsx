import React from "react";

export type TimelineItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items }) => {
  return (
    <ol aria-label="Work experience timeline" className="relative border-l border-border/60 pl-6">
      {items.map((item, idx) => (
        <li key={item.role + item.company} className="relative mb-10 animate-fade-in" style={{ animationDelay: `${idx * 120}ms` }}>
          {/* Node */}
          <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary shadow-glow" aria-hidden="true" />

          <article className="bg-card border border-border/40 rounded-xl p-5 hover:shadow-glow transition-shadow">
            <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-medium tracking-tight text-foreground">
                {item.role} 									
                <span className="text-muted-foreground">– {item.company}</span>
              </h3>
              <time className="text-xs text-muted-foreground">{item.period}</time>
            </header>

            <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
              {item.points.map((p, i) => (
                <li key={i} className="leading-relaxed">{p}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
};

export default ExperienceTimeline;
