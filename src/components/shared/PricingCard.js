import Link from 'next/link'
import React from 'react' 
import { IoIosCloseCircle } from "react-icons/io";
import { FaCircleCheck } from 'react-icons/fa6';

export function PricingCard({data}) {
    

    return (
        <> 
            <div className=" shadow-[0_4px_20px_0px_rgba(0,0,0,0.1)] p-4 xl:p-7 rounded-lg">
                <h3 className="text-xl font-bold text-dark mb-4 md:mb-5">{data.name}</h3>
                {/* <p className="text-muted text-xs md:text-sm mb-4">{data.description}</p> */}
                <div className="mb-7"> 
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-2">
                        {
                            data.price == 'Custom' ? (
                                <span>{data.price}</span>
                            ) : (
                                <>
                                    <span>&#8377;</span>
                                    <span>{data.price}</span>  
                                </>
                            )
                        }
                        {
                            data.price == 'Custom' ? (
                                <span></span>
                            ) : (
                                <>
                                    <span className="font-normal text-muted text-base pl-2">{data.priceinfo.type}</span>  
                                </>
                            )
                        }
                    </div>
                    
                </div>
                <div className="mt-4 mb-6">
                    <Link href={"/contact"} className="btn-primary flex justify-center w-full text-center">
                        Get Started
                    </Link>
                </div>
                <p className="text-lg font-semibold text-dark">{data.featuretagline}</p>
                <ul className="flex flex-col gap-2 text-sm md:text-base text-[rgba(0,0,0,0.75)]">
                    {
                        data.features.map((item, inx)=> {
                            return (
                                <li key={inx} className="flex ">
                                    <figure className="w-7 relative top-1">
                                        {
                                            item.status == 'no' ? ( 
                                                <IoIosCloseCircle className="text-[#ee2028] text-[22px]" />
                                            ) : (
                                                <FaCircleCheck className=" text-[#0ba352] text-lg" /> 
                                            )
                                        }
                                    </figure>
                                    <span className="col">{item.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
