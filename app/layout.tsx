import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MathQuest",
  description: "게임형 수학 학습 PWA",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gradient-to-b from-blue-50 to-yellow-50 min-h-screen">
        <header className="p-4 bg-white/80 backdrop-blur shadow-sm">
          <h1 className="text-2xl font-bold text-blue-600">MathQuest</h1>
        </header>
        <main className="p-4 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
