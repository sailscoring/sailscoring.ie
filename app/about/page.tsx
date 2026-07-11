import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "72px 24px 80px",
      }}
    >
      <div className="prose anim-fade-up">
        <p className="eyebrow">About</p>

        <h1>Built for the people who make racing work.</h1>

        <h2>The problem</h2>

        <p>
          Sail race scoring is a thankless, exacting job. At most clubs, it
          falls to a small panel of volunteers — sometimes just one person —
          who has spent years learning the quirks of a piece of Windows desktop
          software called{" "}
          <a href="https://www.sailwave.com/" className="text-link" target="_blank" rel="noopener noreferrer">
            Sailwave
          </a>
          . Sailwave has served the sailing community well for a long time.
          It is also Windows-only, has a steep learning curve, and is built on
          ageing technology.
        </p>

        <p>
          The consequences of this dependency are real. At many clubs and class
          associations, scoring rests on a small panel of volunteers — sometimes
          a single scorer handling events with hundreds of competitors. Growing
          that volunteer base is difficult because of the learning curve, and the
          consequences of losing an experienced scorer — through burnout, a
          change of circumstances, or simply unavailability on race day — are
          immediate and disruptive.
        </p>

        <p>
          There are web-based alternatives emerging, but they typically charge a
          recurring annual subscription — HalSail, for instance, costs €120 a
          year. Against a free incumbent like Sailwave, even a modest fee is a
          real barrier to adoption.
        </p>

        <h2>The vision</h2>

        <p>
          Sail Scoring aims to be a web-based scoring application that is
          accessible, correct, and sustainable.
        </p>

        <ul>
          <li>
            <strong>Accessible:</strong> A scorer with basic sailing knowledge
            and a browser can set up and score an event without specialised
            training. The interface should guide rather than intimidate.
          </li>
          <li>
            <strong>Correct:</strong> Scoring must faithfully implement the
            Racing Rules of Sailing (RRS) Appendix A, handle the full range of
            handicap systems and result codes, and produce results that
            withstand scrutiny from competitors and protest committees.
          </li>
          <li>
            <strong>Sustainable:</strong> A club that adopts Sail Scoring is
            making a long-term investment, and needs confidence that the tool,
            its data, and the results published from it will still be there in
            ten or twenty years — in how the project is funded, how it is
            maintained, and how its data is kept portable.
          </li>
        </ul>

        <h2>The irreplaceable core</h2>

        <p>
          Finish recording is already being disrupted by GPS trackers and
          purpose-built mobile apps. Publishing and display are peripheral —
          results can be consumed by any number of tools. These parts can be
          replaced by external innovation.
        </p>

        <p>
          The irreplaceable core is <strong>scoring itself</strong>. Given a
          series configuration, a list of competitors, and per-race finishes —
          assign scores, apply discards, and produce standings. This is the
          hard, rule-governed, trust-requiring part — especially the many
          handicap and rating systems clubs rely on, against which scratch
          scoring is straightforward by comparison. It is the part that must be
          bullet-proof.
        </p>

        <p>
          The long-term aspiration is for Sail Scoring&apos;s scoring engine to
          become the de-facto standard open implementation of sail racing
          scoring rules — the library that other tools reach for when they need
          to know whether a tie-break was applied correctly or how progressive
          handicap points compound across a series.
        </p>

        <h2>Open source</h2>

        <p>
          Sail Scoring is <strong>open source</strong>, released under the MIT
          licence and developed in the open on{" "}
          <a
            href="https://github.com/sailscoring/sailscoring"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . That is a sustainability decision before it is anything else: a
          club adopting a scoring tool is investing years of training and data
          in it, and open source is the strongest guarantee available that the
          tool can outlive any one person or hosting arrangement — in the worst
          case, the code can simply be picked up and run by someone else. It
          also means anyone can audit exactly how a score is calculated, which
          is the kind of transparency scoring software should offer.
        </p>

        <h2>Who is behind it</h2>

        <p>
          Sail Scoring is built by Mark McLoughlin, a software engineer and
          member of Howth Yacht Club. It began as a personal project to scratch
          a real itch — watching experienced scorers struggle with tooling that
          should have been replaced a decade ago — and grew into something more
          serious.
        </p>

        <p>
          The project is currently in stealth beta, being tested with a small
          number of clubs and class associations before any wider release.
        </p>

        <p>
          Questions, feedback, or interest in being an early adopter:{" "}
          <a href="/contact" className="text-link">
            get in touch
          </a>
          .
        </p>
      </div>
    </section>
  );
}
