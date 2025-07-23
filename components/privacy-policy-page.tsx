"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <ArrowRight size={20} className="rtl:rotate-180" />
              חזרה לדף הבית
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">מדיניות החברה</h1>
            <p className="text-xl mt-4 text-white/90">תנאי שימוש ומדיניות התנהלות כללית</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                ברוך הבא לאתר הדירות שלנו. אנו מציעים חווית אירוח ייחודית, נוחה ובטוחה דרך פלטפורמת Airbnb. להלן תנאי
                השימוש ומדיניות ההתנהלות הכללית:
              </p>
            </div>

            {/* Bookings Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2">הזמנות</h2>
              <p className="text-gray-700 leading-relaxed">
                כל ההזמנות מתבצעות דרך פלטפורמת Airbnb בלבד, בהתאם לתנאים וההגבלות של הפלטפורמה.
              </p>
            </section>

            {/* Check-in/Check-out Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2">
                שעות צ'ק אין וצ'ק אאוט
              </h2>
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">צ'ק אין:</span>
                    <span className="text-gray-700">החל מהשעה 15:00</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">צ'ק אאוט:</span>
                    <span className="text-gray-700">עד השעה 11:00</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic">
                (יתכנו שינויים לפי דירה, יש להתעדכן בעמוד הדירה הרלוונטית ב-Airbnb)
              </p>
            </section>

            {/* Property Usage Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2">שימוש בנכס</h2>
              <p className="text-gray-700 leading-relaxed">
                הדירה מיועדת לאירוח בלבד. חל איסור לקיים מסיבות, אירועים או כל פעילות שגורמת לרעש או הפרעה לשכנים.
              </p>
            </section>

            {/* Guest Responsibility Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2">אחריות האורח</h2>
              <p className="text-gray-700 leading-relaxed">
                האורח אחראי לשמירה על ניקיון הנכס, על שלמות הריהוט, הציוד והמתקנים בדירה. כל נזק שייגרם במהלך השהות עשוי
                לחייב את האורח בתשלום פיצוי.
              </p>
            </section>

            {/* Smoking and Pets Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2">עישון וחיות מחמד</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>אין לעשן בתוך הדירה (אלא אם צוין אחרת).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>הכנסת חיות מחמד תותר רק באישור מראש.</span>
                </li>
              </ul>
            </section>

            {/* Privacy and Security Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2">
                פרטיות ואבטחת מידע
              </h2>
              <p className="text-gray-700 leading-relaxed">
                איננו אוספים או שומרים מידע אישי מעבר למה שנחוץ לצורך תקשורת ושירות. הזמנות ותשלומים נעשים דרך Airbnb
                בהתאם למדיניות הפרטיות שלהם.
              </p>
            </section>

            {/* Cancellation Policy Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2">
                מדיניות ביטולים והחזר כספי
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                מדיניות הביטולים מבוססת על מה שנקבע עבור כל נכס בנפרד בפלטפורמת Airbnb, אך ככלל:
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">ביטול עד 5 ימים לפני מועד ההגעה</h3>
                  <p className="text-green-700">החזר מלא (למעט עמלות Airbnb), בהתאם למדיניות שנקבעה לכל דירה.</p>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">ביטול פחות מ-5 ימים לפני מועד ההגעה</h3>
                  <p className="text-red-700">לא יינתן החזר כספי, אלא אם כן צוין אחרת בעמוד ההזמנה.</p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">במקרים חריגים</h3>
                  <p className="text-yellow-700">
                    בקשות החזר חריגות עקב נסיבות בלתי צפויות (כגון מצב חירום רפואי או ביטול טיסות) ייבחנו באופן פרטני
                    בהתאם למדיניות Airbnb ולשיקול דעתנו.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mb-12 bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">יש לכם שאלות?</h2>
              <p className="text-gray-700 mb-6">לכל שאלה או בירור נוסף, אנא צרו איתנו קשר:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <Link href="/#contact">צור קשר</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href="/">חזרה לדף הבית</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
