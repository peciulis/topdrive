import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter for body and Outfit for display/headings
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TopDrive.lv - Excellence In Motion.",
  description: "Professional long-term car rental and car sales. Experience the road without worries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#020202] text-white selection:bg-[#ff3c00] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
