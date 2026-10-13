
const contactLinks = [
  {
    label: "GitHub",
    description: "Explore my projects and code",
    href: "https://github.com/MohamedYasinDev",
  },
  {
    label: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/in/mohamed-yasin-b51a38323/",
  },
  {
    label: "WhatsApp",
    description: "Chat with me directly",
    href: "https://wa.me/252619519045",
  },
  {
    label: "Email",
    description: "Send me an email",
    href: "mailto:maxamedyaasiin236@gmail.com",
  },
];

export default function ContactLinks() {
  return (
    <div className="contact-links">
      {contactLinks.map((item) => (
        <a
          className="contact-link-card"
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-link-content">
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </div>
          <span className="contact-link-arrow">↗</span>
        </a>
      ))}
    </div>
  );
}
