import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function Terms() {
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

        <h1>Terms of Service</h1>

        <p style={{ color: "var(--muted)", fontSize: 14 }}>
          Last updated: March 2026. This is a placeholder pending legal review.
        </p>

        <h2>Use of the service</h2>

        <p>
          Sail Scoring (&ldquo;the service&rdquo;) is provided by Mark McLoughlin for use
          by sailing clubs, class associations, and their appointed scorers.
          The service is provided in good faith and without warranty of any
          kind.
        </p>

        <p>
          During the current beta period, the service is provided free of
          charge. This may change in the future; any such change will be
          communicated with reasonable notice.
        </p>

        <h2>Your data</h2>

        <p>
          Sail Scoring is a local-first application. Your data is stored in
          your browser. We do not access, store, or process your scoring data
          on our servers.
        </p>

        <h2>Liability</h2>

        <p>
          While we take correctness seriously and implement the Racing Rules of
          Sailing in good faith, Sail Scoring is not a substitute for a
          qualified race officer or protest committee. We accept no liability
          for scoring errors or their consequences.
        </p>

        <h2>Contact</h2>

        <p>
          Questions about these terms:{" "}
          <a href="mailto:mark@sailscoring.ie" className="text-link">
            mark@sailscoring.ie
          </a>
        </p>
      </div>
    </section>
  );
}
