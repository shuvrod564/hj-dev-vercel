import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-12 md:pt-14 lg:pt-20 bg-[#00112C] text-white pb-10">
        <div className="container">
            <div className="row">
                <div className="w-full lg:w-1/5 lg:pr-5 text-center">
                    <Link href={"/"} className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white inline-flex justify-center items-center p-4 overflow-hidden">
                        <Image src={"/images/fav.png"} width={64} height={64} alt="House Journey" />
                    </Link>
                    <ul className="flex justify-center mt-10">
                        <li className="mr-2">
                            <Link href={"#"} className="flex justify-center items-center w-8 h-8 bg-white text-dark rounded-full transition hover:bg-primary hover:text-white"><FaFacebookF /></Link>
                        </li>
                        <li className="mr-2">
                            <Link href={"#"} className="flex justify-center items-center w-8 h-8 bg-white text-dark rounded-full transition hover:bg-primary hover:text-white"><FaXTwitter /></Link>
                        </li>
                        <li className="mr-2">
                            <Link href={"#"} className="flex justify-center items-center w-8 h-8 bg-white text-dark rounded-full transition hover:bg-primary hover:text-white"><FaInstagram /></Link>
                        </li>
                        <li className="mr-2">
                            <Link href={"#"} className="flex justify-center items-center w-8 h-8 bg-white text-dark rounded-full transition hover:bg-primary hover:text-white"><FaLinkedinIn /></Link>
                        </li>
                        <li>
                            <Link href={"#"} className="flex justify-center items-center w-8 h-8 bg-white text-dark rounded-full transition hover:bg-primary hover:text-white"><AiFillYoutube /></Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-[80%] lg:pl-9 mt-5 lg:mt-0">
                    <div className="row">
                        {/* <div className="w-1/2 lg:w-[30%]">
                            <p className="text-base sm:text-lg lg:text-xl font-semibold tracking-wider text-white">Important Links</p>
                            <ul>
                                <li className="mb-1.5">
                                    <Link href={"/"} className="text-white hover:underline text-sm lg:text-base">Tools</Link>
                                </li>
                                <li className="mb-1.5">
                                    <Link href={"/"} className="text-white hover:underline text-sm lg:text-base">Career</Link>
                                </li>
                                <li className="mb-1.5">
                                    <Link href={"/"} className="text-white hover:underline text-sm lg:text-base">Media</Link>
                                </li> 
                            </ul>
                        </div> */}
                        <div className="w-1/2 lg:w-[30%]">
                            <p className="text-base sm:text-lg lg:text-xl font-semibold tracking-wider text-white">Quick Links</p>
                            <ul> 
                                
                                <li className="mb-1.5">
                                    <Link href={"/about"} className="text-white hover:underline text-sm lg:text-base">About Us</Link>
                                </li> 
                                <li className="mb-1.5">
                                    <Link href={"/blogs"} className="text-white hover:underline text-sm lg:text-base">Blog</Link>
                                </li>
                                <li className="mb-1.5">
                                    <Link href={"/contact"} className="text-white hover:underline text-sm lg:text-base">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-[40%]">
                            <p className="text-base sm:text-lg lg:text-xl font-semibold tracking-wider text-white">Tools</p>
                            <ul>
                                <li className="mb-1.5">
                                    <Link href={"/contact"} className="text-white hover:underline text-sm lg:text-base">House Building Estimator</Link>
                                </li>
                                <li className="mb-1.5">
                                    <Link href={"/contact"} className="text-white hover:underline text-sm lg:text-base">Material Specifications Recommendation</Link>
                                </li>
                                <li className="mb-1.5">
                                    <Link href={"/contact"} className="text-white hover:underline text-sm lg:text-base">Time vs Manpower Estimator</Link>
                                </li>
                                <li className="mb-1.5">
                                    <Link href={"/contact"} className="text-white hover:underline text-sm lg:text-base">Scope of Work Creator</Link>
                                </li> 
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-[30%] ">
                            <p className="text-base sm:text-lg lg:text-xl font-semibold tracking-wider text-white">After Login Pages List</p>
                            <ul>
                                <li className="mb-1.5">
                                    <Link href={"/ibh/planing"} className="text-white hover:underline text-sm lg:text-base">House Building</Link>
                                </li>
                                <li className="mb-1.5">
                                    <Link href={"/user/"} className="text-white hover:underline text-sm lg:text-base">Service Provider Dashboard</Link>
                                    <Link href={"/user/kyc"} className="text-white hover:underline text-sm lg:text-base">Service Provider</Link>
                                </li> 
                            </ul>
                        </div>
                    </div>  
                    {/* grid */}
                </div>
            </div>

            {/* row */}
        </div>
        {/* container */}
    </footer>
  )
}

export default Footer
