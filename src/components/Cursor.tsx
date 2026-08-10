"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Soft trailing cursor dot, desktop/mouse only. Grows over interactive
 * elements (data-cursor="hover") to signal affordance without a generic
 * browser pointer.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 34, stiffness: 260, mass: 0.5 });
  const springY = useSpring(y, { damping: 34, stiffness: 260, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    if (!mq.matches) return;

    document.body.classList.add("cursor-enabled");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('[data-cursor="hover"]'));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.body.classList.remove("cursor-enabled");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="cursor-dot"
      style={{ x: springX, y: springY }}
      animate={{
        scale: hovering ? 1.8 : 1,
        opacity: visible ? 0.55 : 0,
      }}
      transition={{ scale: { type: "spring", damping: 22, stiffness: 220 } }}
    />
  );
}
