
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
       
<a className="logo" href="#home" aria-label="Mohamed Yasin Ali - Home">
  <span className="logo-mark">MY</span>
  <span className="logo-dot">.</span>
  <span className="logo-name">Mohamed Yasin</span>
</a>


        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="button button-small"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
