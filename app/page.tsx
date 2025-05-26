import { Suspense } from "react"
import HomePage from "@/components/home-page"

export const metadata = {
  title: "Levi Urban | אירוח אורבני מדויק בלב חיפה",
  description:
    "דירות מעוצבות במיקום מרכזי בחיפה עם בר יין ייחודי. חוויית אירוח בוטיק בשכונת הדר. Boutique apartments in central Haifa with unique wine bar.",
  keywords:
    "Haifa accommodation, boutique apartments, wine bar, Hadar neighborhood, vacation rental, אירוח חיפה, דירות נופש, בר יין",
  openGraph: {
    title: "Levi Urban | אירוח אורבני מדויק בלב חיפה",
    description: "דירות מעוצבות במיקום מרכזי בחיפה עם בר יין ייחודי. חוויית אירוח בוטיק בשכונת הדר.",
    url: "https://leviurban.com",
    siteName: "Levi Urban",
    images: [
      {
        url: "https://leviurban.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Levi Urban - Boutique Urban Hospitality in Haifa",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Urban | אירוח אורבני מדויק בלב חיפה",
    description: "דירות מעוצבות במיקום מרכזי בחיפה עם בר יין ייחודי. חוויית אירוח בוטיק בשכונת הדר.",
    images: ["https://leviurban.com/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  )
}
