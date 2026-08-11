/**
 * Calm, spiritual backdrop: a few large soft-edged color washes that drift
 * very slowly and breathe together (gentle scale pulse, like an inhale/
 * exhale), plus a faint layer of scattered bokeh light. Pure CSS — no
 * particles, no per-frame JS — so it stays quiet and never competes with
 * the text sitting on top of it.
 *
 * Rendered twice: once globally (the site-wide backdrop) and once scoped
 * inside the hero section, where local CSS variable overrides repaint it
 * in the hero's own original colors — sparkle is left off there so the
 * hero looks exactly as it always has.
 */
export default function AuraField({ sparkle = true }: { sparkle?: boolean }) {
  return (
    <div className="aura-field" aria-hidden="true">
      <div className="aura-breathe">
        <div className="aura-blob aura-blob-a" />
        <div className="aura-blob aura-blob-b" />
        <div className="aura-blob aura-blob-c" />
        <div className="aura-blob aura-blob-d" />
      </div>
      {sparkle && <div className="aura-sparkle" />}
    </div>
  );
}
