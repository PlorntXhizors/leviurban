"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

export default function NotFoundPage() {
  const { t, language } = useTranslation()

  const notFoundText = {
    he: {
      title: "404 - דף לא נמצא",
      description: "הדף שחיפשת אינו קיים או שהוסר.",
      button: "חזרה לדף הבית",
    },
    en: {
      title: "404 - Page Not Found",
      description: "The page you were looking for doesn't exist or has been removed.",
      button: "Back to Home",
    },
  }

  const content = notFoundText[language as "he" | "en"]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-6">{content.title}</h1>
        <p className="text-xl mb-8">{content.description}</p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/">{content.button}</Link>
        </Button>
      </div>
    </div>
  )
}
