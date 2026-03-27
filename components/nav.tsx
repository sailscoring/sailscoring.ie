import Link from "next/link";
import Image from "next/image";

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
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="Sail Scoring"
            width={157}
            height={36}
            priority
          />
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
