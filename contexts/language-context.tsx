"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "he" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("he")

  // Toggle between Hebrew and English
  const toggleLanguage = () => {
    setLanguage(language === "he" ? "en" : "he")
  }

  // Update document direction based on language
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.lang = language
    htmlElement.dir = language === "he" ? "rtl" : "ltr"

    // Add or remove RTL-specific classes
    if (language === "he") {
      htmlElement.classList.add("rtl")
      htmlElement.classList.remove("ltr")
    } else {
      htmlElement.classList.add("ltr")
      htmlElement.classList.remove("rtl")
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
