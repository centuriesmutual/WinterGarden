import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Cormorant_Garamond, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WINTERGARDEN — Performance Intelligence System",
  description:
    "Wintergarden measures live musical performance with scientific precision. Score, compete, earn.",
  metadataBase: new URL("https://wintergarden.app"),
  openGraph: {
    title: "WINTERGARDEN",
    description: "Where musicians are measured.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${cormorant.variable} ${dmMono.variable}`}
    >
      <body className="bg-black text-white font-mono antialiased">
        <GrainOverlay />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
