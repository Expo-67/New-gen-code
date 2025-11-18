"use client";

import Image from "next/image";
import spaceHero from "../assets/space 7.jpg";
import space1 from "../assets/space1.jpg";
import space2 from "../assets/space2.jpg";
import space3 from "../assets/space3.jpg";

const floatingVisuals = [
  { src: space1, alt: "Prototype pods", className: "space-float float-one" },
  { src: space2, alt: "Playful lounge", className: "space-float float-two" },
  { src: space3, alt: "Collaboration nook", className: "space-float float-three" },
];

export default function SpaceSection() {
  return (
    <section className="page-shell" id="space" aria-labelledby="space-title">
      <div className="section-heading">
        <span className="eyebrow">Our Space</span>
        <h2 className="section-title" id="space-title">
          Fun & Creative Studio Zones
        </h2>
        <p className="section-copy">
          Bright, playful zones with cozy corners, mini labs, and fun pods designed to help kids focus, explore, and create.
        </p>
      </div>

      <div className="space-lab subtle-grid">
        <div className="space-copy">
          <p className="pill" style={{ borderColor: "var(--sky-blue)", color: "var(--sky-blue)" }}>
            Learn, Play, Create!
          </p>
          <h3>Interactive, kid-friendly studio areas</h3>
          <p>
            Every corner is made to spark curiosity — from comfy seating for group projects to tiny experiment labs for coding and AI fun.
          </p>
          <ul>
            <li>Mentor pods for guidance and quick feedback</li>
            <li>Interactive presentation walls for sharing projects</li>
            <li>Snack & hydration stations for short, mindful breaks</li>
          </ul>
        </div>

        <div className="space-visual" aria-hidden="true">
          <div className="space-main">
            <Image
              src={spaceHero}
              alt="Overview of the fun NGC studio"
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="space-overlay">
              <span>NGC Studio</span>
              <strong>Fun corners · Hands-on learning</strong>
            </div>
          </div>

          {floatingVisuals.map((visual) => (
            <div key={visual.alt} className={visual.className}>
              <Image src={visual.src} alt={visual.alt} fill sizes="180px" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
