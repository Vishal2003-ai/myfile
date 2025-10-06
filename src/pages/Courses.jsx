import { useState } from "react";

export default function Courses() {
  // Dummy course data (you can replace with API later)
  const [courses] = useState([
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn HTML, CSS, JavaScript, React, and Node.js to build dynamic websites.",
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    },
    {
      id: 2,
      title: "Advanced Excel & MS Office",
      description: "Master Excel formulas, Pivot Tables, and business reporting techniques.",
      image: "https://cdn.pixabay.com/photo/2017/01/10/19/05/excel-1966230_1280.png",
    },
    {
      id: 3,
      title: "Graphic Design & Photoshop",
      description: "Design professional posters, logos, and digital art using Adobe tools.",
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593341_1280.jpg",
    },
    {
      id: 4,
      title: "Python Programming",
      description: "Learn Python fundamentals, automation, and data analysis in simple steps.",
      image: "https://cdn.pixabay.com/photo/2014/04/03/10/32/code-311427_1280.png",
    },
  ]);

  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Our <span className="text-blue-600">Popular Courses</span>
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-4 flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-xl mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 flex-grow">{course.description}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
