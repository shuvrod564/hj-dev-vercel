'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BiLogInCircle } from 'react-icons/bi'
import Language from './Language'
import { HiChevronDown } from "react-icons/hi"
import { SlMenu } from "react-icons/sl"
import { PiPlusBold, PiSuitcaseSimple, PiUserCircleLight } from "react-icons/pi";
import { HiMiniChevronDown } from "react-icons/hi2";
import { LiaSignOutAltSolid } from "react-icons/lia";

import { Dropdown, Space } from 'antd';
import MobileMenu from './MobileMenu'
import { AiOutlineFileText, AiOutlineLineChart, AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import { GoChevronDown } from "react-icons/go";
import "@components/components/styles/Header.css"
 
const Header = () => {
    const [resMenu, setResMenu] = useState(false); 
    const [stickyMenu, setStickyMenu] = useState(false);
    const [houseBuilderAccessToken, setHouseBuilderAccessToken] = useState("");
    const [houseBuilderLoggedInUserName, setHouseBuilderLoggedInUserName] = useState("");
    const [ items, setAuthMenu ] = useState([])

    const handleStickyMenu = () => {
        const scrollH = window.scrollY;
        // console.log(scrollH);
        if (scrollH > 100) {
            setStickyMenu(true)
        } else {
            setStickyMenu(false)
        }
    }

    useEffect(() => {
        const houseBuilderAccessToken = localStorage.getItem('houseBuilderAccessToken');
        const houseBuilderLoggedInUserName = localStorage.getItem('houseBuilderLoggedInUserName');
        // Update state with localStorage data
        setHouseBuilderAccessToken(houseBuilderAccessToken);
        setHouseBuilderLoggedInUserName(houseBuilderLoggedInUserName);
        
        window.addEventListener('scroll', handleStickyMenu)
        handleStickyMenu();

        return()=>{
            window.addEventListener('scroll', handleStickyMenu)
        }
    }, [])

    const route = usePathname();

    const loginMenu = [
        {
          label: (
            <Link href={"/login"} className="sm:!text-sm !text-[12px] uppercase text-center font-semibold px-3 py-2.5 flex justify-center items-center bg-primary text-dark rounded-md hover:bg-secondary hover:!text-white hover:border-dark">
                House Builder Login
            </Link> 
          ),
          key: '0',
        },
        {
          label: (
            <Link href={"/service-provider-login"} className="sm:!text-sm !text-[12px] uppercase text-center font-semibold px-3 py-2.5 flex justify-center items-center bg-dark !text-white rounded-md hover:bg-primary hover:!text-white hover:border-dark">
                Service Provider Login
            </Link>
          ),
          key: '1',
        }, 
    ];

    const signupMenu = [
        {
          label: (
            <Link href={"/register"} className="sm:!text-sm !text-[12px] uppercase text-center font-semibold px-3 py-2.5 flex justify-center items-center bg-primary text-dark rounded-md hover:bg-secondary hover:!text-white hover:border-dark">
                House Builder Signup
            </Link> 
          ),
          key: '0',
        },
        {
          label: (
            <Link href={"/service-provider-type"} className="sm:!text-sm !text-[12px] uppercase text-center font-semibold px-3 py-2.5 flex justify-center items-center bg-dark !text-white rounded-md hover:bg-primary hover:!text-white hover:border-dark">
                Service Provider Signup
            </Link>
          ),
          key: '1',
        }, 
    ];

    // Login & Signup Menu Setup
    const handleLoginMenu = () => {
        setAuthMenu(loginMenu)
    }
    const handleSignupMenu = () => {
        setAuthMenu(signupMenu)
    }
    
  return (
    <nav className={`pb-3 pt-3 border-b border-[#eee] bg-white ${stickyMenu ? 'fixed top-0 left-0 w-full h-auto z-50 transition-all duration-500 fixed__menu' : ''}`}>
        <div className="container">
            <div className="hidden justify-between items-center relative">
                {/* <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-white to-[#ddd]"></div> border-r border-[#dadada] */}
                <div className="p-1.5 "> 
                    <Language />
                </div>
                <div className="flex items-center"> 
                    <button className="text-center px-2 text-[#2bc39d] hover:bg-[#f7f7f7] hover:text-dark transition">
                        <FiSearch className="text-lg md:text-xl" />
                    </button>
                    <div className="inline-flex">
                        <Link href={"/login"} className="text-base font-medium capitalize inline-flex items-center ml-4 py-2 text-[#38475a]">
                            {/* <BiLogInCircle className="text-lg md:text-xl mr-2"/>  */}
                            login
                        </Link>
                        <Link href={"/contact"} className="text-base font-medium capitalize hidden sm:inline-flex items-center ml-4 py-2 text-[#38475a]">
                            {/* <BiLogInCircle className="text-lg md:text-xl mr-2"/> */}
                            Support
                        </Link>
                        <div className="hidden lg:block"> 
                            <Dropdown
                                menu={{
                                    items, 
                                }}
                                trigger={['click']} 
                            >
                                <a onClick={(e) => e.preventDefault()} className="text-base font-medium capitalize inline-flex items-center p-3 text-[#38475a] cursor-pointer"> 
                                    About
                                    <HiChevronDown className="text-xl" /> 
                                </a>
                            </Dropdown>
                        </div>
                        {/* <Link href={"/register"} className="text-base font-medium ml-3 uppercase btn-primary !rounded-none"> 
                            <span>Join Now</span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="xl:max-w-[calc(100%-100px)] md:max-w-[calc(100%-60px)] max-w-[calc(100%-30px)] mx-auto flex items-center justify-between">
            <Link href={"/"} className="inline-block">
                <Image
                    src={"/images/logo.png"} 
                    width={200} height={60}
                    alt="House Journey"
                    className="h-10 sm:h-10 md:h-14 lg:h-16 w-auto"
                />
            </Link>     
               
            <div className="hidden xl:inline-flex justify-between items-center"> 
                <ul className="flex flex-wrap">
                    <li>
                        <Link href={"/"} className={`px-3 py-2 capitalize ${route == '/'? 'text-primary' : 'text-[#303d4e] hover:text-primary'}`}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/house-builder"} className={`px-3 py-2 capitalize ${route == '/house-builder'? 'text-primary' : 'text-[#303d4e] hover:text-primary'}`}>House builder</Link>
                    </li>
                    <li>
                        <Link href={"/knowledge-center"} className={`px-3 py-2 capitalize ${route == '/knowledge-center'? 'text-primary' : 'text-[#303d4e] hover:text-primary'}`}>Knowledge Center</Link>
                    </li>
                    <li>
                        <Link href={"/design-library"} className={`px-3 py-2 capitalize ${route == '/design-library'? 'text-primary' : 'text-[#303d4e] hover:text-primary'}`}>Design Library</Link>
                    </li> 
                    <li>
                        <Link href={"/service-provider"} className="px-3 py-2 capitalize text-[#303d4e] hover:text-primary bg-[#fcb53083] rounded-lg mx-2">Service Provider</Link>
                    </li> 
                    <li className="group relative">
                       <Link href={"#"} className="px-3 py-2 capitalize text-[#303d4e] hover:text-primary group-hover:text-primary inline-flex items-center">
                            More
                            <HiMiniChevronDown className="text-xl lg:text-2xl transition-all duration-200 group-hover:rotate-180" />
                        </Link>
                        <div className="absolute top-full w-auto min-w-[8rem] z-50 bg-white border border-[#f6f6f6] p-2 rounded-bl-md rounded-br-md shadow-lg transition-all duration-500 invisible opacity-0 group-hover:visible group-hover:opacity-100 border-t border-t-primary menu__after">
                            <div className="relative child__drop"> 
                                <Link href={"#"} className="text-base font-medium block px-3 py-1.5 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Media</Link>
                                <div className="absolute top-0 left-auto -right-[8rem] w-auto min-w-[8rem] z-50 bg-white border border-[#f6f6f6] p-2 rounded-tr-md rounded-br-md shadow-lg transition-all duration-500  group-hover:visible group-hover:opacity-100 border-l border-l-primary menu hidden"> 
                                    <Link href={"/blogs"} className="text-base font-medium block px-3 py-1.5 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Blogs</Link>
                                    <Link href={"#"} className="text-base font-medium block px-3 py-1.5 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Videos</Link>
                                </div>
                            </div>
                            <div className="relative child__drop"> 
                                <Link href={"#"} className="text-base font-medium block px-3 py-1.5 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Brands</Link>
                                <div className="absolute top-0 left-auto -right-[14.5rem] w-auto min-w-[14rem] z-50 bg-white border border-[#f6f6f6] p-2 rounded-tr-md rounded-br-md shadow-lg transition-all duration-500  group-hover:visible group-hover:opacity-100 border-l border-l-primary menu hidden"> 
                                    <Link href={"#"} className="text-base font-medium block px-3 py-1.5 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Brand  Information</Link>
                                    <Link href={"#"} className="text-base font-medium block px-3 py-1.5 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Brand Workshops</Link>
                                    <Link href={"#"} className="text-base font-medium block px-3 py-1.5 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Brand Product Launches</Link>
                                    <Link href={"#"} className="text-base font-medium block px-3 py-1.5 rounded-md text-[#303d4e] hover:bg-[#fcd998] hover:text-dark">Brand Deals</Link>
                                </div>
                            </div> 
                        </div> 
                    </li>  
                </ul>
            </div>
            <div className="inline-flex items-center gap-5"> 
                <div className="inline-flex items-center">  
                    {
                        (!houseBuilderAccessToken) &&
                        <>
                            <Dropdown
                                menu={{items}}
                                trigger={['click']}
                                onClick={handleLoginMenu}
                            >
                                <a onClick={(e) => e.preventDefault()} className="px-2 py-1.5 mr-3 sm:text-base text-sm capitalize text-[#000] hover:text-primary group-hover:text-primary inline-flex items-center border rounded-md cursor-pointer">
                                    <PiUserCircleLight className="text-xl md:text-2xl mr-2 hidden sm:inline-block" />
                                    <span>Login</span>
                                    <GoChevronDown className="text-lg transition-all duration-200 group-hover:rotate-180 hidden sm:inline-block" />
                                </a>
                            </Dropdown>
                            <Dropdown
                                menu={{items}}
                                trigger={['click']}
                                onClick={handleSignupMenu}
                            >
                                <a onClick={(e) => e.preventDefault()} className="pr-1.5 pl-2.5 py-1.5 sm:text-base text-sm capitalize text-[#000] bg-primary hover:text-white group-hover:text-white inline-flex items-center border border-primary rounded-md cursor-pointer"> 
                                    <span>Sign up</span>
                                    <GoChevronDown className="text-lg transition-all duration-200 group-hover:rotate-180 hidden sm:inline-block" />
                                </a>
                            </Dropdown>
                        </>
                    }
                    {
                        (houseBuilderAccessToken) &&
                        <div className="group relative">
                            <button className="mr-3 text-base capitalize text-[#000] hover:text-primary group-hover:text-primary inline-flex items-center text-left"> 
                                <Image
                                    src={"/images/icons/user.png"}
                                    width={48} height={48}
                                    alt="user"
                                    className="rounded-full border border-border-color"
                                />
                                <div className="pl-3">
                                    <p className="mb-0 whitespace-nowrap leading-[1]">{ houseBuilderLoggedInUserName }</p>
                                    <span className="text-[13px] text-muted">Architect</span>
                                </div>
                            </button>
                            <div className="absolute top-[calc(100%+2px)] w-auto min-w-[15rem] z-50 bg-white border border-[#f6f6f6] px-2 py-4 rounded-bl-md rounded-br-md shadow-lg transition-all duration-500 invisible opacity-0 group-hover:visible group-hover:opacity-100 border-t border-t-primary menu__after"> 
                                <Link href={"/user"} className="text-base px-3 py-1.5 rounded-md capitalize text-muted tracking-wide flex items-center gap-2 hover:bg-bg-light">
                                    <AiOutlineLineChart />
                                    Dashboard
                                </Link>
                                <Link href={"/user/kyc"} className="text-base px-3 py-1.5 rounded-md capitalize text-muted tracking-wide flex items-center gap-2 hover:bg-bg-light">
                                    <AiOutlineUser />
                                    Profile
                                </Link>
                                <Link href={"/user/catalouge"} className="text-base px-3 py-1.5 rounded-md capitalize text-muted tracking-wide flex items-center gap-2 hover:bg-bg-light">
                                    <AiOutlineFileText />
                                    Profile Management
                                </Link>
                                <Link href={"/user"} className="text-base px-3 py-1.5 rounded-md capitalize text-muted tracking-wide flex items-center gap-2 hover:bg-bg-light">
                                    <PiSuitcaseSimple className="text-lg" />
                                    Portfolio
                                </Link>
                                <Link href={"/user"} className="text-base px-3 py-1.5 rounded-md capitalize text-muted tracking-wide flex items-center gap-2 hover:bg-bg-light">
                                    <PiSuitcaseSimple className="text-lg" />
                                    Projects
                                </Link> 
                                <Link href={"/service-provider-login"} className="text-base px-3 py-1.5 rounded-md capitalize text-muted tracking-wide flex items-center gap-2 hover:bg-bg-light">
                                    <LiaSignOutAltSolid className="text-lg" />
                                    Log Out
                                </Link>
                            </div>
                        </div>  
                    }
                </div>
                <button onClick={()=>setResMenu(!resMenu)} className="inline-block xl:hidden">
                    <SlMenu className="text-2xl" />
                </button>       
            </div>
        </div>  
        {/* container */}

        <MobileMenu resMenu={resMenu} setResMenu={setResMenu} />
    </nav>
  )
}

export default Header
