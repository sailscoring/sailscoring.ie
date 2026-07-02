import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FAQ() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "72px 24px 80px",
      }}
    >
      <div className="prose anim-fade-up">
        <p className="eyebrow">FAQ</p>

        <h1>Questions &amp; answers.</h1>

        <p>
          Real questions from scorers and club officials, with honest answers.
          Have one that isn&apos;t here?{" "}
          <a href="/contact" className="text-link">
            Ask it
          </a>
          .
        </p>

        <h2>What does it cost?</h2>

        <p>
          For clubs and class associations, it&apos;s free — and intended to stay
          that way. Rather than charging the people who do the scoring, Sail
          Scoring is funded by sponsors: a small number of Founding Sponsors and
          any number of Burgee Sponsors — clubs, classes, and supporters of the
          project — cover the modest cost of running the service, so scorers and
          competitors never see a bill. Individuals can use it free too. It is
          currently in beta and focused on Irish clubs and classes recognised by
          Irish Sailing, with other regions potentially to follow.
        </p>

        <h2>
          How is this different from Sailwave or HalSail — why switch?
        </h2>

        <p>Framed as what Sail Scoring is, rather than what the others aren&apos;t:</p>

        <ul>
          <li>
            <strong>Modern and actively developed:</strong> built on current web
            technology, so it keeps getting better rather than standing still.
          </li>
          <li>
            <strong>Intuitive:</strong> a scorer with basic sailing knowledge can
            set up and run an event without specialised training — the interface
            guides you rather than expecting you to already know its quirks.
          </li>
          <li>
            <strong>Shared, not siloed:</strong> a whole panel can work in one
            workspace, so scoring isn&apos;t trapped on one person&apos;s laptop
            or locked inside one volunteer&apos;s hard-won expertise. That
            directly eases the risk of depending on a single scorer.
          </li>
          <li>
            <strong>Accessible anywhere:</strong> it runs in a browser on any
            device, and results publish live for competitors to see the moment
            they are in.
          </li>
          <li>
            <strong>Free to clubs:</strong> because it is funded by sponsors,
            being online costs your club nothing.
          </li>
        </ul>

        <h2>Which handicap systems does it support?</h2>

        <p>
          Scratch (one-design / position-based), IRC, Portsmouth Yardstick (PY),
          RYA NHC, ECHO, and VPRS — and a single series can mix fleets on
          different systems. More can be added as clubs need them.
        </p>

        <h2>Can I bring my existing data over from Sailwave?</h2>

        <p>
          Yes. There is a dedicated Sailwave import that reads a Sailwave file
          and builds the series from it. For any other tool, competitors import
          from a CSV, so anything that can export a competitor list to CSV —
          HalSail included — can feed Sail Scoring. Deeper migration from other
          tools is on the roadmap; if you have a specific file you&apos;d like to
          move,{" "}
          <a href="/contact" className="text-link">
            get in touch
          </a>{" "}
          and it will help shape what gets built next.
        </p>

        <h2>Can more than one person from our club score at the same time?</h2>

        <p>
          Yes. A club or class association gets a shared workspace and can invite
          several people to score in it. An activity log records who changed
          what, so a panel of volunteers can share the load without stepping on
          each other.
        </p>

        <h2>Do competitors need an account to view published results?</h2>

        <p>
          No. Published results are ordinary public web pages — anyone with the
          link can read them. Only the scorers doing the work need an account.
        </p>

        <h2>Is the scoring correct, and can I check it?</h2>

        <p>
          Correctness is the whole reason Sail Scoring exists — and it means two
          things, not one.
        </p>

        <p>
          The first is <strong>engine correctness</strong>: does the software
          apply the rules right? Sail Scoring implements the Racing Rules of
          Sailing Appendix A — tie-breaks, discards, result codes, and the full
          range of handicap systems — and it doesn&apos;t ask you to take that on
          trust. The scoring engine is backed by a published library of worked
          examples at{" "}
          <a
            href="https://reckonings.sailscoring.ie"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            reckonings.sailscoring.ie
          </a>
          , each one readable and checkable by a scorer against the rules
          themselves.
        </p>

        <p>
          The second is <strong>configuration correctness</strong>, and it
          matters just as much. A scoring engine can be perfectly correct and
          still produce wrong results if the event is set up wrong — the wrong
          scoring code entered against a boat, a discard rule misconfigured — and
          an unintuitive tool lets that happen silently: the numbers look
          plausible and nobody notices they are wrong. So correctness isn&apos;t
          only about the engine. Sail Scoring works to make the correct
          configuration the obvious, natural path, so it is harder to get quietly
          wrong in the first place.
        </p>

        <h2>
          Why doesn&apos;t Sail Scoring have fields for email, phone number, or
          date of birth?
        </h2>

        <p>
          Because Sail Scoring is a scoring engine, not an entry-management
          system — and keeping that line clear is deliberate. The test applied
          to any competitor field is simple: is it needed to compute or publish
          a result? Names, sail numbers, clubs, handicap ratings, finish times
          and standings all pass — and in practice they are the same information
          clubs and class associations have posted to the web for years. Email
          and phone number don&apos;t. They belong to the entry system that
          signed the competitor up, and Sail Scoring would rather not become a
          store of sensitive personal data it never needs to produce a result.
        </p>

        <p>
          There are real uses for that data — passing an email to{" "}
          <a
            href="https://www.racingrulesofsailing.org/"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            racingrulesofsailing.org
          </a>{" "}
          for protests, or phoning a competitor when there&apos;s an issue on the
          water — but those are event-management jobs. Where Sail Scoring can
          help is as a relay rather than a store: a future CSV import could read
          an email or phone column, hand it straight to racingrulesofsailing.org,
          and then discard it — without ever saving it in Sail Scoring.
        </p>

        <p>
          Age is the interesting one, because age divisions — Masters, Juniors,
          U21 — genuinely affect scoring and prizes, so age is a legitimate
          scoring field. Date of birth isn&apos;t: it is far more sensitive, and
          there is no single &ldquo;age&rdquo; formula anyway (classes and events
          variously reckon it on the first day of the event, on the preceding 1
          January, for the whole crew or just the helm). So if date of birth is
          ever supported, it will follow the same pattern — calculate the age at
          import time under the rule that event uses, keep the age, and discard
          the date of birth.
        </p>

        <h2>Where is my data stored, and who can see it?</h2>

        <p>
          In the EU/UK region — the application runs in Dublin and the database
          in London (which has EU adequacy). Your workspace&apos;s data is
          private to its members until you choose to publish results. The{" "}
          <a href="/legal/privacy" className="text-link">
            privacy policy
          </a>{" "}
          has the full detail on providers and retention.
        </p>

        <h2>What happens to my data if the project stops — can I get it out?</h2>

        <p>
          Yes, at any time. Every series can be exported to an open
          &nbsp;.sailscoring&nbsp; file and to JSON, and re-imported elsewhere.
          Data portability is a deliberate commitment: a club adopting Sail
          Scoring needs confidence its data will still be usable in ten or twenty
          years, whatever happens to the project. No lock-in.
        </p>

        <h2>Does it work offline, or on a phone?</h2>

        <p>
          It runs in any modern browser, including on tablets and phones, and
          needs an internet connection to work — the collaborative,
          always-current shared workspace is the model, so there is no offline
          mode. On race day that means results are entered where there is a
          connection, then published live.
        </p>

        <h2>How open are you to changing these decisions based on feedback?</h2>

        <p>
          Very. The boundary above — scoring, not entry management — is a genuine
          principle, but exactly where the line falls is a judgement call, and
          the first answer to any given question might not be the right one
          long-term. Almost every design choice in Sail Scoring came from a real
          scorer explaining what they actually needed; the age field itself
          arrived that way. So if something is missing and you can show it is
          needed to produce or publish a result, that is exactly the argument
          that carries weight. The discussion that shaped this very page is a
          case in point —{" "}
          <a href="/contact" className="text-link">
            keep it coming
          </a>
          .
        </p>
      </div>
    </section>
  );
}
