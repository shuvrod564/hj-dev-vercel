'use client'
import { EnvelopeIcon, LockIcon } from '@components/components/shared/Icons'
import { BacktoPrevPage } from '@components/components/shared/BacktoPrevPage'
import { Checkbox } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import axios from 'axios'

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

  useEffect(() => {  
      const houseBuilderAccessToken = localStorage.getItem('houseBuilderAccessToken');
      if(houseBuilderAccessToken){
          router.push('/');
      }
  }, [])

  const handelLogin = async(formData)=>{
    try {
        setIsLoading(true)
        const url = process.env.NEXT_PUBLIC_API_URL+'/user_login';
        const res = await axios.post(url, formData);
        console.log("res: ",res.data.status);
        if(res.data.status == 'success'){
            // setIsLoading(false);
            setSuccessMessage("Success!");
            localStorage.setItem('houseBuilderAccessToken', res.data.accessToken);
            localStorage.setItem('houseBuilderLoggedInUserName', res.data.name);
            localStorage.setItem('houseBuilderLoggedInUserEmail', res.data.email);
            setTimeout(() => {
              router.push('/');
            }, 1000);
        }
        else{
            setApiError(res.message);
            setIsLoading(false);
        }
    } catch (error) {
      console.log("error: ", error);
      if(error?.response?.data?.error){
        setApiError(error?.response?.data?.error);
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
          <div className="w-full lg:w-[500px] bg-white rounded-lg shadow p-10 mx-auto">
            <BacktoPrevPage />
            <Link href={"/"} className="w-20 h-20 rounded-md bg-white shadow-md flex justify-center items-center mx-aut mb-5">
              <Image src={"/images/fav.png"} width={54} height={50} alt="House Journey" />
            </Link>
            <h1 className="text-cente text-2xl text-[#2d2d2e] font-bold">Hello! Welcome back</h1>

            <form className="mx-auto mt-6" onSubmit={handleSubmit(handelLogin)}>
              <div className="mb-5">
                <label htmlFor="email" className="text-base font-bold text-[#2a2a2a] block mb-1">Email</label>
                <div className="relative"> 
                  <input 
                    type="text" 
                    id="email"
                    className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow rounded-md pl-14 pr-3 text-base"  
                    placeholder="Enter email ID."                    
                    {...register(`email`, { required: true })}
                  />
                  <EnvelopeIcon 
                    className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5"
                  />
                  {errors.email && <p className='text-red pt-0.5'>Email is required.</p>}
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="text-base font-bold text-[#2a2a2a] block mb-1">Password</label>
                <div className="relative"> 
                  <input 
                    type="password" 
                    id="password"
                    className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow rounded-md pl-14 pr-3 text-base"  
                    placeholder="Enter password" 
                    {...register(`password`, { required: true })}
                  />
                  <LockIcon className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5" />
                  {errors.password && <p className='text-red pt-0.5'>Password is required.</p>}
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
                <div className="inline-flex">
                  <Checkbox>Remember Me</Checkbox>
                </div>
                <Link href={"/forgot-password"} className="text-base text-secondary">Forgot Password</Link>
              </div>
              {
                (apiError || successMessage) && 
                  <div className='md:col-span-2'>
                    <p className={`p-4 md:p-5 rounded-lg border border-border-color bg-bg-light text-center ${ (apiError) ? 'text-red' : 'text-primary' } font-medium `}>{ (apiError) ? apiError : (successMessage) ? successMessage : '' }</p>
                  </div>
                  
              }
              <div className="mb-4 pt-3">
                <button type="submit" className="btn-primary w-full text-center !font-bold justify-center !py-4 !rounded-full !text-xl tracking-widest !transition">
                  {
                    isLoading ? (
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
                      'Log in'
                    )}
                </button>
              </div>
              <p className="text-center text-[#777] text-sm sm:text-base">Don&apos;t have an account? Please <Link href={"/register"} className="text-dark underline">Register</Link></p>
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
