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
        text:"Experiance"
    },
    {
        id:5,
        text:"Contact"
    },
   
  ]
  return (
    <>
    <div className='max-w-screen container mx-auto px-4 md:px-20 h-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
        <div className="flex justify-between items-center h-20">
        <div className="flex space-x-2">
            <div>
                <img className='h-12 w-12 rounded-full' src={pic}alt="" />
            </div>
            <div>
                <h1 className="font-semibold text-2xl"> Subhash</h1>
                <p>web Develover</p>
            </div>
        </div>
       
       {/* nav bar for md device */}
        <div>
            <ul className='hidden md:flex space-x-10 text-2xl font-medium'>
              {
                navItems.map((items)=>(
                    <li className='hover:scale-110 duration-200 cursor-pointer' key={items.id}>
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
            <div onClick={()=>setMenu(!menu)} className='md:hidden'>{menu?<ImCross size={24} />:
            < GiHamburgerMenu size={24}/>}</div>
        </div>
   
        </div>
  {/* nav bar for mobile */}
      {
        menu &&(
            <div className='bg-white '>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 font-bold'>
            {
                navItems.map((items)=>(
                    <li className='hover:scale-110 duration-200 cursor-pointer'key={items.id}>
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
