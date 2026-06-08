import type { Metadata } from "next";
import ScreenshotFlow from "@/components/screenshot-flow";

export const metadata: Metadata = {
  title: "Sail Scoring — Race scoring that anyone can use",
};

const features = [
  {
    label: "Accessible",
    title: "Any scorer, any browser.",
    body: "Any scorer with a browser can set up and score an event. No installation, no Windows licence, no learning curve measured in years.",
  },
  {
    label: "Correct",
    title: "RRS Appendix A, faithfully.",
    body: "Handicap correction, result codes, discards, tie-breaking — all of it, correctly. Scoring software earns trust through correctness, not features.",
  },
  {
    label: "Open",
    title: "Your data, always.",
    body: "Your data stays yours. Export at any time, in standard formats. No lock-in, no ransom, no dependency on a single commercial product.",
  },
  {
    label: "Sustainable",
    title: "Built to outlast any one volunteer.",
    body: "The goal is a scoring system that clubs can rely on for the long term — not one that disappears when a key volunteer steps back.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 24px 88px",
        }}
      >
        <p className="eyebrow anim-fade-up">Sail scoring — sailscoring.ie</p>

        <h1
          className="anim-fade-up delay-1"
          style={{
            fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            maxWidth: "14ch",
            marginBottom: 28,
          }}
        >
          Race scoring that anyone can use.
        </h1>

        <p
          className="anim-fade-up delay-2"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.6,
            color: "#3a3a3a",
            maxWidth: "52ch",
            marginBottom: 40,
          }}
        >
          Sail Scoring is a modern, web-based scoring tool for Irish yacht clubs
          and class associations.
        </p>

        <div className="anim-fade-up delay-3" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="https://app.sailscoring.ie"
            className="btn-navy btn-navy-lg"
          >
            Open the app →
          </a>
          <a
            href="/about"
            style={{
              fontSize: 14,
              color: "var(--muted)",
              textDecoration: "none",
              borderBottom: "1px solid var(--rule)",
              paddingBottom: 1,
              transition: "color 0.15s, border-color 0.15s",
            }}
          >
            Learn more
          </a>
        </div>
      </section>

      <hr className="section-rule" />

      {/* Features */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px 40px",
          }}
        >
          {features.map((f, i) => (
            <div key={f.label} className={`anim-fade-up delay-${i + 1}`}>
              <p className="feature-label">{f.label}</p>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#3a3a3a",
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      {/* How it works — the scoring → publishing story, in real screenshots */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 24px",
        }}
      >
        <div className="anim-fade-up" style={{ marginBottom: 48 }}>
          <p className="eyebrow">How it works</p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            From finish sheet to live results.
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: "#3a3a3a",
              maxWidth: "56ch",
            }}
          >
            A real series, scored end to end — nothing to install, nothing to
            maintain. Here it is, working.
          </p>
        </div>

        <ScreenshotFlow />

        <p
          style={{
            marginTop: 36,
            fontSize: 12,
            color: "var(--muted)",
            fontStyle: "italic",
          }}
        >
          Screenshots from the live app, scored under RRS Appendix A. Sample data
          shown. Click any screenshot to enlarge.
        </p>
      </section>

      <hr className="section-rule" />

      {/* Final CTA */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 24,
        }}
      >
        <div className="anim-fade-up">
          <p className="eyebrow">Get started</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 16,
              maxWidth: "20ch",
            }}
          >
            Ready to score your next event?
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: "#3a3a3a",
              maxWidth: "48ch",
              marginBottom: 32,
            }}
          >
            Sail Scoring is free to use during the current beta. Sign up in a
            minute and your events sync securely across every device.
          </p>
          <a
            href="https://app.sailscoring.ie"
            className="btn-navy btn-navy-lg"
          >
            Open the app →
          </a>
        </div>
      </section>
    </>
  );
}
