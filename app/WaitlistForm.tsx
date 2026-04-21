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
    <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          placeholder="you@work.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-md border border-ink/20 bg-paper px-4 py-3 text-base text-ink placeholder:text-mute focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
          aria-label="Email"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-rust px-5 py-3 text-base font-semibold text-paper transition-opacity hover:opacity-90 disabled:opacity-60 cursor-pointer"
        >
          {status === "loading" ? "Adding..." : "Get matched when we launch"}
        </button>
      </div>
      <p className="text-sm text-mute">
        One email. We'll pair you with someone starting too.
      </p>
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
