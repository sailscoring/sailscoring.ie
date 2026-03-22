import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function Cookies() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "72px 24px 80px",
      }}
    >
      <div className="prose anim-fade-up">
        <p className="eyebrow">Legal</p>

        <h1>Cookie Policy</h1>

        <p style={{ color: "var(--muted)", fontSize: 14 }}>
          Last updated: March 2026.
        </p>

        <h2>Cookies on sailscoring.ie</h2>

        <p>
          This website does not use tracking or analytics cookies. No third-party
          cookies are set by sailscoring.ie.
        </p>

        <p>
          The Sail Scoring application at{" "}
          <a href="https://app.sailscoring.ie" className="text-link">
            app.sailscoring.ie
          </a>{" "}
          stores data in your browser&apos;s IndexedDB (a local storage mechanism,
          not a cookie). This data does not leave your device and is not
          accessible to us.
        </p>

        <h2>If this changes</h2>

        <p>
          If we introduce analytics or any form of tracking in the future, this
          policy will be updated and a consent banner will be added to the
          relevant pages before any such tracking begins.
        </p>
      </div>
    </section>
  );
}
