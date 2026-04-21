"use client";

import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

const PAPER = "#F7F4EF";
const INK = "#111111";
const MUTE = "#6B6560";
const RUST = "#B4552D";

function Avatar({
  label,
  sublabel,
  delay,
  side,
}: {
  label: string;
  sublabel: string;
  delay: number;
  side: "left" | "right";
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const appear = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 140 },
  });

  const translateX = side === "left" ? -1 * (1 - appear) * 40 : (1 - appear) * 40;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        opacity: appear,
        transform: `translateX(${translateX}px)`,
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          border: `2px solid ${INK}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: 36,
          color: INK,
          backgroundColor: PAPER,
        }}
      >
        {label[0]}
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 18,
          fontWeight: 600,
          color: INK,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 14,
          color: MUTE,
        }}
      >
        {sublabel}
      </div>
    </div>
  );
}

function Waveform({ offset, active }: { offset: number; active: boolean }) {
  const frame = useCurrentFrame();
  const bars = 24;
  const opacity = active ? 1 : 0.25;
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", height: 40 }}>
      {Array.from({ length: bars }).map((_, i) => {
        const phase = (frame + offset + i * 6) * 0.25;
        const base = 6;
        const amp = active ? 18 : 2;
        const h = base + Math.abs(Math.sin(phase)) * amp;
        return (
          <div
            key={i}
            style={{
              width: 3,
              height: h,
              backgroundColor: INK,
              opacity,
              borderRadius: 2,
            }}
          />
        );
      })}
    </div>
  );
}

function ConnectingLine() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - 40,
    fps,
    config: { damping: 20, stiffness: 120 },
  });
  return (
    <div
      style={{
        position: "relative",
        width: 180,
        height: 2,
        backgroundColor: "rgba(17,17,17,0.15)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: 2,
          width: `${progress * 100}%`,
          backgroundColor: RUST,
        }}
      />
    </div>
  );
}

function Status({ text, appearAt }: { text: string; appearAt: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const appear = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  return (
    <div
      style={{
        opacity: appear,
        transform: `translateY(${(1 - appear) * 8}px)`,
        fontFamily: "Inter, sans-serif",
        fontSize: 15,
        color: MUTE,
        letterSpacing: 0.2,
      }}
    >
      {text}
    </div>
  );
}

export const TestDriveDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const recordingStart = 70;
  const doneStart = 160;
  const recording = frame >= recordingStart && frame < doneStart;
  const done = frame >= doneStart;

  const statusText = done
    ? "First episode recorded. 14m 32s."
    : recording
      ? "Recording — Test Drive #1"
      : frame > 40
        ? "Matched"
        : "Finding someone starting too…";

  const recordDot = recording ? Math.abs(Math.sin(frame * 0.25)) : 0;

  const ambient = interpolate(
    frame,
    [0, 20, durationInFrames - 20, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PAPER,
        padding: 48,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity: ambient,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 48,
          }}
        >
          <Avatar label="You" sublabel="First podcast" delay={5} side="left" />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <ConnectingLine />
            <Waveform offset={0} active={recording} />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: RUST,
                  opacity: recording ? 0.4 + recordDot * 0.6 : done ? 0.2 : 0,
                }}
              />
              <Status text={statusText} appearAt={0} />
            </div>
          </div>
          <Avatar label="Sam" sublabel="First podcast" delay={25} side="right" />
        </div>
      </div>
    </AbsoluteFill>
  );
};
