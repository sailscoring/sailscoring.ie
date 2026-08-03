import type { Metadata } from "next";
import FeatureShot from "@/components/feature-shot";

export const metadata: Metadata = {
  title: "Sail Scoring — Features",
  description:
    "What Sail Scoring does: running a series, entering results, and publishing them — shown with real screenshots from the live app.",
};

/**
 * The feature groups on this page mirror the inventory in the app repo at
 * docs/design/feature-inventory.md — that document is the source of truth for
 * what exists, its status, and what each screenshot shows. This page carries
 * the sales-shaped cut of it; the in-app help page carries the instructional
 * cut. Update the inventory first, then both surfaces.
 *
 * Screenshots come from `pnpm feature-shots` in the app repo, which writes
 * WebPs straight into public/screenshots/features/. A feature without a
 * `shot` renders as prose alone.
 */
type Feature = {
  id: string;
  title: string;
  body: string;
  shot?: { src: string; full?: string; alt: string };
};

type Group = {
  id: string;
  label: string;
  heading: string;
  intro: string;
  features: Feature[];
};

const groups: Group[] = [
  {
    id: "running-a-series",
    label: "Running a series",
    heading: "Set up the season, not just a spreadsheet.",
    intro:
      "A series holds everything about a trophy, league, or championship — its entries, fleets, starts, and race calendar — and the whole club's worth of them stays organised.",
    features: [
      {
        id: "series-list",
        title: "A home for every series",
        body: "The workspace home groups series under your own categories, in your own order, with recent activity shown under each — so a club running five leagues and a regatta a season still finds everything at a glance. Finished seasons archive to a read-only section, safe from stray edits.",
        shot: {
          src: "/screenshots/features/series-list.webp",
          alt: "The series list, grouped by category",
        },
      },
      {
        id: "competitor-list",
        title: "An entry list that fits your racing",
        body: "Every entry needs just a sail number and a name. Everything else is optional and per series: boat, class, owner, helm, crew, club, nationality, bow numbers, and prize-giving divisions. Enable only the fields your racing uses and the forms stay small.",
        shot: {
          src: "/screenshots/features/competitor-list.webp",
          alt: "The competitors tab of a club series",
        },
      },
      {
        id: "add-races-bulk",
        title: "A season of races in one go",
        body: "Add races one at a time, or generate a whole weekly or fortnightly run from a single dialog — pick the first date, say how many, and check the previewed dates before anything is created. Postpone, rename, or slot in a re-sail later without disturbing the scoring.",
        shot: {
          src: "/screenshots/features/add-races-bulk.webp",
          alt: "The add-multiple-races dialog with its date preview",
        },
      },
    ],
  },
  {
    id: "entering-results",
    label: "Entering results",
    heading: "From finish sheet to scored race, fast.",
    intro:
      "Result entry is built around how finishes actually arrive: a handwritten sheet, a busy finish line, and a scorer who wants to be done before the bar opens.",
    features: [
      {
        id: "result-codes",
        title: "Every result code, scored correctly",
        body: "DNS, DNF, OCS, NSC, RET, DNC, DSQ, DNE, UFD, BFD — the full Racing Rules code set, grouped by how each arises, with boats that never came out collected automatically. Each code scores its correct penalty base, and a non-excludable DNE is never discarded.",
        shot: {
          src: "/screenshots/features/result-codes.webp",
          alt: "The result-code dropdown on a race's entry screen",
        },
      },
      {
        id: "redress",
        title: "Redress, by the book",
        body: "When the protest committee grants redress, score it the way RRS Appendix A9 says: average of all other races, races before the incident, or stated points — with control over which races count, and per-fleet values for a boat scored under more than one handicap system.",
        shot: {
          src: "/screenshots/features/redress.webp",
          alt: "The redress dialog with its RRS A9 scoring methods",
        },
      },
    ],
  },
  {
    id: "publishing",
    label: "Publishing",
    heading: "Results your club can link to forever.",
    intro:
      "Publishing is one click, and what it produces is not a file to email around — it's a stable public page under your club's own index, kept organised season after season.",
    features: [
      {
        id: "publish-dialog",
        title: "One click from standings to public",
        body: "Publish renders the current standings to a public URL that never changes — re-publishing updates the page in place, and the dialog tells you how many edits have landed since results last went out. Choose which fleets go live, and set each page's URL before it's first published.",
        shot: {
          src: "/screenshots/features/publish-dialog.webp",
          alt: "The publish dialog, fleets and URLs ready to go live",
        },
      },
      {
        id: "publication-tree",
        title: "A results site that organises itself",
        body: "Every published page slots into your club's public index — events grouped by season, each with its results tables linked right on its row, with navigation on every page to move between classes, events, and seasons. It updates itself every time you publish. No webmaster required.",
        shot: {
          src: "/screenshots/features/publication-tree.webp",
          alt: "A workspace's public results index, grouped by season",
        },
      },
    ],
  },
];

export default function Features() {
  return (
    <>
      {/* Header */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 40px" }}>
        <p className="eyebrow anim-fade-up">Features</p>
        <h1
          className="anim-fade-up delay-1"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: "18ch",
            marginBottom: 20,
          }}
        >
          Everything the job needs.
        </h1>
        <p
          className="anim-fade-up delay-2"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: 1.6,
            color: "#3a3a3a",
            maxWidth: "58ch",
            marginBottom: 28,
          }}
        >
          Sail Scoring covers the whole of a scorer&rsquo;s season — setting up,
          scoring, and publishing. A tour of the essentials, with more of the
          deep end being added to this page over time.
        </p>
        <nav
          className="anim-fade-up delay-3"
          aria-label="Feature groups"
          style={{ display: "flex", gap: 24, flexWrap: "wrap" }}
        >
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              style={{
                fontSize: 14,
                color: "var(--muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--rule)",
                paddingBottom: 1,
              }}
            >
              {g.label}
            </a>
          ))}
        </nav>
      </section>

      {groups.map((group) => (
        <div key={group.id}>
          <hr className="section-rule" />
          <section
            id={group.id}
            style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}
          >
            <div style={{ marginBottom: 48 }}>
              <p className="eyebrow">{group.label}</p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  marginBottom: 12,
                }}
              >
                {group.heading}
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "#3a3a3a",
                  maxWidth: "56ch",
                }}
              >
                {group.intro}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
              {group.features.map((f) => (
                <div
                  key={f.id}
                  id={f.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: f.shot
                      ? "repeat(auto-fit, minmax(320px, 1fr))"
                      : "1fr",
                    gap: "28px 48px",
                    alignItems: "start",
                  }}
                >
                  <div style={{ maxWidth: "52ch" }}>
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                        marginBottom: 10,
                        color: "var(--navy)",
                      }}
                    >
                      {f.title}
                    </h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#3a3a3a" }}>
                      {f.body}
                    </p>
                  </div>
                  {f.shot && (
                    <FeatureShot src={f.shot.src} full={f.shot.full} alt={f.shot.alt} />
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}

      <hr className="section-rule" />

      {/* Footnote + CTA */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "56px 24px 80px",
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: "var(--muted)",
            fontStyle: "italic",
            marginBottom: 40,
          }}
        >
          Screenshots from the real app, sample data shown. Click any screenshot
          to enlarge.
        </p>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: "22ch",
          }}
        >
          See it with your own series.
        </h2>
        <a href="https://app.sailscoring.ie" className="btn-navy btn-navy-lg">
          Open the app →
        </a>
      </section>
    </>
  );
}
