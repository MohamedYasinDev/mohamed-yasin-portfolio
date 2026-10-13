
export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">
            SOFTWARE DEVELOPER & FOUNDER
          </p>

          <h1>
            Hi, I'm <span>Mohamed Yasin Ali.</span>
          </h1>

          <h2>
            Building Web, Mobile & AI-Powered Applications.
          </h2>

          <p className="hero-description">
            I'm a software developer passionate about building
            reliable digital solutions. My experience includes
            frontend and backend development, mobile applications,
            REST APIs, database design, and AI-powered solutions.
          </p>

          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore My Projects ↗
            </a>

            <a className="button button-outline" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-tags" aria-label="Key technologies">
            <span>React</span>
            <span>Flutter</span>
            <span>Node.js</span>
            <span>PHP</span>
            <span>MongoDB</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-frame">
            <img
              src="/images/projects/her_image.jpeg"
              alt="Mohamed Yasin Ali, Software Developer"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="profile-placeholder">
              <span>MY</span>
              <p>Software Developer</p>
            </div>
          </div>

          <div className="floating-card">
            <span className="status-dot"></span>
            Building useful digital products
          </div>
        </div>
      </div>
    </section>
  );
}
