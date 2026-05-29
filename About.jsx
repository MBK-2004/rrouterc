import React from 'react'

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">

        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">

          {/* Image Section */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="React Developers"
              className="rounded-2xl shadow-lg hover:scale-105 duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-7/12 lg:w-6/12">

            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl leading-tight">
              React development is carried out by passionate developers
            </h2>

            <p className="mt-6 text-gray-600 leading-7">
              React enables developers to build fast, scalable, and interactive
              user interfaces with reusable components. Modern frontend
              development focuses on creating smooth user experiences with clean
              and maintainable code structures.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              Passionate developers use React together with modern tools like
              Tailwind CSS, React Router, APIs, and state management to create
              powerful web applications that are responsive, dynamic, and
              production ready.
            </p>

            <button className="mt-6 px-6 py-3 bg-orange-700 text-white rounded-lg hover:bg-orange-800 duration-300 shadow-md">
              Learn More
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}