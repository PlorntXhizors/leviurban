type Language = "he" | "en"

export type TranslationKey =
  | "hero.title"
  | "hero.subtitle"
  | "nav.about"
  | "nav.apartments"
  | "nav.location"
  | "nav.wineBar"
  | "nav.reviews"
  | "nav.contact"
  | "nav.bookApt1"
  | "nav.bookApt2"
  | "about.title"
  | "about.paragraph1"
  | "about.paragraph2"
  | "about.paragraph3"
  | "apartments.title"
  | "apartments.apt1.title"
  | "apartments.apt1.description"
  | "apartments.apt2.title"
  | "apartments.apt2.description"
  | "apartments.amenities.beds"
  | "apartments.amenities.wifi"
  | "apartments.amenities.ac"
  | "apartments.amenities.kitchen"
  | "apartments.amenities.design"
  | "apartments.amenities.workspace"
  | "apartments.bookNow"
  | "location.title"
  | "location.description"
  | "location.feature1"
  | "location.feature2"
  | "location.feature3"
  | "location.feature4"
  | "wineBar.title"
  | "wineBar.feature1.title"
  | "wineBar.feature1.description"
  | "wineBar.feature2.title"
  | "wineBar.feature2.description"
  | "wineBar.feature3.title"
  | "wineBar.feature3.description"
  | "wineBar.feature4.title"
  | "wineBar.feature4.description"
  | "reviews.title"
  | "reviews.review1.text"
  | "reviews.review1.author"
  | "reviews.review2.text"
  | "reviews.review2.author"
  | "reviews.review3.text"
  | "reviews.review3.author"
  | "contact.title"
  | "contact.address.title"
  | "contact.address.value"
  | "contact.phone.title"
  | "contact.phone.value"
  | "contact.email.title"
  | "contact.email.value"
  | "contact.form.title"
  | "contact.form.name"
  | "contact.form.email"
  | "contact.form.subject"
  | "contact.form.message"
  | "contact.form.submit"
  | "footer.rights"

