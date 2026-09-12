import type { Metadata } from "next";

import {
  burgeeSponsors,
  foundingSlotsRemaining,
  foundingSponsors,
  type Sponsor,
} from "@/lib/sponsors";

export const metadata: Metadata = {
  title: "Supporters",
  description:
    "The clubs and classes whose sponsorship keeps Sail Scoring free for the people who do the scoring.",
};

/** Small counts read better spelled out in running prose than as numerals.
 *  Only ever needs to reach the number of Founding slots. */
const SLOT_WORDS: Record<number, string> = { 2: "two", 3: "three" };

function SponsorRow({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="sponsor-row">
      <a href={sponsor.href} target="_blank" rel="noopener noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={sponsor.logoUrl} alt="" className="burgee" />
      </a>
      <div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 600, letterSpacing: "-0.02em" }}>
          <a
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {sponsor.name}
          </a>
        </h3>
        {sponsor.tier === "founding" && (
          <p className="sponsor-tier" style={{ marginTop: 6 }}>
            Founding Sponsor {sponsor.since}
          </p>
        )}
        <p
          style={{
            margin: "10px 0 0",
            fontSize: 15,
            lineHeight: 1.7,
            color: "#3a3a3a",
          }}
        >
          {sponsor.description}
        </p>
      </div>
    </div>
  );
}

export default function Supporters() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "72px 24px 80px",
      }}
    >
      <div className="prose anim-fade-up">
        <p className="eyebrow">Supporters</p>

        <h1>The clubs that pay for this.</h1>

        <p>
          Sail Scoring is free for clubs and class associations, and free for
          the volunteers who do the scoring. It is not free to run — there is a
          domain, hosting, and a database behind it, modest but real and
          recurring. Sponsors cover that, which is why nobody scoring a race
          ever sees a bill.
        </p>

        <h2>Founding Sponsors</h2>

        <p>
          The first clubs and classes to back the project — the ones who put up
          the runway before there was much to show for it. Founding Sponsor
          status is permanent: it is a statement of history, not a rented
          placement.
        </p>

        {foundingSponsors.map((sponsor) => (
          <SponsorRow key={sponsor.id} sponsor={sponsor} />
        ))}

        {burgeeSponsors.length > 0 && (
          <>
            <h2>Burgee Sponsors</h2>

            <p>
              Clubs, classes, and supporters of the project who chip in towards
              the running costs.
            </p>

            {burgeeSponsors.map((sponsor) => (
              <SponsorRow key={sponsor.id} sponsor={sponsor} />
            ))}
          </>
        )}

        <h2>Supporting it</h2>

        <p>
          {foundingSlotsRemaining > 0 ? (
            <>
              There are three Founding Sponsor places for the 2026 season and{" "}
              {foundingSlotsRemaining === 1
                ? "one is"
                : `${SLOT_WORDS[foundingSlotsRemaining] ?? foundingSlotsRemaining} are`}{" "}
              still open. Burgee sponsorship is open to any number of clubs,
              classes, and supporters.{" "}
            </>
          ) : (
            <>
              The Founding Sponsor places for the 2026 season are taken. Burgee
              sponsorship is open to any number of clubs, classes, and
              supporters.{" "}
            </>
          )}
          Sponsorship is voluntary support, never a condition of using the
          service or of being listened to.
        </p>

        <p>
          If your club or class would like to see what that involves,{" "}
          <a href="/contact" className="text-link">
            get in touch
          </a>{" "}
          and you will get the prospectus — what the service costs to run, what
          sponsorship pays for, and what a sponsor gets in return.
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
          Sponsors are recognised here, on the home page, in the footer of the
          live public results listings, and inside the app the scorers use.
          They are deliberately absent from published and exported results
          pages: those are the scorer&apos;s output and the club&apos;s record,
          and we don&apos;t rewrite them to carry someone else&apos;s logo.
          Sponsorship buys recognition and a working relationship — never
          influence over how a race is scored.
        </p>
      </div>
    </section>
  );
}
