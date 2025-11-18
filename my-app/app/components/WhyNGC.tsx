import Image, { StaticImageData } from "next/image";

// Images
import whyVisual from "../assets/steve-johnson-_0iV9LmPDn0-unsplash.jpg";
import spaceMood from "../assets/growtika-yGQmjh2uOTg-unsplash.jpg";
import kidsLearning from "../assets/kidscode.jpg";

// TYPES
type Reason = {
  title: string;
  copy: string;
  image: StaticImageData;
  accent: string;
};

// CONTENT (rewritten for kids learning coding + AI)
const reasons: Reason[] = [
  {
    title: "Friendly & Skilled Mentors",
    copy: "Kids learn from patient, experienced mentors who love teaching coding, robotics, and AI in a fun, easy-to-understand way.",
    image: whyVisual,
    accent: "var(--lavender-purple)",
  },
  {
    title: "Personalized Learning",
    copy: "Small group classes ensure every child gets attention, support, and the confidence to create amazing digital projects.",
    image: kidsLearning,
    accent: "var(--mint-teal)",
  },
  {
    title: "Creative Tech Spaces",
    copy: "Children explore coding inside inspiring, kid-safe tech studios filled with laptops, tablets, and everything needed to build cool ideas.",
    image: spaceMood,
    accent: "var(--sky-blue)",
  },
];

export default function WhyNGC() {
  return (
    <section className="page-shell" id="why-ngc" aria-labelledby="why-title">
      <div className="section-heading">
        <span className="eyebrow">Why NGC</span>

        <h2 className="section-title" id="why-title">
          A place where kids create, explore & grow
        </h2>

        <p className="section-copy">
          Our learning experience is designed to spark curiosity, build confidence,
          and help kids bring their ideas to life using code, AI, and creativity.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <article className="why-card" key={reason.title}>
            <div
              className="pill"
              style={{
                borderColor: reason.accent,
                color: reason.accent,
              }}
            >
              {reason.title}
            </div>

            <p style={{ color: "var(--text-muted)" }}>{reason.copy}</p>

            <div
              style={{
                position: "relative",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                minHeight: "180px",
              }}
            >
              <Image
                src={reason.image}
                alt={reason.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
