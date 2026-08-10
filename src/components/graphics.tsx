"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/** Wordmark: two interlocking arcs standing for the two practitioners. */
export function Logomark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 4C9.4 4 4 9.4 4 16"
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 28C22.6 28 28 22.6 28 16"
        stroke="var(--ink)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="4.2" stroke="var(--ink)" strokeWidth="1.4" />
    </svg>
  );
}

/** Large ambient organic shape for the hero — slow independent-axis drift. */
export function HeroBlob() {
  return (
    <div className="hero-blob-wrap" aria-hidden="true">
      <motion.svg
        viewBox="0 0 480 480"
        className="hero-blob"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      >
        <path
          d="M240 60c72 0 96 66 132 108s72 78 36 138-108 84-168 84-126-30-156-90S54 168 96 114 168 60 240 60Z"
          fill="url(#blobGrad)"
        />
        <defs>
          <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent-soft)" />
            <stop offset="100%" stopColor="var(--paper-deep)" />
          </linearGradient>
        </defs>
      </motion.svg>
      <motion.svg
        viewBox="0 0 480 480"
        className="hero-ring"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, ease: "linear", repeat: Infinity }}
      >
        <circle
          cx="240"
          cy="240"
          r="170"
          stroke="var(--ink)"
          strokeOpacity="0.14"
          strokeWidth="1"
          strokeDasharray="1 10"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 480 480"
        className="hero-ring hero-ring-2"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
      >
        <circle
          cx="240"
          cy="240"
          r="205"
          stroke="var(--accent)"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
      </motion.svg>
    </div>
  );
}

/** Concentric ripple — used for the "fatigue / needs rest" state. */
export function IconRipple() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="3" stroke="var(--accent)" strokeWidth="1.4" />
      <circle
        cx="15"
        cy="15"
        r="8.5"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <circle
        cx="15"
        cy="15"
        r="13.5"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Sine wave — used for "inner unrest". */
export function IconWave() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M2 18c3-9 6-9 9 0s6 9 9 0 6-9 8-6"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Balanced scale line — used for "finding equilibrium". */
export function IconBalance() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M15 4v20M6 9h18M8 9l-4 8a4 4 0 008 0l-4-8ZM22 9l-4 8a4 4 0 008 0l-4-8Z"
        stroke="var(--accent)"
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M9 27h12"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Oversized decorative quotation glyph. */
export function QuoteMark() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" fill="none" aria-hidden="true">
      <path
        d="M0 24C0 10 8 2 20 0l2 6c-8 3-12 8-12 14h10v20H0V24Z"
        fill="var(--accent)"
        fillOpacity="0.85"
      />
      <path
        d="M30 24C30 10 38 2 50 0l2 6c-8 3-12 8-12 14h10v20H30V24Z"
        fill="var(--accent)"
        fillOpacity="0.85"
      />
    </svg>
  );
}

/** Typographic monogram card standing in for a portrait photo. */
export function Monogram({ letter }: { letter: string }) {
  return (
    <div className="monogram" aria-hidden="true">
      <svg viewBox="0 0 180 120" className="monogram-frame" preserveAspectRatio="none">
        <rect
          x="1"
          y="1"
          width="178"
          height="118"
          rx="2"
          fill="none"
          stroke="var(--ink)"
          strokeOpacity="0.16"
        />
        <path d="M1 1L179 119M179 1L1 119" stroke="var(--ink)" strokeOpacity="0.06" />
      </svg>
      <span className="monogram-letter">{letter}</span>
    </div>
  );
}

/** Duotone-treated portrait photo, kept in the same footprint as Monogram. */
export function Portrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="portrait">
      <Image src={src} alt={alt} fill sizes="260px" style={{ objectFit: "cover" }} />
    </div>
  );
}
