"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, MapPin, Wine, Wifi, Snowflake, Utensils, Palette, Coffee, Phone, Mail } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function HomePage() {
  const { t } = useTranslation()
  const [imagesLoaded, setImagesLoaded] = useState({
    hero: false,
    apt1: false,
    apt2: false,
    location: false,
    wineBar: false,
    map: false,
  })

  const [currentImageIndex, setCurrentImageIndex] = useState({
    apt1: 0,
    apt2: 0,
    wineBar: 0,
  })

  const apartmentImages = {
    apt1: [
      "/levi-urban-1-living.jpg",
      "/levi-urban-1-bedroom.jpg",
      "/levi-urban-1-kitchen.jpg",
      "/levi-urban-1-bathroom.jpg",
      "/levi-urban-1-bar.jpg",
      "/levi-urban-1-kitchen2.jpg",
      "/levi-urban-1-entrance.jpg",
      "/levi-urban-1-bathroom2.jpg",
      "/levi-urban-1-terrace.jpg",
      "/levi-urban-1-patio.jpg",
    ],
    apt2: [
      "/levi-urban-2-kitchen.jpg",
      "/levi-urban-2-bathroom.jpg",
      "/levi-urban-2-kitchen2.jpg",
      "/levi-urban-2-bedroom.jpg",
      "/levi-urban-2-living.jpg",
      "/levi-urban-2-entrance.jpg",
      "/levi-urban-2-patio.jpg",
      "/levi-urban-2-terrace.jpg",
    ],
  }

  const wineBarImages = [
    {
      src: "/wine-bar-courtyard.jpeg",
      alt: "חצר בר היין בערב עם תאורה חמה, כיסאות עץ וכוסות יין על השולחן",
    },
    {
      src: "/wine-bottles-collection.jpeg",
      alt: "אוסף בקבוקי יין מגוונים עם צמחי תבלין ירוקים",
    },
    {
      src: "/wine-glasses-setup.jpeg",
      alt: "כוסות יין תלויות ומדף יינות מקצועי בבר",
    },
    {
      src: "/wine-cheese-pairing.jpeg",
      alt: "בקבוק יין פיקפול דה פינה עם גבינות על קרש עץ",
    },
  ]

  const nextImage = (apartment) => {
    if (apartment === "wineBar") {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [apartment]: (prev[apartment] + 1) % wineBarImages.length,
      }))
    } else {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [apartment]: (prev[apartment] + 1) % apartmentImages[apartment].length,
      }))
    }
  }

  const prevImage = (apartment) => {
    if (apartment === "wineBar") {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [apartment]: prev[apartment] === 0 ? wineBarImages.length - 1 : prev[apartment] - 1,
      }))
    } else {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [apartment]: prev[apartment] === 0 ? apartmentImages[apartment].length - 1 : prev[apartment] - 1,
      }))
    }
  }

  const handleImageLoad = (imageName) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [imageName]: true,
    }))
  }

  const handleImageError = (e, imageName) => {
    console.error(`Failed to load image: ${imageName}`, e)
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center" role="banner" aria-labelledby="hero-title">
        <div className="absolute inset-0 z-0">
          {!imagesLoaded.hero && <div className="absolute inset-0 bg-gray-300 animate-pulse" aria-hidden="true"></div>}
          <Image
            src="/bahai-gardens-haifa.jpg"
            alt="הגנים הבהאיים בחיפה - נוף מרהיב של הגנים המדורגים עם הכיפה הזהובה"
            fill
            priority
            className={`object-cover transition-opacity duration-300 ${imagesLoaded.hero ? "opacity-100" : "opacity-0"}`}
            onLoad={() => handleImageLoad("hero")}
            onError={(e) => handleImageError(e, "hero")}
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-white" aria-labelledby="about-title">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="about-title" className="section-title">
              {t("about.title")}
            </h2>
            <div className="prose max-w-none text-lg leading-relaxed">
              <p className="mb-4">{t("about.paragraph1")}</p>
              <p className="mb-4">{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section id="apartments" className="section-padding bg-gray-50" aria-labelledby="apartments-title">
        <div className="container mx-auto container-padding">
          <h2 id="apartments-title" className="section-title text-center">
            {t("apartments.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Apartment 1 */}
            <article className="bg-white rounded-xl overflow-hidden card-shadow" aria-labelledby="apt1-title">
              <div className="relative h-64 group" role="img" aria-label={t("accessibility.imageCarousel")}>
                {!imagesLoaded.apt1 && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" aria-hidden="true"></div>
                )}
                <Image
                  src={apartmentImages.apt1[currentImageIndex.apt1] || "/placeholder.svg"}
                  alt={`דירה ימין - תמונה ${currentImageIndex.apt1 + 1} מתוך ${apartmentImages.apt1.length}`}
                  fill
                  className={`object-cover transition-opacity duration-300 ${imagesLoaded.apt1 ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => handleImageLoad("apt1")}
                  onError={(e) => handleImageError(e, "apt1")}
                />

                {/* Navigation buttons */}
                <button
                  onClick={() => prevImage("apt1")}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={t("accessibility.previousImage")}
                >
                  ←
                </button>
                <button
                  onClick={() => nextImage("apt1")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={t("accessibility.nextImage")}
                >
                  →
                </button>

                {/* Image indicators */}
                <div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2"
                  role="tablist"
                  aria-label={t("accessibility.imageIndicator")}
                >
                  {apartmentImages.apt1.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex((prev) => ({ ...prev, apt1: index }))}
                      className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-white ${
                        index === currentImageIndex.apt1 ? "bg-white" : "bg-white/50"
                      }`}
                      role="tab"
                      aria-selected={index === currentImageIndex.apt1}
                      aria-label={`תמונה ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 id="apt1-title" className="text-2xl font-bold mb-2">
                  דירה ימין
                </h3>
                <p className="text-gray-700 mb-4">{t("apartments.apt1.description")}</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6" role="list">
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.beds")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Wifi size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.wifi")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Snowflake size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.ac")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Utensils size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.kitchen")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.design")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Coffee size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.workspace")}</span>
                  </li>
                </ul>
                <Button asChild className="w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <Link href="https://airbnb.com/h/levi-urban" aria-label={`${t("apartments.bookNow")} - דירה ימין`}>
                    {t("apartments.bookNow")}
                  </Link>
                </Button>
              </div>
            </article>

            {/* Apartment 2 */}
            <article className="bg-white rounded-xl overflow-hidden card-shadow" aria-labelledby="apt2-title">
              <div className="relative h-64 group" role="img" aria-label={t("accessibility.imageCarousel")}>
                {!imagesLoaded.apt2 && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" aria-hidden="true"></div>
                )}
                <Image
                  src={apartmentImages.apt2[currentImageIndex.apt2] || "/placeholder.svg"}
                  alt={`דירה שמאל - תמונה ${currentImageIndex.apt2 + 1} מתוך ${apartmentImages.apt2.length}`}
                  fill
                  className={`object-cover transition-opacity duration-300 ${imagesLoaded.apt2 ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => handleImageLoad("apt2")}
                  onError={(e) => handleImageError(e, "apt2")}
                />

                {/* Navigation buttons */}
                <button
                  onClick={() => prevImage("apt2")}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={t("accessibility.previousImage")}
                >
                  ←
                </button>
                <button
                  onClick={() => nextImage("apt2")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={t("accessibility.nextImage")}
                >
                  →
                </button>

                {/* Image indicators */}
                <div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2"
                  role="tablist"
                  aria-label={t("accessibility.imageIndicator")}
                >
                  {apartmentImages.apt2.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex((prev) => ({ ...prev, apt2: index }))}
                      className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-white ${
                        index === currentImageIndex.apt2 ? "bg-white" : "bg-white/50"
                      }`}
                      role="tab"
                      aria-selected={index === currentImageIndex.apt2}
                      aria-label={`תמונה ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 id="apt2-title" className="text-2xl font-bold mb-2">
                  דירה שמאל
                </h3>
                <p className="text-gray-700 mb-4">{t("apartments.apt2.description")}</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6" role="list">
                  <li className="flex items-center gap-2">
                    <Check size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.beds")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Wifi size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.wifi")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Snowflake size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.ac")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Utensils size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.kitchen")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.design")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Coffee size={18} className="text-primary" aria-hidden="true" />
                    <span>{t("apartments.amenities.workspace")}</span>
                  </li>
                </ul>
                <Button asChild className="w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <Link href="https://airbnb.com/h/levi-urban2" aria-label={`${t("apartments.bookNow")} - דירה שמאל`}>
                    {t("apartments.bookNow")}
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section-padding bg-white" aria-labelledby="location-title">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 id="location-title" className="section-title">
                {t("location.title")}
              </h2>
              <p className="text-lg mb-6">{t("location.description")}</p>
              <ul className="space-y-4" role="list">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary" aria-hidden="true">
                    🟢
                  </div>
                  <span>{t("location.feature1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary" aria-hidden="true">
                    🟢
                  </div>
                  <span>{t("location.feature2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary" aria-hidden="true">
                    🟢
                  </div>
                  <span>{t("location.feature3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary" aria-hidden="true">
                    🟢
                  </div>
                  <span>{t("location.feature4")}</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 md:h-full min-h-[400px] rounded-xl overflow-hidden card-shadow">
              {!imagesLoaded.location && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse" aria-hidden="true"></div>
              )}
              <Image
                src="/haifa-hadar-street-new.jpeg"
                alt="רחוב בשכונת הדר בחיפה עם תחנת אוטובוס ושלט הגבלת מהירות - מיקום Levi Urban"
                fill
                className={`object-cover transition-opacity duration-300 ${imagesLoaded.location ? "opacity-100" : "opacity-0"}`}
                onLoad={() => handleImageLoad("location")}
                onError={(e) => handleImageError(e, "location")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wine & Extras Section */}
      <section id="extras" className="section-padding bg-gray-50" aria-labelledby="extras-title">
        <div className="container mx-auto container-padding">
          <h2 id="extras-title" className="section-title text-center">
            {t("wineBar.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1 relative h-80 md:h-full min-h-[400px] rounded-xl overflow-hidden card-shadow">
              <div
                className="relative h-full group"
                role="img"
                aria-label={`${t("accessibility.imageCarousel")} - בר היין`}
              >
                {!imagesLoaded.wineBar && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" aria-hidden="true"></div>
                )}
                <Image
                  src={wineBarImages[currentImageIndex.wineBar]?.src || "/placeholder.svg"}
                  alt={wineBarImages[currentImageIndex.wineBar]?.alt || "בר היין"}
                  fill
                  className={`object-cover transition-opacity duration-300 ${imagesLoaded.wineBar ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => handleImageLoad("wineBar")}
                  onError={(e) => handleImageError(e, "wineBar")}
                />

                {/* Navigation buttons */}
                <button
                  onClick={() => prevImage("wineBar")}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={t("accessibility.previousImage")}
                >
                  ←
                </button>
                <button
                  onClick={() => nextImage("wineBar")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={t("accessibility.nextImage")}
                >
                  →
                </button>

                {/* Image indicators */}
                <div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2"
                  role="tablist"
                  aria-label={t("accessibility.imageIndicator")}
                >
                  {wineBarImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex((prev) => ({ ...prev, wineBar: index }))}
                      className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-white ${
                        index === currentImageIndex.wineBar ? "bg-white" : "bg-white/50"
                      }`}
                      role="tab"
                      aria-selected={index === currentImageIndex.wineBar}
                      aria-label={`תמונה ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <ul className="space-y-6" role="list">
                <li className="flex gap-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Wine size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{t("wineBar.feature1.title")}</h3>
                    <p className="text-gray-600">{t("wineBar.feature1.description")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Wine size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{t("wineBar.feature2.title")}</h3>
                    <p className="text-gray-600">{t("wineBar.feature2.description")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{t("wineBar.feature3.title")}</h3>
                    <p className="text-gray-600">{t("wineBar.feature3.description")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Utensils size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{t("wineBar.feature4.title")}</h3>
                    <p className="text-gray-600">{t("wineBar.feature4.description")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding bg-white" aria-labelledby="reviews-title">
        <div className="container mx-auto container-padding">
          <h2 id="reviews-title" className="section-title text-center">
            {t("reviews.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <article className="bg-gray-50 p-6 rounded-xl card-shadow">
              <div className="text-primary text-4xl mb-4" aria-hidden="true">
                "
              </div>
              <blockquote className="text-gray-700 mb-6">{t("reviews.review1.text")}</blockquote>
              <cite className="font-semibold">{t("reviews.review1.author")}</cite>
            </article>

            {/* Review 2 */}
            <article className="bg-gray-50 p-6 rounded-xl card-shadow">
              <div className="text-primary text-4xl mb-4" aria-hidden="true">
                "
              </div>
              <blockquote className="text-gray-700 mb-6">{t("reviews.review2.text")}</blockquote>
              <cite className="font-semibold">{t("reviews.review2.author")}</cite>
            </article>

            {/* Review 3 */}
            <article className="bg-gray-50 p-6 rounded-xl card-shadow">
              <div className="text-primary text-4xl mb-4" aria-hidden="true">
                "
              </div>
              <blockquote className="text-gray-700 mb-6">{t("reviews.review3.text")}</blockquote>
              <cite className="font-semibold">{t("reviews.review3.author")}</cite>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50" aria-labelledby="contact-title">
        <div className="container mx-auto container-padding">
          <h2 id="contact-title" className="section-title text-center">
            {t("contact.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <ul className="space-y-6 mb-8" role="list">
                <li className="flex items-start gap-4">
                  <MapPin size={24} className="text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t("contact.address.title")}</h3>
                    <p className="text-gray-600">{t("contact.address.value")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={24} className="text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t("contact.phone.title")}</h3>
                    <p className="text-gray-600">
                      <a
                        href={`tel:${t("contact.phone.value")}`}
                        className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      >
                        {t("contact.phone.value")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={24} className="text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t("contact.email.title")}</h3>
                    <p className="text-gray-600">
                      <a
                        href={`mailto:${t("contact.email.value")}`}
                        className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      >
                        {t("contact.email.value")}
                      </a>
                    </p>
                  </div>
                </li>
              </ul>

              <div className="relative h-64 rounded-xl overflow-hidden card-shadow">
                {!imagesLoaded.map && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" aria-hidden="true"></div>
                )}
                <Image
                  src="/haifa-city-center-map.png"
                  alt="מפת מרכז העיר חיפה המציגה את מיקום Levi Urban"
                  fill
                  className={`object-cover transition-opacity duration-300 ${imagesLoaded.map ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => handleImageLoad("map")}
                  onError={(e) => handleImageError(e, "map")}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl card-shadow">
              <h3 className="text-xl font-semibold mb-6">{t("contact.form.title")}</h3>
              <form className="space-y-4" role="form" aria-label="טופס יצירת קשר">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.form.name")}{" "}
                      <span className="text-red-500" aria-label="שדה חובה">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.form.email")}{" "}
                      <span className="text-red-500" aria-label="שדה חובה">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.form.message")}{" "}
                    <span className="text-red-500" aria-label="שדה חובה">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full focus:outline-none focus:ring-2 focus:ring-primary">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Booking Buttons (Mobile Only) */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-3 md:hidden z-40"
        role="complementary"
        aria-label="כפתורי הזמנה קבועים"
      >
        <div className="flex gap-3">
          <Button asChild className="flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <Link href="https://airbnb.com/h/levi-urban" aria-label={`${t("nav.bookApt1")} - דירה ימין`}>
              {t("nav.bookApt1")}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Link href="https://airbnb.com/h/levi-urban2" aria-label={`${t("nav.bookApt2")} - דירה שמאל`}>
              {t("nav.bookApt2")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
