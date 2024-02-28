'use client' 
import { PricingCard } from '@components/components/shared/PricingCard'
import React, { useState } from 'react'

export function Pricing({monthlyData, quarterlyData, yearlyData, page=''}) {
    const [plan_type, setPlanType] = useState('monthly')
     

    return (
        <div className="py-10 lg:py-12 xl:py-16 md:mb-20 mb-12">
            <div className="container">
                <div className="flex justify-between mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-lg p-1 max-w-[450px]">
                    <button 
                    type="button"
                    onClick={()=>setPlanType('monthly')}
                    className={`
                         py-3 w-[calc(33.333%-3px)] rounded-lg font-semibold text-sm sm:text-base lg:text-lg text-[#707070] bg-[#f5f5f5] uppercase transition-all duration-300 hover:bg-[#f5f5f5] hover:text-dark
                        ${plan_type == 'monthly' ? '!bg-primary text-dark hover:!bg-primary' : null}
                    `}>
                        Monthly
                    </button>
                    <button 
                    type="button"
                    onClick={()=>setPlanType('quarterly')}
                    className={`
                         py-3 w-[calc(33.333%-3px)] rounded-lg font-semibold text-sm sm:text-base lg:text-lg text-[#707070] bg-[#f5f5f5] uppercase transition-all duration-300 hover:bg-[#f5f5f5] hover:text-dark
                        ${plan_type == 'quarterly' ? '!bg-primary text-dark hover:!bg-primary' : null}
                    `}>
                        Quarterly
                    </button>
                    <button 
                    type="button"
                    onClick={()=>setPlanType('yearly')}
                    className={`
                         py-3 w-[calc(33.333%-3px)] rounded-lg font-semibold text-sm sm:text-base lg:text-lg text-[#707070] bg-[#f5f5f5] uppercase transition-all duration-300 hover:bg-[#f5f5f5] hover:text-dark
                        ${plan_type == 'yearly' ? '!bg-primary text-dark hover:!bg-primary' : null}
                    `}>
                        Yearly
                    </button>
                </div>

                <div className={`
                    ${page == 'service-provider' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-3 gap-y-7 lg:gap-8 mt-12 max-w-[900px] mx-auto' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-7 lg:gap-8 mt-12'}
                `}>
                    {
                        plan_type == 'monthly' && ( 
                            monthlyData.map((item, index)=>{ 
                                return(
                                    <PricingCard data={item} key={index} />
                                )
                            })
                        )
                    }
                    {
                        plan_type == 'quarterly' && ( 
                            quarterlyData.map((item, index)=>{ 
                                return(
                                    <PricingCard data={item} key={index} />
                                )
                            })
                        )
                    }
                    {
                        plan_type == 'yearly' && ( 
                            yearlyData.map((item, index)=>{ 
                                return(
                                    <PricingCard data={item} key={index} />
                                )
                            })
                        )
                    }
                </div>

            </div>
        </div>
    )
}
