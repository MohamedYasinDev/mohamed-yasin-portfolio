
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import Education from "./sections/Education.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Mohamed Yasin Ali.
          Built with React.
        </p>
      </footer>
    </>
  );
}
