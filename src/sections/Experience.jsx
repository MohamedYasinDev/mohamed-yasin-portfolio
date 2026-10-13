
const experience = [
  {
    title: "Founder and CEO",
    organization: "Maxsul Technology",
    period: "Sep 2023 – Present",
    location: "Mogadishu, Somalia",
    description:
      "Founder and CEO of Maxsul Technology, leading software development, managing projects, and delivering web and mobile solutions.",
    responsibilities: [
      "Leading software development projects",
      "Managing projects and development activities",
      "Delivering web and mobile solutions",
    ],
  },
  {
    title: "Software Developer",
    organization: "Taran-Academic-Hub",
    period: "Feb 2026 – Present",
    location: "Mogadishu, Somalia",
    description:
      "Developing web applications and managing databases while building user-friendly interfaces and implementing system functionality.",
    responsibilities: [
      "Developing web applications",
      "Designing and managing databases",
      "Building interfaces with HTML, CSS, and Bootstrap",
      "Implementing CRUD operations",
    ],
  },
  {
    title: "Software Development Trainee",
    organization: "Tabaarak ICT",
    period: "Aug 2026 – Sep 2026",
    location: "Mogadishu, Somalia",
    description:
      "Participated in software development training focused on MERN stack development, full-stack applications, APIs, and deployment.",
    responsibilities: [
      "Practicing full-stack development",
      "Working with APIs and application integration",
      "Learning application deployment",
    ],
  },
  {
    title: "Web Developer",
    organization: "CodeAlpha",
    period: "Jul 2025 – Aug 2025",
    location: "Remote, Somalia",
    description:
      "Designed and developed responsive web applications and contributed to frontend and backend development tasks in a remote environment.",
    responsibilities: [
      "Building interfaces with HTML, CSS, and JavaScript",
      "Developing backend functionality using PHP and MySQL",
      "Collaborating with team members remotely",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="eyebrow">MY PROFESSIONAL JOURNEY</p>

        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>

        <p className="section-intro">
          My professional experience includes software development,
          web application development, project leadership, and
          practical technical training.
        </p>

        <div className="experience-list">
          {experience.map((item) => (
            <article
              className="experience-card"
              key={`${item.organization}-${item.title}`}
            >
              <div className="experience-marker">
                <span></span>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="experience-company">
                      {item.organization}
                    </p>
                  </div>

                  <span className="experience-period">
                    {item.period}
                  </span>
                </div>

                <p className="experience-location">
                  📍 {item.location}
                </p>

                <p className="experience-description">
                  {item.description}
                </p>

                <ul className="experience-responsibilities">
                  {item.responsibilities.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
