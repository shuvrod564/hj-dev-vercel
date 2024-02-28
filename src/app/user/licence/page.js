import React from "react";
import { FiPlus, FiSave } from "react-icons/fi";

import { RiUploadCloud2Fill } from "react-icons/ri";
import UserLayout from "../UserLayout";

export const metadata = {
  title: "Licence & Membership",
};

export default function Page () {
  return (
    <UserLayout>
        <div className="container">
            <h1 className="h3 !mb-6 border-b border-border-color pb-3">
                Licence & Membership
            </h1>
          
            <div className="max-w-[800px]">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-10">
                    <div>
                        <label htmlFor="licence_name" className="text-sm block font-medium mb-2">
                            Licence Number <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="licence_name"
                            className="form-control" 
                        /> 
                    </div>  
                    <div className="">
                        <label htmlFor="width" className="text-sm block font-medium mb-2">
                            Licence Certificate
                        </label>
                        <label htmlFor="certificate" className="w-full border border-dashed border-border-color bg-[#f9f9f9] p-5 text-center block rounded-lg cursor-pointer relative"> 
                            <RiUploadCloud2Fill className="text-2xl mx-auto mb-1 text-primary" />
                            <span className="text-base text-muted">Upload File</span>
                            <input
                                type="file"
                                id="certificate"
                                className="absolute top-0 left-0 w-full h-full opacity-0"
                                placeholder="Width"
                            />
                        </label>
                    </div>
                     
                    
                    
                    <div className="md:col-span-2 mt-6 lg:mt-8">
                       
                        <div className="flex justify-between items-center border-b border-border-color pb-3">
                            <p className="text-2xl block font-medium mb-0">
                                Membership Details
                            </p> 
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="membership_name" className="text-sm block font-medium mb-2">
                            Membership Name: 
                        </label>
                        <input type="text" id="membership_name" className="form-control" /> 
                    </div>
                    <div className="">
                        <label htmlFor="membership_no" className="text-sm block font-medium mb-2">
                            Membership No.
                        </label>
                        <input type="text" id="membership_no" className="form-control" /> 
                    </div>
                    <div className="">
                        <label htmlFor="membership_doc" className="text-sm block font-medium mb-2">
                            Membership Document(If any)
                        </label>
                        <label htmlFor="membership_doc" className="w-full border border-dashed border-border-color bg-[#f9f9f9] p-5 text-center block rounded-lg cursor-pointer relative"> 
                            <RiUploadCloud2Fill className="text-2xl mx-auto mb-1 text-primary" />
                            <span className="text-base text-muted">Upload File</span>
                            <input
                                type="file"
                                id="membership_doc"
                                className="absolute top-0 left-0 w-full h-full opacity-0"
                                placeholder="Width"
                            />
                        </label>
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

 
