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
          <a href="mailto:mark@hyc.ie" className="text-link">
            mark@hyc.ie
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
          Sail Scoring is generally available to clubs and class associations
          in Ireland. If you&apos;re a scorer or club official interested in
          getting set up, mention that — the more specific the better. Outside
          Ireland? You&apos;re welcome to trial the software using a personal
          workspace, and feedback is always appreciated.
        </p>
      </div>
    </section>
  );
}
