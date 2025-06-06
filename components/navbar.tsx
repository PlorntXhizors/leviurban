"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useTranslation } from "@/hooks/use-translation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      id="navigation"
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-heebo ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-lg py-1"
          : "bg-gradient-to-b from-black/50 to-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative flex items-center" aria-label="Levi Urban Home - דף הבית">
          <div className="relative h-16 w-48 md:h-20 md:w-72">
            {!logoLoaded && <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-md"></div>}
            <Image
              src="/levi-urban-home-logo-new.png"
              alt="Levi Urban Home - Authentic Haifa Nights"
              fill
              className={`object-contain drop-shadow-md transition-opacity duration-300 ${logoLoaded ? "opacity-100" : "opacity-0"}`}
              priority
              onLoad={() => setLogoLoaded(true)}
              onError={(e) => {
                console.error("Failed to load logo", e)
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-3 rtl:space-x-reverse"
          role="navigation"
          aria-label="ניווט ראשי"
        >
          {[
            { href: "#about", label: t("nav.about") },
            { href: "#apartments", label: t("nav.apartments") },
            { href: "#location", label: t("nav.location") },
            { href: "#extras", label: t("nav.wineBar") },
            { href: "#reviews", label: t("nav.reviews") },
            { href: "#contact", label: t("nav.contact") },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 font-medium hover:bg-primary/80 hover:text-white hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-primary ${
                isScrolled ? "text-gray-800 hover:text-white" : "text-white drop-shadow-sm"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="px-2">
            <LanguageToggle />
          </div>

          <div className="flex space-x-3 rtl:space-x-reverse ml-2">
            <Button
              asChild
              size="sm"
              variant="outline"
              className={`rounded-full border-2 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform text-xs py-1 focus:outline-none focus:ring-2 focus:ring-primary ${
                isScrolled
                  ? "border-primary bg-transparent text-gray-800 hover:bg-primary hover:text-white"
                  : "border-primary bg-transparent text-white hover:bg-primary/90 hover:text-white"
              }`}
            >
              <Link href="https://airbnb.com/h/levi-urban" aria-label={`${t("nav.bookApt1")} - דירה ימין`}>
                {t("nav.bookApt1")}
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform text-xs py-1 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Link href="https://airbnb.com/h/levi-urban2" aria-label={`${t("nav.bookApt2")} - דירה שמאל`}>
                {t("nav.bookApt2")}
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-gradient-to-b from-primary/95 to-primary/85 backdrop-blur-md shadow-lg absolute top-full left-0 right-0"
          role="navigation"
          aria-label="ניווט נייד"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {[
              { href: "#about", label: t("nav.about") },
              { href: "#apartments", label: t("nav.apartments") },
              { href: "#location", label: t("nav.location") },
              { href: "#extras", label: t("nav.wineBar") },
              { href: "#reviews", label: t("nav.reviews") },
              { href: "#contact", label: t("nav.contact") },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 py-3 text-white hover:bg-white/20 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center px-4 py-2">
              <LanguageToggle />
            </div>

            <div className="flex flex-col space-y-2 p-2">
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-white bg-transparent text-white hover:bg-white/20 font-medium focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Link
                  href="https://airbnb.com/h/levi-urban"
                  onClick={() => setIsOpen(false)}
                  aria-label={`${t("nav.bookApt1")} - דירה ימין`}
                >
                  {t("nav.bookApt1")}
                </Link>
              </Button>
              <Button
                asChild
                className="w-full bg-white text-primary hover:bg-white/90 font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Link
                  href="https://airbnb.com/h/levi-urban2"
                  onClick={() => setIsOpen(false)}
                  aria-label={`${t("nav.bookApt2")} - דירה שמאל`}
                >
                  {t("nav.bookApt2")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
