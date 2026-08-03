import type { Metadata } from "next";
import FeatureShot from "@/components/feature-shot";

export const metadata: Metadata = {
  title: "Sail Scoring — Features",
  description:
    "What Sail Scoring does: running a series, entering results, scoring correctly, rating systems, and publishing — shown with real screenshots from the live app.",
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
 * `shot` renders as prose alone. `note` renders as a small marker line —
 * used for optional features a workspace switches on.
 */
type Feature = {
  id: string;
  title: string;
  body: string;
  note?: string;
  shot?: { src: string; full?: string; alt: string };
};

type Group = {
  id: string;
  label: string;
  heading: string;
  intro: string;
  features: Feature[];
};

const OPTIONAL_NOTE =
  "Optional feature — switched on per workspace under Workspace settings.";

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
        id: "series-creation",
        title: "A series in under a minute",
        body: "Name it, say where and when, and start entering competitors. Everything else — fleets, scoring systems, discards, publishing — can be decided when it matters, not up front.",
        shot: {
          src: "/screenshots/features/series-creation.webp",
          alt: "The new-series form filled in",
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
        id: "fleets",
        title: "Fleets, scored independently",
        body: "Group competitors into fleets — each with its own scoring system, its own standings, and its own penalty-point base. The same boat can sail in more than one: a cruiser scored under IRC and ECHO from a single finish time is the normal case, not a workaround.",
        shot: {
          src: "/screenshots/features/fleets.webp",
          alt: "The fleets card on series settings",
        },
      },
      {
        id: "start-sequences",
        title: "Describe the start line once",
        body: "Tell it how your classes start — who goes first, who shares a gun, how long between signals — and every new race resolves all its start times from the first warning. Three classes at five-minute intervals is one dialog, once a season.",
        shot: {
          src: "/screenshots/features/start-sequences.webp",
          alt: "The default start sequence editor",
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
      {
        id: "sub-series",
        title: "One entry list, many series",
        body: "A season often scores as several series over the same boats — a Winter and a Spring block, Tuesdays and Saturdays, an overall table alongside. Sub-series keep the whole season in one place: each block gets its own standings, discards, and published pages, and progressive handicaps can chain from one block into the next.",
        note: OPTIONAL_NOTE,
        shot: {
          src: "/screenshots/features/sub-series.webp",
          alt: "A season's races organised into sub-series",
        },
      },
      {
        id: "follow-on-series",
        title: "Roll into the next series",
        body: "When Spring Series 1 ends and Series 2 begins, create the follow-on in one step: same settings, fleets, and competitors, with each boat's handicap carried forward from where the last series left it.",
        note: OPTIONAL_NOTE,
        shot: {
          src: "/screenshots/features/follow-on-series.webp",
          alt: "The create-follow-on-series dialog",
        },
      },
      {
        id: "race-management",
        title: "The race, on the record",
        body: "Record what a race was sailed in — wind range and direction, the course, the tide — and who ran it, using World Sailing's race-management roles. Officials' names are never published unless you explicitly say so.",
        note: OPTIONAL_NOTE,
        shot: {
          src: "/screenshots/features/race-management.webp",
          alt: "The race record dialog: conditions and management team",
        },
      },
    ],
  },
  {
    id: "entering-results",
    label: "Entering results",
    heading: "From finish sheet to scored race, fast.",
    intro:
      "Result entry is built around how finishes actually arrive: a handwritten sheet, a busy finish line, and a scorer who wants to be done before the bar closes.",
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
        id: "unknown-sail",
        title: "Unknown boat? Keep writing",
        body: "A sail number that isn't on the entry list doesn't stop the sheet: record it as unknown in its crossing position and resolve it to the right boat later, once someone remembers whose spinnaker that was.",
        shot: {
          src: "/screenshots/features/unknown-sail.webp",
          alt: "Recording an unregistered sail number as unknown",
        },
      },
      {
        id: "scoring-penalties",
        title: "Penalties that finish the arithmetic",
        body: "ZFP, SCP, and discretionary DPI penalties are applied from the finisher's row and scored per RRS 44.3(c) and A6.2 — the percentage, the rounding, the DNF cap — with the penalised score shown in amber wherever it appears.",
        shot: {
          src: "/screenshots/features/scoring-penalties.webp",
          alt: "The scoring-penalty editor on a finisher",
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
      {
        id: "start-check-in",
        title: "Who came to the start",
        body: "Tick boats present in the starting area as they arrive — by tap, or by typing sail numbers as fast as you can read them. It's the record behind DNF-versus-DNC defaults and starting-area penalty scoring, captured while it's easy instead of reconstructed later.",
        shot: {
          src: "/screenshots/features/start-check-in.webp",
          alt: "The start check-in tab mid-count",
        },
      },
      {
        id: "finish-sheet-import",
        title: "Import the whole sheet",
        body: "When finishes are captured in a spreadsheet on the water, import the race in one go — sail numbers, times, result codes, row order as crossing order — with a preview of exactly what will land before anything is replaced.",
        note: OPTIONAL_NOTE,
        shot: {
          src: "/screenshots/features/finish-sheet-import.webp",
          alt: "The finish-sheet import preview",
        },
      },
    ],
  },
  {
    id: "scoring-correctness",
    label: "Scoring correctness",
    heading: "RRS Appendix A, faithfully.",
    intro:
      "Scoring software earns trust through correctness. Low Point scoring, discards, tie-breaking, and the odd corners of Appendix A are the engine's job — and every edit recomputes everything, instantly.",
    features: [
      {
        id: "discard-rules",
        title: "Discards as the SIs state them",
        body: "Write the discard schedule the way the sailing instructions do — with five races sailed, exclude one; with nine, exclude two — and the standings apply it automatically as the series grows. Rules that look wrong are flagged but never forbidden: sometimes the unusual profile is exactly what the SI says.",
        shot: {
          src: "/screenshots/features/discard-rules.webp",
          alt: "The scoring card with discard rules configured",
        },
      },
      {
        id: "race-scoring-options",
        title: "When one race counts differently",
        body: "The trophy race that counts double, the centrepiece that can never be discarded, the practice race that drops out first — set weighting and discard behaviour per race, and the standings carry the marks and a legend so nobody has to ask why R4 says ×2.",
        note: OPTIONAL_NOTE,
        shot: {
          src: "/screenshots/features/race-scoring-options.webp",
          alt: "The per-race scoring options dialog",
        },
      },
    ],
  },
  {
    id: "rating-systems",
    label: "Rating and handicap systems",
    heading: "The systems clubs actually race under.",
    intro:
      "Scratch, IRC, ECHO, Portsmouth Yardstick, RYA NHC — with ratings pulled from the published lists instead of typed from them, and progressive handicaps you can verify with a calculator.",
    features: [
      {
        id: "update-handicaps-irc",
        title: "Ratings from the source",
        body: "Pull IRC TCCs straight from the worldwide rating list, ECHO from Irish Sailing, PY numbers from the RYA's list, or carry everything forward from last season's series — always as a previewed set of current → new changes you approve boat by boat, never a blind overwrite.",
        shot: {
          src: "/screenshots/features/update-handicaps-irc.webp",
          alt: "Update handicaps from the IRC rating list, previewed",
        },
      },
      {
        id: "rating-transparency",
        title: "Progressive handicaps, shown working",
        body: "NHC and ECHO adjust every boat's rating after every race — and Sail Scoring shows the work. Published pages always carry each boat's next rating, and one checkbox reveals the full calculation columns, so a rating officer can verify every adjustment line by line.",
        shot: {
          src: "/screenshots/features/rating-transparency.webp",
          alt: "A published ECHO page with rating calculations revealed",
        },
      },
    ],
  },
  {
    id: "reading-and-checking",
    label: "Reading and checking",
    heading: "Trust the table — and be able to prove it.",
    intro:
      "Standings a sailor can read at the noticeboard, and a record behind them that stands up to a protest committee.",
    features: [
      {
        id: "race-exclusion",
        title: "Strike a race for one fleet",
        body: "The heat only one boat sailed, the race abandoned for a single class — strike it from that fleet's scoring straight from the standings column header, while it still counts for everyone else. The menu names the underlying race, so you always know what you're striking.",
        shot: {
          src: "/screenshots/features/race-exclusion.webp",
          alt: "Excluding a race for one fleet from the standings",
        },
      },
      {
        id: "version-history",
        title: "Every change, on the record",
        body: "The app saves point-in-time versions as you work — who changed what, and when. Roll back a mistake with one click, pin a named checkpoint before a protest hearing, and know that publishing pins the exact state that went public. It's the audit trail a scoring inquiry actually needs.",
        shot: {
          src: "/screenshots/features/version-history.webp",
          alt: "The history tab with versions and their changes",
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
      {
        id: "results-status-final",
        title: "Provisional until it's final",
        body: "Results stay provisional while a protest could still move them. When the event is settled, mark the series final through a checklist built on the protest time limit — computed live from each race's last finisher — and the published pages carry a Final stamp in place of the provisional line.",
        note: OPTIONAL_NOTE,
        shot: {
          src: "/screenshots/features/results-status-final.webp",
          alt: "The mark-as-final checklist",
        },
      },
      {
        id: "published-management",
        title: "Every live page, accounted for",
        body: "The Published tab lists everything your workspace has made public — each page's URL, when it last went out, and how many edits have landed since. Unpublish takes a page down cleanly, and even a deleted series' orphaned pages stay listed until you decide.",
        shot: {
          src: "/screenshots/features/published-management.webp",
          alt: "The published-pages listing for a workspace",
        },
      },
    ],
  },
  {
    id: "data-in-and-out",
    label: "Data in and out",
    heading: "No lock-in, in either direction.",
    intro:
      "Entry lists arrive as spreadsheets; results should leave as anything you need. Your data is importable, exportable, and never held hostage.",
    features: [
      {
        id: "competitor-import",
        title: "Entry lists straight from the spreadsheet",
        body: "Import competitors from CSV or Excel with per-column mapping and live samples of what each column holds. Fleets can be inferred from the rating columns, multi-fleet boats declared in one cell, and a boat that changed sail number between imports is caught instead of duplicated.",
        shot: {
          src: "/screenshots/features/competitor-import.webp",
          alt: "The competitor import column-mapping dialog",
        },
      },
    ],
  },
  {
    id: "collaboration",
    label: "Collaboration and accounts",
    heading: "A scoring panel working as one.",
    intro:
      "Sign in from any browser, share a workspace with the panel, and keep the interface exactly as small as your club's racing.",
    features: [
      {
        id: "sign-in",
        title: "No password to lose",
        body: "Sign in with an emailed link — nothing to remember, nothing to reset in the club office at five to race time. Your series follow your account to any device.",
        shot: {
          src: "/screenshots/features/sign-in.webp",
          alt: "The passwordless sign-in screen",
        },
      },
      {
        id: "feature-toggles",
        title: "Only the features you use",
        body: "Optional features switch on and off per workspace, so a dinghy club never sees IRC machinery and a keelboat panel never sees youth-regatta tooling. Several arrive with a worked example seeded into your series list, ready to explore and delete.",
        shot: {
          src: "/screenshots/features/feature-toggles.webp",
          alt: "The workspace features card",
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
                    {f.note && (
                      <p
                        style={{
                          marginTop: 10,
                          fontSize: 12.5,
                          color: "var(--muted)",
                          fontStyle: "italic",
                        }}
                      >
                        {f.note}
                      </p>
                    )}
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
