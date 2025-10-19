import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";


import pic from "../../public/free.jpeg"
import resume from "../../public/resume.pdf"
export default function Home() {
  
  return (
    <>
    <div name="Home" className="max-w-screen container mx-auto px-4  md:px-20 my-30 ">
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
          <span className="text-xl">Welcome to my webPage</span>
         <div className="flex space-x-1 text-2xl md:4xl">
         <h1>Hello, I'm a</h1>
         {/* <span >Programmer</span> */}
         <ReactTyped
          className="text-red-600 font-bold"
          strings={["Coder","Programmer","Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
         </div>
         <br />
         
         <p className="text-justify text-sm md:text-xl">
            "Hi, I'm Subhash Prasad Sah, a passionate Frontend, Backend developer and problem solver. I love turning ideas into interactive web experiences with clean and efficient code. Always eager to learn, build, and grow!"</p>
            <br />
       <div className="flex md:justify-between md:flex-row flex-col items-center space-y-6">
       <div className="space-y-2">
                <h1 className="text-2xl font-semibold">Available on</h1>
                <div className="flex flex-row text-4xl space-x-4">
                 <a className="text-blue-500"href="https://www.facebook.com/share/16SzGvqCr2/" target="_blank"><FaFacebook /></a>   
                  <a className="text-orange-500"href="https://www.instagram.com/?next=%2F&hl=en"target="_blank"><FaInstagramSquare /></a>
                  <a className="bg-blue-500 text-white" href="https://www.linkedin.com/feed/"target="_blank"><FaLinkedin /></a>
                
                
                </div>
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl font-semibold">Currently working on</h1>
                <div className="flex flex-row text-4xl space-x-4 ">
                <FaReact className="hover:scale-130 duration-200 cursor-pointer text-blue-500"/>
                <DiMongodb className="hover:scale-130 duration-200 cursor-pointer text-green-500"/>
                <SiExpress className="hover:scale-130 duration-200 cursor-pointer text-green-900"/>
                <RiNodejsLine className="hover:scale-130 duration-200 cursor-pointer text-yellow-500"/>
        

                
                </div>
            </div>
       </div>
        </div>
        <div className='md:w-1/2 order-1 md:order-2 flex flex-col items-center justify-center'>
          <img 
            className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-blue-200 transition-transform duration-300 hover:scale-105" 
            src={pic} 
            alt="Profile" 
          />
          <a
            href="resume.pdf"
            download
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
          >
            Download Resume
          </a>
        </div>
        </div>
    </div>
    <div className="flex justify-center mt-8">
      <a
        href="#Contact"
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-green-600 transition-colors duration-200 font-bold text-xl"
      >
        Contact Me
      </a>
    </div>
    <hr />
    </>
  )
}
