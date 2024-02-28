'use client'
import React from 'react'
import IBHLayout from '../IBHLayout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function PlanLayout({children}) {
    const router = usePathname();

    return (
        <IBHLayout>
            <div className="flex border-b border-border-color mb-5 -mx-4 sm:-mx-6 md:-mx-8 -mt-4 sm:-mt-6 md:-mt-8  bg-[#fbf6eb]">
                <Link href={"/ibh/planing"} className={`px-5 py-2 border-r border-border-color text-base ${router == '/ibh/planing' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>Information</Link>
                <Link href={"/ibh/planing/regulations"} className={`px-5 py-2 border-r border-border-color text-base ${router == '/ibh/planing/regulations' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>Regulations</Link>
                <Link href={"/ibh/planing/select-design"} className={`px-5 py-2 border-r border-border-color text-base ${router == '/ibh/planing/select-design' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>Select Design</Link>
                <Link href={"/ibh/planing/quote"} className={`px-5 py-2 border-r border-border-color text-base ${router == '/ibh/planing/quote' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>Ask for Quote</Link>
                <Link href={"/ibh/planing/buy"} className={`px-5 py-2 border-r border-border-color text-base ${router == '/ibh/planing/budget' ? 'text-dark bg-[#ffe5b1]' : 'text-[#445660]'}`}>Buy</Link>
            </div>
            
            <div className="mt-6">
                {children}
            </div>
        
        </IBHLayout>
    )
}
