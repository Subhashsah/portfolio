import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
      } = useForm()
      const onSubmit = async(data) =>{
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
           await axios.post("https://getform.io/f/avrwjnpa",userInfo)
           alert("Thank you! Your message has been sent. I will get back to you soon.")
           reset();
        }
        catch(err){
            alert("Sorry, there was an error sending your message. Please try again later.");
            console.log(err)
        }
      }
    
  return (
    <>
    <div name="Contact" className="max-w-screen container mx-auto px-4 md:px-20 mt-10">
        <div className="flex gap-3 flex-col" >
        <h1 className="text-3xl font-extrabold text-center mb-2 text-blue-700">Contact Me</h1>
        <span className="text-lg md:font-semibold text-center mb-4">Please fill out the form below to get in touch. I typically respond within 24 hours.</span>
        <div className="flex flex-col m-auto items-center justify-between w-full max-w-md shadow-2xl rounded-xl px-6 py-8 bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
            <h2 className="text-xl font-bold text-center text-gray-700 mb-2">Send your Message</h2>
            <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-600">Full Name</label>
                <input className='shadow appearance-none border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder="Enter your full name" {...register("name", { required: true, minLength: 2 })}/>
                {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-600">Email Address</label>
                <input className='shadow appearance-none border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400' type="email" placeholder="Enter your email" {...register("email", { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}/>
                {errors.email && <span className="text-red-500 text-xs">Please enter a valid email</span>}
            </div>
            <div className="flex flex-col gap-1" >
            <label className="font-semibold text-gray-600">Message</label>
               <textarea className='shadow appearance-none border border-gray-300 rounded px-4 py-2 w-full h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder="Type your message here..." {...register("message", { required: true, minLength: 10 })}></textarea>
               {errors.message && <span className="text-red-500 text-xs">Please enter a message (min 10 characters)</span>}
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-blue-500 to-green-500 px-5 py-2 text-white font-bold rounded-xl shadow hover:from-blue-600 hover:to-green-600 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {isSubmitSuccessful && <div className="text-green-600 text-center font-semibold">Message sent successfully!</div>}
            </form>
        </div>
        </div>
    </div>
    </>
  )
}
