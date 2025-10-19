import React from 'react'

export default function About() {
  return (
   <>
   <div name="About" className="max-w-screen container mx-auto px-4 md:px-20 my-20">
    <h1 className="text-4xl font-extrabold text-blue-700 mb-4 text-center">About Me</h1>
    <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl shadow-lg p-8">
      <div className="flex-1 order-2 md:order-1">
        
        <p className="text-lg text-gray-700 mb-4 text-justify leading-relaxed">
          As a <span className="font-semibold text-blue-600">Full Stack Developer</span>, I specialize in building robust, scalable, and visually appealing web applications. My expertise spans both frontend and backend, allowing me to deliver seamless user experiences and efficient solutions. I thrive on challenges and am passionate about continuous learning and growth in the tech world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white/80 rounded-lg shadow p-4">
            <h3 className="font-semibold text-blue-700 mb-2 flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>Core Skills</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li><span className="font-bold">Frontend:</span> React.js, Redux, Tailwind CSS</li>
              <li><span className="font-bold">Backend:</span> Node.js, Express.js</li>
              <li><span className="font-bold">Database:</span> MongoDB, SQL</li>
              <li><span className="font-bold">API:</span> RESTful APIs</li>
            </ul>
          </div>
          <div className="bg-white/80 rounded-lg shadow p-4">
            <h3 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Problem Solving & Critical Thinking</li>
              <li>Team Collaboration & Leadership</li>
              <li>Agile Methodologies</li>
              <li>Effective Communication</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
          <span className="text-md text-gray-600 italic">“Always striving to learn, build, and grow.”</span>
        </div>
      </div>
      <img src="/sah.webp" alt="Subhash Prasad Sah" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-200 shadow-md mb-6 md:mb-0 order-1 md:order-2" />
    </div>
   </div>
   </>
  )
}
