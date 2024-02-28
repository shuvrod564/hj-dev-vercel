import React from 'react'
import { PMCLayout } from '../PMCLayout'
import Link from 'next/link'
import Image from 'next/image'
import { IoArrowForward } from 'react-icons/io5'

const data = [
    {
        title: "Civil",
        value: "Civil",
        icon: "",
    },
    {
        title: "Electrical - cabling, switches & fixtures",
        value: "Electrical",
        icon: "",
    },
    {
        title: "Plumbing & sanitary",
        value: "plumbing-sanitary",
        icon: "",
    },
    {
        title: "Tiling",
        value: "Tiling",
        icon: "",
    },
    {
        title: "Painting",
        value: "Painting",
        icon: "",
    },
    {
        title: "Door/Window",
        value: "Door-Window",
        icon: "",
    },
    {
        title: "Grills",
        value: "Grills",
        icon: "",
    },
    {
        title: "Solar",
        value: "Solar",
        icon: "",
    },
    {
        title: "Landscaping",
        value: "Landscaping",
        icon: "",
    },
]

export default function Page(props) {
    

    return (
        <PMCLayout>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow">
                <h1 className="mb-4 text-xl md:text-2xl font-bold text-dark">Choose your services</h1>
                <form>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {
                            data.map((item,index)=> {
                                return(
                                    <li key={index} className="border border-[#eee] bg-bg-light rounded-lg p-4 md:px-5 flex items-center gap-4">
                                        <input type="checkbox" className="form-check-input" id={item.value} />
                                        <label htmlFor={item.value} className="text-dark">{item.title}</label>
                                    </li>
                                )
                            })
                        } 
                    </ul>
                    <div className="mt-6">
                        <button type="submit" className="btn-primary gap-3">
                            <span>Next</span> <IoArrowForward className="text-lg" />
                        </button>
                    </div>
                </form>
            </div>
             
        </PMCLayout>
    )
}
