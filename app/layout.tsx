import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khurt Barrios | AI UGC Ad Editor · Video Editor · Web Developer",
  description:
    "Khurt Barrios — AI UGC ad editor, high-retention video editor, and web/app developer based in the Philippines. 300+ projects, 100M+ views.",
  icons: {
    icon: "/icon.png"
  },
  openGraph: {
    title: "Khurt Barrios | AI UGC Ad Editor · Video Editor · Web Developer",
    description:
      "AI UGC ads, high-retention editing, and web development that captures attention and drives real results.",
    siteName: "KB Media",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
