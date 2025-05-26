import SEO from "./seo"

// Predefined SEO templates for common page types
export function HomeSEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Levi Urban",
    description: "Boutique urban hospitality experience in Haifa",
    url: "https://leviurban.com",
    telephone: "+97254-9966-949",
    email: "info@leviurban.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Shmaryahu Levin St.",
      addressLocality: "Haifa",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.8191",
      longitude: "34.9983",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Wine Bar",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi",
        value: true,
      },
    ],
  }

  return (
    <SEO
      title="Levi Urban | אירוח אורבני מדויק בלב חיפה"
      description="דירות מעוצבות במיקום מרכזי בחיפה עם בר יין ייחודי. חוויית אירוח בוטיק בשכונת הדר. Boutique apartments in central Haifa with unique wine bar."
      keywords="Haifa accommodation, boutique apartments, wine bar, Hadar neighborhood, vacation rental, אירוח חיפה, דירות נופש, בר יין"
      ogImage="https://leviurban.com/og-home.jpg"
      jsonLd={jsonLd}
    />
  )
}

export function ApartmentSEO({ apartmentNumber }: { apartmentNumber: 1 | 2 }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    name: `Levi Urban ${apartmentNumber}`,
    description:
      apartmentNumber === 1
        ? "2-room apartment with living room, double bedroom, equipped kitchen, shower, dining and work area"
        : "Double studio apartment with kitchenette, shower and toilet",
    url: `https://leviurban.com/apartment-${apartmentNumber}`,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
    ],
  }

  return (
    <SEO
      title={`Levi Urban ${apartmentNumber} | ${apartmentNumber === 1 ? "דירת 2 חדרים" : "סטודיו זוגי"} בחיפה`}
      description={
        apartmentNumber === 1
          ? "דירת 2 חדרים מעוצבת עם סלון, חדר שינה זוגי, מטבח מאובזר ופינת עבודה בלב שכונת הדר, חיפה."
          : "דירת סטודיו זוגית מעוצבת עם מטבחון מאובזר ומקלחת בלב שכונת הדר, חיפה."
      }
      keywords={`Levi Urban ${apartmentNumber}, Haifa apartment, vacation rental, דירה בחיפה, אירוח נופש`}
      ogImage={`https://leviurban.com/og-apartment-${apartmentNumber}.jpg`}
      jsonLd={jsonLd}
    />
  )
}

export function ContactSEO() {
  return (
    <SEO
      title="צור קשר | Levi Urban Contact"
      description="צרו קשר עם Levi Urban לפרטים נוספים על הדירות והזמנות. טלפון: +97254-9966-949. Contact Levi Urban for apartment details and bookings."
      keywords="contact Levi Urban, Haifa accommodation contact, booking information, צור קשר לוי אורבן"
      ogImage="https://leviurban.com/og-contact.jpg"
    />
  )
}
