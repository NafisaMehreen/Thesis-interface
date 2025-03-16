import Link from "next/link"

const practiceTypes = [
  { id: "mcq", title: "MCQ Practice", description: "Multiple choice questions to test your knowledge" },
  { id: "short-answer", title: "Short Answer Questions", description: "Practice writing short answers in Bangla" },
  {
    id: "summarization",
    title: "Summarization",
    description: "Improve your comprehension by summarizing Bangla texts",
  },
]

const chapters = [
  { id: 1, title: "বাংলা ব্যাকরণ", description: "Bangla Grammar", progress: 75, total: 100, completed: 75 },
  { id: 2, title: "শব্দার্থ", description: "Vocabulary", progress: 50, total: 80, completed: 40 },
  { id: 3, title: "রচনা", description: "Composition", progress: 25, total: 60, completed: 15 },
  // Add more chapters as needed
]

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Bangla Language Practice</h1>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Practice Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {practiceTypes.map((type) => (
          <div key={type.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{type.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{type.description}</p>
            <Link
              href={`/practice/${type.id}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Start Practice
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Chapters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{chapter.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{chapter.description}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${chapter.progress}%` }}></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {chapter.completed} / {chapter.total} questions completed
            </p>
            <Link
              href={`/practice/chapter/${chapter.id}`}
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Start Chapter
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

