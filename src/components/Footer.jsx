import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <hr className="mt-10"/>
    <footer className="py-12"></footer>
    <div className="max-w-screen-lg container mx-auto px-4  md:px-20 mt-10">
        <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-4  rounded-lg">
        <FaFacebook size={24}/>
        <FaInstagram size={24}/>
        <FaLinkedinIn size={24}/>
        </div>
        <div className=" mt-8 border-t pt-4 flex flex-col items-center ">
            <p>&copy;2024 your company. All right reserverd</p>
            <p className="text-md mt-2">Made with <span className="text-red-500">❤️</span>Subhash</p>
        </div>
        </div>
    </div>
 
    </>
  )
}
