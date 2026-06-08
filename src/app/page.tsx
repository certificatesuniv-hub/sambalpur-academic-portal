export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800">
      <nav className="bg-blue-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Sambalpur Academic Portal</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 text-white">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Welcome to Sambalpur University</h2>
          <p className="text-xl mb-8">Your gateway to academic excellence</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded text-lg">
            Get Started
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-blue-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Online Tutoring</h3>
            <p>Expert guidance from experienced faculty</p>
          </div>
          <div className="bg-white text-blue-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Study Resources</h3>
            <p>Materials and practice exams</p>
          </div>
          <div className="bg-white text-blue-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Progress Tracking</h3>
            <p>Monitor your academic growth</p>
          </div>
        </section>
      </main>
    </div>
  )
}
