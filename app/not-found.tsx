export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-6">404 - דף לא נמצא</h1>
        <p className="text-xl mb-8">הדף שחיפשת אינו קיים או שהוסר.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          חזרה לדף הבית
        </a>
      </div>
    </div>
  )
}
