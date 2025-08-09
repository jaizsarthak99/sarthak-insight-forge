import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Spotlight from "@/components/Spotlight";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { Mail, FileDown, ArrowRight, BarChart3, LineChart, PieChart } from "lucide-react";

const Index = () => {
  const title = "SarthaK Jaiswal | Business Analyst Portfolio";
  const description = "Modern business analyst portfolio: case studies, skills, and contact.";
  const canonical = typeof window !== "undefined" ? window.location.href : "/";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "SarthaK Jaiswal",
          jobTitle: "Business Analyst",
          url: canonical,
        })}</script>
      </Helmet>

      <header className="relative">
        <nav className="container mx-auto flex items-center justify-between py-6">
          <a href="#top" className="font-semibold tracking-tight text-foreground">SJ</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#work" className="hover:opacity-80">Case Studies</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-block"><Button variant="outline" size="sm"><Mail className="mr-2"/>Contact</Button></a>
            <a href="#work"><Button variant="hero" size="sm">View Work<ArrowRight className="ml-2"/></Button></a>
          </div>
        </nav>
      </header>

      <main id="top" className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 md:px-8">
          <div className="relative rounded-2xl border border-border/40 bg-background/80 backdrop-blur-sm py-14 md:py-20 px-6 md:px-12 overflow-hidden">
            <Spotlight className="absolute inset-0" />
            <section className="grid md:grid-cols-2 gap-10 items-center relative">
              <article>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  SarthaK Jaiswal — Business Analyst
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  Turning data into decisions. I analyze processes, model KPIs, and deliver insights that improve product, revenue, and customer outcomes.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#work"><Button variant="hero" size="lg">Explore Projects<ArrowRight className="ml-2"/></Button></a>
                  <a href="#contact"><Button variant="outline" size="lg"><Mail className="mr-2"/>Get in touch</Button></a>
                  <a href="#contact"><Button variant="ghost" size="lg"><FileDown className="mr-2"/>Download Resume</Button></a>
                </div>
                <div className="mt-8 flex gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2"><BarChart3/> Process Optimization</div>
                  <div className="flex items-center gap-2"><LineChart/> KPI Dashboards</div>
                  <div className="flex items-center gap-2"><PieChart/> Insights & Strategy</div>
                </div>
              </article>
              <aside className="order-first md:order-none">
                <div className="relative mx-auto w-52 h-52 md:w-64 md:h-64 rounded-full border border-border/60 shadow-glow overflow-hidden">
                  <img
                    src="/lovable-uploads/c06f2537-2c26-46b4-9074-c0d92a2d3a29.png"
                    alt="Professional headshot of a business analyst"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </aside>
            </section>
          </div>
        </div>

        <section id="about" className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
          <div className="grid md:grid-cols-3 gap-8">
            <article className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-3">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in breaking down complex problems and translating them into clear, actionable solutions. My focus areas include requirements gathering, stakeholder communication, building analytical models, and delivering performance dashboards that guide strategy.
              </p>
            </article>
            <aside className="rounded-xl border border-border/40 p-6 bg-card">
              <h3 className="font-medium mb-2">Core Tools</h3>
              <ul className="text-sm text-muted-foreground grid grid-cols-2 gap-2">
                <li className="hover-scale transition-transform animate-fade-in">Excel/Sheets</li>
                <li className="hover-scale transition-transform animate-fade-in">SQL</li>
                <li className="hover-scale transition-transform animate-fade-in">Power BI</li>
                <li className="hover-scale transition-transform animate-fade-in">Tableau</li>
                <li className="hover-scale transition-transform animate-fade-in">Jira/Confluence</li>
                <li className="hover-scale transition-transform animate-fade-in">Python</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="skills" className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Business Process Mapping", desc: "BPMN, requirements elicitation, stakeholder alignment" },
              { title: "Data Analysis", desc: "SQL, data modeling, ETL, hypothesis testing" },
              { title: "Dashboards & Reporting", desc: "KPI design, Power BI/Tableau, executive storytelling" },
            ].map((s, idx) => (
              <article
                key={s.title}
                className="rounded-xl border border-border/40 p-6 bg-card hover:shadow-glow hover-scale transition animate-fade-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <h3 className="font-medium">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <ExperienceTimeline
            items={[
              {
                role: "Operations Assistant",
                company: "University of Warwick, UK",
                period: "Feb 2024 – Present",
                points: [
                  "Led end-to-end data reporting for 25,000+ students, improving forecasting accuracy to 98%.",
                  "Streamlined reconciliation of 50,000+ accommodation records using Power BI and Excel.",
                  "Automated GDPR-compliant document generation, reducing workload by 60%."
                ]
              },
              {
                role: "Business Analyst",
                company: "Robinson Moore, UK",
                period: "Oct 2023 – Mar 2024",
                points: [
                  "Analysed CRM user engagement for 5,000+ users, boosting daily active users by 25%.",
                  "Cleaned customer data across 8 systems for accurate CRM migration (+35% lead assignment accuracy).",
                  "Created workflow visualizations, reducing turnaround time by 30%."
                ]
              },
              {
                role: "Founder",
                company: "Artwitch LLP, India",
                period: "Nov 2020 – Jan 2023",
                points: [
                  "Built forecasting models for artist commissions, increasing fulfilment rate by 30%.",
                  "Managed analytics for 20+ hospitality brands, growing B2B revenue 7.5x in 18 months.",
                  "Developed budget dashboards maintaining 95% adherence to spending plans."
                ]
              }
            ]}
          />
        </section>

        <section id="work" className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
          <h2 className="text-2xl font-semibold mb-6">Highlighted Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Reducing churn with cohort analysis",
                desc: "Identified risk signals and optimized onboarding, improving retention by 8%.",
              },
              {
                title: "Supply chain dashboard for ops",
                desc: "Unified KPIs across systems, enabling faster weekly decision cycles.",
              },
            ].map((c) => (
              <article key={c.title} className="rounded-2xl border border-border/40 p-6 bg-card group overflow-hidden relative">
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{background: "radial-gradient(600px circle at var(--spotlight-x, 50%) var(--spotlight-y, 0%), hsl(var(--brand) / 0.15), transparent 40%)"}} />
                <h3 className="font-medium text-lg">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
                <div className="mt-4"><Button variant="link">Read more <ArrowRight className="ml-1"/></Button></div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 md:px-8 mt-16 md:mt-24 mb-20">
          <div className="rounded-2xl border border-border/40 p-8 bg-card text-center">
            <h2 className="text-2xl font-semibold">Let’s collaborate</h2>
            <p className="text-muted-foreground mt-2">Open to full-time roles and consulting.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="mailto:sarthak@example.com"><Button variant="hero"><Mail className="mr-2"/>Email Me</Button></a>
              <a href="#top"><Button variant="outline">Back to top</Button></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SarthaK Jaiswal • Business Analyst
      </footer>
    </>
  );
};

export default Index;
