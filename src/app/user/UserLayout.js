'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HiOutlineDocumentText, HiOutlineLocationMarker } from 'react-icons/hi'
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiBankCardLine } from 'react-icons/ri'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { MdCardMembership } from 'react-icons/md' 

const UserLayout = ({children}) => {

    const router = usePathname();

    return (
        <>
            <div className="py-20">
                <div className="container"> 
                    <div className="shadow-box rounded-xl">
                        <div className="flex">
                            <div className="w-full md:w-[380px] border-r-2 border-[#f0efe9] p-3 md:p-4">
                                <Link href={"/user/kyc"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/user/kyc' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/user/kyc' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}> 
                                        <HiOutlineDocumentText />
                                    </figure>
                                    <span>KYC Details</span>
                                </Link>
                                <Link href={"/user/address"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/user/address' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/user/address' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}>
                                        <HiOutlineLocationMarker />
                                    </figure>
                                    <span>Address Information</span>
                                </Link>
                                <Link href={"/user/licence"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/user/licence' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/user/licence' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}>
                                        <MdCardMembership />
                                    </figure>
                                    <span>Licence & Membership</span>
                                </Link>
                                <Link href={"/user/bank-detail"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/user/bank-detail' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/user/bank-detail' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}>
                                        <RiBankCardLine />
                                    </figure>
                                    <span>Bank Details</span>
                                </Link>
                                <Link href={"/user/catalouge"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/user/catalouge' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/user/catalouge' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}>
                                        <IoBriefcaseOutline />
                                    </figure>
                                    <span>Business Page </span>
                                </Link>
                                <Link href={"/user/architects"} className={`flex items-center text-base font-medium mb-3 bg-[#f9f9f9] p-3 rounded-md shadow ${router == '/user/architects' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>
                                    <figure className={`w-9 h-9 shadow-xl rounded-full text-xl flex items-center justify-center mr-2 ${router == '/user/architects' ? 'text-primary bg-dark' : 'bg-[#ecefee] text-dark'}`}>
                                        <AiOutlineUserAdd />
                                    </figure>
                                    <span>Add Architects</span>
                                </Link>
                            </div>
                            <div className="w-full md:w-[clac(100%-380px)] min-h-[490px]">
                                <div className="p-4 sm:p-6 md:p-8"> 
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

export default UserLayout
