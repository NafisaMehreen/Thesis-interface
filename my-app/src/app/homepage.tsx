import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Bangla MCQ Practice Platform
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-gray-600 dark:text-gray-300">
        Enhance your Bangla language skills with our comprehensive MCQ practice system.
      </p>
      <div className="flex gap-4 mb-12">
        <Link href="/register" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Register
        </Link>
        <Link
          href="/login"
          className="bg-white text-blue-500 px-6 py-2 rounded-md border border-blue-500 hover:bg-blue-50"
        >
          Login
        </Link>
        <Link href="/practice" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
          Start Practicing
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <FeatureCard title="Comprehensive Chapters" description="Cover a wide range of Bangla language topics" />
        <FeatureCard title="Progress Tracking" description="Monitor your improvement over time" />
        <FeatureCard title="Instant Feedback" description="Get immediate results on your answers" />
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 border rounded-lg bg-white dark:bg-gray-800 shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

