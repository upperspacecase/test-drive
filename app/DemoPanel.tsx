"use client";

import dynamic from "next/dynamic";
import { RecordingLoop } from "@/remotion/RecordingLoop";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ minHeight: 48 }}
      >
        <div className="flex gap-[3px] items-center">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="w-[3px] rounded-sm bg-mute-light/40"
              style={{ height: 4 + (i % 6) * 2 }}
            />
          ))}
        </div>
      </div>
    ),
  },
);

function MicIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function AvatarCircle({ name, hue }: { name: string; hue: number }) {
  return (
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center text-ink font-semibold text-xl"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 40% 72%), hsl(${hue} 35% 58%))`,
      }}
    >
      {name[0]}
    </div>
  );
}

function RecordingCard({
  name,
  hue,
  playerOffset,
}: {
  name: string;
  hue: number;
  playerOffset: number;
}) {
  return (
    <div className="flex-1 bg-[#2B2A30] rounded-xl p-5 flex flex-col items-center gap-3 border border-panel-line/40">
      <AvatarCircle name={name} hue={hue} />
      <div className="w-full">
        <Player
          component={RecordingLoop}
          durationInFrames={180}
          compositionWidth={360}
          compositionHeight={48}
          fps={30}
          autoPlay
          loop
          controls={false}
          initialFrame={playerOffset}
          style={{ width: "100%", height: 48, display: "block" }}
        />
      </div>
      <span className="text-mute-light text-sm font-medium">{name}</span>
    </div>
  );
}

export function DemoPanel() {
  return (
    <section className="px-6 sm:px-10 max-w-5xl mx-auto w-full">
      <div className="rounded-3xl bg-panel px-6 sm:px-12 py-14 sm:py-20">
        <h2 className="text-center font-sans text-mute-light/90 text-2xl sm:text-3xl tracking-tightest leading-tight max-w-xl mx-auto">
          How Test Drive works:<br />
          <span className="text-paper">A quiet space to practice.</span>
        </h2>

        <div className="mt-12 sm:mt-16 mx-auto max-w-2xl">
          {/* Laptop frame */}
          <div className="relative">
            <div className="bg-[#1A1920] rounded-t-2xl border border-panel-line/50 p-3 sm:p-4">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-2 pb-3 border-b border-panel-line/40 text-mute-light/70">
                <div className="flex items-center gap-3">
                  <span className="text-rust"><MicIcon /></span>
                  <CameraIcon />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-mute-light/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-mute-light/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-mute-light/40" />
                </div>
              </div>

              {/* Cards */}
              <div className="flex gap-3 sm:gap-4 py-5">
                <RecordingCard name="Alex" hue={28} playerOffset={0} />
                <RecordingCard name="Jamie" hue={200} playerOffset={45} />
              </div>

              {/* CTA inside laptop */}
              <div className="flex justify-center pb-3">
                <button
                  type="button"
                  className="bg-rust text-paper px-5 py-2.5 rounded-lg font-semibold text-sm cursor-default select-none"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  Start practice call
                </button>
              </div>
            </div>
            {/* Laptop base */}
            <div className="h-2 bg-[#2B2A30] mx-[-8px] rounded-b-3xl" />
            <div className="h-1 bg-[#1A1920] mx-auto w-24 rounded-b-xl" />
          </div>
        </div>

        <p className="mt-10 text-center text-mute-light/80 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Match, schedule, and record a private, unreleased conversation.
          Receive gentle, constructive feedback.
        </p>
      </div>
    </section>
  );
}
