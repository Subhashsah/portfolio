import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.png"
import javascript from "../../public/javascript.png"
import express from "../../public/express.png"
import mongodb from "../../public/mongodb.png"
import react from "../../public/react.jpeg"
import sql from "../../public/sql.png"
import java from "../../public/java.png"

export default function Portfolio() {
  const programs=[
    {
      id:1,
      logo:html,
      name:"Description"
    },
    {
      id:2,
      logo:css,
      name:"Description"
    },
    {
      id:3,
      logo:javascript,
      name:"Description"
    },
    {
      id:4,
      logo:mongodb,
      name:"Description"
    },
    {
      id:5,
      logo:express,
      name:"Description"
    },
    {
      id:6,
      logo:react,
      name:"Description"
    },
    {
      id:7,
      logo:sql,
      name:"Description"
    },
    {
      id:8,
      logo:java,
      name:"Description"
    },
  ]
  return (
    <>
      <div name="Portfolio" className="max-w-screen container mx-auto px-4 md:px-20 py-16">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center">My Portfolio</h1>
        <p className="text-lg text-gray-600 text-center mb-8">A showcase of my featured projects and technical skills</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {programs.map((item, idx) => (
            <div key={item.id} className="bg-white rounded-xl shadow-xl flex flex-col items-center p-6 hover:scale-105 transition-transform duration-200 border-t-4 border-blue-200">
              <img className="h-32 w-32 md:h-40 md:w-40 rounded-full border-2 border-blue-100 shadow mb-4 object-cover" src={item.logo} alt={item.name} />
              <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-4 text-center">Project description or highlight goes here. Briefly explain what this project/skill demonstrates.</p>
              <div className="flex flex-row gap-4 mt-auto">
                <button className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 px-5 py-2 text-white font-semibold shadow hover:from-blue-600 hover:to-green-600 transition-colors duration-200">Video</button>
                <button className="rounded-full bg-gradient-to-r from-gray-200 to-gray-400 px-5 py-2 text-gray-800 font-semibold shadow hover:from-gray-300 hover:to-gray-500 transition-colors duration-200">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
