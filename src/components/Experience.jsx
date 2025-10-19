import React from 'react';

export default function Experience() {
  return (
    <div id="Experience" className="max-w-screen container mx-auto px-4 md:px-20 my-20">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4 text-center">Experience</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Full Stack Developer</h2>
            <p className="text-gray-600 mb-1">Freelance / Personal Projects</p>
            <p className="text-sm text-gray-500 mb-2">2022 - Present</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Developed and deployed multiple full-stack web applications using React, Node.js, Express, and MongoDB.</li>
              <li>Collaborated with clients to gather requirements and deliver tailored solutions.</li>
              <li>Implemented responsive UI and RESTful APIs for seamless user experience.</li>
            </ul>
          </div>
        </div>
        {/* Add more experience blocks as needed */}
      </div>
    </div>
  );
}
