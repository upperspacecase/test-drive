"use client";

import dynamic from "next/dynamic";
import { TestDriveDemo } from "@/remotion/TestDriveDemo";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false },
);

export function DemoPlayer() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-sm">
      <Player
        component={TestDriveDemo}
        durationInFrames={210}
        compositionWidth={1280}
        compositionHeight={720}
        fps={30}
        autoPlay
        loop
        controls={false}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}
