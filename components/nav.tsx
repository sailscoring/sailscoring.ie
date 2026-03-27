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
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--fg)",
            textDecoration: "none",
          }}
        >
          Sail Scoring
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Link href="/about" className="nav-link">
            About
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
