"use client"

import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { SkipLinks } from "@/components/accessibility/skip-links"
import { AccessibilityToolbar } from "@/components/accessibility/accessibility-toolbar"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLinks />
      <Navbar />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
      <AccessibilityToolbar />
    </>
  )
}
