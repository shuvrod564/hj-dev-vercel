'use client';
import React, { useEffect, useState } from 'react'
import { Button } from "@components/components/shared/Button";
import { FiSave } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UserInfo = () => {

    const { control, register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [houseBuilderLoggedInUserEmail, setHouseBuilderLoggedInUserEmail] = useState("");
    const [houseBuilderAccessToken, setHouseBuilderAccessToken] = useState("");

    useEffect(() => {
        const houseBuilderAccessToken = localStorage.getItem('houseBuilderAccessToken');
        const houseBuilderLoggedInUserEmail = localStorage.getItem('houseBuilderLoggedInUserEmail');
        setHouseBuilderLoggedInUserEmail(houseBuilderLoggedInUserEmail);
        setHouseBuilderAccessToken(houseBuilderAccessToken);

        handelgetUserInfo(houseBuilderLoggedInUserEmail);
        
    },[]);

    const handelgetUserInfo = async(email) => {
        try {
            setIsLoading(true)
            const url = process.env.NEXT_PUBLIC_API_URL+'/getUserByEmail';
            const res = await axios.post(
                url, 
                {
                    email: email
                },
                {
                    headers: {
                      Authorization: houseBuilderAccessToken, // Replace with your actual token
                      "Content-Type": "application/json",
                    },
                }
            );
            
            if(res.data.status == 'success'){
                setIsLoading(false);
                reset(res.data.data);
            }
            else{
                setApiError(res.data.message);
                setIsLoading(false);
            }
            setTimeout(() => {
                setSuccessMessage("");
            }, 2000);
        } catch (error) {
            if(error?.response?.data?.message){
                setApiError(error?.response?.data?.message);
            } else{
                setApiError('Somthing went wrong');
            }
            setIsLoading(false);
            setTimeout(() => {
                setSuccessMessage("");
            }, 2000);
        }
    }

    const handelUserInfo = async(formData) => {
        try {
            setIsLoading(true)
            const url = process.env.NEXT_PUBLIC_API_URL+'/updateUser';
            formData['email'] = houseBuilderLoggedInUserEmail;
            const res = await axios.post(url, formData);
            if(res.data.status == 'success'){
                setIsLoading(false);
                setSuccessMessage(res.data.message);
            }
            else{
                setApiError(res.data.message);
                setIsLoading(false);
            }
            setTimeout(() => {
                setSuccessMessage("");
            }, 2000);
        } catch (error) {
            if(error?.response?.data?.message){
                setApiError(error?.response?.data?.message);
            } else{
                setApiError('Somthing went wrong');
            }
            setIsLoading(false);
            setTimeout(() => {
                setSuccessMessage("");
            }, 2000);
        }
    }

    return (
        <div className="max-w-[800px]">
            <form onSubmit={handleSubmit(handelUserInfo)}>
                <div className=" min-h-[320px]"> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-10">
                        <div>
                            <label htmlFor="address" className="text-sm block font-medium mb-2">
                                Address  <span className="text-[red]">*</span>
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="form-control" 
                                {...register(`address`, { required: true })}
                            /> 
                            {errors.address && <p className='text-red pt-0.5'>Address is required.</p>}
                        </div>
                        <div>
                            <label htmlFor="pincode" className="text-sm block font-medium mb-2">
                                Pincode <span className="text-[red]">*</span>
                            </label>
                            <input
                                type="text"
                                id="pincode"
                                className="form-control" 
                                {...register(`pincode`, { required: true })}
                            /> 
                            {errors.pincode && <p className='text-red pt-0.5'>Pincode is required.</p>}
                        </div> 
                        {/* <div>
                            <label htmlFor="soilBear" className="text-sm block font-medium mb-2">
                                Soil Bearing Test  <span className="text-[red]">*</span>
                            </label>
                            <input
                                type="text"
                                id="soilBear"
                                className="form-control" 
                            /> 
                        </div>
                        <div>
                            <label htmlFor="pincode" className="text-sm block font-medium mb-2">
                                Upload Certificate of Soil Bearing test 
                            </label>
                            <label htmlFor="gstFile" className="w-full border border-dashed border-border-color bg-[#f9f9f9] p-5 text-center block rounded-lg cursor-pointer relative"> 
                                <RiUploadCloud2Fill className="text-2xl mx-auto mb-1 text-primary" />
                                <span className="text-base text-muted">Choose File</span>
                                <input
                                    type="file"
                                    id="gstFile"
                                    className="absolute top-0 w-full h-full opacity-0"
                                    placeholder="Width"
                                />
                            </label>
                        </div>  */}
                    </div>
                </div>
                {
                    ((apiError) || (successMessage)) && 
                    <div className='md:col-span-2'>
                        <p className={`p-4 md:p-5 rounded-lg border border-border-color bg-bg-light text-center ${ (apiError) ? 'text-red' : 'text-primary' } font-medium `}>{ (apiError) ? apiError : (successMessage) ? successMessage : '' }</p>
                    </div>
                    
                }
                <div className="mt-6 text-right">
                    <Button 
                        size="large" 
                        type="submit" 
                        text={ !isLoading ? "Save" : ''}
                        icon={
                            isLoading ?
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 inline-block"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.963 7.963 0 01-2-4.291H0c0 3.042 1.135 5.824 3 7.963l3-3.672zM12 20c2.085 0 3.978-.663 5.555-1.791l3 3.672A7.963 7.963 0 0120 17.291h-4c0 2.26-.879 4.348-2.334 5.93A10.018 10.018 0 0112 22a9.963 9.963 0 01-7.666-3.662A10.018 10.018 0 011 17.291l3-3.672A7.963 7.963 0 019 16.291h2a8 8 0 010 8z"
                                ></path>
                            </svg>
                            :
                            <FiSave />
                        }
                    />
                </div>
            </form>
        </div>
    )
}

export default UserInfo;
