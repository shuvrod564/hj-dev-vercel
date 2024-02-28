import { Checkbox } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Select } from 'antd';
import { BacktoPrevPage } from '@components/components/shared/BacktoPrevPage';

export const metadata = {
    title: "Sign Up",
    description: "Sign Up to your account"
}

const Login = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container">
        <div className=""> 
          <div className="w-full lg:w-[800px] bg-white rounded-lg shadow px-10 py-8 mx-auto">
            <BacktoPrevPage />
            <Link href={"/"} className="w-20 h-20 rounded-md bg-white shadow-md flex justify-center items-center mx-auto mb-4">
              <Image src={"/images/fav.png"} width={54} height={50} alt="House Journey" />
            </Link>
            <h1 className="text-center text-2xl text-[#2d2d2e] !font-bold">Welcome to House Journey</h1>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-base font-bold text-[#2a2a2a] block mb-1">Entity Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow-sm rounded-md pl-14 pr-3 text-base bg-[url('/images/icons/user.svg')] bg-[length:20px_20px] bg-no-repeat" 
                  style={{backgroundPosition:"center left 1rem"}}
                  placeholder="Enter entity name" 
                />
              </div> 
              <div>
                <label htmlFor="type" className="text-base font-bold text-[#2a2a2a] block mb-1">Entity Type</label>
                <Select
                  showSearch
                  placeholder="Select entity type"
                  optionFilterProp="children"
                  // onChange={onChange}
                  // onSearch={onSearch}
                  // filterOption={filterOption} 
                  className="w-full h-14 register__select"
                  options={[
                    {
                      value: 'Private Ltd Company',
                      label: 'Private Ltd Company',
                    },
                    {
                      value: 'Public Ltd Company',
                      label: 'Public Ltd Company',
                    },
                    {
                      value: 'Unlimited Company',
                      label: 'Unlimited Company',
                    },
                    {
                      value: 'Sole Proprietorship',
                      label: 'Sole Proprietorship',
                    },
                    {
                      value: 'Joint Hindu Family Business',
                      label: 'Joint Hindu Family Business',
                    },
                    {
                      value: 'Partnership',
                      label: 'Partnership',
                    },
                    {
                      value: 'Cooperatives',
                      label: 'Cooperatives',
                    },
                    {
                      value: 'Limited Liability Partnership (LLP)',
                      label: 'Limited Liability Partnership (LLP)',
                    },
                    {
                      value: 'Non-Government Organization (NGO)',
                      label: 'Non-Government Organization (NGO)',
                    },
                    {
                      value: 'One Person Company (OPC)',
                      label: 'One Person Company (OPC)',
                    },
                    {
                      value: 'Foreign Company',
                      label: 'Foreign Company',
                    },
                    {
                      value: 'Holding Company',
                      label: 'Holding Company',
                    },
                  ]} 
                />
              </div> 
              <div>
                <label htmlFor="email" className="text-base font-bold text-[#2a2a2a] block mb-1">Email</label>
                <input 
                  type="text" 
                  className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow-sm rounded-md pl-14 pr-3 text-base bg-[url('/images/icons/envelope.svg')] bg-[length:20px_20px] bg-no-repeat" 
                  style={{backgroundPosition:"center left 1rem"}}
                  placeholder="Enter your email address" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-base font-bold text-[#2a2a2a] block mb-1">Phone</label>
                <input 
                  type="text" 
                  id="phone"
                  className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow-sm rounded-md pl-14 pr-3 text-base bg-[url('/images/icons/phone-call.svg')] bg-[length:20px_20px] bg-no-repeat" 
                  style={{backgroundPosition:"center left 1rem"}}
                  placeholder="Enter your phone number" 
                />
              </div>
              <div>
                <label htmlFor="otp" className="text-base font-bold text-[#2a2a2a] block mb-1">OTP</label>
                <input 
                  type="text" 
                  id="otp"
                  className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow-sm rounded-md pl-14 pr-3 text-base bg-[url('/images/icons/lock.svg')] bg-[length:20px_20px] bg-no-repeat" 
                  style={{backgroundPosition:"center left 1rem"}}
                  placeholder="Enter your otp" 
                />
              </div>
              {/* <div>
                <label htmlFor="email" className="text-base font-bold text-[#2a2a2a] block mb-1">Password</label>
                <input 
                  type="password" 
                  className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow-sm rounded-md pl-14 pr-3 text-base bg-[url('/images/icons/lock.svg')] bg-[length:20px_20px] bg-no-repeat" 
                  style={{backgroundPosition:"center left 1rem"}}
                  placeholder="*******" 
                />
              </div> */}
              
              <div className="mb-4 pt-3 text-center md:col-span-2">
                <button className="btn-primary w-full md:w-1/2 text-center justify-center !py-4 !text-xl tracking-widest !transition">Register</button>
              <p className="text-center text-[#777] text-sm sm:text-base mt-4">Already have an account. <Link href={"/service-provider-login"} className="text-dark underline">Login</Link></p>
              </div>
            </form>
          </div>
          {/* col */}
        </div>
      </div>
      {/* container */}
    </div>
  )
}

export default Login
