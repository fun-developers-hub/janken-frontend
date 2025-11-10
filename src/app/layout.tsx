import type { Metadata } from "next";
import "./globals.css";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "じゃんけんApp",
  description: "じゃんけんをするアプリです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
