"use client"

import { useTranslation } from "@/hooks/use-translation"

export function SkipLinks() {
  const { t } = useTranslation()

  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="absolute top-0 left-0 z-[9999] bg-primary text-white px-4 py-2 rounded-br-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        {t("accessibility.skipToMain")}
      </a>
      <a
        href="#navigation"
        className="absolute top-0 left-20 z-[9999] bg-primary text-white px-4 py-2 rounded-br-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        {t("accessibility.skipToNav")}
      </a>
    </div>
  )
}
