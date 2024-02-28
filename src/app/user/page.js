import Link from 'next/link'
import React from 'react'
import { FaCheck, FaUsers } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'

export const metadata = {
    title: "Dashboard"
}

const page = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="shadow-box rounded-xl p-5 lg:p-8">
            <h1 className="h3">Dasboard</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div>
                    <div className="p-4 lg:p-5  bg-[#fdf2ff] rounded-lg">
                        <figure className="w-12 h-12 rounded-full flex justify-center items-center border border-primary bg-primary mb-2">
                            <FaUsers className="text-xl lg:text-2xl text-white" />
                        </figure>
                        <h2 className="text-xl md:text-xl font-semibold text-[#333]">Active Clients</h2>
                        <p className="h3 mb-0 mt-3">003</p>
                    </div>
                </div>
                <div>
                    <Link href={"/user/porfolios"} className="p-4 lg:p-5 bg-[#ecf9ff] rounded-lg">
                        <figure className="w-12 h-12 rounded-full flex justify-center items-center border border-primary bg-primary mb-2">
                            <FaUsers className="text-xl lg:text-2xl text-white" />
                        </figure>
                        <h2 className="text-xl md:text-xl font-semibold text-[#333]">My Workspace (Portfolio) </h2>
                        <p className="h3 mb-0 mt-3">003</p>
                    </Link>
                </div>
                <div>
                    <Link href={"/user/projects"} className="p-4 lg:p-5 bg-[#ecf1fd] rounded-lg">
                        <figure className="w-12 h-12 rounded-full flex justify-center items-center border border-primary bg-primary mb-2">
                            <FaUsers className="text-xl lg:text-2xl text-white" />
                        </figure>
                        <h2 className="text-xl md:text-xl font-semibold text-[#333]">My Workspace (Projects) </h2>
                        <p className="h3 mb-0 mt-3">003</p>
                    </Link>
                </div>
            </div>


            <h3 className="h4 mt-9 font-semibold">Order Details</h3>
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
                </tbody>
            </table>

        </div>
        {/* shadow box */}

      </div>
      {/* container */}
    </div>
  )
}

export default page
