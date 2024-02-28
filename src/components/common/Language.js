'use client'
import React from 'react';
import { TbGlobeFilled } from 'react-icons/tb'
 
import { Select, Space } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
const Language = () => (
  <div className="inline-flex items-center">
    <TbGlobeFilled className="-mr-2 text-[#434343] text-xl lg:text-base" />
    <Select
        className="text-dark font-bold" 
        variant="borderless"
        defaultValue="en"
        style={{
            width: 90,
        }}
        onChange={handleChange}
        options={[
            {
            value: 'en',
            label: 'English',
            },
            {
            value: 'hin',
            label: 'हिन्दी',
            },
            {
            value: 'bn',
            label: 'বাংলা',
            }, 
        ]}
    />
  </div>
);
export default Language;
