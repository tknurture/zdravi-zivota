"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
};

const word = {
  hidden: { y: "55%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const PUNCTUATION = /[.,!?„“"]/g;

/** Splits text into words that rise into place, staggered, on first view. */
export default function RevealWords({
  text,
  as: Tag = "span",
  className,
  emphasize,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  /** Phrase (matched word-for-word, ignoring punctuation) to render in italic accent style */
  emphasize?: string;
}) {
  const words = text.split(" ");
  const emphWords = new Set(
    (emphasize ?? "")
      .split(" ")
      .map((w) => w.replace(PUNCTUATION, ""))
      .filter(Boolean)
  );

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: "inline" }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
      >
        {words.map((w, i) => {
          const isEmph = emphWords.has(w.replace(PUNCTUATION, ""));
          return (
            <Fragment key={i}>
              <span
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  verticalAlign: "top",
                }}
              >
                <motion.span
                  variants={word}
                  style={{ display: "inline-block" }}
                  className={isEmph ? "accent-em" : undefined}
                >
                  {w}
                </motion.span>
              </span>
              {/* Space lives outside the clipped inline-block — a trailing
                  space at the end of an inline-block's own line box is
                  collapsed away by normal CSS whitespace rules, which is
                  what was swallowing the gaps between words. Keeping it as
                  plain text here also restores normal line-wrapping. */}
              {i < words.length - 1 ? " " : ""}
            </Fragment>
          );
        })}
      </motion.span>
    </Tag>
  );
}

export function RevealBlock({
  children,
  className,
  delay = 0,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
