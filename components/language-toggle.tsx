"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300 font-medium
        ${
          language === "he"
            ? "bg-primary/20 text-white hover:bg-primary/40"
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
      onClick={toggleLanguage}
      aria-label={language === "he" ? "Switch to English" : "החלף לעברית"}
    >
      <Globe size={16} className="animate-pulse" />
      <span className="text-sm font-medium">{language === "he" ? "EN" : "עב"}</span>
    </Button>
  )
}
