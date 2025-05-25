"use client"

import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import type { TranslationKey } from "@/lib/translations"

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: TranslationKey) => {
    return getTranslation(key, language)
  }

  return { t, language }
}
