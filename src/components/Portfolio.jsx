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
    

    <div name="Portfolio" className="max-w-screen container mx-auto px-4 md:px-20">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <span className=" underline text-xl font-semibold space-y-2">Featured Project</span>
        <div >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 space-y-5 mt-10">
              {
                programs.map((items)=>(
                  <div className="md:w-[400px] md:h-[350px] shadow-xl flex items-center justify-center flex-col hover:scale-110 hover:duration-200" key={items.id}>
                     <img className="md:h-[250px] md:w-[250px] h-[200px] w-[200px] rounded-full border-[1px]"  src={items.logo} alt="" />
                     <h1>{items.name}</h1>
                     <div className="flex flex-row gap-5  py-4">
                      <button className="rounded-md  bg-cyan-200 px-4 py-2 hover:font-bold hover:bg-cyan-400">video</button>
                      <button className="rounded-md  bg-cyan-200 px-4 py-2 hover:font-bold hover:bg-cyan-400">code </button>
                     </div>
                     
                  </div>
                ))
              }
              </div>
            
        </div>
    </div>
    </>
  )
}
