
import skills from "../data/skills.js";
import SkillGroup from "../components/SkillGroup.jsx";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="eyebrow">MY TOOLKIT</p>
        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>
        <p className="section-intro">
          Technologies I use or have worked with in software development.
        </p>

        <div className="skills-grid">
          {skills.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
