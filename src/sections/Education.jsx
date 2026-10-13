
const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "University of Somalia (UNISO)",
    period: "Sep 2022 – Jun 2026",
    location: "Mogadishu, Somalia",
    type: "Bachelor's Degree",
  },
  {
    degree: "Diploma in Web Development",
    institution: "Kaafiye Technology",
    period: "Jan 2025 – Jun 2025",
    location: "Mogadishu, Somalia",
    type: "Professional Diploma",
  },
  {
    degree: "Basic Computer Diploma",
    institution: "Himilo Computer Training Center",
    period: "Sep 2019 – Sep 2020",
    location: "Buuhodle, Somalia",
    type: "Diploma",
  },
  {
    degree: "High School Certificate",
    institution: "Turkoglu Buhodle Primary and Secondary School",
    period: "Aug 2019 – Jun 2022",
    location: "Buuhodle, Somalia",
    type: "Secondary Education",
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="eyebrow">MY ACADEMIC BACKGROUND</p>

        <h2 className="section-title">
          Education & <span>Training</span>
        </h2>

        <p className="section-intro">
          My academic journey and professional learning have
          helped me build a strong foundation in computer
          science and software development.
        </p>

        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.degree}>
              <div className="education-icon">
                <span>EDU</span>
              </div>

              <div className="education-content">
                <span className="education-type">
                  {item.type}
                </span>

                <h3>{item.degree}</h3>

                <p className="education-institution">
                  {item.institution}
                </p>

                <div className="education-meta">
                  <span>📅 {item.period}</span>
                  <span>📍 {item.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
