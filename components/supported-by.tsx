import Link from "next/link";

import { foundingSponsors } from "@/lib/sponsors";

/**
 * The home-page "Supported by" band — Founding Sponsors only, which is the
 * placement that distinguishes the two tiers (governance D5). Burgee Sponsors
 * are recognised on `/supporters`.
 *
 * Sized to read as deliberate with a single sponsor: one framed chip rather
 * than a logo wall with a lot of empty space beside it.
 */
export default function SupportedBy() {
  if (foundingSponsors.length === 0) return null;

  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "64px 24px",
      }}
    >
      <p className="eyebrow anim-fade-up">Supported by</p>

      <div
        className="anim-fade-up delay-1"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "20px 32px",
        }}
      >
        {foundingSponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-chip"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sponsor.logoUrl} alt="" className="burgee" />
            <span>
              <span className="sponsor-name">{sponsor.name}</span>
              <span className="sponsor-tier">
                Founding Sponsor {sponsor.since}
              </span>
            </span>
          </a>
        ))}

        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.7,
            color: "var(--muted)",
            maxWidth: "34ch",
          }}
        >
          Scoring is free for clubs because sponsors cover what it costs to run.{" "}
          <Link href="/supporters" className="text-link">
            Who supports it
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
