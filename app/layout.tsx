import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import GrainOverlay from "@/components/ui/GrainOverlay";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wintergarden — A Conservatory of Measured Performance",
  description:
    "Wintergarden measures live musical performance with scientific precision. A classical instrument, rendered in code.",
  metadataBase: new URL("https://wintergarden.app"),
  openGraph: {
    title: "Wintergarden",
    description: "Where musicians are measured.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070503",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-ink text-paper font-sans antialiased">
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
