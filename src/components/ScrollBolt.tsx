"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

const GLOW_ACTIVE_CLASS = "glow-active";

/**
 * A golden spine down the center of the page, spanning the whole wrapped
 * range. The lit portion tracks the actual scroll position directly — no
 * spring, no waiting for a heading to cross a threshold — so it always
 * sits exactly where the reader is, from the very first pixel scrolled.
 *
 * Whichever `.glass` panel the lit tip currently sits inside gets a soft
 * golden glow around its edges — driven off the *same* progress value as
 * the fill itself, so the glow and the gold tip are always in the same
 * place, never two systems drifting apart.
 */
export default function ScrollBolt({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dotTop, setDotTop] = useState<number | null>(null);

  // "start end" / "end start": progress hits 0 the instant the container's
  // top first peeks into view at the bottom of the screen (not when it
  // reaches the top of the screen, which — for a tall first panel — can be
  // most of the way through it, making the fill look like it "starts late").
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const headings = Array.from(container.querySelectorAll("h2"));
    const panels = Array.from(container.querySelectorAll<HTMLElement>(".glass"));

    const measureHeading = (el: Element) => {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setDotTop(elRect.top - containerRect.top + elRect.height / 2);
    };

    let headingIo: IntersectionObserver | null = null;
    if (headings.length > 0) {
      headingIo = new IntersectionObserver(
        (entries) => {
          const entering = entries.filter((e) => e.isIntersecting);
          if (entering.length > 0) {
            // last one in the batch is whichever most recently crossed the band
            measureHeading(entering[entering.length - 1].target);
          }
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      headings.forEach((h) => headingIo!.observe(h));
    }
    const rafHead = requestAnimationFrame(() => {
      if (headings.length > 0) measureHeading(headings[0]);
    });

    const onResizeHead = () => {
      if (headings.length === 0) return;
      const centerY = window.innerHeight / 2;
      let closest = headings[0];
      let bestDist = Infinity;
      for (const h of headings) {
        const d = Math.abs(h.getBoundingClientRect().top - centerY);
        if (d < bestDist) {
          bestDist = d;
          closest = h;
        }
      }
      measureHeading(closest);
    };
    window.addEventListener("resize", onResizeHead);

    // panel activation, driven by the same progress value as the fill —
    // whichever panel's own [top, bottom] range (relative to the container)
    // contains the current fill tip is the one that glows.
    let ranges: { el: HTMLElement; top: number; bottom: number }[] = [];
    const computeRanges = () => {
      const containerRect = container.getBoundingClientRect();
      ranges = panels.map((p) => {
        const r = p.getBoundingClientRect();
        return {
          el: p,
          top: r.top - containerRect.top,
          bottom: r.bottom - containerRect.top,
        };
      });
    };
    computeRanges();
    window.addEventListener("resize", computeRanges);

    const applyActive = (panel: HTMLElement) => {
      for (const p of panels) p.classList.remove(GLOW_ACTIVE_CLASS);
      panel.classList.add(GLOW_ACTIVE_CLASS);
    };

    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (ranges.length === 0) return;
      const containerHeight = container.getBoundingClientRect().height;
      const y = v * containerHeight;
      // last panel whose top the fill has already reached — so a gap
      // between two panels keeps the one just passed lit, instead of
      // jumping to whichever panel happens to be last in the list
      let active = ranges[0];
      for (const r of ranges) {
        if (y >= r.top) active = r;
        else break;
      }
      applyActive(active.el);
    });
    if (panels.length > 0) applyActive(panels[0]);

    return () => {
      headingIo?.disconnect();
      cancelAnimationFrame(rafHead);
      window.removeEventListener("resize", onResizeHead);
      window.removeEventListener("resize", computeRanges);
      unsubscribe();
      for (const p of panels) p.classList.remove(GLOW_ACTIVE_CLASS);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <div className="scroll-bolt-rail" aria-hidden="true">
        <div className="scroll-bolt-line" />
        <motion.div className="scroll-bolt-fill" style={{ height: fillHeight }} />
        {dotTop !== null && (
          <motion.div
            className="scroll-bolt-dot"
            animate={{ top: dotTop, opacity: 1 }}
            initial={{ top: dotTop, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22, mass: 0.6 }}
          />
        )}
      </div>
      {children}
    </div>
  );
}
