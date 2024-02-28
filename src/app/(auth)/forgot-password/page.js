import { EnvelopeIcon } from '@components/components/shared/Icons'
import { Checkbox } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "Login",
    description: "Login to your account"
}

const Login = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container">
        <div className=""> 
          <div className="w-full lg:w-[500px] bg-white shadow rounded-lg p-10 mx-auto">
            <Link href={"/"} className="w-20 h-20 rounded-md bg-white shadow-md flex justify-center items-center mb-4">
              <Image src={"/images/fav.png"} width={54} height={50} alt="House Journey" />
            </Link>
            <h1 className="text-cente font-bold text-2xl text-[#2d2d2e]">Reset Your Password</h1>

            <form className="mt-6">
              <div className="mb-4">
                <label htmlFor="email" className="text-base font-bold text-[#2a2a2a] block mb-1">Email</label>
                <div className="relative"> 
                  <input 
                    type="text" 
                    className="w-full h-14 bg-white border border-[#333] shadow-sm rounded-md pl-14 pr-3 hover:border-primary focus:border-primary transition-all duration-150"  
                    placeholder="Enter your email address" 
                  />
                  <EnvelopeIcon 
                    className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5"
                  />
                </div>
              </div> 
              <div className="mb-4 pt-3">
                <button className="btn-primary w-full text-center justify-center !py-4 !rounded-full tracking-widest !transition">Reset Password</button>
              </div>
              <p className="text-center text-[#777]">Back to <Link href={"/login"} className="text-dark underline">Log in</Link></p>
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
