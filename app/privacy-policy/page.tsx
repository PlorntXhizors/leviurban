import { Suspense } from "react"
import PrivacyPolicyPage from "@/components/privacy-policy-page"

export const metadata = {
  title: "מדיניות החברה | Levi Urban",
  description: "תנאי שימוש ומדיניות התנהלות כללית של Levi Urban",
}

export default function PrivacyPolicy() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrivacyPolicyPage />
    </Suspense>
  )
}
