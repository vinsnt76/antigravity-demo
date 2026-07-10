import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renovation Quote Demo",
  description: "Multi-step renovation quote form demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
