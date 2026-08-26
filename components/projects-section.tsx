import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "NewsNow-Worldwide News Aggregator",
    description:
      "Architected a dynamic full-stack aggregator delivering real-time multi-source news streams with responsive filtering and low latency updates.",
    tags: ["React", "Spring Boot", "MongoDB", "NewsAPI"],
  },
  {
    title: "MovieTime-Movie Recommendation System",
    description:
      "Developed an interactive recommendation portal integrating third-party movie metadata APIs and dynamic query capabilities.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
  },
  {
    title: "End-to-End ML Pipeline",
    description:
      "Designed a complete machine learning pipeline covering data preprocessing, model training, evaluation metrics, and a deployment-ready project structure.",
    tags: ["Python", "Scikit-learn", "Pipeline", "ML"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-mono tracking-widest uppercase text-primary">
          Projects
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Selected work
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Hands-on projects showcasing skills in data science, machine learning,
          and software engineering.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
