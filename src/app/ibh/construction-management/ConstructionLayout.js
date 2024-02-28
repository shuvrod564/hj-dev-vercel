'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HiOutlineDocumentText, HiOutlineLocationMarker } from 'react-icons/hi'
import { IoBriefcaseOutline, IoChevronBackCircle, IoConstructOutline } from "react-icons/io5";
import { RiBankCardLine } from 'react-icons/ri'
import { AiOutlineBank, AiOutlineUserAdd } from 'react-icons/ai'
import { MdAttachMoney, MdCardMembership, MdOutlineDesignServices, MdVerifiedUser } from 'react-icons/md' 
import { BsChatQuote } from 'react-icons/bs'

const ConstructionLayout = ({children}) => {

    const router = usePathname();

    return (
        <>
            <div className="py-8 md:py-12 lg:py-16">
                <div className="container"> 
                    <Link href={"/ibh/planing"} className="inline-flex gap-2 items-center mb-2">
                        <IoChevronBackCircle className="text-primary" />
                        <span>Back</span>
                    </Link>
                    <div className="shadow-box rounded-xl">
                        <div className="flex">
                            <div className="w-full md:w-[380px] border-r-2 border-[#f0efe9] p-3 md:p-4">
                                <Link href={"/ibh/construction-management/boq"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/ibh/construction-management/boq' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/ibh/construction-management/boq' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}> 
                                        <MdOutlineDesignServices />
                                    </figure>
                                    <span>BOQ</span>
                                </Link>
                                <Link href={"#"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/ibh/budgeting' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/ibh/budgeting' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}>
                                        <MdAttachMoney />
                                    </figure>
                                    <span>Find a Contractor</span>
                                </Link>
                                <Link href={"#"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/ibh/liasoning' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/ibh/liasoning' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}>
                                        <BsChatQuote />
                                    </figure>
                                    <span>Planning</span>
                                </Link>
                                <Link href={"#"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/ibh/construction-management' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/ibh/construction-management' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}>
                                        <IoConstructOutline />
                                    </figure>
                                    <span>Execution</span>
                                </Link>
                                <Link href={"#"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/user/catalouge' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/user/catalouge' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}>
                                        <AiOutlineBank />
                                    </figure>
                                    <span>Payments</span>
                                </Link>
                                 
                            </div>
                            <div className="w-full md:w-[clac(100%-380px)] min-h-[490px]">
                                <div className="p-4 sm:p-6 md:p-8 relative overflow-hidden"> 
                                    {children}
                                </div>
                            </div>
                        </div> 
                        {/* flex */}
                    </div>
                    {/* shadow */}
                </div>
                {/* container */}
            </div>
        </>
    )
}

export default ConstructionLayout
