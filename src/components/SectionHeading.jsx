
export default function SectionHeading({ eyebrow, title, highlight }) {
  return (
    <>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">
        {title} <span>{highlight}</span>
      </h2>
    </>
  );
}
