'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { AiOutlineClose } from "react-icons/ai"
import Language from './Language'
import { HiMiniChevronDown } from 'react-icons/hi2'

const MobileMenu = ({ resMenu, setResMenu }) => {
    const [ mediaMenu, setMediaMenu ] = useState(false)
    const [ brandMenu, setBrandMenu ] = useState(false)
  return (
    <div className={`fixed top-0 left-0 w-full h-full min-h-screen bg-[#000000b8] z-[999] transition-all duration-300 opacity-0 translate-x-full ${resMenu ? 'menu-open' : ''}`}>
        <div className={`content bg-[#ffffffe1] w-full max-w-[300px] min-h-screen ml-auto translate-x-full transition-transform duration-700 rounded-tl-xl rounded-br-xl ${resMenu ? 'menu-content-open' : ''}`}>
            <div className="p-2 mb-3"> 
                <div className="flex bg-white rounded-md p-2">
                    <Image src={"/images/logo.png"} width={200} height={50} className="h-10 w-auto" alt="House Journey" />
                    <button onClick={()=>setResMenu(!resMenu)} className="ml-auto text-2xl text-muted">
                        <AiOutlineClose />
                    </button>
                </div>
            </div>
            <div className="h-[calc(100vh-140px)] overflow-y-auto overflow-x-hidden"> 
                <ul className="px-2">
                    <li className="border-b border-[#dbd0d0]">
                        <Link href={"/"} className="px-3 py-2 text-[#333] text-lg hover:bg-[#eee] block rounded-md" onClick={()=>setResMenu(!resMenu)}>Home</Link>
                    </li>
                    <li className="border-b border-[#dbd0d0]">
                        <Link href={"/house-builder"} className="px-3 py-2 text-[#333] text-lg hover:bg-[#eee] block rounded-md" onClick={()=>setResMenu(!resMenu)}>House Builder</Link>
                    </li>
                    <li className="border-b border-[#dbd0d0]">
                        <Link href={"/knowledge-center"} className="px-3 py-2 text-[#333] text-lg hover:bg-[#eee] block rounded-md" onClick={()=>setResMenu(!resMenu)}>Knowledge Center</Link>
                    </li>
                    <li className="border-b border-[#dbd0d0]">
                        <Link href={"/design-library"} className="px-3 py-2 text-[#333] text-lg hover:bg-[#eee] block rounded-md" onClick={()=>setResMenu(!resMenu)}>Design Library</Link>
                    </li>
                    <li className="border-b border-[#dbd0d0]">
                        <Link href={"/service-provider"} className="px-3 py-2 text-[#333] text-lg hover:bg-[#eee] block rounded-md" onClick={()=>setResMenu(!resMenu)}>Service Provider</Link>
                    </li>
                    <li className="border-b border-[#dbd0d0]">
                        <Link href={"/about"} className="px-3 py-2 text-[#333] text-lg hover:bg-[#eee] block rounded-md" onClick={()=>setResMenu(!resMenu)}>About Us</Link>
                    </li>
                    <li className="border-b border-[#dbd0d0]">
                        <a onClick={()=>setMediaMenu(!mediaMenu)} className="px-3 py-2 text-[#333] text-lg hover:bg-[#eee] rounded-md flex items-center justify-between">
                            Media
                            <HiMiniChevronDown className={`text-xl lg:text-2xl transition-all duration-200 group-hover:rotate-180 ${mediaMenu ? "rotate-180" : null}`} />
                        </a>
                        {
                            mediaMenu && ( 
                                <div className="">
                                    <Link href={"/blogs"} onClick={()=>setResMenu(!resMenu)} className="text-base font-medium block px-3 py-2 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Blogs</Link>
                                    <Link href={"#"} onClick={()=>setResMenu(!resMenu)} className="text-base font-medium block px-3 py-2 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Videos</Link> 
                                </div>
                            )
                        }
                    </li>  
                    <li className="border-b border-[#dbd0d0]">
                        <a onClick={()=>setBrandMenu(!brandMenu)} className="px-3 py-2 text-[#333] text-lg hover:bg-[#eee] rounded-md flex items-center justify-between">
                            Brands
                            <HiMiniChevronDown className={`text-xl lg:text-2xl transition-all duration-200 group-hover:rotate-180 ${brandMenu ? "rotate-180" : null}`} />
                        </a>
                        {
                            brandMenu && ( 
                                <div className="">
                                    <Link href={"#"} onClick={()=>setResMenu(!resMenu)} className="text-base font-medium block px-3 py-2 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Brand Information</Link>
                                    <Link href={"#"} onClick={()=>setResMenu(!resMenu)} className="text-base font-medium block px-3 py-2 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Brand Workshops</Link> 
                                    <Link href={"#"} onClick={()=>setResMenu(!resMenu)} className="text-base font-medium block px-3 py-2 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Brand Product Launches</Link> 
                                    <Link href={"#"} onClick={()=>setResMenu(!resMenu)} className="text-base font-medium block px-3 py-2 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Brand Deals</Link>  
                                </div>
                            )
                        }
                    </li>    
                    <li className="border-b border-[#dbd0d0]">
                        <Link href={"/contact"} className="px-3 py-2 text-[#333] text-lg hover:bg-[#eee] block rounded-md" onClick={()=>setResMenu(!resMenu)}>Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-3">
                <Language />
            </div>

        </div>
    </div>
  )
}

export default MobileMenu
