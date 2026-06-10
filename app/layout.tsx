import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Noto_Serif_JP } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-jp",
})

export const metadata: Metadata = {
  title: "Lana with. - ハンドメイド グラノーラ専門店",
  description:
    "GRANOLA SPECIALITY STORE since 2021 mao and yuna - 自然で温かみのあるデザインと、手作りグラノーラの魅力を伝える",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${playfair.variable} ${notoSerifJP.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
