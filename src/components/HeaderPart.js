'use client'
import { Button } from '@components/components/shared/Button'
import { DesignLiberyFilter } from '@components/components/DesignLiberyFilter'
import React, { useState } from 'react'
import { LuSettings2 } from 'react-icons/lu';
import { MdOutlineClose } from 'react-icons/md';

export function HeaderPart({title}) {
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <>
           <div className="flex justify-between items-center border-b border-border-color pb-3 mb-5">
                <h1 className="text-lg font-semibold">{title}</h1>
                <Button
                    icon={<LuSettings2 />}
                    text="Filters"
                    type="button"
                    onClick={()=>setOpenFilter(!openFilter)}
                /> 
            </div>

            {/* filter */}
            <div className={`absolute top-0 left-0 w-full bg-white shadow-lg p-4 lg:p-5 transition-all duration-300 
                ${openFilter ? "translate-y-0 visible" : "invisible -translate-y-64" }
                `}
            >
                <Button 
                    icon={<MdOutlineClose />} 
                    type="button" 
                    onClick={()=>setOpenFilter(!openFilter)} 
                    className={"rounded-none !px-2 absolute top-0 right-0"}
                />

                <p>{title} - Filter</p>
                <DesignLiberyFilter />
            </div> 
        </>
    )
}
