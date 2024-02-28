'use client'
import { usePathname } from 'next/navigation'
import React, { Suspense } from 'react'
import Header from './Header';
import Footer from './Footer'; 
import Authlayout from './Authlayout';


const Layout = ({children}) => {
    const routerPath = usePathname();
 

    if( 
      routerPath === '/login' || 
      routerPath === '/register' || 
      routerPath === '/register/otp' || 
      routerPath === '/forgot-password' || 
      routerPath === '/service-provider-type' || 
      routerPath === '/service-provider-type/signup' || 
      routerPath === '/service-provider-login' 
      ) {
        return <Suspense>
          <Authlayout>
          {children}
          </Authlayout>
        </Suspense>
    }


  return (
    <Suspense>
     <Header />
     {children}
     <Footer /> 
    </Suspense>
  )
}

export default Layout
