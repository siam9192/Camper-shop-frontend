import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <div className=" py-10 rounded-lg">
    <div className=' space-y-2 '>
       <h1 className=' text-3xl font-bold text-black text-center pb-10'>Get Touch In Social </h1>
       <div className=" py-5 grid grid-cols-2 md:grid-cols-4 gap-5">
       <div className=" hover:border text-black flex flex-col justify-center items-center gap-3   p-5">
    <div className=' text-6xl md:text-7xl'>
    <CiFacebook />
    </div>

<h1 className="text-black font-semibold text-xl">Facebook</h1>

        </div>
     <Link to={""}>
     <div className=" hover:border text-black flex flex-col justify-center items-center gap-3   p-5">
    <div className=' text-6xl md:text-7xl'>
    <RiTwitterXFill />
    </div>

<h1 className="text-black font-semibold text-xl">Twitter</h1>

        </div>
     </Link>
     <Link to={""}>
     <div className=" hover:border text-black flex flex-col justify-center items-center gap-3   p-5">
    <div className=' text-6xl md:text-7xl'>
    <IoLogoInstagram />
    </div>

<h1 className="text-black font-semibold text-xl">Instagram</h1>

        </div>
     </Link>
     <Link to={""}>
     <div className=" hover:border text-black flex flex-col justify-center items-center gap-3   p-5">
    <div className=' text-6xl md:text-7xl'>
  <AiOutlineYoutube/>
    </div>

<h1 className="text-black font-semibold text-xl">Youtube</h1>

        </div>
     </Link>
     
       </div>
       </div>
       </div>
  )}


export default Social