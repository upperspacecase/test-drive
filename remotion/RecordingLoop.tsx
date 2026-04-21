"use client";

import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

const RUST = "#B4552D";
const MUTE_LIGHT = "#B8B3AC";

function bars({
  count,
  frame,
  offset,
  active,
}: {
  count: number;
  frame: number;
  offset: number;
  active: boolean;
}) {
  return Array.from({ length: count }).map((_, i) => {
    const phase = (frame + offset + i * 5) * 0.22 + i * 0.35;
    const base = 4;
    const amp = active ? 14 : 1;
    const h = base + Math.abs(Math.sin(phase)) * amp;
    return (
      <div
        key={i}
        style={{
          width: 3,
          height: h,
          backgroundColor: active ? MUTE_LIGHT : "rgba(184,179,172,0.3)",
          borderRadius: 2,
        }}
      />
    );
  });
}

export const RecordingLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const startRecording = 24;
  const done = frame > durationInFrames - 24;
  const recording = frame >= startRecording && !done;

  const pulse = recording ? 0.4 + Math.abs(Math.sin(frame * 0.25)) * 0.6 : 0;

  const fade = interpolate(
    frame,
    [0, 12, durationInFrames - 12, durationInFrames],
    [0, 1, 1, 0.8],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 0,
        opacity: fade,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 4px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            height: 32,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {bars({ count: 20, frame, offset: 0, active: recording })}
        </div>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: RUST,
            opacity: pulse,
            alignSelf: "center",
            marginLeft: 12,
            boxShadow: recording ? `0 0 12px ${RUST}` : "none",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            height: 32,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {bars({ count: 20, frame, offset: 40, active: recording })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
