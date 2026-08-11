"use client";

import { useEffect, useRef } from "react";

/**
 * A short connector between two text blocks — a dot, a thin line, a dot.
 * Unlike the old scroll-bolt rail (one continuous line spanning the whole
 * page, meant to hide behind opaque panels), each Spine is its own
 * self-contained segment: it starts right after the block above it ends
 * and stops right before the block below it begins, so it never runs
 * behind — or through — the text itself.
 *
 * The glowing fill is driven by a plain scroll listener reading
 * getBoundingClientRect on every frame, not a library abstraction — so
 * there's no smoothing, no spring, no intermediate scheduling between the
 * scrollbar and what's on screen. It reflects the segment's own transit
 * across the viewport 1:1, this frame's scroll position in, this frame's
 * fill amount out.
 */
export default function Spine({ height = 90 }: { height?: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    if (!wrap || !fill) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 the instant the segment's top edge appears at the bottom of the
      // viewport, 1 the instant its bottom edge clears the top — its own
      // full transit across the screen, nothing beyond that.
      const total = vh + rect.height;
      const traveled = vh - rect.top;
      const progress = Math.min(1, Math.max(0, traveled / total));
      fill.style.transform = `scaleY(${progress})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="spine-wrap" style={{ height }} aria-hidden="true">
      <span className="spine-dot spine-dot-top" />
      {/* Static base — the full connector is visible immediately, like the
          reference image's plain thin line between dots. */}
      <span className="spine-line" />
      {/* Glowing overlay tracking actual scroll position — the part that
          visibly runs as you scroll through the gap. */}
      <span ref={fillRef} className="spine-fill" style={{ transform: "scaleY(0)" }} />
      <span className="spine-dot spine-dot-bottom" />
    </div>
  );
}
