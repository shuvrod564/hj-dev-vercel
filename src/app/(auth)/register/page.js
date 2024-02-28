'use client';
import { Checkbox } from 'antd'
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

// export const metadata = {
//     title: "Login",
//     description: "Login to your account"
// }


const Login = () => {

  const router = useRouter();
  const { control, register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handelRegister = async(formData)=>{
      try {
          setIsLoading(true)
          const url = process.env.NEXT_PUBLIC_API_URL+'/register';
          const res = await axios.post(url, formData);
          if(res.data.status == 'success'){
              console.log("message: ", res.data.message);
              setIsLoading(false);
              setSuccessMessage(res.data.message)
              router.push('/register/otp?email='+formData?.email);
          }
          else{
              setApiError(res.data.message);
              setIsLoading(false);
          }
      } catch (error) {
        if(error?.response?.data?.message){
          setApiError(error?.response?.data?.message);
        } else{
          setApiError('Somthing went wrong');
        }
        setIsLoading(false);
      }
  }

  return (
    <div className="min-h-screen flex items-center">
      <div className="container">
        <div className=""> 
          <div className="w-full lg:w-[800px] bg-white rounded-lg shadow px-10 py-8 mx-auto">
            <Link href={"/"} className="w-20 h-20 rounded-md bg-white shadow-md flex justify-center items-center mx-auto mb-4">
              <Image src={"/images/fav.png"} width={54} height={50} alt="House Journey" />
            </Link>
            <h1 className="text-center text-2xl text-[#2d2d2e] !font-bold">Welcome to House Journey</h1>
            
            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit(handelRegister)}>
              <div>
                <label htmlFor="name" className="text-base font-bold text-[#2a2a2a] block mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow-sm rounded-md pl-14 pr-3 text-base bg-[url('/images/icons/user.svg')] bg-[length:20px_20px] bg-no-repeat" 
                  style={{backgroundPosition:"center left 1rem"}}
                  placeholder="Enter your name" 
                  {...register(`name`, { required: true })}
                />
                {errors.name && <p className='text-red pt-0.5'>Name is required.</p>}
              </div> 
              <div>
                <label htmlFor="email" className="text-base font-bold text-[#2a2a2a] block mb-1">Email</label>
                <input 
                  type="text" 
                  id="email"
                  className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow-sm rounded-md pl-14 pr-3 text-base bg-[url('/images/icons/envelope.svg')] bg-[length:20px_20px] bg-no-repeat" 
                  style={{backgroundPosition:"center left 1rem"}}
                  placeholder="Enter your email address" 
                  {...register(`email`, { required: true })}
                />
                {errors.email && <p className='text-red pt-0.5'>Email is required.</p>}
              </div>
              <div>
                <label htmlFor="phone" className="text-base font-bold text-[#2a2a2a] block mb-1">Phone</label>
                <input 
                  type="text" 
                  id="phone"
                  className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow-sm rounded-md pl-14 pr-3 text-base bg-[url('/images/icons/phone-call.svg')] bg-[length:20px_20px] bg-no-repeat" 
                  style={{backgroundPosition:"center left 1rem"}}
                  placeholder="Enter your phone number" 
                  {...register(`phone`, { required: true })}
                />
                {errors.phone && <p className='text-red pt-0.5'>Phone is required.</p>}
              </div>
              <div>
                <label htmlFor="password" className="text-base font-bold text-[#2a2a2a] block mb-1">Password</label>
                <input 
                  type="password" 
                  id="password"
                  className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow-sm rounded-md pl-14 pr-3 text-base bg-[url('/images/icons/lock.svg')] bg-[length:20px_20px] bg-no-repeat" 
                  style={{backgroundPosition:"center left 1rem"}}
                  placeholder="Enter your password" 
                  {...register(`password`, { required: true })}
                />
                {errors.password && <p className='text-red pt-0.5'>Password is required.</p>}
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
              {
                (apiError || successMessage) && 
                  <div className='md:col-span-2'>
                    <p className={`p-4 md:p-5 rounded-lg border border-border-color bg-bg-light text-center ${ (apiError) ? 'text-red' : 'text-primary' } font-medium `}>{ (apiError) ? apiError : (successMessage) ? successMessage : '' }</p>
                  </div>
                  
              }
              <div className="mb-4 pt-3 text-center md:col-span-2">
                <button type="submit" className="btn-primary w-full md:w-1/2 text-center justify-center !py-4 !text-xl tracking-widest !transition">
                    {isLoading ? (
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.963 7.963 0 01-2-4.291H0c0 3.042 1.135 5.824 3 7.963l3-3.672zM12 20c2.085 0 3.978-.663 5.555-1.791l3 3.672A7.963 7.963 0 0120 17.291h-4c0 2.26-.879 4.348-2.334 5.93A10.018 10.018 0 0112 22a9.963 9.963 0 01-7.666-3.662A10.018 10.018 0 011 17.291l3-3.672A7.963 7.963 0 019 16.291h2a8 8 0 010 8z"
                            ></path>
                        </svg>
                    ) : (
                      'Register'
                    )}
                </button>
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
