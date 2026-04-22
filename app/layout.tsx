import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  EB_Garamond,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
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
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${garamond.variable}`}
    >
      <body className="bg-ink text-paper font-body antialiased">
        <GrainOverlay />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
