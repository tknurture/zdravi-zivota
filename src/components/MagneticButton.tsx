"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

/** Button that leans toward the cursor within its bounds, then eases back. */
export default function MagneticButton({
  href,
  children,
  className,
  strength = 0.22,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  // Cached on enter rather than re-read on every mousemove — the live rect
  // already reflects the spring's own x/y transform, so reading it mid-move
  // would feed the pull vector back into itself and jitter under fast moves.
  const restRect = useRef<DOMRect | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.5 });

  const handleEnter = () => {
    if (ref.current) restRect.current = ref.current.getBoundingClientRect();
  };

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = restRect.current ?? ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    restRect.current = null;
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      data-cursor="hover"
      style={{ x: springX, y: springY }}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.a>
  );
}
