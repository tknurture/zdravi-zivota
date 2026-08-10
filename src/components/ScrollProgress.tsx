"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin progress line under the nav, tracking scroll position. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}
