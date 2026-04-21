"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "err";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("err");
        setMessage(data?.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus("ok");
      setMessage("You're on the list. We'll email you when your match is ready.");
      setEmail("");
    } catch {
      setStatus("err");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full max-w-sm">
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md border border-ink/20 bg-paper px-4 py-3 text-base text-ink placeholder:text-mute focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
        aria-label="Email"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-rust px-5 py-3 text-base font-semibold text-paper transition-opacity hover:opacity-90 disabled:opacity-60 cursor-pointer"
      >
        {status === "loading" ? "Adding..." : "Join the waitlist"}
      </button>
      {/* Hand-drawn underline echo from mockup */}
      <svg viewBox="0 0 280 14" className="h-3 text-rust/70 -mt-1 mx-4" aria-hidden="true">
        <path
          d="M4 8 Q 70 2, 140 6 T 276 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      {status === "ok" && (
        <p className="text-sm text-ink" role="status">
          {message}
        </p>
      )}
      {status === "err" && (
        <p className="text-sm text-rust" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
