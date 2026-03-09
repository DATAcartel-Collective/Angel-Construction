import type { Metadata, Viewport } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Angel Construction & Roofing | Keeping You Under Our Wing",
  description:
    "Professional roofing and construction services. 500+ projects completed, 10+ years of experience. Family owned with A+ BBB Rating. Get your free estimate today.",
  keywords: [
    "roofing",
    "construction",
    "residential roofing",
    "commercial roofing",
    "custom remodeling",
    "roof repair",
    "roof installation",
  ],
  authors: [{ name: "Angel Construction & Roofing" }],
  openGraph: {
    title: "Angel Construction & Roofing",
    description: "Professional roofing and construction services. Keeping you under our wing.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
