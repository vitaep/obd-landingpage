import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OBD Tech",
  icons: {
    icon: "/logoicon.svg",
  },
  description: "A OBD Tech é uma empresa de soluções técnologicas financeiras.",
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
