import Image from "next/image";
import contactVisual from "../assets/space 5.jpg";

export default function ContactSection() {
  return (
    <section className="page-shell" id="contact" aria-labelledby="contact-title">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2 className="section-title" id="contact-title">
          Ready to learn with us?
        </h2>
        <p className="section-copy">
          Drop a note to schedule a mini tour or ask about our beginner-friendly coding & AI programs.
        </p>
      </div>

      <div className="contact-grid">
        {/* Visit Card */}
        <div className="contact-card" style={{ background: "rgba(129, 90, 192, 0.12)" }}>
          <div
            style={{
              borderRadius: "28px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              marginBottom: "1.25rem",
              width: "100%",
              height: "220px",
              position: "relative",
            }}
          >
            <Image
              src={contactVisual}
              alt="Kids learning and collaborating at NGC"
              style={{ objectFit: "contain" }}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <h3>Visit the Studio</h3>
          <p style={{ color: "var(--text-muted)" }}>
            Monday – Saturday · 9 AM – 6 PM
            <br />
            Lavington, Nairobi
          </p>
          <p style={{ color: "var(--mint-teal)" }}>Call/WhatsApp: 0712345678</p>
        </div>

        {/* Contact Form */}
        <form className="contact-card contact-form" aria-label="Contact form">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Ada Lovelace" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@email.com" required />

          <label htmlFor="interest">Program of Interest</label>
          <input id="interest" name="interest" type="text" placeholder="Web Basics / AI for Kids / Studio Tour" />

          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" placeholder="Tell us about your learning goals..." />

          <button type="submit" className="cta-button">
            Submit & Connect
          </button>
        </form>
      </div>
    </section>
  );
}
