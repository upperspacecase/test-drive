import type { ReactNode } from "react";

type Logo = { name: string; svg: ReactNode };

const logos: Logo[] = [
  {
    name: "Spotify",
    svg: (
      <svg viewBox="0 0 120 28" className="h-5" aria-label="Spotify">
        <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="700" fill="currentColor">Spotify</text>
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    svg: (
      <svg viewBox="0 0 170 28" className="h-5" aria-label="Apple Podcasts">
        <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="currentColor">Apple Podcasts</text>
      </svg>
    ),
  },
  {
    name: "Pocket Casts",
    svg: (
      <svg viewBox="0 0 150 28" className="h-5" aria-label="Pocket Casts">
        <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="currentColor">Pocket Casts</text>
      </svg>
    ),
  },
  {
    name: "Overcast",
    svg: (
      <svg viewBox="0 0 110 28" className="h-5" aria-label="Overcast">
        <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="currentColor">Overcast</text>
      </svg>
    ),
  },
  {
    name: "Amazon Music",
    svg: (
      <svg viewBox="0 0 160 28" className="h-5" aria-label="Amazon Music">
        <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="currentColor">Amazon Music</text>
      </svg>
    ),
  },
  {
    name: "YouTube Music",
    svg: (
      <svg viewBox="0 0 165 28" className="h-5" aria-label="YouTube Music">
        <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="currentColor">YouTube Music</text>
      </svg>
    ),
  },
];

export function LogoStrip() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <p className="text-sm text-mute uppercase tracking-widest">
        Your podcast will live here eventually
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-mute">
        {logos.map((l) => (
          <div key={l.name} className="opacity-70 hover:opacity-100 transition-opacity">
            {l.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
