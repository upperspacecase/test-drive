import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.WAITLIST_NOTIFY_TO;
  const fromAddr = process.env.WAITLIST_FROM ?? "Test Drive <onboarding@resend.dev>";

  if (!apiKey || !notifyTo) {
    console.warn("[waitlist] missing RESEND_API_KEY or WAITLIST_NOTIFY_TO — accepting email but not persisting");
    console.log("[waitlist] signup:", email, new Date().toISOString());
    return NextResponse.json({ ok: true, warn: "dev-mode" });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromAddr,
      to: notifyTo,
      subject: `Test Drive waitlist: ${email}`,
      text: `New Test Drive waitlist signup.\n\nEmail: ${email}\nAt: ${new Date().toISOString()}`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[waitlist] resend error", e);
    return NextResponse.json({ error: "Couldn't save right now. Try again." }, { status: 500 });
  }
}
