import React from 'react'
import {PMCSidebar} from './PMCSidebar'

// import dynamic from 'next/dynamic';

// const PMCSidebar = dynamic(() => import('./PMCSidebarClient'), { ssr: false });


export function PMCLayout({children}) {
    

    return (
        <>
            <div className=" min-h-screen p-3 bg-bg-light"> 
                <div className="flex rounded-lg min-h-[calc(100vh-5rem)]">
                    <aside className="w-[240px] bg-white h-full shadow-sm min-h-[calc(100vh-8rem)]">
                        <PMCSidebar />
                    </aside> 
                    <div className="col pl-6">
                        <div className="container"> 
                            {children}    
                        </div>
                    </div>   
                </div>   
            </div>
        </>
    )
}
