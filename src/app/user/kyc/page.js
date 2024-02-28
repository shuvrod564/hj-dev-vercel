import React from "react";
import { FiSave } from "react-icons/fi";

import { RiUploadCloud2Fill } from "react-icons/ri";
import UserLayout from "../UserLayout";

export const metadata = {
  title: "KYC",
};

const page = () => {
  return (
    <UserLayout>
        <div className="container">
            <h1 className="h3 !mb-6 border-b border-border-color pb-3">
              KYC Details
            </h1>
          
            <div className="max-w-[800px]">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-10 items-end">
                    <div>
                        <label htmlFor="pan_number" className="text-sm block font-medium mb-2">
                        PAN Number
                        </label>
                        <input
                            type="text"
                            id="pan_number"
                            className="form-control"
                            placeholder="Enter PAN Number"
                        />
                        <div className="mt-4 md:mt-5">
                            <label htmlFor="width" className="text-sm block font-medium mb-2">
                                PAN Card Image
                            </label>
                            <label htmlFor="panfile" className="w-full border border-dashed border-border-color bg-[#f9f9f9] p-5 text-center block rounded-lg cursor-pointer relative"> 
                                <RiUploadCloud2Fill className="text-2xl mx-auto mb-1 text-primary" />
                                <span className="text-base text-muted">Choose File</span>
                                <input
                                    type="file"
                                    id="panfile"
                                    className="absolute top-0 w-full h-full opacity-0"
                                    placeholder="Width"
                                />
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="gst_number" className="text-sm block font-medium mb-2">
                            GST Number
                        </label>
                        <input
                            type="text"
                            id="gst_number"
                            className="form-control"
                            placeholder="Depth"
                        />
                        <div className="mt-4 md:mt-5">
                            <label htmlFor="width" className="text-sm block font-medium mb-2">
                                GST Certificate Image
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
                        </div>
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
