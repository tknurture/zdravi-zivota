/**
 * Calm, spiritual backdrop: a few large soft-edged color washes that drift
 * very slowly and breathe together (gentle scale pulse, like an inhale/
 * exhale). Pure CSS — no particles, no per-frame JS — so it stays quiet
 * and never competes with the text sitting on top of it. Uses the hero's
 * original colors, fixed to the viewport, so the whole page — hero
 * included — shares one continuous background.
 */
export default function AuraField() {
  return (
    <div className="aura-field" aria-hidden="true">
      <div className="aura-breathe">
        <div className="aura-blob aura-blob-a" />
        <div className="aura-blob aura-blob-b" />
        <div className="aura-blob aura-blob-c" />
        <div className="aura-blob aura-blob-d" />
      </div>
    </div>
  );
}
