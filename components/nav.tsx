import Link from "next/link";

export default function Nav() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--rule)",
        backgroundColor: "var(--bg)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          aria-label="Sail Scoring — home"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sail-scoring-wordmark.svg"
            alt="Sail Scoring"
            style={{ display: "block", height: 22, width: "auto" }}
          />
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/faq" className="nav-link">
            FAQ
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <a
            href="https://app.sailscoring.ie"
            className="btn-navy"
          >
            Open the app →
          </a>
        </nav>
      </div>
    </header>
  );
}
