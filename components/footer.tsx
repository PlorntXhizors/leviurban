"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Levi Urban</h3>
            <p className="text-gray-600 mb-4">{t("hero.title")}</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("nav.about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-primary">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="#apartments" className="text-gray-600 hover:text-primary">
                  {t("nav.apartments")}
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-gray-600 hover:text-primary">
                  {t("nav.location")}
                </Link>
              </li>
              <li>
                <Link href="#extras" className="text-gray-600 hover:text-primary">
                  {t("nav.wineBar")}
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-gray-600 hover:text-primary">
                  {t("nav.reviews")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("nav.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin size={18} className="text-primary" />
                <span className="text-gray-600">{t("contact.address.value")}</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-600">{t("contact.phone.value")}</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail size={18} className="text-primary" />
                <span className="text-gray-600">{t("contact.email.value")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Levi Urban. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
