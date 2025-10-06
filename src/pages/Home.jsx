export default function Home() {
  return  <section className="bg-blue-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            Welcome to <span className="text-blue-600">SRD Education Center</span>
          </h1>

          <p className="text-gray-600 text-lg md:w-4/5 mx-auto md:mx-0">
            Empowering students with quality education, practical learning, and
            personal growth. Our center is dedicated to helping learners build
            skills that shape their future.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
            alt="Education Center"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>;
}
