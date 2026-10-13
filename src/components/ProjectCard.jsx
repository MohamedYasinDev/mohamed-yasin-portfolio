
export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-icon">{"</>"}</span>
        <span className="project-status">{project.status}</span>
      </div>

      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="tech-list">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      {project.link && (
        <a
          className="project-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View project ↗
        </a>
      )}
    </article>
  );
}
