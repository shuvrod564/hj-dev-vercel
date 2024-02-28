'use client'
import { Select } from 'antd'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {useForm, Controller } from "react-hook-form";

export function ServiceProviderContactForm(props) {
    const [loader, setloader] = useState(false); 
    const {register,handleSubmit, control, reset, formState: { errors }}=useForm();
    const router = useRouter();

    const onSubmitForm= async(data)=>{
        setloader(true)
        try {
            const response = await fetch('/api/service-provider-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(data)
            });

            // Handle the response from the server
            const result = await response.json();
            // console.log('response',result);
            
            if(result.message == 'success') {
                router.push('/success');
                setloader(false)
            }
             
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)} className="grid grid-cols-1 gap-4 lg:gap-y-5">
                <div>
                    <label htmlFor="entity_name" className="block text-sm mb-2 text-[#393838]">Entity Name</label>
                    <input
                        type="text"
                        id="entity_name"
                        className="form-control"
                        placeholder="Enter entity name"
                        {...register('entity_name', { required: 'Name is required' })}
                    />
                    {errors && errors.entity_name && (
                        <span className="text-sm mt-0.5 text-left" style={{ color: "red" }}>
                        {errors.entity_name.message}
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="entity_type" className="block text-sm mb-2 text-[#393838]">Entity Type</label>
                    <input
                        type="text"
                        id="entity_type"
                        className="form-control"
                        placeholder="Enter entity type"
                        {...register('entity_type', { required: 'Type is required' })}
                    />
                    {errors && errors.entity_type && (
                        <span className="text-sm mt-0.5 text-left" style={{ color: "red" }}>
                        {errors.entity_type.message}
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm mb-2 text-[#393838]">Location</label>
                    <input
                        type="text"
                        id="location"
                        className="form-control"
                        placeholder="Enter location"
                        {...register('location', { required: 'Location is required' })}
                    />
                    {errors && errors.location && (
                        <span className="text-sm mt-0.5 text-left" style={{ color: "red" }}>
                        {errors.location.message}
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-[#393838]">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        className="form-control"
                        placeholder="Enter phone number"
                        { ...register('phone', { 
                            required: 'Phone number required',
                            pattern: {
                                value: /^\d{10,14}$/, 
                                message: 'Phone number must be between 10 and 14 digits'
                            }
                        }) }
                    />
                    {errors && errors.phone && (
                        <span className="text-sm mt-0.5 text-left" style={{ color: "red" }}>
                        {errors.phone.message}
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-[#393838]">Email Address</label>
                    <input
                        type="text"
                        id="phone"
                        className="form-control"
                        placeholder="Enter email"
                        { ...register('email', { 
                            required: 'Email required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "invalid email address"
                            } 
                        }) }
                    />
                    {errors && errors.email && (
                        <span className="text-sm mt-0.5 text-left" style={{ color: "red" }}>
                        {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="text-right">
                    
                    <button type="submit" className="btn-primary tracking-wider md:!px-10 md:!py-4 md:!text-lg gap-3">
                        {
                            loader && ( 
                                <span aria-label="Loading..." role="status">
                                    <svg class="animate-spin w-6 h-6 fill-slate-800" viewBox="3 3 18 18">
                                        <path fill="#fff" class="opacity-20" d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z">
                                        </path>
                                        <path fill="#fff" d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z">
                                        </path>
                                    </svg>
                                </span>
                            )
                        }

                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}