const translations: Record<TranslationKey, Record<Language, string>> = {
  "hero.title": {
    he: "אירוח אורבני מדויק בלב חיפה",
    en: "Precise Urban Hospitality in the Heart of Haifa",
  },
  "hero.subtitle": {
    he: "דירות מעוצבות. מיקום נוח. חוויית אירוח בגובה העיניים.",
    en: "Designed apartments. Convenient location. Eye-level hospitality experience.",
  },
  "nav.about": {
    he: "עלינו",
    en: "About",
  },
  "nav.apartments": {
    he: "הדירות",
    en: "Apartments",
  },
  "nav.location": {
    he: "מיקום",
    en: "Location",
  },
  "nav.wineBar": {
    he: "בר היין",
    en: "Wine Bar",
  },
  "nav.reviews": {
    he: "המלצות",
    en: "Reviews",
  },
  "nav.contact": {
    he: "צור קשר",
    en: "Contact",
  },
  "nav.bookApt1": {
    he: "הזמנת דירה 1",
    en: "Book Apt 1",
  },
  "nav.bookApt2": {
    he: "הזמנת דירה 2",
    en: "Book Apt 2",
  },
  "about.title": {
    he: "עלינו",
    en: "About Us",
  },
  "about.paragraph1": {
    he: "אנחנו משפחת לוי, תושבי הדר כבר שנים – והבחירה לפתוח את הדירות שלנו לאירוח באה מתוך אהבה לאזור ורצון לחלוק אותו עם אחרים.",
    en: "We are the Levi family, residents of Hadar for years – and the choice to open our apartments for hospitality came from a love for the area and a desire to share it with others.",
  },
  "about.paragraph2": {
    he: "שתי הדירות שלנו ממוקמות ברחוב שמריהו לוין – מיקום מרכזי עם נגישות מעולה לכל העיר, חיי תרבות מתפתחים, שוק אותנטי, ואנשים טובים.",
    en: "Our two apartments are located on Shmaryahu Levin Street – a central location with excellent accessibility to the entire city, developing cultural life, an authentic market, and good people.",
  },
  "about.paragraph3": {
    he: "אבל מה שהופך את Levi Urban לייחודי, נמצא בחצר: בר יין קטן ומעוצב שמופעל עבור האורחים שלנו לאורך כל השבוע. האורחים שלנו מתפנקים מעבר לרגיל.",
    en: "But what makes Levi Urban unique is in the yard: a small, designed wine bar that operates for our guests throughout the week. Our guests are pampered beyond the ordinary.",
  },
  "apartments.title": {
    he: "הדירות",
    en: "The Apartments",
  },
  "apartments.apt1.title": {
    he: "Levi Urban 1",
    en: "Levi Urban 1",
  },
  "apartments.apt1.description": {
    he: "דירת 2 חדרים עם סלון, חדר שינה זוגי, מטבח מאובזר, מקלחת, פינת אוכל ועבודה.",
    en: "2-room apartment with a living room, double bedroom, equipped kitchen, shower, dining and work area.",
  },
  "apartments.apt2.title": {
    he: "Levi Urban 2",
    en: "Levi Urban 2",
  },
  "apartments.apt2.description": {
    he: "דירת סטודיו זוגית עם מטבחון, מקלחת ושירותים.",
    en: "Double studio apartment with kitchenette, shower and toilet.",
  },
  "apartments.amenities.beds": {
    he: "מיטות נוחות",
    en: "Comfortable beds",
  },
  "apartments.amenities.wifi": {
    he: "אינטרנט חזק",
    en: "Strong WiFi",
  },
  "apartments.amenities.ac": {
    he: "מיזוג אוויר",
    en: "Air conditioning",
  },
  "apartments.amenities.kitchen": {
    he: "מטבח מצויד",
    en: "Equipped kitchen",
  },
  "apartments.amenities.design": {
    he: "עיצוב נעים ופונקציונלי",
    en: "Pleasant and functional design",
  },
  "apartments.amenities.workspace": {
    he: "פינה שקטה לעבוד או להירגע",
    en: "Quiet corner to work or relax",
  },
  "apartments.bookNow": {
    he: "הזמנה עכשיו",
    en: "Book Now",
  },
  "location.title": {
    he: "מיקום",
    en: "Location",
  },
  "location.description": {
    he: "הדירות נמצאות בשכונת הדר, בלב העיר חיפה – אזור אותנטי, מתחדש, ומלא חיים.",
    en: "The apartments are located in the Hadar neighborhood, in the heart of Haifa – an authentic, renewing, and lively area.",
  },
  "location.feature1": {
    he: "מרחק הליכה מהעיר התחתית, שוק תלפיות והמושבה הגרמנית",
    en: "Walking distance from Downtown, Talpiot Market and the German Colony",
  },
  "location.feature2": {
    he: "תחנות מטרונית ואוטובוסים ממש ברחוב",
    en: "Metronit and bus stations right on the street",
  },
  "location.feature3": {
    he: "גישה לכרמלית",
    en: "Access to the Carmelit",
  },
  "location.feature4": {
    he: "חניה ציבורית נגישה",
    en: "Accessible public parking",
  },
  "wineBar.title": {
    he: "בר היין ושירותים משלימים",
    en: "Wine Bar & Additional Services",
  },
  "wineBar.feature1.title": {
    he: "בר יין בגינה",
    en: "Garden Wine Bar",
  },
  "wineBar.feature1.description": {
    he: "פתוח כל השבוע לאורחים בלבד",
    en: "Open all week for guests only",
  },
  "wineBar.feature2.title": {
    he: "ערב יין בימי חמישי",
    en: "Thursday Wine Evening",
  },
  "wineBar.feature2.description": {
    he: "פתוח לקהל, מוזיקה ואוכל משתנה",
    en: "Open to the public, music and changing food",
  },
  "wineBar.feature3.title": {
    he: "סיורים רגליים מודרכים",
    en: "Guided Walking Tours",
  },
  "wineBar.feature3.description": {
    he: "גלו את האזור עם מדריך מקומי",
    en: "Discover the area with a local guide",
  },
  "wineBar.feature4.title": {
    he: "הטבות במסעדות וארוחות שף",
    en: "Restaurant Benefits and Chef Meals",
  },
  "wineBar.feature4.description": {
    he: "בתיאום מראש",
    en: "By prior arrangement",
  },
  "reviews.title": {
    he: "המלצות אורחים",
    en: "Guest Reviews",
  },
  "reviews.review1.text": {
    he: "היה לנו מושלם. נקי, מעוצב, שקט ובמיקום מעולה.",
    en: "It was perfect for us. Clean, designed, quiet and in a great location.",
  },
  "reviews.review1.author": {
    he: "– שחר ויואב",
    en: "– Shahar and Yoav",
  },
  "reviews.review2.text": {
    he: "בר היין זה בונוס אמיתי. לא רצינו לצאת בכלל!",
    en: "The wine bar is a real bonus. We didn't want to leave at all!",
  },
  "reviews.review2.author": {
    he: "– Tamar",
    en: "– Tamar",
  },
  "reviews.review3.text": {
    he: "המארחים דאגו להכל, מהרגע הראשון ועד הצ'ק אאוט.",
    en: "The hosts took care of everything, from the first moment until check-out.",
  },
  "reviews.review3.author": {
    he: "– Mike, ניו יורק",
    en: "– Mike, New York",
  },
  "contact.title": {
    he: "צור קשר",
    en: "Contact Us",
  },
  "contact.address.title": {
    he: "כתובת",
    en: "Address",
  },
  "contact.address.value": {
    he: "שמריהו לוין 10, חיפה",
    en: "10 Shmaryahu Levin St., Haifa",
  },
  "contact.phone.title": {
    he: "טלפון/וואטסאפ",
    en: "Phone/WhatsApp",
  },
  "contact.phone.value": {
    he: "+972 50 000 0000",
    en: "+972 50 000 0000",
  },
  "contact.email.title": {
    he: "אימייל",
    en: "Email",
  },
  "contact.email.value": {
    he: "info@leviurban.com",
    en: "info@leviurban.com",
  },
  "contact.form.title": {
    he: "שלחו לנו הודעה",
    en: "Send us a message",
  },
  "contact.form.name": {
    he: "שם",
    en: "Name",
  },
  "contact.form.email": {
    he: "אימייל",
    en: "Email",
  },
  "contact.form.subject": {
    he: "נושא",
    en: "Subject",
  },
  "contact.form.message": {
    he: "הודעה",
    en: "Message",
  },
  "contact.form.submit": {
    he: "שליחה",
    en: "Submit",
  },
  "footer.rights": {
    he: "כל הזכויות שמורות.",
    en: "All rights reserved.",
  },
}

export function getTranslation(key: TranslationKey, language: Language): string {
  return translations[key][language]
}
