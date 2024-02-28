'use client'
import React, { useState } from 'react'
import { Radio, Space } from 'antd';
const ServiceProviderFilter = () => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  return (
    <div className=''>
        <p className="text-base md:text-lg font-semibold text-dark">Filter</p>
        <p className="text-base md:text-lg font-bold text-dark">Service Type</p>

        
        <div>
            <Radio.Group onChange={onChange} value={value} direction="vertical">
                <Space direction="vertical"> 
                    <Radio value={1}>Architecture design</Radio>
                    <Radio value={2}>Supplier</Radio>
                    <Radio value={3}>Project management</Radio> 
                </Space>
            </Radio.Group>
        </div>
    

    </div>
  )
}

export default ServiceProviderFilter
