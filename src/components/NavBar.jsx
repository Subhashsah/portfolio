import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-scroll';
import pic from "../../public/sah.webp"
export default function NavBar() {
  const[menu,setMenu]=useState(false)
  const navItems=[
    {
        id:1,
        text:"Home"
    },
    {
        id:2,
        text:"About"
    },
    {
        id:3,
        text:"Portfolio"
    },
    {
        id:4,
        text:"Experience"
    },
    {
        id:5,
        text:"Contact"
    },
   
  ]
  return (
    <>
    <div className='max-w-screen container mx-auto px-4 md:px-20 h-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md'>
        <div className="flex justify-between items-center h-20">
        <div className="flex space-x-2 items-center">
            <img className='h-12 w-12 rounded-full border-2 border-blue-400 shadow' src={pic} alt="Subhash Prasad Sah" />
            <div>
                <h1 className="font-bold text-2xl text-blue-700">Subhash</h1>
                <p className="text-sm text-gray-500">Full Stack Developer</p>
            </div>
        </div>
        {/* nav bar for md device */}
        <nav>
            <ul className='hidden md:flex space-x-10 text-lg font-medium'>
              {
                navItems.map((items)=>(
                    <li className='hover:text-blue-600 hover:scale-110 duration-200 cursor-pointer' key={items.id}>
                        <Link to={items.text}
                         smooth={true}
                         duration={500}
                         offset={-70}
                         activeClass='active'
                         >{items.text}</Link>
                    </li>
                ))
              }
            </ul>
            <div onClick={()=>setMenu(!menu)} className='md:hidden cursor-pointer'>{menu?<ImCross size={24} />:
            < GiHamburgerMenu size={24}/>}</div>
        </nav>
        </div>
  {/* nav bar for mobile */}
      {
        menu &&(
            <div className='bg-white/95 backdrop-blur-md fixed inset-0 z-50'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-6 font-bold text-2xl'>
            {
                navItems.map((items)=>(
                    <li className='hover:text-blue-600 hover:scale-110 duration-200 cursor-pointer'key={items.id}>
                        <Link 
                      onClick={()=>setMenu(!menu)}
                      to={items.text}
                     smooth={true}
                     duration={500}
                     offset={-70}
                     activeClass='active'
                     >{items.text}</Link>
                    </li>
                ))
              }
            </ul>
            </div>
        )
      }
    </div>
 
    </>
  )
}
