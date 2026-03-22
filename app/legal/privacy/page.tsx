import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
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

        <h1>Privacy Policy</h1>

        <p style={{ color: "var(--muted)", fontSize: 14 }}>
          Last updated: March 2026. This is a placeholder pending legal review.
        </p>

        <h2>What we collect</h2>

        <p>
          Sail Scoring is a local-first application. Scoring data (series,
          competitors, races, results) is stored in your browser&apos;s local
          storage and is not transmitted to or stored on our servers.
        </p>

        <p>
          During the current beta period, we do not use analytics or tracking
          cookies. We collect no personal data beyond what you provide when
          contacting us directly.
        </p>

        <h2>Contact data</h2>

        <p>
          If you contact us by email, we retain that correspondence for the
          purpose of responding to you. We do not share it with third parties.
        </p>

        <h2>Changes to this policy</h2>

        <p>
          If the application moves to a server-side architecture in the future,
          this policy will be updated accordingly and users will be notified.
        </p>

        <h2>Contact</h2>

        <p>
          Questions about this policy:{" "}
          <a href="mailto:mark@sailscoring.ie" className="text-link">
            mark@sailscoring.ie
          </a>
        </p>
      </div>
    </section>
  );
}
