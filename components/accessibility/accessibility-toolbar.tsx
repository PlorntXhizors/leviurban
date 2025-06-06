"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accessibility, Plus, Minus, Eye, EyeOff } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function AccessibilityToolbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    if (!highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }

  const resetAccessibility = () => {
    setFontSize(100)
    setHighContrast(false)
    document.documentElement.style.fontSize = "100%"
    document.documentElement.classList.remove("high-contrast")
  }

  return (
    <>
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        .high-contrast img {
          filter: contrast(120%);
        }
      `}</style>

      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
        <div
          className={`bg-white shadow-lg rounded-l-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute -left-12 top-0 bg-primary hover:bg-primary/90 text-white p-3 rounded-l-lg"
            aria-label={isOpen ? t("accessibility.closeToolbar") : t("accessibility.openToolbar")}
          >
            <Accessibility size={20} />
          </Button>

          {isOpen && (
            <div className="p-4 space-y-3 w-48">
              <h3 className="font-bold text-sm mb-3">{t("accessibility.toolbar")}</h3>

              <div className="space-y-2">
                <label className="text-xs font-medium">{t("accessibility.fontSize")}</label>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={decreaseFontSize}
                    disabled={fontSize <= 80}
                    aria-label={t("accessibility.decreaseFont")}
                  >
                    <Minus size={14} />
                  </Button>
                  <span className="text-xs flex items-center px-2">{fontSize}%</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={increaseFontSize}
                    disabled={fontSize >= 150}
                    aria-label={t("accessibility.increaseFont")}
                  >
                    <Plus size={14} />
                  </Button>
                </div>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={toggleHighContrast}
                className="w-full flex items-center gap-2"
                aria-pressed={highContrast}
              >
                {highContrast ? <EyeOff size={14} /> : <Eye size={14} />}
                {t("accessibility.contrast")}
              </Button>

              <Button size="sm" onClick={resetAccessibility} className="w-full">
                {t("accessibility.reset")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
