import type React from "react"
import type { Metadata } from "next"
import { Lato, Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lato",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "LANA WITH. - ハンドメイド グラノーラ専門店",
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
    <html lang="ja" className={`${lato.variable} ${notoSansJP.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
