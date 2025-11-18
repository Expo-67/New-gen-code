import Image from "next/image";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="page-shell footer">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {/* Logo Container */}
        <div
          style={{
            width: "54px",
            height: "54px",
            borderRadius: "30%",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)",
            position: "relative",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={logo}
            alt="New Gen Codes logo"
            fill
            sizes="54px"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        {/* Footer Text */}
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Made with 💜 redevops. Crafted with{" "}
          <span style={{ color: "var(--mint-teal)" }}>care & curiosity</span>.
        </p>
      </div>
    </footer>
  );
}
