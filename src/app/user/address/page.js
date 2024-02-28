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
                Address Information
            </h1>
          
            <div className="max-w-[800px]">

                <form>
                    <div className="mb-4">
                        <label htmlFor="line1" className="text-sm block font-medium mb-2">
                            Address Line 1 <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="line1"
                            className="form-control"
                            placeholder="Enter PAN Number"
                            required
                        /> 
                    </div>
                    <div className="mb-4">
                        <label htmlFor="line2" className="text-sm block font-medium mb-2">
                            Address Line 2 <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="line2"
                            className="form-control"
                            placeholder="Enter PAN Number"
                        /> 
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="pin_code" className="text-sm block font-medium mb-2">
                                PIN Code <span className="text-[red]">*</span>
                            </label>
                            <input
                                type="text"
                                id="pin_code"
                                className="form-control" 
                            /> 
                        </div>
                        <div>
                            <label htmlFor="district" className="text-sm block font-medium mb-2">
                                District 
                            </label>
                            <input
                                type="text"
                                id="district"
                                className="form-control" 
                            /> 
                        </div>
                        <div>
                            <label htmlFor="state" className="text-sm block font-medium mb-2">
                                State 
                            </label>
                            <input
                                type="text"
                                id="state"
                                className="form-control" 
                            /> 
                        </div>
                    </div>
                     
                    
                    <div className="text-right mt-7 lg:mt-9">
                        <button className="text-base font-mediem px-5 md:px-8 py-2 inline-flex items-center bg-primary text-dark rounded-md hover:bg-dark hover:text-white">
                            <FiSave className="mr-2" />
                            Save
                        </button>
                    </div>
                </form>
            </div>
            {/* max */}
        </div>
      
    </UserLayout>
  );
};

export default page;
