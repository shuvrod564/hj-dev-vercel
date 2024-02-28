import React from "react";
import { FiPlus, FiSave } from "react-icons/fi";

import { RiUploadCloud2Fill } from "react-icons/ri";
import UserLayout from "../UserLayout";

export const metadata = {
  title: "Business Page",
};

const page = () => {
  return (
    <UserLayout>
        <div className="container">
            <h1 className="h3 !mb-6 border-b border-border-color pb-3">
                Business Page
            </h1>
          
            <div className="max-w-[800px]">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-10">
                    <div>
                        <label htmlFor="acc_holder_name" className="text-sm block font-medium mb-2">
                            Catalogue Name <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="acc_holder_name"
                            className="form-control" 
                        /> 
                    </div>
                    <div>
                        <label htmlFor="acc_number" className="text-sm block font-medium mb-2">
                            Location <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="acc_number"
                            className="form-control" 
                        /> 
                    </div>
                    <div>
                        <label htmlFor="ifsc_number" className="text-sm block font-medium mb-2">
                            Office Address <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="ifsc_number"
                            className="form-control" 
                        /> 
                    </div>
                    <div>
                        <label htmlFor="bank_name" className="text-sm block font-medium mb-2">
                            Working Days 
                        </label>
                        <input
                            type="text"
                            id="bank_name"
                            className="form-control" 
                        /> 
                    </div> 
                    <div className="">
                        <label htmlFor="width" className="text-sm block font-medium mb-2">
                            Logo
                        </label>
                        <label htmlFor="cancelledCheque" className="w-full border border-dashed border-border-color bg-[#f9f9f9] p-5 text-center block rounded-lg cursor-pointer relative"> 
                            <RiUploadCloud2Fill className="text-2xl mx-auto mb-1 text-primary" />
                            <span className="text-base text-muted">Upload File</span>
                            <input
                                type="file"
                                id="cancelledCheque"
                                className="absolute top-0 w-full h-full opacity-0"
                                placeholder="Width"
                            />
                        </label>
                    </div>
                    <div className="">
                        <label htmlFor="width" className="text-sm block font-medium mb-2">
                            Banner
                        </label>
                        <label htmlFor="banner" className="w-full border border-dashed border-border-color bg-[#f9f9f9] p-5 text-center block rounded-lg cursor-pointer relative"> 
                            <RiUploadCloud2Fill className="text-2xl mx-auto mb-1 text-primary" />
                            <span className="text-base text-muted">Upload File</span>
                            <input
                                type="file"
                                id="banner"
                                className="absolute top-0 w-full h-full opacity-0"
                                placeholder="Width"
                            />
                        </label>
                    </div>
                    <div className="">
                        <label htmlFor="width" className="text-sm block font-medium mb-2">
                            Services provided by the firm
                        </label>
                        <select name="service" id="service" className="form-control">
                            <option value="service 1">Service 1</option>
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="width" className="text-sm block font-medium mb-2">
                            Social Media Links
                        </label>
                        <div className="flex">
                            <div className="w-[calc(100%-36px)] pr-3"> 
                                <input type="text" className="form-control" />
                            </div>
                            <button className="w-9 h-10 inline-flex justify-center items-center rounded-md border border-primary">
                                <FiPlus />
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="width" className="text-sm block font-medium mb-2">
                            Social Media Links
                        </label>
                        <input type="text" className="form-control" /> 
                    </div>
                    <div className="md:col-span-2 mt-6 lg:mt-8">
                       
                        <div className="flex justify-between items-center border-b border-border-color pb-3">
                            <p className="text-2xl block font-medium mb-0">
                                Branch Details
                            </p>
                            <button className="w-9 h-10 inline-flex justify-center items-center rounded-md border border-primary">
                                <FiPlus />
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="acc_holder_name" className="text-sm block font-medium mb-2">
                            Branch Name <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="acc_holder_name"
                            className="form-control" 
                        /> 
                    </div>
                    <div>
                        <label htmlFor="acc_number" className="text-sm block font-medium mb-2">
                            Branch Address <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="acc_number"
                            className="form-control" 
                        /> 
                    </div>
                    <div>
                        <label htmlFor="acc_number" className="text-sm block font-medium mb-2">
                            Pincode <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="acc_number"
                            className="form-control" 
                        /> 
                    </div>
                     
                    
                    <div className="md:col-span-2 text-right mt-7 lg:mt-9">
                        <button className="text-base font-mediem px-5 md:px-8 py-2 inline-flex items-center bg-primary text-dark rounded-md hover:bg-dark hover:text-white">
                            <FiSave className="mr-2" />
                            Save
                        </button>
                    </div>
                </div>
            </div>
            {/* max */}
        </div>
      
    </UserLayout>
  );
};

export default page;
