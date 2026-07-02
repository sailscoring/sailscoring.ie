import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
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
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
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
              style={{ display: "block", height: 22, width: "auto" }}
            />
          </Link>
          {links.map((link, i) => (
            <span key={link.href} style={{ display: "contents" }}>
              {i > 0 && <span aria-hidden>·</span>}
              <Link href={link.href} className="footer-link">
                {link.label}
              </Link>
            </span>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: "var(--muted)" }}>
          © {new Date().getFullYear()} Mark McLoughlin. Sail Scoring™ is an
          unregistered trademark of Mark McLoughlin.
        </p>
      </div>
    </footer>
  );
}
