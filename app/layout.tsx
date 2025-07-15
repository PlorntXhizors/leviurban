import type React from "react"
import type { Metadata } from "next"
import { Heebo } from "next/font/google"
import "./globals.css"
import "./language-utils.css"
import { LanguageProvider } from "@/contexts/language-context"
import ClientLayout from "@/components/client-layout"

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
  weight: ["300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "Levi Urban | אירוח אורבני מדויק בלב חיפה",
  description: "דירות מעוצבות. מיקום נוח. חוויית אירוח בגובה העיניים.",
  keywords: "אירוח, חיפה, דירות נופש, Airbnb, הדר, בר יין",
  authors: [{ name: "Levi Urban" }],
  openGraph: {
    title: "Levi Urban | אירוח אורבני מדויק בלב חיפה",
    description: "דירות מעוצבות. מיקום נוח. חוויית אירוח בגובה העיניים.",
    type: "website",
    locale: "he_IL",
    alternateLocale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={heebo.className}>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}
