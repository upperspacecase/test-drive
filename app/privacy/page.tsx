export const metadata = { title: "Privacy — Test Drive" };

export default function Privacy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-ink">
      <h1 className="font-serif text-4xl mb-6">Privacy</h1>
      <p className="text-ink/80 leading-relaxed mb-4">
        We collect your email address when you join the waitlist. We use it to email you once when
        we&apos;re ready to match you with another beginner. We don&apos;t sell it. We don&apos;t send
        newsletters. If you ask us to delete it, we will.
      </p>
      <p className="text-ink/80 leading-relaxed">
        Reach out: <a className="underline" href="mailto:taytoddpattison@gmail.com">taytoddpattison@gmail.com</a>
      </p>
      <p className="mt-10 text-sm text-mute"><a href="/" className="underline">Back</a></p>
    </main>
  );
}
