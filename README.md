# Test Drive

One-hypothesis landing page MVP. Pairs two brand-new podcasters for a low-stakes practice recording.

## Hypothesis
We believe aspiring podcasters will use a platform to practice podcasting together
because it's the easier and less daunting way to start a podcast, better than not
starting or doing it with friends. We'll know we're right if **30 people join the
waitlist within 7 days**.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind · Remotion · Resend

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Waitlist backend
`POST /api/waitlist` forwards each signup to your inbox via Resend.

Required env vars (set in Vercel or `.env.local`):

```
RESEND_API_KEY=re_xxx
WAITLIST_NOTIFY_TO=you@example.com
WAITLIST_FROM=Test Drive <onboarding@resend.dev>   # optional override
```

Without these the endpoint accepts the request and logs to the server console but
does **not** persist the email. Add the env vars in Vercel before going live.

## Deploy
```bash
vercel --prod
```
