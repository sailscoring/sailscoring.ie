"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * A single framed product screenshot that opens in a lightbox — the same
 * visual language as the home page's ScreenshotFlow, reusable anywhere a
 * feature needs illustrating. `full` defaults to `src`; pass a taller capture
 * (e.g. a full-page grab) when the framed crop is only the top of the story.
 */
export default function FeatureShot({
  src,
  full,
  alt,
}: {
  src: string;
  full?: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

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
      <button
        type="button"
        className="shot-frame shot-trigger"
        onClick={() => setOpen(true)}
        aria-label={`Expand screenshot: ${alt}`}
      >
        <span className="shot-bar" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={2000} height={1250} />
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

      {open && (
        <div
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
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
            src={full ?? src}
            alt={alt}
            className="lb-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
