import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "72px 24px 80px",
      }}
    >
      <div className="prose anim-fade-up">
        <p className="eyebrow">Privacy</p>

        <h1>Privacy Policy</h1>

        <p style={{ color: "var(--muted)", fontSize: 14 }}>
          Last updated: 28 May 2026
        </p>

        <p>
          Sail Scoring takes a minimal-data approach. We collect what we need
          to run the service, nothing more. This page explains what that is,
          why we have it, where it lives, and what you can do about it.
        </p>

        <h2>Who we are</h2>

        <p>
          Sail Scoring is operated by Mark McLoughlin, based in Ireland, who
          is the data controller for the purposes of this policy. The contact
          for all privacy matters is{" "}
          <a href="mailto:mark@hyc.ie" className="text-link">
            mark@hyc.ie
          </a>
          .
        </p>

        <h2>What we collect, and why</h2>

        <h3>Scorers (account holders)</h3>

        <p>
          When you sign up for an account we collect your{" "}
          <strong>email address, your name, and the club or class
          association you score for</strong>. Sign-in is by magic link sent to
          your email — we do not collect or store a password. We use this
          information to identify you within a workspace, to send you the
          magic links you request, and to send occasional service-related
          email (a security notice, a planned outage, a material change to
          this policy or the Terms). We do not use it for marketing.
        </p>

        <p>
          The lawful basis for processing scorer account data is performance
          of our agreement with you (the Terms of Service) and, for security
          and abuse prevention, our legitimate interest in keeping the service
          running and uncompromised.
        </p>

        <h3>Competitors and race data</h3>

        <p>
          Workspaces contain race data: competitor names, sail numbers, club
          affiliations, handicap ratings, finish times, results, and the
          published standings that follow. This is, in practice, the same
          information that has been pinned to club notice boards and shared on
          club websites for decades.
        </p>

        <p>
          For this data,{" "}
          <strong>
            the workspace owner (the club or class association) is the
            controller, and Sail Scoring is a processor
          </strong>
          . We store and process competitor data on the club&apos;s
          instructions. We do not sell it, share it with third parties for
          their own purposes, or use it to train anything. If a competitor
          wants their data corrected or removed, the right starting point is
          the club; if you are unable to reach the club, contact us and we
          will help.
        </p>

        <h3>Club FTP credentials</h3>

        <p>
          Some clubs publish results to their own website by FTP. If you
          configure FTP publishing for your workspace, we store the
          credentials you provide (hostname, username, password) so we can
          deliver the files you ask us to. These credentials are encrypted at
          rest and only used for the publishing task you configured. We will
          never publish anywhere you have not configured.
        </p>

        <h3>Activity log</h3>

        <p>
          Each workspace has an activity log recording who did what within
          that workspace — adding a competitor, recording a finish, publishing
          results, inviting a member. This is visible to members of the
          workspace and exists so that a panel of scorers can keep each other
          honest about who changed what. The lawful basis is our and the
          workspace&apos;s legitimate interest in an auditable record of
          changes.
        </p>

        <h2>Cookies</h2>

        <p>
          We use cookies for one purpose: keeping you signed in. When you
          authenticate, we set a session cookie (and a CSRF token) so that
          subsequent requests know who you are. These are strictly necessary
          to provide the service you have asked for and do not require
          consent. We do not use analytics cookies, advertising cookies, or
          any third-party tracking. There is no consent banner because there
          is nothing to consent to.
        </p>

        <h2>Where your data lives</h2>

        <p>
          The application and its database run in the European region. In
          concrete terms:
        </p>

        <ul>
          <li>
            <strong>Application and file storage:</strong> Vercel, Dublin
            (DUB1) region.
          </li>
          <li>
            <strong>Database:</strong> Neon, London (LHR1) region. The United
            Kingdom benefits from an EU adequacy decision, so data hosted
            there does not require additional transfer safeguards.
          </li>
          <li>
            <strong>Transactional email:</strong> Resend, used to deliver
            sign-in magic links and the occasional service email.
          </li>
        </ul>

        <p>
          Our providers (Vercel, Neon, Resend) are US-incorporated companies
          operating EU/UK infrastructure. Where any incidental transfer to the
          United States occurs in the course of providing the service, we
          rely on the EU-US Data Privacy Framework and Standard Contractual
          Clauses as applicable.
        </p>

        <h2>Sub-processors</h2>

        <p>The complete list of sub-processors we rely on:</p>

        <ul>
          <li>
            <strong>Vercel Inc.</strong> — hosting, compute, file storage
            (Dublin region).
          </li>
          <li>
            <strong>Neon Inc.</strong> — managed Postgres database (London
            region).
          </li>
          <li>
            <strong>Resend</strong> — transactional email delivery.
          </li>
        </ul>

        <p>
          If we add, remove, or substantially change a sub-processor we will
          update this page.
        </p>

        <h2>How long we keep it</h2>

        <ul>
          <li>
            <strong>Scorer accounts:</strong> for as long as the account is
            active. When you delete your account we remove your personal
            details immediately; routine database backups age out within 30
            days.
          </li>
          <li>
            <strong>Workspace and race data:</strong> for as long as the
            workspace exists. The workspace owner decides what to delete and
            when. If a workspace is deleted, its data is removed; backups age
            out within 30 days.
          </li>
          <li>
            <strong>Magic-link tokens:</strong> minutes — they expire
            automatically once used or after a short timeout.
          </li>
          <li>
            <strong>Session cookies:</strong> until you sign out or the
            session expires.
          </li>
          <li>
            <strong>Activity log:</strong> retained for the life of the
            workspace.
          </li>
        </ul>

        <h2>Your rights</h2>

        <p>
          Under the GDPR you have the right to access the personal data we
          hold about you, to have it corrected if it is wrong, to have it
          erased, to restrict or object to how we use it, and to receive a
          copy in a portable form. To exercise any of these, email{" "}
          <a href="mailto:mark@hyc.ie" className="text-link">
            mark@hyc.ie
          </a>
          . We will respond within one month.
        </p>

        <p>
          If you are unhappy with how we have handled your data, you can
          complain to the Irish Data Protection Commission at{" "}
          <a
            href="https://www.dataprotection.ie"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            dataprotection.ie
          </a>
          .
        </p>

        <h2>Changes to this policy</h2>

        <p>
          If we make material changes to this policy we will update the
          &ldquo;last updated&rdquo; date at the top and, for material changes
          that affect you directly, send notice by email to active account
          holders.
        </p>

        <h2>Contact</h2>

        <p>
          For privacy questions, requests, or anything else covered by this
          page:{" "}
          <a href="mailto:mark@hyc.ie" className="text-link">
            mark@hyc.ie
          </a>
          .
        </p>
      </div>
    </section>
  );
}
