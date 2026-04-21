import { WaveArt } from "./WaveArt";
import { DemoPanel } from "./DemoPanel";
import { WaitlistForm } from "./WaitlistForm";
import { LogoStrip } from "./LogoStrip";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Wordmark */}
      <div className="px-6 sm:px-10 pt-8 max-w-5xl mx-auto w-full">
        <span className="font-sans font-semibold text-ink text-base">Test Drive</span>
      </div>

      {/* HERO: two-column */}
      <section className="px-6 sm:px-10 pt-16 sm:pt-24 pb-16 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h1 className="font-sans font-black text-ink text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tightest">
              Find your<br />podcasting<br />voice, together.
            </h1>
            <p className="mt-7 text-mute text-base sm:text-lg max-w-md leading-relaxed">
              Test Drive pairs two brand-new podcasters for low-stakes, practice recordings.
              No pressure, just progress.
            </p>
          </div>
          <div className="md:col-span-2 md:pt-4">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* WAVE ART */}
      <section className="px-6 sm:px-10 pb-16 sm:pb-20 max-w-5xl mx-auto w-full">
        <WaveArt />
      </section>

      {/* REMOTION DEMO PANEL */}
      <DemoPanel />

      {/* LOGO STRIP */}
      <section className="px-6 sm:px-10 py-24 sm:py-28 max-w-5xl mx-auto w-full">
        <LogoStrip />
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-ink/10 px-6 sm:px-10 py-10">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-8 text-sm text-mute">
          <a href="#" className="hover:text-ink transition-colors">About</a>
          <a href="/privacy" className="hover:text-ink transition-colors">Privacy</a>
          <a href="#" className="hover:text-ink transition-colors">Terms</a>
          <a href="mailto:taytoddpattison@gmail.com" className="hover:text-ink transition-colors">Contact</a>
          <div className="col-span-2 md:col-span-4 flex items-center gap-2 md:justify-end md:mt-0 mt-4">
            <span>&copy; {new Date().getFullYear()} Test Drive. An independent project.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rust" aria-hidden="true" />
          </div>
        </div>
      </footer>
    </main>
  );
}
