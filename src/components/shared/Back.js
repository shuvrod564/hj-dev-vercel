'use client'
import React from 'react'
import { IoChevronBackCircleSharp } from 'react-icons/io5'

export function Back() {
    const backToPrev =()=> {
        window.history.back();
    }

    return (
        <button className="p-0 inline-flex items-center gap-2 mb-4 text-muted hover:text-primary"
            onClick={backToPrev}
        >
            <IoChevronBackCircleSharp className="text-dark" /> 
            <span className="text-base">Back</span>
        </button>
    )
}
