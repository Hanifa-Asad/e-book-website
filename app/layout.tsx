import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "@/lib/lordicon";
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Brand Design - Digital Agency",
  description:
    "Creative digital agency specializing in brand design, web development, and digital marketing solutions.",
  generator: "v0.app",
  icons:{
    icon: "/logo-09.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>
      <body className="font-sans antialiased bg-[var(--charcoal-gray)]">{children}</body>
    </html>
  )
}
