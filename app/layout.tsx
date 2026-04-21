import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Drive — Practice your first podcast with someone else starting too",
  description:
    "Test Drive pairs new podcasters for low-stakes practice recordings. No audience. No pressure. Just reps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
