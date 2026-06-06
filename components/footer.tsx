import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--rule)", marginTop: 96 }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "28px 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "6px 20px",
          fontSize: 13,
          color: "var(--muted)",
        }}
      >
        <Link
          href="/"
          aria-label="Sail Scoring — home"
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginRight: 4,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sail-scoring-mark.svg"
            alt="Sail Scoring"
            style={{ display: "block", height: 18, width: "auto" }}
          />
        </Link>
        {links.map((link) => (
          <span key={link.href} style={{ display: "contents" }}>
            <span aria-hidden>·</span>
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </span>
        ))}
        <span style={{ marginLeft: "auto" }}>
          © {new Date().getFullYear()} Sail Scoring™
        </span>
      </div>
    </footer>
  );
}
