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
