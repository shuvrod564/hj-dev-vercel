import { BacktoPrevPage } from '@components/components/shared/BacktoPrevPage'
import { Architect, ContructorIcon, DiscussIcon, InteriorIcon, PMCIcon, ServiceProviderIcon } from '@components/components/shared/Icons'
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
          <div className="w-full lg:w-[700px] bg-white rounded-lg shadow px-10 py-8 mx-auto">
            <BacktoPrevPage />
            <Link href={"/"} className="w-20 h-20 rounded-md bg-white shadow-md flex justify-center items-center mx-auto mb-4">
              <Image src={"/images/fav.png"} width={54} height={50} alt="House Journey" />
            </Link>
            <h1 className="text-center text-2xl text-dark !font-bold">Are You a</h1>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 justify-center">
              <div>
                <Link href={"/service-provider-type/signup"} className="w-full py-3 font-medium border-2 border-primary bg-primary text-dark text-center rounded-lg hover:bg-transparent hover:text-primary">
                  <Architect className="mx-auto mb-2" />
                  Architect
                </Link>
              </div>
              <div>
                <Link href={"/service-provider-type/signup"} className="w-full py-3 font-medium border-2 border-primary bg-primary text-dark text-center rounded-lg hover:bg-transparent hover:text-primary">
                  <DiscussIcon className="mx-auto mb-2" />
                  Liasoning
                </Link>
              </div>
              <div>
                <Link href={"/service-provider-type/signup"} className="w-full py-3 font-medium border-2 border-primary bg-primary text-dark text-center rounded-lg hover:bg-transparent hover:text-primary">
                  <PMCIcon className="mx-auto mb-2" />
                  PMC
                </Link>
              </div>
              <div>
                <Link href={"/service-provider-type/signup"} className="w-full py-3 font-medium border-2 border-primary bg-primary text-dark text-center rounded-lg hover:bg-transparent hover:text-primary">
                  <ContructorIcon className="mx-auto mb-2" />
                  Contractor
                </Link>
              </div>
              <div>
                <Link href={"/service-provider-type/signup"} className="w-full py-3 font-medium border-2 border-primary bg-primary text-dark text-center rounded-lg hover:bg-transparent hover:text-primary">
                  <ServiceProviderIcon className="mx-auto mb-2" />
                  Supplier
                </Link>
              </div>
              
              <div>
                <Link href={"/service-provider-type/signup"} className="w-full py-3 font-medium border-2 border-primary bg-primary text-dark text-center rounded-lg hover:bg-transparent hover:text-primary">
                  <InteriorIcon className="mx-auto mb-2" />
                  Interior Designer
                  </Link>
              </div>
              
              
               
            </div>
          </div>
          {/* col */}
        </div>
      </div>
      {/* container */}
    </div>
  )
}

export default Login
