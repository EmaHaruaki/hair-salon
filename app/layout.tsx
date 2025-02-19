import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ILOLI HAIR | Natural Beauty Salon",
  description: "落ち着いた雰囲気の美容室。ナチュラルでシンプルなデザインで、あなたらしい美しさを引き出します。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'