
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="container">
        <p className="eyebrow">SELECTED WORK</p>
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <p className="section-intro">
          A selection of applications and software ideas
          involving web development, mobile apps, and APIs.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
