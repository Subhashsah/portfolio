import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <hr className="mt-10"/>
    <footer className="py-12"></footer>
    <div className="max-w-screen-lg container mx-auto px-4 md:px-20 mt-10">
        <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-4 rounded-lg mb-4">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors"><FaFacebook size={28}/></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-colors"><FaInstagram size={28}/></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors"><FaLinkedinIn size={28}/></a>
        </div>
        <div className="mt-6 border-t pt-4 flex flex-col items-center w-full">
            <p className="text-gray-600">&copy; 2024 Subhash Prasad Sah. All rights reserved.</p>
            <p className="text-md mt-2 text-gray-500">Made with <span className="text-red-500">❤️</span> by Subhash</p>
        </div>
        </div>
    </div>
    </>
  )
}
