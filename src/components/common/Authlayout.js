import Image from 'next/image'
import React from 'react'

const Authlayout = ({children}) => {
  return (
    <div className="relative min-h-screen">
        <Image
            src={"/images/banners/auth-bg.webp"}
            width={1920} height={1080}
            alt="Auth Bg"
            className="absolute top-0 left-0 right-0 bottom-0 object-cover object-center z-0 w-full h-full"
        />
        <div className="relative z-50">
        {children}
        </div>
    </div>
  )
}

export default Authlayout
