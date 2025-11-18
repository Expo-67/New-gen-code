import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.jpg";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Space", href: "#space" },
  { label: "Why NGC", href: "#why-ngc" },
  { label: "Contact", href: "#contact" },
];

const contactNumber = "0712345678";

export default function Header() {
  return (
    <header className="page-shell header">
      <div className="header__brand">
        <Image
          src={logo}
          alt="New Gen Codes logo"
          width={44}
          height={44}
          priority
          style={{ borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)" }}
        />
        <span>NGC</span>
      </div>

      <nav aria-label="Primary">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="header__cta">
        <span className="pill">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.03-.24 12.43 12.43 0 003.89.62 1 1 0 011 1v3.6a1 1 0 01-.9 1 18 18 0 01-7.86-2.34 18.2 18.2 0 01-5.75-5.75A18 18 0 014 3.37 1 1 0 015 2.5h3.6a1 1 0 011 1 12.43 12.43 0 00.62 3.89 1 1 0 01-.24 1.03l-2.36 2.37z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Call us
        </span>
        <a className="header__phone" href={`tel:${contactNumber}`}>
          {contactNumber}
        </a>
      </div>
    </header>
  );
}

