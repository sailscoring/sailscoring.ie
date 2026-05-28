import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function Terms() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "72px 24px 80px",
      }}
    >
      <div className="prose anim-fade-up">
        <p className="eyebrow">Terms</p>

        <h1>Terms of Service</h1>

        <p style={{ color: "var(--muted)", fontSize: 14 }}>
          Last updated: 28 May 2026
        </p>

        <p>
          These terms govern your use of Sail Scoring, the web application at{" "}
          <a
            href="https://app.sailscoring.ie"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            app.sailscoring.ie
          </a>{" "}
          and the marketing site at{" "}
          <a href="https://sailscoring.ie" className="text-link">
            sailscoring.ie
          </a>
          . By signing up for an account, or by continuing to use the service,
          you agree to them. If you do not agree, do not use the service.
        </p>

        <h2>The service</h2>

        <p>
          Sail Scoring is a web-based application for managing sail racing
          scoring — entering competitors and races, recording finishes,
          applying handicaps and result codes, computing standings under the
          Racing Rules of Sailing Appendix A, and publishing results. It is
          operated by Mark McLoughlin, based in Ireland.
        </p>

        <h2>Beta status</h2>

        <p>
          Sail Scoring is currently in stealth beta. Features are added,
          changed, and occasionally removed. We test thoroughly and avoid
          breaking things people rely on, but the service is pre-1.0 and you
          should treat it accordingly: keep your own export of any data that
          matters to you, and tell us promptly if something is wrong.
        </p>

        <h2>Your account</h2>

        <p>
          You must be at least 16 years old to hold an account. The email
          address and name you provide must be your own and accurate; the
          club or class association you list must be one you are authorised
          to score for. Sign-in is by magic link to your email address —
          there is no password — so the security of your email account is the
          security of your Sail Scoring account. Do not share access to your
          inbox or forward magic links.
        </p>

        <p>
          You are responsible for activity that takes place under your
          account. If you suspect your account has been used by someone else,
          email{" "}
          <a href="mailto:mark@hyc.ie" className="text-link">
            mark@hyc.ie
          </a>{" "}
          and we will help.
        </p>

        <h2>Workspaces and data</h2>

        <p>
          The data you and your fellow scorers enter into a workspace —
          competitors, races, finishes, handicap configurations, FTP
          credentials, published results — belongs to the workspace. The
          workspace owner (typically a club or class association) decides who
          may access it, what is published, and when it is deleted. Sail
          Scoring processes that data on the workspace owner&apos;s
          instructions and does not use it for any other purpose.
        </p>

        <p>
          You can export workspace data at any time. If you ask us to delete a
          workspace, we will remove it; routine database backups age out
          within 30 days. See the{" "}
          <a href="/legal/privacy" className="text-link">
            Privacy Policy
          </a>{" "}
          for the detail on what we store and where.
        </p>

        <h2>Acceptable use</h2>

        <p>You agree not to:</p>

        <ul>
          <li>
            Use the service to publish content that is unlawful, defamatory,
            infringing, or harmful to others.
          </li>
          <li>
            Enter data about anyone that you are not authorised to enter, or
            misrepresent the source or status of results.
          </li>
          <li>
            Probe, scan, or test the vulnerability of the service except as
            part of a coordinated security disclosure to{" "}
            <a href="mailto:mark@hyc.ie" className="text-link">
              mark@hyc.ie
            </a>
            .
          </li>
          <li>
            Scrape, crawl, or otherwise systematically extract data beyond
            normal use of the application.
          </li>
          <li>
            Interfere with the service for other users, or attempt to gain
            unauthorised access to accounts, workspaces, or infrastructure.
          </li>
        </ul>

        <p>
          We may suspend or terminate accounts that breach these rules,
          immediately where the breach is serious or ongoing.
        </p>

        <h2>Cost to users</h2>

        <p>
          Sail Scoring is free to use, and the goal is to keep it that way.
          Sustaining the service costs real money and that cost has to be
          covered by someone — the preferred path is a sponsoring
          organisation funding it on behalf of its users rather than charging
          clubs or scorers directly. If that ever changes and a user-facing
          charge becomes necessary, we will give active account holders
          reasonable notice by email along with the option to export your
          data and close your account before any charges apply.
        </p>

        <h2>Service availability and changes</h2>

        <p>
          We aim for the service to be available whenever you need it, but we
          do not offer a guaranteed uptime or formal service level. We may
          schedule maintenance, deploy changes, or take the service offline
          briefly when needed.
        </p>

        <p>
          We may modify, add, or discontinue features. Where a change would
          materially affect how you use the service we will give notice in
          advance, by email or within the application.
        </p>

        <h2>Termination</h2>

        <p>
          You may stop using the service and delete your account at any time.
          We may terminate or suspend your account for breach of these terms,
          for prolonged inactivity, or if we discontinue the service. On
          termination we will give you a reasonable opportunity to export
          workspace data before deletion.
        </p>

        <h2>Disclaimers</h2>

        <p>
          The service is provided &ldquo;as is&rdquo; and &ldquo;as
          available.&rdquo; We make no warranties, express or implied, beyond
          those that cannot be excluded by law. Sail Scoring is a tool that
          helps you apply the Racing Rules of Sailing — final responsibility
          for the correctness of results, the application of redress, and
          adherence to the Sailing Instructions rests with the race officer,
          the scorer, and the protest committee.
        </p>

        <h2>Limitation of liability</h2>

        <p>
          To the maximum extent permitted by law, Sail Scoring is not liable
          for indirect, incidental, special, consequential, or punitive
          damages, or for lost data, lost profits, or business interruption,
          arising from your use of or inability to use the service. Our total
          liability for any claim arising out of or relating to the service
          is limited to the greater of: (a) the fees you paid us in the 12
          months before the event giving rise to the claim, or (b)
          &euro;100. Nothing in these terms limits liability that cannot be
          limited by law, including liability for death, personal injury, or
          fraud.
        </p>

        <h2>Governing law and jurisdiction</h2>

        <p>
          These terms are governed by the laws of Ireland. Any dispute
          arising out of or in connection with them is subject to the
          exclusive jurisdiction of the Irish courts. If you are a consumer
          resident in another EU member state, you retain the protection of
          mandatory provisions of the law of that state.
        </p>

        <h2>Changes to these terms</h2>

        <p>
          We may update these terms from time to time. If we make material
          changes we will update the &ldquo;last updated&rdquo; date and
          notify active account holders by email. Continued use of the
          service after the changes take effect constitutes acceptance.
        </p>

        <h2>Contact</h2>

        <p>
          Questions about these terms:{" "}
          <a href="mailto:mark@hyc.ie" className="text-link">
            mark@hyc.ie
          </a>
          .
        </p>
      </div>
    </section>
  );
}
