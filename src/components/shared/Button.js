import React from 'react'
import { FiSave } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'

export function Button({className, text, icon, size="", ...restProps}) {
    

    return (
        <button 
            className={twMerge(`text-base font-medium px-5 md:px-5 py-2 inline-flex gap-2 items-center bg-primary text-dark rounded-md hover:bg-dark hover:text-white transition-all .3s ease-in-out ${ size=='large' ? "text-base md:text-lg xl:text-xl py-3.5" : "" }`, className)}
          
            {...restProps}
        >
            {/* <FiSave className="mr-2" /> */}
            {icon}
            {text}
        </button>
    )
}
