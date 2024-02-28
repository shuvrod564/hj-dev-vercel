'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'

export function BacktoPrevPage() {

    const router = useRouter();
    
    const backPrev =()=> {
        router.back();
    }

    return (
        <>
            <button type="button" onClick={backPrev} className="text-base font-semibold text-[#707070] mb-3 inline-flex items-center gap-1 hover:text-primary focus:text-primary">
              <FiChevronLeft className="text-lg md:text-xl lg:text-2xl" /> <span>back</span>
            </button>
        </>
    )
}
