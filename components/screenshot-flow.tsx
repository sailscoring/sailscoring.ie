"use client";

import { useCallback, useEffect, useState } from "react";

// The four steps of the scoring → publishing story, illustrated with real
// captures from the live app (sample data). Mirrors the introduction leaflet.
// `img` is the framed thumbnail; `full` is the larger image shown in the
// lightbox (for the public results page that's the whole long page, not the
// cropped top shown in the grid).
type Step = {
  n: number;
  img: string;
  full: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    n: 1,
    img: "/screenshots/finish-entry.webp",
    full: "/screenshots/finish-entry.webp",
    title: "Enter finishes",
    body: "Key in the finishing order — or finishing times — straight from the finish sheet, by sail number.",
  },
  {
    n: 2,
    img: "/screenshots/standings.webp",
    full: "/screenshots/standings.webp",
    title: "Standings, instantly",
    body: "Scores recompute the moment finishes go in — faithful to RRS Appendix A, with IRC, ECHO and PY handicaps.",
  },
  {
    n: 3,
    img: "/screenshots/preview.webp",
    full: "/screenshots/preview.webp",
    title: "Preview, then publish",
    body: "See the exact published page inside the app, then publish to the web in a single click.",
  },
  {
    n: 4,
    img: "/screenshots/public-results.webp",
    full: "/screenshots/public-results-full.webp",
    title: "Live public results",
    body: "Anyone can read the results at sailscoring.ie — no app to install, no login required.",
  },
];

export default function ScreenshotFlow() {
  // The step currently open in the lightbox, or null when closed.
  const [open, setOpen] = useState<Step | null>(null);

  const close = useCallback(() => setOpen(null), []);

  // Close on Escape, and lock background scroll while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "48px 40px",
        }}
      >
        {steps.map((s, i) => (
          <div key={s.n} className={`anim-fade-up delay-${i + 1}`}>
            <button
              type="button"
              className="shot-frame shot-trigger"
              onClick={() => setOpen(s)}
              aria-label={`Expand screenshot: ${s.title}`}
            >
              <span className="shot-bar" aria-hidden>
                <i />
                <i />
                <i />
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title} width={2000} height={1250} />
              <span className="shot-zoom" aria-hidden>
                {/* magnifier */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </span>
            </button>
            <div className="step-head">
              <span className="step-badge" aria-hidden>
                {s.n}
              </span>
              <span className="step-title">{s.title}</span>
            </div>
            <p className="step-cap">{s.body}</p>
          </div>
        ))}
      </div>

      {open && (
        <div
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={close}
        >
          <button type="button" className="lb-close" onClick={close} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          {/* Stop clicks on the image itself from closing the dialog. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={open.full}
            alt={open.title}
            className="lb-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
