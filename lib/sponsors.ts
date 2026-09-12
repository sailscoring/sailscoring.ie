/**
 * Who is funding the service, and how they are recognised here.
 *
 * The recognition surfaces and their boundaries are decided in the governance
 * repo (`sponsorship/founding-sponsor-benefits.md`, D5): Founding Sponsors
 * appear on the home page *and* the supporters page; Burgee Sponsors on the
 * supporters page only. The third surface — the burgee footer on the live
 * public results listings — lives in the app repo, which keeps its own copy of
 * this list (`lib/sponsors.ts` there). Two small lists beat a shared feed at
 * this scale; revisit if this ever grows past a handful of entries.
 *
 * Burgee assets come from the canonical logo dataset that already serves club
 * marks to published results, so there is one copy of each burgee and it
 * tracks the official version.
 *
 * This site is a static export, so the list is baked at build time: adding a
 * sponsor is a commit and a deploy.
 */

export type SponsorTier = "founding" | "burgee";

export interface Sponsor {
  /** Canonical logo id, which is also the React key. */
  id: string;
  tier: SponsorTier;
  /** Exactly as the sponsor wants to be named. */
  name: string;
  /** Burgee or logo, served from the canonical logo origin. */
  logoUrl: string;
  /** Where the sponsor's name and burgee link to. */
  href: string;
  /** One line, in the sponsor's own terms — not a testimonial. */
  description: string;
  /** The season the sponsorship began; Founding status is permanent and is
   *  stated as "Founding Sponsor {since}" wherever it appears. */
  since: number;
}

/** Founding slots for a given season. Three exist; recognition copy says how
 *  many remain rather than hard-coding "two". */
export const FOUNDING_SLOTS = 3;

export const SPONSORS: readonly Sponsor[] = [
  {
    id: "hyc",
    tier: "founding",
    name: "Howth Yacht Club",
    logoUrl: "https://logos.sailscoring.ie/hyc.png",
    href: "https://www.hyc.ie",
    description:
      "Ireland's largest sailing club, and the first to back Sail Scoring.",
    since: 2026,
  },
];

export const foundingSponsors = SPONSORS.filter((s) => s.tier === "founding");
export const burgeeSponsors = SPONSORS.filter((s) => s.tier === "burgee");

/** Founding slots still open for the current season — the number the soft ask
 *  quotes, so the page can never contradict the list above it. */
export const foundingSlotsRemaining = Math.max(
  FOUNDING_SLOTS - foundingSponsors.length,
  0,
);
