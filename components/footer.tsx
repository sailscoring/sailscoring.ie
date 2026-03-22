import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Acceptable Use", href: "/legal/acceptable-use" },
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
        <span>Built by Mark McLoughlin</span>
        {links.map((link) => (
          <span key={link.href} style={{ display: "contents" }}>
            <span aria-hidden>·</span>
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </span>
        ))}
      </div>
    </footer>
  );
}
