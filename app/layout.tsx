import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "KB Portfolio",
  description:
    "Khurt Barrios portfolio for high-retention video editing, graphic design, UGC ads, and cinematic content.",
  openGraph: {
    title: "KB Portfolio",
    description:
      "Video Editor | Graphic Designer | Content Creator based in the Philippines.",
    siteName: "KB Portfolio",
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
