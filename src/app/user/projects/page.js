import Link from 'next/link'
import React from 'react'
import { FaCheck, FaUsers } from 'react-icons/fa'
import { IoChevronBackCircle } from 'react-icons/io5'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'

export const metadata = {
    title: "Dashboard"
}

const Page = () => {
  return (
    <div className="py-10">
      <div className="container">
        <Link href={"/user"} className="inline-flex gap-2 items-center mb-2 text-muted">
            <IoChevronBackCircle className="text-dark text-lg" />
            <span>Back</span>
        </Link>
        <div className="shadow-box rounded-xl p-5 lg:p-8">
            <h1 className="h3 mb-4">Projects</h1>
 
             
            <table className="table text-left text-base w-full bg-bg-light">
                <thead>
                    <th>Date</th>
                    <th>Project Name</th>
                    <th>Project ID</th>
                    <th>Client Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr>
                        <td>20 November, 2023</td>
                        <td>3BHK - Mumbai</td>
                        <td>HJCP01</td>
                        <td>Sahil Narkar</td>
                        <td><span className="px-3 py-1 rounded-md text-sm bg-[#FDE8E4] text-[#F06548]">Awaiting Approval</span></td>
                        <td>
                            <div className="inline-flex gap-2"> 
                                <button className="w-6 h-6 rounded-full bg-[#D2E4FD] text-[#406EF0] text-[12px] inline-flex justify-center items-center"><MdOutlineRemoveRedEye/></button>
                                <button className="w-6 h-6 rounded-full bg-[#DAF4F0] text-[#0AB39C] text-[12px] inline-flex justify-center items-center"><FaCheck/></button>
                                <button className="w-6 h-6 rounded-full bg-[#FCE8E4] text-[#F06547] text-sm inline-flex justify-center items-center"><RiDeleteBinLine/></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>20 November, 2023</td>
                        <td>3BHK - Mumbai</td>
                        <td>HJCP01</td>
                        <td>Sahil Narkar</td>
                        <td><span className="px-3 py-1 rounded-md text-sm bg-[#DAF4F0] text-[#0AB39C]">Approved</span></td>
                        <td>
                            <div className="inline-flex gap-2"> 
                                <button className="w-6 h-6 rounded-full bg-[#D2E4FD] text-[#406EF0] text-[12px] inline-flex justify-center items-center"><MdOutlineRemoveRedEye/></button>
                                <button className="w-6 h-6 rounded-full bg-[#DAF4F0] text-[#0AB39C] text-[12px] inline-flex justify-center items-center"><FaCheck/></button>
                                <button className="w-6 h-6 rounded-full bg-[#FCE8E4] text-[#F06547] text-sm inline-flex justify-center items-center"><RiDeleteBinLine/></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>20 November, 2023</td>
                        <td>3BHK - Mumbai</td>
                        <td>HJCP01</td>
                        <td>Sahil Narkar</td>
                        <td><span className="px-3 py-1 rounded-md text-sm bg-[#FEF4E4] text-[#F7B84B]">Pending</span></td>
                        <td>
                            <div className="inline-flex gap-2"> 
                                <button className="w-6 h-6 rounded-full bg-[#D2E4FD] text-[#406EF0] text-[12px] inline-flex justify-center items-center"><MdOutlineRemoveRedEye/></button>
                                <button className="w-6 h-6 rounded-full bg-[#DAF4F0] text-[#0AB39C] text-[12px] inline-flex justify-center items-center"><FaCheck/></button>
                                <button className="w-6 h-6 rounded-full bg-[#FCE8E4] text-[#F06547] text-sm inline-flex justify-center items-center"><RiDeleteBinLine/></button>
                            </div>
                        </td>
                    </tr> 
                    <tr>
                        <td>20 November, 2023</td>
                        <td>3BHK - Mumbai</td>
                        <td>HJCP01</td>
                        <td>Sahil Narkar</td>
                        <td><span className="px-3 py-1 rounded-md text-sm bg-[#FEF4E4] text-[#F7B84B]">Pending</span></td>
                        <td>
                            <div className="inline-flex gap-2"> 
                                <button className="w-6 h-6 rounded-full bg-[#D2E4FD] text-[#406EF0] text-[12px] inline-flex justify-center items-center"><MdOutlineRemoveRedEye/></button>
                                <button className="w-6 h-6 rounded-full bg-[#DAF4F0] text-[#0AB39C] text-[12px] inline-flex justify-center items-center"><FaCheck/></button>
                                <button className="w-6 h-6 rounded-full bg-[#FCE8E4] text-[#F06547] text-sm inline-flex justify-center items-center"><RiDeleteBinLine/></button>
                            </div>
                        </td>
                    </tr> 
                    <tr>
                        <td>20 November, 2023</td>
                        <td>3BHK - Mumbai</td>
                        <td>HJCP01</td>
                        <td>Sahil Narkar</td>
                        <td><span className="px-3 py-1 rounded-md text-sm bg-[#FEF4E4] text-[#F7B84B]">Pending</span></td>
                        <td>
                            <div className="inline-flex gap-2"> 
                                <button className="w-6 h-6 rounded-full bg-[#D2E4FD] text-[#406EF0] text-[12px] inline-flex justify-center items-center"><MdOutlineRemoveRedEye/></button>
                                <button className="w-6 h-6 rounded-full bg-[#DAF4F0] text-[#0AB39C] text-[12px] inline-flex justify-center items-center"><FaCheck/></button>
                                <button className="w-6 h-6 rounded-full bg-[#FCE8E4] text-[#F06547] text-sm inline-flex justify-center items-center"><RiDeleteBinLine/></button>
                            </div>
                        </td>
                    </tr> 
                    <tr>
                        <td>20 November, 2023</td>
                        <td>3BHK - Mumbai</td>
                        <td>HJCP01</td>
                        <td>Sahil Narkar</td>
                        <td><span className="px-3 py-1 rounded-md text-sm bg-[#FEF4E4] text-[#F7B84B]">Pending</span></td>
                        <td>
                            <div className="inline-flex gap-2"> 
                                <button className="w-6 h-6 rounded-full bg-[#D2E4FD] text-[#406EF0] text-[12px] inline-flex justify-center items-center"><MdOutlineRemoveRedEye/></button>
                                <button className="w-6 h-6 rounded-full bg-[#DAF4F0] text-[#0AB39C] text-[12px] inline-flex justify-center items-center"><FaCheck/></button>
                                <button className="w-6 h-6 rounded-full bg-[#FCE8E4] text-[#F06547] text-sm inline-flex justify-center items-center"><RiDeleteBinLine/></button>
                            </div>
                        </td>
                    </tr> 
                    <tr>
                        <td>20 November, 2023</td>
                        <td>3BHK - Mumbai</td>
                        <td>HJCP01</td>
                        <td>Sahil Narkar</td>
                        <td><span className="px-3 py-1 rounded-md text-sm bg-[#FEF4E4] text-[#F7B84B]">Pending</span></td>
                        <td>
                            <div className="inline-flex gap-2"> 
                                <button className="w-6 h-6 rounded-full bg-[#D2E4FD] text-[#406EF0] text-[12px] inline-flex justify-center items-center"><MdOutlineRemoveRedEye/></button>
                                <button className="w-6 h-6 rounded-full bg-[#DAF4F0] text-[#0AB39C] text-[12px] inline-flex justify-center items-center"><FaCheck/></button>
                                <button className="w-6 h-6 rounded-full bg-[#FCE8E4] text-[#F06547] text-sm inline-flex justify-center items-center"><RiDeleteBinLine/></button>
                            </div>
                        </td>
                    </tr> 
                </tbody>
            </table>

        </div>
        {/* shadow box */}

      </div>
      {/* container */}
    </div>
  )
}

export default Page
