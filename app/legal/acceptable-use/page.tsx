import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
};

export default function AcceptableUse() {
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

        <h1>Acceptable Use Policy</h1>

        <p style={{ color: "var(--muted)", fontSize: 14 }}>
          Last updated: March 2026. This is a placeholder pending legal review.
        </p>

        <h2>Intended use</h2>

        <p>
          Sail Scoring is intended for use by sailing clubs, class associations,
          and their appointed scorers for the purpose of managing and scoring
          sailing competitions in accordance with the Racing Rules of Sailing.
        </p>

        <h2>Prohibited use</h2>

        <p>You may not use Sail Scoring to:</p>

        <ul>
          <li>Produce or publish deliberately falsified results</li>
          <li>
            Interfere with the operation of the service or its infrastructure
          </li>
          <li>
            Attempt to access data belonging to other users or organisations
          </li>
          <li>
            Violate any applicable law or regulation
          </li>
        </ul>

        <h2>Enforcement</h2>

        <p>
          We reserve the right to suspend or terminate access to the service
          for any user or organisation found to be in breach of this policy.
        </p>

        <h2>Contact</h2>

        <p>
          To report a concern:{" "}
          <a href="mailto:mark@sailscoring.ie" className="text-link">
            mark@sailscoring.ie
          </a>
        </p>
      </div>
    </section>
  );
}
