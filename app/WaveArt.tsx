export function WaveArt() {
  const INK = "#111112";
  const RUST = "#B4552D";

  const curves: { d: string; stroke: string; opacity: number }[] = [];
  const W = 800;
  const H = 220;
  const cx = W / 2;
  const cy = H / 2;
  const layers = 14;

  for (let i = 0; i < layers; i++) {
    const phase = i * 0.35;
    const amp = 34 + i * 4;
    const freq = 3.2 + i * 0.08;
    let d = `M 40 ${cy}`;
    const steps = 160;
    for (let s = 1; s <= steps; s++) {
      const t = s / steps;
      const x = 40 + t * (W - 80);
      const envelope = Math.sin(Math.PI * t);
      const y =
        cy +
        Math.sin(t * Math.PI * 2 * freq + phase) *
          amp *
          envelope;
      d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    const isRust = i % 2 === 0;
    curves.push({
      d,
      stroke: isRust ? RUST : INK,
      opacity: isRust ? 0.55 + (i / layers) * 0.3 : 0.35 + (i / layers) * 0.4,
    });
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="auto"
      className="block mx-auto max-w-3xl"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="wave-halo" cx={`${cx}`} cy={`${cy}`} r="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={RUST} stopOpacity="0.28" />
          <stop offset="60%" stopColor={RUST} stopOpacity="0.06" />
          <stop offset="100%" stopColor={RUST} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx={cx} cy={cy} rx="320" ry="90" fill="url(#wave-halo)" />
      {curves.map((c, i) => (
        <path
          key={i}
          d={c.d}
          stroke={c.stroke}
          strokeOpacity={c.opacity}
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
