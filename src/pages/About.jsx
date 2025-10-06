export default function About() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork.jpg"
            alt="SRD Education Center"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            About <span className="text-blue-600">SRD Education Center</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            SRD Education Center is a leading institute dedicated to nurturing students' 
            academic and professional skills. We believe in empowering young minds 
            through innovative teaching methods, career-focused programs, and 
            personalized guidance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Mission */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                To provide quality education that helps students grow in knowledge, confidence, and career readiness.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm">
                To become a trusted name in education that inspires learning and innovation globally.
              </p>
            </div>

            {/* Programs */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Programs</h3>
              <p className="text-gray-600 text-sm">
                Offering diverse courses in computer skills, business, language, and personality development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
