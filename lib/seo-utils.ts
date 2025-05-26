// Utility functions for SEO

export function generatePageTitle(pageTitle: string, siteName = "Levi Urban"): string {
  return `${pageTitle} | ${siteName}`
}

export function truncateDescription(description: string, maxLength = 160): string {
  if (description.length <= maxLength) return description
  return description.substring(0, maxLength - 3) + "..."
}

export function generateBreadcrumbJsonLd(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

export function generateFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// Generate Open Graph image URL with dynamic text
export function generateOgImageUrl(title: string, subtitle?: string, baseUrl = "https://leviurban.com"): string {
  const params = new URLSearchParams({
    title: title,
    ...(subtitle && { subtitle }),
  })

  return `${baseUrl}/api/og?${params.toString()}`
}
