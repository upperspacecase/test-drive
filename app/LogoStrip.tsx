import {
  siApplepodcasts,
  siSpotify,
  siPocketcasts,
  siOvercast,
  siYoutubemusic,
  type SimpleIcon,
} from "simple-icons/icons";

type Mark = { label: string; icon: SimpleIcon };

const marks: Mark[] = [
  { label: "Apple Podcasts", icon: siApplepodcasts },
  { label: "Spotify", icon: siSpotify },
  { label: "Pocket Casts", icon: siPocketcasts },
  { label: "Overcast", icon: siOvercast },
  { label: "YouTube Music", icon: siYoutubemusic },
];

function LogoMark({ mark }: { mark: Mark }) {
  return (
    <div className="flex items-center gap-2.5 text-ink/80" aria-label={mark.label}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
      >
        <title>{mark.icon.title}</title>
        <path d={mark.icon.path} />
      </svg>
      <span className="text-sm font-semibold">{mark.label}</span>
    </div>
  );
}

export function LogoStrip() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
        {marks.map((m) => (
          <LogoMark key={m.label} mark={m} />
        ))}
      </div>
      <p className="text-sm text-mute">
        Practice for the platforms you aspire to join. Not affiliated.
      </p>
    </div>
  );
}
