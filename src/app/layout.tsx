import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yicheng Ke | Resume Platform",
  description:
    "English personal resume website for Yicheng Ke with research, skills, and education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
