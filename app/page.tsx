import { DemoPlayer } from "./DemoPlayer";
import { WaitlistForm } from "./WaitlistForm";
import { LogoStrip } from "./LogoStrip";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* HERO */}
      <section className="px-6 sm:px-10 pt-20 sm:pt-28 pb-10 max-w-5xl mx-auto w-full">
        <h1 className="font-serif text-ink text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
          The first podcast<br />is the hardest.<br />
          <span className="text-mute">Don&apos;t do it alone.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-ink/80 max-w-2xl leading-relaxed">
          Test Drive pairs you with another beginner for a low-stakes practice recording.
          No audience. No pressure. Just reps.
        </p>
        <div className="mt-10">
          <WaitlistForm />
        </div>
        <p className="mt-6 text-sm text-mute italic">
          The idea you had six months ago is still sitting there.
        </p>
      </section>

      {/* REMOTION DEMO */}
      <section id="how" className="px-6 sm:px-10 py-6 sm:py-10 max-w-5xl mx-auto w-full">
        <DemoPlayer />
        <p className="mt-4 text-sm text-mute">
          Two people starting. One button. One practice recording. That&apos;s the whole thing.
        </p>
      </section>

      {/* LOGO STRIP */}
      <section className="px-6 sm:px-10 py-20 sm:py-28 max-w-5xl mx-auto w-full">
        <LogoStrip />
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-ink/10 px-6 sm:px-10 py-8">
        <div className="max-w-5xl mx-auto w-full flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-mute">
          <span className="font-semibold text-ink">Test Drive</span>
          <a href="#how" className="hover:text-ink transition-colors">How it works</a>
          <a href="mailto:taytoddpattison@gmail.com" className="hover:text-ink transition-colors">Contact</a>
          <a href="/privacy" className="hover:text-ink transition-colors">Privacy</a>
          <span className="ml-auto">&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
