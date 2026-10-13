
import ContactLinks from "../components/ContactLinks.jsx";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2 className="section-title">
            Let's Build Something <span>Great</span>
          </h2>

          <p className="section-intro">
            I'm a software developer interested in building
            useful web and mobile applications. Whether you have
            a project, a job opportunity, or an idea to discuss,
            I'd be happy to connect with you.
          </p>

          <ContactLinks />

          <p className="contact-note">
            Open to professional opportunities and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
