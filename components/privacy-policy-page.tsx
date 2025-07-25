"use client"

import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Clock,
  Home,
  Users,
  Ban,
  Heart,
  Lock,
  RefreshCw,
  Phone,
  CheckCircle,
  AlertTriangle,
  Info,
  Calendar,
  CreditCard,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Camera,
  Volume2,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-all duration-300 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-white rounded-lg px-3 py-2"
            >
              <ArrowRight size={20} className="rtl:rotate-180" />
              <span className="font-medium">חזרה לדף הבית</span>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Shield size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">מדיניות החברה</h1>
                <p className="text-xl mt-2 text-white/90">תנאי שימוש ומדיניות התנהלות מקיפה</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
              <p className="text-lg leading-relaxed">
                ב-Levi Urban אנו מחויבים לספק לכם חוויית אירוח מעולה, בטוחה ונעימה. המדיניות שלהלן נועדות להבטיח את
                רווחתכם ואת שמירה על איכות השירות הגבוהה שלנו.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Quick Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Info className="text-primary" size={24} />
                תוכן עניינים
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { href: "#bookings", title: "הזמנות ותשלומים", icon: CreditCard },
                  { href: "#checkin", title: "צ'ק אין וצ'ק אאוט", icon: Clock },
                  { href: "#usage", title: "שימוש בנכס", icon: Home },
                  { href: "#responsibility", title: "אחריות האורח", icon: Users },
                  { href: "#rules", title: "כללי התנהגות", icon: Ban },
                  { href: "#privacy", title: "פרטיות ואבטחה", icon: Lock },
                  { href: "#cancellation", title: "מדיניות ביטולים", icon: RefreshCw },
                  { href: "#amenities", title: "שירותים ומתקנים", icon: Wifi },
                  { href: "#contact", title: "יצירת קשר", icon: Phone },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <item.icon size={18} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ברוכים הבאים ל-Levi Urban</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    אנו מציעים חווית אירוח ייחודית, נוחה ובטוחה בלב שכונת הדר המתחדשת בחיפה. הדירות שלנו מעוצבות בקפידה
                    ומצוידות בכל הנוחויות הדרושות לשהות מושלמת.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    כל ההזמנות מתבצעות דרך פלטפורמת Airbnb המובילה, המבטיחה לכם אבטחה, שקיפות ושירות מקצועי. להלן תנאי
                    השימוש והמדיניות המפורטת שלנו:
                  </p>
                </div>
              </div>
            </div>

            {/* Bookings Section */}
            <section id="bookings" className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <CreditCard className="text-green-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">הזמנות ותשלומים</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border-r-4 border-green-400">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">פלטפורמת ההזמנות</h3>
                    <p className="text-green-700 leading-relaxed">
                      כל ההזמנות מתבצעות אך ורק דרך פלטפורמת Airbnb. זה מבטיח לכם:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-green-700">אבטחת תשלומים מלאה</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-green-700">שירות לקוחות 24/7</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-green-700">ביטוח מארח מקיף</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-green-700">מערכת ביקורות שקופה</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">אמצעי תשלום מקובלים</h3>
                    <p className="text-blue-700 mb-4">
                      Airbnb מקבלת מגוון רחב של אמצעי תשלום כולל כרטיסי אשראי, PayPal ועוד.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <p className="text-sm text-blue-800 font-medium">
                        💡 טיפ: הזמינו מראש לקבלת המחירים הטובים ביותר!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Check-in/Check-out Section */}
            <section id="checkin" className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">שעות צ'ק אין וצ'ק אאוט</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Calendar className="text-green-600" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800">צ'ק אין</h3>
                    </div>
                    <p className="text-2xl font-bold text-green-700 mb-2">15:00 - 19:00</p>
                    <p className="text-green-600 text-sm">הגעה מאוחרת יותר תתואם מראש</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Calendar className="text-orange-600" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-orange-800">צ'ק אאוט</h3>
                    </div>
                    <p className="text-2xl font-bold text-orange-700 mb-2">עד 11:00</p>
                    <p className="text-orange-600 text-sm">יציאה מאוחרת בתיאום ובתשלום נוסף</p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 border-r-4 border-yellow-400">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-2">הערות חשובות</h3>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• יתכנו שינויים לפי דירה - יש להתעדכן בעמוד הדירה ב-Airbnb</li>
                        <li>• הגעה מוקדמת או יציאה מאוחרת בתיאום מראש בלבד</li>
                        <li>• נשמח לסייע עם אחסון מזוודות במידת הצורך</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Property Usage Section */}
            <section id="usage" className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Home className="text-purple-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">שימוש בנכס</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">ייעוד הדירה</h3>
                    <p className="text-purple-700 leading-relaxed mb-4">
                      הדירות מיועדות לאירוח תיירותי ועסקי בלבד. אנו שומרים על אווירה שקטה ונעימה לכל האורחים.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 mb-2">מותר:</h4>
                        <ul className="space-y-1 text-sm text-purple-700">
                          <li>• אירוח משפחתי ועסקי</li>
                          <li>• בישול ואכילה</li>
                          <li>• עבודה מהבית</li>
                          <li>• מנוחה והרגעה</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <h4 className="font-semibold text-red-800 mb-2">אסור:</h4>
                        <ul className="space-y-1 text-sm text-red-700">
                          <li>• מסיבות ואירועים</li>
                          <li>• רעש מופרז</li>
                          <li>• הפרעה לשכנים</li>
                          <li>• פעילות מסחרית</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Guest Responsibility Section */}
            <section id="responsibility" className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-100 rounded-xl">
                    <Users className="text-indigo-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">אחריות האורח</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-indigo-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-4">שמירה על הנכס</h3>
                    <p className="text-indigo-700 leading-relaxed mb-4">
                      האורח אחראי לשמירה על ניקיון הנכס ועל שלמות כל הציוד והמתקנים. אנו מבקשים להתייחס לדירה כאל הבית
                      שלכם.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-3">
                          <CheckCircle className="text-green-600" size={24} />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">ניקיון</h4>
                        <p className="text-sm text-gray-600">שמירה על ניקיון בסיסי במהלך השהות</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-3">
                          <Shield className="text-blue-600" size={24} />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">זהירות</h4>
                        <p className="text-sm text-gray-600">שימוש זהיר בציוד ובמתקנים</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-3">
                          <Heart className="text-purple-600" size={24} />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">כבוד</h4>
                        <p className="text-sm text-gray-600">יחס מכבד למקום ולשכנים</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border-r-4 border-red-400">
                    <h3 className="text-xl font-semibold text-red-800 mb-3">נזקים ופיצויים</h3>
                    <p className="text-red-700 leading-relaxed">
                      במקרה של נזק לנכס, הציוד או הריהוט, האורח יחויב בתשלום עלות התיקון או ההחלפה. נזקים קלים יטופלו
                      בהבנה, אך נזקים משמעותיים עלולים לחייב פיצוי מלא.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rules Section */}
            <section id="rules" className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <Ban className="text-red-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">כללי התנהגות</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Ban className="text-red-600" size={20} />
                        <h3 className="text-xl font-semibold text-red-800">עישון</h3>
                      </div>
                      <p className="text-red-700 mb-3">עישון אסור לחלוטין בתוך הדירה. ניתן לעשן במרפסת או בחצר בלבד.</p>
                      <div className="bg-red-100 rounded-lg p-3">
                        <p className="text-sm text-red-800 font-medium">⚠️ עישון בדירה יגרור קנס של 500 ש"ח</p>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="text-orange-600" size={20} />
                        <h3 className="text-xl font-semibold text-orange-800">חיות מחמד</h3>
                      </div>
                      <p className="text-orange-700 mb-3">הכנסת חיות מחמד מותרת רק באישור מראש ובתשלום נוסף.</p>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• יש לדווח מראש על הבאת חיות</li>
                        <li>• תשלום נוסף של 50 ש"ח ללילה</li>
                        <li>• האורח אחראי לניקיון נוסף</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Volume2 className="text-blue-600" size={20} />
                        <h3 className="text-xl font-semibold text-blue-800">רעש ושקט</h3>
                      </div>
                      <p className="text-blue-700 mb-3">שעות השקט: 22:00-08:00. אנא שמרו על רמת רעש נמוכה.</p>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• כבדו את השכנים</li>
                        <li>• הימנעו ממוזיקה חזקה</li>
                        <li>• שיחות טלפון בשקט</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Camera className="text-purple-600" size={20} />
                        <h3 className="text-xl font-semibold text-purple-800">צילום ופרטיות</h3>
                      </div>
                      <p className="text-purple-700 mb-3">אנא כבדו את פרטיות השכנים ואל תצלמו לכיוון דירות אחרות.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Amenities Section */}
            <section id="amenities" className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Wifi className="text-green-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">שירותים ומתקנים</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Wifi, title: "אינטרנט אלחוטי", desc: "WiFi מהיר וחינמי" },
                    { icon: Car, title: "חניה", desc: "חניה ציבורית בסביבה" },
                    { icon: Coffee, title: "מטבח מצויד", desc: "כל הכלים והמכשירים" },
                    { icon: MapPin, title: "מיקום מרכזי", desc: "הדר - לב העיר" },
                    { icon: Shield, title: "אבטחה", desc: "בניין מאובטח" },
                    { icon: Heart, title: "בר יין", desc: "בר יין פרטי בחצר" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
                    >
                      <div className="p-3 bg-white rounded-full w-fit mx-auto mb-4 shadow-sm">
                        <item.icon className="text-primary" size={24} />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Privacy Section */}
            <section id="privacy" className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    <Lock className="text-gray-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">פרטיות ואבטחת מידע</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">מדיניות הפרטיות שלנו</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      אנו מכבדים את פרטיותכם ומתחייבים לשמור על המידע האישי שלכם. איננו אוספים או שומרים מידע אישי מעבר
                      למה שנחוץ לצורך מתן השירות.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">מידע שאנו אוספים:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• פרטי יצירת קשר בסיסיים</li>
                          <li>• מועדי השהות</li>
                          <li>• העדפות אירוח</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">איך אנו משתמשים במידע:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• תקשורת לגבי ההזמנה</li>
                          <li>• שיפור השירות</li>
                          <li>• עמידה בדרישות חוק</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border-r-4 border-blue-400">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">אבטחת המידע</h3>
                    <p className="text-blue-700 leading-relaxed">
                      כל ההזמנות והתשלומים מתבצעים דרך פלטפורמת Airbnb המאובטחת, בהתאם לסטנדרטים הבינלאומיים הגבוהים
                      ביותר של אבטחת מידע.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cancellation Policy Section */}
            <section id="cancellation" className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <RefreshCw className="text-yellow-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">מדיניות ביטולים והחזר כספי</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-yellow-50 rounded-xl p-6 border-r-4 border-yellow-400">
                    <h3 className="text-xl font-semibold text-yellow-800 mb-4">מדיניות כללית</h3>
                    <p className="text-yellow-700 leading-relaxed mb-4">
                      מדיניות הביטולים מבוססת על מה שנקבע עבור כל נכס בנפרד בפלטפורמת Airbnb. אנו מיישמים מדיניות מתונה
                      המאזנת בין גמישות לאורחים לבין יציבות עסקית.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle className="text-green-600" size={24} />
                        <h3 className="text-xl font-semibold text-green-800">ביטול מוקדם</h3>
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-green-700">5+ ימים</p>
                        <p className="text-sm text-green-600">לפני מועד ההגעה</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-green-700 font-semibold">החזר מלא</p>
                        <p className="text-sm text-green-600">למעט עמלות Airbnb</p>
                        <p className="text-sm text-green-600">בהתאם למדיניות הדירה</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                      <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="text-red-600" size={24} />
                        <h3 className="text-xl font-semibold text-red-800">ביטול מאוחר</h3>
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-red-700">{"<5"} ימים</p>
                        <p className="text-sm text-red-600">לפני מועד ההגעה</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-red-700 font-semibold">ללא החזר</p>
                        <p className="text-sm text-red-600">אלא אם צוין אחרת</p>
                        <p className="text-sm text-red-600">בעמוד ההזמנה</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Info className="text-blue-600" size={24} />
                        <h3 className="text-xl font-semibold text-blue-800">מקרים חריגים</h3>
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-2xl font-bold text-blue-700">בחינה</p>
                        <p className="text-sm text-blue-600">פרטנית</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-blue-700 font-semibold">נסיבות חריגות</p>
                        <p className="text-sm text-blue-600">מצב חירום רפואי</p>
                        <p className="text-sm text-blue-600">ביטול טיסות</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-4">הליך הביטול</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        { step: "1", title: "כניסה ל-Airbnb", desc: "היכנסו לחשבון שלכם" },
                        { step: "2", title: "מציאת ההזמנה", desc: "אתרו את ההזמנה הרלוונטית" },
                        { step: "3", title: "בקשת ביטול", desc: "לחצו על 'בטל הזמנה'" },
                        { step: "4", title: "אישור", desc: "קבלו אישור על הביטול" },
                      ].map((item, index) => (
                        <div key={index} className="text-center">
                          <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                            {item.step}
                          </div>
                          <h4 className="font-semibold text-indigo-800 mb-2">{item.title}</h4>
                          <p className="text-sm text-indigo-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12">
              <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl shadow-lg p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold">יש לכם שאלות?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">אנחנו כאן בשבילכם</h3>
                    <p className="text-white/90 leading-relaxed mb-6">
                      לכל שאלה, בירור או בקשה מיוחדת - אנא צרו איתנו קשר. אנו זמינים לסייע לכם לפני, במהלך ואחרי השהות.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone size={18} />
                        <span>+97254-9966-949</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={18} />
                        <span>info@leviurban.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={18} />
                        <span>שמריהו לוין 10, חיפה</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">זמני מענה</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>ראשון - חמישי:</span>
                        <span>09:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>שישי - שבת:</span>
                        <span>10:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>חירום:</span>
                        <span>24/7</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/20">
                      <p className="text-sm text-white/80">💡 לתגובה מהירה יותר, שלחו הודעות WhatsApp</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button asChild className="flex-1 bg-white text-primary hover:bg-white/90">
                    <Link href="/#contact">צור קשר עכשיו</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/">חזרה לדף הבית</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center py-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">מדיניות זו עודכנה לאחרונה ב-{new Date().toLocaleDateString("he-IL")}</p>
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Levi Urban. כל הזכויות שמורות.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
