import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"

export default function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) =>{
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
           await axios.post("https://getform.io/f/avrwjnpa",userInfo)
           alert("you have sent the message")
        }
        catch(err){
            console.log(err)
        }
      }
    
  return (
    <>
    <div name="Contact" className="max-w-screen container mx-auto px-4  md:px-20 mt-10">
        <div className="flex gap-3 flex-col" >
        <h1 className="text-2xl font-bold">Contact me</h1>
        <span className="text-xl md:font-semibold">Please fill out the form below to contact me</span>
        <div className="flex flex-col m-auto  items-center justify-between w-96 shadow-2xl rounded-md px-3 py-5 bg-slate-200">
            
            <form onSubmit={handleSubmit(onSubmit)}action="">
            <div className ="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Send your Message</h1>
            <div className="flex flex-col justify-between">
            <label className= "">FullName</label>
                <input className=' shadow appearance-none border rounded px-4 py-2 w-90 ' type="text" placeholder="Enter your fullname" name="name"{...register("name", { required: true })}/>
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col justify-between  ">
            <label >Email Address</label>
                <input className=' shadow appearance-none border rounded px-4 py-2 'type="email" placeholder="enter your email" name="email"{...register("email", { required: true })}/>
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col justify-between" >
            <label htmlFor="">Message</label>
               <textarea className=' shadow appearance-none border rounded px-4 py-2 h-[150px]' name="message" id=""{...register("message", { required: true })}></textarea>
               {errors.message && <span>This field is required</span>}
            </div>
            <button type="submit" className="bg-green-200 px-3 py-2 hover:bg-green-500 rounded-xl">Submit</button>
            </div>
            </form>
            
        </div>
        </div>
    </div>
    
    
    </>
  )
}
