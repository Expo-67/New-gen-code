import Image from "next/image";
import HTMLimg from "../assets/growtika-yGQmjh2uOTg-unsplash.jpg";
import AIimg from "../assets/steve-johnson-_0iV9LmPDn0-unsplash.jpg";
import kidslearning from "../assets/kidscode.jpg";

const programTabs = ["Web Basics", "AI for Kids"];

const programs = [
  {
    title: "Web Basics",
    summary:
      "Learn how to create your very first websites using HTML, style them with CSS, and make them interactive with JavaScript. Perfect for beginners!",
    focus: ["HTML Basics", "CSS Styling", "Intro to JavaScript"],
    badge: "12-week fun course",
    image: HTMLimg,
  },
  {
    title: "AI for Kids",
    summary:
      "Explore the exciting world of AI in a playful way. Understand simple concepts behind smart helpers and build tiny AI projects with guidance.",
    focus: ["Simple AI experiments", "Fun coding exercises", "Beginner-friendly Python/JS"],
    badge: "Studio labs",
    image: AIimg,
  },
  {
    title: "Creative Tech",
    summary:
      "Mix storytelling, games, and animations to make your web projects come alive. A playground for your imagination and coding skills!",
    focus: ["Fun web games", "Basic animations", "Interactive mini-projects"],
    badge: "Weekend labs",
    image: kidslearning,
  },
];

export default function Services() {
  return (
    <section className="page-shell" id="programs" aria-labelledby="programs-title">
      <div className="section-heading">
        <span className="eyebrow">NGC Programs</span>
        <h2 className="section-title" id="programs-title">
          Pick a Path & Start Learning
        </h2>
        <p className="section-copy">
          Hands-on mini-projects, fun exercises, and guided workshops designed to help kids learn coding and AI step by step.
        </p>
      </div>

      {/* Program Tabs */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {programTabs.map((tab) => (
          <button
            key={tab}
            className="ghost-button"
            type="button"
            style={{ borderColor: "var(--bubblegum-pink)" }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Program Cards */}
      <div className="services-grid">
        {programs.map((program) => (
          <article className="service-card" key={program.title}>
            <div
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                position: "relative",
              }}
            >
              <Image
                src={program.image}
                alt={`${program.title} illustration`}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              className="pill"
              style={{
                marginTop: "1rem",
                borderColor: "var(--lavender-purple)",
                color: "var(--lavender-purple)",
              }}
            >
              {program.badge}
            </div>

            <h3>{program.title}</h3>
            <p style={{ color: "var(--text-muted)" }}>{program.summary}</p>

            <div className="service-meta">
              {program.focus.map((item) => (
                <span
                  key={item}
                  className="pill"
                  style={{ borderColor: "var(--cool-lilac)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
