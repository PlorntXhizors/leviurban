"use client"

import Head from "next/head"
import { usePathname } from "next/navigation"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  ogUrl?: string
  twitterCard?: "summary" | "summary_large_image" | "app" | "player"
  twitterSite?: string
  twitterCreator?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  robots?: string
  favicon?: string
  appleTouchIcon?: string
  themeColor?: string
  jsonLd?: object
  noindex?: boolean
  nofollow?: boolean
}

const defaultSEO = {
  title: "Levi Urban | אירוח אורבני מדויק בלב חיפה",
  description:
    "דירות מעוצבות. מיקום נוח. חוויית אירוח בגובה העיניים. Designed apartments in the heart of Haifa with boutique urban hospitality experience.",
  keywords:
    "Haifa accommodation, urban hospitality, boutique apartments, Hadar neighborhood, wine bar, vacation rental, אירוח חיפה, דירות נופש",
  ogType: "website",
  twitterCard: "summary_large_image" as const,
  robots: "index, follow",
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
  themeColor: "#ff6b35",
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = defaultSEO.ogType,
  ogUrl,
  twitterCard = defaultSEO.twitterCard,
  twitterSite,
  twitterCreator,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = defaultSEO.robots,
  favicon = defaultSEO.favicon,
  appleTouchIcon = defaultSEO.appleTouchIcon,
  themeColor = defaultSEO.themeColor,
  jsonLd,
  noindex = false,
  nofollow = false,
}: SEOProps) {
  const pathname = usePathname()

  // Construct full URL for current page
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leviurban.com"
  const currentUrl = `${baseUrl}${pathname || ""}`

  // Use provided values or fall back to defaults
  const seoTitle = title || defaultSEO.title
  const seoDescription = description || defaultSEO.description
  const seoKeywords = keywords || defaultSEO.keywords
  const seoCanonical = canonical || currentUrl

  // Open Graph values with fallbacks
  const seoOgTitle = ogTitle || seoTitle
  const seoOgDescription = ogDescription || seoDescription
  const seoOgImage = ogImage || `${baseUrl}/og-image.jpg`
  const seoOgUrl = ogUrl || currentUrl

  // Twitter values with fallbacks
  const seoTwitterTitle = twitterTitle || seoOgTitle
  const seoTwitterDescription = twitterDescription || seoOgDescription
  const seoTwitterImage = twitterImage || seoOgImage

  // Handle robots meta tag
  let robotsContent = robots
  if (noindex || nofollow) {
    const robotsArray = []
    if (noindex) robotsArray.push("noindex")
    else robotsArray.push("index")

    if (nofollow) robotsArray.push("nofollow")
    else robotsArray.push("follow")

    robotsContent = robotsArray.join(", ")
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Hebrew" />
      <meta name="author" content="Levi Urban" />

      {/* Canonical URL */}
      <link rel="canonical" href={seoCanonical} />

      {/* Favicon and Icons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <meta name="theme-color" content={themeColor} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={seoOgTitle} />
      <meta property="og:description" content={seoOgDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:url" content={seoOgUrl} />
      <meta property="og:site_name" content="Levi Urban" />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={seoTwitterTitle} />
      <meta name="twitter:description" content={seoTwitterDescription} />
      <meta name="twitter:image" content={seoTwitterImage} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}

      {/* Additional Meta Tags for Better SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* JSON-LD Structured Data */}
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </Head>
  )
}
