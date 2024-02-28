'use client'
import React from 'react'
import Select from 'react-select';
export function CustomSelect({options}) {
    

    return (
        <>
            <Select
                // defaultValue={selectedOption}
                // onChange={setSelectedOption}
                options={options}
                className="text-base h-10 rounded-lg"
            />
        </>
    )
}
