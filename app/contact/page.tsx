import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "72px 24px 80px",
      }}
    >
      <div className="prose anim-fade-up">
        <p className="eyebrow">Contact</p>

        <h1>Get in touch.</h1>

        <p>
          Questions, feedback, bug reports, or interest in using Sail Scoring
          at your club or class association — all welcome.
        </p>

        <p>
          Email:{" "}
          <a href="mailto:mark@sailscoring.ie" className="text-link">
            mark@sailscoring.ie
          </a>
        </p>

        <p
          style={{
            fontSize: 14,
            color: "var(--muted)",
            marginTop: 32,
            borderTop: "1px solid var(--rule)",
            paddingTop: 24,
          }}
        >
          Sail Scoring is currently in stealth beta. If you&apos;re a scorer or
          club official interested in early access, mention that — the more
          specific the better.
        </p>
      </div>
    </section>
  );
}
