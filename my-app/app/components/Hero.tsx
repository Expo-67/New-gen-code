import Image from "next/image";
import heroVisual from "../assets/space4.jpg";
import headerBackdrop from "../assets/space1.jpg";

const heroHighlights = [
  "Fun beginner-friendly cohorts",
  "Weekly AI challenges",
  "Guided by friendly mentors",
];

export default function Hero() {
  return (
    <section className="page-shell" id="hero" aria-labelledby="hero-title">
      <div className="hero">
        {/* Text Section */}
        <div className="hero__copy">
          <span className="eyebrow">Code, Create, Explore</span>
          <h1
            id="hero-title"
            className="brand-gradient"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.4rem)" }}
          >
            New Gen Codes
          </h1>
          <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
            Kids Coding & AI Programs
          </h2>
          <p>
            Dive into web development and artificial intelligence in a playful, hands-on environment. 
            Build projects, solve challenges, and learn alongside other young creators with guidance 
            from friendly industry mentors.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero__cta">
            <a className="cta-button" href="#programs">
              Explore Programs
            </a>
            <a className="ghost-button" href="#contact">
              Book a Tour
            </a>
          </div>

          {/* Highlight Chips */}
          <div className="tagline-chips">
            {heroHighlights.map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="hero__image" aria-hidden="true" style={{ minHeight: "480px" }}>
          <Image
            src={heroVisual}
            alt="Kids collaborating inside the New Gen Codes studio"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 540px"
            style={{ objectFit: "cover", borderRadius: "20px" }}
          />

          {/* Floating Card Overlay */}
          <div className="floating-card">
            <div
              style={{
                width: "130px",
                height: "74px",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                marginBottom: "0.7rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Image
                src={headerBackdrop}
                alt="Creative workspace vignette"
                fill
                sizes="130px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <strong style={{ color: "var(--mint-teal)" }}>Learn with Mentors</strong>
            <p style={{ margin: "0.35rem 0 0", color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Fun sessions · Weekly demos · Hands-on projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
