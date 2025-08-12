import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Radar,
} from "recharts";

const skillsData = [
  { skill: "SQL", value: 90 },
  { skill: "Excel", value: 85 },
  { skill: "Tableau", value: 75 },
  { skill: "Power BI", value: 80 },
  { skill: "Python", value: 70 },
  { skill: "Statistics", value: 70 },
];

const Skills: React.FC = () => {
  return (
    <section aria-label="Skills proficiency radar chart" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border bg-card text-card-foreground p-3">
              Business process mapping
            </div>
            <div className="rounded-lg border bg-card text-card-foreground p-3">
              Data analysis
            </div>
            <div className="rounded-lg border bg-card text-card-foreground p-3">
              Dashboards and reporting
            </div>
          </div>
          <div className="w-full h-[300px] sm:h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsData} margin={{ top: 16, right: 16, bottom: 16, left: 16 }}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                  stroke="hsl(var(--border))"
                />
                <Tooltip />
                <Radar
                  name="Proficiency"
                  dataKey="value"
                  stroke="hsl(var(--brand))"
                  fill="hsl(var(--brand))"
                  fillOpacity={0.2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Skills;
